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
  // Tags cut across the categories. Each key is a tag (shown in this order) and each list is
  // the prompt ids carrying it. A prompt can have several tags; one with none shows no chips.
  "tags": {
    "debug": [92, 93, 100, 116, 117, 188, 197, 245],
    "brainstorm": [145, 190, 196, 167, 238, 239, 169, 189, 172, 173],
    "dev": [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 218, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 241, 242, 243, 244, 245],
    "review": [107, 105, 106, 244, 240, 150, 151, 152, 149, 50, 52, 231, 232, 233, 234, 235, 198, 237],
    "rewrite": [11, 12, 13, 14, 15, 16, 17, 18, 20, 23, 24, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
    "extract": [3, 4, 5, 46, 47, 56, 69, 71, 72, 118, 187, 137, 138, 139, 140, 141],
    "plan": [153, 154, 155, 156, 157, 158, 159, 75, 229, 217, 134, 191],
    "learn": [119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 130, 209, 2, 7, 8, 10]
  },
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
