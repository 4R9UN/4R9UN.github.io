(() => {
  "use strict";

  // 1. Dynamic Typewriter / Mandate Switcher
  const mandates = [
    "Agentic AI & Official MCP Ecosystem Architect",
    "AI Forward Deployed Engineering (FDE) Leader · 50+ Enterprises",
    "Senior Security Research Leader @ Microsoft · 15-Person Global Org",
    "Microsoft Project Perception & Security Copilot (+35% Accuracy) Contributor",
    "AI Red Teaming, Prompt-Injection Guardrails & Multi-SIEM Autonomy"
  ];
  const typewriterEl = document.getElementById("typewriter-target");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typewriterEl && !prefersReducedMotion) {
    let phraseIdx = 0;
    let charIdx = mandates[0].length;
    let isDeleting = false;

    const tick = () => {
      const currentPhrase = mandates[phraseIdx];
      if (!isDeleting) {
        charIdx++;
        typewriterEl.textContent = currentPhrase.slice(0, charIdx);
        if (charIdx >= currentPhrase.length) {
          isDeleting = true;
          setTimeout(tick, 2600);
          return;
        }
        setTimeout(tick, 34);
      } else {
        charIdx--;
        typewriterEl.textContent = currentPhrase.slice(0, charIdx);
        if (charIdx <= 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % mandates.length;
          setTimeout(tick, 260);
          return;
        }
        setTimeout(tick, 18);
      }
    };
    setTimeout(() => {
      isDeleting = true;
      tick();
    }, 2800);
  }

  // 2. Animated Number Counters
  const counters = document.querySelectorAll(".counter");
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-target") || "0", 10);
    if (!target || prefersReducedMotion) {
      el.textContent = target.toLocaleString();
      return;
    }
    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString();
      }
    };
    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    counters.forEach((c) => observer.observe(c));
  } else {
    counters.forEach(animateCounter);
  }

  // 3. Recruiter Role-Lens Switcher
  const lensCopy = {
    all: {
      badge: "EXECUTIVE OVERVIEW // FULL SPECTRUM",
      desc: "Viewing unified track record across <strong>Agentic AI &amp; MCP Systems</strong>, <strong>Forward-Deployed Enterprise Execution (50+ enterprises)</strong>, and <strong>Global Detection &amp; Threat Research Leadership (15-person org at Microsoft)</strong>."
    },
    "ai-security": {
      badge: "LENS ACTIVE // AI SECURITY & AGENTIC ARCHITECT",
      desc: "Spotlighting <strong>Microsoft Project Perception</strong>, <strong>Security Copilot (+35% RAG accuracy lift)</strong>, <strong>AI Red Teaming</strong> (prompt injection, jailbreaks, unsafe tool calls, excessive agency), and Official MCP Registry servers (<code>mcp-kql-server</code>, <code>fastmcp-threatintel</code>, <code>ASRS</code>, <code>Assured-Arc</code>)."
    },
    fde: {
      badge: "LENS ACTIVE // AI FORWARD DEPLOYED ENGINEERING (FDE) LEADER",
      desc: "Spotlighting <strong>50+ global enterprise CISO/SOC escalations (+20% CSAT)</strong>, rapid field-to-product prototyping, <strong>1,000+ enterprise deployments</strong> of <em>Multi Cloud Attack Coverage Essentials</em>, and pioneer leadership on <strong>Microsoft Threat Experts</strong>."
    },
    detection: {
      badge: "LENS ACTIVE // DIRECTOR / HEAD OF DETECTION & THREAT RESEARCH",
      desc: "Spotlighting direct leadership of a <strong>15-person global research &amp; engineering team</strong>, <strong>200+ KQL rules (-50% MTTR)</strong>, <strong>production ML models (-30% false positives)</strong>, <strong>20+ MSTICPy automations (-60% effort)</strong>, and protecting <strong>100M+ endpoints across 150 countries</strong>."
    }
  };

  const lensPills = document.querySelectorAll(".lens-pill");
  const lensBadgeTitle = document.getElementById("lens-badge-title");
  const lensBadgeDesc = document.getElementById("lens-badge-desc");
  const lensTargets = document.querySelectorAll(".lens-target, .metric-card");
  const lensBullets = document.querySelectorAll(".lens-bullet");

  lensPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const selectedLens = pill.getAttribute("data-lens") || "all";

      lensPills.forEach((p) => {
        const isCurrent = p === pill;
        p.classList.toggle("active", isCurrent);
        p.setAttribute("aria-selected", isCurrent ? "true" : "false");
      });

      if (lensCopy[selectedLens] && lensBadgeTitle && lensBadgeDesc) {
        lensBadgeTitle.textContent = lensCopy[selectedLens].badge;
        lensBadgeDesc.innerHTML = lensCopy[selectedLens].desc;
      }

      lensTargets.forEach((el) => {
        if (selectedLens === "all") {
          el.classList.remove("lens-highlighted", "lens-dimmed");
          return;
        }
        const tags = (el.getAttribute("data-tags") || "").split(/\s+/);
        if (tags.includes(selectedLens)) {
          el.classList.add("lens-highlighted");
          el.classList.remove("lens-dimmed");
        } else {
          el.classList.remove("lens-highlighted");
          el.classList.add("lens-dimmed");
        }
      });

      lensBullets.forEach((bullet) => {
        if (selectedLens === "all") {
          bullet.classList.remove("bullet-highlighted", "bullet-dimmed");
          return;
        }
        const tags = (bullet.getAttribute("data-tags") || "").split(/\s+/);
        if (tags.includes(selectedLens)) {
          bullet.classList.add("bullet-highlighted");
          bullet.classList.remove("bullet-dimmed");
        } else {
          bullet.classList.remove("bullet-highlighted");
          bullet.classList.add("bullet-dimmed");
        }
      });
    });
  });

  // 4. Interactive 4-Stage Agentic Security Pipeline
  const stageData = {
    stage1: {
      tag: "STAGE 01 // TELEMETRY & CTI INGESTION MESH",
      title: "Multi-SIEM, XDR & Cross-Cloud Signal Normalization",
      desc: "Ingests high-velocity identity, endpoint, and cloud control-plane telemetry across Microsoft Sentinel, Defender XDR, Splunk, Elastic Security, CrowdStrike Falcon, AWS CloudTrail, GCP Audit Logs, and Okta System Logs—paired with external CTI feeds.",
      metrics: [
        { val: "200+", label: "Production KQL Detections" },
        { val: "6 Clouds", label: "Azure · AWS · GCP · Okta · IBM · Oracle" },
        { val: "1,000+", label: "Enterprises Running Multi-Cloud Essentials" }
      ],
      codeLabel: "telemetry-ingestion-spec.kql",
      code: `// Multi-Cloud Identity & AiTM Phishing Correlation (Microsoft Sentinel / XDR)
union SigninLogs, AWSCloudTrail, GCPAuditLogs, Okta_CL
| where TimeGenerated > ago(24h)
| evaluate bag_unpack(AdditionalDetails)
| where RiskLevelDuringSignIn in ("high", "medium") or SessionTokenAnomaly == true
| join kind=inner (ThreatIntelligenceIndicator | where Active == true) on $left.IPAddress == $right.NetworkIP
| project TimeGenerated, UserPrincipalName, IPAddress, CloudPlatform, MITRETechnique="T1557.001"`
    },
    stage2: {
      tag: "STAGE 02 // MCP CONTEXT & SCHEMA GROUNDING",
      title: "Official MCP Servers (NL2KQL & ThreatIntel) + Security Copilot RAG",
      desc: "Eliminates LLM hallucinations in security operations using schema-grounded NL2KQL (mcp-kql-server v2.1.5), multi-source STIX/ATT&CK enrichment (fastmcp-threatintel v0.2.7), and vector/token context optimization that improved Microsoft Security Copilot summarization accuracy by 35%.",
      metrics: [
        { val: "+35%", label: "Security Copilot Summarization Accuracy" },
        { val: "v2.1.5", label: "mcp-kql-server on PyPI & MCP Registry" },
        { val: "40★ / 14 Forks", label: "fastmcp-threatintel (VT · OTX · AbuseIPDB)" }
      ],
      codeLabel: "mcp-context-grounding.json",
      code: `{
  "mcpServers": {
    "mcp-kql-server": {
      "version": "2.1.5",
      "registry": "Official MCP Registry & MseeP Verified",
      "capabilities": ["schema_grounded_nl2kql", "ast_validation_repair", "semantic_schema_memory"],
      "deployment": "Azure Container Apps (Managed Identity + Bicep IaC)"
    },
    "fastmcp-threatintel": {
      "version": "0.2.7",
      "providers": ["VirusTotal", "AlienVault OTX", "AbuseIPDB", "IPinfo"],
      "outputs": ["STIX_2.1_Bundle", "MITRE_ATTCK_Matrix", "D3_IOC_Graph"]
    }
  }
}`
    },
    stage3: {
      tag: "STAGE 03 // MULTI-AGENT REASONING & AI RED-TEAM GUARDRAILS",
      title: "Autonomous Investigation Agents + Adversarial Safety Gates",
      desc: "Orchestrates specialized Triage, Deep Analysis, and Verdict agents (ASRS & Microsoft Project Perception) while enforcing strict AI red-team controls against indirect prompt injection, jailbreaks, unsafe tool invocation, authorization boundary failures, and excessive agency.",
      metrics: [
        { val: "3 Agents", label: "Triage → Deep Analysis → Verdict" },
        { val: "Red-Teamed", label: "Prompt Injection & AuthZ Boundary Gates" },
        { val: "Assured-Arc", label: "Bounded-Loop Copilot Verification Harness" }
      ],
      codeLabel: "agentic-guardrail-policy.ts",
      code: `// ASRS & Assured-Arc Multi-Agent Reasoning + Red-Team Verification Gate
const verdict = await orchestrator.runBoundedInvestigation({
  siemSources: ["Sentinel", "Splunk", "Elastic", "CrowdStrike"],
  agents: ["TriageAgent", "DeepAnalysisAgent", "VerdictAgent"],
  securityGate: {
    isolateUntrustedTelemetry: true,      // Defends against indirect prompt injection
    enforceToolAuthZBoundaries: true,     // Prevents unauthorized remediation actions
    requireHumanApprovalOnHighBlast: true // Preserves human strategy & oversight
  }
});`
    },
    stage4: {
      tag: "STAGE 04 // FORWARD-DEPLOYED ENTERPRISE OUTCOMES",
      title: "Planet-Scale Defender Impact & Field-to-Product Velocity",
      desc: "Translates autonomous agent workflows, ML anomaly models, and field escalations across 50+ enterprises directly into measurable SOC efficiency gains and globally shipped Microsoft security products.",
      metrics: [
        { val: "-50% MTTR", label: "Faster Enterprise Incident Response" },
        { val: "-30% FPs", label: "False Positive Reduction via Applied ML" },
        { val: "+20% CSAT", label: "Across 50+ Enterprise FDE Escalations" }
      ],
      codeLabel: "enterprise-impact-audit.yaml",
      code: `verified_production_outcomes:
  incident_response_mttr_reduction: "Up to 50% faster across 200+ KQL detections"
  ml_false_positive_reduction: "30% reduction (Random Forest, GBDT, Isolation Forest, OC-SVM)"
  security_copilot_accuracy_lift: "+35% analyst summarization accuracy via RAG grounding"
  blue_team_automation_efficiency: "Up to 60% less manual effort via 20+ MSTICPy/Jupyter assets"
  global_enterprise_footprint: "1,000+ enterprises (Sentinel Multi-Cloud) · 100M+ endpoints protected"`
    }
  };

  const stageBtns = document.querySelectorAll(".pipeline-stage-btn");
  const inspTag = document.getElementById("insp-stage-tag");
  const inspTitle = document.getElementById("insp-title");
  const inspDesc = document.getElementById("insp-desc");
  const inspMetrics = document.getElementById("insp-metrics");
  const inspCodeLabel = document.getElementById("insp-code-label");
  const inspCode = document.getElementById("insp-code");

  stageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const stageKey = btn.getAttribute("data-stage") || "stage1";
      const data = stageData[stageKey];
      if (!data) return;

      stageBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", active ? "true" : "false");
      });

      inspTag.textContent = data.tag;
      inspTitle.textContent = data.title;
      inspDesc.textContent = data.desc;
      inspCodeLabel.textContent = data.codeLabel;
      inspCode.textContent = data.code;

      inspMetrics.innerHTML = data.metrics
        .map(
          (m) => `
          <div class="insp-stat">
            <strong>${m.val}</strong>
            <span>${m.label}</span>
          </div>`
        )
        .join("");
    });
  });

  // 5. Flagship Systems Filter Bar
  const filterBtns = document.querySelectorAll(".filter-btn");
  const systemCards = document.querySelectorAll(".system-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter") || "all";
      filterBtns.forEach((b) => b.classList.toggle("active", b === btn));

      systemCards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        const match = filter === "all" || cat === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });

  // 6. Accessible Architecture Spec Modal
  const projectSpecs = {
    asrs: {
      category: "MULTI-AGENT SIEM PLATFORM // TYPESCRIPT & MCP",
      title: "ASRS — Autonomous Security Reasoning System",
      summary:
        "Designed a unified multi-SIEM autonomous investigation platform spanning Microsoft Sentinel, Splunk, Elastic Security, and CrowdStrike Falcon. Specialized Triage, Deep Analysis, and Verdict agents correlate alerts, entities, evidence timelines, confidence scores, and MITRE ATT&CK mappings through MCP-enabled workflows.",
      highlights: [
        "Microsoft Sentinel · Splunk · Elastic · CrowdStrike",
        "Triage → Deep Analysis → Verdict Agents",
        "MITRE ATT&CK + Confidence Scoring",
        "Live Interactive Deployment"
      ],
      code: `[Alert Stream: Sentinel / Splunk / Elastic / CrowdStrike]
       │
       ▼
┌──────────────────────────────────────────────────────────┐
│ 1. TRIAGE AGENT: Entity extraction & severity scoping    │
│ 2. DEEP ANALYSIS AGENT: Cross-SIEM MCP query correlation │
│ 3. VERDICT AGENT: Timeline synthesis & ATT&CK mapping    │
└──────────────────────────────────────────────────────────┘`,
      links: [
        { label: "⚡ Launch Live ASRS Demo", url: "https://asrs-demo-v1.vercel.app/", cls: "btn-emerald" },
        { label: "🐙 View GitHub Repository", url: "https://github.com/4R9UN/ASRS-demo", cls: "btn-glass" }
      ]
    },
    "mcp-kql": {
      category: "OFFICIAL MCP REGISTRY // PYPI v2.1.5 · MSEEP VERIFIED",
      title: "MCP KQL Server (mcp-kql-server)",
      summary:
        "Production-grade Model Context Protocol (MCP) server for schema-grounded Natural Language to KQL (NL2KQL), strict AST validation and automatic query repair, semantic schema memory, secure Azure Data Explorer / Kusto execution, visual analysis, and Azure Container Apps deployment using Managed Identity and Bicep IaC.",
      highlights: [
        "PyPI v2.1.5",
        "Official MCP Registry Listed",
        "MseeP Verified",
        "Azure Container Apps + Managed Identity + Bicep IaC"
      ],
      code: `NL Prompt ──► [Semantic Schema Memory (Kusto/Sentinel)]
          ──► [Schema-Grounded NL2KQL Generator]
          ──► [Deterministic KQL Validator & Auto-Repair]
          ──► [Managed Identity Kusto Execution & Visual Output]`,
      links: [
        { label: "📦 View on PyPI (v2.1.5)", url: "https://pypi.org/project/mcp-kql-server/", cls: "btn-cyan" },
        { label: "🐙 GitHub Repository", url: "https://github.com/4R9UN/mcp-kql-server", cls: "btn-glass" }
      ]
    },
    threatintel: {
      category: "THREAT INTELLIGENCE MCP // PYPI v0.2.7 · 40★ / 14 FORKS",
      title: "FastMCP ThreatIntel (fastmcp-threatintel)",
      summary:
        "AI-ready threat intelligence MCP server integrating VirusTotal, AlienVault OTX, AbuseIPDB, and IPinfo with confidence-scored attribution, automated MITRE ATT&CK technique mapping, IOC relationship graphs, interactive D3.js visualization, and standardized STIX 2.1 output.",
      highlights: [
        "PyPI v0.2.7 · MseeP Verified",
        "40 GitHub Stars · 14 Forks",
        "VirusTotal · OTX · AbuseIPDB · IPinfo",
        "STIX 2.1 + D3.js Graph Visualization"
      ],
      code: `IOC Input (IP / Domain / Hash / URL)
  ├─► VirusTotal + AlienVault OTX + AbuseIPDB + IPinfo
  ├─► Confidence-Scored Attribution Engine
  └─► STIX 2.1 Bundle + MITRE ATT&CK Map + D3.js Force Graph`,
      links: [
        { label: "📦 View on PyPI (v0.2.7)", url: "https://pypi.org/project/fastmcp-threatintel/", cls: "btn-cyan" },
        { label: "🐙 GitHub Repository", url: "https://github.com/4R9UN/fastmcp-threatintel", cls: "btn-glass" }
      ]
    },
    "assured-arc": {
      category: "MULTI-AGENT GOVERNANCE // GITHUB COPILOT HARNESS",
      title: "Assured-Arc — Bounded-Loop Multi-Agent Engineering Harness",
      summary:
        "Portable GitHub Copilot workbench and multi-agent harness implementing canonical JSONL skill routing, context-isolated disposable subagents, one-writer concurrency coordination, least-privilege MCP safety policies, and deterministic verification checkpoints.",
      highlights: [
        "Canonical JSONL Skill Router",
        "Context-Isolated Disposable Subagents",
        "Prompt-Injection & MCP Least-Privilege Gates",
        "Deterministic Verification Loops"
      ],
      code: `User Objective ──► Acceptance Contract Derivation
               ──► JSONL Skill Router (<= 3 Scoped Skills)
               ──► Disposable Read-Only Discovery Workers
               ──► Single Writer + Independent Verifier Gate`,
      links: [
        { label: "🛡️ Explore Assured-Arc Repo", url: "https://github.com/4R9UN/Assured-Arc", cls: "btn-cyan" }
      ]
    },
    multicloud: {
      category: "ENTERPRISE CLOUD SECURITY // 1,000+ ENTERPRISE ADOPTIONS",
      title: "Multi Cloud Attack Coverage Essentials (Microsoft Sentinel)",
      summary:
        "Co-created and shipped Microsoft Sentinel's Multi Cloud Attack Coverage Essentials solution, translating cross-cloud nation-state and enterprise threat research across Azure, AWS, GCP, and Okta into deployable KQL analytics and Jupyter/MSTICPy hunting workflows adopted by 1,000+ enterprises.",
      highlights: [
        "Adopted by 1,000+ Global Enterprises",
        "Azure · AWS · GCP · Okta Coverage",
        "Up to 50% Faster Incident MTTR",
        "20+ Python / Jupyter / MSTICPy Automations"
      ],
      code: `[AWS CloudTrail + GCP Audit + Okta System + Azure SigninLogs]
  ──► Cross-Cloud Schema Normalization & Entity Correlation
  ──► 200+ High-Precision KQL Analytics & UEBA Detections
  ──► Shipped via Microsoft Sentinel Content Hub (1,000+ Orgs)`,
      links: [
        { label: "☁️ Multi-Cloud Notebooks Repo", url: "https://github.com/4R9UN/Multi-Cloud-Notebooks", cls: "btn-emerald" },
        { label: "📖 Microsoft Tech Community Blog", url: "https://techcommunity.microsoft.com/blog/microsoftsentinelblog/what%E2%80%99s-new-multi-cloud-attack-coverage-essentials-solution/3839784", cls: "btn-glass" }
      ]
    },
    promptbook: {
      category: "AI PRODUCTIVITY & RED TEAMING // TYPESCRIPT",
      title: "PromptBook — Privacy-First Security Prompt Workspace",
      summary:
        "Privacy-first prompt-engineering workspace designed for security researchers and AI red teams to build, organize, and evaluate structured investigation prompts, adversarial jailbreak test suites, and repeatable multi-agent workflows.",
      highlights: [
        "Local-First Privacy Architecture",
        "AI Red-Team Prompt Evaluation",
        "Reusable SOC Investigation Templates"
      ],
      code: `[Structured Prompt Template + Adversarial Test Vector]
  ──► Variable Binding & Context Budget Check
  ──► Guardrail & Output Contract Verification`,
      links: [
        { label: "📓 View Prompt-Book Repo", url: "https://github.com/4R9UN/Prompt-Book", cls: "btn-cyan" }
      ]
    }
  };

  const modal = document.getElementById("arch-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalSummary = document.getElementById("modal-summary");
  const modalHighlights = document.getElementById("modal-highlights");
  const modalCode = document.getElementById("modal-code");
  const modalLinks = document.getElementById("modal-links");

  document.querySelectorAll(".js-open-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-project");
      const spec = projectSpecs[key];
      if (!spec || !modal) return;

      modalCategory.textContent = spec.category;
      modalTitle.textContent = spec.title;
      modalSummary.textContent = spec.summary;
      modalHighlights.innerHTML = spec.highlights.map((h) => `<span>${h}</span>`).join("");
      modalCode.textContent = spec.code;
      modalLinks.innerHTML = spec.links
        .map(
          (l) =>
            `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn ${l.cls} btn-sm">${l.label}</a>`
        )
        .join("");

      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.setAttribute("open", "open");
      }
    });
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener("click", () => {
      if (typeof modal.close === "function") modal.close();
      else modal.removeAttribute("open");
    });
    modal.addEventListener("click", (e) => {
      const rect = modal.getBoundingClientRect();
      const clickedOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
      if (clickedOutside && typeof modal.close === "function") {
        modal.close();
      }
    });
  }

  // 7. Copy Email Button
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.getAttribute("data-email") || "arjuntrivedi42@yahoo.com";
      try {
        await navigator.clipboard.writeText(email);
        const orig = copyBtn.textContent;
        copyBtn.textContent = "✓ Copied";
        setTimeout(() => {
          copyBtn.textContent = orig;
        }, 2000);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 8. Interactive HTML5 Canvas Cyber-Telemetry Particle Network
  const canvas = document.getElementById("telemetry-canvas");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: -9999, y: -9999 };

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const nodeCount = Math.min(52, Math.floor((width * height) / 28000));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      r: Math.random() * 1.8 + 1,
      color: Math.random() > 0.5 ? "#00f0ff" : "#8b5cf6"
    }));

    const renderNetwork = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 145) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 145) * 0.16})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const mDist = Math.hypot(mdx, mdy);
        if (mDist < 180) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - mDist / 180) * 0.32})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      requestAnimationFrame(renderNetwork);
    };

    requestAnimationFrame(renderNetwork);
  }
})();
