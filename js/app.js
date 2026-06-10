// js/app.js

// ─── GLOBAL STATE ────────────────────────────────────────────
const State = {
  currentUser: null,
  currentPage: 'dashboard',
  lastPage: 'dashboard',
  sidebarOpen: true,

  submissions: [
    { init: 'SK', name: 'Sarah K.',  avatarBg: '#E6F1FB', avatarColor: '#185FA5', module: 'Action Priority Matrix',       type: 'Written submission', submitted: '2 hours ago', excerpt: 'When a client sends an ad hoc request mid-sprint, I first ask: does this directly impact revenue in the next 30 days? If not, I log it and address it in the next sprint...', grade: null, reviewed: false },
    { init: 'MT', name: 'Marcus T.', avatarBg: '#E1F5EE', avatarColor: '#0F6E56', module: 'Communicating results on calls', type: 'Written submission', submitted: 'Yesterday',    excerpt: 'I open every reporting call with a one-sentence summary of the month. This month was strong overall — organic traffic grew 18% YoY and we hit our lead goal...', grade: null, reviewed: false },
    { init: 'JL', name: 'Jamie L.',  avatarBg: '#FAEEDA', avatarColor: '#854F0B', module: 'Holding scope & setting boundaries', type: 'Written submission', submitted: '2 days ago', excerpt: 'A client asked us to manage their email newsletter. I said "We would love to add that — let me walk you through how we scope additional services formally..."', grade: 'pass', reviewed: true },
    { init: 'RP', name: 'Riley P.',  avatarBg: '#EEEDFE', avatarColor: '#534AB7', module: 'Action Priority Matrix',       type: 'Written submission', submitted: '3 days ago', excerpt: 'The key principle I took from this module is that urgency and importance are not the same thing. A client pinging you on Slack feels urgent, but fixing the crawl budget issue...', grade: 'pass', reviewed: true },
  ],

  addSubmission(sub) {
    State.submissions.unshift(sub);
    const badge = document.getElementById('subNavBadge');
    const pending = State.submissions.filter(s => !s.reviewed).length;
    badge.textContent = pending;
    badge.style.display = pending > 0 ? 'inline' : 'none';
  },
};

// ─── APP CONTROLLER ───────────────────────────────────────────
const App = {

  init() {
    Render.checkList();
    firebase.initializeApp(FIREBASE_CONFIG);
    firebase.auth().onAuthStateChanged(App._onAuthStateChanged);
  },

  _onAuthStateChanged(user) {
    if (!user) {
      document.getElementById('loginScreen').style.display = 'flex';
      document.getElementById('appShell').style.display   = 'none';
      return;
    }
    const err = document.getElementById('loginError');
    if (!user.email.endsWith('@outerbox.com')) {
      firebase.auth().signOut();
      err.textContent = 'Access restricted to @outerbox.com accounts.';
      err.style.display = 'block';
      return;
    }
    err.style.display = 'none';
    const nameParts = (user.displayName || user.email).split(' ');
    const initials  = nameParts.map(n => n[0]).join('').slice(0, 2).toUpperCase();
    App._startSession({
      email:     user.email,
      name:      user.displayName || user.email,
      init:      initials,
      picture:   user.photoURL,
      role:      'learner',
      roleLabel: 'Learner',
    });
  },

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ hd: 'outerbox.com' });
    firebase.auth().signInWithPopup(provider).catch(e => {
      const err = document.getElementById('loginError');
      err.textContent = e.message || 'Sign-in failed. Please try again.';
      err.style.display = 'block';
      console.error('Firebase sign-in error:', e.code, e.message);
    });
  },

  _startSession(user) {
    State.currentUser = user;
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appShell').style.display   = 'flex';
    document.getElementById('roleBadge').textContent    = user.roleLabel;
    document.getElementById('userAvatar').textContent   = user.init;

    // Initial renders
    Render.dashStats();
    Render.teamList('dashTeam', true);
    Render.teamList('teamList', true);
    Render.moduleGrid();
    Render.assignedList();

    // Hide manager nav for learners
    if (user.role === 'learner') {
      document.querySelectorAll('.nav-section')[0].style.display = 'none';
    } else {
      document.querySelectorAll('.nav-section')[0].style.display = '';
    }

    // Default start page
    App.navigate(user.role === 'learner' ? 'assigned' : 'dashboard');
  },

  logout() {
    State.currentUser = null;
    firebase.auth().signOut();
  },

  navigate(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    // Show target
    const pageEl = document.getElementById(`page-${page}`);
    if (pageEl) pageEl.style.display = 'block';

    const navEl = document.querySelector(`[data-page="${page}"]`);
    if (navEl) navEl.classList.add('active');

    // Lazy renders
    if (page === 'submissions') Render.submissionsList();
    if (page === 'progress')    Render.progressPage();

    if (page !== 'lesson') State.lastPage = page;
    State.currentPage = page;

    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      document.getElementById('sidebar').classList.add('collapsed');
    }
  },

  openLesson(moduleKey) {
    Lesson.currentModule = moduleKey;
    const mod = MODULES[moduleKey];

    document.getElementById('lessonTitle').textContent = mod.title;

    // Build topic list
    const tl = document.getElementById('topicList');
    tl.innerHTML = mod.topics.map((t, i) => {
      const done = Lesson.completedTopics[`${moduleKey}_${i}`];
      return `<div class="topic-item" onclick="Lesson.selectTopic(${i}, '${t.replace(/'/g,"\\'")}', this)">
        <span class="topic-num">${i + 1}</span>
        <span class="topic-name">${t}</span>
        <span class="topic-status">${done ? '✅' : '○'}</span>
      </div>`;
    }).join('');

    // Reset lesson pane
    document.getElementById('aiLesson').style.display = 'none';
    document.getElementById('lessonQuiz').style.display = 'none';
    document.getElementById('markDoneBtn').style.display = 'none';
    document.getElementById('aiContent').innerHTML =
      '<p class="placeholder-text">Select a lesson above, then click Generate to load the content.</p>';
    document.getElementById('genBtn').style.display = 'inline-flex';
    document.getElementById('genBtn').disabled = false;
    document.getElementById('genBtn').innerHTML = '<i class="ti ti-sparkles"></i> Generate lesson content';

    // Reset tabs
    App.switchTab('learn');

    // Assignment badge
    const badge = document.getElementById('assignTabBadge');
    badge.style.display = Assignment.submitted[moduleKey] ? 'none' : 'inline';

    // Pre-render assignment pane
    Assignment.render(moduleKey);

    App.navigate('lesson');
  },

  switchTab(tab) {
    document.getElementById('tabLearn').classList.toggle('active',  tab === 'learn');
    document.getElementById('tabAssign').classList.toggle('active', tab === 'assign');
    document.getElementById('paneLearn').classList.toggle('active',  tab === 'learn');
    document.getElementById('paneAssign').classList.toggle('active', tab === 'assign');
  },

  goBack() {
    App.navigate(State.lastPage || 'assigned');
  },

  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
  },

  _toastTimer: null,
  toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(App._toastTimer);
    App._toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
  },
};

// Boot
document.addEventListener('DOMContentLoaded', App.init);
