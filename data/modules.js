// data/modules.js
const MODULES = {
  priority: {
    key: 'priority',
    title: 'Action Priority Matrix',
    tag: 'tag-priority',
    tagLabel: 'Action priority',
    icon: 'ti-sort-descending',
    iconBg: '#FAEEDA',
    iconColor: '#854F0B',
    desc: 'How to prioritize work based on revenue impact, not urgency. Build the habit of always asking "what moves the needle for this client?"',
    topics: [
      'What is the Action Priority Matrix?',
      'Mapping tasks to revenue impact',
      'The daily prioritization habit',
      'Communicating priorities to clients',
    ],
    assignType: 'both',
    revenueTag: 'Revenue-critical',
    topicContent: ['', '', '', ''],
  },
  reporting: {
    key: 'reporting',
    title: 'Communicating results on calls',
    tag: 'tag-reporting',
    tagLabel: 'Reporting',
    icon: 'ti-presentation',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'Structure, confidence, and clarity for monthly and quarterly reporting calls. How to lead the narrative before clients ask questions.',
    topics: [
      'Leading the narrative — don\'t wait for questions',
      'Structuring your call agenda',
      'Translating data into client language',
      'Handling tough questions with confidence',
      'Closing with clear next steps',
    ],
    assignType: 'both',
    topicContent: ['', '', '', '', ''],
  },
  ahrefs: {
    key: 'ahrefs',
    title: 'Ahrefs Portfolio overview',
    tag: 'tag-tools',
    tagLabel: 'Tools',
    icon: 'ti-tool',
    iconBg: '#EEEDFE',
    iconColor: '#534AB7',
    desc: 'Using Ahrefs Portfolio view to monitor multiple client domains, track backlinks at scale, and surface insights for reporting calls.',
    topics: [
      'Setting up the Portfolio view',
      'Reading backlink trends across clients',
      'Surfacing insights for reporting calls',
    ],
    assignType: 'mcq',
    topicContent: ['', '', ''],
  },
  accuranker: {
    key: 'accuranker',
    title: 'AccuRanker tags & segments',
    tag: 'tag-tools',
    tagLabel: 'Tools',
    icon: 'ti-tag',
    iconBg: '#EEEDFE',
    iconColor: '#534AB7',
    desc: 'How to build and use AccuRanker tag structures to present keyword performance by client topic, page type, or funnel stage.',
    topics: [
      'Building a tag architecture',
      'Using tags in client reporting',
      'Segment-level trend analysis',
    ],
    assignType: 'mcq',
    topicContent: ['', '', ''],
  },
  ga4: {
    key: 'ga4',
    title: 'Annotating in GA4',
    tag: 'tag-tools',
    tagLabel: 'Tools',
    icon: 'ti-chart-line',
    iconBg: '#EEEDFE',
    iconColor: '#534AB7',
    desc: 'Best practices for annotation — what to annotate, how to frame it for clients, and using annotations to defend results on reporting calls.',
    topics: [
      'What and when to annotate',
      'Framing annotations for clients',
    ],
    assignType: 'mcq',
    topicContent: ['', ''],
  },
  crm: {
    key: 'crm',
    title: 'Holding scope & setting boundaries',
    tag: 'tag-crm',
    tagLabel: 'CRM',
    icon: 'ti-handshake',
    iconBg: '#E1F5EE',
    iconColor: '#0F6E56',
    desc: 'Scripts and frameworks for managing scope creep. How to say no professionally, redirect requests, and protect the team\'s capacity.',
    topics: [
      'Recognizing scope creep early',
      'Scripts for redirecting requests',
      'The "Yes, and…" framework',
      'Escalation paths and documentation',
    ],
    assignType: 'both',
    revenueTag: 'Retention-critical',
    topicContent: ['', '', '', ''],
  },
  communication: {
    key: 'communication',
    title: 'Consistent client communication',
    tag: 'tag-crm',
    tagLabel: 'CRM',
    icon: 'ti-message',
    iconBg: '#E1F5EE',
    iconColor: '#0F6E56',
    desc: 'Cadence, tone, and structure for proactive communication. How to make clients feel informed without requiring them to chase you.',
    topics: [
      'Building a communication cadence',
      'The proactive update template',
      'Managing client urgency and anxiety',
      'Tone and channel selection',
    ],
    assignType: 'both',
    revenueTag: 'Retention-critical',
    topicContent: ['', '', '', ''],
  },
  difficult: {
    key: 'difficult',
    title: 'Handling difficult client conversations',
    tag: 'tag-crm',
    tagLabel: 'CRM',
    icon: 'ti-flame',
    iconBg: '#FAECE7',
    iconColor: '#993C1D',
    desc: 'Frameworks for de-escalation, managing expectations, and turning a frustrated client into a retained one.',
    topics: [
      'De-escalation frameworks',
      'Managing expectations after a miss',
      'Turning frustration into retention',
    ],
    assignType: 'both',
    revenueTag: 'Retention-critical',
    topicContent: ['', '', ''],
  },

  // ─── DIGITAL HEALTH PLAYBOOK MODULES ───────────────────────────────────────

  dh_operations: {
    key: 'dh_operations',
    title: 'Industry Operations & Compliance',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-shield-check',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'The compliance foundation every digital health account requires before a single ad goes live — LegitScript certifications, HIPAA guardrails, FDA ad copy rules, and the industry glossary.',
    topics: [
      'LegitScript Certification Requirements',
      'HIPAA & Audience Strategy',
      'FDA Regulations & Compounded Medications',
      'Digital Health Industry Glossary',
    ],
    assignType: 'both',
    topicContent: [
      `<h3>LegitScript Certification: The Prerequisite for All Digital Health Advertising</h3>
<p>LegitScript is a third-party compliance organization whose certification is required by Google, Meta, and Microsoft before running digital health ads. Without it, accounts get flagged, suspended, or limited before launch. Understanding what type — and how many — certifications are needed is the first thing to resolve for every digital health client.</p>

<div class="content-callout">
  <strong>Key Distinction:</strong> LegitScript certifications are <strong>client-owned</strong>, not agency-owned. OBx can guide the application process, but the client must apply and hold the certification under their own business entity. Do not proceed with campaign builds until certification is confirmed active.
</div>

<h3>The Four-Step Certification Flow</h3>
<ol>
  <li><strong>Identify Service Type</strong> — Determine whether the client offers online pharmacy services, addiction treatment, telehealth, or a combination of multiple service lines.</li>
  <li><strong>Determine Cert Type(s)</strong> — Select the appropriate LegitScript certification: Healthcare (General), Online Pharmacy, or Addiction Treatment. Mixed providers may need dual certification.</li>
  <li><strong>Apply Per Platform</strong> — LegitScript approval unlocks access requests to Google, Meta, and Microsoft separately. Each platform has its own permission submission process.</li>
  <li><strong>Renew Annually</strong> — Certifications auto-renew on annual billing cycles. Confirm client awareness — lapses in certification can cause account-wide ad disapprovals.</li>
</ol>

<h3>Certification Types by Service Category</h3>
<ul>
  <li><strong>Healthcare (General)</strong> — For telehealth platforms, general medical services, and mental health providers. Required by Google, Meta, and Microsoft. Covers most digital health clients that don't prescribe or dispense.</li>
  <li><strong>Online Pharmacy</strong> — For clients dispensing prescription medications, compounding pharmacies, and mail-order Rx. Meta also requires a separate permission request after LegitScript is granted; Google Merchant Center requires its own separate certification application.</li>
  <li><strong>Addiction Treatment Services</strong> — For rehab facilities, MAT (medication-assisted treatment) providers, and Suboxone clinics. Required by Google and Meta. Required even if addiction treatment is a secondary service line.</li>
  <li><strong>CBD Services</strong> — For hemp-derived CBD product sellers. Google only. Separate LegitScript product; limited to topical products in eligible US states only.</li>
</ul>

<div class="content-callout">
  <strong>Dual Certification Requirement:</strong> Clients who offer both addiction treatment services AND online pharmacy/prescription drug dispensing must hold both the Addiction Treatment and Online Pharmacy certifications. Holding only one will result in policy flags for the uncertified service line — even within the same account. This is common for MAT providers that also mail-order Suboxone or GLP-1 medications.
</div>

<h3>Platform-Specific Certification Processes</h3>
<p><strong>Google Ads</strong> (Most Restrictive): Submit LegitScript certificate number via Google's Healthcare &amp; Medicines certification form. Account may receive "Approved Limited" status — this is normal and expected for prescription or restricted drug advertisers. Google Merchant Center requires a <em>separate</em> certification application even if Google Ads is already approved. Personalized advertising is restricted for most digital health accounts — this disables Gmail ads, dynamic remarketing, 1st-party customer match audiences, and Custom Intent audiences.</p>

<p><strong>Meta</strong> (Two-Step Process): Step 1: Obtain the relevant LegitScript certification and receive certificate credentials. Step 2: Submit a separate Meta permission request using the LegitScript certificate. Meta reviews independently — approval is not automatic and can take 1–3 weeks. Most digital health clients also need to apply for Meta's Personal Health and Appearance Advertising permission, plus Subscription Services permission if billing is recurring.</p>

<p><strong>Microsoft Advertising</strong>: LegitScript Healthcare or Online Pharmacy certification required. Submit through Microsoft's Pharmaceutical &amp; Healthcare Advertising policies page. Less restrictive than Google/Meta in terms of audience features.</p>

<p>There are 21 total Google healthcare ad certifications available in the US — the most commonly needed are listed above, but niche service lines (clinical trials, stem cell therapy, certain supplements) may trigger additional certification requirements. When in doubt, run the client's URL through LegitScript's free lookup tool before onboarding.</p>

<p>Verify the certification shows as active on the LegitScript website before proceeding, then confirm it has been applied to each ad account through that platform's certification process — a live LegitScript cert alone is not enough if it hasn't been submitted and approved within the ad account itself.</p>`,

      `<h3>What HIPAA Means for Audience Strategy</h3>
<p>HIPAA (Health Insurance Portability and Accountability Act) governs how Protected Health Information (PHI) can be used and shared. PHI is any individually identifiable information tied to a person's health condition, treatment, or payment for healthcare. The key word is <em>identifiable</em> — aggregate or anonymized health data is not PHI.</p>

<p>For OBx strategists, the practical impact is straightforward: HIPAA status determines which audience features are available — and which aren't — when building a media plan for a digital health client. Most digital health accounts operate under personalized advertising restrictions on Google and have audience limitations on Meta driven by HIPAA considerations. These restrictions are baked into platform policy — meaning the practical impact hits every digital health account.</p>

<h3>Platform-Level Impact at a Glance</h3>
<ul>
  <li><strong>Google</strong> — 1st-party audiences are not available. Google's personalized advertising restrictions block 1st-party audiences, Customer Match, and Custom Intent for digital health accounts regardless of HIPAA status. Google removed its own HIPAA restriction on Enhanced Conversions in 2025, but the broader personalized advertising restriction remains.</li>
  <li><strong>Meta</strong> — Partially available. Pixel-based retargeting and interest audiences are generally accessible; patient list uploads and CRM-seeded audiences depend on the client's HIPAA posture. HIPAA status directly informs which Custom Audience types are appropriate to recommend.</li>
  <li><strong>TikTok</strong> — Limited. No health data collection via tracking pixels; audience options rely on platform-side interest and behavioral signals. Cannot collect health-related data through TikTok's pixel or SDK regardless of HIPAA status.</li>
  <li><strong>LinkedIn</strong> — Less restricted. Professional demographic targeting is the primary strategy; not a PHI-sensitive channel for most digital health use cases. Targets healthcare professionals, not patients.</li>
</ul>

<div class="content-callout">
  <strong>Starting Assumption:</strong> Go into every digital health engagement assuming that 1st-party audiences on Google are off the table and that Meta audience strategy needs to be built around pixel-based and interest targeting first. Patient list uploads are not a default recommendation — if a client raises it, that conversation belongs with their team, not in the media plan.
</div>

<h3>OBx Data Handling Rules for Digital Health Accounts</h3>
<p><strong>Never do the following:</strong></p>
<ul>
  <li>Request or accept access to patient lists, CRM exports, or any file containing patient names, emails, or health data</li>
  <li>Upload Customer Match or custom audience lists sourced from patient records</li>
  <li>View individual lead data in platform dashboards — names, contact info, and health condition responses in form submissions are PHI</li>
  <li>Pass patient identifiers (name, email, DOB) as conversion parameters in tracking events</li>
  <li>Use condition-specific terminology in UTM parameters that could be captured by tracking pixels (e.g., utm_campaign=suboxone-patients)</li>
  <li>Configure pixels to fire on authenticated patient portal pages or post-intake confirmation pages without explicit guidance from the tagging team</li>
</ul>

<p><strong>Standard practice:</strong></p>
<ul>
  <li>Track aggregate conversion events only — count of form completions, consultation bookings, page goals — without any PII attached</li>
  <li>Use platform-generated interest and behavioral audiences that don't require OBx to supply health data</li>
  <li>Keep UTM naming conventions generic and condition-neutral in campaign taxonomy</li>
  <li>Flag pixel placement concerns to the tagging team when intake forms or condition-specific pages are in scope</li>
  <li>Use conversion counts and aggregate cost-per-lead metrics for reporting — never pull individual lead records for performance analysis</li>
  <li>Refer any client request involving patient list activation to account leadership before responding</li>
</ul>

<p>HHS issued guidance in 2022 (updated 2024) clarifying that tracking pixels on covered entity websites that transmit identifiable health information to third-party platforms — including Google and Meta — without a BAA can constitute a HIPAA violation. Full tracking setup guidance is covered in Part 10: Tagging, Analytics &amp; Attribution.</p>`,

      `<h3>FDA Regulations &amp; What Strategists Need to Know</h3>
<p>The FDA regulates how prescription medications — including compounded drugs — can be advertised. Violations don't just cause ad disapprovals; they can trigger Google Intellectual Property policy flags and risk the entire account. The September 2025 FDA crackdown on deceptive compounded medication advertising makes this especially critical for GLP-1, hormone therapy, and MAT clients.</p>

<h3>What Are Compounded Medications?</h3>
<p>Compounded medications are custom-formulated drugs prepared by a licensed compounding pharmacy to meet a specific patient's needs — not FDA-approved as manufactured products. Many digital health clients (GLP-1 telehealth, hormone therapy, MAT) use compounded versions of brand-name drugs. These cannot be advertised as equivalent to, or better than, their FDA-approved counterparts.</p>

<p>Off-label use refers to prescribing an FDA-approved drug for a purpose not in its official labeling (e.g., Semaglutide for weight loss when originally approved for diabetes). While legal for doctors to prescribe, advertising off-label uses requires extreme care — any claim that implies FDA approval for the off-label use is deceptive and violates both FDA guidelines and platform policy.</p>

<h3>FDA-Flagged Language: What Triggers Policy Violations</h3>
<p><strong>Equivalency Claims — Prohibited for Compounded Medications:</strong></p>
<ul>
  <li>"Same active ingredient as Ozempic" / "Same active ingredient as Wegovy"</li>
  <li>"Clinically proven ingredients"</li>
  <li>"Equivalent to [brand name]"</li>
  <li>"Generic version of Semaglutide"</li>
  <li>"FDA-approved ingredients" — this implies the compound itself is approved. It is not. The active ingredient may be FDA-approved in its branded form, but the compounded product is not.</li>
</ul>

<p><strong>Outcome Claims — High Risk Without Clinical Substantiation:</strong></p>
<ul>
  <li>"Clinically proven to [outcome]"</li>
  <li>"Guaranteed results"</li>
  <li>"Cure [condition]" / "Treat [condition] permanently" / "Reverses [condition]"</li>
  <li>"Safe and effective for everyone"</li>
  <li>Any outcome claim requires verifiable clinical evidence and legal approval. IRB review may be needed for clinical trial-adjacent messaging.</li>
</ul>

<p><strong>Approved Language Patterns — Lower Policy Risk:</strong></p>
<ul>
  <li>"Semaglutide — prescription required"</li>
  <li>"Compounded by licensed pharmacists"</li>
  <li>"Telehealth-prescribed weight loss medication"</li>
  <li>"Doctor-supervised treatment program"</li>
  <li>"Results may vary — prescription required"</li>
  <li>"Online consultation with licensed providers"</li>
</ul>

<h3>Ad Copy Do vs. Don't Examples</h3>
<p><strong>Don't write:</strong> "Get the same active ingredient as Ozempic — compounded Semaglutide, clinically proven for weight loss. Order online without a prescription."</p>
<p><strong>Write instead:</strong> "Compounded Semaglutide — prescribed by licensed telehealth providers. Start your online consultation today. Results may vary; prescription required."</p>

<p><strong>Don't write:</strong> "Our GLP-1 medication reverses Type 2 diabetes and guarantees 20% body weight reduction — same FDA-approved ingredients as Wegovy."</p>
<p><strong>Write instead:</strong> "GLP-1 medications prescribed for weight management. Connect with a licensed provider online — doctor review included. Individual results vary."</p>

<div class="content-callout">
  <strong>IRB Approval for Clinical Claims:</strong> If a client's campaign references clinical trial data or study results, the FDA requires IRB (Institutional Review Board) review of the final printed/published ad before it runs. This is a client-side legal obligation — flag it during onboarding if any clinical language is expected in creative. Ad copy referencing studies without IRB review is both an FDA violation and a Google Misleading Content policy violation.
</div>`,

      `<h3>Digital Health Industry Glossary</h3>
<p>Digital health clients speak a different language than most verticals. Misunderstanding these terms in kickoffs, creative briefs, or strategy documents creates client trust issues and strategic misfires. Learn these before your first client call.</p>

<ul>
  <li><strong>Telehealth</strong> — Broad term for healthcare delivery via technology — includes remote monitoring, health education, and administrative services beyond direct patient care. Higher-funnel, awareness-focused clients; broader keyword strategy.</li>
  <li><strong>Telemedicine</strong> — Specifically refers to remote clinical services — a doctor diagnosing or prescribing via video/phone. A subset of telehealth. Conversion-intent searchers often use "telemedicine" for direct-care searches.</li>
  <li><strong>Synchronous (Synch)</strong> — Real-time provider-patient interaction — video call, phone consultation. Higher CPL expectation; users searching for immediate access.</li>
  <li><strong>Asynchronous (Asynch)</strong> — Non-real-time interaction — patient submits intake form/photos, provider reviews and responds later. Lower friction conversion path; higher volume; used heavily in GLP-1 and dermatology telehealth.</li>
  <li><strong>Out-of-Pocket / Cash Pay</strong> — Patient pays directly without insurance involvement. Most digital health paid media targets cash-pay patients — pricing transparency in ads is critical.</li>
  <li><strong>Compounded Medication</strong> — Custom-formulated drug made by a licensed compounding pharmacy; not FDA-approved as a finished product. Requires strict ad copy compliance — cannot claim equivalence to brand-name drugs.</li>
  <li><strong>Off-Label Treatment</strong> — Using an FDA-approved drug for a purpose not in its official labeling. Legal to prescribe; advertising requires careful framing — cannot imply FDA approval for the off-label use.</li>
  <li><strong>Local Fill</strong> — Prescription sent to a patient's local pharmacy rather than dispensed by mail order. Relevant for clients with local-fill options — can support geo-targeted campaigns or "near me" strategy.</li>
  <li><strong>PHI (Protected Health Information)</strong> — Any individually identifiable health information — includes names, contact info, diagnosis, treatment data — protected under HIPAA. Determines which audience targeting methods are permitted on each platform.</li>
  <li><strong>EMR / EHR</strong> — Electronic Medical Record / Electronic Health Record. EHR is more interoperable across providers. Important for CRO/intake form design — understand what data flows into client's EMR/EHR from form completions.</li>
  <li><strong>IRB (Institutional Review Board)</strong> — Ethics committee that reviews research involving human subjects; must review clinical trial-related advertising before publication. Any ad copy referencing clinical studies requires IRB review.</li>
  <li><strong>MAT (Medication-Assisted Treatment)</strong> — Use of FDA-approved medications (Suboxone, Vivitrol, methadone) combined with counseling to treat substance use disorders. Requires LegitScript Addiction Treatment certification.</li>
  <li><strong>GLP-1</strong> — Glucagon-like peptide-1 receptor agonists — class of medications (Semaglutide, Tirzepatide) used for Type 2 diabetes and weight management (Ozempic, Wegovy, Mounjaro). Highest-growth digital health category; compounded versions face strict FDA ad copy rules; TikTok added FDA-approved GLP-1 advertising in August 2025.</li>
  <li><strong>LegitScript</strong> — Third-party compliance and certification organization trusted by Google, Meta, and Microsoft to vet digital health advertisers. Certification is a prerequisite before any health advertising can run on major platforms.</li>
  <li><strong>HIPAA BAA</strong> — Business Associate Agreement — legal contract required between a HIPAA-covered entity and any vendor (including agencies) that handles PHI. Must be executed before OBx can handle any patient data, upload lists, or configure PHI-touching integrations.</li>
  <li><strong>Intake Form</strong> — The online questionnaire patients complete before receiving a telehealth consultation or prescription; often the primary conversion event. Critical CRO focus — form completion rate is the core KPI for most digital health paid media programs.</li>
  <li><strong>Patient Journey</strong> — The full sequence from awareness → intake → consultation → treatment → refill; longer and more complex than e-commerce purchase funnels. Landing pages must explain the process; educate before converting.</li>
  <li><strong>Suboxone / Buprenorphine</strong> — FDA-approved medication for opioid use disorder (OUD); controlled substance requiring DEA-registered prescriber. Direct references in ad copy often trigger platform disapprovals even with LegitScript certification — use clinical framing.</li>
  <li><strong>FDA-Approved vs. FDA-Cleared</strong> — Approved = FDA reviewed evidence of safety AND efficacy (drugs, complex devices). Cleared = substantial equivalence to existing device only (most medical devices). Advertising "FDA-approved" for a cleared-only device is a deceptive claim — verify client's regulatory status.</li>
  <li><strong>Prescription Drug Advertising (PTD)</strong> — Google's category for direct-to-consumer prescription drug advertising; subject to strict eligibility and certification requirements. Determines account subcategorization in Google — Pharma_Sales_Non-PTD vs. PTD support — impacts keyword delivery.</li>
</ul>`,
    ],
  },

  dh_search: {
    key: 'dh_search',
    title: 'Google Search & Ad Copy',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-search',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'How to execute Google Search for digital health — account-level restrictions, "Approved Limited" status, the high-intent keyword qualifier framework, and RSA structure.',
    topics: [
      'Account-Level Restrictions & "Approved Limited" Status',
      'Keyword Strategy: Intent Qualification',
      'Ad Copy Guidelines for Digital Health',
    ],
    assignType: 'both',
    topicContent: [
      `<h3>Understanding "Approved Limited" Status</h3>
<p>Ads in digital health accounts will routinely show a status of <strong>"Approved Limited: Prescription Drugs, Restricted Drugs."</strong> This is <strong>not a disapproval</strong> — it is a required label that enables delivery on prescription and restricted drug keywords. Do not appeal it. Appealing this status can cause it to be removed, which will stop ads from delivering entirely. Only appeal actual disapprovals (destination not working, trademark violations, etc.). Since digital health ads are delivered based on their status code, maintaining the prescription label on ads is critical to continued delivery.</p>

<h3>PTD vs. Non-PTD Certification Subcategorization</h3>
<p>There is a backend subcategorization within Google's Prescription Drug Services certification that is not visible in the UI but directly affects keyword delivery. If the certification application does not explicitly call out Restricted Drug Terms / PTD (Prescription Drug Terms), Google may grant a <code>Pharma_Sales_Non-PTD</code> certification instead of full PTD support — silently blocking medication-specific keywords from serving.</p>

<ul>
  <li><strong>What happens:</strong> If the application doesn't specifically call out Restricted Drug Terms PTD, Google may grant Pharma_Sales_Non-PTD. This certification blocks keywords for restricted/prescription drug terms — ads simply stop delivering for those terms without a clear policy disapproval.</li>
  <li><strong>Example:</strong> A client selling naltrexone needs PTD support to serve on naltrexone-related keywords. With Pharma_Sales_Non-PTD, delivery silently stops for those terms. Note: the Addiction Services Provider certification does allow PTDs to be targeted.</li>
  <li><strong>Fix:</strong> In the summary section of the Google certification application, include all relevant information for the provider — both PTD and Non-PTD services. If delivery has already stopped for prescription drug terms, reapply for the certification to ensure proper association. When applying for dual certifications (e.g., addiction services + prescription drugs), note this in the summary and confirm Google associates both — not just the second one.</li>
</ul>

<h3>What Personalized Advertising Restrictions Block — By Format</h3>
<p>Most digital health accounts fall under Google's personalized advertising policy. The table below maps what is blocked and what still works across every Google campaign type.</p>

<ul>
  <li><strong>Search</strong> — Blocked: 1st-party audiences (remarketing lists, Customer Match, Similar To), Custom Intent audiences. Available: All standard keyword targeting, RSAs, sitelinks, price extensions, call extensions.</li>
  <li><strong>GMC / Shopping</strong> — Blocked: Dynamic remarketing. Available: Standard Shopping; seller &amp; product ratings (if minimum reviews met).</li>
  <li><strong>Performance Max</strong> — Blocked: Discovery, Gmail, dynamic remarketing; 1st-party audience signals; custom segments; customer acquisition new vs. existing setting. Available: Google-generated audiences (affinity, in-market, detailed demographics); remaining PMax placements.</li>
  <li><strong>YouTube</strong> — Blocked: Product ads within YouTube campaigns; Video for Action. Available: Standard video campaigns with Google-generated audience targeting.</li>
  <li><strong>Demand Gen</strong> — Blocked: Gmail placements; any remarketing. Available: Discovery placements with interest-based targeting.</li>
  <li><strong>Store Visit Tracking</strong> — Entirely blocked for advertisers under personalized advertising policy.</li>
  <li><strong>Automated Extensions</strong> — Previously blocked; now generally operational on new accounts without disapprovals. Disable if client requires legal copy approval for all ad content.</li>
</ul>

<div class="content-callout">
  <strong>2025 Update — Enhanced Conversions:</strong> Google removed its own HIPAA restriction on Enhanced Conversions in 2025. EC is no longer blocked for digital health advertisers from a platform policy standpoint — the broader personalized advertising restrictions above still apply, but EC itself is now available. Full EC implementation guidance is covered in Part 10 (Tagging, Analytics &amp; Attribution).
</div>`,

      `<h3>Keyword Strategy: Intent Qualification</h3>
<p>Digital health keyword strategy requires a different lens than most verticals. The same condition term can signal research intent, purchase intent, or clinical need — and the modifier attached to it is what separates a BOFU conversion candidate from wasted spend.</p>

<h3>Competitor Keyword Targeting</h3>
<p><strong>Multi-Service Competitors — Add Qualifiers:</strong> Platforms like Teladoc, GoodRx, and Lemonaid Health offer multiple service lines. Bidding on their brand name alone pulls in too much unqualified traffic. Always add a condition or medication qualifier to scope intent: "teladoc birth control" not just "teladoc"; "GoodRx tretinoin coupon" not just "GoodRx".</p>

<p><strong>Single-Service Competitors — Brand Alone Works:</strong> Direct competitors who offer only one service line have clear intent signal baked into their brand name. Someone searching for a single-service competitor is almost certainly looking for that specific service — bidding on brand name alone is efficient and appropriate.</p>

<h3>The High-Intent Keyword Qualifier Framework</h3>
<p>The following qualifier categories indicate purchase or treatment-seeking intent when combined with a condition or medication term. Validate against the client's actual service offering before including.</p>

<p><strong>Treatment &amp; Action — Purchase / prescription intent:</strong> treatment, at home treatment, medication, medicine, pill, tablet, shot, cream, serum, ointment, gel, topical, oral, injection, prescription, Rx, prescribe, buy, order, get</p>

<p><strong>Access &amp; Service — Provider and delivery intent:</strong> doctor, dermatologist, specialist, consult, appointment, near me, online, delivery, shipping, subscription, pharmacy</p>

<p><strong>Diagnosis &amp; Testing — Only high-intent if client offers these services:</strong> diagnosis, test, test kit, quiz, evaluation, assessment. These terms become low-intent if the client does not offer diagnosis or testing services — evaluate against the client's actual offering before adding.</p>

<p><strong>Cost &amp; Coverage — Pricing and insurance-aware intent:</strong> cost, price, insurance, free, no cost, generic, off brand, OTC, over the counter, dosage, strength</p>

<p><strong>Outcome &amp; Intent Signals — Action and solution-seeking language:</strong> help, stop, fix, remove, overcome, get rid, reduce, fade, relief, relieve, remedy, how to, prevent, best, reviews, safe, mild, severe, moderate, app</p>

<div class="content-callout">
  <strong>Low-Intent Qualifiers — Exclude or Negative Match:</strong> The following qualifiers typically indicate research or informational intent rather than treatment-seeking behavior. Add as negatives unless the client's offering specifically addresses them: "side effects," "causes," "symptoms," "home remedy," "natural," "DIY." Note: "remedy" by itself can be high-intent — "at home remedy" is where it shifts toward low-intent behavior. Evaluate in context.
</div>

<h3>Keyword Research Method</h3>
<ol>
  <li><strong>Live Searches First</strong> — Run live Google searches for the client's primary conditions and medications. Pay attention to autocomplete suggestions, People Also Ask boxes, and related searches at the bottom of the results page. Always run live searches before opening a keyword research tool. The SERP itself tells you what Google considers most relevant — keyword tools show volume; the SERP shows intent.</li>
  <li><strong>Read WebMD, Healthline, and Condition-Specific Sites</strong> — Thoroughly read through WebMD, Healthline, and related health information sites for the client's primary conditions. These sites are optimized for how patients actually search — the terminology, synonym sets, and condition categories they use are a direct map to keyword expansion opportunities.</li>
  <li><strong>Use Google's Medication Sidebar</strong> — When you search for a specific medication on Google, the results page often displays a sidebar showing related medications, drug classes, and condition associations. This is one of the fastest ways to discover synonyms, generic/brand name variants, and competitor medications to include in keyword lists.</li>
</ol>`,

      `<h3>RSA Headline Structure for Digital Health</h3>
<p>RSA copy for digital health accounts must balance platform policy compliance, trademark accuracy, and pricing transparency — all within Google's 30/90 character limits.</p>

<p><strong>1. Medication-Based Headlines (3–5):</strong> Lead with the medication name and formulary type. Use the generic name format for compounded or generic offerings. At least one should be pricing-focused.</p>
<ul>
  <li>Generic name + formulary: "Bimatoprost Lash Rx Online"</li>
  <li>Generic name + pricing: "Get Bimatoprost Lash Rx — From $53"</li>
  <li>Generic (Generic Brand®) format: "Bimatoprost (Generic Latisse®)"</li>
</ul>

<p><strong>2. Condition / Service Headlines (2–4):</strong> Frame around the patient outcome or service type. Avoid outcome guarantees — use process-oriented and intent-based language.</p>
<ul>
  <li>Outcome framing: "Rx For Longer, Thicker Lashes"</li>
  <li>Process framing: "Enhanced Eyelash Growth Serum"</li>
  <li>Clinical framing: "Dermatologist-Prescribed Lash Treatment"</li>
</ul>

<p><strong>3. Branded Headline (1):</strong> Include one headline that pairs the brand name with the product or service category. Use ™ or ® symbol if applicable: "Nurx™ — Generic Latisse®", "Nurx™ — Eyelash Growth Serum"</p>

<p><strong>4. General Value Prop Headlines (Remaining):</strong> Fill remaining slots with value propositions relevant to the telehealth model: "No In-Person Doctor Visit Needed", "Dermatologist Recommended", "FDA-Approved Treatment"</p>

<h3>RSA Description Structure</h3>
<ul>
  <li><strong>Medication-Based Descriptions (1–2):</strong> Lead with the medication + brand context, include pricing. Example: "Generic Latisse® — The Only FDA-Approved Solution For Eyelash Growth. Prescribed Online." or "Get Generic Latisse® Prescription Online For $53/Month. No In-Person Doctor Visit Needed."</li>
  <li><strong>Condition / Service Descriptions (1–2):</strong> Service convenience and outcome framing. Example: "Safely Grow Your Eyelashes For Less Than $2/Day. Prescribed Online &amp; Delivered Free."</li>
</ul>

<h3>Generic vs. Brand Naming Format</h3>
<p>Standard format: <strong>"[Generic Name] (Generic [Brand Name]®)"</strong> — Example: "Bimatoprost (Generic Latisse®)". This format tells the searcher exactly what they're getting while associating it with the brand-name drug they may have searched for. Always confirm the ® or ™ symbol is accurate.</p>

<p><strong>Avoid:</strong> "Same active ingredient as Latisse®" — This phrasing implies equivalency and can trigger Google Intellectual Property policy flags. It also violates FDA guidance on compounded medication advertising.</p>

<h3>Pricing Transparency Rules</h3>
<ul>
  <li><strong>Avoid:</strong> "As Low As $0" — If $0 is only available with insurance, stating it without qualification violates Google's Misrepresentation policy.</li>
  <li><strong>Use instead:</strong> "As Low As $0 With Insurance" or "$0 With Insurance, $15 Without" — Always include the coverage condition.</li>
</ul>

<h3>Copy Best Practices</h3>
<p><strong>Always do:</strong> End every description with a period. Capitalize the first letter of each word (Title Case). Include trademark symbols (™, ®) wherever applicable and accurate. Use =LEN() formula in bulksheets to verify character counts. Check for duplicate headlines within the same RSA. Get internal legal approval from the client before posting new copy if required.</p>

<p><strong>Never do:</strong> Make outcome claims that aren't verifiable ("cure," "reverses," "guaranteed"). Reference brand-name drugs as equivalent to compounded versions. Show pricing without disclosing insurance conditions. Skip spell-checking bulksheets before upload — typos in medication names are policy-risky.</p>`,
    ],
  },

  dh_shopping: {
    key: 'dh_shopping',
    title: 'Google Shopping & GMC',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-shopping-cart',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'Google Shopping for digital health — eligibility, the duplicate generic/brand PDP strategy, daily GMC disapproval management, and the 2025 Subscription policy update.',
    topics: [
      'Shopping Eligibility & GMC Certification',
      'Duplicate PDP Strategy: Generic & Brand Coverage',
      'GMC Disapproval Management',
      '2025 Policy Update & Extended Tactics',
    ],
    assignType: 'mcq',
    topicContent: [
      `<h3>Who Qualifies for Google Shopping</h3>
<p>Google Shopping is not just for e-commerce retailers. Digital health clients who sell medications, test kits, or wellness products through a real checkout flow can run Shopping campaigns. The business model doesn't have to be pure e-commerce — even telehealth providers can qualify if the user can go through a purchase process, even if the prescription is determined post-consultation.</p>

<div class="content-callout">
  <strong>GMC Certification Is Separate:</strong> A Google Ads account that is already certified for Healthcare &amp; Medicines does NOT automatically grant Shopping eligibility. Google Merchant Center requires its own separate LegitScript-backed certification application. Missing this step is one of the most common launch delays for digital health Shopping campaigns.
</div>

<h3>GMC Certification Process</h3>
<ul>
  <li><strong>How to apply:</strong> Submit via Merchant Center's "Certification Programs" section under account settings. Requires the client's active LegitScript certification number. Timeline is typically 1–3 weeks for initial review.</li>
  <li><strong>What it unlocks:</strong> Ability to list prescription and restricted health products in Google Shopping. Without this certification, health product listings are disapproved at the item level as "prohibited pharmaceutical" — which no amount of feed optimization will resolve.</li>
  <li><strong>Account restrictions:</strong> Certified health accounts cannot run dynamic remarketing through GMC (same personalized advertising restriction that affects Google Ads).</li>
</ul>

<h3>PDP Requirements for Digital Health Shopping</h3>
<ul>
  <li><strong>Out-of-Pocket Price</strong> — Must be clearly displayed. If insurance affects pricing, state the cash-pay price alongside. Do not display $0 without the coverage qualifier.</li>
  <li><strong>Consult Fee (if applicable)</strong> — If the total cost includes a consultation fee, it must be shown. Hiding the consult fee until checkout is a policy violation and a trust problem.</li>
  <li><strong>Checkout Flow</strong> — User must be able to initiate a real purchase process from the page. Landing on a pure info page without a purchase path will not qualify.</li>
  <li><strong>"Prescription Required" Disclaimer</strong> — Must appear clearly on the page for any Rx medication PDP. Placement in fine print only is insufficient — the disclaimer should be visible without scrolling on desktop.</li>
  <li><strong>Medication Name</strong> — Both generic and brand name (where applicable) should appear on the page to support both intent types.</li>
</ul>

<p>Before building Shopping campaigns, confirm: Is there a real product that can be purchased through a checkout flow? If the client only offers consultations with prescriptions that patients fill elsewhere (local fill), Shopping may not apply. If the client ships medications directly, Shopping is almost certainly in scope.</p>`,

      `<h3>The Duplicate PDP Strategy</h3>
<p>For clients selling medications with both a generic name and a well-known brand equivalent, the duplicate PDP strategy doubles Shopping coverage across both intent types — without requiring separate landing pages. Each PDP is optimized for its respective search query while pointing to the same underlying product and checkout flow.</p>

<p><strong>The Strategy:</strong> Create two separate PDPs per product — one optimized for the generic medication name, one optimized for the brand-name reference. Each becomes its own GMC feed item with a distinct product title. This covers searchers who look up the generic name (often cost-conscious or research-driven) and searchers who look up the brand name they already know.</p>

<h3>Example: Bimatoprost / Latisse®</h3>
<ul>
  <li><strong>PDP 1 — Generic Name Optimized:</strong> Title: "Bimatoprost Eyelash Growth Serum | Prescription Solution". Target intent: non-brand, generic searches — "bimatoprost online," "eyelash growth prescription". Feed title: "Bimatoprost Eyelash Growth Serum — Prescription Required"</li>
  <li><strong>PDP 2 — Brand Reference Optimized:</strong> Title: "Generic Latisse® Eyelash Growth Serum | Prescription Solution". Target intent: brand-aware searches — "generic Latisse online," "Latisse alternative". Feed title: "Generic Latisse® Eyelash Growth Serum — Bimatoprost Rx"</li>
</ul>

<h3>Implementation Steps</h3>
<ol>
  <li><strong>Build Both PDPs on the Client's Site:</strong> Each PDP needs its own unique URL. The page content can be nearly identical — what changes is the page title, H1, meta description, and primary medication references. Both pages must meet the full PDP requirements (pricing, disclaimer, checkout path). Unique URL per PDP is required for separate GMC feed items.</li>
  <li><strong>Create Two Feed Items in GMC:</strong> Submit each PDP as a separate product in the Merchant Center feed. Use distinct product titles — title is one of the most heavily weighted fields in Shopping matching. The generic-name PDP title should lead with the generic name; the brand-reference PDP title should lead with "Generic [Brand Name]®." Product title = highest-weight Shopping match field — optimize it like a keyword.</li>
  <li><strong>Monitor Both Items Independently:</strong> Each feed item has its own approval status in GMC. Disapprovals on one item do not automatically affect the other. The brand-reference PDP may be more likely to trigger intellectual property flags due to the ® reference, while the generic PDP is more likely to trigger pharmaceutical category reviews.</li>
</ol>

<p>The duplicate PDP strategy also has an organic SEO benefit — two optimized medication pages instead of one. Coordinate with the client's SEO team before creating the pages so the content strategy aligns.</p>`,

      `<h3>Daily GMC Monitoring</h3>
<p>Health product listings in GMC require active daily monitoring. Even properly certified accounts will see item-level disapprovals — platform policy enforcement runs automatically and health products trigger reviews more frequently than standard retail. Set a daily reminder to check GMC for disapprovals. For digital health accounts, a week of unaddressed item disapprovals during peak season can represent significant revenue impact.</p>

<h3>Disapproval Resolution Ladder</h3>
<ol>
  <li><strong>Refetch the Feed — Start Here Always:</strong> Many health product disapprovals are triggered by a stale policy flag, not an actual problem with the current item data. Use GMC's "Request Crawl" or feed refetch to force Google to re-evaluate the current page. This resolves a significant percentage of first-occurrence disapprovals within 24–48 hours without any content changes.</li>
  <li><strong>Open a GMC Support Case:</strong> If the refetch doesn't resolve the disapproval, open a support case through GMC's help center. For certified health accounts, a support agent can often manually re-review the item. Be prepared to provide: the account's LegitScript certificate number, the item ID, and the disapproval reason shown in GMC.</li>
  <li><strong>Update Item Info or Change Item ID and Resubmit:</strong> For persistent disapprovals, update the relevant field (title, description, price, or URL) and resubmit — or change the Item ID entirely to force a fresh evaluation without the existing disapproval history attached to it. This is the last resort before escalating to LegitScript for "prohibited pharmaceutical" category flags.</li>
</ol>

<div class="content-callout">
  <strong>LegitScript Involvement in Item-Level Disapprovals:</strong> "Prohibited pharmaceutical" item-level disapprovals route to LegitScript's internal review team, which operates on its own timeline separate from Google's support SLAs. Factor in 1–3 additional business days minimum. If a client has a hard deadline for Shopping coverage, flag LegitScript review timelines during campaign setup — not after a disapproval lands.
</div>

<h3>Common Disapproval Reasons &amp; First Response</h3>
<ul>
  <li><strong>Prohibited Pharmaceutical:</strong> Confirm LegitScript cert is active and properly associated with GMC account; refetch. If cert is active and issue persists, escalate to LegitScript review — do not just keep refetching.</li>
  <li><strong>Misleading or Inaccurate Information:</strong> Check that PDP pricing matches feed data exactly; verify "prescription required" disclaimer is visible. Update item data to match PDP content; resubmit.</li>
  <li><strong>Destination Not Working:</strong> Verify the PDP URL loads correctly and the checkout flow is functional. Fix technical issue on PDP; request crawl after fix is deployed.</li>
  <li><strong>Price Mismatch:</strong> Compare feed price field vs. price displayed on PDP — they must match exactly. Update feed or PDP to align; resubmit.</li>
  <li><strong>Missing Required Fields:</strong> Check feed for GTIN, brand, condition fields. Add missing fields; contact support if GTIN is unavailable for compounded products.</li>
</ul>`,

      `<h3>2025 Subscription &amp; Sale of Service Policy Update</h3>
<p>Google Merchant Center updated enforcement of its Subscription &amp; Sale of Service policy in 2025, with specific impact on digital health advertisers operating on recurring billing models. Subscription-based products — including GLP-1 programs, ongoing telehealth memberships, and auto-refill medication plans — now require clear and conspicuous disclosure of subscription terms directly on the product landing page, not buried in terms of service. Subscription pricing shown in the feed must match what is shown at checkout. Digital health advertisers with recurring billing models should audit their PDPs for compliance before this causes item-level disapprovals.</p>

<h3>Sitelink Strategy for Digital Health Shopping</h3>
<p>Sitelinks in Shopping campaigns extend the ad footprint and support cross-sell opportunities. Use these four sitelink types as the standard starting framework:</p>
<ol>
  <li><strong>Survey / Intake Flow:</strong> Link directly to the intake questionnaire or consultation start page. This is typically the highest-converting entry point and should always be sitelink #1.</li>
  <li><strong>Service-Line Specific Links:</strong> Link to each primary service category — weight loss, hair loss, skin, sexual health, etc. These enable cross-sell exposure.</li>
  <li><strong>Medication Category Page:</strong> Link to a medications or treatments overview page. Useful for searchers who found the Shopping ad through a specific drug term but want to understand the full formulary available.</li>
  <li><strong>FAQ Page:</strong> Link to a frequently asked questions page addressing the most common pre-conversion concerns. Reduces friction for first-time telehealth visitors.</li>
</ol>

<h3>Seller &amp; Product Ratings</h3>
<p>Seller ratings and product ratings can run on digital health Shopping campaigns if the account meets Google's minimum review thresholds (typically 100+ reviews for seller ratings). There is no health-specific block on ratings for certified accounts. However, Google has advised that for digital health advertisers, ratings may not render on every query — particularly for prescription drug-related searches. Expect ratings to show inconsistently, not universally. Enable ratings if the client meets the minimum threshold — even partial rendering is incremental.</p>

<h3>Apple Search Ads — Supplemental Channel</h3>
<p>Apple Search Ads does not require LegitScript certification to run digital health ads — making it a valuable supplemental channel for reaching iOS users. Apple Search Ads operates under a different policy framework than Google and Meta, with significantly lower compliance overhead at launch. For digital health clients with an app, Apple Search Ads can often be activated faster while Google certification is pending. App installs from Apple Search Ads for health apps typically convert at higher rates than comparable Google UAC installs because the App Store search intent is already app-specific.</p>`,
    ],
  },

  dh_pmax: {
    key: 'dh_pmax',
    title: 'Google Performance Max',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-bolt',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'Running PMax under personalized advertising restrictions — available audience signals, location targeting compliance, and asset group structure for health advertisers.',
    topics: [
      'PMax Under Personalized Advertising Restrictions',
      'Building Audience Signals Without 1st-Party Data',
      'Location Targeting Compliance',
      'Asset Group Structure & Creative',
    ],
    assignType: 'mcq',
    topicContent: [
      `<h3>What Changes When You're Restricted</h3>
<p>Performance Max is designed to unify all of Google's inventory — Search, Shopping, Display, YouTube, Gmail, and Discover — under a single campaign with automated asset delivery. For digital health advertisers under personalized advertising restrictions, significant portions of that inventory and toolset are simply not available.</p>

<ul>
  <li><strong>Gmail Placements</strong> — Unavailable. Personalized advertising restrictions prohibit Gmail ad delivery entirely.</li>
  <li><strong>Dynamic Remarketing</strong> — Unavailable. Remarketing requires audience lists built from 1st-party data, which PA restrictions prohibit.</li>
  <li><strong>1st-Party Audience Lists</strong> — Unavailable. Customer match, CRM uploads, website visitor lists, and app users cannot be used as audience signals or targeting inputs.</li>
  <li><strong>Customer Acquisition Goal</strong> — Unavailable. The "bid more for new customers" setting relies entirely on customer lists to distinguish new from existing. Without lists, the feature is non-functional. Do not enable.</li>
  <li><strong>Affinity Audience Signals</strong> — Available. Google-defined affinity segments (health &amp; fitness enthusiasts, wellness-focused consumers) can be added as signals.</li>
  <li><strong>In-Market Audience Signals</strong> — Available. In-market segments for health, weight management, prescription medications, and related categories are available and are the highest-intent signal option.</li>
  <li><strong>Detailed Demographics</strong> — Available. Age, gender, parental status, and household income targeting can be used as signals.</li>
  <li><strong>Custom Intent (Search-Based)</strong> — Available. Custom segments built from keyword lists or URLs can serve as signals. The nearest available substitute for a remarketing list.</li>
  <li><strong>Search, Display, YouTube, Discover</strong> — Available. All four placements are available to certified health advertisers.</li>
</ul>

<div class="content-callout">
  <strong>Do Not Enable Customer Acquisition Goal:</strong> This setting requires uploading a customer list so Google can identify who already purchased. PA restrictions prohibit customer lists entirely. If enabled, it will either report zero new customers or trigger a policy review. Leave it off.
</div>`,

      `<h3>Audience Signals Are Your Only Steering Lever</h3>
<p>Audience signals in PMax are not targeting restrictions — they are suggestions. Google uses them as a starting point for the algorithm, then expands or contracts delivery based on conversion data. For restricted accounts, Google-generated signal types are the only available lever for steering who the campaign initially reaches.</p>

<ul>
  <li><strong>In-Market Segments</strong> — The highest-intent signal available. Use "Health &amp; Fitness," "Weight Loss &amp; Management," "Prescription Medications," and any subcategory that maps to the client's product. In-market users are actively researching and comparing — this signal has the most direct relationship to conversion intent for D2C health brands.</li>
  <li><strong>Affinity Audiences</strong> — Broader lifestyle-based segments: health-conscious consumers, fitness &amp; nutrition enthusiasts, alternative health advocates. Best used for top-of-funnel asset groups where the goal is awareness or consideration.</li>
  <li><strong>Detailed Demographics</strong> — Age, gender, parental status, and household income buckets. Particularly effective for condition-specific products with a defined patient profile: men 35–60 for hair loss or testosterone products, women 25–50 for hormonal health, parents of young children for pediatric telehealth.</li>
  <li><strong>Custom Intent (Search-Based)</strong> — Build a custom segment from keyword lists (e.g., "buy semaglutide online," "online GLP-1 prescription") and/or competitor URLs. This is the closest available substitute for a remarketing list — the users have demonstrated explicit intent through search activity.</li>
</ul>

<div class="content-callout">
  <strong>Signals Are Not Filters:</strong> Setting audience signals does not restrict who sees your ads. PMax uses signals as suggestions, not hard walls. Google will serve beyond your defined signals when its conversion model identifies likely buyers outside that group. Add multiple signal types to each asset group rather than creating separate asset groups per signal — a combined in-market + custom intent + demographic signal gives the algorithm a richer starting profile and typically accelerates the learning phase.
</div>`,

      `<h3>Location Targeting Is Non-Negotiable Before Launch</h3>
<p>Location targeting in PMax is not a performance optimization — it is a compliance requirement. For digital health advertisers with LegitScript certification, serving ads outside your certified geographic footprint can trigger a compliance review that affects the entire account, not just the campaign.</p>

<div class="content-callout">
  <strong>Delivery Stops Silently — Do Not Skip:</strong> If a PMax campaign launches without location targeting and delivers outside your certified geographic footprint — even briefly — ad delivery can stop across the affected campaign without any notification from Google. There is no alert, no warning email, and no automated flag. Prevention is far easier than diagnosis after the fact.
</div>

<h3>Location Setup Steps</h3>
<ol>
  <li><strong>Confirm Your LegitScript Geographic Footprint:</strong> Log into LegitScript and confirm which states or regions your certification covers. Most US-based digital health clients hold a US-only certification, but telehealth providers who cannot prescribe across all 50 states may have a more limited approved geography. The LegitScript-approved footprint sets the upper bound — your campaign locations must stay within it.</li>
  <li><strong>Set Locations in Campaign Settings Before Enabling Budget:</strong> In Google Ads, navigate to the PMax campaign → Settings → Locations. Add each approved region explicitly. Do not use "All countries and territories" — this is the default and it is wrong for health advertisers. If the certification is US-only, add "United States" and remove any international defaults. Save and verify before activating budget.</li>
  <li><strong>Launch in Paused State, Confirm Settings, Then Activate:</strong> Create and configure the campaign in a paused state. Review all settings — including locations — before enabling. Once confirmed, enable the campaign and activate budget. Pausing after a compliance incident does not retroactively undo international impressions already served.</li>
</ol>

<p>A US-wide LegitScript certification does not mean all 50 states are appropriate. Certain telehealth products — compounded medications, controlled substances, specific categories of prescription treatments — have state-level prescribing and dispensing restrictions. Map product eligibility by state with the client before finalizing campaign locations. For multi-product accounts, different PMax campaigns may need different location sets based on what each campaign promotes.</p>`,

      `<h3>Asset Group Structure for Health</h3>
<p>PMax replaces ad groups with asset groups — collections of headlines, descriptions, images, and videos that Google assembles dynamically into ads across all eligible placements. For health advertisers, asset group organization is both a performance decision and a compliance management strategy.</p>

<h3>Creative Asset Requirements</h3>
<ul>
  <li><strong>Headlines:</strong> Up to 15 (minimum 3). Max 30 characters each. Lead with service and differentiator. Avoid medical claims, superlatives, or language that implies guaranteed outcomes.</li>
  <li><strong>Long Headlines:</strong> Up to 5 (minimum 1). Max 90 characters. Used on Display and Discover. Lead with the core service offering.</li>
  <li><strong>Descriptions:</strong> Up to 4 (minimum 2). Max 90 characters each. Include a CTA in at least 2. Mirror the tone of the landing page.</li>
  <li><strong>Landscape Image:</strong> 1 required, up to 20. 1200×628px. No text overlay exceeding 20% of image area. Use lifestyle imagery — avoid clinical/medical photography that can trigger sensitive health category review.</li>
  <li><strong>Square Image:</strong> 1 required, up to 20. 1200×1200px. Required for Display placements.</li>
  <li><strong>Portrait Image:</strong> Optional but recommended. 960×1200px. Primary format for Discover feed placements.</li>
  <li><strong>Logo:</strong> 1 required. 1200×1200px or 1200×300px (horizontal). Must be on a white or transparent background.</li>
  <li><strong>Video:</strong> Optional but strongly recommended. 10–60 seconds. Required for YouTube delivery. If no video is uploaded, Google auto-generates one — auto-generated health videos frequently fail policy review. Provide your own.</li>
</ul>

<div class="content-callout">
  <strong>Copy Compliance in Asset Groups:</strong> PMax dynamically combines assets — a headline that passed RSA review can still trigger a disapproval when paired with a specific image in a PMax combination. Avoid the highest-risk terms across all headlines and descriptions: "cure," "treat," "FDA-approved" (without documented approval), guaranteed outcomes, and condition-specific claims that imply diagnosis. If one asset is disapproved, Google pauses the entire asset group, not just the offending asset.
</div>

<p>Create one asset group per product line or service category — not one monolithic asset group for the entire account. Separate asset groups keep creative relevant to the offering, make disapproval isolation faster, and allow asset-level performance reporting by product area. Provide your own video every time; auto-generated health videos routinely fail policy review before they ever serve.</p>`,
    ],
  },

  dh_meta: {
    key: 'dh_meta',
    title: 'Paid Social: Meta',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-brand-meta',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'Meta\'s health advertising framework — certifications, what audience targeting is available for health advertisers, creative compliance, and account disablement response protocol.',
    topics: [
      'Meta Certifications for Digital Health',
      'Audience Strategy: What You Can & Can\'t Target',
      'Creative Compliance & Ad Copy',
      'Account Disablement Response Protocol',
    ],
    assignType: 'both',
    topicContent: [
      `<h3>Meta Certifications: Two Types, Two Separate Applications</h3>
<p>Before any health or pharma ads run on Meta, the relevant LegitScript certification must be uploaded and verified in Meta Business Manager. Annual auto-payment to LegitScript does not automatically renew the certification — the client must submit their renewal questionnaire and actively work with LegitScript to confirm compliance before the renewal date. Build renewal reminders into account management workflows, not just billing calendars.</p>

<h3>Prescription Drug Sales Certification</h3>
<ul>
  <li><strong>Who needs it:</strong> Any advertiser selling or promoting prescription medications — including telehealth platforms that facilitate prescriptions, even if the platform itself does not dispense directly.</li>
  <li><strong>Step 1:</strong> Obtain LegitScript certification for online pharmacy.</li>
  <li><strong>Step 2:</strong> Apply to Meta for Prescription Drug Sales permission and upload the LegitScript certification documentation through Meta's online pharmacy certification form.</li>
  <li><strong>OBx verification:</strong> OBx can confirm whether a client's LegitScript certification has been properly uploaded and recognized in Meta Business Manager before campaign launch.</li>
</ul>

<h3>Drug &amp; Alcohol Addiction Treatment Certification</h3>
<ul>
  <li><strong>Who needs it:</strong> Advertisers targeting US users with addiction treatment ads — including rehabilitation hospitals, clinics, and in-person addiction treatment services.</li>
  <li><strong>Requirements:</strong> LegitScript certification plus a separate Meta application for permission. Both must be in place before any ads run.</li>
  <li><strong>Critical restriction:</strong> Addiction treatment facilities may advertise on Meta with proper certification. Advertisement of addiction medication or drugs is NOT permitted on Meta — this applies even with LegitScript certification on file.</li>
</ul>

<div class="content-callout">
  <strong>Two Certifications Required When Both Apply:</strong> If a client operates in both addiction treatment and prescription drug sales, both certifications are required independently. One does not satisfy the other. Confirm the scope of the client's services before starting the certification process to avoid re-doing applications after the fact.
</div>

<p>Most digital health clients also need to apply for Meta's Personal Health and Appearance Advertising permission, plus Subscription Services permission if billing is recurring. These are separate from the LegitScript-backed certifications.</p>`,

      `<h3>What You Can — and Can't — Target on Meta</h3>
<p>Meta does not use the phrase "personalized advertising restrictions" the way Google does, but health and pharma advertisers face meaningful limitations tied to HIPAA exposure risk. The line is not drawn at health-related audiences — it's drawn at data sources that could identify someone as a patient.</p>

<ul>
  <li><strong>Interest Audiences</strong> — Available. No HIPAA exposure. Can be used freely. Segment by health interests, wellness behaviors, relevant lifestyle categories, and condition-adjacent topics.</li>
  <li><strong>Lookalike — Social Engagement Source</strong> — Available. No HIPAA exposure. Source audience is built from FB/IG engagement — no patient data involved.</li>
  <li><strong>Lookalike — Pixel Event Source</strong> — Available. No HIPAA exposure. Pixel-based source (website visitors, form abandoners) does not identify individuals as patients.</li>
  <li><strong>Video View Audiences</strong> — Available. No HIPAA exposure. Video viewers are a platform engagement signal — no health status implied. Effective for mid-funnel retargeting of warm audiences.</li>
  <li><strong>Social Engager Retargeting</strong> — Available. FB/IG page followers, page engagers, and post savers. No HIPAA exposure. The most compliant retargeting foundation for digital health brands — build these from day one.</li>
  <li><strong>Pixel-Driven Retargeting</strong> — Available. Website visitors, form abandoners, product page viewers. No HIPAA exposure when pixel events are properly configured.</li>
  <li><strong>Lookalike — Customer List Source</strong> — Conditional. HIPAA determination required before use. If the list source contains patient or health-related data, uploading it creates HIPAA exposure risk. OBx advises against this approach.</li>
  <li><strong>Custom Audiences — Customer List</strong> — Conditional. HIPAA determination required. Health-related customer lists carry patient data exposure risk. OBx default is not to upload lists for digital health clients.</li>
  <li><strong>Catalog Ads</strong> — Not Available. Health industry clients cannot run catalog ads on Meta regardless of certification status.</li>
</ul>

<div class="content-callout">
  <strong>OBx Policy:</strong> OBx advises against uploading any type of patient list — including emails of non-patients — for digital health clients. The risk of inadvertently including protected health information is too high. If a client chooses to upload a list despite this recommendation, the client must upload the list themselves and use an unrelated name (e.g., "Purple 2000" rather than "patient emails"). The associated campaign and ad set must also use unrelated names to avoid identifying the audience group.
</div>

<p>Build your retargeting foundation from platform-generated lists from day one: FB/IG followers, page engagers, post savers, website visitors, and video viewers. These audiences accumulate over time, carry zero HIPAA exposure, and are consistently strong performers for digital health brands.</p>`,

      `<h3>2025 FDA Update — Flagged Language in Health Ads</h3>
<p>As of September 2025, the FDA has moved to enforce against deceptive health advertising language across all ad formats and website content. Two phrases have been specifically flagged and must be removed from all ad copy and landing pages:</p>
<ul>
  <li><strong>"Same active ingredient as [brand name]"</strong> — flagged as potentially misleading, particularly for compounded medications. This includes constructions like "same ingredient as Ozempic" or "same active ingredient as Wegovy."</li>
  <li><strong>"Clinically proven ingredients"</strong> — flagged as an unsupported claim unless backed by documented clinical evidence specific to the compound being advertised.</li>
</ul>
<p>These phrases also carry Google IP violation risk when used in search ad copy. Remove them from all paid channels simultaneously.</p>

<h3>Core Copy Rules</h3>
<ul>
  <li><strong>Avoid Personal Pronouns ("You"):</strong> Meta flags direct address in health advertising contexts. Copy that uses "you" in health-status context — "you have diabetes" or "your weight loss solution" — is more likely to be read as targeting individuals based on health status. Write for a general audience: "For people managing..." rather than "If you're managing..."</li>
  <li><strong>Replace Before &amp; After — Use With vs. Without:</strong> "Before and after" framing is a disapproval risk on Meta. Replace it with "With [Product/Service] vs. Without [Product/Service]" — same storytelling arc, substantially lower disapproval risk.</li>
  <li><strong>Compounded Medication Naming:</strong> Do not reference the branded equivalent in ad copy for compounded medications. Refer to the active ingredient by its generic name only: "semaglutide," "tirzepatide," etc.</li>
  <li><strong>Ad and Landing Page Alignment:</strong> Misalignment between ad messaging and landing page content is one of the most common Meta disablement triggers. Ads using neutral language must not link to pages with restricted claims. Review the ad and destination page together — Meta's automated page scanner looks at both.</li>
</ul>

<h3>Creative Concepts That Consistently Work</h3>
<ul>
  <li><strong>Symptom &amp; Treatment:</strong> Highlight a common problem or pain point, then present the product or service as the solution. Keep symptom language factual and avoid implying diagnosis.</li>
  <li><strong>Product-First Imagery:</strong> Medication or product photography consistently outperforms lifestyle imagery in initial creative tests. Feature point-out ads — where specific product attributes are labeled directly on the creative — work especially well.</li>
  <li><strong>Us vs. Them:</strong> Compare the brand not just to direct competitors, but to every alternative: OTC medication, doing nothing, traditional clinic visits. Framing the brand as a better path than all alternatives avoids naming specific competitors.</li>
  <li><strong>Numbers &amp; Statistics:</strong> Data-backed claims build trust. Statistics that quantify the problem or outcome are both effective. Numbers normalize health conditions and make audiences feel less alone.</li>
  <li><strong>Online convenience vs. traditional care:</strong> No doctor visits, delivered to your door, all done online — this differentiator resonates strongly with audiences who have had friction-heavy experiences with traditional healthcare.</li>
  <li><strong>Audience language matching:</strong> Monitor social comments and engagement to learn how the audience describes their condition. Use the terminology they use — not clinical nomenclature the brand prefers internally.</li>
</ul>`,

      `<h3>Account Disablement: Risk Factors</h3>
<p>Account disablement is a when, not an if, for digital health advertisers on Meta. The platform's automated enforcement systems are aggressive in the health category. These are the three most frequently observed causes of account-wide disablement:</p>
<ul>
  <li><strong>Landing page / ad message misalignment:</strong> Ads use compliant neutral language, but the destination landing page contains restricted claims — medical language, guaranteed outcomes, or explicit condition references that Meta flags on automated page scan. The ad itself may pass review; the landing page often does not.</li>
  <li><strong>Rapid creative swaps or bulk policy-sensitive changes:</strong> Making multiple policy-adjacent changes simultaneously — new creative, new copy, new audiences — increases review frequency and the probability that a combination triggers enforcement. Make changes incrementally, not in batches.</li>
  <li><strong>Inconsistent state-specific language:</strong> Eligibility, service availability, and treatment access vary by state. Ads or landing pages that don't reflect those restrictions accurately can be flagged for targeting users for whom the product is unavailable.</li>
</ul>

<h3>Client Communication Protocol — Account Disablement</h3>
<p>This protocol applies to account-wide disablement only — not individual ad disapprovals. When the account itself is disabled, follow these steps in order:</p>
<ol>
  <li><strong>Same-Day Notification:</strong> The account owner notifies the client the same day the disablement is identified. The message states clearly that the account has been disabled, that the team is actively investigating and escalating, and that platform resolution timelines are unclear. Do not commit to a resolution date unless Meta has explicitly provided one.</li>
  <li><strong>Submit Support Ticket to Meta:</strong> Open a support ticket with Meta as quickly as possible after the disablement is confirmed. Once submitted, share the ticket ID with the client immediately — it demonstrates active escalation and gives the client a reference number.</li>
  <li><strong>Surface All Platform Requests:</strong> If Meta requests additional information, documentation, or account changes during the review process, communicate this to the client the same day it's received — including what was requested, what OBx is providing, and what requires client action. Clients should never be surprised by a platform request they weren't informed about.</li>
  <li><strong>Restoration Confirmation:</strong> Notify the client the same day the account is reactivated or materially updated — including partial restoration of delivery. Confirm what changed, what is now active, and whether any follow-up monitoring is needed in the first 48–72 hours.</li>
</ol>

<p>Proactive communication during a disablement — even when there's nothing new to share — keeps clients from feeling abandoned and reduces escalation pressure. The standard is: clients are never surprised by a change in delivery status.</p>`,
    ],
  },

  dh_social: {
    key: 'dh_social',
    title: 'Paid Social: TikTok & LinkedIn',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-brand-tiktok',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'TikTok\'s 2025 GLP-1 policy update and strict health advertising rules, plus LinkedIn\'s B2B and HCP targeting framework for digital health brands.',
    topics: [
      'TikTok: Certifications & the 2025 GLP-1 Allowlist',
      'TikTok: Ad Policies & Prohibited Content',
      'TikTok: Creative & Audience Strategy',
      'LinkedIn: Authorization, HCP Targeting & Campaign Strategy',
    ],
    assignType: 'mcq',
    topicContent: [
      `<h3>TikTok Health Advertising: Rep-Gated Access</h3>
<p>Unlike Meta, TikTok does not offer a self-serve health advertiser application — access must be initiated through a TikTok Sales Representative. Any advertiser promoting prescription medications, telehealth services, or online pharmacy access on TikTok must obtain active LegitScript certification plus direct TikTok Sales Rep clearance.</p>

<p>TikTok recognizes LegitScript as its third-party certification standard for health advertisers — the same certification required by Meta and Google. TikTok's health advertising category is not accessible through TikTok Ads Manager alone — approval must come through managed sales, not self-serve. Clients without an existing TikTok rep relationship will need to be introduced through an agency contact.</p>

<h3>2025 GLP-1 Allowlist</h3>
<p>As of August 2025, TikTok updated its ad policies to allow FDA-approved GLP-1 prescription medications for their intended use in North America. This allowlist applies to weight management indications specifically — not off-label uses, not compounded equivalents.</p>

<ul>
  <li><strong>Who qualifies:</strong> Manufacturers with FDA approval (US) or Health Canada approval (Canada), or telehealth companies with active LegitScript certification. Both categories must also be allowlisted directly by TikTok — meeting the cert requirement alone is not sufficient.</li>
  <li><strong>Age requirement:</strong> GLP-1 ads must target 25+ audiences. This is a hard platform requirement — ads cannot be served to users under 25 regardless of campaign setup.</li>
  <li><strong>Critical exclusions:</strong> The GLP-1 allowlist does NOT cover compounded GLP-1 medications, off-label promotion (e.g., using Ozempic for weight loss), or drugs with a Black Box FDA warning. These remain prohibited with no exception path.</li>
</ul>

<h3>Age Targeting Requirements by Category</h3>
<ul>
  <li><strong>GLP-1 / Weight Management Rx:</strong> TikTok minimum age 25+. Set at the ad group level and verify before launch — platform enforcement does not substitute for manual setup.</li>
  <li><strong>Addiction Treatment Services:</strong> TikTok minimum age 18+. Advertising anti-addiction drugs on TikTok is not permitted — only the treatment services themselves can be advertised.</li>
  <li><strong>General Telehealth / OTC Health:</strong> 18+. Market-specific requirements apply for OTC medications, pharmacies, and medical device categories.</li>
</ul>

<p>Addiction treatment services follow a separate access path from the GLP-1 allowlist. Rehabilitation hospitals, clinics, and in-person addiction treatment services are allowed to advertise on TikTok with 18+ age targeting — but only with LegitScript certification on file and Sales Rep clearance. Clients operating in both addiction treatment and GLP-1 categories need both clearances independently.</p>`,

      `<h3>TikTok Ad Policies: Prohibited Content — No Exception Path</h3>
<p>TikTok's health advertising policies are among the most restrictive on any major consumer platform. The following are prohibited regardless of certification status, advertiser tier, or Sales Rep relationship:</p>

<ul>
  <li><strong>Compounded GLP-1 Medications:</strong> The 2025 GLP-1 allowlist covers FDA-approved branded medications only. Compounded semaglutide, compounded tirzepatide, and any compounded equivalent — regardless of how they're described in copy — remain prohibited on TikTok with no exception path. This is categorically different from Meta and Google, where compounded medication advertising is possible with proper framing.</li>
  <li><strong>Off-Label Promotion:</strong> Advertising a medication for a use not covered by its FDA-approved indication. The most common example: promoting Ozempic (approved for Type 2 diabetes) as a weight loss medication.</li>
  <li><strong>Black Box Warning Drugs:</strong> Any prescription drug carrying the FDA's most serious warning label is prohibited on TikTok regardless of the advertiser's certification status.</li>
  <li><strong>Anti-Addiction Medication:</strong> Advertising addiction medications specifically is not permitted on TikTok in the US, even when LegitScript certification is active and covers the medication category.</li>
</ul>

<h3>General Health Advertising Content Rules</h3>
<ul>
  <li><strong>No medical claims without an approved license or certification.</strong> "Clinically proven" requires documented clinical evidence — not a branded equivalent's trial data.</li>
  <li><strong>No weight loss products or invasive cosmetic procedures.</strong> Weight loss supplements and invasive cosmetic procedures are prohibited. This applies even in markets where prescription weight loss medications are permitted.</li>
  <li><strong>No health data collection via ads or pixel.</strong> Ads cannot collect information about health status, medical history, disabilities, or mental or physical condition. This prohibition extends to ad copy, landing page forms, and tracking pixel configuration.</li>
  <li><strong>HCP content must be evidence-backed.</strong> If a healthcare professional appears in or narrates ad content, the information must be backed by scientific evidence. HCP credibility does not override this requirement.</li>
  <li><strong>No before/after weight content.</strong> TikTok's body image policy prohibits before-and-after imagery and weight comparison framing — more restrictive than Meta's guidance on the same topic.</li>
</ul>

<div class="content-callout">
  <strong>Tracking Guardrail:</strong> TikTok has explicitly asked advertisers not to use its tracking technology to collect healthcare information. Pixel implementations for digital health clients must be scoped to conversion events only — purchase, form submission, subscription initiation. Do not pass health-related parameters, condition identifiers, or product names that reveal health status as custom event parameters. OBx does not configure TikTok pixel events to pass health-related attributes for digital health clients.
</div>`,

      `<h3>TikTok Creative Compliance</h3>
<p>TikTok's creative environment rewards authenticity over polish, and its automated content review is attuned to health-specific language patterns. This requires a different approach to copy and visual framing than other platforms.</p>

<ul>
  <li><strong>Authentic-First Format Over Clinical Aesthetic:</strong> UGC-style testimonials, candid demonstrations, conversational voiceover, and real-environment footage consistently outperform studio-produced clinical creative. Overly produced health advertising that looks like a pharmaceutical TV spot often triggers more manual review. Build for the feed first — compliance and performance usually align on TikTok.</li>
  <li><strong>No Medical Claims — Outcomes as Individual Results:</strong> Frame results as individual experiences, not product promises: "Users report..." rather than "[Product] treats..." Outcome framing that implies mechanism — how or why the medication works — is higher risk than framing that describes the experience of using it.</li>
  <li><strong>HCP Appearances — Evidence-Backed Only:</strong> Healthcare professionals in TikTok ads must present information backed by scientific evidence. Have legal or compliance review HCP scripts before production.</li>
  <li><strong>No Before/After Weight Content:</strong> TikTok's body image policy prohibits before-and-after imagery and weight comparison framing. For GLP-1 and weight management advertisers, avoid transformation-style creative entirely. Focus on lifestyle, energy, and quality-of-life framing rather than physical comparison.</li>
</ul>

<h3>Audience Options on TikTok</h3>
<ul>
  <li><strong>In-Market Health Interest Targeting</strong> — Available. Health topics, wellness behaviors, fitness, condition-adjacent categories. The most compliant foundation for health prospecting on TikTok.</li>
  <li><strong>Age &amp; Demographic Signals</strong> — Available. Required for GLP-1 (25+) and addiction treatment (18+) advertisers — set at the ad group level and verify before launch.</li>
  <li><strong>Pixel-Based Retargeting (Website Visitors)</strong> — Available when the pixel is configured for conversion events only. No health-status data should be passed through pixel events.</li>
  <li><strong>Video View Audiences</strong> — Available. Users who engaged with TikTok video content can be retargeted. No HIPAA exposure.</li>
  <li><strong>Custom Audience — Email / Customer List</strong> — Conditional. Lists that include or could include patient-derived data require HIPAA analysis. OBx advises against uploading lists for digital health clients without explicit compliance review.</li>
</ul>

<p>TikTok performs best as an awareness and upper-funnel channel for digital health brands. Conversion-heavy campaigns should anchor to Google Search and Meta before scaling TikTok spend, since TikTok's attribution model is less mature for health categories and the path from TikTok view to telehealth conversion is typically longer.</p>`,

      `<h3>LinkedIn: Prescription Drug Prior Authorization</h3>
<p>LinkedIn's prescription drug advertising policy requires prior authorization through LinkedIn's sales channel — LinkedIn does not offer self-serve access to Rx advertising. All prescription drug advertisers must obtain prior authorization through a LinkedIn Marketing Solutions (LMS) representative before campaigns can launch.</p>

<ul>
  <li><strong>How to get it:</strong> Contact your LinkedIn Marketing Solutions representative or account team. If the client does not have an LMS relationship, request an introduction through OBx's LinkedIn contact. The authorization process involves confirming the drug category, advertiser identity, and compliance.</li>
  <li><strong>Geographic scope:</strong> Prescription drug ads on LinkedIn may only target within the United States or Canada. This is a hard platform restriction — set at campaign level and verify before launch.</li>
  <li><strong>HCP targeting only:</strong> LinkedIn's prescription drug advertising policy requires that all Rx ads target healthcare-related professionals. Ads may not be directed at consumers or a general audience. This means LinkedIn Rx campaigns cannot be used for D2C patient acquisition, only for HCP education, referral development, or professional audience engagement.</li>
  <li><strong>Prohibited substances:</strong> No opioids, anabolic steroids, or unsafe products — even with prior authorization.</li>
</ul>

<h3>When LinkedIn Makes Sense for a Digital Health Client</h3>
<p>LinkedIn is a premium channel with CPCs typically 3 to 8 times higher than Meta or Google Search. For most D2C digital health brands, that unit economics math doesn't close against direct patient acquisition. But LinkedIn's value is in reaching decision-makers and healthcare professionals that no other paid channel can address at comparable scale.</p>

<ul>
  <li><strong>Client is a telehealth platform selling to employers or health plans:</strong> Benefits decision-makers at companies with 500+ employees are among LinkedIn's most targetable segments — job function, seniority level, company size, and industry can be layered to reach HR and benefits buyers directly.</li>
  <li><strong>Client needs to reach healthcare professionals for referral development:</strong> Physicians, nurse practitioners, and physician assistants are present on LinkedIn and searchable by specialty, institution, and license type.</li>
  <li><strong>Client has a prescription drug requiring HCP education:</strong> With prior authorization and HCP targeting in place, LinkedIn is the only paid social channel that can reach prescribers directly in a professional context.</li>
  <li><strong>Budget exists beyond Google and Meta:</strong> LinkedIn should not be the first channel funded. It belongs in the mix after Google Search and Meta are operating at full efficiency.</li>
</ul>

<h3>Ad Formats for Digital Health on LinkedIn</h3>
<ul>
  <li><strong>Sponsored Content (Single Image / Video):</strong> Most versatile format for health brands. Video Sponsored Content performs well for telehealth platform explainers and patient outcome stories directed at prescribers.</li>
  <li><strong>Message Ads (InMail):</strong> Effective for high-intent B2B outreach where a direct ask — "request a demo," "talk to a benefits specialist" — is the conversion. Use sparingly; frequency caps apply and audiences become fatigued quickly.</li>
  <li><strong>Document Ads:</strong> Allows members to read a document in the feed before downloading. Strong for HCP audiences reviewing clinical evidence or benefits buyers receiving an ROI summary.</li>
</ul>`,
    ],
  },

  dh_creative: {
    key: 'dh_creative',
    title: 'Creative Strategy',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-palette',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'Cross-channel creative strategy for digital health — the three-tier approval process, five core creative concepts, ad copy frameworks, and messaging safeguards.',
    topics: [
      'The Three-Tier Approval Process',
      'Core Creative Concepts & Formats',
      'Ad Copy Frameworks',
      'Messaging Safeguards & Brand Building',
    ],
    assignType: 'both',
    topicContent: [
      `<h3>Creative Compliance Is Tiered</h3>
<p>Before a single ad goes live, digital health creative goes through multiple compliance checkpoints. Understanding each tier — and building them into your timeline — prevents last-minute delays and disapprovals.</p>

<ul>
  <li><strong>Client POC Review</strong> — In most engagements, client-side stakeholders review and approve all creative before it runs. Build this into your production timeline as a required step, not an optional one.</li>
  <li><strong>Client Legal Team Review</strong> — Clients with in-house or outside counsel may require legal sign-off on ad copy, imagery, and claims. Timeline: variable. This is not negotiable.</li>
  <li><strong>IRB Review (Clinical Trials)</strong> — If the client is advertising for clinical trial recruitment, the Institutional Review Board must review all materials — including final copy, visual formatting, audio, and video. Expect this to add significant lead time.</li>
</ul>

<h3>IRB Review Requirements — Clinical Trial Creative</h3>
<ul>
  <li><strong>What triggers it:</strong> Any advertising for clinical trial recruitment — digital ads, landing pages, social posts, video — requires IRB review of all materials before launch.</li>
  <li><strong>Print &amp; Display:</strong> The FDA expects the IRB to evaluate the relative size of type, visual hierarchy, and other visual effects used in printed and static digital materials.</li>
  <li><strong>Audio &amp; Video:</strong> The FDA expects the IRB to review final audio and video ads. The IRB may also review wording ahead of final production to minimize the need to re-tape or re-record.</li>
  <li><strong>OBx role:</strong> OBx surfaces the IRB requirement at onboarding and provides materials in review-ready formats. The client is responsible for managing and scheduling the IRB process.</li>
</ul>

<div class="content-callout">
  <strong>Platform Policy Layer:</strong> Beyond client-side approvals, all digital health creative must independently pass each platform's Personal Health &amp; Appearance policies. Platform review happens separately from client legal — an ad approved by the client's legal team can still be disapproved by Google, Meta, or TikTok.
</div>

<p>The approval process should be on the project timeline before creative production starts — not after. Scope the creative calendar backwards from the launch date, accounting for client POC review, potential legal review, and platform approval time. The two most common causes of delayed launches in digital health are approval surprises and copy revisions after legal review.</p>`,

      `<h3>Five Core Creative Concepts</h3>
<p>These five creative concepts consistently perform in digital health advertising. They're designed to communicate value clearly while staying within the compliance guardrails that health clients operate under. Use them as a tested starting point for any new client, not a rigid formula.</p>

<ul>
  <li><strong>Symptom &amp; Treatment:</strong> Lead with the problem your audience is experiencing, then present the product or service as the solution. This format is intuitive, empathy-first, and immediately relevant. Works across static, video, and social formats. Keep symptom language factual — avoid implying diagnosis ("if you have X" framing is higher risk than "for people experiencing X").</li>
  <li><strong>Medication Product Imagery:</strong> Product-first imagery consistently outperforms lifestyle photography for digital health clients — making product vs. lifestyle a high-priority creative test for any new account. The feature point-out ad style — calling out specific product attributes with callout lines — is a high-performing format to pair with product imagery.</li>
  <li><strong>Us vs. Them:</strong> Highlight what makes this brand the better choice, but don't limit "them" to direct competitors. The real comparison is often against all alternatives: OTC medications, traditional in-person care, doing nothing, or living with the condition. Map out every alternative the audience might choose instead, and build the value prop around that full competitive landscape.</li>
  <li><strong>Numbers &amp; Statistics:</strong> Data-driven creative builds trust and makes audiences feel seen. Statistics that quantify the problem ("X million Americans experience Y") create relatability and reduce isolation. Statistics that quantify the solution ("results in as few as 16 weeks") drive conversion confidence. Verify all stats for accuracy before using.</li>
  <li><strong>With vs. Without:</strong> This concept replaces the Before &amp; After format, which is prohibited on Meta and a disapproval risk across platforms. "With [Product]" vs. "Without [Product]" tells the same transformation story while using phrasing platforms are far more likely to approve. Same storytelling logic, lower compliance risk.</li>
</ul>

<div class="content-callout">
  <strong>Before &amp; After — Prohibited:</strong> Before &amp; After phrasing is flagged for disapproval on Meta and carries policy risk on other platforms. Do not use it. Frame the same concept as "With vs. Without [Product/Service]" — it communicates identical impact while passing platform review. Apply this rule to ad copy, text overlays, and landing page messaging.
</div>`,

      `<h3>Ad Copy Frameworks for Digital Health</h3>
<p>Effective copy for digital health clients requires understanding medication naming conventions, pricing disclosure rules, and how to structure headlines that pass platform review.</p>

<h3>Headline Structure</h3>
<ol>
  <li><strong>Medication Headlines (3–5):</strong> Lead with medication-based headlines that pair the generic name with the brand name in parentheses: "Bimatoprost Generic Latisse®" or "Get Bimatoprost Lash Rx Online." Include at least one pricing headline in this group. These are the most targeted headlines — they capture intent from people searching for the specific medication by name.</li>
  <li><strong>Condition / Service Headlines (3–5):</strong> Focus on outcomes and conditions: "Rx For Longer, Thicker Lashes," "Rx Eyelash Serum For $53/Mo." Include at least one pricing variant here if pricing wasn't already covered in the medication group.</li>
  <li><strong>Value Prop Headlines (Remaining):</strong> Fill remaining headline slots with general value propositions: "FDA Approved Treatment," "No In-Person Doctor Visit," "Dermatologist Recommended." These reinforce credibility and differentiation.</li>
</ol>

<h3>Pricing Transparency Requirements</h3>
<ul>
  <li><strong>Always include pricing:</strong> Every ad set must include at least one pricing headline or description. Pricing visibility is both a best practice and a compliance consideration — vague pricing language can trigger Misrepresentation policy flags.</li>
  <li><strong>Insurance-adjusted pricing:</strong> If insurance affects the price, qualify the claim: "As Low As $0 With Insurance" — not "As Low As $0." Preferred format: "$0 With Insurance, $15 Without."</li>
  <li><strong>Price accuracy:</strong> All pricing in copy must be accurate at the time the ad runs. Confirm pricing details with the client before launching. If pricing changes, update ads immediately — running stale pricing is a Google Misrepresentation policy violation.</li>
</ul>

<h3>Generic vs. Brand Naming</h3>
<p>When advertising a generic equivalent of a brand-name medication, use the format: <strong>generic name (Generic brand name)</strong>. Examples: "Bimatoprost Generic Latisse®" or "Get Escitalopram — Generic Lexapro." Always check with the client whether internal legal approval is required before any new copy goes live — some clients require legal sign-off on every new headline.</p>

<h3>Copy Execution Checklist</h3>
<ul>
  <li>Period at the end of each description</li>
  <li>Capitalize each word in headlines and descriptions (Title Case)</li>
  <li>Add trademark symbols where applicable (®, ™)</li>
  <li>Spell check all bulksheets and editor builds before upload</li>
  <li>Use the =LEN() formula in spreadsheets to count characters against the 30/90 character limit</li>
  <li>Check for duplicate headlines within the same RSA</li>
  <li>Confirm pricing accuracy with the client before launch</li>
</ul>`,

      `<h3>Messaging Safeguards</h3>
<p>In digital health, the tone and structure of messaging is as important as the content. Neutral language, credibility signals, and process clarity are the three levers that build trust — and trust is what converts in a long, considered purchase journey.</p>

<ul>
  <li><strong>Avoid explicit medical claims, guarantees, or definitive outcome language</strong> unless the claim is explicitly approved under platform policy. "Clinically proven" is acceptable; "guaranteed to cure" is not.</li>
  <li><strong>Use broader, educational framing.</strong> Prioritize neutral, supportive language over diagnostic or prescriptive statements. Let the physician (in-funnel) make the clinical determination.</li>
  <li><strong>Regularly audit live ads for policy risk</strong> — especially after creative refreshes, scaling events, or any regulatory changes on the platforms you're active on.</li>
  <li><strong>Neutral &amp; Indirect Language:</strong> Avoid second-person pronouns like "you" — on Meta, direct address in health creative can trigger Personal Health &amp; Appearance policy violations. Use your audience's own terminology: if they search for "weight loss medication" more than "Wegovy," that's the language your ads should use.</li>
</ul>

<h3>Building Credibility</h3>
<p>Trust signals matter more in health than in any other vertical. Use doctor imagery, dermatology seals, medical certifications, and third-party endorsements wherever they can be legitimately claimed. "Dermatologist Recommended" or "FDA Approved" framing anchors credibility immediately. Consistent brand colors and typography across all touchpoints reinforce recognition and trust over time — especially important in a category where purchase decisions are high-stakes.</p>

<h3>Describing the Process</h3>
<p>Digital health purchase journeys are longer than standard e-commerce. Audiences are often unfamiliar with how telehealth or online prescription services work — and uncertainty kills conversion. Describe the steps clearly and upfront: Medical Intake Form → Talk to a Physician → Receive Medication. This reduces friction, sets expectations, and reinforces the "no in-person visit needed" value prop that differentiates digital health from traditional care.</p>

<h3>Flex Digital Health's Convenience Advantage</h3>
<p>The strongest differentiators for most digital health brands versus traditional healthcare are access and convenience: no in-person doctor visit required, all done online, medication mailed directly to your door. These aren't just nice-to-haves — they're the primary reasons people choose digital health over their local provider. Lead with these benefits in copy and creative wherever applicable. If the client accepts insurance, pair the convenience message with the pricing message: "All online, as low as $0 with insurance" is a highly effective combination.</p>

<p>Watch your audience's social engagement to mine language. If people in the comments are calling GLP-1s "the shot" or "my weight loss medication" rather than "semaglutide," that's an audience signal — test those terms in your copy. The best-performing copy in health usually sounds like the audience, not like a pharmaceutical insert.</p>`,
    ],
  },

  dh_programmatic: {
    key: 'dh_programmatic',
    title: 'Programmatic Advertising',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-broadcast',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'Programmatic display strategy for digital health — what certifications are required, known platform restrictions, and the channel areas being developed.',
    topics: [
      'Programmatic: Access & Current Guidance',
    ],
    assignType: 'mcq',
    topicContent: [
      `<h3>Programmatic Advertising for Digital Health</h3>
<p>Display and programmatic strategy for digital health operates under a different set of rules than the paid social and paid search channels covered in Parts 1–7. The most important distinction: running programmatic advertising for digital health clients does not require platform-specific certifications like Google, Meta, and TikTok do. This is one of the lower-friction channels to activate for health advertisers.</p>

<h3>What We Know Now</h3>
<ul>
  <li><strong>No certifications required:</strong> Unlike Google, Meta, and TikTok, running programmatic advertising for digital health clients does not require platform-specific certifications. This is one of the lower-friction channels to activate.</li>
  <li><strong>Amazon DSP — Display is not available:</strong> Digital health companies are currently not eligible to run Display advertising through Amazon DSP. TV and audio inventory are accessible through Amazon DSP, and customer lists can be used within the DSP. This restriction applies to Display specifically — not all Amazon DSP inventory types.</li>
</ul>

<h3>Key Areas for Programmatic Health Strategy</h3>
<p>The following areas inform how programmatic fits into a digital health media plan:</p>

<ul>
  <li><strong>Health-Related Audience Targeting:</strong> Behavioral, contextual, and in-market audience strategies for health advertisers — including what's available, what's restricted, and how to build reach without 1st-party data. The same HIPAA considerations from Parts 1 and 5 apply to programmatic audience strategy — no patient list uploads, no PHI transmission through targeting parameters.</li>
  <li><strong>Contextual Targeting:</strong> Keyword and topic-based targeting on health content — reaching users in the right mindset without relying on audience data that may be subject to health advertising restrictions. Contextual targeting is often the most compliant and effective audience strategy for health programmatic because it targets the content environment rather than user-level data.</li>
  <li><strong>DSP Inventory &amp; Sources:</strong> Platform guidance across Amazon DSP, The Trade Desk, and other DSPs — which inventory types are available to health advertisers and which carry restrictions. Each DSP has its own health category policies and content adjacency requirements.</li>
  <li><strong>Brand Safety &amp; Viewability:</strong> Health-specific brand safety requirements — content categories to block, adjacency standards, viewability benchmarks, and fraud prevention considerations. Health advertisers have heightened brand safety requirements — ads appearing next to misinformation or harmful health content carries reputational risk beyond standard brand safety concerns.</li>
  <li><strong>Private Marketplace (PMP) Deals:</strong> When and how to pursue PMP deals for health advertising — publisher relationships, deal curation, and how PMPs can provide inventory quality unavailable through open exchange. PMP deals with health-adjacent publishers (major medical information sites, health news outlets) can deliver higher-quality placements than open exchange and reduce brand safety risk.</li>
</ul>

<div class="content-callout">
  <strong>Apply What You Know:</strong> The compliance foundation from Part 1 (certifications, HIPAA, FDA rules) and the creative strategy from Part 7 apply across all channels, including programmatic. Data handling practices — no health data in custom parameters, anonymized naming conventions — carry over from paid social to programmatic implementations.
</div>`,
    ],
  },

  dh_cro: {
    key: 'dh_cro',
    title: 'CRO / User Experience',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-cursor-text',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'Health intake form design, landing page strategy, and UX principles that reduce drop-off in the longer, more complex conversion funnels unique to digital health.',
    topics: [
      'Form Flow Strategy',
      'Form Design Execution',
      'Landing Page Content & CRO',
    ],
    assignType: 'mcq',
    topicContent: [
      `<h3>Why Health Forms Are Different</h3>
<p>Standard e-commerce forms collect shipping and payment info. Health intake forms collect medical history, state eligibility, insurance details, and personal health data — often before the user understands what they're getting into. The friction is real and intentional. The job is to reduce unnecessary friction without removing the qualification steps that protect both the patient and the provider's bandwidth.</p>

<p>Health intake forms are the primary conversion point in digital health — and the primary source of drop-off. Decisions about form structure, sequence, and edge-case handling have an outsized impact on patient acquisition outcomes.</p>

<h3>Email &amp; SMS Opt-In Placement</h3>
<ul>
  <li><strong>Long forms → doctor consult:</strong> Place the email/SMS opt-in before the form flow begins, typically after state verification. These forms are long and users may abandon — capturing email early preserves the lead even if they don't complete the intake.</li>
  <li><strong>Short forms → standard checkout:</strong> Place the email/SMS opt-in after the form is completed and results are provided. For customized treatment recommendations or non-prescription products, the form itself provides value — capture email after the user has received something from it.</li>
  <li><strong>General principle:</strong> The goal of email/SMS capture placement is to maximize the lead pool and the quality of those leads. Early capture sacrifices some intent signal; later capture sacrifices volume. Match the placement to the form's purpose and your client's lead nurture capability.</li>
</ul>

<h3>Never Dead-End an Unqualified User</h3>
<p>This is especially common for providers that only operate in specific states. If a user enters a state where the service isn't available and hits a dead end, that lead is gone. The recommended approach: collect the user's email before showing the restriction and communicate that their state is coming soon.</p>

<p>This is also required for Google Merchant Center approval — GMC will not grant access to accounts where the shopping path dead-ends on users. Unqualified users who opt in to an email waitlist have already demonstrated intent. A client expanding to new states in six months has a warm lead pool ready to activate — if you captured those emails at the dead-end instead of losing them. Push clients to build this flow at launch, not as an afterthought.</p>`,

      `<h3>Input Type Selection</h3>
<p>How you ask questions is as important as what you ask. Input type selection, form complexity, and clarity of directions directly affect completion rates — especially when questions involve medical information users may not have memorized.</p>

<ul>
  <li><strong>Multiple choice</strong> when there are only a few predefined answers.</li>
  <li><strong>Searchable dropdowns</strong> when there are many answers but still a limited set (e.g., current medications).</li>
  <li><strong>Free form</strong> only when the range of answers is too vast to constrain — or when the goal is a doctor consultation and you want the user to share unique context. For doctor-consult forms, always add a "Is there anything else you want the doctor to be aware of?" free-form field at the end. It improves patient outcomes.</li>
</ul>

<h3>Multi-Condition Form Design</h3>
<p>For providers treating multiple conditions, users often don't know which "door" they should enter. A dermatology patient may not know if their spot is a scar, age spot, or another condition — creating confusion if the site has separate flows for each. The solution is "choose your journey" question mapping: custom landers per sub-condition that all intake into the same form, with defining early questions that branch the user toward the right treatment path. One entry point, correct segmentation downstream.</p>

<h3>Make ID and Insurance Skippable</h3>
<p>Document uploads (ID, insurance card) are a known abandonment point — users often don't have these files with them when filling out a form on their phone. Allow these uploads to be skipped and completed later. Users are significantly more likely to become patients after completing checkout than if they hit a document requirement they can't clear in the moment. The upload can be collected post-checkout or during onboarding.</p>

<h3>Show a Progress Bar</h3>
<p>Health forms can be long. Users who don't know how far they are in the process are more likely to abandon mid-way — especially if they've already invested 5 minutes and suddenly feel like the end isn't in sight. A progress bar increases completion rates on both short and long forms. It sets expectations, reduces anxiety, and signals that the form is moving toward something valuable.</p>

<h3>Provide Clear Directions for Complex Questions</h3>
<p>Health forms routinely ask questions that users can't answer accurately in free-form. Blood pressure is the canonical example: asking for a numerical reading will produce vague or wrong answers from most users. Asking "Is your blood pressure Low, Normal, or High?" gets accurate responses from nearly everyone. Translate clinical questions into plain-language formats. This principle extends beyond blood pressure — any health question that requires the user to recall a specific number, date, or clinical reading should be reformatted as a range or multiple-choice option.</p>`,

      `<h3>Overview the Process Upfront</h3>
<p>Digital health conversion paths are longer than standard e-commerce. Users landing on a health intake page often don't understand what they're signing up for — and uncertainty kills conversion. A clear, visible process overview on the main landing page (Medical Intake Form → Talk to a Physician → Receive Medication) sets expectations, reduces abandonment at step transitions, and reinforces the "all done online" convenience proposition. Make the steps visible above the fold.</p>

<h3>Social Proof &amp; Reviews</h3>
<p>Trust signals matter more in healthcare than in almost any other purchase category. Choosing a healthcare provider — even a digital one — carries higher stakes than most consumer decisions. Reviews and testimonials that demonstrate successful patient outcomes reduce perceived risk significantly. Prioritize reviews that speak to outcomes, ease of process, and the quality of the medical provider — not just satisfaction with the product itself.</p>

<h3>Landing Page — Ad Alignment</h3>
<p>Ensure landing pages directly align with ad messaging and do not introduce claims or language that increase compliance risk post-click. A common and costly mistake: the ad uses neutral, compliant language, but the landing page introduces explicit medical claims, benefit guarantees, or restricted terminology. Platforms audit both — inconsistency between ad and landing page is a policy trigger. Conduct landing page audits routinely, especially after site updates, product changes, or new state launches.</p>

<h3>General CRO Practices for Digital Health</h3>
<ul>
  <li><strong>Eyebrow banners:</strong> Use a sticky top banner to surface the single most important value prop or CTA (e.g., "Start Your Medical Intake — Takes 5 Minutes"). These consistently improve click-through to the form.</li>
  <li><strong>Related products or variations on PDPs:</strong> For clients with multiple medication or treatment options, surface related products on the PDP to capture users who may be eligible for an alternative or complementary treatment.</li>
  <li><strong>Additional items at cart overview:</strong> Surface relevant add-ons at the cart review step. Particularly relevant for clients offering companion products (e.g., supplements alongside prescription medications).</li>
  <li><strong>Multiple CTA placements:</strong> Place CTAs several times throughout longer landing pages — at minimum at the top, middle, and bottom. In health, where process descriptions are long, a user who is ready to convert mid-page shouldn't have to scroll to find the button.</li>
</ul>

<p>The highest-ROI CRO work in digital health is usually not on the landing page — it's in the form. Most clients over-invest in landing page design and under-invest in the form UX that follows. A landing page that converts 8% but drops 60% in the form produces fewer patients than a landing page that converts 5% with a form that drops 25%. Audit the full funnel, not just the first step.</p>`,
    ],
  },

  dh_analytics: {
    key: 'dh_analytics',
    title: 'Tagging, Analytics & Attribution',
    tag: 'tag-dh',
    tagLabel: 'Digital Health',
    icon: 'ti-chart-dots',
    iconBg: '#E6F1FB',
    iconColor: '#185FA5',
    desc: 'HIPAA-compliant tracking setup, third-party compliance platforms, naming conventions, Enhanced Conversions, server-side tracking, and attribution frameworks for digital health.',
    topics: [
      'HIPAA Compliance in Tracking: Two Routes',
      'Third-Party Compliance Platforms',
      'Naming Conventions & Enhanced Conversions',
      'Server-Side Tracking & CAPI',
      'Attribution & Health Measurement',
    ],
    assignType: 'both',
    topicContent: [
      `<h3>What HIPAA Compliance Means for Tracking</h3>
<p>HIPAA compliance in the advertising context has a specific technical definition: tagging is configured to <strong>prevent PHI transmission</strong> to ad and analytics platforms (Google Ads, Meta, GA4, etc.) AND a Business Associate Agreement (BAA) is signed with any platform that handles that data. The second condition is harder than it sounds — Google and Meta <strong>do not sign BAAs</strong>. A fully compliant setup either requires a third-party intermediary that will sign a BAA, or a configuration that prevents PHI transmission entirely and accepts that no BAA is in place with the ad platforms themselves.</p>

<h3>Route 1 — No Third-Party Platform</h3>
<p>Configure tagging to prevent PHI from being passed to Google Ads, GA4, Meta, and other platforms. No BAA is involved, but PHI prevention is guaranteed by configuration. This is the lower-cost option. Precedent supports this approach: brands have lost lawsuits when PHI was passed to platforms (BetterHelp, GoodRx), but there is no established precedent for losing when PHI is prevented and no BAA exists with the ad platform.</p>

<h3>Route 2 — Third-Party Compliance Platform</h3>
<p>Use an intermediary (FreshPaint, Ours Privacy, Curve, or Segment) that signs a BAA with the client. The intermediary sits between the client's site and the ad platforms, ensuring both PHI prevention and a signed BAA. Adds annual platform cost but provides formal legal documentation of the compliance architecture. OBx assists with configuration — OBx does not sign BAAs with clients.</p>

<div class="content-callout">
  <strong>Performance Impact — Plan for It:</strong> When HIPAA compliance platforms (Route 2) are in place, expect 10–15% fewer reported conversions in ad platforms. These tools prioritize compliance over data completeness — the result is fewer data points flowing into platform optimization and attribution. This reduction is expected, normal, and not a sign that tracking is broken. Set this expectation with clients before implementation so it isn't misread as a performance regression when the platform goes live.
</div>

<p>Either route produces technically compliant tracking. If a client's legal team is comfortable without a BAA, Route 1 achieves the same PHI prevention at lower cost. If the client requires a signed BAA for internal compliance or insurance purposes, Route 2 is required. OBx can fully configure tagging under either approach.</p>`,

      `<h3>Third-Party Compliance Platform Comparison</h3>
<p>When a client requires Route 2, the choice of compliance platform affects cost, integrations, and how audiences can be built. These platforms are compliance tools first — not performance tools. Selection should be driven by the client's legal requirements and their advertising platform footprint.</p>

<ul>
  <li><strong>FreshPaint</strong> — Annual cost: $40K+. Integrations: 50+ platforms. BAA available. Best for: Clients running across many ad platforms who need the broadest integration coverage. FreshPaint's audience offering routes email lists through their platform before export to Facebook — but the list must be uploaded to FreshPaint first, then exported from FreshPaint to Facebook. If a client has a BAA with FreshPaint but uploads directly to Facebook themselves, they are not protected by that BAA.</li>
  <li><strong>Ours Privacy</strong> — Annual cost: $20K+. Multi-platform integrations. BAA available. Best for: Clients who want pixel-based audience building and cross-platform audience syndication. Ours Privacy builds audiences based on events configured within their platform — not from uploaded email lists. Primary value is cross-platform syndication: sending the same event-based audience to multiple platforms from one source.</li>
  <li><strong>Curve</strong> — Annual cost: ~$10K. Google + Meta only. BAA available. Best for: Clients running Google and Meta only who want the most cost-efficient compliant option.</li>
  <li><strong>Segment</strong> — Annual cost: Custom. Custom integrations. BAA available. Best for: Clients with existing Segment infrastructure or complex data pipeline requirements.</li>
</ul>

<div class="content-callout">
  <strong>OBx Position — Audience List Uploads:</strong> OBx advises against uploading any type of patient list to ad platforms — including email lists of non-patients — for digital health clients. The safest approach is to use platform-generated lists: pixel lists (website visitors) and engagement lists (Instagram or Facebook followers and engagements). If a client chooses to upload a list despite this recommendation, the upload should be done by the client directly, using a fully unrelated name — for example, "Purple 2000" instead of "patient emails." The campaign and ad set should also use an unrelated name.
</div>

<p>Platform selection comes down to integration footprint and legal requirements — not performance capability. If a client's legal team is comfortable without a BAA and they only run Google and Meta, Route 1 is the most cost-effective path. If they need a BAA and run a lean two-platform setup, Curve is the most affordable Route 2 option. FreshPaint's 50+ integrations matter most for clients running across DSP, TikTok, LinkedIn, and multiple Google products simultaneously.</p>`,

      `<h3>Naming Conventions for Health Advertisers</h3>
<p>Even with PHI prevented at the data layer, how events and audiences are named inside ad platforms creates its own compliance exposure. A conversion named "Appointment Booking" or an audience called "Patient Emails" signals the nature of the user action to platform systems — and must be anonymized in health advertising.</p>

<ul>
  <li><strong>Conversion Events:</strong> Use generic names like event_1, event_2. Avoid descriptive names like "Purchase," "Appointment Booking," "Form Submit." In Google Ads, these can be renamed directly in the platform. In Meta, event names must be configured before sending to Meta — they cannot be retroactively renamed after the fact.</li>
  <li><strong>Audience Names:</strong> Use generic names like audience_1, audience_x. Avoid descriptive names like "Page Viewers," "Patient Emails," "GLP-1 Visitors." These can be renamed directly in both Google Ads and Meta.</li>
  <li><strong>Campaign / Ad Set Names:</strong> Use neutral, condition-agnostic naming. Avoid names like "HHI Patients," "Autocruitment," "GLP-1 Retargeting." Under active review by Meta — follow proactively.</li>
</ul>

<div class="content-callout">
  <strong>2025 Update — Meta September 2025 Requirement:</strong> Meta will begin requiring anonymized event and audience names for Health and Finance advertisers starting September 2025. This becomes platform enforcement, not just a recommendation. Health clients who have not yet anonymized their conversion event names in Meta need to act before that date. In Meta, event names cannot be retroactively changed in the platform; they must be reconfigured at the source (GTM, server-side setup, or native pixel) before Meta receives them.
</div>

<h3>Enhanced Conversions — Updated 2025 Position</h3>
<p>As of 2025, OBx recommends Enhanced Conversions (EC) for eligible digital health clients. This is an updated position — the previous 2024 stance advised against EC for HIPAA clients. Google's 2025 improvements changed the risk/benefit calculus. Google reports a 5% CVR improvement and 10–13% CPA improvement with Enhanced Conversions combined with Smart Bidding.</p>

<p>Google does not sign BAAs, and HIPAA liability sits with the advertiser. The three-step process:</p>
<ol>
  <li><strong>Client Legal Review:</strong> The client's legal or compliance team evaluates the HIPAA risk of enabling Enhanced Conversions. Google does not sign BAAs, so enabling EC means hashed first-party data (email addresses, phone numbers) are transmitted to Google in the Enhanced Conversions payload. Legal must make an informed decision about whether that transmission is within their risk tolerance.</li>
  <li><strong>OBx Documents the Decision:</strong> Regardless of outcome, OBx documents the legal team's decision in writing. If the legal team approves EC, document that approval. If they decline, document that decision. This protects OBx and creates a clear record that the compliance determination was made by the client's own legal team.</li>
  <li><strong>Implement or Optimize Existing Tracking:</strong> If legal approves, implement Enhanced Conversions. If legal is conservative, the safer path is optimizing existing tracking quality — better GTM configuration, server-side setup, and offline conversion imports can improve signal quality without the BAA exposure that Enhanced Conversions creates.</li>
</ol>`,

      `<h3>What Server-Side Tracking Is</h3>
<p>Any time you hear "Conversion API" or "CAPI," that is server-side tracking. Instead of JavaScript tags firing in the user's browser and sending data directly to ad platforms, your website sends interaction data to your own server first — which then forwards relevant data to platforms like Google Ads, Meta, and TikTok. This approach is cookie-independent, bypasses ad blockers and iOS privacy restrictions, gives tighter control over what data reaches platforms, and is inherently more privacy-friendly for HIPAA-regulated advertisers. Common implementations include Google's Server-Side GTM, Meta Conversions API, and custom server endpoints relaying to multiple platforms.</p>

<h3>Server-Only vs. Hybrid Implementation</h3>
<ul>
  <li><strong>Server-Only Implementation:</strong> All tracking happens server-to-server. Events are sent directly from the server to each platform. Browser-based pixel helpers will show zero events — this is expected behavior, not a tracking failure. Most health clients using FreshPaint or Ours Privacy operate in this mode. Verification must be done via each platform's server-side testing tools, not browser extensions.</li>
  <li><strong>Hybrid Implementation:</strong> Browser-side events fire in addition to server-side events. Pixel helpers will show some events — the browser-fired ones — but will not show the server-side duplicates or server-only events. This creates the appearance of partial tracking in browser helpers. The setup is functioning correctly.</li>
</ul>

<div class="content-callout">
  <strong>Pixel Helpers Are Not a Valid Validation Tool for Health Clients:</strong> Browser-based tag validation tools — Meta Pixel Helper, TikTok Pixel Helper, Google Tag Assistant, Omnibug — can only detect events that fire client-side, in the browser. The absence of events in a pixel helper does NOT mean tracking is broken. Most health clients now run hybrid or server-only setups. Use them for initial setup verification only; rely on platform-native testing tools for ongoing confirmation.
</div>

<h3>How to Verify Server-Side Events Are Working</h3>
<ol>
  <li><strong>Meta CAPI — Events Manager:</strong> Navigate to Events Manager → Data Sources → Select your Pixel → "Test Events" tab. Look for the "Server" designation next to events. Server events appear here even though they are invisible to the Meta Pixel Helper browser extension.</li>
  <li><strong>TikTok Events API — Real-Time Events:</strong> Navigate to TikTok Events Manager → Manage → Check real-time events. Server-side events sent via the TikTok Events API appear here in real-time, independently of the TikTok Pixel Helper browser extension.</li>
  <li><strong>Google Server-Side GTM:</strong> Use Preview mode within the server container in Google Tag Manager, then confirm event receipt via platform verification in Google Ads or GA4. The server container's preview mode shows server-side events as they flow through — separate from the browser container's debug view.</li>
  <li><strong>Check Conversion Reporting in the Ads Platform:</strong> Conversion data appearing in the ads platform's reporting interface is the ultimate confirmation that events are being received and processed. Allow 24–48 hours for conversion data to populate after implementation before diagnosing issues.</li>
</ol>`,

      `<h3>Attribution Models for Digital Health</h3>
<p>Platform attribution discrepancies are a standard challenge in digital advertising. Health clients face an additional layer: HIPAA compliance tools reduce the volume of data reaching platforms, which compounds the gap between platform-reported conversions and actual business results.</p>

<ul>
  <li><strong>MMM — Media Mix Modeling:</strong> Statistical analysis of how budget changes across channels affect overall business outcomes over time. Slower to produce results but useful for long-term channel contribution trends. Most relevant for enterprise-scale health clients with significant multi-channel spend history.</li>
  <li><strong>MTA — Multi-Touch Attribution:</strong> Tracks clicks and impressions across ads and ties them to conversions. Includes first-click, last-click, linear, and data-driven models. The most common starting point for mid-market health clients building toward a cross-channel view.</li>
  <li><strong>Incrementality Testing:</strong> Controlled experiments that test whether a channel or tactic produces additional patient acquisitions that wouldn't have occurred without it. Requires an established baseline before lift can be measured — not a starting point, an evolution.</li>
</ul>

<div class="content-callout">
  <strong>Platform Discrepancy — What Is Expected and Normal:</strong> Different platforms report different conversion numbers because each uses its own attribution model. Google and Meta model conversions beyond actual clicks and views — meaning their reported totals will always exceed the deduped, cross-channel business reality. For health clients, this gap is further widened by HIPAA compliance tools that reduce the volume of conversion signals reaching platforms by 10–15%. Do not optimize based on platform-reported totals in isolation — platforms will always aggregate to more conversions than the business actually sees.
</div>

<h3>Source of Truth by Client Size</h3>
<ul>
  <li><strong>Small (1–2 channels):</strong> In-platform measurement + holistic GA4/CRM view. Platform totals are a reasonable proxy at small scale; cross-reference with GA4 or CRM to validate trends.</li>
  <li><strong>Medium (3–5 channels):</strong> GA4 or CRM with recognition of last-click limitations. GA4 uses last-click by default, inflating credit to Direct/Organic. Use consistently as a baseline — not as channel-level truth.</li>
  <li><strong>Enterprise:</strong> Client's internal model or third-party attribution platform. A deduped, cross-channel source is the most reliable indicator of actual business performance.</li>
</ul>

<h3>Offline &amp; Appointment-Based Attribution</h3>
<p>Many digital health conversions happen off-platform — a scheduled consultation, a completed intake reviewed by a physician, a first prescription filled. If ad platforms can only optimize for the website event (form submission), they are missing the actual patient acquisition step. Offline attribution closes this gap.</p>

<p><strong>How it works:</strong> Each ad click receives a unique ID: gclid (Google) or fbclid (Meta). When a user converts offline — books an appointment, completes a consultation, fills a prescription — you upload that click ID back to the platform along with the conversion timestamp and value. The platform matches the offline event to the original ad click.</p>

<p><strong>Setup options:</strong> Upload manually via CSV or Google Sheets integration; integrate your CRM directly (HubSpot, Salesforce, etc.); or use API automation for real-time conversion import. CRM integration is the highest-fidelity option for health clients with appointment-based conversion funnels.</p>

<p><strong>HIPAA consideration:</strong> Offline conversion uploads involve sending click IDs and conversion data back to Google and Meta. The click ID itself is not PHI, but any supplemental metadata appended to the upload should be reviewed for PHI risk before sending. Consult client legal before uploading conversion data that includes appointment details or health-related context.</p>`,
    ],
  },
};
