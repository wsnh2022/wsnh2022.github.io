// Workflows: chains of existing prompts, run one after another in the same chat.
// Each step names a prompt by its id. Listed under their own "Workflows" heading.
PROMPT_LIBRARY.workflows = [
  {
    "id": "critical_read",
    "name": "Critical read",
    "icon": "analysis",
    "description": "Pull an article, report or argument apart: what it claims, what it assumes, where it's weak, and whether the facts hold up.",
    "takeaway": "You went from claims to assumptions to weak points to a fact check. Next time you read something important, ask those four questions yourself.",
    "steps": [
      {
        "prompt": 47,
        "why": "Pins down what the text actually says, so every later step works from the same list.",
        "check": "Does each claim match the text? If one is missing or twisted, tell the AI before step 2."
      },
      {
        "prompt": 48,
        "why": "Spots what the author takes for granted without saying it. Weak arguments often hide here.",
        "check": "Are these real assumptions, or just the claims restated? Ask the AI to separate them if not."
      },
      {
        "prompt": 50,
        "why": "Finds gaps and unsupported reasoning, using the claims and assumptions you already have.",
        "check": "Is each weak point concrete, with a reason? Push back on any that are just opinions."
      },
      {
        "prompt": 61,
        "why": "Tests the claims against evidence last, when it's clear which ones matter most.",
        "check": "Did it say where its facts come from and flag anything that may be out of date? Don't trust a source you can't open."
      }
    ]
  },
  {
    "id": "study_topic",
    "name": "Study a topic",
    "icon": "book",
    "description": "Learn a new concept from scratch, turn it into notes and flashcards, then test yourself on it.",
    "takeaway": "You learned it, wrote it down, drilled it and tested it. Come back to the quiz in a few days to make it stick.",
    "steps": [
      {
        "prompt": 119,
        "why": "Builds the concept from the ground up, so you understand it before you memorize anything.",
        "check": "Could you explain the core idea in one sentence? If not, ask a follow-up question before step 2."
      },
      {
        "prompt": 120,
        "input": "your explanation above.",
        "why": "Turns the explanation into notes you can reread later.",
        "check": "Do the notes cover every key idea from the explanation, with nothing new added?"
      },
      {
        "prompt": 121,
        "input": "the study notes from your previous answer.",
        "why": "Breaks the notes into small questions, the fastest way to memorize.",
        "check": "Is each card one idea only? Ask for changes if a card tries to cover too much."
      },
      {
        "prompt": 122,
        "input": "the study notes and flashcards above.",
        "why": "Active recall: answering questions makes it stick far better than rereading.",
        "check": "Answer honestly without looking back. Note the questions you miss and review those notes."
      }
    ]
  },
  {
    "id": "meeting_to_action",
    "name": "Meeting to action",
    "icon": "action",
    "description": "Turn a messy transcript or rough notes into clean meeting notes, a task list and a status update you can send.",
    "takeaway": "Raw notes became a record, a task list and an update. Send the update and keep the task list where your team will see it.",
    "steps": [
      {
        "prompt": 69,
        "why": "Turns the raw transcript or notes into a clean record of what was discussed and decided.",
        "check": "Are the decisions right? Fix any that are wrong or missing now, because the next steps build on them."
      },
      {
        "prompt": 71,
        "why": "Pulls out who does what by when, so nothing agreed gets lost.",
        "check": "Every \"not stated\" owner or deadline is a gap. Fill it in yourself or ask the team."
      },
      {
        "prompt": 74,
        "why": "Packs it all into a short update for people who weren't there.",
        "check": "Would someone who missed the meeting understand it? Remove anything you don't want to share."
      }
    ]
  },
  {
    "id": "tough_email",
    "name": "Tough email",
    "icon": "shield",
    "description": "Turn a heated draft into a calm, tactful and short message that still makes your point.",
    "takeaway": "Your point stayed the same, only the heat went out of it. Wait a few minutes and reread it before you hit send.",
    "steps": [
      {
        "prompt": 90,
        "why": "Strips out anger and blame while keeping your facts, your position and your request.",
        "check": "Is your actual request still there, clearly? If it got lost, tell the AI before step 2."
      },
      {
        "prompt": 36,
        "input": "the revised message from your previous answer.",
        "why": "Makes it tactful, so the reader is more likely to agree, without weakening your position.",
        "check": "Is your position still firm, or did it get too soft? Ask the AI to firm it up if needed."
      },
      {
        "prompt": 17,
        "input": "the diplomatic version from your previous answer.",
        "why": "Short messages get read. This cuts filler without losing anything important.",
        "check": "Read it as the person receiving it. Is anything missing, unclear, or likely to annoy them?"
      }
    ]
  },
  {
    "id": "make_decision",
    "name": "Make a decision",
    "icon": "decision",
    "description": "Work through a hard choice: see your real options, weigh the tradeoffs, hear the case against, then write it up.",
    "takeaway": "You looked at every option, the real costs and the strongest case against. Whatever you choose, you'll know why.",
    "steps": [
      {
        "prompt": 145,
        "why": "Widens the view first, including options you hadn't thought of.",
        "check": "Is anything missing or unrealistic? Add or remove options before you weigh them."
      },
      {
        "prompt": 147,
        "input": "choosing between the options in your previous answer.",
        "why": "Shows what you gain and give up with each option, so it's a real comparison.",
        "check": "Do the tradeoffs match what you actually care about? Tell the AI what matters most to you."
      },
      {
        "prompt": 151,
        "input": "the option that looks strongest from your previous answers. Name it first.",
        "why": "Argues against your favorite, so you don't only look for reasons to agree with yourself.",
        "check": "Did any argument change your mind? If so, go back and weigh the tradeoffs again."
      },
      {
        "prompt": 79,
        "input": "the situation, options, tradeoffs and counterarguments above.",
        "why": "Writes down the decision and why, so you or others can look back on it later.",
        "check": "Is the recommendation one you actually agree with? Change the memo if it isn't."
      }
    ]
  },
  {
    "id": "debug_it",
    "name": "Debug it",
    "icon": "bug",
    "description": "Go from an error message to fixed code with tests, one careful step at a time.",
    "takeaway": "You understood the error before fixing it, then locked the fix in with tests. Run the tests now, and again after every change.",
    "steps": [
      {
        "prompt": 100,
        "why": "Understands the error before touching the code, so you fix the cause, not the symptom.",
        "check": "Does the likely cause make sense for your code? If the AI is guessing, give it more context."
      },
      {
        "prompt": 93,
        "fill": {
          "paste or type the error or wrong behavior": "the error and likely cause you explained above"
        },
        "why": "Makes the smallest change that fixes the cause you just found.",
        "check": "Run the fixed code. Does the error go away without breaking anything else?"
      },
      {
        "prompt": 99,
        "input": "the fixed code from your previous answer.",
        "why": "Tests prove the fix works and stop the bug from quietly coming back.",
        "check": "Run the tests. Do they pass, and does at least one fail if you undo the fix?"
      }
    ]
  },
  {
    "id": "ship_ready_code",
    "name": "Ship-ready code",
    "icon": "review",
    "description": "Check code before you merge it: a general review, a security pass, edge cases, then documentation.",
    "takeaway": "Your code got four different kinds of review. Fix what matters, then run the workflow again on the new version.",
    "steps": [
      {
        "prompt": 107,
        "why": "A broad review first: correctness, reliability and design problems.",
        "check": "Which issues are real for your project? Note the ones you'll fix."
      },
      {
        "prompt": 105,
        "why": "A focused security pass, which general reviews often miss.",
        "check": "Is each finding confirmed or only possible? Fix the confirmed ones first."
      },
      {
        "prompt": 106,
        "why": "Finds the unusual inputs and situations that break code in real use.",
        "check": "Which edge cases can really happen for your users? Those are the ones to handle or test."
      },
      {
        "prompt": 101,
        "input": "the original code above.",
        "why": "Documents what the code really does, so others can use and maintain it.",
        "check": "Does the documentation match the code exactly? Remove anything the code doesn't support."
      }
    ]
  },
  {
    "id": "solve_problem",
    "name": "Solve a problem",
    "icon": "root-cause",
    "description": "Find what's really causing a problem, explore different fixes, stress-test the best one, then plan it.",
    "takeaway": "You went after the cause, not the symptom, and tested the plan before acting on it. Check back after the first step to see if it's working.",
    "steps": [
      {
        "prompt": 188,
        "why": "Finds the underlying cause, so you don't waste effort on symptoms.",
        "check": "Does the cause fit all the evidence? If the AI is unsure, add more detail before step 2."
      },
      {
        "prompt": 190,
        "input": "the root cause from your previous answer.",
        "why": "Explores genuinely different fixes instead of jumping at the first idea.",
        "check": "Which approach fits your time, money and skills best? Keep that one in mind, or say which you prefer."
      },
      {
        "prompt": 198,
        "input": "the best approach from your previous answer, or the one I picked. Name it first.",
        "why": "Puts the chosen approach under realistic pressure to find where it breaks.",
        "check": "Did it break somewhere important? Adjust the approach, or pick another, before planning."
      },
      {
        "prompt": 153,
        "input": "the approach that held up best in the stress test above, including fixes for its weak spots.",
        "why": "Turns the tested approach into ordered, practical steps.",
        "check": "Is the first step something you can do today? If not, ask the AI to break it down."
      }
    ]
  },
  {
    "id": "launch_copy",
    "name": "Launch copy",
    "icon": "megaphone",
    "description": "Write marketing copy from scratch: understand the customer, sharpen the value, then write headlines and a social post.",
    "takeaway": "Your copy started from the customer, not the product. Try two headlines and keep the one that gets more clicks.",
    "steps": [
      {
        "prompt": 170,
        "why": "Starts with who you're selling to, so every later line speaks to them.",
        "check": "Does this sound like a real customer? Correct anything that's off, because the rest builds on it."
      },
      {
        "prompt": 175,
        "input": "the original information and the customer persona above.",
        "why": "Says why that customer should care, in one clear message.",
        "check": "Is it specific to your product, or could any competitor say the same? Push for specific."
      },
      {
        "prompt": 172,
        "input": "the value proposition from your previous answer.",
        "why": "Gives you several ways to grab attention with that message.",
        "check": "Which headline would make your customer stop scrolling? Pick one or two favorites."
      },
      {
        "prompt": 180,
        "input": "the value proposition and the best headline above.",
        "why": "Turns it all into a ready-to-post message for one platform.",
        "check": "Does it fit the platform's style and length? Is every claim true for your product?"
      }
    ]
  },
  {
    "id": "read_contract",
    "name": "Read a contract",
    "icon": "legal",
    "description": "Understand a contract or policy: plain English first, then what you must do, the key dates, and what deserves a closer look.",
    "takeaway": "You know what it says, what you must do, by when, and what to question. This isn't legal advice, so check anything important with a professional.",
    "steps": [
      {
        "prompt": 181,
        "why": "Explains the language in plain words, so you understand it before you analyze it.",
        "check": "Is any part still unclear? Ask about it now, before going further."
      },
      {
        "prompt": 182,
        "input": "the original legal text, not your explanation.",
        "why": "Lists what you are actually required to do.",
        "check": "Find each obligation in the original text. Anything you can't find there should be removed."
      },
      {
        "prompt": 184,
        "input": "the original legal text, not your explanation.",
        "why": "Pulls out every date and notice period, so you don't miss one.",
        "check": "Put the important dates in your calendar now."
      },
      {
        "prompt": 185,
        "input": "the original legal text, not your explanation.",
        "why": "Flags the provisions that deserve a closer look, with reasons.",
        "check": "For anything serious, ask a lawyer or the other party. The AI can point things out, but it can't advise you."
      }
    ]
  },
  {
    "id": "polish_writing",
    "name": "Polish writing",
    "icon": "polish",
    "description": "Take a rough draft to finished text: clearer, shorter, more confident and free of errors.",
    "takeaway": "Clear, short, confident and correct, in that order. Compare the final version with your draft to see what changed, and reuse those habits.",
    "steps": [
      {
        "prompt": 13,
        "why": "Makes the draft clear and natural first, since the other steps polish what's there.",
        "check": "Is your meaning exactly the same? Fix anything the rewrite changed before step 2."
      },
      {
        "prompt": 17,
        "input": "the rewritten text from your previous answer.",
        "why": "Cuts filler and repetition, so every sentence earns its place.",
        "check": "Did any important detail get cut? Ask the AI to put it back."
      },
      {
        "prompt": 33,
        "input": "the shorter version from your previous answer.",
        "why": "Removes hedging so you sound sure of what you're saying.",
        "check": "Does it still sound like you, and not pushy? Ask for a softer version if needed."
      },
      {
        "prompt": 11,
        "input": "the confident version from your previous answer.",
        "why": "A final proofread, done last so no later change adds new mistakes.",
        "check": "Read it out loud once. That catches what both you and the AI missed."
      }
    ]
  },
  {
    "id": "apply_for_job",
    "name": "Apply for a job",
    "icon": "career",
    "description": "Research a company, write a cover letter that shows it, then prepare for the interview.",
    "takeaway": "Your application and interview prep are built on real research. Use the 3 talking points from step 1 in both.",
    "steps": [
      {
        "prompt": 230,
        "why": "Learns about the company first, so everything you write is specific to them.",
        "check": "Check any recent news it mentions on the company's own site. Don't repeat anything you can't confirm."
      },
      {
        "prompt": 224,
        "input": "Use the company research above to make the hook specific to this company.",
        "why": "Writes a cover letter that shows you did your homework.",
        "check": "Is every claim about you true? Does the hook mention something real about the company?"
      },
      {
        "prompt": 225,
        "input": "Also use the company research above, especially the talking points.",
        "why": "Prepares answers and questions that tie your experience to this company.",
        "check": "Practice your answers out loud. Rewrite any that don't sound like you."
      }
    ]
  },
  {
    "id": "founder_mode",
    "name": "Founder mode",
    "icon": "target",
    "description": "Take a business idea from nothing to tested: find openings in a niche, break the best one down to its root problem, decide whether to chase it, then have it torn apart before you commit.",
    "takeaway": "You found an idea, stripped it to its root problem, made a call on it and stress-tested it. If it survived step 4, your next move is to test it with real customers.",
    "steps": [
      {
        "prompt": 238,
        "why": "Starts wide: surfaces openings in your niche so you pick an idea instead of defaulting to the first one you thought of.",
        "check": "Is each idea tied to a real customer problem? Treat any market claim as a guess until you can check it. Pick one idea to take forward."
      },
      {
        "prompt": 236,
        "input": "the idea you picked from the list above.",
        "why": "Strips your chosen idea down to the root problem and the simplest way to solve it.",
        "check": "Does the root problem sound like something people already pay to fix? If not, say so before step 3."
      },
      {
        "prompt": 237,
        "input": "whether to pursue the idea above, using the breakdown from your previous answer.",
        "why": "Weighs risks and long-term consequences with a partner that is told not to just agree with you.",
        "check": "Did it push back anywhere? If it only agreed, ask it to argue the opposite."
      },
      {
        "prompt": 240,
        "input": "the idea above, with your breakdown and decision from the previous answers.",
        "why": "A last stress test, done after you have committed to a direction so the flaws it finds are about the real plan.",
        "check": "Pick the one assumption it flags that would hurt most if wrong, and plan a cheap way to test it this week."
      }
    ]
  }
];
