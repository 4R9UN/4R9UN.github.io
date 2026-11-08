/**
 * ARJUN TRIVEDI (@4R9UN) — MULTI-TEMPLATE EXECUTIVE PORTFOLIO CONTROLLER
 * Supports instant live switching between:
 *  - 4 distinct portfolio templates (bento, editorial, spotlight, cyberos)
 *  - 3 portrait avatars (vector-blue, vector-teal, real-photo)
 *  - Interactive Bento Architecture flow nodes
 *  - Cyber-OS tabs + dock sync
 */

(() => {
  'use strict';

  // 1. LIVE TEMPLATE SWITCHER
  const tplButtons = document.querySelectorAll('[data-template-btn]');
  const tplViews = document.querySelectorAll('[data-template-view]');

  function setTemplate(templateId) {
    document.documentElement.setAttribute('data-template', templateId);
    tplButtons.forEach((btn) => {
      const active = btn.getAttribute('data-template-btn') === templateId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    tplViews.forEach((view) => {
      const active = view.getAttribute('data-template-view') === templateId;
      view.classList.toggle('active', active);
    });
  }

  tplButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setTemplate(btn.getAttribute('data-template-btn'));
    });
  });

  // 2. LIVE PORTRAIT / AVATAR SWITCHER
  const avatarButtons = document.querySelectorAll('[data-avatar-btn]');
  const avatarImages = document.querySelectorAll('[data-arjun-avatar]');

  function setAvatar(avatarKey, srcPath) {
    document.documentElement.setAttribute('data-avatar', avatarKey);
    avatarButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-avatar-btn') === avatarKey);
    });
    avatarImages.forEach((img) => {
      img.style.opacity = '0.35';
      img.setAttribute('src', srcPath);
      requestAnimationFrame(() => {
        img.style.opacity = '1';
      });
    });
  }

  avatarButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setAvatar(btn.getAttribute('data-avatar-btn'), btn.getAttribute('data-src'));
    });
  });

  // 3. TEMPLATE 1 (BENTO): INTERACTIVE ARCHITECTURE FLOW NODES
  const BENTO_NODES = {
    asrs: {
      badge: 'LIVE PRODUCTION',
      text: '<strong>ASRS (Autonomous Security Reasoning System):</strong> Correlates telemetry across Microsoft Sentinel, Splunk, Elastic &amp; CrowdStrike with parallel hypothesis validation.',
      linkText: 'Launch Live Demo ↗',
      linkHref: 'https://asrs-demo-v1.vercel.app/'
    },
    kql: {
      badge: 'PyPI v2.1.5 · MCP REGISTRY',
      text: '<strong>mcp-kql-server:</strong> Official MCP Registry &amp; MseeP-verified server translating natural-language hunting intent into schema-grounded Azure Data Explorer KQL.',
      linkText: 'Inspect Repository ↗',
      linkHref: 'https://github.com/4R9UN/mcp-kql-server'
    },
    cti: {
      badge: '★ 40 STARS · PyPI v0.2.7',
      text: '<strong>fastmcp-threatintel:</strong> Enriches IOCs across VirusTotal, AlienVault OTX &amp; AbuseIPDB with automated MITRE ATT&amp;CK mapping &amp; STIX 2.1 graphs.',
      linkText: 'Inspect Repository ↗',
      linkHref: 'https://github.com/4R9UN/fastmcp-threatintel'
    },
    arc: {
      badge: '28 SKILLS · ZERO-TRUST HARNESS',
      text: '<strong>Assured-Arc Guardrail Gate:</strong> Enforces prompt-injection isolation, least-privilege tool policy, and deterministic verification before SOC actioning.',
      linkText: 'Inspect Harness ↗',
      linkHref: 'https://github.com/4R9UN/Assured-Arc'
    }
  };

  const flowNodes = document.querySelectorAll('[data-bento-node]');
  const readoutBadge = document.getElementById('bento-readout-badge');
  const readoutText = document.getElementById('bento-readout-text');
  const readoutLink = document.getElementById('bento-readout-link');

  flowNodes.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-bento-node');
      const data = BENTO_NODES[key];
      if (!data) return;
      flowNodes.forEach((n) => n.classList.toggle('active', n === btn));
      if (readoutBadge) readoutBadge.textContent = data.badge;
      if (readoutText) readoutText.innerHTML = data.text;
      if (readoutLink) {
        readoutLink.textContent = data.linkText;
        readoutLink.setAttribute('href', data.linkHref);
      }
    });
  });

  // 4. TEMPLATE 3 (SPOTLIGHT): INTERACTIVE PILLAR CARDS & CAROUSEL HIGHLIGHT
  const flipCards = document.querySelectorAll('[data-flip-card]');
  flipCards.forEach((card) => {
    card.addEventListener('click', () => {
      flipCards.forEach((c) => c.classList.toggle('active', c === card));
    });
  });

  const carSlides = document.querySelectorAll('#founder-carousel .car-slide');
  let activeSlide = 0;
  function highlightSlide(idx) {
    if (!carSlides.length) return;
    activeSlide = (idx + carSlides.length) % carSlides.length;
    carSlides.forEach((s, i) => {
      s.style.borderColor = i === activeSlide ? 'var(--cyan)' : 'var(--border-subtle)';
    });
  }
  const prevBtn = document.getElementById('car-prev');
  const nextBtn = document.getElementById('car-next');
  if (prevBtn) prevBtn.addEventListener('click', () => highlightSlide(activeSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => highlightSlide(activeSlide + 1));

  // 5. TEMPLATE 4 (CYBER-OS): HUD TABS + BOTTOM DOCK SYNC
  const osTabs = document.querySelectorAll('[data-os-tab]');
  const osPanels = document.querySelectorAll('[data-os-panel]');
  const osDockItems = document.querySelectorAll('[data-os-dock]');

  function setOsPanel(panelId) {
    osTabs.forEach((t) => {
      const active = t.getAttribute('data-os-tab') === panelId;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
    });
    osPanels.forEach((p) => {
      p.classList.toggle('active', p.getAttribute('data-os-panel') === panelId);
    });
    osDockItems.forEach((d) => {
      d.classList.toggle('active', d.getAttribute('data-os-dock') === panelId);
    });
  }

  osTabs.forEach((t) => {
    t.addEventListener('click', () => setOsPanel(t.getAttribute('data-os-tab')));
  });
  osDockItems.forEach((d) => {
    d.addEventListener('click', () => setOsPanel(d.getAttribute('data-os-dock')));
  });

  // 6. SUBTLE AMBIENT PARTICLE FIELD
  const canvas = document.getElementById('ambient-canvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 36 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8
    }));

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.45)';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 140) * 0.12})`;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }
})();
