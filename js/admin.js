// js/admin.js
const Admin = {
  _initialized: false,

  init() {
    if (Admin._initialized) return;
    Admin._initialized = true;
    Admin.showTab('users');
    Admin.loadUsers();
    Admin.renderModules();
  },

  showTab(tab) {
    document.getElementById('adminPaneUsers').style.display    = tab === 'users'   ? 'block' : 'none';
    document.getElementById('adminPaneModules').style.display  = tab === 'modules' ? 'block' : 'none';
    document.getElementById('adminTabUsers').classList.toggle('active',   tab === 'users');
    document.getElementById('adminTabModules').classList.toggle('active', tab === 'modules');
  },

  async loadUsers() {
    const pane = document.getElementById('adminPaneUsers');
    pane.innerHTML = '<p class="placeholder-text">Loading users…</p>';
    try {
      const snap = await firebase.firestore().collection('users').get();
      const users = snap.docs.map(d => d.data());
      Admin._renderUserTable(users);
    } catch (e) {
      pane.innerHTML = `<p style="color:var(--red-text)">Failed to load users: ${e.message}</p>`;
    }
  },

  _renderUserTable(users) {
    const pane = document.getElementById('adminPaneUsers');
    if (!users.length) {
      pane.innerHTML = '<p class="placeholder-text">No users yet. Users appear here after their first sign-in.</p>';
      return;
    }
    pane.innerHTML = `
      <div class="admin-user-table">
        <div class="admin-table-head">
          <span>Name</span><span>Email</span><span>Role</span><span></span>
        </div>
        ${users.map(u => `
          <div class="admin-table-row" id="urow-${CSS.escape(u.email)}">
            <span class="admin-user-name">${u.name || '—'}</span>
            <span class="admin-user-email">${u.email}</span>
            <select class="admin-role-select" data-email="${u.email}">
              <option value="learner"  ${u.role === 'learner'  ? 'selected' : ''}>Learner</option>
              <option value="manager"  ${u.role === 'manager'  ? 'selected' : ''}>Manager</option>
              <option value="admin"    ${u.role === 'admin'    ? 'selected' : ''}>Admin</option>
            </select>
            <button class="btn-outline btn-sm" onclick="Admin.saveRole('${u.email}', this)">Save</button>
          </div>`).join('')}
      </div>`;
  },

  async saveRole(email, btn) {
    const row = document.getElementById(`urow-${CSS.escape(email)}`);
    const select = row.querySelector('.admin-role-select');
    const role = select.value;
    btn.disabled = true;
    btn.textContent = 'Saving…';
    try {
      await firebase.firestore().collection('users').doc(email).update({ role });
      btn.textContent = 'Saved ✓';
      setTimeout(() => { btn.textContent = 'Save'; btn.disabled = false; }, 2000);
      App.toast(`Updated ${email} to ${role}`);
    } catch (e) {
      btn.textContent = 'Error';
      btn.disabled = false;
      App.toast('Failed to save role');
    }
  },

  renderModules() {
    const pane = document.getElementById('adminPaneModules');
    pane.innerHTML = `
      <div class="admin-module-list">
        ${Object.values(MODULES).map(m => `
          <div class="admin-module-item">
            <div class="admin-module-header" onclick="Admin.toggleModule('${m.key}', this)">
              <div class="admin-module-title">
                <div class="mod-icon-sm" style="background:${m.iconBg}"><i class="ti ${m.icon}" style="color:${m.iconColor}"></i></div>
                ${m.title}
              </div>
              <i class="ti ti-chevron-down admin-chevron"></i>
            </div>
            <div class="admin-module-topics" id="modtopics-${m.key}" style="display:none">
              ${m.topics.map((t, i) => `
                <div class="admin-topic-editor">
                  <div class="admin-topic-label">${i + 1}. ${t}</div>
                  <textarea class="admin-topic-textarea" id="topicta-${m.key}-${i}" rows="6">${(m.topicContent && m.topicContent[i]) || ''}</textarea>
                  <button class="btn-primary btn-sm" onclick="Admin.saveTopic('${m.key}', ${i})">Save content</button>
                  <span class="admin-save-status" id="savestatus-${m.key}-${i}"></span>
                </div>`).join('')}
            </div>
          </div>`).join('')}
      </div>`;
    // Load any saved content from Firestore
    Admin._loadModuleContent();
  },

  async _loadModuleContent() {
    try {
      const snap = await firebase.firestore().collection('moduleContent').get();
      snap.docs.forEach(doc => {
        const ta = document.getElementById(`topicta-${doc.id}`);
        if (ta) ta.value = doc.data().content || '';
      });
    } catch (e) { /* ignore */ }
  },

  toggleModule(key, headerEl) {
    const pane = document.getElementById(`modtopics-${key}`);
    const chevron = headerEl.querySelector('.admin-chevron');
    const isOpen = pane.style.display !== 'none';
    pane.style.display = isOpen ? 'none' : 'block';
    chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
  },

  async saveTopic(key, index) {
    const ta = document.getElementById(`topicta-${key}-${index}`);
    const status = document.getElementById(`savestatus-${key}-${index}`);
    const content = ta.value;
    status.textContent = 'Saving…';
    try {
      await firebase.firestore().collection('moduleContent').doc(`${key}-${index}`).set({ content });
      status.textContent = 'Saved ✓';
      setTimeout(() => { status.textContent = ''; }, 2000);
      App.toast('Content saved');
    } catch (e) {
      status.textContent = 'Error saving';
      App.toast('Failed to save content');
    }
  },
};
