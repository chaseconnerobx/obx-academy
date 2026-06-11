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
    document.getElementById('adminPaneUsers').style.display   = tab === 'users'   ? 'block' : 'none';
    document.getElementById('adminPaneModules').style.display = tab === 'modules' ? 'block' : 'none';
    document.getElementById('adminTabUsers').classList.toggle('active',   tab === 'users');
    document.getElementById('adminTabModules').classList.toggle('active', tab === 'modules');
  },

  async loadUsers() {
    const pane = document.getElementById('adminPaneUsers');
    pane.innerHTML = '<p class="placeholder-text">Loading users…</p>';
    try {
      const snap  = await firebase.firestore().collection('users').get();
      const users = snap.docs.map(d => d.data());
      Admin._renderUserTable(users);
    } catch (e) {
      pane.innerHTML = `<p style="color:var(--red-text)">Failed to load users: ${e.message}</p>`;
    }
  },

  _renderUserTable(users) {
    const pane = document.getElementById('adminPaneUsers');
    if (!users.length) {
      pane.innerHTML = '<p class="placeholder-text">No users yet. They appear here after their first sign-in.</p>';
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
    const row    = document.getElementById(`urow-${CSS.escape(email)}`);
    const select = row.querySelector('.admin-role-select');
    const role   = select.value;
    btn.disabled    = true;
    btn.textContent = 'Saving…';
    try {
      await firebase.firestore().collection('users').doc(email).update({ role });
      btn.textContent = 'Saved ✓';
      setTimeout(() => { btn.textContent = 'Save'; btn.disabled = false; }, 2000);
      App.toast(`Updated ${email} to ${role}`);
    } catch (e) {
      btn.textContent = 'Error';
      btn.disabled    = false;
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
              ${m.topics.map((t, i) => Admin._topicEditorHTML(m.key, i, t)).join('')}
            </div>
          </div>`).join('')}
      </div>`;
    Admin._loadModuleContent();
  },

  _topicEditorHTML(key, i, title) {
    return `
      <div class="admin-topic-editor">
        <div class="admin-topic-label">${i + 1}. ${title}</div>

        <textarea class="admin-topic-textarea" id="topicta-${key}-${i}" rows="8"
          placeholder="Write lesson content here. Plain text or HTML both work."></textarea>

        <div class="admin-media-fields">
          <div class="admin-media-field">
            <div class="admin-media-label"><i class="ti ti-photo"></i> Screenshot URL (optional)</div>
            <input type="url" class="form-input" id="topicimg-${key}-${i}" placeholder="https://…" />
          </div>
          <div class="admin-media-field">
            <div class="admin-media-label"><i class="ti ti-video"></i> Loom video URL (optional)</div>
            <input type="url" class="form-input" id="topicvideo-${key}-${i}" placeholder="https://www.loom.com/share/…" />
          </div>
        </div>

        <div class="admin-section-label">Key takeaways <span class="admin-hint">(one per line — shown as summary card)</span></div>
        <textarea class="admin-topic-textarea" id="topicta-${key}-${i}-takeaways" rows="3"
          placeholder="LegitScript certification is client-owned&#10;Renewals are annual — lapses cause disapprovals"></textarea>

        <div class="admin-section-label">Interactive element <span class="admin-hint">(optional quick check)</span></div>
        <select class="admin-role-select" id="topicinteract-${key}-${i}" style="width:100%;height:36px;margin-bottom:10px"
          onchange="Admin.toggleInteractFields('${key}', ${i})">
          <option value="none">None</option>
          <option value="mcq">Multiple choice</option>
          <option value="truefalse">True / False</option>
          <option value="reveal">Click-to-reveal cards</option>
        </select>

        <div id="topicfields-${key}-${i}" style="display:none">
          <!-- MCQ fields -->
          <div id="mcqfields-${key}-${i}" style="display:none">
            <input class="form-input" style="margin-bottom:8px" id="mcqq-${key}-${i}" placeholder="Question" />
            ${[0,1,2,3].map(n => `
              <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
                <input type="radio" name="mcqcorrect-${key}-${i}" value="${n}" id="mcqr-${key}-${i}-${n}" />
                <input class="form-input" style="flex:1" id="mcqopt-${key}-${i}-${n}" placeholder="Option ${String.fromCharCode(65+n)}" />
              </div>`).join('')}
            <input class="form-input" style="margin-top:4px" id="mcqexp-${key}-${i}" placeholder="Explanation (shown after answer)" />
          </div>
          <!-- T/F fields -->
          <div id="tffields-${key}-${i}" style="display:none">
            <input class="form-input" style="margin-bottom:8px" id="tfstatement-${key}-${i}" placeholder="Statement" />
            <label style="font-size:13px;display:flex;align-items:center;gap:8px;margin-bottom:8px">
              <input type="checkbox" id="tfanswer-${key}-${i}" /> Correct answer is True
            </label>
            <input class="form-input" id="tfexp-${key}-${i}" placeholder="Explanation (shown after answer)" />
          </div>
          <!-- Reveal card fields -->
          <div id="revealfields-${key}-${i}" style="display:none">
            ${[0,1,2,3].map(n => `
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
                <input class="form-input" id="revealfront-${key}-${i}-${n}" placeholder="Card ${n+1} front (term)" />
                <input class="form-input" id="revealback-${key}-${i}-${n}" placeholder="Card ${n+1} back (definition)" />
              </div>`).join('')}
          </div>
        </div>

        <div class="admin-topic-actions">
          <button class="btn-primary btn-sm" onclick="Admin.saveTopic('${key}', ${i})">Save</button>
          <span class="admin-save-status" id="savestatus-${key}-${i}"></span>
        </div>
      </div>`;
  },

  toggleInteractFields(key, i) {
    const type      = document.getElementById(`topicinteract-${key}-${i}`).value;
    const wrapper   = document.getElementById(`topicfields-${key}-${i}`);
    const mcq       = document.getElementById(`mcqfields-${key}-${i}`);
    const tf        = document.getElementById(`tffields-${key}-${i}`);
    const reveal    = document.getElementById(`revealfields-${key}-${i}`);
    wrapper.style.display = type === 'none' ? 'none' : 'block';
    mcq.style.display     = type === 'mcq'       ? 'block' : 'none';
    tf.style.display      = type === 'truefalse' ? 'block' : 'none';
    reveal.style.display  = type === 'reveal'    ? 'block' : 'none';
  },

  async _loadModuleContent() {
    try {
      const snap = await firebase.firestore().collection('moduleContent').get();
      snap.docs.forEach(doc => {
        const d  = doc.data();
        const id = doc.id;
        const set = (suffix, val) => { const el = document.getElementById(`${suffix}-${id}`); if (el) el.value = val || ''; };
        set('topicta',    d.content);
        set('topicimg',   d.imageUrl);
        set('topicvideo', d.videoUrl);
        if (document.getElementById(`topicta-${id}-takeaways`)) {
          document.getElementById(`topicta-${id}-takeaways`).value = (d.takeaways || []).join('\n');
        }
        if (d.interactions && d.interactions.length) {
          const item    = d.interactions[0];
          const selEl   = document.getElementById(`topicinteract-${id}`);
          if (selEl) {
            selEl.value = item.type;
            Admin.toggleInteractFields(...id.split('-'));
            if (item.type === 'mcq') {
              set('mcqq',   item.question);
              set('mcqexp', item.explanation);
              (item.options || []).forEach((opt, n) => { set(`mcqopt-${id.split('-').slice(0,-1).join('-')}-${id.split('-').pop()}`, ''); });
              // Populate options correctly
              const [k, ti] = id.split('-');
              (item.options || []).forEach((opt, n) => {
                const el = document.getElementById(`mcqopt-${k}-${ti}-${n}`);
                if (el) el.value = opt;
              });
              const radio = document.getElementById(`mcqr-${id}-${item.correct}`);
              if (radio) radio.checked = true;
            } else if (item.type === 'truefalse') {
              set('tfstatement', item.statement);
              set('tfexp',       item.explanation);
              const cb = document.getElementById(`tfanswer-${id}`);
              if (cb) cb.checked = item.answer === true;
            } else if (item.type === 'reveal') {
              const [k, ti] = id.split('-');
              (item.cards || []).forEach((card, n) => {
                const f = document.getElementById(`revealfront-${k}-${ti}-${n}`);
                const b = document.getElementById(`revealback-${k}-${ti}-${n}`);
                if (f) f.value = card.front || '';
                if (b) b.value = card.back  || '';
              });
            }
          }
        }
      });
    } catch (e) { /* ignore */ }
  },

  toggleModule(key, headerEl) {
    const pane    = document.getElementById(`modtopics-${key}`);
    const chevron = headerEl.querySelector('.admin-chevron');
    const isOpen  = pane.style.display !== 'none';
    pane.style.display      = isOpen ? 'none' : 'block';
    chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
  },

  async saveTopic(key, index) {
    const status = document.getElementById(`savestatus-${key}-${index}`);
    status.textContent = 'Saving…';

    const content  = document.getElementById(`topicta-${key}-${index}`).value;
    const imageUrl = (document.getElementById(`topicimg-${key}-${index}`)   || {}).value || '';
    const videoUrl = (document.getElementById(`topicvideo-${key}-${index}`) || {}).value || '';
    const rawTA    = (document.getElementById(`topicta-${key}-${index}-takeaways`) || {}).value || '';
    const takeaways = rawTA.split('\n').map(l => l.trim()).filter(Boolean);

    const type = (document.getElementById(`topicinteract-${key}-${index}`) || {}).value || 'none';
    let interactions = [];

    if (type === 'mcq') {
      const question   = (document.getElementById(`mcqq-${key}-${index}`)   || {}).value || '';
      const explanation = (document.getElementById(`mcqexp-${key}-${index}`) || {}).value || '';
      const options    = [0,1,2,3].map(n => (document.getElementById(`mcqopt-${key}-${index}-${n}`) || {}).value || '');
      const correctEl  = document.querySelector(`input[name="mcqcorrect-${key}-${index}"]:checked`);
      const correct    = correctEl ? parseInt(correctEl.value) : 0;
      if (question) interactions.push({ type: 'mcq', question, options, correct, explanation });
    } else if (type === 'truefalse') {
      const statement   = (document.getElementById(`tfstatement-${key}-${index}`) || {}).value || '';
      const explanation = (document.getElementById(`tfexp-${key}-${index}`)       || {}).value || '';
      const answer      = (document.getElementById(`tfanswer-${key}-${index}`)    || {}).checked || false;
      if (statement) interactions.push({ type: 'truefalse', statement, answer, explanation });
    } else if (type === 'reveal') {
      const cards = [0,1,2,3].map(n => ({
        front: (document.getElementById(`revealfront-${key}-${index}-${n}`) || {}).value || '',
        back:  (document.getElementById(`revealback-${key}-${index}-${n}`)  || {}).value || '',
      })).filter(c => c.front);
      if (cards.length) interactions.push({ type: 'reveal', cards });
    }

    try {
      await firebase.firestore().collection('moduleContent').doc(`${key}-${index}`).set({
        content, imageUrl, videoUrl, takeaways, interactions,
      });
      status.textContent = 'Saved ✓';
      setTimeout(() => { status.textContent = ''; }, 2500);
      App.toast('Content saved');
    } catch (e) {
      status.textContent = 'Error saving';
      App.toast('Failed to save');
    }
  },
};
