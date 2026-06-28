<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KD Digital Studio — Enterprise Technology Partner</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --obsidian: #050A14;
    --surface: #0A1628;
    --surface-2: #0F1E38;
    --cyan: #00D4FF;
    --blue: #0066FF;
    --white: #FFFFFF;
    --muted: #8892A4;
    --border: rgba(0, 212, 255, 0.12);
    --glow: 0 0 40px rgba(0, 212, 255, 0.15);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--obsidian);
    color: var(--white);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ─── GRID OVERLAY ─── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  /* ─── NAV ─── */
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 5vw;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(5, 10, 20, 0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }

  .logo {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: -0.02em;
    color: var(--white);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-mark {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--cyan), var(--blue));
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--obsidian);
    flex-shrink: 0;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 40px;
    list-style: none;
  }

  .nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: color 0.2s;
  }

  .nav-links a:hover { color: var(--white); }

  .nav-cta {
    padding: 9px 22px;
    background: transparent;
    border: 1px solid var(--cyan);
    color: var(--cyan) !important;
    border-radius: 6px;
    font-size: 0.8rem !important;
    transition: background 0.2s, color 0.2s !important;
  }

  .nav-cta:hover {
    background: var(--cyan) !important;
    color: var(--obsidian) !important;
  }

  /* ─── HERO ─── */
  #home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 72px 5vw 0;
    position: relative;
    z-index: 1;
  }

  .hero-inner {
    max-width: 900px;
  }

  .hero-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--cyan);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hero-eyebrow::before {
    content: '';
    width: 40px;
    height: 1px;
    background: var(--cyan);
    display: block;
  }

  .hero-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2.8rem, 6vw, 5.2rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 28px;
  }

  .hero-title .accent {
    background: linear-gradient(90deg, var(--cyan), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Terminal block — the signature element */
  .terminal {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px 24px;
    margin-bottom: 40px;
    max-width: 620px;
    box-shadow: var(--glow);
  }

  .terminal-bar {
    display: flex;
    gap: 7px;
    margin-bottom: 14px;
  }

  .dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  .dot-r { background: #FF5F57; }
  .dot-y { background: #FEBC2E; }
  .dot-g { background: #28C840; }

  .terminal-line {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    color: var(--muted);
    margin-bottom: 6px;
    line-height: 1.7;
  }

  .terminal-line .prompt { color: var(--cyan); }
  .terminal-line .cmd { color: var(--white); }
  .terminal-line .out { color: #5AF078; }
  .terminal-line .comment { color: #4A5568; }

  .cursor {
    display: inline-block;
    width: 8px;
    height: 14px;
    background: var(--cyan);
    vertical-align: middle;
    animation: blink 1.1s step-end infinite;
    margin-left: 2px;
  }

  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

  .hero-desc {
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.75;
    max-width: 560px;
    margin-bottom: 44px;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn-primary {
    padding: 14px 32px;
    background: linear-gradient(135deg, var(--cyan), var(--blue));
    color: var(--obsidian);
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }

  .btn-ghost {
    padding: 14px 32px;
    background: transparent;
    color: var(--white);
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); }

  /* Scroll indicator */
  .scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 5vw;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--muted);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
  }

  .scroll-line {
    width: 40px;
    height: 1px;
    background: var(--muted);
    position: relative;
    overflow: hidden;
  }

  .scroll-line::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--cyan);
    transform: translateX(-100%);
    animation: scan 2s ease-in-out infinite;
  }

  @keyframes scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }

  /* ─── SECTION SHELL ─── */
  section {
    padding: 110px 5vw;
    position: relative;
    z-index: 1;
  }

  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--cyan);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .section-label::before {
    content: '';
    width: 28px;
    height: 1px;
    background: var(--cyan);
  }

  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  .section-sub {
    color: var(--muted);
    font-size: 1rem;
    max-width: 480px;
    line-height: 1.7;
    margin-bottom: 64px;
  }

  /* ─── SERVICES ─── */
  #services { background: var(--surface); }

  #services::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cyan), transparent);
    opacity: 0.3;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }

  .service-card {
    background: var(--surface);
    padding: 36px;
    transition: background 0.25s;
    position: relative;
    overflow: hidden;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--cyan), var(--blue));
    opacity: 0;
    transition: opacity 0.25s;
  }

  .service-card:hover { background: var(--surface-2); }
  .service-card:hover::before { opacity: 1; }

  .service-icon {
    width: 44px;
    height: 44px;
    border: 1px solid var(--border);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 22px;
    font-size: 1.2rem;
  }

  .service-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }

  .service-desc {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .service-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: var(--cyan);
    background: rgba(0, 212, 255, 0.08);
    border: 1px solid rgba(0, 212, 255, 0.2);
    padding: 4px 10px;
    border-radius: 4px;
    letter-spacing: 0.05em;
  }

  /* ─── METRICS BAR ─── */
  .metrics {
    padding: 60px 5vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 40px;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    position: relative;
    z-index: 1;
  }

  .metric-item { text-align: center; }

  .metric-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    background: linear-gradient(90deg, var(--cyan), var(--blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 8px;
  }

  .metric-label {
    font-size: 0.82rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  /* ─── PROCESS ─── */
  #process { }

  .process-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 760px;
  }

  .process-item {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 28px;
    padding: 32px 0;
    border-bottom: 1px solid var(--border);
    position: relative;
  }

  .process-item:last-child { border-bottom: none; }

  .process-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--muted);
    padding-top: 4px;
  }

  .process-body {}

  .process-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  .process-desc {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.7;
  }

  /* ─── CONTACT ─── */
  #contact {
    background: var(--surface);
    border-top: 1px solid var(--border);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }

  .contact-intro .section-title { margin-bottom: 20px; }

  .contact-detail {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
  }

  .contact-detail:last-child { border-bottom: none; }

  .contact-icon {
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .contact-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }

  .contact-value {
    font-size: 0.95rem;
    color: var(--white);
    font-weight: 500;
  }

  .contact-value a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
  }

  .contact-value a:hover { color: var(--cyan); }

  /* Contact Form */
  .contact-form { display: flex; flex-direction: column; gap: 16px; }

  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  .field { display: flex; flex-direction: column; gap: 8px; }

  .field label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .field input,
  .field textarea,
  .field select {
    background: var(--obsidian);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 12px 16px;
    color: var(--white);
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
    width: 100%;
  }

  .field input:focus,
  .field textarea:focus,
  .field select:focus {
    border-color: var(--cyan);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.08);
  }

  .field textarea { resize: vertical; min-height: 120px; }

  .field select option { background: var(--surface); }

  .form-submit {
    padding: 15px 36px;
    background: linear-gradient(135deg, var(--cyan), var(--blue));
    color: var(--obsidian);
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
    letter-spacing: 0.02em;
    align-self: flex-start;
  }

  .form-submit:hover { opacity: 0.85; transform: translateY(-1px); }

  /* ─── FOOTER ─── */
  footer {
    padding: 32px 5vw;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
    gap: 16px;
  }

  .footer-left {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--muted);
  }

  .footer-right {
    font-size: 0.8rem;
    color: var(--muted);
  }

  /* ─── MOBILE ─── */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .hero-title { font-size: 2.4rem; }
    .contact-grid { grid-template-columns: 1fr; gap: 48px; }
    .form-row { grid-template-columns: 1fr; }
    section { padding: 80px 5vw; }
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor { animation: none; opacity: 1; }
    .scroll-line::after { animation: none; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <a class="logo" href="#home">
    <span class="logo-mark">KD</span>
    KD Digital Studio
  </a>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact" class="nav-cta">Start a Project</a></li>
  </ul>
</nav>

<!-- HERO -->
<section id="home">
  <div class="hero-inner">
    <div class="hero-eyebrow">Enterprise Technology Partner</div>
    <h1 class="hero-title">
      We build systems<br>
      that <span class="accent">scale without<br>asking permission.</span>
    </h1>

    <div class="terminal">
      <div class="terminal-bar">
        <span class="dot dot-r"></span>
        <span class="dot dot-y"></span>
        <span class="dot dot-g"></span>
      </div>
      <div class="terminal-line"><span class="prompt">$</span> <span class="cmd">kd --status production</span></div>
      <div class="terminal-line"><span class="out">✓ Infrastructure: Online</span> <span class="comment">// 99.97% uptime</span></div>
      <div class="terminal-line"><span class="out">✓ AI Pipelines: Active</span> <span class="comment">// 14 live integrations</span></div>
      <div class="terminal-line"><span class="out">✓ Client Systems: Deployed</span> <span class="comment">// across 3 continents</span></div>
      <div class="terminal-line"><span class="prompt">$</span> <span class="cmd">kd --build your-next-system<span class="cursor"></span></span></div>
    </div>

    <p class="hero-desc">
      We architect digital infrastructure for companies that can't afford slowdowns — from AI workflow integration to high-performance web systems, built for throughput, not demos.
    </p>

    <div class="hero-actions">
      <a href="#services" class="btn-primary">Explore Services →</a>
      <a href="#contact" class="btn-ghost">Book a Strategy Call</a>
    </div>
  </div>

  <div class="scroll-hint">
    <span class="scroll-line"></span>
    Scroll to explore
  </div>
</section>

<!-- METRICS -->
<div class="metrics">
  <div class="metric-item">
    <div class="metric-value">50+</div>
    <div class="metric-label">Projects Shipped</div>
  </div>
  <div class="metric-item">
    <div class="metric-value">99.97%</div>
    <div class="metric-label">Uptime SLA</div>
  </div>
  <div class="metric-item">
    <div class="metric-value">3×</div>
    <div class="metric-label">Avg. Latency Reduction</div>
  </div>
  <div class="metric-item">
    <div class="metric-value">14</div>
    <div class="metric-label">AI Integrations Live</div>
  </div>
</div>

<!-- SERVICES -->
<section id="services">
  <div class="section-label">What We Build</div>
  <h2 class="section-title">Capabilities</h2>
  <p class="section-sub">Each engagement is scoped to your system constraints — not packaged off the shelf.</p>

  <div class="services-grid">
    <div class="service-card">
      <div class="service-icon">⬡</div>
      <div class="service-title">Enterprise Web Architecture</div>
      <p class="service-desc">High-performance web platforms engineered for conversion and sub-100ms load targets. From design systems to deployment pipelines.</p>
      <div class="service-tags">
        <span class="tag">Next.js</span>
        <span class="tag">Edge CDN</span>
        <span class="tag">Core Web Vitals</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-icon">◈</div>
      <div class="service-title">AI System Integration</div>
      <p class="service-desc">We embed LLM pipelines, automation agents, and intelligent workflows directly into your existing infrastructure — no greenfield required.</p>
      <div class="service-tags">
        <span class="tag">LLM APIs</span>
        <span class="tag">Workflow Agents</span>
        <span class="tag">RAG Systems</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-icon">▣</div>
      <div class="service-title">UI/UX Product Design</div>
      <p class="service-desc">Interface design that reduces cognitive load and increases task completion. We prototype, test, and iterate before a single line of code ships.</p>
      <div class="service-tags">
        <span class="tag">Design Systems</span>
        <span class="tag">Figma</span>
        <span class="tag">Usability Testing</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-icon">◎</div>
      <div class="service-title">Brand & Identity Systems</div>
      <p class="service-desc">Visual identity built to perform across enterprise touchpoints — pitch decks, product UI, digital campaigns, and executive collateral.</p>
      <div class="service-tags">
        <span class="tag">Brand Strategy</span>
        <span class="tag">Motion Identity</span>
        <span class="tag">Asset Systems</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-icon">⬙</div>
      <div class="service-title">Performance Optimization</div>
      <p class="service-desc">Systematic audit and refactor of existing platforms — bundle sizes, render paths, API latency, database query patterns. We find the ceiling and raise it.</p>
      <div class="service-tags">
        <span class="tag">Profiling</span>
        <span class="tag">Caching Strategy</span>
        <span class="tag">Query Optimization</span>
      </div>
    </div>

    <div class="service-card">
      <div class="service-icon">◉</div>
      <div class="service-title">Growth Engineering</div>
      <p class="service-desc">Analytics infrastructure, A/B testing frameworks, and conversion architecture. We instrument, measure, and optimize your entire acquisition funnel.</p>
      <div class="service-tags">
        <span class="tag">Experimentation</span>
        <span class="tag">Funnel Analysis</span>
        <span class="tag">Data Pipelines</span>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section id="process">
  <div class="section-label">How We Work</div>
  <h2 class="section-title">Engagement Model</h2>
  <p class="section-sub">Structured to minimize decision overhead and maximize output velocity from day one.</p>

  <div class="process-list">
    <div class="process-item">
      <span class="process-num">01 /</span>
      <div class="process-body">
        <div class="process-title">Technical Discovery</div>
        <p class="process-desc">We map your current system architecture, identify bottlenecks, and define success metrics before any scope is locked. No assumptions, no retainers upfront.</p>
      </div>
    </div>
    <div class="process-item">
      <span class="process-num">02 /</span>
      <div class="process-body">
        <div class="process-title">Scoped Delivery Plan</div>
        <p class="process-desc">A fixed deliverable list with clear milestones. You always know what ships when. No moving targets, no sprint theater.</p>
      </div>
    </div>
    <div class="process-item">
      <span class="process-num">03 /</span>
      <div class="process-body">
        <div class="process-title">Build & Integration</div>
        <p class="process-desc">Continuous delivery with documented handoffs. Every build is tested against your performance benchmarks before it reaches your environment.</p>
      </div>
    </div>
    <div class="process-item">
      <span class="process-num">04 /</span>
      <div class="process-body">
        <div class="process-title">Deployment & Ownership Transfer</div>
        <p class="process-desc">We document the full stack, train your team, and transfer ownership cleanly. You're not dependent on us post-launch unless you choose to be.</p>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="contact-grid">
    <div class="contact-intro">
      <div class="section-label">Get in Touch</div>
      <h2 class="section-title">Start a conversation.</h2>
      <p class="section-sub" style="margin-bottom: 40px;">Tell us what you're building. We'll tell you if we can move the needle.</p>

      <div class="contact-detail">
        <div class="contact-icon">✉</div>
        <div>
          <div class="contact-label">Email</div>
          <div class="contact-value"><a href="mailto:officialkddigitalstudio@gmail.com">officialkddigitalstudio@gmail.com</a></div>
        </div>
      </div>

      <div class="contact-detail">
        <div class="contact-icon">☏</div>
        <div>
          <div class="contact-label">Direct Line</div>
          <div class="contact-value"><a href="tel:+918368509327">+91 83685 09327</a></div>
        </div>
      </div>

      <div class="contact-detail">
        <div class="contact-icon">◷</div>
        <div>
          <div class="contact-label">Response Time</div>
          <div class="contact-value">Within 24 hours, business days</div>
        </div>
      </div>
    </div>

    <div>
      <div class="contact-form">
        <div class="form-row">
          <div class="field">
            <label for="name">Full Name</label>
            <input type="text" id="name" placeholder="Priya Sharma">
          </div>
          <div class="field">
            <label for="company">Company</label>
            <input type="text" id="company" placeholder="Acme Corp">
          </div>
        </div>
        <div class="field">
          <label for="email">Work Email</label>
          <input type="email" id="email" placeholder="you@company.com">
        </div>
        <div class="field">
          <label for="service">Service Area</label>
          <select id="service">
            <option value="" disabled selected>Select a focus area</option>
            <option>Enterprise Web Architecture</option>
            <option>AI System Integration</option>
            <option>UI/UX Product Design</option>
            <option>Brand & Identity Systems</option>
            <option>Performance Optimization</option>
            <option>Growth Engineering</option>
            <option>Multiple / Not Sure Yet</option>
          </select>
        </div>
        <div class="field">
          <label for="message">Project Brief</label>
          <textarea id="message" placeholder="Describe your system, the problem you're solving, and your timeline…"></textarea>
        </div>
        <button class="form-submit" onclick="handleSubmit()">Send Brief →</button>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-left">
    © 2025 KD Digital Studio · All systems operational
  </div>
  <div class="footer-right">
    Built for performance. Designed with intent.
  </div>
</footer>

<script>
  // Smooth nav highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + entry.target.id
            ? 'var(--white)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // Form handler
  function handleSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in your name, email, and project brief.');
      return;
    }

    const mailto = `mailto:officialkddigitalstudio@gmail.com?subject=Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email)}`;
    window.location.href = mailto;
  }

  // Stagger card entrance
  const cards = document.querySelectorAll('.service-card');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    cardObserver.observe(card);
  });
</script>
</body>
</html>
