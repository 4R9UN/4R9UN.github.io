/**
 * ARJUN TRIVEDI (@4R9UN) — EXECUTIVE AI SECURITY COMMAND CENTER CONTROLLER
 *  1. Dark / Editorial Light Theme Toggle (persisted)
 *  2. 4-Lens Executive Mandate Switcher (All / AI Security / AI FDE / Detection Leader)
 *  3. Interactive Cross-Plane Attack Graph Lab (Siloed Alerts vs Graph + Node Inspector)
 *  4. Clickable 4-Stage Architecture SVG synced to 60s Quickstart Terminals
 *  5. Experience & Flagship System Filters + 1-Click Clipboard Copy
 *  6. Working Cmd+K / Ctrl+K Executive Command Palette Modal (Keyboard ↑/↓/Enter/Esc)
 *  7. Live GitHub Stars & PyPI Version Hydrator (sessionStorage cached, graceful fallback)
 */

(() => {
  'use strict';

  // 1. THEME TOGGLE (OBSIDIAN DARK / EDITORIAL LIGHT)
  const themeBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('arjun_portfolio_theme') || 'dark';

  function applyTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('arjun_portfolio_theme', next);
    if (themeBtn) {
      themeBtn.textContent = next === 'dark' ? '☀ Light' : '☾ Dark';
      themeBtn.setAttribute('aria-label', next === 'dark' ? 'Switch to Editorial Light theme' : 'Switch to Obsidian Dark theme');
    }
  }
  applyTheme(savedTheme);
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }

  // 2. 4-LENS EXECUTIVE MANDATE SWITCHER
  const LENS_SUMMARIES = {
    all: '<strong>All Mandates Active:</strong> 12+ yrs Cybersecurity · 7+ yrs Microsoft · Team Leadership &amp; End-to-End Research-to-Production Delivery · Official MCP Registry pioneer · 1,000+ enterprise deployments.',
    aisec: '<strong>AI Security &amp; Agentic Architect Fit:</strong> End-to-end R&amp;D to production across Project Perception agents, +35% Security Copilot RAG lift, Official MCP servers, and AI Red-Team guardrails.',
    fde: '<strong>AI Forward Deployed Engineering Fit:</strong> Embedded across 50+ CISO/SOC escalations (+20% CSAT), converting live enterprise telemetry gaps into 1,000+ multi-cloud deployments.',
    detection: '<strong>Detection &amp; Research Leadership Fit:</strong> Proven team management, strategy, and mentorship (50+); 200+ KQL detections (-50% MTTR), ML models (-30% FP), and 100M+ endpoints protected.'
  };

  const lensBtns = document.querySelectorAll('[data-lens]');
  const lensSummaryEl = document.getElementById('lens-summary');
  const lensTargets = document.querySelectorAll('[data-lenses]');

  function setMandateLens(lensKey) {
    lensBtns.forEach((btn) => {
      const active = btn.getAttribute('data-lens') === lensKey;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    if (lensSummaryEl && LENS_SUMMARIES[lensKey]) {
      lensSummaryEl.innerHTML = LENS_SUMMARIES[lensKey];
    }
    lensTargets.forEach((el) => {
      if (lensKey === 'all') {
        el.classList.remove('lens-dimmed', 'lens-highlighted');
        return;
      }
      const tags = (el.getAttribute('data-lenses') || '').split(/\s+/);
      const match = tags.includes(lensKey);
      el.classList.toggle('lens-highlighted', match);
      el.classList.toggle('lens-dimmed', !match);
    });
  }

  lensBtns.forEach((btn) => {
    btn.addEventListener('click', () => setMandateLens(btn.getAttribute('data-lens')));
  });

  // 3. INTERACTIVE CROSS-PLANE ATTACK GRAPH LAB
  const GRAPH_NODES = {
    identity: {
      badge: 'PLANE 01 · IDENTITY & SESSION',
      title: 'Adversary-in-the-Middle Session & Token Replay',
      mitre: 'MITRE ATT&CK T1566.002 · T1539 (Steal Web Session Cookie)',
      signal: 'Anomalous session token replay across autonomous system boundaries within 90 seconds of reverse-proxy sign-in.',
      agent: 'Scoped Identity Hunting Agent queries schema-verified sign-in & risk tables with time-bounded KQL.',
      gate: 'Distinguishes true session replay from benign VPN/travel churn before escalating.'
    },
    oauth: {
      badge: 'PLANE 02 · OAUTH & SAAS CONTROL',
      title: 'Illicit OAuth App Consent & Credential Addition',
      mitre: 'MITRE ATT&CK T1528 · T1098.001 (Additional Cloud Credentials)',
      signal: 'Newly registered service principal granted Mail.ReadWrite / Directory.Read.All immediately following risky sign-in.',
      agent: 'Cross-Plane Graph Correlator links Identity session ID to Cloud Audit principal mutation as a causal edge.',
      gate: 'Verifies publisher verification status, app age, and historical tenant baseline.'
    },
    cloud: {
      badge: 'PLANE 03 · MULTI-CLOUD & ENDPOINT',
      title: 'Cross-Cloud Control-Plane & Endpoint Pivot',
      mitre: 'MITRE ATT&CK T1078.004 · T1059 (Cloud & Runtime Execution)',
      signal: 'Correlated token usage across Azure, AWS, GCP, or Okta paired with living-off-the-land CLI reconnaissance.',
      agent: 'Multi-SIEM Reasoning Engine (ASRS pattern) pivots across Sentinel, Defender XDR, Splunk, and Elastic.',
      gate: 'Produces deterministic entity timeline covering blast radius across users, hosts, and subscriptions.'
    },
    mcp: {
      badge: 'GROUNDING LAYER · SCHEMA + CTI MCP',
      title: 'mcp-kql-server + fastmcp-threatintel Grounding',
      mitre: 'AST-Validated KQL · STIX 2.1 · VirusTotal / OTX / AbuseIPDB',
      signal: 'Zero-hallucination table/column schema pinning prior to KQL synthesis, enriched with multi-source IOC confidence.',
      agent: 'Official MCP Registry servers eliminate invented column names and attach Diamond Model infrastructure context.',
      gate: 'Clean zero-row KQL execution is recorded as verified negative coverage rather than silent failure.'
    },
    validator: {
      badge: 'QUALITY GATE 01 · EVIDENCE VALIDATOR',
      title: 'Source Provenance & Benign Hypothesis Check',
      mitre: 'Deterministic Metric Verification · -30% False Positives',
      signal: 'Re-verifies distinct entity counts, query execution status, timestamp ordering, and null/benign admin explanations.',
      agent: 'Independent Evidence Validator blocks any finding whose count or causal link lacks raw query provenance.',
      gate: 'Prevents swallowed query timeouts or noisy broad IP overlaps from masquerading as confirmed intrusions.'
    },
    critic: {
      badge: 'QUALITY GATE 02 · ADVERSARIAL CRITIC',
      title: 'Overclaim, Prompt-Injection & Executive Report Gate',
      mitre: 'OWASP LLM01 / LLM08 · CWE-285 Boundary Enforcement',
      signal: 'Audits final narrative for unsupported actor attribution, untrusted telemetry prompt injection, and PII hygiene.',
      agent: 'Adversarial Critic enforces least-privilege tool boundaries (Assured-Arc pattern) before CISO/SOC delivery.',
      gate: 'Delivers a decision-ready executive verdict ("Am I impacted, and what is the verified evidence?") cutting MTTR by 50%.'
    }
  };

  const graphCard = document.getElementById('graph-canvas-card');
  const paradigmBtns = document.querySelectorAll('[data-paradigm]');
  const agNodes = document.querySelectorAll('[data-ag-node]');
  const inspBadge = document.getElementById('insp-badge');
  const inspTitle = document.getElementById('insp-title');
  const inspMitre = document.getElementById('insp-mitre');
  const inspSignal = document.getElementById('insp-signal');
  const inspAgent = document.getElementById('insp-agent');
  const inspGate = document.getElementById('insp-gate');

  paradigmBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-paradigm');
      paradigmBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      if (graphCard) {
        graphCard.setAttribute('data-mode', mode);
      }
    });
  });

  function selectGraphNode(nodeKey) {
    const info = GRAPH_NODES[nodeKey];
    if (!info) return;
    agNodes.forEach((n) => n.classList.toggle('selected', n.getAttribute('data-ag-node') === nodeKey));
    if (inspBadge) inspBadge.textContent = info.badge;
    if (inspTitle) inspTitle.textContent = info.title;
    if (inspMitre) inspMitre.textContent = info.mitre;
    if (inspSignal) inspSignal.textContent = info.signal;
    if (inspAgent) inspAgent.textContent = info.agent;
    if (inspGate) inspGate.textContent = info.gate;
  }

  agNodes.forEach((node) => {
    node.addEventListener('click', () => {
      if (graphCard && graphCard.getAttribute('data-mode') === 'siloed') {
        const graphBtn = document.querySelector('[data-paradigm="graph"]');
        if (graphBtn) graphBtn.click();
      }
      selectGraphNode(node.getAttribute('data-ag-node'));
    });
  });

  // 4. ARCHITECTURE DIAGRAM SWITCHER + CLICKABLE SVG -> QUICKSTART SYNC
  const archBtns = document.querySelectorAll('[data-arch-tab]');
  const archPanes = document.querySelectorAll('[data-arch-pane]');
  const qsBtns = document.querySelectorAll('[data-qs-tab]');
  const qsPanes = document.querySelectorAll('[data-qs-pane]');
  const svgStageGroups = document.querySelectorAll('[data-svg-qs]');
  const archSyncStatus = document.getElementById('arch-sync-status');

  function activateQuickstartTab(qsKey, stageLabel) {
    qsBtns.forEach((b) => {
      const active = b.getAttribute('data-qs-tab') === qsKey;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', String(active));
    });
    qsPanes.forEach((pane) => {
      pane.classList.toggle('active', pane.getAttribute('data-qs-pane') === qsKey);
    });
    svgStageGroups.forEach((g) => {
      g.classList.toggle('stage-selected', g.getAttribute('data-svg-qs') === qsKey);
    });
    if (archSyncStatus && stageLabel) {
      archSyncStatus.textContent = 'Selected: ' + stageLabel + ' (synced with runnable terminal below)';
    }
  }

  archBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-arch-tab');
      archBtns.forEach((b) => b.classList.toggle('active', b === btn));
      archPanes.forEach((pane) => pane.classList.toggle('active', pane.getAttribute('data-arch-pane') === key));
    });
  });

  qsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activateQuickstartTab(btn.getAttribute('data-qs-tab'), btn.textContent.trim());
    });
  });

  svgStageGroups.forEach((group) => {
    group.addEventListener('click', () => {
      const qsKey = group.getAttribute('data-svg-qs');
      const label = group.getAttribute('data-stage-label') || qsKey;
      activateQuickstartTab(qsKey, label);
      const panel = document.getElementById('quickstart-panel');
      if (panel) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // 5. EXPERIENCE & FLAGSHIP SYSTEMS FILTERS
  const expBtns = document.querySelectorAll('[data-exp-filter]');
  const expCards = document.querySelectorAll('[data-exp-org]');
  expBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-exp-filter');
      expBtns.forEach((b) => b.classList.toggle('active', b === btn));
      expCards.forEach((card) => {
        card.style.display = (filter === 'all' || card.getAttribute('data-exp-org') === filter) ? 'block' : 'none';
      });
    });
  });

  const projBtns = document.querySelectorAll('[data-proj-filter]');
  const projCards = document.querySelectorAll('[data-proj-cat]');
  projBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-proj-filter');
      projBtns.forEach((b) => b.classList.toggle('active', b === btn));
      projCards.forEach((card) => {
        card.style.display = (filter === 'all' || card.getAttribute('data-proj-cat') === filter) ? 'flex' : 'none';
      });
    });
  });

  // 6. 1-CLICK CLIPBOARD COPY
  function copyText(text, feedbackBtn) {
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    if (feedbackBtn) {
      const orig = feedbackBtn.getAttribute('data-orig-label') || feedbackBtn.textContent;
      feedbackBtn.setAttribute('data-orig-label', orig);
      feedbackBtn.classList.add('copied');
      feedbackBtn.textContent = '✓ Copied!';
      setTimeout(() => {
        feedbackBtn.classList.remove('copied');
        feedbackBtn.textContent = orig;
      }, 1700);
    }
  }

  document.querySelectorAll('.copy-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const direct = btn.getAttribute('data-copy-text');
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = targetId ? document.getElementById(targetId) : null;
      copyText(direct || (targetEl ? targetEl.textContent : ''), btn);
    });
  });

  // 7. WORKING CMD+K / CTRL+K EXECUTIVE COMMAND PALETTE MODAL
  const cmdkModal = document.getElementById('cmdk-modal');
  const cmdkInput = document.getElementById('cmdk-input');
  const cmdkList = document.getElementById('cmdk-results');
  const cmdkClose = document.getElementById('cmdk-close-btn');

  const COMMANDS = [
    { tag: 'CV PDF', cls: 'tag-indigo', title: 'Download Executive AI Security Leader CV (2026 PDF)', meta: 'Direct PDF', action: () => { window.location.href = 'assets/Arjun_Trivedi_Executive_AI_Security_Leader_CV_2026.pdf'; } },
    { tag: 'LIVE APP', cls: 'tag-emerald', title: 'Launch ASRS: Multi-SIEM Autonomous Security Reasoning Demo', meta: 'asrs-demo-v1.vercel.app ↗', action: () => window.open('https://asrs-demo-v1.vercel.app/', '_blank', 'noopener') },
    { tag: 'LAB', cls: '', title: 'Inspect Interactive Cross-Plane Attack Graph & Critic Gates', meta: 'Jump to #sec-graph-lab', action: () => document.getElementById('sec-graph-lab')?.scrollIntoView({ behavior: 'smooth' }) },
    { tag: 'MCP PYPI', cls: 'tag-emerald', title: 'Copy PyPI Install: mcp-kql-server + fastmcp-threatintel', meta: 'pip install ...', action: () => copyText('pip install mcp-kql-server fastmcp-threatintel') },
    { tag: 'HARNESS', cls: 'tag-amber', title: 'Copy Assured-Arc Dual-Host Workbench Setup (PowerShell)', meta: '.\\install.ps1 -Profile CopilotCli', action: () => copyText('git clone https://github.com/4R9UN/Assured-Arc.git\nSet-Location Assured-Arc\n.\\install.ps1 -Profile CopilotCli') },
    { tag: 'LINKEDIN', cls: 'tag-indigo', title: 'Open Arjun Trivedi LinkedIn Profile (8,950+ Followers)', meta: 'linkedin.com/in/imarjuntrivedi ↗', action: () => window.open('https://www.linkedin.com/in/imarjuntrivedi/', '_blank', 'noopener') },
    { tag: 'GITHUB', cls: '', title: 'Open mcp-kql-server Repository (Official MCP Registry)', meta: 'github.com/4R9UN/mcp-kql-server ↗', action: () => window.open('https://github.com/4R9UN/mcp-kql-server', '_blank', 'noopener') },
    { tag: 'GITHUB', cls: '', title: 'Open fastmcp-threatintel Repository (Multi-Source CTI + STIX 2.1)', meta: 'github.com/4R9UN/fastmcp-threatintel ↗', action: () => window.open('https://github.com/4R9UN/fastmcp-threatintel', '_blank', 'noopener') },
    { tag: 'LENS', cls: 'tag-indigo', title: 'Focus Portfolio on Principal / Head of AI Security Mandate', meta: 'Role Lens', action: () => { setMandateLens('aisec'); document.getElementById('sec-pillars')?.scrollIntoView({ behavior: 'smooth' }); } },
    { tag: 'LENS', cls: 'tag-indigo', title: 'Focus Portfolio on AI Forward Deployed Engineering (FDE)', meta: 'Role Lens', action: () => { setMandateLens('fde'); document.getElementById('sec-pillars')?.scrollIntoView({ behavior: 'smooth' }); } },
    { tag: 'PODCAST', cls: 'tag-amber', title: 'Watch AZ Security Podcast Episode 27 (MCP KQL & AI SOC)', meta: 'YouTube ↗', action: () => window.open('https://youtu.be/T0213_VfW7U', '_blank', 'noopener') },
    { tag: 'WRITING', cls: 'tag-amber', title: 'Read Substack Newsletter (1,971+ Security Subscribers)', meta: 'arjuntrivedi.substack.com ↗', action: () => window.open('https://arjuntrivedi.substack.com', '_blank', 'noopener') },
    { tag: 'CONTACT', cls: 'tag-emerald', title: 'Copy Arjun Email Address (arjuntrivedi42@yahoo.com)', meta: 'Clipboard', action: () => copyText('arjuntrivedi42@yahoo.com') },
    { tag: 'THEME', cls: '', title: 'Toggle Obsidian Dark / Editorial Ivory Theme', meta: 'Appearance', action: () => themeBtn?.click() }
  ];

  let filteredCmds = [...COMMANDS];
  let activeCmdIdx = 0;

  function renderCommands() {
    if (!cmdkList) return;
    cmdkList.innerHTML = '';
    filteredCmds.forEach((cmd, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cmdk-item' + (idx === activeCmdIdx ? ' active' : '');
      btn.innerHTML = `<span class="cmdk-tag ${cmd.cls}">${cmd.tag}</span><span>${cmd.title}</span><span class="cmdk-meta">${cmd.meta}</span>`;
      btn.addEventListener('click', () => {
        closeCmdk();
        cmd.action();
      });
      cmdkList.appendChild(btn);
    });
  }

  function openCmdk() {
    if (!cmdkModal) return;
    cmdkModal.classList.add('open');
    cmdkModal.setAttribute('aria-hidden', 'false');
    if (cmdkInput) {
      cmdkInput.value = '';
      filteredCmds = [...COMMANDS];
      activeCmdIdx = 0;
      renderCommands();
      setTimeout(() => cmdkInput.focus(), 20);
    }
  }

  function closeCmdk() {
    if (!cmdkModal) return;
    cmdkModal.classList.remove('open');
    cmdkModal.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('[data-open-cmdk]').forEach((btn) => {
    btn.addEventListener('click', openCmdk);
  });
  if (cmdkClose) cmdkClose.addEventListener('click', closeCmdk);
  if (cmdkModal) {
    cmdkModal.addEventListener('click', (e) => {
      if (e.target === cmdkModal) closeCmdk();
    });
  }

  if (cmdkInput) {
    cmdkInput.addEventListener('input', () => {
      const q = cmdkInput.value.trim().toLowerCase();
      filteredCmds = COMMANDS.filter((c) => (c.tag + ' ' + c.title + ' ' + c.meta).toLowerCase().includes(q));
      activeCmdIdx = 0;
      renderCommands();
    });
    cmdkInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (filteredCmds.length) activeCmdIdx = (activeCmdIdx + 1) % filteredCmds.length;
        renderCommands();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (filteredCmds.length) activeCmdIdx = (activeCmdIdx - 1 + filteredCmds.length) % filteredCmds.length;
        renderCommands();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const chosen = filteredCmds[activeCmdIdx];
        if (chosen) {
          closeCmdk();
          chosen.action();
        }
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdkModal?.classList.contains('open')) closeCmdk();
      else openCmdk();
      return;
    }
    if (e.key === 'Escape' && cmdkModal?.classList.contains('open')) {
      e.preventDefault();
      closeCmdk();
      return;
    }
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === '/') {
      e.preventDefault();
      document.getElementById('sec-architecture')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // 8. LIVE GITHUB & PYPI METRIC HYDRATOR (CACHED, SILENT FALLBACK)
  async function hydrateLiveTelemetry() {
    const cacheKey = 'arjun_live_pkg_telemetry_v1';
    let data = null;
    try {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) data = JSON.parse(cached);
    } catch (_) {}

    if (!data) {
      try {
        const [rKqlGh, rCtiGh, rKqlPy, rCtiPy] = await Promise.all([
          fetch('https://api.github.com/repos/4R9UN/mcp-kql-server'),
          fetch('https://api.github.com/repos/4R9UN/fastmcp-threatintel'),
          fetch('https://pypi.org/pypi/mcp-kql-server/json'),
          fetch('https://pypi.org/pypi/fastmcp-threatintel/json')
        ]);
        if (rKqlGh.ok && rCtiGh.ok && rKqlPy.ok && rCtiPy.ok) {
          const [kqlGh, ctiGh, kqlPy, ctiPy] = await Promise.all([
            rKqlGh.json(), rCtiGh.json(), rKqlPy.json(), rCtiPy.json()
          ]);
          data = {
            kqlStars: kqlGh.stargazers_count,
            ctiStars: ctiGh.stargazers_count,
            ctiForks: ctiGh.forks_count,
            kqlVer: kqlPy.info.version,
            ctiVer: ctiPy.info.version
          };
          sessionStorage.setItem(cacheKey, JSON.stringify(data));
        }
      } catch (_) {}
    }

    if (data) {
      document.querySelectorAll('[data-live-kql-ver]').forEach((el) => { el.textContent = 'v' + data.kqlVer; });
      document.querySelectorAll('[data-live-cti-ver]').forEach((el) => { el.textContent = 'v' + data.ctiVer; });
      document.querySelectorAll('[data-live-kql-stars]').forEach((el) => { el.textContent = '★ ' + data.kqlStars; });
      document.querySelectorAll('[data-live-cti-stars]').forEach((el) => { el.textContent = '★ ' + data.ctiStars; });
      const totalEl = document.getElementById('live-combined-telemetry');
      if (totalEl) {
        totalEl.innerHTML = `<strong>Live Registry Telemetry:</strong> mcp-kql-server <code>v${data.kqlVer}</code> (★ ${data.kqlStars}) · fastmcp-threatintel <code>v${data.ctiVer}</code> (★ ${data.ctiStars} · ${data.ctiForks} forks)`;
      }
    }
  }

  hydrateLiveTelemetry();
})();
