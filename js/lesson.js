// js/lesson.js
const Lesson = {
  currentModule: null,
  currentTopic: null,
  completedTopics: {}, // key: "moduleKey_topicIndex"

  selectTopic(index, name, el) {
    document.querySelectorAll('.topic-item').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    Lesson.currentTopic = { index, name };

    const aiLesson = document.getElementById('aiLesson');
    aiLesson.style.display = 'block';
    document.getElementById('lessonQuiz').style.display = 'none';
    document.getElementById('markDoneBtn').style.display = 'none';

    const genBtn = document.getElementById('genBtn');
    genBtn.style.display = 'inline-flex';
    genBtn.disabled = false;
    genBtn.innerHTML = '<i class="ti ti-sparkles"></i> Generate lesson content';

    document.getElementById('aiContent').innerHTML = '<p class="placeholder-text">Click "Generate lesson content" to load this lesson.</p>';
  },

  async generate() {
    const btn = document.getElementById('genBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="ti ti-loader spinning"></i> Generating…';
    document.getElementById('aiContent').innerHTML = '<p class="placeholder-text">Loading lesson…</p>';

    try {
      const raw = await API.call(
        API.lessonPrompt(Lesson.currentModule, Lesson.currentTopic.name)
      );
      document.getElementById('aiContent').innerHTML = Lesson._formatLesson(raw);
      btn.style.display = 'none';
      document.getElementById('markDoneBtn').style.display = 'inline-flex';
    } catch (e) {
      document.getElementById('aiContent').innerHTML =
        '<p style="color:var(--red-text)">Could not load lesson. Check your connection and try again.</p>';
      btn.disabled = false;
      btn.innerHTML = '<i class="ti ti-sparkles"></i> Generate lesson content';
    }
  },

  _formatLesson(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .split('\n\n')
      .map(para => para.trim())
      .filter(Boolean)
      .map(para => {
        if (para.startsWith('• ') || para.includes('\n• ')) {
          const items = para.split('\n').filter(l => l.startsWith('• '));
          return '<ul>' + items.map(i => `<li>${i.replace('• ', '')}</li>`).join('') + '</ul>';
        }
        return `<p>${para.replace(/\n/g, '<br>')}</p>`;
      })
      .join('');
  },

  markDone() {
    const key = `${Lesson.currentModule}_${Lesson.currentTopic.index}`;
    Lesson.completedTopics[key] = true;

    // Update topic status icon
    const items = document.querySelectorAll('.topic-item');
    if (items[Lesson.currentTopic.index]) {
      items[Lesson.currentTopic.index].querySelector('.topic-status').textContent = '✅';
    }

    const btn = document.getElementById('markDoneBtn');
    btn.innerHTML = '<i class="ti ti-check"></i> Marked complete!';
    btn.style.background = 'var(--green)';
    setTimeout(() => { btn.style.display = 'none'; btn.style.background = ''; }, 1600);

    // Show assignment badge if all topics done
    const mod = MODULES[Lesson.currentModule];
    const allDone = mod.topics.every((_, i) => Lesson.completedTopics[`${Lesson.currentModule}_${i}`]);
    if (allDone) {
      const badge = document.getElementById('assignTabBadge');
      if (!Assignment.submitted[Lesson.currentModule]) badge.style.display = 'inline';
    }
  },
};
