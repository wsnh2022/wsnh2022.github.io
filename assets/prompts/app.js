// AI Prompt Library (prompts.html): renders the prompt data, search, side panel and copy buttons
    const state = {
      library: window.PROMPT_LIBRARY || null,
      activeCategory: "all",
      searchTerm: ""
    };

    // dropdown picks for pack blanks, keyed by the text inside [ ]; "a / b / c" blanks split into their own picks
    const BLANK_SUGGESTIONS = {
      "language": ["Spanish", "French", "German", "Japanese", "Korean", "Mandarin", "Hindi", "Tamil", "Arabic", "Italian"],
      "your native language": ["English", "Hindi", "Tamil", "Spanish", "French", "German"],
      "level": ["complete beginner", "A1 beginner", "A2 elementary", "B1 intermediate", "B2 upper intermediate", "C1 advanced"],
      "reason": ["travel", "work", "moving abroad", "talking with family", "an exam", "fun"],
      "goal": ["hold a basic conversation", "travel on my own", "pass a job interview", "get a promotion", "build a side project"],
      "goal / situation": ["travel", "ordering food", "small talk", "job interviews", "business meetings"],
      "topic": ["my daily routine", "travel plans", "my job", "hobbies", "food", "current news"],
      "situation, e.g. airport, restaurant, hotel": ["airport", "restaurant", "hotel", "shopping", "work", "doctor", "transportation"],
      "country / environment": ["Spain", "France", "Japan", "Germany", "an office", "a university"],
      "minutes": ["10", "15", "20", "30", "45", "60"],
      "number": ["5", "10", "15", "20"],
      "deadline": ["1 week", "2 weeks", "1 month", "3 months"],
      "skill": ["Excel", "SQL", "Python", "public speaking", "data analysis", "writing", "cooking", "guitar"],
      "target language": ["English", "Spanish", "Hindi", "Tamil", "French", "German", "Japanese"],
      "programming language": ["Python", "JavaScript", "TypeScript", "Java", "C#", "Go", "AutoHotkey v2"],
      "framework or library": ["React", "Vue", "Svelte", "Express", "FastAPI", "Django"],
      "SQL dialect": ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "BigQuery"],
      "shell / OS": ["PowerShell", "Windows cmd", "Git Bash", "bash on Linux", "zsh on macOS"],
      "regex flavor": ["JavaScript", "Python", "PCRE", ".NET", "Java"],
      "platform": ["LinkedIn", "X", "Instagram", "Facebook", "Threads"],
      "topic to learn": ["how APIs work", "SQL joins", "Git and version control", "how neural networks learn", "compound interest", "supply chain basics", "how vaccines work", "photography basics"],
      "why I want to learn it": ["to decide if it's worth my time", "for my job", "for a side project", "for an exam", "to talk about it confidently", "pure curiosity"],
      "what I already know": ["nothing", "only the basic words", "I use it but never learned why", "some of it, but it's fuzzy"]
    };

    const els = {
      libraryMeta: document.getElementById("libraryMeta"),
      pageContent: document.getElementById("pageContent"),
      heroCtaCount: document.getElementById("heroCtaCount"),
      heroDescCount: document.getElementById("heroDescCount"),
      categoryNav: document.getElementById("categoryNav"),
      sectionEyebrow: document.getElementById("sectionEyebrow"),
      packTip: document.getElementById("packTip"),
      workflowView: document.getElementById("workflowView"),
      workflowResults: document.getElementById("workflowResults"),
      searchInput: document.getElementById("searchInput"),
      clearSearch: document.getElementById("clearSearch"),
      resultCount: document.getElementById("resultCount"),
      resultCategory: document.getElementById("resultCategory"),
      sectionTitle: document.getElementById("sectionTitle"),
      sectionDescription: document.getElementById("sectionDescription"),
      toolbar: document.querySelector(".toolbar"),
      contentHeader: document.getElementById("contentHeader"),
      promptGrid: document.getElementById("promptGrid"),
      emptyState: document.getElementById("emptyState"),
      emptyTitle: document.getElementById("emptyTitle"),
      emptyHint: document.getElementById("emptyHint"),
      personalNav: document.getElementById("personalNav"),
      personalChips: document.getElementById("personalChips"),
      emptySearchAll: document.getElementById("emptySearchAll"),
      toast: document.getElementById("toast"),
      themeToggle: document.getElementById("themeToggle"),
      themeIcon: document.getElementById("themeIcon"),
      sidebar: document.getElementById("sidebar"),
      sidebarBackdrop: document.getElementById("sidebarBackdrop"),
      sidebarClose: document.getElementById("sidebarClose"),
      catToggle: document.getElementById("catToggle"),
      catToggleLabel: document.getElementById("catToggleLabel"),
      catToggleCount: document.getElementById("catToggleCount"),
      scrollTop: document.getElementById("scrollTop"),
      fillDialog: document.getElementById("fillDialog"),
      fillCategory: document.getElementById("fillCategory"),
      fillTitle: document.getElementById("fillTitle"),
      fillPreview: document.getElementById("fillPreview"),
      fillFields: document.getElementById("fillFields"),
      fillLeft: document.getElementById("fillLeft"),
      fillStats: document.getElementById("fillStats"),
      colorToggle: document.getElementById("colorToggle"),
      colorMenu: document.getElementById("colorMenu"),
      colorSwatches: document.getElementById("colorSwatches"),
      colorName: document.getElementById("colorName")
    };

    function isTyping(target) {
      return target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
    }

    function resetSearch() {
      state.searchTerm = "";
      els.searchInput.value = "";
      renderPrompts();
      replaceLibraryUrl();
    }

    const isMobile = () => window.matchMedia("(max-width: 820px)").matches;

    // Keep the off-canvas drawer out of the tab order / a11y tree unless it is open
    // on a mobile viewport. On desktop the sidebar is always live.
    function syncDrawerInert() {
      const dormant = isMobile() && !els.sidebar.classList.contains("open");
      els.sidebar.toggleAttribute("inert", dormant);
    }

    function openDrawer() {
      els.sidebar.classList.add("open");
      els.sidebarBackdrop.classList.add("open");
      els.catToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      syncDrawerInert();
      revealActiveCategory(true);
      els.sidebarClose.focus({ preventScroll: true });
    }

    // on desktop the panel sticks 99px from the top, but until the page scrolls it starts lower,
    // so it is sized to the window below its current top edge and its last items are never cut off
    function fitSidebar() {
      if (isMobile()) {
        els.sidebar.style.maxHeight = "";
        return;
      }
      const top = Math.max(els.sidebar.getBoundingClientRect().top, 99);
      els.sidebar.style.maxHeight = `${Math.max(240, window.innerHeight - top - 26)}px`;
    }

    let fitFrame = 0;
    const fitSoon = () => {
      cancelAnimationFrame(fitFrame);
      fitFrame = requestAnimationFrame(fitSidebar);
    };
    window.addEventListener("scroll", fitSoon, { passive: true });
    window.addEventListener("resize", fitSoon);

    // keeps the open category or workflow in view in the side panel, scrolling the panel and never the page
    let revealedCategory = null;
    function revealActiveCategory(force = false) {
      fitSidebar();
      if (!force && revealedCategory === state.activeCategory) return;
      const button = els.sidebar.querySelector(".category-button.active");
      // a hidden panel has no size yet, so try again once it shows
      if (!button || !els.sidebar.clientHeight) return;
      revealedCategory = state.activeCategory;
      const panel = els.sidebar.getBoundingClientRect();
      const item = button.getBoundingClientRect();
      if (!force && item.top >= panel.top && item.bottom <= panel.bottom) return;
      els.sidebar.scrollTop += item.top - panel.top - (els.sidebar.clientHeight - item.height) / 2;
    }

    function closeDrawer() {
      const wasOpen = els.sidebar.classList.contains("open");
      els.sidebar.classList.remove("open");
      els.sidebarBackdrop.classList.remove("open");
      els.catToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      syncDrawerInert();
      if (wasOpen && isMobile()) els.catToggle.focus();
    }

    const THEME_KEY = "ai-prompt-library-theme";

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function iconSvg(name, className = "ui-svg") {
      const path = ICON_PATHS[name] || ICON_PATHS.spark;
      return `<svg viewBox="0 0 24 24" class="${className}" aria-hidden="true">${path}</svg>`;
    }

    function packs() {
      return state.library.packs || [];
    }

    // categories first so "All Prompts" keeps the quick actions on top
    function allGroups() {
      return [...state.library.categories, ...packs()];
    }

    function isPack(group) {
      return packs().includes(group);
    }

    // workflows reuse existing prompts by id, so they add no prompts of their own
    function workflows() {
      return state.library.workflows || [];
    }

    function isWorkflow(group) {
      return workflows().includes(group);
    }

    function groupSize(group) {
      return (group.steps || group.prompts).length;
    }

    function allPrompts() {
      return allGroups().flatMap(category =>
        category.prompts.map((prompt, index) => ({ ...prompt, category, step: index + 1 }))
      );
    }

    function getCategory(categoryId) {
      return [...allGroups(), ...workflows()].find(category => category.id === categoryId) || null;
    }

    function promptById(id) {
      return allPrompts().find(item => String(item.id) === String(id)) || null;
    }

    // favorites and recently used live in this browser only, newest first
    const FAVORITES_KEY = "ai-prompt-library-favorites";
    const RECENT_KEY = "ai-prompt-library-recent";
    const RECENT_LIMIT = 5;

    function loadIds(key) {
      try {
        const ids = JSON.parse(localStorage.getItem(key));
        return Array.isArray(ids) ? ids.map(String) : [];
      } catch { return []; }
    }

    function saveIds(key, ids) {
      try { localStorage.setItem(key, JSON.stringify(ids)); } catch { }
    }

    let favoriteIds = loadIds(FAVORITES_KEY);
    let recentIds = loadIds(RECENT_KEY);

    const PERSONAL_VIEWS = {
      favorites: {
        name: "My prompts",
        icon: "star",
        ids: () => favoriteIds,
        description: "The prompts you starred. They're saved in this browser.",
        emptyTitle: "No favorites yet",
        emptyHint: "Tap the star on any prompt to keep it here."
      },
      recent: {
        name: "Recently used",
        icon: "clock",
        ids: () => recentIds,
        description: "The last prompts you copied. They're saved in this browser.",
        emptyTitle: "Nothing copied yet",
        emptyHint: "The prompts you copy will show up here."
      }
    };

    function personalView(id) {
      return Object.hasOwn(PERSONAL_VIEWS, id) ? PERSONAL_VIEWS[id] : null;
    }

    function personalPrompts(view) {
      return view.ids().map(promptById).filter(Boolean);
    }

    function toggleFavorite(id) {
      const adding = !favoriteIds.includes(id);
      favoriteIds = adding ? [id, ...favoriteIds] : favoriteIds.filter(other => other !== id);
      saveIds(FAVORITES_KEY, favoriteIds);
      renderCategories();
      return adding;
    }

    function recordRecent(item) {
      if (!promptById(item.id)) return;
      const id = String(item.id);
      recentIds = [id, ...recentIds.filter(other => other !== id)].slice(0, RECENT_LIMIT);
      saveIds(RECENT_KEY, recentIds);
      renderCategories();
      renderWelcomeRecent();
    }

    function groupIcon(group) {
      return group.icon || CATEGORY_ICONS[group.name] || "sparkles";
    }

    function hitHtml(text, pattern) {
      if (!pattern) return escapeHtml(text);
      return text.split(pattern).map((part, index) =>
        index % 2 ? `<mark class="search-hit">${escapeHtml(part)}</mark>` : escapeHtml(part)).join("");
    }

    // shows blanks and search matches; a match past this many characters could fall outside the one-line preview
    const PREVIEW_CHARS = 30;

    function promptTextHtml(text, pattern) {
      const marked = part => part.split(/(\[[^\]]+\])/).map((piece, index) =>
        index % 2 ? `<mark class="prompt-blank">${hitHtml(piece, pattern)}</mark>` : hitHtml(piece, pattern)).join("");
      const first = pattern ? text.search(pattern) : -1;
      if (first < PREVIEW_CHARS) return marked(text);

      let start = text.lastIndexOf(" ", first - 20) + 1;
      // never cut a blank in two
      if (text.lastIndexOf("[", start) > text.lastIndexOf("]", start)) start = text.lastIndexOf("[", start);
      return `<span class="prompt-lead">${marked(text.slice(0, start))}</span><span class="prompt-ellipsis">... </span>${marked(text.slice(start))}`;
    }

    // "28 words · 173 chars"; chars include spaces, "user's" is one word, a lone "/" is none
    function promptStats(text) {
      const words = (text.match(/[A-Za-z0-9]+(?:['’][A-Za-z]+)*/g) || []).length;
      return `${words} word${words === 1 ? "" : "s"} · ${text.length} chars`;
    }

    function blanksIn(text) {
      return [...new Set([...text.matchAll(/\[([^\]]+)\]/g)].map(match => match[1]))];
    }

    // fill-in panel: values are shared by blank name across prompts and kept in localStorage
    const BLANKS_KEY = "ai-prompt-library-blanks";
    const blankValues = loadBlankValues();
    let fillItem = null;
    let editingBlank = null;

    // pasted content is one-off, so it gets a text box and is never remembered
    function isPasteBlank(blank) { return /^paste\b/i.test(blank); }

    function loadBlankValues() {
      try { return JSON.parse(localStorage.getItem(BLANKS_KEY)) || {}; } catch { return {}; }
    }

    function saveBlankValues() {
      const kept = Object.fromEntries(Object.entries(blankValues).filter(([blank]) => !isPasteBlank(blank)));
      try { localStorage.setItem(BLANKS_KEY, JSON.stringify(kept)); } catch { }
    }

    function blankSuggestions(blank) {
      return BLANK_SUGGESTIONS[blank] || (blank.includes(" / ") ? blank.split(" / ") : []);
    }

    function blankValue(blank) { return (blankValues[blank] || "").trim(); }

    function fillPrompt(text) {
      return text.replace(/\[([^\]]+)\]/g, (match, blank) => blankValue(blank) || match);
    }

    // one blank in the preview: filled value, highlighted [blank], or the inline edit box
    function slotHtml(blank, editing) {
      const attr = `data-slot="${escapeHtml(blank)}"`;
      if (editing) {
        return `<span class="fill-edit" ${attr} contenteditable="true" role="textbox" aria-label="${escapeHtml(blank)}" data-placeholder="${escapeHtml(blank)}">${escapeHtml(blankValues[blank] || "")}</span>`;
      }
      const value = blankValue(blank);
      return value
        ? `<span class="fill-value" ${attr}>${escapeHtml(value)}</span>`
        : `<mark class="prompt-blank" ${attr}>[${escapeHtml(blank)}]</mark>`;
    }

    function fillPreviewHtml(text) {
      let editShown = false;
      return text.split(/(\[[^\]]+\])/).map(part => {
        const blank = part.match(/^\[([^\]]+)\]$/);
        if (!blank) return escapeHtml(part);
        // a blank used twice gets the edit box only at its first spot
        const editing = blank[1] === editingBlank && !editShown;
        if (editing) editShown = true;
        return slotHtml(blank[1], editing);
      }).join("");
    }

    function openFill(item) {
      fillItem = item;
      editingBlank = null;
      els.fillCategory.textContent = groupLabel(item.category);
      els.fillTitle.textContent = item.name;
      els.fillFields.innerHTML = blanksIn(item.prompt).map((blank, i) => {
        const name = escapeHtml(blank);
        if (isPasteBlank(blank)) {
          delete blankValues[blank];
          return `
      <div class="fill-field" data-field="${name}">
        <label for="fill-${i}"><span>${name}</span></label>
        <textarea id="fill-${i}" data-blank="${name}" rows="4" placeholder="Paste here"></textarea>
      </div>`;
        }
        const value = blankValues[blank] || "";
        const picks = blankSuggestions(blank);
        return `
      <div class="fill-field" data-field="${name}">
        <p class="fill-name"><span>${name}</span>${value ? '<span class="fill-remembered">Remembered</span>' : ""}</p>
        <div class="fill-chips">${picks.map(pick =>
          `<button type="button" data-pick="${escapeHtml(pick)}" aria-pressed="${pick === value}">${escapeHtml(pick)}</button>`).join("")}<button type="button" class="fill-pen" data-edit="${name}" aria-pressed="false" aria-label="Type your own ${name}">${iconSvg("pencil", "")}${picks.length ? "" : "Type it in the prompt"}</button></div>
      </div>`;
      }).join("");
      updateFill();
      els.fillDialog.showModal();
    }

    function updateFillCount() {
      const left = blanksIn(fillItem.prompt).filter(blank => !blankValue(blank)).length;
      els.fillLeft.textContent = left ? `${left} blank${left > 1 ? "s" : ""} left` : "All filled";
      els.fillStats.textContent = promptStats(fillPrompt(fillItem.prompt));
    }

    function updateFill() {
      els.fillPreview.innerHTML = fillPreviewHtml(fillItem.prompt);
      updateFillCount();
      els.fillFields.querySelectorAll("[data-edit]").forEach(pen =>
        pen.setAttribute("aria-pressed", String(pen.dataset.edit === editingBlank)));
      const box = els.fillPreview.querySelector(".fill-edit");
      if (!box) return;
      box.focus();
      getSelection().selectAllChildren(box);
      getSelection().collapseToEnd();
    }

    // saves a value and refreshes the chips; the preview is redrawn by the caller when needed
    function setBlank(blank, value) {
      blankValues[blank] = value;
      saveBlankValues();
      const field = els.fillFields.querySelector(`[data-field="${CSS.escape(blank)}"]`);
      field?.querySelectorAll("[data-pick]").forEach(chip =>
        chip.setAttribute("aria-pressed", String(chip.dataset.pick === value.trim())));
    }

    function startEdit(blank) {
      if (isPasteBlank(blank)) {
        els.fillFields.querySelector(`textarea[data-blank="${CSS.escape(blank)}"]`)?.focus();
        return;
      }
      editingBlank = blank;
      updateFill();
    }

    function finishEdit() {
      if (editingBlank === null) return;
      editingBlank = null;
      updateFill();
    }

    async function copyFromFill(text) {
      // close first: the copy fallback needs the page, which the open dialog makes inert
      els.fillDialog.close();
      try {
        await copyText(text);
        recordRecent(fillItem);
        fillItem.onCopied?.();
        showCopiedToast(text);
      } catch (error) {
        console.error(error);
        showToast("Could not copy prompt");
      }
    }

    function getPromptIcon(item) { return item.icon || "sparkles"; }

    const SEARCH_STOP_WORDS = new Set("a an and for how i in is it me my of on or the this to with".split(" "));
    // everyday words the prompts themselves don't use
    const SEARCH_ALIASES = {
      summary: ["summar"], summaries: ["summar"], summarise: ["summar"], summarize: ["summar"],
      proofread: ["grammar"], spelling: ["grammar"],
      rephrase: ["rewrite"], reword: ["rewrite"], paraphrase: ["rewrite"],
      shorten: ["concise", "short"], tldr: ["tl;dr"]
    };

    function searchWords(term) {
      const words = term.trim().toLowerCase().split(/\s+/).filter(Boolean);
      const meaningful = words.filter(word => !SEARCH_STOP_WORDS.has(word));
      return meaningful.length ? meaningful : words;
    }

    // "emails" finds email, "writing" finds write, "organise" finds organize
    function searchStem(word) {
      let stem = word.replace(/is(e|ed|es|ing|ation)$/, "iz$1").replace(/yse$/, "yze");
      if (/[^s]s$/.test(stem)) stem = stem.slice(0, -1);
      const shorter = stem.replace(/(ing|ed|e)$/, "");
      return shorter.length >= 4 ? shorter : stem;
    }

    // finds the same words as textHasWord, for marking them on the cards
    function searchHitPattern() {
      const words = searchWords(state.searchTerm);
      if (!words.length) return null;
      const escape = text => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const parts = words.flatMap(word => [
        `\\b${escape(searchStem(word))}\\w*`,
        escape(word),
        ...(SEARCH_ALIASES[word] || []).map(alias => `${escape(alias)}\\w*`)
      ]);
      return new RegExp(`(${parts.join("|")})`, "gi");
    }

    function textHasWord(text, word) {
      if (text.includes(word) || (SEARCH_ALIASES[word] || []).some(alias => text.includes(alias))) return true;
      // the shortened form must start a word, so "resume" can't match "presumed"
      return ` ${text}`.includes(` ${searchStem(word)}`);
    }

    function getFilteredPrompts(categoryId = state.activeCategory) {
      const view = personalView(categoryId);
      let prompts = view ? personalPrompts(view) : allPrompts();

      if (!view && categoryId !== "all") {
        prompts = prompts.filter(item => item.category.id === categoryId);
      }

      const words = searchWords(state.searchTerm);
      if (words.length) {
        const matches = text => words.every(word => textHasWord(text.toLowerCase(), word));
        prompts = prompts.filter(item =>
          matches(`${item.name} ${item.purpose || ""} ${item.prompt} ${item.category.name}`));
        // prompts named after the search come first
        const inName = item => matches(item.name);
        prompts = [...prompts.filter(inName), ...prompts.filter(item => !inName(item))];
      }

      return prompts;
    }

    function renderCategories() {
      const toButton = group => ({
        id: group.id,
        name: groupLabel(group),
        count: groupSize(group),
        icon: groupIcon(group),
        series: isPack(group)
      });
      const allButton = { id: "all", name: "All Prompts", count: allPrompts().length, icon: "spark" };
      const buttons = [allButton, ...allGroups().map(toButton), ...workflows().map(toButton)];

      const buttonHtml = item => `
    <button
      type="button"
      class="category-button ${state.activeCategory === item.id ? "active" : ""}"
      data-category-id="${escapeHtml(item.id)}"
      aria-pressed="${state.activeCategory === item.id}"
    >
      <span class="category-icon">${iconSvg(item.icon, "category-svg")}</span>
      <span class="category-name">${escapeHtml(item.name)}${item.series ? ` <span class="series-tag">series</span>` : ""}</span>
      <span class="category-count">${item.count}</span>
    </button>
  `;

      const personalButtons = Object.entries(PERSONAL_VIEWS).map(([id, view]) => ({
        id,
        name: view.name,
        count: personalPrompts(view).length,
        icon: view.icon
      }));
      els.personalNav.innerHTML = personalButtons.map(buttonHtml).join("");

      // phones keep the sidebar in a drawer, so anything saved also gets a button under the search box
      const savedButtons = personalButtons.filter(item => item.count);
      els.personalChips.hidden = savedButtons.length === 0;
      els.personalChips.innerHTML = savedButtons.map(item => `
        <button type="button" class="${state.activeCategory === item.id ? "active" : ""}" data-open-library="${item.id}">
          ${iconSvg(item.icon, "category-svg")}<span>${escapeHtml(item.name)} ${item.count}</span>
        </button>`).join("");

      els.categoryNav.innerHTML = buttonHtml(allButton) + domainSections().map(domain => `
    <div class="sidebar-heading domain-heading">
      <span>${escapeHtml(domain.name)}</span>
      <span class="count-pill">${domain.groups.reduce((sum, group) => sum + group.prompts.length, 0)}</span>
    </div>
    ${domain.groups.map(group => buttonHtml(toButton(group))).join("")}`).join("") + (workflows().length ? `
    <div class="sidebar-heading domain-heading">
      <span>Workflows</span>
      <span class="count-pill">${workflows().length}</span>
    </div>
    ${workflows().map(group => buttonHtml(toButton(group))).join("")}` : "");

      const active = [...personalButtons, ...buttons].find(item => item.id === state.activeCategory) || buttons[0];
      revealActiveCategory();
      els.catToggleLabel.textContent = active.name;
      els.catToggle.setAttribute("aria-label", `Choose category (current: ${active.name})`);
      els.catToggleCount.textContent = String(active.count);
    }

    function renderContentHeader(filtered, workflowMatches = 0) {
      const activeCategory = getCategory(state.activeCategory);
      const view = personalView(state.activeCategory);
      const title = view ? view.name : activeCategory ? groupLabel(activeCategory) : "All Prompts";
      const categoryTotal = activeCategory ? groupSize(activeCategory) : allPrompts().length;
      const searchApplied = Boolean(state.searchTerm.trim());

      const pack = activeCategory && isPack(activeCategory);
      const workflow = activeCategory && isWorkflow(activeCategory);

      els.sectionTitle.textContent = title;
      els.resultCategory.textContent = title;
      els.sectionEyebrow.textContent = workflow
        ? `Workflow · ${categoryTotal} steps`
        : pack
          ? `Prompt pack · ${categoryTotal} prompt${categoryTotal === 1 ? "" : "s"}`
          : "Prompt collection";
      // a workflow shows its own heading on phones, so the tip box is only for packs
      els.packTip.hidden = !pack;
      if (pack) els.packTip.textContent = activeCategory.description;

      if ((pack || workflow) && !searchApplied) {
        els.sectionDescription.textContent = activeCategory.description;
      } else if (searchApplied) {
        els.sectionDescription.textContent =
          `${filtered.length} matching prompt${filtered.length === 1 ? "" : "s"} within ${title}` +
          (workflowMatches ? `, plus ${workflowMatches} workflow${workflowMatches === 1 ? "" : "s"}.` : ".");
      } else if (view) {
        els.sectionDescription.textContent = view.description;
      } else if (activeCategory) {
        els.sectionDescription.textContent =
          `${categoryTotal} prompt${categoryTotal === 1 ? "" : "s"} in this category.`;
      } else {
        els.sectionDescription.textContent =
          "The complete collection. Search or pick a category to narrow it down.";
      }
    }

    // one step: the original prompt, and from step 2 on its input points at the answers already in the chat
    const LABEL_LINE = /\n\n([A-Z][A-Za-z ]{0,30}):$/;

    function workflowStep(workflow, index) {
      const ref = workflow.steps[index];
      const source = promptById(ref.prompt);
      let text = source.prompt;
      const swaps = [];
      if (index > 0) {
        Object.entries(ref.fill || {}).forEach(([blank, value]) => {
          text = text.replaceAll(`[${blank}]`, value);
          swaps.push(value);
        });
        const label = text.match(LABEL_LINE);
        const input = ref.input || (label ? `the original ${label[1].toLowerCase()} and your previous answers above.` : "");
        if (label) {
          swaps.push(`${label[1]}: ${input}`);
          text = text.replace(LABEL_LINE, `\n\n${label[1]}: ${input}`);
        } else if (input) {
          swaps.push(input);
          text = `${text}\n\n${input}`;
        }
      }
      return { ref, source, text, swaps, label: (source.prompt.match(LABEL_LINE) || [])[1] };
    }

    // the quick version: every step in one prompt, with the first step's input at the end
    function workflowCombined(workflow) {
      const first = workflowStep(workflow, 0);
      const parts = workflow.steps.map((ref, index) => {
        const step = workflowStep(workflow, index);
        const body = index === 0 && first.label ? step.text.replace(LABEL_LINE, "") : step.text;
        return `Step ${index + 1}, ${step.source.name}:\n${body}`;
      });
      const original = first.label ? `, and "the original ${first.label.toLowerCase()}" means what I give at the end` : "";
      return `Work through these ${workflow.steps.length} steps in order. Put each step's result under its own heading before you start the next one. In each step, "your previous answer" means your result from the step before${original}.\n\n${parts.join("\n\n")}${first.label ? `\n\n${first.label}:` : ""}`;
    }

    function workflowTextHtml(text, swaps = []) {
      return text.split(/(\[[^\]]+\])/).map((piece, index) => {
        if (index % 2) return `<mark class="prompt-blank">${escapeHtml(piece)}</mark>`;
        let html = escapeHtml(piece);
        swaps.forEach(swap => {
          html = html.split(escapeHtml(swap)).join(`<mark class="wf-swap">${escapeHtml(swap)}</mark>`);
        });
        return html;
      }).join("");
    }

    // progress and the open tab last until the page is reloaded
    const workflowProgress = new Map();
    const workflowTabs = new Map();

    function workflowDone(id) {
      if (!workflowProgress.has(id)) workflowProgress.set(id, new Set());
      return workflowProgress.get(id);
    }

    function renderWorkflow(workflow) {
      renderContentHeader([]);
      els.resultCount.textContent = String(workflow.steps.length);
      els.clearSearch.hidden = true;
      els.promptGrid.hidden = true;
      els.promptGrid.innerHTML = "";
      els.emptyState.hidden = true;
      renderWorkflowResults([]);
      els.workflowView.hidden = false;

      const done = workflowDone(workflow.id);
      const total = workflow.steps.length;
      const quick = workflowTabs.get(workflow.id) === "quick";
      const next = workflow.steps.findIndex((_, index) => !done.has(index));

      const chips = workflow.steps.map((ref, index) =>
        `<span class="wf-chip">${index + 1}. ${escapeHtml(promptById(ref.prompt).name)}</span>`).join('<span class="wf-arrow" aria-hidden="true">→</span>');

      const stepHtml = (ref, index) => {
        const step = workflowStep(workflow, index);
        const isDone = done.has(index);
        const isNext = index === next;
        // steps unlock in order, so a later one can't be copied ahead of time by mistake
        const isLocked = !isDone && !isNext;
        const blanks = blanksIn(step.text).length > 0;
        const hint = isLocked
          ? `Locked until you copy step ${next + 1}.`
          : index === 0
            ? step.label ? `Add your ${step.label.toLowerCase()} after "${step.label}:", then send.` : "Fill in the blanks, then send."
            : blanks ? "Fill in the blanks, then paste it into the same chat." : "Paste it into the same chat, right after the previous answer.";
        const copyButton = isLocked
          ? `<button type="button" class="wf-copy" disabled aria-label="Step ${index + 1} is locked until you copy step ${next + 1}">Locked</button>`
          : `<button type="button" class="wf-copy${isDone ? " is-done" : " is-next"}" data-wf-copy="${index}"${isDone ? ` title="Copy step ${index + 1} again"` : ""}>${isDone ? "Copied" : `Copy step ${index + 1}`}</button>`;
        return `
      <li class="wf-step${isDone ? " is-done" : ""}${isNext ? " is-next" : ""}${isLocked ? " is-locked" : ""}">
        <span class="wf-num" aria-hidden="true">${isDone ? iconSvg("check", "") : index + 1}</span>
        <div class="wf-box">
          <div class="wf-step-top">
            <span class="prompt-chip" aria-hidden="true">${iconSvg(getPromptIcon(step.source), "prompt-svg")}</span>
            <div class="wf-step-heading">
              <h3>${escapeHtml(step.source.name)}</h3>
              <button type="button" class="wf-source" data-open-prompt="${escapeHtml(step.source.id)}">Uses <span>${escapeHtml(groupLabel(step.source.category))} · #${escapeHtml(step.source.id)}</span></button>
            </div>
            ${copyButton}
          </div>
          <p class="wf-why"><strong>Why this step:</strong> ${escapeHtml(ref.why)}</p>
          <p class="wf-text">${workflowTextHtml(step.text, step.swaps)}</p>
          <p class="wf-hint">${escapeHtml(hint)}</p>
          <div class="wf-check"><strong>Check before you continue</strong>${escapeHtml(ref.check)}</div>
        </div>
      </li>`;
      };

      const stepsPanel = `
      <p class="wf-note"><strong>Most accurate.</strong> Copy step 1, add your input and send. Read and check the answer, then copy the next step into the same chat. Steps unlock one at a time, so you can't skip ahead by mistake. Steps 2 onward use the answers already in the chat (highlighted in green).</p>
      <div class="wf-progress">
        <div class="wf-bar"><i style="width: ${(done.size / total) * 100}%"></i></div>
        <span class="wf-progress-text">${done.size} of ${total} steps copied</span>
        <button type="button" class="wf-reset" data-wf-reset>Start over</button>
      </div>
      <ol class="wf-steps">${workflow.steps.map(stepHtml).join("")}</ol>
      ${done.size === total ? `<div class="wf-done"><strong>Workflow done.</strong> ${escapeHtml(workflow.takeaway)}</div>` : ""}`;

      const quickPanel = `
      <div class="wf-warn"><strong>Faster, but less detailed.</strong> The AI does all ${total} steps in one reply, so later steps get less depth and you can't fix a mistake midway. Use it for short inputs or a quick first look. For anything important, use Step by step.</div>
      <p class="wf-text">${workflowTextHtml(workflowCombined(workflow))}</p>
      <div class="wf-quick-actions"><button type="button" class="wf-copy is-next" data-wf-copy="quick">Copy as one prompt</button></div>`;

      els.workflowView.innerHTML = `
      <div class="wf-mobile-head">
        <p class="eyebrow">Workflow · ${total} steps</p>
        <h2>${escapeHtml(workflow.name)}</h2>
        <p>${escapeHtml(workflow.description)}</p>
      </div>
      <div class="wf-chips">${chips}</div>
      <div class="wf-tabs" role="tablist" aria-label="How to run this workflow">
        <button type="button" role="tab" data-wf-tab="steps" aria-selected="${!quick}">Step by step <span class="wf-badge">Recommended</span></button>
        <button type="button" role="tab" data-wf-tab="quick" aria-selected="${quick}">Quick (all in one)</button>
      </div>
      ${quick ? quickPanel : stepsPanel}`;
    }

    // a search also finds workflows by their name, description and the prompts they use
    function searchWorkflows() {
      const words = searchWords(state.searchTerm);
      if (!words.length) return [];
      const matches = text => words.every(word => textHasWord(text.toLowerCase(), word));
      const found = workflows().filter(workflow => matches(
        `${workflow.name} ${workflow.description} ${workflow.steps.map(ref => promptById(ref.prompt).name).join(" ")}`));
      const inName = workflow => matches(workflow.name);
      return [...found.filter(inName), ...found.filter(workflow => !inName(workflow))];
    }

    function renderWorkflowResults(found) {
      els.workflowResults.hidden = found.length === 0;
      if (!found.length) {
        els.workflowResults.innerHTML = "";
        return;
      }
      const hits = searchHitPattern();
      els.workflowResults.innerHTML = `
      <p class="eyebrow">Workflows · ${found.length}</p>
      <div class="wf-result-grid">${found.map(workflow => `
        <button type="button" class="wf-result" data-open-library="${escapeHtml(workflow.id)}">
          <span class="prompt-chip" aria-hidden="true">${iconSvg(groupIcon(workflow), "prompt-svg")}</span>
          <span class="wf-result-body">
            <span class="wf-result-meta">Workflow · ${workflow.steps.length} steps</span>
            <strong>${hitHtml(workflow.name, hits)}</strong>
            <span class="wf-result-desc">${hitHtml(workflow.description, hits)}</span>
            <span class="wf-result-steps">${workflow.steps.map(ref => hitHtml(promptById(ref.prompt).name, hits)).join(" → ")}</span>
          </span>
        </button>`).join("")}
      </div>`;
    }

    function renderPrompts() {
      const active = getCategory(state.activeCategory);
      if (active && isWorkflow(active)) {
        // a search from a workflow looks through every prompt
        if (state.searchTerm.trim()) {
          state.activeCategory = "all";
          renderCategories();
        } else {
          renderWorkflow(active);
          return;
        }
      }
      els.workflowView.hidden = true;

      const filtered = getFilteredPrompts();
      const foundWorkflows = searchWorkflows();
      renderContentHeader(filtered, foundWorkflows.length);
      renderWorkflowResults(foundWorkflows);

      els.resultCount.textContent = String(filtered.length + foundWorkflows.length);
      els.clearSearch.hidden = !state.searchTerm;
      els.promptGrid.hidden = filtered.length === 0;
      els.emptyState.hidden = filtered.length !== 0 || foundWorkflows.length !== 0;

      if (filtered.length === 0) {
        els.promptGrid.innerHTML = "";
        const searching = searchWords(state.searchTerm).length > 0;
        const view = personalView(state.activeCategory);
        const elsewhere = !searching || state.activeCategory === "all" ? 0 : getFilteredPrompts("all").length;
        els.emptyTitle.textContent = view && !searching ? view.emptyTitle : "No prompts found";
        els.emptyHint.textContent = view && !searching
          ? view.emptyHint
          : elsewhere
            ? "Nothing here matches, but other prompts do."
            : "Try a different search term or select another category.";
        els.emptySearchAll.hidden = !elsewhere;
        els.emptySearchAll.dataset.search = state.searchTerm;
        els.emptySearchAll.textContent = `Show ${elsewhere} match${elsewhere === 1 ? "" : "es"} in all prompts`;
        return;
      }

      const hits = searchHitPattern();
      els.promptGrid.innerHTML = filtered.map(item => {
        const pack = isPack(item.category);
        const blanks = blanksIn(item.prompt);
        // a pack with a single prompt has no steps to number
        const number = !pack ? `· #${escapeHtml(item.id)}` : item.category.prompts.length > 1 ? `· Step ${item.step}` : "";
        const starred = favoriteIds.includes(String(item.id));
        return `
    <article class="prompt-card${pack ? " pack-card" : ""}" data-copy-id="${escapeHtml(item.id)}" tabindex="0">
      <div class="prompt-card-main">
        <div class="prompt-card-header">
          <span class="prompt-chip" aria-hidden="true">${iconSvg(getPromptIcon(item), "prompt-svg")}</span>
          <div class="prompt-heading">
            <span class="prompt-category">${hitHtml(groupLabel(item.category), hits)} <span class="prompt-number">${number}</span> <span class="prompt-stats">${promptStats(item.prompt)}</span></span>
            <h3>${hitHtml(item.name, hits)}</h3>
            ${item.purpose ? `<p class="prompt-purpose">${hitHtml(item.purpose, hits)}</p>` : ""}
          </div>

          <button type="button" class="prompt-action prompt-share" aria-label="Copy link to ${escapeHtml(item.name)}" data-tooltip="Copy link">
            ${iconSvg("link", "copy-svg")}
          </button>
          <button type="button" class="prompt-action prompt-star" aria-pressed="${starred}" aria-label="Favorite ${escapeHtml(item.name)}">
            ${iconSvg("star", "copy-svg")}
          </button>

          <button type="button" class="prompt-action prompt-copy" aria-label="Copy ${escapeHtml(item.name)}" title="Copy">
            ${iconSvg("copy", "copy-svg")}
          </button>

          <button type="button" class="prompt-expand" aria-expanded="false" aria-label="Show full ${escapeHtml(item.name)} prompt">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m8 10 4 4 4-4" />
            </svg>
          </button>
        </div>

        ${blanks.length ? `<div class="prompt-blanks">${blanks.map(blank =>
          `<span class="blank-tag">Fill in: ${escapeHtml(blank)}</span>`).join("")}</div>` : ""}
        <p class="prompt-text">${promptTextHtml(item.prompt, hits)}</p>
        ${blanks.length ? "" : `<div class="prompt-actions-row"><span>Copy and open in</span>${aiToolLinks(item.prompt)}</div>`}
      </div>
    </article>
  `;
      }).join("");

      markClampedCards();
    }

    function markClampedCards() {
      els.promptGrid.querySelectorAll(".prompt-card").forEach(card => {
        const text = card.querySelector(".prompt-text");
        const btn = card.querySelector(".prompt-expand");
        text.classList.remove("expanded");
        const overflows = text.scrollWidth - text.clientWidth > 1;
        card.classList.toggle("has-more", overflows || Boolean(text.querySelector(".prompt-lead")));
        btn.setAttribute("aria-expanded", "false");
      });

      // counts that wrapped get a line of their own without the leading dot
      const stats = [...els.promptGrid.querySelectorAll(".prompt-stats")];
      stats.forEach(stat => stat.classList.remove("own-line"));
      stats.filter(stat => stat.getBoundingClientRect().top - stat.previousElementSibling.getBoundingClientRect().top > 2)
        .forEach(stat => stat.classList.add("own-line"));
    }

    async function copyText(text) {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
      }

      if (!copyWithSelection(text)) throw new Error("Clipboard copy failed.");
    }

    // finishes before the click ends, so it works even as a link's new tab takes focus
    function copyWithSelection(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);

      const successful = document.execCommand("copy");
      textarea.remove();
      return successful;
    }

    function copyAndOpen(event, text, item) {
      const link = event.target.closest(".ai-tool");
      const tool = AI_TOOLS.find(entry => entry.id === link.dataset.tool);
      const url = toolUrl(tool, text);
      // set during the click, so the browser follows it with the visitor's latest text
      link.href = url;
      const prefilled = url !== tool.url;
      const copied = copyWithSelection(text);
      if (!copied && !prefilled) {
        event.preventDefault();
        showToast("Could not copy prompt");
        return;
      }
      recordRecent(item);
      if (!prefilled) showToast("Prompt copied. Paste it in the new tab");
      else if (tool.sends) showToast(`Sending to ${tool.name}`);
      else showToast(copied ? "Opening with your prompt. Also copied, in case it's missing" : "Opening with your prompt");
    }

    let toastTimer;
    function showToast(message) {
      els.toast.classList.remove("has-links");
      els.toast.textContent = message;
      els.toast.hidden = false;
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        els.toast.hidden = true;
      }, 1500);
    }

    // a page can't paste into another site, so the prompt goes in the link; the fill panel warns this leaves it in browser history
    // ChatGPT's ?q= sends straight away, blanks and all, while ?prompt= only fills the box. Gemini ignores both.
    // Perplexity has no fill-only link, so `sends` keeps prompts with empty blanks out of its address
    const AI_TOOLS = [
      { id: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com/", param: "prompt" },
      { id: "claude", name: "Claude", url: "https://claude.ai/new", param: "q" },
      { id: "gemini", name: "Gemini", url: "https://gemini.google.com/app" },
      { id: "perplexity", name: "Perplexity", url: "https://www.perplexity.ai/search/new", param: "q", sends: true },
      // no known pre-fill link, and its sign-in page drops anything in the address
      { id: "deepseek", name: "DeepSeek", url: "https://chat.deepseek.com/" },
      { id: "grok", name: "Grok", url: "https://x.com/i/grok", param: "text" }
    ];
    // the longest address tested; a longer prompt opens the plain page and relies on the copy
    const MAX_PREFILL_LENGTH = 6800;
    const CAN_SHARE = "share" in navigator && matchMedia("(pointer: coarse)").matches;

    function toolUrl(tool, text) {
      if (!tool.param || !text || (tool.sends && blanksIn(text).length)) return tool.url;
      const url = `${tool.url}?${tool.param}=${encodeURIComponent(text)}`;
      return url.length > MAX_PREFILL_LENGTH ? tool.url : url;
    }

    function aiToolLinks(text) {
      const links = AI_TOOLS.map(tool => {
        const label = tool.param ? tool.name : `${tool.name}, paste the prompt`;
        return `
        <a class="ai-tool ai-tool-${tool.id}" data-tool="${tool.id}" href="${escapeHtml(toolUrl(tool, text))}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${iconSvg(tool.id, "ai-tool-svg")}</a>`;
      }).join("");
      return CAN_SHARE ? `${links}
        <button type="button" class="ai-share" aria-label="Share to an app" title="Share to an app">${iconSvg("share", "ai-tool-svg")}</button>` : links;
    }

    // the phone's own menu hands the text straight to the app the visitor picks
    function shareText(text, item) {
      copyWithSelection(text);
      if (item) recordRecent(item);
      navigator.share({ text }).catch(error => {
        if (error.name !== "AbortError") showToast("Could not open the share menu");
      });
    }

    let copiedText = "";
    // stays until a tool is picked, it's closed, or another message replaces it
    function showCopiedToast(text) {
      clearTimeout(toastTimer);
      copiedText = text;
      els.toast.classList.add("has-links");
      els.toast.innerHTML = `<span>Prompt copied. Open it in</span>${aiToolLinks(text)}
        <button type="button" class="toast-close" aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8 8 8M16 8l-8 8" /></svg></button>`;
      els.toast.hidden = false;
    }

    function setTheme(theme) {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem(THEME_KEY, theme);
      const _tc = document.querySelector('meta[name="theme-color"]');
      if (_tc) _tc.setAttribute("content", theme === "dark" ? "#0d0f12" : "#f4f5f7");

      // the icon shows the mode a click switches to: sun while dark, moon while light
      const isDark = theme === "dark";
      const label = isDark ? "Switch to light mode" : "Switch to dark mode";
      els.themeIcon.innerHTML = iconSvg(isDark ? "sun" : "moon", "theme-svg");
      els.themeToggle.dataset.tooltip = label;
      els.themeToggle.setAttribute("aria-label", label);
    }

    function initTheme() {
      const saved = localStorage.getItem(THEME_KEY);
      setTheme(saved === "dark" || saved === "light" ? saved : "dark");
    }

    // swatch colors only; the page colors for each theme live in the html[data-color] CSS blocks
    const COLOR_THEMES = [
      { id: "orange", name: "Orange", from: "#f7931a", to: "#f2a516" },
      { id: "sunset", name: "Sunset", from: "#fb923c", to: "#f472b6" },
      { id: "ocean", name: "Ocean", from: "#38bdf8", to: "#818cf8" },
      { id: "aurora", name: "Aurora", from: "#2dd4bf", to: "#a78bfa" },
      { id: "berry", name: "Berry", from: "#c084fc", to: "#f472b6" },
      { id: "mint", name: "Mint", from: "#4ade80", to: "#22d3ee" },
      { id: "ember", name: "Ember", from: "#f87171", to: "#fbbf24" }
    ];
    const COLOR_KEY = "ai-prompt-library-color";

    function setColor(id) {
      const color = COLOR_THEMES.find(item => item.id === id) || COLOR_THEMES[0];
      document.documentElement.dataset.color = color.id;
      localStorage.setItem(COLOR_KEY, color.id);
      els.colorSwatches.querySelectorAll("[data-color-id]").forEach(swatch =>
        swatch.setAttribute("aria-pressed", String(swatch.dataset.colorId === color.id)));
      els.colorName.textContent = color.id === "orange" ? `${color.name} (default)` : color.name;
    }

    function initColor() {
      els.colorSwatches.innerHTML = COLOR_THEMES.map(color =>
        `<button type="button" data-color-id="${color.id}" aria-label="${color.name}" title="${color.name}" style="background: linear-gradient(135deg, ${color.from}, ${color.to})"></button>`).join("");
      setColor(localStorage.getItem(COLOR_KEY));
    }

    function toggleColorMenu(open) {
      els.colorMenu.hidden = !open;
      els.colorToggle.setAttribute("aria-expanded", String(open));
    }

    const libraryShowing = () => els.pageContent.classList.contains("show-library");

    // shorter labels for collection names that are too long or unclear to show
    const GROUP_LABELS = {
      coding_developer_workflows: "Coding & developer",
      developer_text_that_isn_t_necessarily_code: "Developer text",
      documents_structured_data: "Documents & data",
      legal_policy_compliance_assistance: "Legal & compliance",
      advanced_power_user_actions: "Power user actions",
      do_something_with_this_the_killer_generic_action: "Do something with this"
    };

    function groupLabel(group) {
      return GROUP_LABELS[group.id] || group.name;
    }

    // sidebar sections by topic, one per data file; a group in no topic is listed under "More" so it never disappears
    function domainSections() {
      const topics = state.library.topics || [];
      const listed = topics.flatMap(topic => topic.groups);
      return [
        ...topics.map(topic => ({ name: topic.name, groups: topic.groups.map(getCategory).filter(Boolean) })),
        { name: "More", groups: allGroups().filter(group => !listed.includes(group.id)) }
      ].filter(domain => domain.groups.length);
    }

    function renderWelcome() {
      const buttons = groups => groups.map(group => `
        <button type="button" data-open-library="${escapeHtml(group.id)}">
          <span class="category-icon">${iconSvg(groupIcon(group), "category-svg")}</span>
          <span class="welcome-task-name">${escapeHtml(groupLabel(group))}</span>
          <span>${groupSize(group)}</span>
        </button>`).join("");
      document.getElementById("welcomeCategories").innerHTML = buttons(state.library.categories);
      document.getElementById("welcomePacks").innerHTML = buttons(packs());
      document.getElementById("welcomeWorkflows").innerHTML = buttons(workflows());
      renderWelcomeStarters();
      renderWelcomeRecent();
    }

    // hand-picked first prompts for new visitors: Summarize, Reply, Rewrite, Fix Code, What Should I Do?, Brutally Honest Idea Review
    const STARTER_IDS = [3, 81, 13, 93, 143, 240];

    function renderWelcomeStarters() {
      const items = STARTER_IDS.map(promptById).filter(Boolean);
      document.getElementById("welcomeStarters").hidden = items.length === 0;
      document.getElementById("welcomeStartersList").innerHTML = items.map(item => `
        <button type="button" data-open-prompt="${escapeHtml(item.id)}">
          ${iconSvg(item.icon || "sparkles", "category-svg")}<span>${escapeHtml(item.name)}</span>
        </button>`).join("");
    }

    function renderWelcomeRecent() {
      const items = personalPrompts(PERSONAL_VIEWS.recent);
      document.getElementById("welcomeRecent").hidden = items.length === 0;
      document.getElementById("welcomeRecentList").innerHTML = items.map(item => `
        <button type="button" data-open-prompt="${escapeHtml(item.id)}">
          ${iconSvg("clock", "category-svg")}<span>${escapeHtml(item.name)}</span>
        </button>`).join("");
    }

    // the address holds the open category and search, so refreshing, Back and shared links land in the same place
    function libraryHash() {
      const params = new URLSearchParams({ category: state.activeCategory });
      if (state.searchTerm) params.set("q", state.searchTerm);
      return `#${params}`;
    }

    function pushLibraryUrl() {
      if (location.hash !== libraryHash()) history.pushState(null, "", libraryHash());
    }

    // typing a search updates the address without adding a Back step per letter
    function replaceLibraryUrl() {
      history.replaceState(null, "", libraryHash());
    }

    function promptHash(item) {
      return `#${new URLSearchParams({ category: item.category.id, prompt: item.id })}`;
    }

    function openPrompt(id) {
      const item = promptById(id);
      if (!item) return;
      history.pushState(null, "", promptHash(item));
      applyLibraryUrl();
    }

    // a link to one prompt opens it in place and brings it into view
    function revealPrompt(id) {
      const card = els.promptGrid.querySelector(`[data-copy-id="${CSS.escape(id)}"]`);
      if (!card) return;
      card.classList.add("linked");
      if (card.classList.contains("has-more")) {
        card.querySelector(".prompt-text").classList.add("expanded");
        card.querySelector(".prompt-expand").setAttribute("aria-expanded", "true");
      }
      card.scrollIntoView({ block: "center" });
      card.focus({ preventScroll: true });
    }

    function applyLibraryUrl() {
      const params = new URLSearchParams(location.hash.slice(1));
      const category = params.get("category");
      state.activeCategory = getCategory(category) || personalView(category) ? category : "all";
      state.searchTerm = params.get("q") || "";
      els.searchInput.value = state.searchTerm;
      // show the list before drawing it: hidden cards measure as zero, which hides their expand arrows
      els.pageContent.classList.toggle("show-library", params.has("category"));
      renderCategories();
      renderPrompts();
      if (params.has("prompt")) revealPrompt(params.get("prompt"));
    }

    function openLibrary(categoryId, searchTerm = "") {
      const alreadyOpen = libraryShowing();
      state.activeCategory = categoryId;
      state.searchTerm = searchTerm;
      els.searchInput.value = searchTerm;
      // show the list before drawing it: hidden cards measure as zero, which hides their expand arrows
      els.pageContent.classList.add("show-library");
      renderCategories();
      renderPrompts();
      pushLibraryUrl();
      if (alreadyOpen) return;
      // the welcome screen's search box may still have the phone keyboard open
      if (document.activeElement) document.activeElement.blur();
      window.scrollTo(0, 0);
    }

    function bindEvents() {
      els.pageContent.addEventListener("click", async event => {
        const button = event.target.closest("[data-open-library]");
        if (button) openLibrary(button.dataset.openLibrary, button.dataset.search);

        const recentButton = event.target.closest("[data-open-prompt]");
        if (recentButton) openPrompt(recentButton.dataset.openPrompt);

        const copyButton = event.target.closest("[data-copy-prompt]");
        if (!copyButton) return;
        const promptItem = allPrompts().find(item => String(item.id) === copyButton.dataset.copyPrompt);
        try {
          await copyText(promptItem.prompt);
          recordRecent(promptItem);
          showCopiedToast(promptItem.prompt);
        } catch (error) {
          console.error(error);
          showToast("Could not copy prompt");
        }
      });

      document.getElementById("welcomeSearch").addEventListener("submit", event => {
        event.preventDefault();
        const input = document.getElementById("welcomeSearchInput");
        const term = input.value.trim();
        input.value = "";
        openLibrary("all", term);
      });

      window.addEventListener("popstate", () => {
        closeDrawer();
        window.scrollTo(0, 0);
        applyLibraryUrl();
      });

      els.sidebar.addEventListener("click", event => {
        const button = event.target.closest("[data-category-id]");
        if (!button) return;

        state.activeCategory = button.dataset.categoryId;
        renderCategories();
        renderPrompts();
        pushLibraryUrl();

        if (isMobile()) {
          closeDrawer();
          const offset = document.querySelector(".site-header").offsetHeight + els.toolbar.offsetHeight;
          // the section heading is hidden on phones, so aim at the content area itself
          const contentTop = els.contentHeader.parentElement.getBoundingClientRect().top;
          const target = window.scrollY + contentTop - offset - 8;
          window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
        }
      });

      els.catToggle.addEventListener("click", openDrawer);
      els.sidebarClose.addEventListener("click", closeDrawer);
      els.sidebarBackdrop.addEventListener("click", closeDrawer);

      // Edge-swipe: swipe left from the right edge opens the drawer (installed PWA
      // only - a Safari tab uses that gesture for Forward); swipe right closes it.
      const isStandalone = () =>
        window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
      let swipe = null;

      document.addEventListener("touchstart", event => {
        if (!libraryShowing() || !isMobile() || event.touches.length > 1 || isTyping(event.target)) return;
        const t = event.touches[0];
        const open = els.sidebar.classList.contains("open");
        let mode = null;
        if (!open && isStandalone() && t.clientX >= window.innerWidth - 28) mode = "open";
        else if (open) mode = "close";
        if (!mode) return;
        swipe = { mode, x: t.clientX, y: t.clientY, time: Date.now() };
      }, { passive: true });

      document.addEventListener("touchmove", event => {
        if (!swipe) return;
        const t = event.touches[0];
        const dx = t.clientX - swipe.x, dy = t.clientY - swipe.y;
        if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) swipe = null;
      }, { passive: true });

      document.addEventListener("touchend", event => {
        if (!swipe) return;
        const t = event.changedTouches[0];
        const dx = t.clientX - swipe.x, dy = t.clientY - swipe.y;
        const horizontal = Math.abs(dx) > Math.abs(dy);
        const fast = Date.now() - swipe.time < 250;
        if (horizontal && swipe.mode === "open" && (dx < -55 || (fast && dx < -30))) {
          openDrawer();
          navigator.vibrate?.(8);
        } else if (horizontal && swipe.mode === "close" && dx > 45) {
          closeDrawer();
        }
        swipe = null;
      }, { passive: true });

      document.addEventListener("keydown", event => {
        if (event.key === "/" && !isTyping(event.target) && !els.sidebar.classList.contains("open")) {
          event.preventDefault();
          if (!libraryShowing()) openLibrary(state.activeCategory, state.searchTerm);
          els.searchInput.focus();
          els.searchInput.select();
          return;
        }
        if (event.key === "Escape") {
          if (els.sidebar.classList.contains("open")) { closeDrawer(); return; }
          if (document.activeElement === els.searchInput) {
            if (els.searchInput.value) resetSearch();
            else els.searchInput.blur();
          }
        }
      });

      els.toast.addEventListener("click", event => {
        if (event.target.closest(".ai-share")) shareText(copiedText);
        if (event.target.closest("a, .ai-share, .toast-close")) els.toast.hidden = true;
      });

      els.scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      window.addEventListener("scroll", () => {
        els.scrollTop.classList.toggle("show", window.scrollY > 640);
      }, { passive: true });

      window.addEventListener("resize", () => {
        if (!isMobile() && els.sidebar.classList.contains("open")) closeDrawer();
        else syncDrawerInert();
      });

      // phone address bars and keyboards change only the height, which must not close opened prompts
      let clampTimer;
      let lastWidth = window.innerWidth;
      window.addEventListener("resize", () => {
        if (window.innerWidth === lastWidth) return;
        lastWidth = window.innerWidth;
        clearTimeout(clampTimer);
        clampTimer = setTimeout(markClampedCards, 150);
      });

      els.searchInput.addEventListener("input", event => {
        state.searchTerm = event.target.value;
        renderPrompts();
        replaceLibraryUrl();
      });

      els.clearSearch.addEventListener("click", () => {
        els.searchInput.focus();
        resetSearch();
      });

      async function copyCard(card) {
        const id = card.dataset.copyId;
        const promptItem = allPrompts().find(item => String(item.id) === id);
        if (!promptItem) return;
        // prompts with blanks open the fill-in panel instead of copying straight away
        if (blanksIn(promptItem.prompt).length) {
          openFill(promptItem);
          return;
        }

        try {
          await copyText(promptItem.prompt);
          recordRecent(promptItem);
          card.classList.add("copied");
          card.querySelector(".prompt-copy").innerHTML = iconSvg("checklist", "copy-svg");
          // an opened card already shows the tool icons, so the message doesn't repeat them
          if (card.querySelector(".prompt-actions-row").offsetParent) showToast("Prompt copied");
          else showCopiedToast(promptItem.prompt);

          setTimeout(() => {
            card.classList.remove("copied");
            card.querySelector(".prompt-copy").innerHTML = iconSvg("copy", "copy-svg");
          }, 1200);
        } catch (error) {
          console.error(error);
          showToast("Could not copy prompt");
        }
      }

      function toggleCard(card) {
        if (!card.classList.contains("has-more")) return;
        const expanded = card.querySelector(".prompt-text").classList.toggle("expanded");
        card.querySelector(".prompt-expand").setAttribute("aria-expanded", String(expanded));
      }

      els.workflowView.addEventListener("click", async event => {
        const workflow = getCategory(state.activeCategory);
        if (!workflow || !isWorkflow(workflow)) return;

        const tab = event.target.closest("[data-wf-tab]");
        if (tab) {
          workflowTabs.set(workflow.id, tab.dataset.wfTab);
          renderWorkflow(workflow);
          return;
        }

        if (event.target.closest("[data-wf-reset]")) {
          workflowDone(workflow.id).clear();
          renderWorkflow(workflow);
          return;
        }

        const button = event.target.closest("[data-wf-copy]");
        if (!button) return;
        const quick = button.dataset.wfCopy === "quick";
        const index = Number(button.dataset.wfCopy);
        const doneSteps = workflowDone(workflow.id);
        const next = workflow.steps.findIndex((_, i) => !doneSteps.has(i));
        // only the next step, or one already copied, may be copied
        if (!quick && index !== next && !doneSteps.has(index)) return;
        const step = quick ? null : workflowStep(workflow, index);
        const text = quick ? workflowCombined(workflow) : step.text;
        const markDone = () => {
          if (quick) return;
          workflowDone(workflow.id).add(index);
          if (getCategory(state.activeCategory) === workflow) renderWorkflow(workflow);
        };
        // the recent list keeps the original prompt each step uses
        const item = {
          id: quick ? workflow.id : step.source.id,
          name: quick ? `${workflow.name}, all in one` : `Step ${index + 1}: ${step.source.name}`,
          prompt: text,
          category: workflow,
          icon: quick ? workflow.icon : step.source.icon,
          onCopied: markDone
        };
        if (blanksIn(text).length) {
          openFill(item);
          return;
        }
        try {
          await copyText(text);
          recordRecent(item);
          markDone();
          showCopiedToast(text);
        } catch (error) {
          console.error(error);
          showToast("Could not copy prompt");
        }
      });

      els.promptGrid.addEventListener("click", event => {
        const card = event.target.closest(".prompt-card");
        if (!card) return;

        if (event.target.closest(".ai-tool")) {
          copyAndOpen(event, promptById(card.dataset.copyId).prompt, promptById(card.dataset.copyId));
          return;
        }

        if (event.target.closest(".ai-share")) {
          shareText(promptById(card.dataset.copyId).prompt, promptById(card.dataset.copyId));
          return;
        }

        const starBtn = event.target.closest(".prompt-star");
        if (starBtn) {
          const adding = toggleFavorite(card.dataset.copyId);
          starBtn.setAttribute("aria-pressed", String(adding));
          showToast(adding ? "Added to My prompts" : "Removed from My prompts");
          if (state.activeCategory === "favorites") renderPrompts();
          return;
        }

        if (event.target.closest(".prompt-share")) {
          const link = location.href.split("#")[0] + promptHash(promptById(card.dataset.copyId));
          copyText(link).then(() => showToast("Link copied"), () => showToast("Could not copy link"));
          return;
        }

        if (event.target.closest(".prompt-copy")) {
          copyCard(card);
          return;
        }

        // an opened prompt's text stays selectable instead of closing
        if (event.target.closest(".prompt-text.expanded, .prompt-actions-row")) return;
        if (String(window.getSelection())) return;
        toggleCard(card);
      });

      els.promptGrid.addEventListener("keydown", event => {
        if ((event.key === "Enter" || event.key === " ") && event.target.matches(".prompt-card")) {
          event.preventDefault();
          toggleCard(event.target);
        }
      });

      document.getElementById("fillClose").addEventListener("click", () => els.fillDialog.close());
      document.getElementById("fillCopy").addEventListener("click", () => copyFromFill(fillPrompt(fillItem.prompt)));
      document.getElementById("fillRaw").addEventListener("click", () => copyFromFill(fillItem.prompt));
      document.getElementById("fillOpen").innerHTML = `<span>Copy and open in</span>${aiToolLinks()}`;
      document.getElementById("fillOpen").addEventListener("click", event => {
        if (!event.target.closest(".ai-tool, .ai-share")) return;
        const filled = fillPrompt(fillItem.prompt);
        const toolId = event.target.closest(".ai-tool")?.dataset.tool;
        const tool = AI_TOOLS.find(entry => entry.id === toolId);
        if (tool?.sends && blanksIn(filled).length) {
          event.preventDefault();
          els.fillLeft.textContent = `Fill in the blanks first, ${tool.name} sends right away`;
          return;
        }
        // close first: the copy needs the page, which the open dialog makes inert
        els.fillDialog.close();
        if (event.target.closest(".ai-share")) shareText(filled, fillItem);
        else copyAndOpen(event, filled, fillItem);
        fillItem.onCopied?.();
      });
      els.fillDialog.addEventListener("click", event => {
        if (event.target === els.fillDialog) els.fillDialog.close();
      });

      // paste blanks keep a text box below the prompt
      els.fillFields.addEventListener("input", event => {
        if (!event.target.dataset.blank) return;
        setBlank(event.target.dataset.blank, event.target.value);
        updateFill();
      });

      // keep focus in the inline edit box while chips, pencils or blanks are clicked
      els.fillDialog.addEventListener("mousedown", event => {
        if (event.target.closest("[data-pick], [data-edit], .fill-preview [data-slot]:not(.fill-edit)")) event.preventDefault();
      });

      // a chip fills its blank without opening the phone keyboard; clicking the chosen chip clears it
      els.fillFields.addEventListener("click", event => {
        const chip = event.target.closest("[data-pick]");
        const pen = event.target.closest("[data-edit]");
        if (pen) {
          if (editingBlank === pen.dataset.edit) finishEdit();
          else startEdit(pen.dataset.edit);
          return;
        }
        if (!chip) return;
        const blank = chip.closest(".fill-field").dataset.field;
        setBlank(blank, chip.getAttribute("aria-pressed") === "true" ? "" : chip.dataset.pick);
        editingBlank = null;
        updateFill();
      });

      els.fillPreview.addEventListener("click", event => {
        const slot = event.target.closest("[data-slot]:not(.fill-edit)");
        if (slot) startEdit(slot.dataset.slot);
      });

      // typing in the prompt updates the value, the chips and any repeat of the same blank
      els.fillPreview.addEventListener("input", event => {
        const box = event.target.closest(".fill-edit");
        if (!box) return;
        const blank = box.dataset.slot;
        setBlank(blank, box.textContent);
        els.fillPreview.querySelectorAll(`[data-slot="${CSS.escape(blank)}"]:not(.fill-edit)`).forEach(slot => {
          slot.outerHTML = slotHtml(blank, false);
        });
        updateFillCount();
      });

      els.fillPreview.addEventListener("keydown", event => {
        if (!event.target.closest(".fill-edit")) return;
        if (event.key === "Enter" || event.key === "Escape") {
          event.preventDefault();
          finishEdit();
        }
      });

      els.fillPreview.addEventListener("paste", event => {
        if (!event.target.closest(".fill-edit")) return;
        event.preventDefault();
        document.execCommand("insertText", false, event.clipboardData.getData("text/plain").replace(/\s+/g, " "));
      });

      // wait a tick: switching to another blank moves focus to a new edit box, which should not end editing
      els.fillPreview.addEventListener("focusout", event => {
        if (!event.target.closest(".fill-edit")) return;
        setTimeout(() => {
          if (!document.activeElement?.closest(".fill-edit")) finishEdit();
        });
      });

      els.colorToggle.addEventListener("click", () => toggleColorMenu(els.colorMenu.hidden));
      els.colorSwatches.addEventListener("click", event => {
        const swatch = event.target.closest("[data-color-id]");
        if (swatch) setColor(swatch.dataset.colorId);
      });
      document.addEventListener("click", event => {
        if (!els.colorMenu.hidden && !event.target.closest(".color-picker")) toggleColorMenu(false);
      });
      document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !els.colorMenu.hidden) {
          toggleColorMenu(false);
          els.colorToggle.focus();
        }
      });

      els.themeToggle.addEventListener("click", () => {
        const current = document.documentElement.dataset.theme;
        setTheme(current === "dark" ? "light" : "dark");
      });
    }

    function init() {
      if (!state.library || !Array.isArray(state.library.categories) || !state.library.categories.length) {
        els.libraryMeta.textContent = "Prompt library unavailable";
        els.promptGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${iconSvg("risk", "ui-svg")}</div>
        <h3>Library could not be loaded</h3>
        <p>Something went wrong loading the prompt data. Refreshing the page usually fixes it.</p>
      </div>`;
        return;
      }

      const total = allPrompts().length;
      const packCount = packs().length;
      els.libraryMeta.textContent =
        `${total} prompts · ${state.library.categories.length} categories` +
        (packCount ? ` · ${packCount} pack${packCount === 1 ? "" : "s"}` : "") +
        (workflows().length ? ` · ${workflows().length} workflows` : "") +
        ` · v${state.library.version}`;
      els.heroCtaCount.textContent = String(total);
      if (els.heroDescCount) els.heroDescCount.textContent = String(total);

      renderWelcome();
      applyLibraryUrl();
    }

    // the data is split over several files, so check they fit together; problems go to the console
    function checkLibrary() {
      const failed = state.library.loadErrors || [];
      if (failed.length) {
        // with a file missing, every other check would only repeat the same problem
        console.error("Prompt data files that did not load:", failed);
        showToast("Some prompts did not load. Refresh the page to try again.");
        return;
      }
      const seen = new Set();
      allPrompts().forEach(item => {
        if (seen.has(String(item.id))) console.warn(`Prompt id ${item.id} is used more than once`);
        seen.add(String(item.id));
      });
      // the description tags are typed by hand, so warn when their count no longer matches the library
      const typedCount = (document.querySelector('meta[name="description"]')?.content.match(/^\d+/) || [])[0];
      if (typedCount && Number(typedCount) !== seen.size) {
        console.warn(`The description tags say ${typedCount} prompts but the library has ${seen.size}. Update them in prompts.html, manifest.json and assets/hub.js.`);
      }
      const groupIds = [...allGroups(), ...workflows()].map(group => group.id);
      groupIds.filter((id, index) => groupIds.indexOf(id) !== index).forEach(id => console.warn(`Group id "${id}" is used more than once`));
      workflows().forEach(flow => (flow.steps || []).forEach((step, index) => {
        if (!seen.has(String(step.prompt))) console.warn(`Workflow "${flow.id}" step ${index + 1} names prompt ${step.prompt}, which does not exist`);
      }));
    }

    initTheme();
    initColor();
    bindEvents();
    init();
    if (state.library && state.library.categories && state.library.categories.length) checkLibrary();
    syncDrawerInert();
