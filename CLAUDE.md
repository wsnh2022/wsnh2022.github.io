# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project
Personal portfolio website plus a set of standalone browser tools. Pure static HTML/CSS/JS, no framework, no build step, no tests, no linter.

This repo's remote is `wsnh2022/wsnh2022.github.io`, so the repo root is the live site root (`https://wsnh2022.github.io/<file>.html`). Pushing to `main` deploys.

Key pages: `index.html` (home), `experience.html`, `projects.html`, `design.html`

Standalone tools (each fully self-contained, 80-180 KB of inline CSS/JS): `vibecode.html`, `agentic-ai.html`, `sql-reference.html`, `ahkmenu.html`, `pin-annotator_v8.html`, `morning-affirmation.html`. `prompts.html` is the exception: its styles, code and data live in `assets/prompts/`. `library.html` is the index page that lists them.

## Commands
- Preview: open `.html` files directly in a browser. `prompts.html` also works that way, but its service worker (offline mode) only runs over http, so to test that use the `prompts.html` config in `.claude/launch.json` (`npx serve -p 3456 .`, which serves the page at `/prompts`).
- `npm run dev` / `npm run preview` start Vite (ports 5173 / 4173). There is no `vite.config`, so it is just a static server. `README.md` documents this, but it is not needed for normal work.
- Deploy: run `gitsync.bat`. It fetches, pulls if remote is ahead, runs `git add -A`, commits as `Update <first_file>` (plus `and N more files`), pushes, and appends to `deploy-log.txt` (gitignored). Everything uncommitted goes live, so check `git status` first.

## Architecture
- Pages do not share CSS or JS. The main pages (`index`, `experience`, `projects`, `design`, `library`, `vibecode`) load Tailwind and Font Awesome from CDNs; the tools mostly use their own inline styles. Shared look is by convention, so a style change usually has to be repeated per page.
- `assets/hub.js` is the single registry of standalone pages (`PAGES` array, grouped by `GROUPS`). `library.html` draws its cards from `window.HUB`, and any page that includes `<script src="assets/hub.js" defer>` gets a floating "More from Yoghesh" button. To add a tool, add one entry to `PAGES` and include the script in the new page.
- `prompts.html` (AI Prompt Library) holds only the page layout. Everything else is in `assets/prompts/`, loaded by plain `<script>`/`<link>` tags (not fetch, so the page still works when opened straight from disk): `styles.css`, `app.js` (renderer, search, side panel, copy), `icons.js` (`ICON_PATHS`, `CATEGORY_ICONS`), `welcome-wave.js` (three.js dot wave), and `data/`. One CSS rule (`.palette-svg`, which uses `url(#paletteGrad)`) stays inline in the page, because some browsers resolve `url(#...)` against the stylesheet file.
- Prompt data lives in `window.PROMPT_LIBRARY`, built by the files in `assets/prompts/data/`, loaded in this order: `library.js` (name, version, empty arrays, the `addTopic()` helper), then one file per sidebar topic (`understand-learn.js`, `write-communicate.js`, `think-decide.js`, `work-business.js`, `code-data.js`), then `workflows.js`. Each topic file calls `PROMPT_LIBRARY.addTopic("Topic name", [groups])`; the groups are listed in sidebar order, and a pack (multi-step series, currently Personal tutor, Language learning, Resume makeover) has `"kind": "pack"`, everything else is a category. The topic files set the sidebar headings and the order of categories everywhere (welcome grid, All Prompts, search results). A group in no topic shows under "More".
- `app.js` checks the data on load and warns in the browser console about a prompt id used twice, a duplicate group id, or a workflow step that names a missing prompt. If a data file fails to load (missing, or a typing mistake), its topic is left out, the console names the file, and the page shows "Some prompts did not load".
- `sw.js` is network-first for page navigations (any page falls back to the `prompts.html` shell offline) and precaches every file in `assets/prompts/` (`FILES` list), always checking the server for newer copies and using the saved ones offline. `manifest.json` is the PWA manifest for that page.

### Adding a file to assets/prompts/
Add its tag to `prompts.html` in the right load order and its path to `FILES` in `sw.js`, then bump `CACHE` in `sw.js`. A new topic file needs nothing else: its heading comes from its `addTopic()` call.

### Tags
`PROMPT_LIBRARY.tags` in `assets/prompts/data/library.js` maps each tag (`debug`, `brainstorm`, `dev`, `review`, `rewrite`, `extract`, `plan`, `learn`) to the prompt ids that carry it, in the order the filter chips show. A prompt can sit in several tags or none. `app.js` builds the chips, the filter and tag search from it, and warns in the console about an id that does not exist. When you add a prompt, add its id to the tags it fits. Packs and workflows carry no tags.

### Adding prompts
A single prompt, even a long fill-in one, goes into the category that matches its topic, in that topic's file in `assets/prompts/data/` (a `purpose` line is optional there). Do not make a one-prompt pack. Prompt ids are numbers shared by every data file; a new prompt takes the highest id plus one (`grep -ho '"id": [0-9]*' assets/prompts/data/*.js | sort -t' ' -k2 -n | tail -1`).

A pack is only for a series of prompts that build on each other. Add it to the matching topic file with fields `id`, `kind: "pack"`, `name`, `icon`, `description`, `prompts[{id, name, purpose, prompt, icon}]`, placed where it should sit in the sidebar. Prompt ids continue from the highest used id. Text in `[blanks]` is highlighted automatically. New icons go in `ICON_PATHS` in `assets/prompts/icons.js`. Check that each pasted `purpose` line matches its prompt.

A workflow chains prompts that already exist, run one after another in the same chat. Append to `assets/prompts/data/workflows.js` with fields `id`, `name`, `icon`, `description`, `takeaway` (shown when every step is copied) and `steps[{prompt, why, check, input?, fill?}]`, where `prompt` is an existing prompt id. Workflows add no prompts, so the totals below don't change. From step 2 on, the page swaps the prompt's last label line (like `Text:`) for `Text: the original text and your previous answers above.`; set `input` to say something more exact, and `fill` (`{"blank text": "replacement"}`) to fill a blank from an earlier answer. If the prompt has no label line, `input` is added as a new last paragraph. Workflows list under their own "Workflows" heading in the sidebar, so they don't go in a topic file. A search also matches workflows by name, description and step prompt names, shown above the matching prompts. Steps unlock in order: only the next step (or one already copied) can be copied. Keep them to 3 or 4 steps.

The prompt total is typed by hand in several places and drifts. After adding prompts, update: the three description meta tags in `prompts.html` (`description`, `og:description`, `twitter:description`), the `#heroDescCount` and `#heroCtaCount` fallbacks, the `description` in `manifest.json`, and the blurb in `assets/hub.js`.

## Gotchas
- The old "My Collection" data (`data/` and `embed-prompts.ps1`) was removed and archived at `D:\Library\Code_Env\Archieve\portfolio-old-prompts\`. `gitsync.bat` still has a step for `embed-prompts.ps1`, but it skips itself when the file is missing. `docs/prompts-roadmap.md` describes that old design.
- `README.md` is partly out of date (file tree, filenames). Trust the actual files over it.

## Commits
- Never add `Co-Authored-By: Claude` or any Anthropic co-author line to commit messages.

## Agents
- Never use `isolation: "worktree"` on agents. It creates stale branches and folders that need manual cleanup.

## Writing Style
- Never use em dashes (—). Use a comma, period, or rewrite the sentence instead.

## General
- Do not create new files unless explicitly asked. All content lives in the existing HTML files.
