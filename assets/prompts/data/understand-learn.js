// Understand & learn: the prompt categories and packs listed under this heading in the
// prompts.html sidebar, in sidebar order. A pack (a series of prompts that build
// on each other) has "kind": "pack". Prompt ids are shared by every data file.
PROMPT_LIBRARY.addTopic("Understand & learn", [
  {
    "id": "essential_everyday",
    "name": "Essential / everyday",
    "tier": 1,
    "prompts": [
      {
        "id": 1,
        "name": "Explain",
        "prompt": "Explain the topic below from the fundamentals. Cover the core concept, how its parts relate, and what it means in practice. Add an example if it helps.\n\nTopic:",
        "icon": "lightbulb"
      },
      {
        "id": 2,
        "name": "Explain Like I'm 5",
        "prompt": "Explain the topic below to a complete beginner. Use simple words, familiar analogies, and concrete examples, but keep it technically accurate.\n\nTopic:",
        "icon": "baby-face"
      },
      {
        "id": 3,
        "name": "Summarize",
        "prompt": "Summarize the text below. Keep the central idea, key facts, conclusions, and how they relate. Cut repetition and minor detail.\n\nText:",
        "icon": "compress"
      },
      {
        "id": 4,
        "name": "Key Points",
        "prompt": "List the key points of the text below: the most important ideas, facts, decisions, conclusions, and actions. Leave out minor details and your own interpretation.\n\nText:",
        "icon": "list"
      },
      {
        "id": 5,
        "name": "TL;DR",
        "prompt": "Give me the shortest useful summary of the text below. Keep only the core message, critical facts, and the conclusion.\n\nText:",
        "icon": "compress"
      },
      {
        "id": 6,
        "name": "Simplify",
        "prompt": "Rewrite the text below in plain, everyday language. Keep the meaning, facts, intent, and important details, and don't oversimplify technical points.\n\nText:",
        "icon": "text"
      },
      {
        "id": 7,
        "name": "Define Terms",
        "prompt": "Find the difficult or specialized terms in the text below and explain what each one means in this context. Skip ordinary words.\n\nText:",
        "icon": "terms"
      },
      {
        "id": 8,
        "name": "Give an Example",
        "prompt": "Explain the idea below with one practical, realistic example. Show how the example maps to the idea, and leave out unrelated detail.\n\nIdea:",
        "icon": "example"
      },
      {
        "id": 9,
        "name": "Translate",
        "prompt": "Translate the text below into [target language]. Keep the meaning, tone, terminology, names, numbers, and formatting. Don't explain or summarize it.\n\nText:",
        "icon": "translate"
      },
      {
        "id": 10,
        "name": "Check Understanding",
        "prompt": "Check whether I understand the text below. Ask me 3 questions about its main idea, one at a time, and wait for each answer. Tell me what I got right and what I missed, then clear up anything I misunderstood.\n\nText:",
        "icon": "check"
      }
    ]
  },
  {
    "id": "study_learning",
    "name": "Study & learning",
    "tier": 10,
    "prompts": [
      {
        "id": 119,
        "name": "Teach Me",
        "prompt": "Teach me the concept below, starting from the fundamentals and building upward. Don't drift into unrelated topics.\n\nConcept:",
        "icon": "book"
      },
      {
        "id": 120,
        "name": "Study Notes",
        "prompt": "Turn the text below into structured study notes, keeping the important facts, definitions, relationships, and examples. Add nothing unsupported.\n\nText:",
        "icon": "document"
      },
      {
        "id": 121,
        "name": "Flashcards",
        "prompt": "Turn the important concepts in the text below into question-and-answer flashcards. Every answer must come from the text.\n\nText:",
        "icon": "flashcards"
      },
      {
        "id": 122,
        "name": "Quiz Me",
        "prompt": "Quiz me on the text below. Ask one question at a time, wait for my answer, and tell me whether I was right before the next question.\n\nText:",
        "icon": "quiz"
      },
      {
        "id": 123,
        "name": "Exam Questions",
        "prompt": "Write likely exam questions based on the material below. Don't require knowledge from outside it unless you say so.\n\nMaterial:",
        "icon": "exam"
      },
      {
        "id": 124,
        "name": "Interview Questions",
        "prompt": "Write interview questions that test real understanding of the topic below, at a suitable depth.\n\nTopic:",
        "icon": "interview"
      },
      {
        "id": 125,
        "name": "Interview Answer",
        "prompt": "Turn the information below into a strong, interview-ready answer. Don't invent experience or achievements.\n\nInformation:",
        "icon": "interview"
      },
      {
        "id": 126,
        "name": "Prerequisites",
        "prompt": "List what a learner should understand before starting the topic below. Separate essential prerequisites from optional background.\n\nTopic:",
        "icon": "prerequisite"
      },
      {
        "id": 127,
        "name": "Learning Path",
        "prompt": "Create a learning sequence for the topic below, from foundations to advanced, without unnecessary detours.\n\nTopic:",
        "icon": "path"
      },
      {
        "id": 128,
        "name": "Common Mistakes",
        "prompt": "List common, meaningful mistakes learners make with the concept below. Explain why each happens and what correct practice looks like.\n\nConcept:",
        "icon": "mistake"
      },
      {
        "id": 130,
        "name": "Compare Concepts",
        "prompt": "Compare the concepts below, explaining their practical differences and when to use each. Don't add other concepts.\n\nConcepts:",
        "icon": "concept-compare"
      },
      {
        "id": 209,
        "name": "Handwritten Study Sheet",
        "purpose": "Turn any topic into a one-page visual study sheet",
        "prompt": "Create a vertical handwritten study sheet explaining this topic: [what you want to learn]. Show it as a clear 3–5 step flow: cause → mechanism → outcome or input → process → result. Use one central diagram, simple icons, arrows, and short labels. Style it on warm off-white paper with imperfect dark ink and restrained saffron, teal, green, and yellow accents. Keep it spacious, accurate, visual-first, and easy to understand at a glance; avoid long text, tiny type, clutter, UI, logos, watermarks, and unsupported facts.",
        "icon": "book"
      }
    ]
  },
  {
    "id": "personal_tutor",
    "kind": "pack",
    "name": "Personal tutor",
    "icon": "school",
    "description": "Multi-step prompts that turn your AI into a personal tutor. Copy one, fill in the highlighted parts, then reply as it asks.",
    "prompts": [
      {
        "id": 202,
        "name": "Learning Curve Destroyer",
        "purpose": "Identify what matters and start practising",
        "prompt": "You are a teacher who has only 4 hours with me and will never see me again. Your only objective is to make me functional in [skill] before the time runs out. Do not give me theory without a practical use, and do not give me a generic list.\n\nTell me three things: what to learn first, what to ignore completely, and the one exercise that, done a single time, would already put me ahead of 70% of people who have studied this for months.\n\nThen teach me the first step and wait for my response before continuing.",
        "icon": "target"
      },
      {
        "id": 203,
        "name": "Real Error Simulator",
        "purpose": "Apply knowledge and correct mistakes",
        "prompt": "Do not explain [concept] to me. Put me directly into a realistic situation where I would have to use it and would probably make a mistake. Then wait for my response.\n\nWhen I make a mistake, do not give me the answer. Ask me one question that forces me to find where my reasoning breaks.\n\nGive me the answer only after I have tried at least twice. Then repeat the cycle with a new situation until I can get it right without hesitation.",
        "icon": "mistake"
      },
      {
        "id": 204,
        "name": "Impossible Language Translator",
        "purpose": "Understand the core concept",
        "prompt": "The content below is confusing to me. Before explaining anything, tell me the one core idea that, once I understand it, makes the rest fall into place.\n\nExplain only that idea first, using an everyday analogy and no technical terms.\n\nThen ask me 3 questions that only someone who truly understood it could answer. Ask them one at a time and wait for my answers.\n\nDo not move on to the rest until I pass all three.\n\n[Paste the content here]",
        "icon": "translate"
      },
      {
        "id": 205,
        "name": "Learning Path Architect",
        "purpose": "Build a goal-based learning plan",
        "prompt": "My real goal is [goal]. It is not to learn [skill] in general. It is to achieve [specific result] within [deadline].\n\nI already know [what you already master]. Based on that, build me a 7-day learning path. Each day must include: one single task that fits within 45 minutes, a clear criterion so I know whether I did it correctly, and what not to do that day so I do not waste time.\n\nIf the entire path does not lead me to the goal, rebuild it until it does.",
        "icon": "path"
      },
      {
        "id": 206,
        "name": "Hidden Gap Detector",
        "purpose": "Find weaknesses in your foundation",
        "prompt": "I think I already master [skill]. I want you to prove me wrong. Ask me 5 questions that seem simple but expose the gaps of someone who has never truly gone deep.\n\nAsk them one at a time and wait for each answer. After every answer, tell me what it reveals about what is still missing in my foundation.\n\nDo not go easy on me. If I am being shallow, tell me directly.",
        "icon": "questions"
      },
      {
        "id": 207,
        "name": "Forced Feynman Method",
        "purpose": "Test understanding through explanation",
        "prompt": "I just studied [topic]. In my next message I will explain what I understood as if you were a 10-year-old child. Wait for my explanation.\n\nThen go through it and point out every place where I used jargon I cannot define, skipped a step in the reasoning, or simplified so much that it became wrong.\n\nAt the end, tell me exactly what those mistakes reveal about what is still not solid in my understanding.",
        "icon": "baby-face"
      },
      {
        "id": 219,
        "name": "Topic Overview",
        "purpose": "Get a quick beginner overview to decide if a topic is worth your time",
        "prompt": "Give me a beginner's overview of [topic to learn] from first principles.\nMy goal: [why I want to learn it]\nWhat I already know about it: [what I already know]\n\nRules: explain jargon the first time you use it. Use everyday analogies. If you simplify something, say so. Keep it under one page.\n\n1. The problem it solves, and what people did before it existed.\n2. The 3-6 basic ideas it's built from, in the order they depend on each other. For each: one line on what it is, why it's needed, one example, and one non-example.\n3. How the ideas combine, shown with one short worked example.\n4. Top 3 beginner mistakes and why each one feels right.\n5. What to ignore for now, and what to learn next if I go deeper.\n6. Two \"predict what happens\" questions, with the answers hidden at the very end so I can try first.",
        "icon": "target"
      },
      {
        "id": 220,
        "name": "Topic Tutor",
        "purpose": "Learn a topic step by step, one idea at a time. Use a new chat if you ran Topic Overview first",
        "prompt": "Teach me [topic to learn] from first principles, one idea at a time.\nMy goal: [why I want to learn it]\nWhat I already know about it: [what I already know]\n\nRules: I'm a beginner. Explain jargon the first time you use it. Use everyday analogies. If you simplify something, say so. Never teach the next idea until I've answered the current question.\n\n1. In 2-3 sentences: what problem does this solve, and what did people do before it existed?\n2. List the basic ideas in the order they depend on each other. Tell me what to ignore for now.\n3. For each idea: what it is, why it's needed, one example, and one non-example. Then ask me ONE question that makes me apply it. Stop and wait.\n4. When I answer: say what's right, find the exact misunderstanding behind anything wrong, re-explain only that, then continue.\n5. After all ideas: combine them in one worked example from start to finish.\n6. Common beginner mistakes and why each one feels right.\n7. Final test: 3 questions (1 predict, 1 apply to a new case, 1 spot the error). Grade them, then suggest what to learn next.",
        "icon": "school"
      }
    ]
  },
  {
    "id": "language_learning",
    "kind": "pack",
    "name": "Language learning",
    "icon": "translate",
    "description": "Seven prompts that work as one system. Start with Language Tutor, build foundations with Vocabulary and Grammar, practise with Conversation and Roleplay, then use Mistake Correction and Daily Immersion to keep going.",
    "prompts": [
      {
        "id": 210,
        "name": "Language Tutor",
        "purpose": "Learn a language from scratch at your pace",
        "prompt": "Become my personal [language] teacher. I currently know [nothing / basic words / beginner level], my reason for learning it is [reason], and I can study for [minutes] a day. Create a learning path for me starting from the basics. Teach me one useful concept at a time with simple explanations, examples, pronunciation help, and short exercises. Test me after each lesson and only increase the difficulty when I demonstrate that I'm ready.",
        "icon": "school"
      },
      {
        "id": 211,
        "name": "Vocabulary Builder",
        "purpose": "Build practical vocabulary that sticks",
        "prompt": "Help me build practical vocabulary in [language] for [goal / situation]. Prioritize the words and phrases I'll actually use. Teach me [number] at a time, with meanings, pronunciation, examples, and connections between words. Test me with memory exercises, sentence-building, translation, and real-life situations. Keep track of the words I forget and bring them back into future lessons instead of constantly teaching me new vocabulary.",
        "icon": "flashcards"
      },
      {
        "id": 212,
        "name": "Grammar Made Easy",
        "purpose": "Learn grammar through simple practice",
        "prompt": "Teach me [language] grammar based on my current level: [level]. Explain each concept simply before giving examples. Focus on structures I can use in conversations, not technical terminology. After each explanation, have me create my own sentences, identify my mistakes, explain why they're wrong, and have me try again. Review the concepts I struggle with until I can use them naturally.",
        "icon": "book"
      },
      {
        "id": 213,
        "name": "Conversation Practice",
        "purpose": "Practise speaking in a flowing conversation",
        "prompt": "Have a realistic conversation with me in [language] about [topic]. My level is [level]. Speak at a level I can understand and gradually increase the difficulty. Ask me one question at a time and wait for my response. Correct only the most important mistakes that affect clarity or naturalness, show me a more natural way to say it, and continue the conversation without interrupting the flow.",
        "icon": "chat"
      },
      {
        "id": 214,
        "name": "Real-Life Roleplay",
        "purpose": "Rehearse real-world situations",
        "prompt": "Train me in [language] using realistic situations I might encounter in [country / environment]. Start with [situation, e.g. airport, restaurant, hotel]. First, teach me the essential phrases and vocabulary. Then role-play the situation with me: play only the other person, say one line at a time, and wait for my reply. Don't give me the answer immediately. If I get stuck, give me a hint first. When the scene ends, correct my most important mistakes and show me what a native speaker would say.",
        "icon": "scenario"
      },
      {
        "id": 215,
        "name": "Mistake Correction",
        "purpose": "Turn your writing mistakes into lessons",
        "prompt": "I'm learning [language], and I'll send you sentences that I write. For each one, tell me whether it is correct, understandable but unnatural, or incorrect. Give me the version a native speaker would use. Explain only the important corrections in simple language and point out any vocabulary or grammar worth remembering. Then give me a short exercise using the same structure.",
        "icon": "mistake"
      },
      {
        "id": 216,
        "name": "Daily Immersion",
        "purpose": "Build a daily immersion routine",
        "prompt": "My target language is [language], my level is [level], my goal is [goal], and I can dedicate [minutes] per day. Create a personalized immersion system based on the time I actually have. Include listening, speaking, reading, writing, vocabulary, and pronunciation. Tell me exactly what to do each day and how to gradually increase my use of [language] while reducing my dependence on [your native language].",
        "icon": "calendar"
      }
    ]
  }
]);
