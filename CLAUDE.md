# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project
Personal portfolio website plus a set of standalone browser tools. Pure static HTML/CSS/JS, no framework, no build step, no tests, no linter.

This repo's remote is `wsnh2022/wsnh2022.github.io`, so the repo root is the live site root (`https://wsnh2022.github.io/<file>.html`). Pushing to `main` deploys.

Key pages: `index.html` (home), `experience.html`, `projects.html`, `design.html`

Standalone tools (each fully self-contained, 80-180 KB of inline CSS/JS): `prompts.html`, `vibecode.html`, `agentic-ai.html`, `sql-reference.html`, `ahkmenu.html`, `pin-annotator_v8.html`, `morning-affirmation.html`. `library.html` is the index page that lists them.

## Commands
- Preview: open `.html` files directly in a browser. Exception: `prompts.html` registers a service worker, which only works over http, so use the `prompts.html` config in `.claude/launch.json` (`npx serve -p 3456 .`, which serves the page at `/prompts`).
- `npm run dev` / `npm run preview` start Vite (ports 5173 / 4173). There is no `vite.config`, so it is just a static server. `README.md` documents this, but it is not needed for normal work.
- Deploy: run `gitsync.bat`. It fetches, pulls if remote is ahead, runs `git add -A`, commits as `Update <first_file>` (plus `and N more files`), pushes, and appends to `deploy-log.txt` (gitignored). Everything uncommitted goes live, so check `git status` first.

## Architecture
- Pages do not share CSS or JS. The main pages (`index`, `experience`, `projects`, `design`, `library`, `vibecode`) load Tailwind and Font Awesome from CDNs; the tools mostly use their own inline styles. Shared look is by convention, so a style change usually has to be repeated per page.
- `assets/hub.js` is the single registry of standalone pages (`PAGES` array, grouped by `GROUPS`). `library.html` draws its cards from `window.HUB`, and any page that includes `<script src="assets/hub.js" defer>` gets a floating "More from Yoghesh" button. To add a tool, add one entry to `PAGES` and include the script in the new page.
- `prompts.html` (AI Prompt Library) keeps all its data inline in `window.PROMPT_LIBRARY`: a `categories` array (the base prompts) and a `packs` array (themed collections, currently Personal tutor, Prompt improver, Image generation). The renderer, `ICON_PATHS` and `CATEGORY_ICONS` live in the page's second `<script>` block.
- `sw.js` is network-first for page navigations and only caches the `prompts.html` shell for offline use. `manifest.json` is the PWA manifest for that page.

### Adding a prompt pack
Append to `packs` in `window.PROMPT_LIBRARY` with fields `id`, `name`, `icon`, `description`, `prompts[{id, name, purpose, prompt, icon}]`. Prompt ids continue from the last used id. Text in `[blanks]` is highlighted automatically. New icons go in `ICON_PATHS`. Check that each pasted `purpose` line matches its prompt.

The prompt total is typed by hand in several places and drifts. After adding prompts, update: the three description meta tags in `prompts.html` (`description`, `og:description`, `twitter:description`), the `#heroDescCount` fallback, the `description` in `manifest.json`, and the blurb in `assets/hub.js`.

## Gotchas
- The old "My Collection" data (`data/` and `embed-prompts.ps1`) was removed and archived at `D:\Library\Code_Env\Archieve\portfolio-old-prompts\`. `gitsync.bat` still has a step for `embed-prompts.ps1`, but it skips itself when the file is missing. `docs/prompts-roadmap.md` describes that old design.
- `prompts.html` has a stale `og:url` pointing at `/yogi-porfolio/prompts.html`. The real URL is `https://wsnh2022.github.io/prompts.html`.
- `README.md` is partly out of date (file tree, filenames). Trust the actual files over it.

## Commits
- Never add `Co-Authored-By: Claude` or any Anthropic co-author line to commit messages.

## Agents
- Never use `isolation: "worktree"` on agents. It creates stale branches and folders that need manual cleanup.

## Writing Style
- Never use em dashes (—). Use a comma, period, or rewrite the sentence instead.

## General
- Do not create new files unless explicitly asked. All content lives in the existing HTML files.
