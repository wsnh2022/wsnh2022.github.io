// Code & data: the prompt categories and packs listed under this heading in the
// prompts.html sidebar, in sidebar order. A pack (a series of prompts that build
// on each other) has "kind": "pack". Prompt ids are shared by every data file.
PROMPT_LIBRARY.addTopic("Code & data", [
  {
    "id": "coding_developer_workflows",
    "name": "Coding & developer workflows",
    "tier": 8,
    "prompts": [
      {
        "id": 91,
        "name": "Explain Code",
        "prompt": "Explain step by step what the code below does. Don't change it.\n\nCode:",
        "icon": "code"
      },
      {
        "id": 92,
        "name": "Find Bug",
        "prompt": "Find likely bugs or incorrect behavior in the code below and explain why each is a problem. Don't report style preferences as bugs.\n\nCode:",
        "icon": "bug"
      },
      {
        "id": 93,
        "name": "Fix Code",
        "prompt": "Fix the code below with the smallest change that works, keeping its intended behavior. Return the corrected code with only essential explanation.\n\nThe problem: [paste or type the error or wrong behavior]\n\nCode:\n[paste your code]",
        "icon": "wrench"
      },
      {
        "id": 94,
        "name": "Improve Code",
        "prompt": "Improve the readability, maintainability, and correctness of the code below without a redesign or unnecessary behavior changes. Return the code with brief notes where useful.\n\nCode:",
        "icon": "wrench"
      },
      {
        "id": 95,
        "name": "Refactor",
        "prompt": "Refactor the code below while keeping its behavior and interfaces the same, unless a change is unavoidable (say so if it is). Return the refactored code.\n\nCode:",
        "icon": "refresh-text"
      },
      {
        "id": 96,
        "name": "Optimize",
        "prompt": "Find and make meaningful performance improvements to the code below without changing its intended behavior. Skip micro-optimizations with little benefit.\n\nCode:",
        "icon": "performance"
      },
      {
        "id": 97,
        "name": "Add Error Handling",
        "prompt": "Add error handling to the code below for failures that can actually happen. Don't hide errors silently.\n\nCode:",
        "icon": "error-handling"
      },
      {
        "id": 98,
        "name": "Add Validation",
        "prompt": "Add input validation to the code below based on what it actually expects. Don't invent arbitrary rules.\n\nCode:",
        "icon": "validation"
      },
      {
        "id": 99,
        "name": "Add Tests",
        "prompt": "Write tests for the code below covering normal behavior and important edge cases. Match its language and any test framework it already uses. Flag anything you had to assume about what it should do.\n\nCode:",
        "icon": "test"
      },
      {
        "id": 100,
        "name": "Explain Error",
        "prompt": "Explain the error below: what it means, its likely cause, and how to fix it. Separate confirmed facts from likely causes.\n\nError:",
        "icon": "bug"
      },
      {
        "id": 101,
        "name": "Generate Documentation",
        "prompt": "Write clear technical documentation for the code below. Don't invent behavior, parameters, examples, or guarantees it doesn't support.\n\nCode:",
        "icon": "document"
      },
      {
        "id": 102,
        "name": "Add Comments",
        "prompt": "Add comments to the code below explaining only non-obvious logic, assumptions, and important decisions. Don't restate what the code plainly does.\n\nCode:",
        "icon": "comments"
      },
      {
        "id": 103,
        "name": "Convert Language",
        "prompt": "Convert the code below to [programming language], keeping its behavior and edge-case handling as far as the language allows. Don't invent dependencies that don't exist.\n\nCode:",
        "icon": "convert"
      },
      {
        "id": 104,
        "name": "Convert Framework",
        "prompt": "Adapt the code below to [framework or library], changing only what is needed and keeping its intended behavior. Briefly state any incompatibilities you can't avoid.\n\nCode:",
        "icon": "convert"
      },
      {
        "id": 105,
        "name": "Security Review",
        "prompt": "Review the code below for security vulnerabilities and explain the risk of each. Separate confirmed vulnerabilities from potential concerns, and don't overstate severity.\n\nCode:",
        "icon": "shield"
      },
      {
        "id": 106,
        "name": "Edge Cases",
        "prompt": "Find realistic edge cases the code below may not handle correctly, focusing on ones that affect correctness, security, reliability, or users.\n\nCode:",
        "icon": "risk"
      },
      {
        "id": 107,
        "name": "Code Review",
        "prompt": "Do a senior-level review of the code below, prioritizing correctness, reliability, security, maintainability, and design. Skip style nitpicks that don't affect those.\n\nCode:",
        "icon": "review"
      },
      {
        "id": 108,
        "name": "Explain Architecture",
        "prompt": "Explain the architecture and design decisions in the code below. Separate what you can see from what you are inferring about intent.\n\nCode:",
        "icon": "architecture"
      },
      {
        "id": 218,
        "name": "Repo Reality Check",
        "purpose": "What a repo does, how it works, its rivals, and whether it's worth your time",
        "prompt": "Repo: [GitHub repo URL]\nMy goal: [your goal] (pick one: just understand it, use it, build on it, contribute, build a competitor. If none is picked, assume just understand it.)\n\nOpen and read the repo before answering: the README, the dependency files (package.json, requirements.txt, Cargo.toml, etc.), the folder structure, and the commit history. If you can't access it, say so and stop. Don't guess from the repo name.\n\n1. What it is: In 2-3 sentences, what problem it solves and who it's for.\n\n2. Tech stack: Languages, frameworks, databases, AI models or APIs, hosting, and key libraries. Name the file where you found each one.\n\n3. How it works: The main parts of the project and what each does, how a typical request or action flows through them, and the 3-5 files to read first to understand the code.\n\n4. Competitors: The closest existing tools with the same core features. Split them into paid products and free/open-source projects. For each, give a link and one line on how it compares. Only list tools you're confident exist.\n\n5. Real product or vibe-coded prototype: Judge it on evidence, not impressions. Check:\n- Tests and automated checks\n- Commit history (steady work over time, or a few big dumps)\n- Number of contributors and issue activity\n- Error handling, security basics (no secrets in the code), and docs\n- License (can it be used commercially?)\n- Whether there's a live demo, real users, or a paid plan\nThen label it: Production-ready / Solid prototype / Early prototype / Abandoned. Explain the label in 2-3 lines.\n\n6. Edge: What does it do that the free alternatives don't? If nothing, say so plainly.\n\n7. Verdict for my goal: If my goal is just to understand it, tell me what's well built and worth learning from, and what's weak or worth avoiding. Otherwise, pick one: Worth pursuing / Use an existing tool instead / Fork and improve / Learn from it only / Skip. Give the top 3 reasons. If it's worth pursuing, list the 3 most valuable improvements.\n\nStart with a one-line verdict, then the sections. Mark anything you're inferring rather than reading from the repo.",
        "icon": "review"
      },
      {
        "id": 241,
        "name": "Legacy Code Map",
        "purpose": "Understand old code before you touch it",
        "prompt": "Help me understand the legacy code below before I change it. Explain what it does in plain terms, what goes in and comes out, what it changes outside itself (files, storage, network, globals), and what other code probably depends on it. List the parts that look risky to touch and why. Mark anything you are guessing as a guess.\n\nCode:",
        "icon": "architecture"
      },
      {
        "id": 242,
        "name": "Characterization Tests",
        "purpose": "Lock in what the code does today before you refactor",
        "prompt": "Write tests that lock in what the code below does today, even where that looks wrong, so I can refactor without changing behavior. Base every expected value on what the code actually returns, not on what it should return. List separately any behavior that looks like a bug. Match its language and test framework.\n\nCode:",
        "icon": "test"
      },
      {
        "id": 243,
        "name": "Safe Legacy Refactor",
        "purpose": "Small steps that each keep behavior the same",
        "prompt": "Plan a safe refactor of the legacy code below as a series of small steps, each one keeping behavior the same. For each step say what changes, which test or check to run afterward, and how to undo it. Put the lowest-risk steps first. Say what you would not touch yet and why.\n\nCode:",
        "icon": "convert"
      },
      {
        "id": 244,
        "name": "Edge Cases by Input",
        "purpose": "Edge cases grouped by kind of input, with what happens now and what should",
        "prompt": "List the edge cases for the code below, grouped by kind of input: empty or missing, smallest and largest values, one off from a limit, malformed, unusual encoding or characters (such as a byte order mark or non-English text), duplicates, wrong order, very large, and failures of anything it depends on. For each, say what the code does today and what it should do. Skip cases that cannot happen.\n\nCode:",
        "icon": "risk"
      },
      {
        "id": 245,
        "name": "Debug from Reproduction",
        "purpose": "Ranked causes, the quickest check for each, and the exact line to change",
        "prompt": "Help me find the cause of the bug below. Rank the most likely causes, and for each give the quickest check that would confirm or rule it out. Then point to the exact line you would change and why. Separate what the code shows from what you are guessing. Don't suggest a rewrite.\n\nWhat I expected:\nWhat happened instead:\nHow to reproduce:\nCode:",
        "icon": "bug"
      }
    ]
  },
  {
    "id": "developer_text_that_isn_t_necessarily_code",
    "name": "Developer text that isn't necessarily code",
    "tier": 9,
    "prompts": [
      {
        "id": 109,
        "name": "Explain API",
        "prompt": "Explain what the API or endpoint below does, including its purpose, inputs, outputs, and behavior where shown. Don't invent anything undocumented.\n\nAPI details:",
        "icon": "database"
      },
      {
        "id": 110,
        "name": "Format JSON",
        "prompt": "Format the JSON below so it is easy to read, keeping the data exactly the same.\n\nJSON:",
        "icon": "json"
      },
      {
        "id": 111,
        "name": "Generate Regex",
        "prompt": "Write a [regex flavor] regular expression that matches the pattern described below. State assumptions briefly, only if the description is ambiguous.\n\nPattern:",
        "icon": "regex"
      },
      {
        "id": 112,
        "name": "Explain Regex",
        "prompt": "Explain the regular expression below part by part, saying what each part matches.\n\nRegex:",
        "icon": "regex"
      },
      {
        "id": 113,
        "name": "Generate SQL",
        "prompt": "Write a [SQL dialect] query for the requirement below. If table or column names aren't given, use clearly marked placeholders instead of inventing them.\n\nRequirement:",
        "icon": "sql"
      },
      {
        "id": 114,
        "name": "Explain SQL",
        "prompt": "Explain what the SQL query below does and point out concrete issues or risks. Don't invent schema details.\n\nQuery:",
        "icon": "sql"
      },
      {
        "id": 115,
        "name": "Generate Command",
        "prompt": "Write the [shell / OS] command that does what I describe below. Don't invent paths, names, or flags: use clearly marked placeholders where you need them.\n\nWhat I need:",
        "icon": "terminal"
      },
      {
        "id": 116,
        "name": "Debug",
        "prompt": "Diagnose the likely cause of the technical problem below and suggest a practical fix. Separate confirmed facts from likely causes.\n\nProblem:",
        "icon": "bug"
      },
      {
        "id": 117,
        "name": "Stack Trace",
        "prompt": "Find the most likely root cause in the stack trace below and tell me where to look next. Don't invent application details.\n\nStack trace:",
        "icon": "stack"
      },
      {
        "id": 118,
        "name": "Technical Summary",
        "prompt": "Summarize the technical information below for another developer. Keep the architecture, behavior, dependencies, constraints, and implementation details that matter.\n\nText:",
        "icon": "compress"
      }
    ]
  },
  {
    "id": "documents_structured_data",
    "name": "Documents & structured data",
    "tier": 11,
    "prompts": [
      {
        "id": 131,
        "name": "Table",
        "prompt": "Turn the information below into a table with clear columns and rows. Don't add interpretation.\n\nInformation:",
        "icon": "table"
      },
      {
        "id": 132,
        "name": "JSON",
        "prompt": "Turn the information below into valid JSON containing only what it says. Don't invent fields or values, and use null where something is missing.\n\nInformation:",
        "icon": "json"
      },
      {
        "id": 133,
        "name": "CSV",
        "prompt": "Turn the information below into CSV rows and columns containing only what it says. Don't invent values.\n\nInformation:",
        "icon": "csv"
      },
      {
        "id": 134,
        "name": "Timeline",
        "prompt": "Put the events in the text below in chronological order, using only events and dates it contains. Keep any uncertainty when an exact date isn't given.\n\nText:",
        "icon": "timeline"
      },
      {
        "id": 135,
        "name": "Outline",
        "prompt": "Turn the text below into a hierarchical outline of its major ideas. Don't add sections it doesn't support.\n\nText:",
        "icon": "outline"
      },
      {
        "id": 136,
        "name": "Categorize",
        "prompt": "Group the information below into meaningful categories. Don't create categories just to have more of them.\n\nInformation:",
        "icon": "category"
      },
      {
        "id": 137,
        "name": "Extract Names",
        "prompt": "List the people, organizations, and other named entities mentioned in the text below. Don't guess at identities.\n\nText:",
        "icon": "contacts"
      },
      {
        "id": 138,
        "name": "Extract Dates",
        "prompt": "List the dates, deadlines, and time references in the text below. Keep relative wording like \"next week\" when no exact date is given.\n\nText:",
        "icon": "calendar"
      },
      {
        "id": 139,
        "name": "Extract Numbers",
        "prompt": "List the important numbers in the text below exactly as written and say what each refers to. Don't calculate new values unless needed to explain one.\n\nText:",
        "icon": "numbers"
      },
      {
        "id": 140,
        "name": "Extract Links",
        "prompt": "List the URLs, references, and resources that appear in the text below. Don't add or guess any.\n\nText:",
        "icon": "link"
      },
      {
        "id": 141,
        "name": "Extract Contacts",
        "prompt": "List the names, email addresses, phone numbers, and other contact details in the text below. Don't guess or complete missing details.\n\nText:",
        "icon": "contacts"
      }
    ]
  },
  {
    "id": "ui_design_review",
    "name": "UI design review",
    "tier": 20,
    "prompts": [
      {
        "id": 231,
        "name": "Hierarchy Check",
        "purpose": "What the eye sees first, what it should see, and what is fighting for attention",
        "prompt": "Review the design I've attached like a strict visual hierarchy expert. No compliments. Tell me:\n1. What the eye sees 1st, 2nd and 3rd.\n2. What it should see first, given this screen's goal.\n3. Every element fighting for attention.\n4. One exact fix for each, ranked by impact.\n\nGoal of this screen: [what the screen is for and who uses it]\nDesign: [attach your screenshot]",
        "icon": "priority"
      },
      {
        "id": 232,
        "name": "Type Teardown",
        "purpose": "A senior type designer's verdict on pairing, scale, spacing and weight",
        "prompt": "Audit the typography in the design I've attached like a senior type designer. Give a verdict and a fix for each:\n- Pairing: do the fonts have separate jobs?\n- Scale: is there enough contrast between H1, H2 and body text?\n- Spacing: is the line height right for reading, with 45 to 75 characters per line?\n- Weight: is primary vs secondary text clear at a glance?\n\nFinish with exact sizes, weights and line heights.\n\nGoal of this screen: [what the screen is for and who uses it]\nDesign: [attach your screenshot]",
        "icon": "text"
      },
      {
        "id": 233,
        "name": "Space Stress Test",
        "purpose": "Checks section gaps, padding and breathing room against an 8pt rhythm",
        "prompt": "Stress-test the spacing in the design I've attached. Check:\n- Sections: are they clearly separated?\n- Rhythm: is there one consistent 8pt rhythm?\n- Components: is the padding even, and is there room around icons?\n- Breathing room: what needs more space to matter?\n\nGive exact pixel values for every fix.\n\nGoal of this screen: [what the screen is for and who uses it]\nDesign: [attach your screenshot]",
        "icon": "expand"
      },
      {
        "id": 234,
        "name": "Color Audit",
        "purpose": "Palette, mood and contrast check, with text that fails WCAG AA flagged",
        "prompt": "Run a color and contrast audit on the design I've attached. Check:\n- Palette: is there a clear main, secondary and accent color?\n- Mood: does the feeling fit the product?\n- Contrast: flag any text below WCAG AA (4.5:1) and give the ratio.\n- Accent: is it overused? What should be muted?\n\nGive an exact fix for each problem, with color values.\n\nGoal of this screen: [what the screen is for and who uses it]\nDesign: [attach your screenshot]",
        "icon": "palette"
      },
      {
        "id": 235,
        "name": "Why Does It Look Cheap?",
        "purpose": "A blunt diagnosis of what makes a design look cheap and the one fix that helps most",
        "prompt": "Be brutally honest about the design I've attached. Skip the compliments. Tell me:\n1. 3 reasons it looks cheap, and the signal behind each.\n2. The root cause: type, space, color or layout?\n3. The ONE fix that changes the most.\n4. 3 changes that would make it look 10x more expensive.\n5. One thing that already works, so I keep it.\n\nGoal of this screen: [what the screen is for and who uses it]\nDesign: [attach your screenshot]",
        "icon": "weakness"
      }
    ]
  }
]);
