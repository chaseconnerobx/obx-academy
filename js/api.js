// js/api.js
const API = {
  ENDPOINT: 'https://api.anthropic.com/v1/messages',
  MODEL: 'claude-sonnet-4-20250514',

  async call(prompt, maxTokens = 1000) {
    const res = await fetch(API.ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: API.MODEL,
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return data.content.map(c => c.text || '').join('');
  },

  lessonPrompt(moduleKey, topicName) {
    const ctx = {
      priority:      'Action Priority Matrix training — revenue-impact prioritization for an SEO/PPC agency team',
      reporting:     'reporting call training — structuring monthly client calls for SEO/PPC account managers',
      crm:           'client relationship management training — scope, retention, and professional communication',
      ahrefs:        'Ahrefs Portfolio tool training — monitoring client domains at scale for a digital marketing agency',
      accuranker:    'AccuRanker rank-tracking tool training — tag architecture and reporting workflows',
      ga4:           'GA4 annotation training — documenting traffic changes for client reporting',
      communication: 'proactive client communication training — cadence, tone, and retention',
      difficult:     'difficult client conversation training — de-escalation and retention',
    };
    return `You are an expert trainer for a digital marketing agency. Write a concise, practical lesson on "${topicName}" as part of ${ctx[moduleKey] || 'agency training'}.

Be specific to an SEO/PPC agency context. Use 2–3 short paragraphs. Include one concrete example or script snippet. End with exactly 2 bullet-point key takeaways (use "• " prefix). Keep it under 250 words. No headers or section labels — just flowing paragraphs and the two bullets at the end.`;
  },

  gradingPrompt(moduleTitle, assignmentPrompt, response) {
    return `You are a manager at a digital marketing agency grading a team member's written training assignment. Be honest and specific.

Module: ${moduleTitle}
Assignment: ${assignmentPrompt}
Response: ${response}

Grade this response and return ONLY valid JSON (no markdown, no preamble):
{"grade":"pass","score":85,"headline":"Short headline (max 8 words)","feedback":"1–2 sentences of specific feedback. Name one concrete strength and one improvement. Under 50 words total."}

Grade rules: "pass" = 70%+, "partial" = 50–69%, "fail" = below 50%. Be honest but constructive.`;
  },
};
