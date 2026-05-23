# prompts.html — Improvement Roadmap

> Quick prompt recollection and usage tool hosted at `wsnh2022.github.io/prompts/`  
> Stack: Pure HTML + CSS + Vanilla JS — no build step, no dependencies

---

## Current State — Phase 1 ✅ Complete

- 9 category cards in a 3-column responsive grid
- 170 prompts total across all categories
- Each row: `/command` (left col) | `description` (right col)
- Click any command → copies full structured prompt with `[placeholders]` to clipboard
- SVG icons in every category header
- Dark theme matching Claude Commands reference card style
- Mobile responsive (3-col → 2-col → 1-col)
- Toast notification on copy
- Google Fonts: Inter + JetBrains Mono

---

## Dead Weight to Remove — Before Phase 2

These elements take up space but add zero value to quick prompt recollection:

| Element | Location | Reason to Remove |
|---|---|---|
| `HOW TO USE` box | Top-right header | Self-evident — users know to click and paste |
| Description paragraph | Below subtitle | Nobody reads intro text on a reference tool |
| `"Complete Reference Guide"` subtitle | Below title | Redundant — the page itself is the guide |
| `TIPS` section | Bottom of page | Generic tips ("be specific") don't help with quick lookup |

**Estimated space recovered:** ~15–20% vertical space freed up, cleaner first impression.

---

## Phase 2 — Remove Clutter + Search + Category Nav

**Goal:** Make it fast to find any of the 170 prompts instantly.

### 2a — Remove dead weight (listed above)

### 2b — Live Search Bar
- Sticky bar below the header
- Type to filter cards/rows in real time
- Matches against command name AND description
- Keyboard shortcut: press `/` anywhere on the page to focus the search
- Press `Escape` to clear search and show all
- Show a "no results" state if nothing matches

### 2c — Category Jump Nav
- Horizontal scrollable pill buttons below the search bar
- One pill per category: `All · Thinking · Writing · Code · Research · Planning · Business · Creative · Communication · Utility`
- Clicking `All` resets to show everything
- Clicking a category hides all other cards (or scrolls to that section)
- Active pill is highlighted in that category's colour
- On mobile: horizontal scroll with no wrap

### 2d — Fix Toast Message
- Currently says: `"Prompt copied!"`
- Change to: `"Copied /debug"` — shows which command was copied so user knows exactly what they got

---

## Phase 3 — Favourites + Polish

**Goal:** Resurface the prompts you use most, faster.

### 3a — Favourites / Bookmarks
- Small star icon on hover next to each command name
- Click star → prompt is saved to `localStorage` as a favourite
- Add a `★ Favourites` category pill in the nav that filters to only starred prompts
- Starred state persists across sessions (no login needed)
- Max ~20 favourites before oldest is auto-dropped (or user clears manually)

### 3b — Prompt Count Badge
- Small number badge on each category card header e.g. `CODE & DEVELOPMENT (20)`
- Updates dynamically when search is active (e.g. shows `CODE & DEVELOPMENT (3)` when filtered)

### 3c — Copy History (session only)
- Small `Recently copied` row above the grid (max 5 entries)
- Shows the last 5 command names clicked this session
- Click any to re-copy immediately
- Clears on page refresh (no persistence needed)

---

## Phase 4 — Personal Prompts Collection

**Goal:** Add the custom prompts from `ai-prompts-master.md` to the same page.

### Source file
```
D:\Library\Code_Env\Github\insta2mdbot-notes\01-ai-and-tech\ai-prompts\ai-prompts-master.md
```

### 12 categories to add
| # | Category | Prompt count |
|---|---|---|
| 1 | Thinking & Problem Solving | 14 |
| 2 | Learning & Education | 15 |
| 3 | Writing & Copywriting | 11 |
| 4 | Content Strategy & SEO | 12 |
| 5 | Social Media Growth | 6 |
| 6 | Business & Founders | 27 |
| 7 | Productivity & Planning | 17 |
| 8 | Code & Development | 13 |
| 9 | Career & Profile | 11 |
| 10 | Personal Development | 20 |
| 11 | AI Image Editing | 9 |
| 12 | Claude Configuration | 1 |

### Implementation plan
- Add a **tab switcher** at the top: `[ Universal Prompts ] [ My Collection ]`
- Universal Prompts = current 9-category grid (Phase 1–3)
- My Collection = personal prompts from `ai-prompts-master.md`
- Personal prompts display the full prompt text on click (already full text, no `/command` format)
- Both tabs share the same search bar and category nav

---

## File Locations

| File | Path |
|---|---|
| Live page | `D:\Library\Code_Env\Github\yogi-porfolio\prompts.html` |
| Source prompts | `D:\Library\Code_Env\Github\insta2mdbot-notes\01-ai-and-tech\ai-prompts\ai-prompts-master.md` |
| This roadmap | `D:\Library\Code_Env\Github\yogi-porfolio\docs\prompts-roadmap.md` |

---

## Hosting

- Repo: `wsnh2022/yogi-porfolio` (or `wsnh2022/prompts`)
- GitHub Pages: Settings → Pages → Branch: main → / (root)
- URL: `https://wsnh2022.github.io/prompts/` (if repo is named `prompts`)

---

_Last updated: 2026-05-23_
