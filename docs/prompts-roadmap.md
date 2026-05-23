# prompts.html — Improvement Roadmap

> Quick prompt recollection and usage tool hosted at `wsnh2022.github.io/prompts/`
> Stack: Pure HTML + CSS + Vanilla JS — no build step, no dependencies

---

## Phase 1 ✅ Complete

- 9 category cards in a 3-column responsive grid
- 170 prompts across all categories
- Each row: `/command` (left) | `description` (right)
- Click any command → copies full structured prompt to clipboard
- SVG icons in every category header
- Dark theme, mobile responsive (3-col → 2-col → 1-col)
- Toast notification on copy
- Google Fonts: Inter + JetBrains Mono

---

## Phase 2 ✅ Complete

- Removed dead weight: HOW TO USE box, subtitle, description paragraph, TIPS section
- Live search bar (sticky, filters cards in real time, matches name + description)
- Keyboard shortcut: `/` to focus search, `Escape` to clear
- Category pill nav (color-coded, horizontal scroll on mobile)
- Toast fixed: now shows `Copied /command` instead of generic message

---

## Phase 4 ✅ Complete

- "My Collection" tab — 157 personal prompts across 12 categories
- Data source: `data/my-prompts.md` in repo (plain markdown, no YAML needed)
- Auto-embed pipeline: edit `.md` → run `gitsync.bat` → site updates automatically
- `embed-prompts.ps1` splices markdown into `prompts.html` before each commit
- Clicking a prompt opens a modal with full text + `[PLACEHOLDER]` highlighting
- Modal: category label, title, scrollable body, Copy button, spring animation
- Search and category pills work identically on both tabs
- Works with `file://` (no server needed) — data is embedded inline

### Update workflow
1. Edit `data/my-prompts.md` — add prompts using this format:
```
## Category Name

**Prompt title**
> Prompt text here.
> Continues on next line.
```
2. Run `gitsync.bat` — embed script runs automatically before commit
3. Done. New prompts appear on next page load.

### Adding a new category (3 touch-points in prompts.html)
1. Add `## New Category` section to `data/my-prompts.md`
2. Add entry to `COL_META` JS object (color + icon)
3. Add pill button to `#collection-pills` HTML block

---

## Phase 3 — Favourites + Polish

**Goal:** Resurface the prompts you use most, faster.

### 3a — Favourites / Bookmarks
- Small star icon on hover next to each command name
- Click star → saved to `localStorage`
- Add a `Favourites` pill that filters to only starred prompts
- Persists across sessions (no login needed)

### 3b — Prompt Count Badge
- Badge on each card header e.g. `CODE & DEVELOPMENT (20)`
- Updates dynamically when search is active e.g. `(3 of 20)`

### 3c — Copy History (session only)
- `Recently copied` strip above the grid (max 5 entries)
- Click any to re-copy immediately
- Clears on page refresh

---

## Known Issues + Quick Fixes

### Empty space in My Collection cards
- **Problem:** CSS grid stretches all cards in a row to match the tallest one, leaving blank space at the bottom of shorter cards
- **Fix:** Add `align-items: start` to the `.grid` rule (or the outer grid container for `#collection-grid`)
- **Status:** Pending

---

## GitHub Pages — Suggested Improvements

These are possible improvements now that the page is live and publicly hosted.

| # | Improvement | Effort | Value |
|---|---|---|---|
| 1 | **Fix card empty space** | 1 line CSS | High — looks unpolished |
| 2 | **URL hash tabs** | ~10 lines JS | Medium — link directly to `prompts.html#collection` |
| 3 | **Prompt count in header** | ~5 lines JS | Medium — "157 prompts across 12 categories" shown live |
| 4 | **OG / meta tags** | ~6 lines HTML | Medium — proper preview when link is shared |
| 5 | **Keyboard nav in modal** | ~15 lines JS | Medium — arrow keys to previous/next prompt |
| 6 | **Mobile modal full-screen** | ~5 lines CSS | High — modal is cramped on small screens |
| 7 | **Prompt count badge on card headers** | Phase 3b | Low-medium |
| 8 | **Favourites (localStorage)** | Phase 3a | High if used daily |
| 9 | **Print / export as PDF** | ~10 lines JS | Low |
| 10 | **Last updated date** | 1 line HTML | Low — trust signal |

---

## File Locations

| File | Path |
|---|---|
| Live page | `D:\Library\Code_Env\Github\yogi-porfolio\prompts.html` |
| My Collection source | `D:\Library\Code_Env\Github\yogi-porfolio\data\my-prompts.md` |
| Embed script | `D:\Library\Code_Env\Github\yogi-porfolio\embed-prompts.ps1` |
| This roadmap | `D:\Library\Code_Env\Github\yogi-porfolio\docs\prompts-roadmap.md` |

---

## Hosting

- Repo: `wsnh2022/yogi-porfolio`
- GitHub Pages: Settings → Pages → Branch: main → / (root)
- URL: `https://wsnh2022.github.io/yogi-porfolio/prompts.html`

---

_Last updated: 2026-05-23_
