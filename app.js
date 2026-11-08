/**
 * ARJUN TRIVEDI (@4R9UN) — 6 GETDESIGN.MD DESIGN SYSTEMS CONTROLLER
 *  01. Linear.app       (design-md/linear.app/DESIGN.md)
 *  02. Claude/Anthropic (design-md/claude/DESIGN.md)
 *  03. Cursor AI        (design-md/cursor/DESIGN.md)
 *  04. Vercel Geist     (design-md/vercel/DESIGN.md)
 *  05. Raycast Pro      (design-md/raycast/DESIGN.md)
 *  06. Stripe Executive (design-md/stripe/DESIGN.md)
 */

(() => {
  'use strict';

  const DS_LABELS = {
    linear: 'LINEAR.APP DESIGN SYSTEM // PITCH-BLACK PRECISION (#010102 · #5E6AD2)',
    claude: 'CLAUDE / ANTHROPIC DESIGN SYSTEM // EDITORIAL RESEARCH IVORY (#FAF9F5 · #CC785C)',
    cursor: 'CURSOR AI DESIGN SYSTEM // STONE PAPER + IDE AGENT COMPOSER (#F7F7F4 · #F54E00)',
    vercel: 'VERCEL GEIST DESIGN SYSTEM // ARCHITECTURAL MONOCHROME GRID (#FAFAFA · #0070F3)',
    raycast: 'RAYCAST PRO DESIGN SYSTEM // COMMAND LAUNCHER HUD (#07080A · #FF6161)',
    stripe: 'STRIPE EXECUTIVE DESIGN SYSTEM // INDIGO COMPOSITE TELEMETRY (#F6F9FC · #533AFD)'
  };

  // 1. DESIGN.MD SWITCHER (6 SYSTEMS)
  const dsButtons = document.querySelectorAll('[data-design-btn]');
  const dsHeroes = document.querySelectorAll('[data-design-hero]');
  const dsLabelEl = document.getElementById('active-ds-label');

  function setDesignSystem(dsKey) {
    document.documentElement.setAttribute('data-design', dsKey);
    document.documentElement.setAttribute('data-theme', dsKey);
    dsButtons.forEach((btn) => {
      const active = btn.getAttribute('data-design-btn') === dsKey;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    dsHeroes.forEach((hero) => {
      hero.classList.toggle('active', hero.getAttribute('data-design-hero') === dsKey);
    });
    if (dsLabelEl && DS_LABELS[dsKey]) {
      dsLabelEl.textContent = DS_LABELS[dsKey];
    }
  }

  dsButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setDesignSystem(btn.getAttribute('data-design-btn'));
    });
  });

  // 2. PORTRAIT / HEADSHOT SWITCHER (4 PORTRAITS)
  const avatarBtns = document.querySelectorAll('[data-avatar-btn]');
  const avatarImgs = document.querySelectorAll('[data-arjun-avatar]');

  function setAvatar(avatarKey, srcPath) {
    document.documentElement.setAttribute('data-avatar', avatarKey);
    avatarBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-avatar-btn') === avatarKey);
    });
    avatarImgs.forEach((img) => {
      img.setAttribute('src', srcPath);
    });
  }

  avatarBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setAvatar(btn.getAttribute('data-avatar-btn'), btn.getAttribute('data-src'));
    });
  });

  // 3. CURSOR AI IDE TAB SWITCHER
  const IDE_SNIPPETS = {
    profile: `# arjun_executive_profile.py — Verified Production Telemetry
class ArjunTrivediExecutiveLeader:
    role       = "Senior Security Researcher | Detection Eng & AI Security"
    org        = "Microsoft (7+ Yrs Microsoft | 12+ Yrs Cybersecurity)"
    leadership = "Global Security Research & Applied Science Team Leadership"
    pillars    = [
        "Agentic AI & MCP Architecture (Project Perception, Security Copilot +35%)",
        "AI Forward Deployed Engineering (50+ Enterprises, +20% CSAT, 1,000+ Adoptions)",
        "Applied ML & Detection Engineering (200+ KQL Rules -50% MTTR, ML -30% FP)"
    ]`,
    mcp: `# mcp_kql_server_v2.py — Official MCP Registry & PyPI v2.1.5
from fastmcp import FastMCP
mcp = FastMCP("mcp-kql-server", version="2.1.5")

@mcp.tool()
async def execute_schema_grounded_kql(nl_intent: str, cluster_uri: str) -> dict:
    """Translates hunting intent to AST-validated KQL with semantic schema memory."""
    schema = await semantic_memory.pin_tables(cluster_uri, nl_intent)
    kql = await nl2kql_synthesizer.compile(nl_intent, schema=schema)
    return await kusto_client.execute_verified(cluster_uri, kql)`,
    redteam: `# ai_redteam_guardrails.yaml — Assured-Arc & Security Copilot Red Teaming
suite: microsoft_ai_security_redteam
lead: Arjun Trivedi (@4R9UN)
adversarial_gates:
  - prompt_injection_isolation: enforced
  - indirect_instruction_defense: untrusted_telemetry_sandboxed
  - tool_invocation_policy: least_privilege_allowlist
  - excessive_agency_bound: max_depth_1_human_in_the_loop`
  };

  const ideTabs = document.querySelectorAll('[data-ide-tab]');
  const codePane = document.getElementById('cursor-code-pane');
  ideTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-ide-tab');
      ideTabs.forEach((t) => t.classList.toggle('active', t === tab));
      if (codePane && IDE_SNIPPETS[key]) {
        codePane.textContent = IDE_SNIPPETS[key];
      }
    });
  });

  // 4. RAYCAST COMMAND PALETTE LIVE FILTER
  const rayInput = document.getElementById('raycast-input');
  const rayItems = document.querySelectorAll('#raycast-cmd-list .ray-cmd-item');
  if (rayInput) {
    rayInput.addEventListener('input', () => {
      const q = rayInput.value.trim().toLowerCase();
      rayItems.forEach((item) => {
        const hay = (item.textContent + ' ' + (item.getAttribute('data-ray-keywords') || '')).toLowerCase();
        item.style.display = !q || hay.includes(q) ? 'grid' : 'none';
      });
    });
    rayInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        rayInput.value = '';
        rayItems.forEach((item) => { item.style.display = 'grid'; });
      }
    });
  }

  // 5. EXPERIENCE FILTER (ALL 5 ROLES / MICROSOFT / PRIOR)
  const expBtns = document.querySelectorAll('[data-exp-filter]');
  const expCards = document.querySelectorAll('[data-exp-org]');
  expBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-exp-filter');
      expBtns.forEach((b) => b.classList.toggle('active', b === btn));
      expCards.forEach((card) => {
        const match = filter === 'all' || card.getAttribute('data-exp-org') === filter;
        card.style.display = match ? 'block' : 'none';
      });
    });
  });

  // 6. FLAGSHIP SYSTEMS FILTER (ALL 6 / MCP / CLOUD)
  const projBtns = document.querySelectorAll('[data-proj-filter]');
  const projCards = document.querySelectorAll('[data-proj-cat]');
  projBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-proj-filter');
      projBtns.forEach((b) => b.classList.toggle('active', b === btn));
      projCards.forEach((card) => {
        const match = filter === 'all' || card.getAttribute('data-proj-cat') === filter;
        card.style.display = match ? 'flex' : 'none';
      });
    });
  });

  // 7. ARCHITECTURE DIAGRAM SWITCHER (PIPELINE SVG / FDE FLYWHEEL SVG)
  const archBtns = document.querySelectorAll('[data-arch-tab]');
  const archPanes = document.querySelectorAll('[data-arch-pane]');
  archBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-arch-tab');
      archBtns.forEach((b) => b.classList.toggle('active', b === btn));
      archPanes.forEach((pane) => {
        pane.classList.toggle('active', pane.getAttribute('data-arch-pane') === key);
      });
    });
  });

  // 8. QUICKSTART STACK STAGE SWITCHER (STAGE 01&02 / STAGE 03 / STAGE 04)
  const qsBtns = document.querySelectorAll('[data-qs-tab]');
  const qsPanes = document.querySelectorAll('[data-qs-pane]');
  qsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-qs-tab');
      qsBtns.forEach((b) => b.classList.toggle('active', b === btn));
      qsPanes.forEach((pane) => {
        pane.classList.toggle('active', pane.getAttribute('data-qs-pane') === key);
      });
    });
  });

  // 9. 1-CLICK CLIPBOARD COPY HANDLERS (MCP CONFIG, CLI SNIPPETS, EMAIL)
  function copyTextWithFeedback(btn, textToCopy) {
    if (!textToCopy) return;
    const origLabel = btn.getAttribute('data-orig-label') || btn.textContent;
    btn.setAttribute('data-orig-label', origLabel);
    btn.classList.add('copied');
    btn.textContent = '✓ Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = origLabel;
    }, 1800);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).catch(() => {});
    }
  }

  document.querySelectorAll('.copy-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const directText = btn.getAttribute('data-copy-text');
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = targetId ? document.getElementById(targetId) : null;
      const text = directText || (targetEl ? targetEl.textContent : '');
      copyTextWithFeedback(btn, text);
    });
  });

  // 10. KEYBOARD SHORTCUTS (1-6 DESIGN SWITCH · C COPY EMAIL · / JUMP TO STACK)
  const DS_ORDER = ['linear', 'claude', 'cursor', 'vercel', 'raycast', 'stripe'];
  window.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || e.metaKey || e.ctrlKey || e.altKey) return;

    if (e.key >= '1' && e.key <= '6') {
      const idx = parseInt(e.key, 10) - 1;
      if (DS_ORDER[idx]) setDesignSystem(DS_ORDER[idx]);
    } else if (e.key === 'c' || e.key === 'C') {
      const emailBtn = document.getElementById('copy-email-btn');
      if (emailBtn) emailBtn.click();
    } else if (e.key === '/') {
      e.preventDefault();
      const archSec = document.getElementById('sec-architecture');
      if (archSec) archSec.scrollIntoView({ behavior: 'smooth' });
    }
  });
})();
