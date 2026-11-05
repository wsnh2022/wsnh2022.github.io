// Think & decide: the prompt categories and packs listed under this heading in the
// prompts.html sidebar, in sidebar order. A pack (a series of prompts that build
// on each other) has "kind": "pack". Prompt ids are shared by every data file.
PROMPT_LIBRARY.addTopic("Think & decide", [
  {
    "id": "text_analysis",
    "name": "Text analysis",
    "tier": 4,
    "prompts": [
      {
        "id": 45,
        "name": "Analyze",
        "prompt": "Analyze the text below: what are its main ideas, how does it reason, and what does it conclude? Stay on the text, with no unrelated advice.\n\nText:",
        "icon": "analysis"
      },
      {
        "id": 46,
        "name": "Extract Facts",
        "prompt": "List the factual claims stated in the text below. Don't verify or reinterpret them.\n\nText:",
        "icon": "fact"
      },
      {
        "id": 47,
        "name": "Extract Claims",
        "prompt": "List the main claims the text below is making, keeping the meaning of each. Don't add supporting claims of your own.\n\nText:",
        "icon": "claim"
      },
      {
        "id": 48,
        "name": "Find Assumptions",
        "prompt": "Find the assumptions behind the text below. Separate what the author states outright from what you are inferring.\n\nText:",
        "icon": "assumption"
      },
      {
        "id": 49,
        "name": "Find Contradictions",
        "prompt": "Find statements in the text below that contradict each other. Report only genuine contradictions, not differences in emphasis.\n\nText:",
        "icon": "contradiction"
      },
      {
        "id": 50,
        "name": "Find Weak Points",
        "prompt": "Find the concrete weaknesses, gaps, and unsupported reasoning in the text below. Don't count mere disagreements or alternative opinions.\n\nText:",
        "icon": "weakness"
      },
      {
        "id": 51,
        "name": "Find Bias",
        "prompt": "Find possible bias, framing, or loaded language in the text below, quoting the wording that shows it. Don't accuse the author of bias without evidence.\n\nText:",
        "icon": "bias"
      },
      {
        "id": 52,
        "name": "Evaluate Argument",
        "prompt": "Rate how strong the argument in the text below is and explain why, using only the reasoning and evidence it contains.\n\nText:",
        "icon": "argument"
      },
      {
        "id": 53,
        "name": "Pros & Cons",
        "prompt": "List the strongest pros and cons in the text below. Mark which ones are stated and which are reasonable implications.\n\nText:",
        "icon": "pros-cons"
      },
      {
        "id": 54,
        "name": "Evidence",
        "prompt": "List the evidence the text below uses to support its claims. Don't count unsupported statements as evidence, and point out claims that have none.\n\nText:",
        "icon": "evidence"
      },
      {
        "id": 55,
        "name": "Questions Raised",
        "prompt": "List the important questions the text below leaves unanswered. Stay on its subject.\n\nText:",
        "icon": "questions"
      },
      {
        "id": 56,
        "name": "What Matters?",
        "prompt": "Tell me what matters most in the text below and briefly explain why.\n\nText:",
        "icon": "priority"
      },
      {
        "id": 58,
        "name": "Decisions",
        "prompt": "List the decisions in the text below, separating those already made from those still needed. Don't infer decisions it doesn't support.\n\nText:",
        "icon": "decision"
      }
    ]
  },
  {
    "id": "research_information",
    "name": "Research & information",
    "tier": 5,
    "prompts": [
      {
        "id": 59,
        "name": "Research This",
        "prompt": "Research the topic below and give me a concise, evidence-based explanation that goes beyond what I've written. Use web search if you have it. If you don't, say so, answer from what you know, and flag anything that may be out of date. Never make up sources.\n\nTopic:",
        "icon": "globe"
      },
      {
        "id": 61,
        "name": "Fact Check",
        "prompt": "Fact-check the text below. Mark each claim as supported, disputed, or unverified, and don't call a claim false without good evidence. Use web search if you have it. If you don't, say so, answer from what you know, and flag anything that may be out of date. Never make up sources.\n\nText:",
        "icon": "fact"
      },
      {
        "id": 62,
        "name": "Find Sources",
        "prompt": "Find credible sources that support or challenge the claims below. Match each source to its claim and say briefly why it is relevant. Use web search and include only sources you actually found, with links. If you can't search, say so and don't list specific sources: suggest what kinds of sources to look for and search terms to use instead.\n\nClaims:",
        "icon": "link"
      },
      {
        "id": 63,
        "name": "Latest Information",
        "prompt": "Check whether the information below is still current and tell me what has changed that affects its accuracy or usefulness. Use web search if you have it. If you don't, say so, answer from what you know, and flag anything that may be out of date.\n\nInformation:",
        "icon": "calendar"
      },
      {
        "id": 65,
        "name": "Explain the Context",
        "prompt": "Give me only the background I need to understand the text below, leaving out unrelated history. Use web search if you have it. If you don't, say so, answer from what you know, and flag anything that may be out of date.\n\nText:",
        "icon": "book"
      },
      {
        "id": 66,
        "name": "Research Further",
        "prompt": "Tell me which areas related to the text below are most worth researching further and why. Don't write the full research report.\n\nText:",
        "icon": "questions"
      }
    ]
  },
  {
    "id": "decision_making",
    "name": "Decision making",
    "tier": 12,
    "prompts": [
      {
        "id": 143,
        "name": "What Should I Do?",
        "prompt": "Based on the situation below, tell me the most sensible next actions, best first. If a missing detail would change your advice, say what it is and what you are assuming. Don't invent commitments I haven't made.\n\nSituation:",
        "icon": "action"
      },
      {
        "id": 144,
        "name": "Recommend",
        "prompt": "Recommend the best course of action for the situation below and explain why. If one option clearly wins, say so. If the information doesn't support a confident choice, say what's missing.\n\nSituation:",
        "icon": "recommend"
      },
      {
        "id": 145,
        "name": "Options",
        "prompt": "List the realistic options I have in the situation below, including sensible ones I haven't mentioned. Give one line on when each makes sense, and mark any that depends on something you are assuming.\n\nSituation:",
        "icon": "options"
      },
      {
        "id": 146,
        "name": "Decision Matrix",
        "prompt": "Turn the options below into a decision matrix with criteria that matter for this decision. Don't give precise scores if the evidence doesn't support them.\n\nOptions:",
        "icon": "scale"
      },
      {
        "id": 147,
        "name": "Tradeoffs",
        "prompt": "Lay out the key tradeoffs in the decision below. Focus on real tradeoffs, not minor differences.\n\nDecision:",
        "icon": "tradeoffs"
      },
      {
        "id": 149,
        "name": "What Am I Missing?",
        "prompt": "Tell me what information is missing from the text below that could change the decision. Skip trivial gaps.\n\nText:",
        "icon": "missing"
      },
      {
        "id": 150,
        "name": "Challenge My Thinking",
        "prompt": "Challenge the assumptions and reasoning below, pointing to specific parts of what I wrote. Don't make up flaws just to disagree.\n\nMy thinking:",
        "icon": "challenge"
      },
      {
        "id": 151,
        "name": "Devil's Advocate",
        "prompt": "Argue the strongest reasonable case against the ideas below, without misrepresenting them.\n\nIdeas:",
        "icon": "devil"
      },
      {
        "id": 152,
        "name": "Second Opinion",
        "prompt": "Give me an independent assessment of the reasoning and conclusion below. Keep your opinion clearly separate from the facts stated in the text.\n\nText:",
        "icon": "second-opinion"
      }
    ]
  },
  {
    "id": "advanced_power_user_actions",
    "name": "Advanced \"power user\" actions",
    "tier": 17,
    "prompts": [
      {
        "id": 188,
        "name": "Root Cause",
        "prompt": "Find the most likely underlying cause of the problem below, based on the evidence given. Separate likely causes from confirmed ones.\n\nProblem:",
        "icon": "root-cause"
      },
      {
        "id": 189,
        "name": "Generate Solution",
        "prompt": "Suggest practical solutions to the problem below. Don't assume constraints, resources, or facts I haven't given.\n\nProblem:",
        "icon": "solution"
      },
      {
        "id": 190,
        "name": "Alternative Approaches",
        "prompt": "Give me several genuinely different approaches or alternatives for the problem or idea below, not small variations. Say when each would be the better choice.\n\nProblem or idea:",
        "icon": "alternatives"
      },
      {
        "id": 191,
        "name": "Optimize Process",
        "prompt": "Find the unnecessary steps in the process below and propose a more efficient version. Keep the controls and checks that are actually needed.\n\nProcess:",
        "icon": "optimize-process"
      },
      {
        "id": 192,
        "name": "Find Dependencies",
        "prompt": "Identify the dependencies and prerequisites between the items below. Separate those stated outright from those you are inferring.\n\nItems:",
        "icon": "dependencies"
      },
      {
        "id": 195,
        "name": "Scenario Analysis",
        "prompt": "Describe likely outcomes of the situation below under several materially different scenarios. State your assumptions and don't present predictions as facts.\n\nSituation:",
        "icon": "scenario"
      },
      {
        "id": 196,
        "name": "What If?",
        "prompt": "Change the key assumptions in the situation below, one at a time, and explain how the likely outcome would change. Don't claim certainty about hypotheticals.\n\nSituation:",
        "icon": "what-if"
      },
      {
        "id": 197,
        "name": "Failure Analysis",
        "prompt": "Explain how the approach below could realistically fail and how to prevent or reduce each failure.\n\nApproach:",
        "icon": "failure"
      },
      {
        "id": 198,
        "name": "Stress Test",
        "prompt": "Test the plan or argument below under realistic bad conditions and show where it breaks down. Focus on real weaknesses, not nitpicks.\n\nPlan or argument:",
        "icon": "stress"
      },
      {
        "id": 199,
        "name": "Synthesize",
        "prompt": "Combine the important ideas in the text below into one coherent conclusion. Don't add unsupported claims or simply repeat the text.\n\nText:",
        "icon": "synthesis"
      }
    ]
  },
  {
    "id": "do_something_with_this_the_killer_generic_action",
    "name": "\"Do something with this\" - the killer generic action",
    "tier": 18,
    "prompts": [
      {
        "id": 201,
        "name": "Ask AI",
        "prompt": "Do what I ask below, using any text I include as context. If one missing detail would really change the result, ask me about it first. Otherwise answer directly.\n\nMy request:\n[paste or type your request]",
        "icon": "ask-ai"
      },
      {
        "id": 208,
        "name": "Request Sharpener",
        "purpose": "Rewrite a rough request into a sharper prompt",
        "prompt": "Before doing my task, improve the request itself. Do not do the task yet.\n\nStep 1. Gate.\nDecide if a deeper version is warranted. If the task is simple, operational, or purely creative, say so in one line and do the task as written.\n\nStep 2. Check for missing context.\nLook at my task and my constraints below. If something blank would change the rewrite materially, ask me about it. Rules for questions:\n- Maximum 3, asked together in one message.\n- Each one is a multiple-choice question with 2 to 4 realistic options, plus \"Not sure, you pick.\"\n- Keep them plain and practical (for example: \"Who is this for? a) me only b) my manager or client c) the general public d) not sure\").\n- Never ask something you can reasonably infer from my task.\n- Ask about time or deadline only if the task is a plan, schedule, or project.\n- Ask only if you cannot produce a useful rewrite without the answer.\n- If nothing blank matters, skip questions and say which defaults you are using in one line.\nIf you ask questions, stop and wait for my answers before continuing.\n\nStep 3. Think it through briefly:\n- Goal: What is the real goal behind this request, and what am I probably assuming without saying it?\n- Practitioner: What would an experienced professional do differently? Give only the 2 or 3 differences that matter most, one line of reasoning each.\n- Inputs: What source material would they start from? Separate what I can realistically get from what I can't.\n- Failure: How could this output be wrong, generic, or useless for my situation? Be specific to this task.\n- Checks: How could I verify the result without trusting you? Only checks I can run myself.\n\nStep 4. Rewrite my prompt.\nKeep the same scope. Do not add deliverables. Make it sharper: clear goal, stated constraints, remaining gaps as placeholders. Mark any tool, source, or fact you are not sure exists with (verify).\n\nStep 5. Stop.\nShow the rewritten prompt and wait for my approval. Do not run it. Your entire reply must end after the rewritten prompt.\n\nMy task:\n[Paste your task here]\n\nMy constraints (fill in what you know, skip the rest):\n- Tools/data I have: [tools and data]\n- Audience: [who this is for]",
        "icon": "polish"
      }
    ]
  }
]);
