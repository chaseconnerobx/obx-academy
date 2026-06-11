// js/lesson.js
const Lesson = {
  currentModule: null,
  currentTopic: null,
  completedTopics: {},

  async selectTopic(index, name, el) {
    document.querySelectorAll('.topic-item').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    Lesson.currentTopic = { index, name };

    document.getElementById('aiLesson').style.display = 'block';
    document.getElementById('markDoneBtn').style.display = 'none';
    document.getElementById('aiContent').innerHTML = '<p class="placeholder-text">Loading…</p>';

    let content = '', imageUrl = '', videoUrl = '';
    try {
      const doc = await firebase.firestore().collection('moduleContent').doc(`${Lesson.currentModule}-${index}`).get();
      if (doc.exists) {
        const d = doc.data();
        content  = d.content  || '';
        imageUrl = d.imageUrl || '';
        videoUrl = d.videoUrl || '';
      }
    } catch (e) { /* fall through to local */ }

    if (!content) {
      const mod = MODULES[Lesson.currentModule];
      content = (mod.topicContent && mod.topicContent[index]) || '';
    }

    let html = content
      ? Lesson._formatLesson(content)
      : '<p class="placeholder-text">Content coming soon — check back shortly.</p>';

    if (imageUrl) {
      html += `<img src="${imageUrl}" class="lesson-screenshot" alt="Screenshot" />`;
    }
    if (videoUrl) {
      const embedUrl = videoUrl.replace('loom.com/share/', 'loom.com/embed/');
      html += `<div class="lesson-video-wrap"><iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe></div>`;
    }

    document.getElementById('aiContent').innerHTML = html;
    document.getElementById('markDoneBtn').style.display = 'inline-flex';
  },

  _formatLesson(text) {
    // If already HTML (starts with a tag), render directly
    if (text.trim().startsWith('<')) return text;
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

    const items = document.querySelectorAll('.topic-item');
    if (items[Lesson.currentTopic.index]) {
      items[Lesson.currentTopic.index].querySelector('.topic-status').textContent = '✅';
    }

    const btn = document.getElementById('markDoneBtn');
    btn.innerHTML = '<i class="ti ti-check"></i> Marked complete!';
    btn.style.background = 'var(--green)';
    setTimeout(() => { btn.style.display = 'none'; btn.style.background = ''; }, 1600);

    const mod = MODULES[Lesson.currentModule];
    const allDone = mod.topics.every((_, i) => Lesson.completedTopics[`${Lesson.currentModule}_${i}`]);
    if (allDone) {
      const badge = document.getElementById('assignTabBadge');
      if (!Assignment.submitted[Lesson.currentModule]) badge.style.display = 'inline';
    }
  },
};
