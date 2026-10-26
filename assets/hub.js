/*
  Shared list of the standalone pages.
  1. library.html reads window.HUB to draw its cards.
  2. On each standalone page this adds a small "More from Yoghesh" button (bottom right).
  To add a page: add one entry to PAGES below. Nothing else needs editing.
*/
(function () {
  var GROUPS = [
    { t: "Prompts and guides", ic: "fa-wand-magic-sparkles", c: "purple" },
    { t: "Cheatsheets", ic: "fa-book-open", c: "sky" },
    { t: "Browser tools", ic: "fa-screwdriver-wrench", c: "emerald" },
    { t: "Writing", ic: "fa-pen-nib", c: "amber" }
  ];

  var PAGES = [
    { href: "prompts.html", t: "AI Prompt Library", g: 0, ic: "fa-terminal",
      s: "201 reusable AI prompts across 18 categories. Search, copy and use them, even offline.",
      tags: ["Prompts", "Works offline"] },
    { href: "vibecode.html", t: "Vibe Coding Blueprint", g: 0, ic: "fa-rocket",
      s: "A blueprint for building with AI agents: the mental model, 8 core prompt documents, workflows, golden rules and a pre-flight checklist.",
      tags: ["Guide", "Prompts", "Workflows"] },
    { href: "agentic-ai.html", t: "Agentic AI Cheatsheet", g: 1, ic: "fa-robot",
      s: "12 topics from LLM basics to RAG, agents and serving, with pictures, live demos and real model costs. Searchable.",
      tags: ["AI", "Interactive", "Searchable"] },
    { href: "sql-reference.html", t: "SQL Reference", g: 1, ic: "fa-database",
      s: "Interactive SQL reference covering 60+ commands: DDL, DML, joins, aggregates and window functions, with live search.",
      tags: ["SQL", "Live search"] },
    { href: "ahkmenu.html", t: "AHKMenu Builder", g: 2, ic: "fa-bars-staggered",
      s: "Visual menu builder for AutoHotkey v2. Design your structure in the browser and export a ready-to-run script.",
      tags: ["AutoHotkey v2", "Builder"] },
    { href: "pin-annotator_v8.html", t: "Pin Annotator", g: 2, ic: "fa-location-dot",
      s: "Pin, label and export image annotations entirely in your browser. No server, no uploads.",
      tags: ["Privacy-first", "Canvas"] },
    { href: "morning-affirmation.html", t: "Morning Companion", g: 2, ic: "fa-sun",
      s: "A five-minute morning routine: read ten short statements, set one intention, close the day in the evening. Private, saved only on your device.",
      tags: ["Routine", "Private", "No account"] },
    { href: "https://wsnh2022.github.io/blog/", t: "Blog", g: 3, ic: "fa-feather-pointed",
      s: "Short write-ups on the tools I build and what I learn while building them. New articles are added regularly.",
      tags: ["Articles", "Updated often"] }
  ];

  window.HUB = { groups: GROUPS, pages: PAGES };

  /* ---- the small button on standalone pages ---- */
  var norm = function (p) { return p.replace(/\.html$/, "").replace(/\/$/, ""); };
  var here = norm(location.pathname.split("/").pop() || "");
  var current = PAGES.filter(function (p) { return norm(p.href) === here; })[0];
  if (!current) return;                                    // only on the standalone pages
  if ((window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone) return;  // installed app stays clean

  var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
  var link = function (href, label, cur) {
    return '<a href="' + href + '"' + (cur ? ' aria-current="page"' : "") + ">" + esc(label) + "</a>";
  };

  var host = document.createElement("div");
  host.id = "hub-host";
  var root = host.attachShadow({ mode: "open" });
  root.innerHTML =
    "<style>" +
    ".w{position:fixed;right:14px;bottom:14px;z-index:2147483000;font:14px/1.3 system-ui,-apple-system,Segoe UI,sans-serif}" +
    ".b{width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:rgba(15,18,30,.94);color:#fff;cursor:pointer;display:grid;place-items:center;box-shadow:0 4px 16px rgba(0,0,0,.4);padding:0}" +
    ".b:hover{border-color:#38bdf8}.b:focus-visible,a:focus-visible{outline:2px solid #38bdf8;outline-offset:2px}" +
    ".b svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}" +
    ".p{position:absolute;right:0;bottom:50px;width:min(290px,calc(100vw - 28px));background:#0f121e;color:#e5e7eb;border:1px solid rgba(255,255,255,.2);border-radius:14px;padding:8px;box-shadow:0 12px 36px rgba(0,0,0,.5)}" +
    ".p[hidden]{display:none}" +
    "h2{margin:4px 10px 6px;font:700 11px/1.2 system-ui,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:#94a3b8}" +
    "a{display:block;padding:9px 10px;border-radius:8px;color:inherit;text-decoration:none}" +
    "a:hover{background:rgba(255,255,255,.08)}" +
    "a[aria-current]{background:rgba(56,189,248,.16);color:#7dd3fc;font-weight:600}" +
    "hr{border:0;border-top:1px solid rgba(255,255,255,.12);margin:6px 0}" +
    "</style>" +
    '<div class="w"><button class="b" type="button" aria-expanded="false" aria-controls="p" aria-label="More pages from Yoghesh">' +
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></button>' +
    '<nav class="p" id="p" aria-label="More from Yoghesh" hidden>' +
    "<h2>Portfolio</h2>" + link("index.html", "Home") + link("library.html", "Library") + "<hr>" +
    "<h2>More pages</h2>" +
    PAGES.map(function (p) { return link(p.href, p.t, p === current); }).join("") +
    "</nav></div>";
  document.body.appendChild(host);

  var btn = root.querySelector(".b"), panel = root.getElementById("p");
  var set = function (open) { panel.hidden = !open; btn.setAttribute("aria-expanded", String(open)); };
  btn.addEventListener("click", function (e) { e.stopPropagation(); set(panel.hidden); });
  document.addEventListener("click", function () { set(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { set(false); btn.focus(); } });
})();
