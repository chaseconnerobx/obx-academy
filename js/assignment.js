// js/assignment.js
const Assignment = {
  format: {},      // moduleKey -> 'mcq' | 'submission'
  answers: {},     // moduleKey -> { questionIndex -> { selected, correct } }
  submitted: {},   // moduleKey -> 'mcq' | 'submission' | true

  render(moduleKey) {
    const data = ASSIGNMENTS[moduleKey];
    const mod  = MODULES[moduleKey];
    const container = document.getElementById('assignmentContainer');

    if (!data) {
      container.innerHTML = '<p class="placeholder-text" style="padding:20px">No assignment configured for this module.</p>';
      return;
    }

    const hasMcq = data.mcq && data.mcq.length > 0;
    const hasSub = !!data.submission;

    // Default format
    if (!Assignment.format[moduleKey]) {
      Assignment.format[moduleKey] = hasMcq ? 'mcq' : 'submission';
    }

    const submitted = Assignment.submitted[moduleKey];
    let html = '<div style="padding:20px">';

    // Format toggle (only when module supports both and not yet submitted)
    if (hasMcq && hasSub && mod.assignType === 'both' && !submitted) {
      const fmt = Assignment.format[moduleKey];
      html += `
        <div class="format-toggle-row">
          <span class="toggle-label">Assignment format:</span>
          <div class="format-toggle">
            <button class="format-opt ${fmt === 'mcq' ? 'active' : ''}"
              onclick="Assignment.setFormat('${moduleKey}','mcq')">
              <i class="ti ti-list-check"></i> Multiple choice
            </button>
            <button class="format-opt ${fmt === 'submission' ? 'active' : ''}"
              onclick="Assignment.setFormat('${moduleKey}','submission')">
              <i class="ti ti-pencil"></i> Written
            </button>
          </div>
        </div>`;
    }

    if (submitted) {
      html += Assignment._submittedBanner(moduleKey);
    } else {
      const fmt = Assignment.format[moduleKey];
      if (fmt === 'mcq' && hasMcq) {
        html += Assignment._buildMcq(moduleKey, data.mcq);
      } else if (fmt === 'submission' && hasSub) {
        html += Assignment._buildSubmission(moduleKey, data.submission);
      }
    }

    html += '</div>';
    container.innerHTML = html;
  },

  setFormat(moduleKey, fmt) {
    Assignment.format[moduleKey] = fmt;
    Assignment.answers[moduleKey] = {};
    Assignment.render(moduleKey);
  },

  _submittedBanner(moduleKey) {
    return `
      <div class="feedback-card submitted">
        <div class="feedback-score submitted">
          <i class="ti ti-circle-check"></i> Assignment submitted
        </div>
        <div class="feedback-body">
          Your assignment has been submitted and is awaiting manager review.
          You'll be notified when feedback is available.
        </div>
      </div>`;
  },

  _buildMcq(moduleKey, questions) {
    let html = '';
    questions.forEach((q, qi) => {
      html += `
        <div class="assign-block">
          <div class="assign-block-head">
            <div class="assign-block-title">
              <i class="ti ti-list-check" style="color:var(--blue)"></i>
              Question ${qi + 1} of ${questions.length}
            </div>
          </div>
          <div class="assign-block-body">
            <div class="mcq-question">${q.q}</div>
            ${q.opts.map((o, oi) => `
              <div class="mcq-option" id="mcq_${moduleKey}_${qi}_${oi}"
                onclick="Assignment.pickAnswer('${moduleKey}',${qi},${oi},${q.correct})">
                <div class="mcq-radio"><div class="mcq-dot"></div></div>
                ${o}
              </div>`).join('')}
            <div class="mcq-feedback" id="mcqFb_${moduleKey}_${qi}"></div>
          </div>
        </div>`;
    });
    html += `
      <div style="margin-top:4px">
        <button class="btn-primary" id="mcqSubmitBtn_${moduleKey}"
          onclick="Assignment.submitMcq('${moduleKey}')">
          <i class="ti ti-send"></i> Submit answers
        </button>
      </div>`;
    return html;
  },

  _buildSubmission(moduleKey, sub) {
    return `
      <div class="assign-block">
        <div class="assign-block-head">
          <div class="assign-block-title">
            <i class="ti ti-pencil" style="color:var(--orange)"></i>
            Written assignment
          </div>
          <span class="manager-note">Reviewed by your manager</span>
        </div>
        <div class="assign-block-body">
          <div class="submission-prompt">${sub.prompt}</div>
          <div class="submission-hint">
            <i class="ti ti-bulb"></i>
            <span>${sub.hint}</span>
          </div>
          <textarea
            class="sub-textarea"
            id="subText_${moduleKey}"
            placeholder="Write your response here…"
            oninput="Assignment.onType('${moduleKey}', ${sub.minWords})">
          </textarea>
          <div class="word-count-row">
            <span class="word-count" id="wordCount_${moduleKey}">0 words</span>
            <span class="min-words">Minimum ${sub.minWords} words</span>
          </div>
          <div class="submit-row">
            <button class="btn-primary" id="subBtn_${moduleKey}"
              onclick="Assignment.submitWritten('${moduleKey}')" disabled>
              <i class="ti ti-send"></i> Submit for review
            </button>
            <span class="submit-note">Submitted to your manager for feedback</span>
          </div>
          <div id="subFeedback_${moduleKey}"></div>
        </div>
      </div>`;
  },

  pickAnswer(moduleKey, qi, oi, correct) {
    // Clear previous selection for this question
    document.querySelectorAll(`[id^="mcq_${moduleKey}_${qi}_"]`)
      .forEach(el => el.classList.remove('selected'));

    document.getElementById(`mcq_${moduleKey}_${qi}_${oi}`)
      .classList.add('selected');

    if (!Assignment.answers[moduleKey]) Assignment.answers[moduleKey] = {};
    Assignment.answers[moduleKey][qi] = { selected: oi, correct };
  },

  submitMcq(moduleKey) {
    const questions = ASSIGNMENTS[moduleKey].mcq;
    const answers = Assignment.answers[moduleKey] || {};

    // Validate all answered
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === undefined) {
        App.toast('Please answer all questions before submitting.');
        return;
      }
    }

    let score = 0;
    questions.forEach((q, qi) => {
      const a = answers[qi];
      const allOpts = document.querySelectorAll(`[id^="mcq_${moduleKey}_${qi}_"]`);
      allOpts.forEach((el, oi) => {
        el.onclick = null;
        if (oi === a.correct)                        el.classList.add('correct');
        else if (oi === a.selected && oi !== a.correct) el.classList.add('wrong');
      });

      const fb = document.getElementById(`mcqFb_${moduleKey}_${qi}`);
      if (a.selected === a.correct) {
        score++;
        fb.className = 'mcq-feedback correct';
        fb.textContent = '✓ Correct. ' + q.explanation;
      } else {
        fb.className = 'mcq-feedback wrong';
        fb.textContent = 'Not quite. ' + q.explanation;
      }
      fb.style.display = 'block';
    });

    const pct   = Math.round((score / questions.length) * 100);
    const grade = pct >= 70 ? 'pass' : pct >= 50 ? 'partial' : 'fail';
    const label = pct >= 70 ? 'Passed' : 'Needs review';
    const icon  = pct >= 70 ? 'ti-circle-check' : 'ti-alert-circle';

    const submitBtn = document.getElementById(`mcqSubmitBtn_${moduleKey}`);
    submitBtn.insertAdjacentHTML('afterend', `
      <div class="feedback-card ${grade}" style="margin-top:14px">
        <div class="feedback-score ${grade}">
          <i class="ti ${icon}"></i> ${label} — ${pct}% (${score}/${questions.length})
        </div>
        <div class="feedback-body">
          ${pct >= 70
            ? 'Great work — your understanding is solid. You can now move on to the next module.'
            : 'Review the lesson content, focusing on the questions you missed, then retake the quiz.'}
        </div>
      </div>`);
    submitBtn.remove();

    if (pct >= 70) {
      Assignment.submitted[moduleKey] = 'mcq';
      document.getElementById('assignTabBadge').style.display = 'none';
      Render.assignedList();
      App.toast('Assignment passed! ✓');
    }
  },

  onType(moduleKey, minWords) {
    const ta  = document.getElementById(`subText_${moduleKey}`);
    const wc  = document.getElementById(`wordCount_${moduleKey}`);
    const btn = document.getElementById(`subBtn_${moduleKey}`);
    if (!ta) return;
    const words = ta.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    wc.textContent = `${words} word${words !== 1 ? 's' : ''}`;
    wc.className = 'word-count' + (words >= minWords ? ' met' : '');
    if (btn) btn.disabled = words < minWords;
  },

  async submitWritten(moduleKey) {
    const ta  = document.getElementById(`subText_${moduleKey}`);
    const btn = document.getElementById(`subBtn_${moduleKey}`);
    const fb  = document.getElementById(`subFeedback_${moduleKey}`);
    if (!ta.value.trim()) return;

    btn.disabled = true;
    btn.innerHTML = '<i class="ti ti-loader spinning"></i> Grading…';

    const mod = MODULES[moduleKey];
    const sub = ASSIGNMENTS[moduleKey].submission;

    try {
      const raw = await API.call(
        API.gradingPrompt(mod.title, sub.prompt, ta.value),
        400
      );
      let result;
      try {
        result = JSON.parse(raw.replace(/```json|```/g, '').trim());
      } catch {
        result = { grade: 'submitted', score: null, headline: 'Submission received', feedback: 'Your response has been saved. Your manager will review and provide feedback soon.' };
      }

      const icon = result.grade === 'pass' ? 'ti-circle-check' : 'ti-alert-circle';
      const scoreStr = result.score ? ` — ${result.score}%` : '';

      fb.className = `feedback-card ${result.grade}`;
      fb.innerHTML = `
        <div class="feedback-score ${result.grade}">
          <i class="ti ${icon}"></i> ${result.headline}${scoreStr}
        </div>
        <div class="feedback-body">${result.feedback}</div>`;

      btn.innerHTML = '<i class="ti ti-check"></i> Submitted';
      btn.style.background = 'var(--green)';
      ta.disabled = true;

      Assignment.submitted[moduleKey] = 'submission';
      document.getElementById('assignTabBadge').style.display = 'none';
      Render.assignedList();

      // Add to submissions list for manager
      State.addSubmission({
        init: State.currentUser.init,
        name: State.currentUser.name,
        avatarBg: '#E6F1FB',
        avatarColor: '#185FA5',
        module: mod.title,
        type: 'Written submission',
        submitted: 'Just now',
        excerpt: ta.value.substring(0, 140) + (ta.value.length > 140 ? '…' : ''),
        grade: result.grade,
        reviewed: false,
      });
      App.toast('Assignment submitted!');

    } catch (e) {
      fb.className = 'feedback-card fail';
      fb.innerHTML = `
        <div class="feedback-score fail"><i class="ti ti-alert-circle"></i> Could not connect</div>
        <div class="feedback-body">Your response has been saved locally. Your manager can review it in the Submissions tab.</div>`;
      btn.disabled = false;
      btn.innerHTML = '<i class="ti ti-send"></i> Submit for review';
    }
  },
};
