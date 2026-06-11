// js/lesson.js
const Lesson = {
  currentModule: null,
  currentTopic:  null,
  completedTopics: JSON.parse(localStorage.getItem('obx_completed') || '{}'),

  async selectTopic(index, name, el) {
    document.querySelectorAll('.topic-item').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    Lesson.currentTopic = { index, name };

    const pane    = document.getElementById('aiLesson');
    const content = document.getElementById('aiContent');
    pane.style.display = 'block';
    document.getElementById('markDoneBtn').style.display = 'none';
    content.innerHTML = '<div class="lesson-loading"><div class="lesson-loading-dot"></div><div class="lesson-loading-dot"></div><div class="lesson-loading-dot"></div></div>';

    let data = {};
    try {
      const doc = await firebase.firestore()
        .collection('moduleContent')
        .doc(`${Lesson.currentModule}-${index}`)
        .get();
      if (doc.exists) data = doc.data();
    } catch (e) { /* fall through to static content */ }

    if (!data.content) {
      const mod = MODULES[Lesson.currentModule];
      data.content = (mod.topicContent && mod.topicContent[index]) || '';
    }

    content.innerHTML = Lesson._buildTopicHTML(data, index);
    Lesson._updateProgress();

    const hasInteraction = data.interactions && data.interactions.length > 0;
    if (!hasInteraction) {
      document.getElementById('markDoneBtn').style.display = 'inline-flex';
    }
  },

  _buildTopicHTML(data, index) {
    let html = '';

    // Main content card
    const body = data.content ? (
      data.content.trim().startsWith('<')
        ? data.content
        : Lesson._formatText(data.content)
    ) : '<p class="placeholder-text">Content coming soon — check back shortly.</p>';
    html += `<div class="content-card">${body}</div>`;

    // Screenshot
    if (data.imageUrl) {
      html += `<img src="${data.imageUrl}" class="lesson-screenshot" alt="Screenshot" />`;
    }

    // Loom embed
    if (data.videoUrl) {
      const embedUrl = data.videoUrl.replace('loom.com/share/', 'loom.com/embed/');
      html += `<div class="lesson-video-wrap"><iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe></div>`;
    }

    // Interactive elements
    const interactions = data.interactions || [];
    interactions.forEach((item, i) => {
      html += Lesson._buildInteractive(item, index, i);
    });

    // Summary / takeaways
    if (data.takeaways && data.takeaways.length) {
      html += Lesson._buildSummary(data.takeaways);
    }

    return html;
  },

  _buildInteractive(item, topicIndex, itemIndex) {
    const id = `${Lesson.currentModule}-${topicIndex}-${itemIndex}`;

    if (item.type === 'mcq') {
      const opts = item.options.map((opt, i) => `
        <button class="mcq-option" onclick="Lesson.answerMCQ('${id}', ${i}, ${item.correct}, \`${(item.explanation || '').replace(/`/g, "'")}\`)">
          <span class="mcq-letter">${String.fromCharCode(65 + i)}</span>
          <span>${opt}</span>
        </button>`).join('');
      return `
        <div class="interactive-card" id="interactive-${id}">
          <div class="interactive-label"><span class="interactive-badge">Quick check</span></div>
          <p class="quiz-question">${item.question}</p>
          <div class="quiz-options">${opts}</div>
          <div class="quiz-feedback" id="feedback-${id}" style="display:none"></div>
        </div>`;
    }

    if (item.type === 'truefalse') {
      return `
        <div class="interactive-card" id="interactive-${id}">
          <div class="interactive-label"><span class="interactive-badge">True or false?</span></div>
          <p class="quiz-question">${item.statement}</p>
          <div class="tf-options">
            <button class="tf-btn" onclick="Lesson.answerTF('${id}', true, ${item.answer}, \`${(item.explanation || '').replace(/`/g, "'")}\`)">✓ True</button>
            <button class="tf-btn" onclick="Lesson.answerTF('${id}', false, ${item.answer}, \`${(item.explanation || '').replace(/`/g, "'")}\`)">✗ False</button>
          </div>
          <div class="quiz-feedback" id="feedback-${id}" style="display:none"></div>
        </div>`;
    }

    if (item.type === 'reveal') {
      const cards = item.cards.map((card, i) => `
        <div class="reveal-card" onclick="this.classList.toggle('flipped')">
          <div class="reveal-front"><span class="reveal-icon">💡</span><span>${card.front}</span></div>
          <div class="reveal-back">${card.back}</div>
        </div>`).join('');
      return `
        <div class="interactive-card">
          <div class="interactive-label"><span class="interactive-badge">Key concepts</span></div>
          <div class="reveal-grid">${cards}</div>
          <p class="reveal-hint">Tap each card to reveal the concept</p>
        </div>`;
    }

    return '';
  },

  answerMCQ(id, selected, correct, explanation) {
    const card = document.getElementById(`interactive-${id}`);
    if (!card || card.classList.contains('answered')) return;
    card.classList.add('answered');
    card.querySelectorAll('.mcq-option').forEach((btn, i) => {
      btn.disabled = true;
      if (i === correct) btn.classList.add('correct');
      else if (i === selected) btn.classList.add('wrong');
    });
    const isCorrect = selected === correct;
    const fb = document.getElementById(`feedback-${id}`);
    fb.style.display = 'block';
    fb.className = `quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
    fb.innerHTML = isCorrect
      ? `✅ <strong>Correct!</strong>${explanation ? ' ' + explanation : ' Nice work.'}`
      : `❌ <strong>Not quite.</strong>${explanation ? ' ' + explanation : ' Review the content above and try the next one.'}`;
    document.getElementById('markDoneBtn').style.display = 'inline-flex';
  },

  answerTF(id, selected, correct, explanation) {
    const card = document.getElementById(`interactive-${id}`);
    if (!card || card.classList.contains('answered')) return;
    card.classList.add('answered');
    card.querySelectorAll('.tf-btn').forEach(btn => btn.disabled = true);
    const isCorrect = selected === correct;
    const fb = document.getElementById(`feedback-${id}`);
    fb.style.display = 'block';
    fb.className = `quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
    fb.innerHTML = isCorrect
      ? `✅ <strong>Correct!</strong>${explanation ? ' ' + explanation : ''}`
      : `❌ <strong>That's ${correct ? 'True' : 'False'}.</strong>${explanation ? ' ' + explanation : ''}`;
    document.getElementById('markDoneBtn').style.display = 'inline-flex';
  },

  _buildSummary(takeaways) {
    const items = takeaways.map(t => `<li>${t}</li>`).join('');
    return `
      <div class="summary-card">
        <div class="summary-header"><span>📌</span> Key takeaways</div>
        <ul class="summary-list">${items}</ul>
      </div>`;
  },

  _formatText(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .split('\n\n')
      .map(p => p.trim()).filter(Boolean)
      .map(p => {
        if (p.startsWith('• ') || p.includes('\n• ')) {
          return '<ul>' + p.split('\n').filter(l => l.startsWith('• ')).map(l => `<li>${l.slice(2)}</li>`).join('') + '</ul>';
        }
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
      }).join('');
  },

  _updateProgress() {
    const mod   = MODULES[Lesson.currentModule];
    const total = mod.topics.length;
    const done  = mod.topics.filter((_, i) => Lesson.completedTopics[`${Lesson.currentModule}_${i}`]).length;
    const pct   = Math.round((done / total) * 100);
    const bar   = document.getElementById('lessonProgressBar');
    const label = document.getElementById('lessonProgressLabel');
    if (bar)   { bar.style.width = `${pct}%`; }
    if (label) { label.textContent = `${done} / ${total} complete`; }
  },

  markDone() {
    const key = `${Lesson.currentModule}_${Lesson.currentTopic.index}`;
    Lesson.completedTopics[key] = true;
    localStorage.setItem('obx_completed', JSON.stringify(Lesson.completedTopics));

    const items = document.querySelectorAll('.topic-item');
    if (items[Lesson.currentTopic.index]) {
      items[Lesson.currentTopic.index].querySelector('.topic-status').textContent = '✅';
    }

    const btn = document.getElementById('markDoneBtn');
    btn.innerHTML = '<i class="ti ti-check"></i> Marked complete!';
    btn.style.background = 'var(--green)';
    setTimeout(() => { btn.style.display = 'none'; btn.style.background = ''; }, 1600);

    Lesson._updateProgress();

    const mod     = MODULES[Lesson.currentModule];
    const allDone = mod.topics.every((_, i) => Lesson.completedTopics[`${Lesson.currentModule}_${i}`]);
    if (allDone) {
      const badge = document.getElementById('assignTabBadge');
      if (!Assignment.submitted[Lesson.currentModule]) badge.style.display = 'inline';
      setTimeout(() => Lesson.showBadge(), 1800);
    }
  },

  showBadge() {
    const mod = MODULES[Lesson.currentModule];
    document.getElementById('badgeSub').textContent =
      `You finished all ${mod.topics.length} lesson${mod.topics.length !== 1 ? 's' : ''} in "${mod.title}". Ready for the assignment?`;
    document.getElementById('badgeOverlay').style.display = 'flex';
  },

  closeBadge() {
    document.getElementById('badgeOverlay').style.display = 'none';
  },
};
