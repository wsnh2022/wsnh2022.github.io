# Claude Code Rules

## Project
Personal portfolio website. Pure static HTML/CSS/JS, no framework, no build step.

Key pages: `index.html` (home), `experience.html`, `projects.html`, `design.html`

Preview by opening `.html` files directly in browser, no dev server needed.

Deploy by running `gitsync.bat` (handles git add, commit, push).

## Commits
- Never add `Co-Authored-By: Claude` or any Anthropic co-author line to commit messages.

## Agents
- Never use `isolation: "worktree"` on agents. It creates stale branches and folders that need manual cleanup.

## Writing Style
- Never use em dashes (—). Use a comma, period, or rewrite the sentence instead.

## General
- Do not create new files unless explicitly asked. All content lives in the existing HTML files.
