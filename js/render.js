// js/render.js
const Render = {

  dashStats() {
    const pending = State.submissions.filter(s => !s.reviewed).length;
    document.getElementById('dashStats').innerHTML = `
      <div class="stat-card"><div class="stat-label">Team members</div><div class="stat-num">6</div><div class="stat-sub">Active learners</div></div>
      <div class="stat-card"><div class="stat-label">Modules available</div><div class="stat-num">8</div><div class="stat-sub">Across 4 tracks</div></div>
      <div class="stat-card"><div class="stat-label">Avg completion</div><div class="stat-num">38%</div><div class="stat-sub">↑ 12% this month</div></div>
      <div class="stat-card"><div class="stat-label">Pending review</div><div class="stat-num ${pending > 0 ? 'warn' : ''}">${pending}</div><div class="stat-sub">Submissions awaiting</div></div>`;
  },

  teamList(containerId = 'dashTeam', showAssign = true) {
    const c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = TEAM.map(m => `
      <div class="member-row">
        <div class="mem-avatar" style="background:${m.avatarBg};color:${m.avatarColor}">${m.init}</div>
        <div class="mem-info">
          <div class="mem-name">${m.name}</div>
          <div class="mem-role">${m.role}</div>
        </div>
        <div class="mem-progress">
          <div class="prog-bar"><div class="prog-fill" style="width:${m.progress}%"></div></div>
          <div class="prog-pct ${m.progress < 15 ? 'warn' : ''}">${m.progress}%</div>
        </div>
        ${showAssign ? `<button class="btn-outline" onclick="Modals.openAssign('${m.name}')">
          <i class="ti ti-plus"></i> Assign
        </button>` : ''}
      </div>`).join('');
  },

  moduleGrid() {
    document.getElementById('moduleGrid').innerHTML = Object.values(MODULES).map(m => `
      <div class="mod-card" onclick="App.openLesson('${m.key}')">
        <div class="mod-tag ${m.tag}"><i class="ti ${m.icon}" style="font-size:12px"></i> ${m.tagLabel}</div>
        <div class="mod-title">${m.title}</div>
        <div class="mod-desc">${m.desc}</div>
        <div class="mod-meta">
          <span class="mod-lessons"><i class="ti ti-book"></i> ${m.topics.length} lesson${m.topics.length !== 1 ? 's' : ''} · ${m.assignType === 'mcq' ? 'MCQ only' : 'MCQ + written'}</span>
          ${m.revenueTag ? `<span class="revenue-tag">${m.revenueTag}</span>` : ''}
        </div>
      </div>`).join('');
  },

  assignedList() {
    const container = document.getElementById('assignedList');
    if (!container) return;
    const keys = ['priority', 'reporting', 'crm'];
    container.innerHTML = keys.map(k => {
      const m    = MODULES[k];
      const done = Assignment.submitted[k];
      return `
        <div class="assigned-card">
          <div class="mod-icon" style="background:${m.iconBg}">
            <i class="ti ${m.icon}" style="color:${m.iconColor}"></i>
          </div>
          <div class="assigned-info">
            <div class="assigned-title">${m.title}</div>
            <div class="assigned-meta">${m.topics.length} lessons · ${done ? 'Assignment submitted' : 'Assignment pending'}</div>
          </div>
          ${done
            ? `<span class="pill pill-success"><i class="ti ti-check"></i> Submitted</span>`
            : `<button class="btn-primary" onclick="App.openLesson('${k}')">
                Start <i class="ti ti-arrow-right"></i>
               </button>`}
        </div>`;
    }).join('');
  },

  submissionsList() {
    const c = document.getElementById('submissionsList');
    if (!c) return;
    if (State.submissions.length === 0) {
      c.innerHTML = `<div class="empty-state"><i class="ti ti-inbox"></i><p>No submissions yet.</p></div>`;
      return;
    }
    c.innerHTML = State.submissions.map((s, i) => `
      <div class="submission-item">
        <div class="submission-meta">
          <div class="mem-avatar" style="background:${s.avatarBg};color:${s.avatarColor};width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;flex-shrink:0">${s.init}</div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500;color:var(--text-1)">${s.name} · ${s.module}</div>
            <div style="font-size:11px;color:var(--text-3)">${s.type} · ${s.submitted}</div>
          </div>
          ${s.reviewed
            ? `<span class="pill pill-success"><i class="ti ti-check"></i> Reviewed</span>`
            : `<span class="pill pill-pending">Awaiting review</span>`}
        </div>
        <div class="submission-excerpt">"${s.excerpt}"</div>
        ${!s.reviewed ? `
          <div class="submission-actions">
            <button class="btn-outline" onclick="Render.markReviewed(${i})">
              <i class="ti ti-check"></i> Mark as reviewed
            </button>
          </div>` : ''}
      </div>`).join('');
  },

  markReviewed(index) {
    State.submissions[index].reviewed = true;
    State.submissions[index].submitted = 'Reviewed just now';
    Render.submissionsList();
    Render.dashStats();
    const pending = State.submissions.filter(s => !s.reviewed).length;
    const badge = document.getElementById('subNavBadge');
    badge.textContent = pending;
    badge.style.display = pending > 0 ? 'inline' : 'none';
    App.toast('Marked as reviewed');
  },

  progressPage() {
    const c = document.getElementById('progressContent');
    if (!c) return;
    const submittedCount = Object.keys(Assignment.submitted).length;
    c.innerHTML = `
      <div class="stats-row" style="grid-template-columns:repeat(3,1fr);margin-bottom:24px">
        <div class="stat-card"><div class="stat-label">Lessons completed</div><div class="stat-num">7</div><div class="stat-sub">of 13 assigned</div></div>
        <div class="stat-card"><div class="stat-label">Assignments submitted</div><div class="stat-num">${submittedCount}</div><div class="stat-sub">of 3 assigned</div></div>
        <div class="stat-card"><div class="stat-label">MCQ avg score</div><div class="stat-num">82%</div><div class="stat-sub">Across completed quizzes</div></div>
      </div>
      <h2 class="section-title">Module history</h2>
      <div class="module-list">
        <div class="assigned-card">
          <div class="mod-icon" style="background:var(--green-bg)"><i class="ti ti-check" style="color:var(--green)"></i></div>
          <div class="assigned-info">
            <div class="assigned-title">Ahrefs Portfolio overview</div>
            <div class="assigned-meta">Completed · MCQ score: 100% · March 14</div>
          </div>
          <span class="pill pill-success">Passed</span>
        </div>
        ${['priority','reporting','crm'].map(k => {
          const m    = MODULES[k];
          const done = Assignment.submitted[k];
          return `
            <div class="assigned-card">
              <div class="mod-icon" style="background:${m.iconBg}"><i class="ti ${m.icon}" style="color:${m.iconColor}"></i></div>
              <div class="assigned-info">
                <div class="assigned-title">${m.title}</div>
                <div class="assigned-meta">${done ? 'Assignment submitted — awaiting review' : 'In progress · Assignment pending'}</div>
              </div>
              ${done
                ? `<span class="pill pill-warn">Pending review</span>`
                : `<button class="btn-primary" onclick="App.openLesson('${k}')">Continue</button>`}
            </div>`;
        }).join('')}
      </div>`;
  },

  checkList() {
    document.getElementById('checkList').innerHTML = Object.values(MODULES).map(m => `
      <label class="check-item">
        <input type="checkbox" value="${m.key}" />
        <span style="flex:1">${m.title}</span>
        ${m.revenueTag ? `<span style="font-size:11px;color:var(--orange)">${m.revenueTag}</span>` : ''}
      </label>`).join('');

    document.querySelectorAll('.check-item').forEach(item => {
      item.addEventListener('click', function () {
        const inp = this.querySelector('input');
        setTimeout(() => {
          inp.checked ? this.classList.add('checked') : this.classList.remove('checked');
        }, 0);
      });
    });
  },
};
