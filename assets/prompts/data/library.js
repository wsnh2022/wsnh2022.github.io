// Prompt library data for prompts.html. This file runs first and sets up the
// shared object; each topic file then adds its groups with addTopic(), and
// workflows.js adds the workflows. prompts.html loads them in that order.
window.PROMPT_LIBRARY = {
  "library_id": "selected_text_ai_menu",
  "name": "Selected Text AI Menu - Master Prompt Library",
  "version": "2.0",
  "categories": [],
  "packs": [],
  "workflows": [],
  "topics": [],
  "loadErrors": [],
  "prompt_guidelines": {
    "default_behavior": "Perform the requested action on the user's question, request, or provided content. Use only relevant context and avoid unrelated work.",
    "source_integrity": "Do not invent facts, details, claims, names, dates, owners, or context. Distinguish stated information from inference and label uncertainty when relevant.",
    "output_focus": "Return the requested result in the format and depth appropriate to the action. Do not add commentary unless it improves the requested result."
  },
  "icon_system": {"style": "monochrome-outline", "size": "large", "interaction": "hover", "purpose": "semantic memory cue"}
};

// adds one sidebar topic; groups marked "kind": "pack" go to packs, the rest to categories
PROMPT_LIBRARY.addTopic = function (name, groups) {
  groups.forEach(({ kind, ...group }) => (kind === "pack" ? this.packs : this.categories).push(group));
  this.topics.push({ name, groups: groups.map(group => group.id) });
};

// a data file with a typing mistake fails on its own; note it so the page can say so
window.addEventListener("error", event => {
  if (/\/assets\/prompts\/data\//.test(event.filename || "")) PROMPT_LIBRARY.loadErrors.push(event.filename);
});
