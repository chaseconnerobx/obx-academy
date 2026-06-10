// data/assignments.js
const ASSIGNMENTS = {
  priority: {
    mcq: [
      {
        q: 'A client just emailed asking you to write a blog post while you\'re mid-way through fixing their technical SEO issues. What\'s the right move?',
        opts: ['Stop and write the blog post — client requests take priority','Finish the technical fix first — it has higher revenue impact','Ask your manager what to do','Do both tasks simultaneously'],
        correct: 1,
        explanation: 'The technical SEO fix almost certainly has higher revenue impact than a single blog post. Prioritization based on revenue impact means completing higher-value work first, then addressing lower-impact requests.',
      },
      {
        q: 'Which quadrant of the Action Priority Matrix should you spend most of your time in?',
        opts: ['High effort, low impact','Low effort, low impact','High impact, high effort','High impact, low effort'],
        correct: 3,
        explanation: '"Quick wins" — high impact, low effort tasks — deliver the most value per unit of time and should always be addressed first.',
      },
      {
        q: 'How should you communicate prioritization decisions to clients?',
        opts: ['Don\'t mention it — just do the work','Frame it around their revenue goals: "We\'re focusing on X because it\'s most likely to drive results"','Always ask for approval before prioritizing anything','Let them decide the priority entirely'],
        correct: 1,
        explanation: 'Framing prioritization around client revenue goals builds trust and positions you as a strategic partner, not just an executor.',
      },
    ],
    submission: {
      prompt: 'You have a client who keeps sending new ad hoc requests mid-sprint. Describe how you would use the Action Priority Matrix to manage these requests. Walk through a real example: what questions would you ask, how would you categorize each request, and how would you communicate your prioritization decision to the client.',
      minWords: 80,
      hint: 'Think about a specific situation you\'ve encountered. Be concrete — include example language you\'d use with the client.',
    },
  },

  reporting: {
    mcq: [
      {
        q: 'What is the best way to open a monthly reporting call?',
        opts: ['Ask the client if they have any questions','Immediately dive into the data','Set context first — summarize the month in 1–2 sentences before showing numbers','Send the report ahead of time and skip the overview'],
        correct: 2,
        explanation: 'Leading with context anchors the client\'s expectations before they see the data. It lets you shape the narrative rather than react to their interpretation.',
      },
      {
        q: 'A client says "your traffic is down — what happened?" The best first response is:',
        opts: ['Apologize immediately','Explain the algorithm update before they finish the sentence','Acknowledge the concern, reference your GA4 annotation, and walk them through the cause and recovery plan','Blame external factors outside your control'],
        correct: 2,
        explanation: 'A prepared, calm response that references your own documentation shows professionalism and foresight. Panic or deflection erode trust.',
      },
      {
        q: 'When translating data for a client call, you should:',
        opts: ['Show every metric available to demonstrate thoroughness','Lead with the metrics that most directly connect to their revenue or business goals','Avoid showing negative metrics entirely','Only discuss metrics that improved this month'],
        correct: 1,
        explanation: 'Clients care about outcomes, not inputs. Leading with revenue-connected metrics keeps the conversation strategic rather than tactical.',
      },
    ],
    submission: {
      prompt: 'Write out how you would structure a 30-minute monthly reporting call from start to finish. Include: how you open, what order you present data in, how you handle one piece of negative performance, and how you close the call. You can use a real or hypothetical client.',
      minWords: 100,
      hint: 'Think about what you want the client to feel at the end of the call. Work backwards from that.',
    },
  },

  ahrefs: {
    mcq: [
      {
        q: 'What is the primary benefit of the Ahrefs Portfolio view?',
        opts: ['It audits a single page\'s Core Web Vitals','It monitors backlink and organic metrics across multiple client domains in one view','It tracks paid search keyword bid changes','It automates content publishing'],
        correct: 1,
        explanation: 'Portfolio view lets you see domain-level health across your entire client book without switching between projects — essential for efficient reporting prep.',
      },
      {
        q: 'When prepping for a client call using Ahrefs, the most useful data points are:',
        opts: ['Only the current month\'s data in isolation','Year-over-year backlink trends, referring domain growth, and any major drops that need explanation','The client\'s competitors\' paid ad spend','The client\'s social media follower count'],
        correct: 1,
        explanation: 'Backlink trends and referring domain growth show authority-building progress over time — the two most meaningful Ahrefs metrics for client conversations.',
      },
    ],
    submission: null,
  },

  accuranker: {
    mcq: [
      {
        q: 'AccuRanker tags allow you to:',
        opts: ['Automatically fix keyword rankings','Segment keywords by topic, page type, or funnel stage for cleaner reporting','Track Google Ads conversion data','Schedule social media posts'],
        correct: 1,
        explanation: 'Tags let you slice ranking data the same way your client thinks about their business — by product line, service, or funnel stage — making reports much more meaningful.',
      },
      {
        q: 'Why should you build your tag architecture before onboarding a new client\'s keywords?',
        opts: ['Tags can\'t be added after initial setup','It\'s required by AccuRanker\'s terms of service','It ensures clean data segmentation from day one, avoiding messy retroactive cleanup','Tags slow down the platform when added later'],
        correct: 2,
        explanation: 'Starting with a tag structure means every keyword is categorized from the start. Retroactive tagging is time-consuming and often incomplete.',
      },
    ],
    submission: null,
  },

  ga4: {
    mcq: [
      {
        q: 'When should you add an annotation in GA4?',
        opts: ['Only when traffic significantly increases','Only when something goes wrong','Any time an event could explain a data change — algorithm updates, site launches, campaign starts, technical issues','After every weekly report regardless of changes'],
        correct: 2,
        explanation: 'Annotations are most valuable when placed at the time of the event, not after. They serve as a paper trail that protects your team and builds client trust.',
      },
      {
        q: 'How should you reference a GA4 annotation on a client call?',
        opts: ['Never mention it — it draws attention to problems','Briefly explain what happened, when you noted it, and what action you took in response','Read the annotation text verbatim from the screen','Only mention it if the client specifically asks'],
        correct: 1,
        explanation: 'A well-placed annotation used confidently on a call shows the client you were watching, you noticed the event in real time, and you responded proactively.',
      },
    ],
    submission: null,
  },

  crm: {
    mcq: [
      {
        q: 'A client says "can you also just quickly handle our social media?" Your response should be:',
        opts: ['Say yes, you\'ll figure out capacity later','Explain you\'d love to help and walk them through how to add it to scope formally','Ignore the request and hope they forget','Say no flatly with no further explanation'],
        correct: 1,
        explanation: '"Yes, and here\'s the process" keeps the relationship warm while protecting your team\'s capacity. It opens a real conversation rather than shutting one down.',
      },
      {
        q: 'What is the best early signal of scope creep?',
        opts: ['The client stops responding to emails','A client request falls outside the services listed in the signed agreement','Monthly reporting takes longer than 30 minutes','The client asks for a call'],
        correct: 1,
        explanation: 'Scope creep begins the moment a request falls outside agreed deliverables. Recognizing it early — before work begins — is far easier to manage than addressing it retroactively.',
      },
      {
        q: 'The "Yes, and…" framework helps you:',
        opts: ['Agree to all client requests to avoid conflict','Acknowledge what the client wants while directing them toward the appropriate process','Delay difficult conversations indefinitely','Write better client emails'],
        correct: 1,
        explanation: '"Yes, and…" validates the client\'s request as reasonable while giving you a path to hold scope professionally. It\'s one of the most useful phrases in account management.',
      },
    ],
    submission: {
      prompt: 'Describe a situation (real or realistic) where a client was pushing for work outside your team\'s agreed scope. How would you handle that conversation? Write out the key things you\'d say to hold the scope professionally while keeping the relationship intact.',
      minWords: 80,
      hint: 'The goal is to protect the scope without damaging the relationship. Show you understand both sides.',
    },
  },

  communication: {
    mcq: [
      {
        q: 'Proactive communication means:',
        opts: ['Responding within 24 hours when clients message you','Reaching out with updates before clients ask','Sending automated weekly reports on a fixed schedule','Only communicating when results are positive'],
        correct: 1,
        explanation: 'Proactive communication shifts the dynamic from client-as-chaser to client-as-informed-partner. It\'s one of the highest-impact retention behaviors.',
      },
      {
        q: 'When a client seems anxious about performance, the best move is:',
        opts: ['Wait until the monthly reporting call to address it','Send them more data so they feel informed','Reach out proactively with a brief, honest update and a clear next step','Avoid the topic until results improve'],
        correct: 2,
        explanation: 'Anxiety grows in information vacuums. A brief, honest, action-oriented update almost always reduces client anxiety more than waiting for the scheduled call.',
      },
    ],
    submission: {
      prompt: 'Write a proactive client update email for a client whose organic traffic dipped 12% this month due to a core algorithm update. You\'ve already implemented a recovery plan. The email should be honest, calm, and forward-looking — not defensive. Include a subject line.',
      minWords: 80,
      hint: 'Your tone is everything here. The client should feel like their account is in capable hands, not that you\'re making excuses.',
    },
  },

  difficult: {
    mcq: [
      {
        q: 'When a client is frustrated, the most important first step is:',
        opts: ['Defend the team\'s performance immediately','Acknowledge their frustration before moving to problem-solving','Offer a discount to calm the situation','Escalate to your manager right away'],
        correct: 1,
        explanation: 'Acknowledgment before solution is the foundation of de-escalation. A client who feels heard is far more receptive to a recovery plan.',
      },
      {
        q: 'A client threatens to cancel. Your first response should:',
        opts: ['Immediately offer a discount','Ask them to reconsider and list everything you\'ve done for them','Acknowledge their frustration, ask what\'s driving it, and set up a call to discuss a path forward','Begin the offboarding process'],
        correct: 2,
        explanation: 'Cancellation threats are often expressions of frustration, not final decisions. Acknowledging and inviting conversation gives you a chance to retain the client.',
      },
    ],
    submission: {
      prompt: 'A client sends you an angry email saying they\'ve seen no improvement in 3 months and are considering canceling. Write your response. Focus on acknowledging their frustration, taking ownership where appropriate, and presenting a clear path forward. Include a subject line.',
      minWords: 100,
      hint: 'Avoid being defensive or over-apologetic. The goal is to re-establish confidence and present a concrete plan.',
    },
  },
};
