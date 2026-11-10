// Work & business: the prompt categories and packs listed under this heading in the
// prompts.html sidebar, in sidebar order. A pack (a series of prompts that build
// on each other) has "kind": "pack". Prompt ids are shared by every data file.
PROMPT_LIBRARY.addTopic("Work & business", [
  {
    "id": "work_productivity",
    "name": "Work & productivity",
    "tier": 6,
    "prompts": [
      {
        "id": 69,
        "name": "Meeting Notes",
        "prompt": "Turn the text below into concise meeting notes covering the topics, decisions, and important points. Don't invent attendees, decisions, or details.\n\nText:",
        "icon": "memo"
      },
      {
        "id": 71,
        "name": "Action Items",
        "prompt": "List the tasks, owners, and deadlines in the text below, including any clearly implied. Write \"not stated\" where an owner or deadline is missing, rather than making one up.\n\nText:",
        "icon": "action"
      },
      {
        "id": 72,
        "name": "Executive Summary",
        "prompt": "Write an executive summary of the text below, focused on decisions, risks, and business impact. Keep it short and stick to what the text supports.\n\nText:",
        "icon": "briefcase"
      },
      {
        "id": 73,
        "name": "Brief",
        "prompt": "Turn the text below into a short professional brief, with only what the reader needs and no unnecessary background.\n\nText:",
        "icon": "memo"
      },
      {
        "id": 74,
        "name": "Status Update",
        "prompt": "Turn the text below into a short status update covering the current situation, progress, blockers, and next steps. Skip anything the text doesn't cover, and don't invent details.\n\nText:",
        "icon": "action"
      },
      {
        "id": 75,
        "name": "Project Tasks",
        "prompt": "Turn the text below into clearly defined project tasks. Include only work it describes or clearly requires.\n\nText:",
        "icon": "checklist"
      },
      {
        "id": 76,
        "name": "Requirements",
        "prompt": "List the functional and business requirements in the text below. Separate those stated outright from those you are assuming.\n\nText:",
        "icon": "requirements"
      },
      {
        "id": 77,
        "name": "Acceptance Criteria",
        "prompt": "Turn the requirements below into clear, testable acceptance criteria. Don't add scope.\n\nRequirements:",
        "icon": "checklist"
      },
      {
        "id": 78,
        "name": "Risk Analysis",
        "prompt": "List the risks in the text below, including ones that aren't obvious, with each one's likely impact and a proportionate way to reduce it. Mark risks you are inferring, and don't pad the list with unlikely ones.\n\nText:",
        "icon": "risk"
      },
      {
        "id": 79,
        "name": "Decision Memo",
        "prompt": "Turn the text below into a short decision memo covering the decision, reasoning, options, and risks. Only recommend an option if the text supports one.\n\nText:",
        "icon": "memo"
      }
    ]
  },
  {
    "id": "personal_productivity",
    "name": "Personal productivity",
    "tier": 13,
    "prompts": [
      {
        "id": 153,
        "name": "Make a Plan",
        "prompt": "Turn the situation below into a practical action plan with steps in order. Add any step the goal clearly needs, marking it as your suggestion. Don't invent owners or deadlines.\n\nSituation:",
        "icon": "plan"
      },
      {
        "id": 154,
        "name": "Prioritize",
        "prompt": "Prioritize the items below by importance and urgency. Say so if there isn't enough information to rank something confidently.\n\nItems:",
        "icon": "priority"
      },
      {
        "id": 155,
        "name": "30-Minute Plan",
        "prompt": "Based on the information below, pick the most useful actions I can realistically finish in the next 30 minutes. Don't assume resources I don't have.\n\nInformation:",
        "icon": "clock"
      },
      {
        "id": 156,
        "name": "Break It Down",
        "prompt": "Break the goal below into small, doable steps without adding unrelated work.\n\nGoal:",
        "icon": "steps"
      },
      {
        "id": 157,
        "name": "Remove Complexity",
        "prompt": "Find what is unnecessarily complicated in the approach below and suggest a simpler way that gets the same result.\n\nApproach:",
        "icon": "simplify"
      },
      {
        "id": 158,
        "name": "Quick Win",
        "prompt": "Based on the information below, name the easiest action that would have the most impact and explain why it qualifies.\n\nInformation:",
        "icon": "quick-win"
      },
      {
        "id": 159,
        "name": "Deadline Plan",
        "prompt": "Turn the work below into a realistic plan to finish by [deadline], with steps in a sensible order. If the deadline looks unrealistic, say so. Don't assume how much time I have: ask if it matters.\n\nWork:",
        "icon": "calendar"
      },
      {
        "id": 217,
        "name": "Adaptive System Builder",
        "purpose": "Turn any goal or messy to-do list into a prioritized system that adapts as you report progress",
        "prompt": "Role: Act as a strategic planner and adaptive execution architect. Transform any goal, project, problem, or unstructured to-do list into a practical system that produces measurable progress.\nCore philosophy: Goals define the destination. Systems define repeatable actions. Feedback determines what changes.\nOperating Framework\nFor every input:\n\n1. Interpret: Identify the desired outcome, current state, constraints, resources, deadline, and existing progress. Separate outcomes, projects, recurring systems, habits, and one-time tasks.\n2. Deconstruct: Reverse-engineer the outcome into logical phases, milestones, dependencies, and actionable steps. Eliminate redundant or low-value activities.\n3. Systemize: Convert recurring activities into repeatable processes with clear triggers, actions, frequency, time commitment, measurable outputs, and completion criteria. Keep one-time deliverables as tasks.\n4. Prioritize: Rank actions by impact, urgency, dependencies, effort, and risk. Focus on the highest-value actions first.\n5. Operationalize: Establish a sustainable daily or weekly execution rhythm based on available capacity. Include a minimum viable version for constrained days and a recovery mechanism for missed actions.\n6. Measure: Track execution metrics (actions performed) separately from outcome metrics (results achieved). Never confuse activity with progress.\n7. Adapt: Use every progress update, failure, blocker, new requirement, or changed constraint to reassess and improve the existing system. Preserve completed work and modify only affected priorities, tasks, or processes.\n\nExecution Rules\n\n* Convert vague intentions into specific, executable actions.\n* Every action must have a purpose, priority, expected effort, and definition of done.\n* Make dependencies explicit and resolve prerequisites before dependent work.\n* Challenge unrealistic assumptions and identify missing requirements.\n* Prefer a few high-impact systems over excessive routines and task lists.\n* Distinguish poor execution from an ineffective strategy.\n* Do not redesign the entire plan after minor updates.\n* Never assume completion without confirmation or evidence.\n* Never invent progress, metrics, or deadlines.\n* Optimize for sustainable consistency and measurable outcomes, not perfect schedules.\n\nDefault Output\nPresent the plan using this structure:\n\n1. Destination: Desired outcome and success criteria.\n2. Current State: Starting point, constraints, and assumptions.\n3. Goal → System: What the user wants versus what they must repeatedly do.\n4. Execution Architecture: Systems, projects, milestones, dependencies, and one-time tasks.\n5. Action Roadmap: Prioritized, step-by-step actions with completion criteria.\n6. Operating Rhythm: Relevant daily, weekly, or periodic routines.\n7. Progress Tracker: Execution metrics, outcome metrics, status, and blockers.\n8. Next Action: The single highest-priority action with clear instructions.\n\nAdaptive Interaction\nTreat subsequent messages as execution updates. Recognize completed, partial, blocked, failed, deferred, and newly introduced work. Recalculate priorities, preserve valid progress, diagnose recurring friction, and provide the next actionable step.\nSupport both full-roadmap planning and step-by-step guided execution. Maintain continuity within the available conversation context.\nFinal directive: Do not create plans that merely describe what the user should achieve. Build an evolving execution system that determines what to do, when to do it, how to measure it, and how to improve it based on real-world results.\nBuild → Execute → Measure → Learn → Adapt → Repeat.",
        "icon": "plan"
      }
    ]
  },
  {
    "id": "business",
    "name": "Business",
    "tier": 14,
    "prompts": [
      {
        "id": 161,
        "name": "Business Impact",
        "prompt": "Explain the possible business impact of the information below. Separate likely implications from confirmed outcomes.\n\nInformation:",
        "icon": "business"
      },
      {
        "id": 162,
        "name": "Customer Impact",
        "prompt": "Explain how the situation below could affect customers. Don't assume customer reactions without a basis, and label guesses as guesses.\n\nSituation:",
        "icon": "customer"
      },
      {
        "id": 163,
        "name": "Product Impact",
        "prompt": "Explain what the information below could mean for the product. Don't invent requirements or outcomes.\n\nInformation:",
        "icon": "product"
      },
      {
        "id": 164,
        "name": "Market Impact",
        "prompt": "Analyze what the information below could mean for the market. State your uncertainty where evidence is limited.\n\nInformation:",
        "icon": "market"
      },
      {
        "id": 165,
        "name": "Competitive Analysis",
        "prompt": "Identify the competitive implications of the information below and possible responses. Don't invent competitor actions or capabilities.\n\nInformation:",
        "icon": "competitive"
      },
      {
        "id": 167,
        "name": "Opportunities",
        "prompt": "Identify business opportunities suggested by the information below, including ones it doesn't state outright. Mark which are inferred, and don't present speculation as fact.\n\nInformation:",
        "icon": "opportunity"
      },
      {
        "id": 168,
        "name": "Strategy",
        "prompt": "Analyze the strategic implications of the information below and recommend possible actions. State your main assumptions.\n\nInformation:",
        "icon": "strategy"
      },
      {
        "id": 169,
        "name": "KPI Ideas",
        "prompt": "Suggest measurable KPIs that directly track the goal or situation below. Avoid vanity metrics.\n\nGoal or situation:",
        "icon": "kpi"
      },
      {
        "id": 170,
        "name": "Customer Persona",
        "prompt": "Build a short customer persona from the information below: who they are, what they need, what motivates them, and what worries them. Label anything you are assuming.\n\nInformation:",
        "icon": "persona"
      },
      {
        "id": 238,
        "name": "Untapped Opportunities",
        "prompt": "Think like a successful entrepreneur. Identify 10 untapped business opportunities in the industry or niche below. Focus on real customer problems, market demand, low competition and potential profitability. Don't invent market data, and mark which claims are guesses.\n\nIndustry or niche:",
        "icon": "target"
      },
      {
        "id": 239,
        "name": "10x Growth",
        "prompt": "Think like a founder who wants to build a $10M business. Analyze the business model below. Identify bottlenecks, growth opportunities and scalable systems, then name the highest-impact actions I should prioritize first. Don't invent numbers I haven't given you.\n\nMy business:",
        "icon": "sales"
      },
      {
        "id": 240,
        "name": "Brutally Honest Idea Review",
        "prompt": "Act as a brutally honest startup advisor. Evaluate the idea below. Tell me what I'm overlooking, why it might fail, which assumptions need validation, and what I should do differently. Prioritize truth over motivation, but don't invent flaws.\n\nIdea:",
        "icon": "risk"
      }
    ]
  },
  {
    "id": "career_job_search",
    "name": "Career & job search",
    "tier": 19,
    "prompts": [
      {
        "id": 224,
        "name": "Cover Letter",
        "purpose": "A short, human cover letter that opens with a hook, not \"I am writing to apply\"",
        "prompt": "Write a cover letter for a [job title] role at [company name]. My background: [2-3 bullet points about your experience and biggest results]\n\nDon't open with \"I am writing to apply.\" Start with a hook that ties my experience directly to a problem this company is trying to solve. Keep it under 250 words. The tone should be confident and human, not stiff and corporate. End with a specific call to action that shows real interest in the next step, not \"I look forward to hearing from you.\" Don't invent experience or results I haven't given you.",
        "icon": "mail"
      },
      {
        "id": 225,
        "name": "Interview Prep",
        "purpose": "Likely questions, strong answer outlines, and smart questions to ask back",
        "prompt": "I have an interview for a [job title] role at [company name]. What the company does: [one or two sentences about the company]\n\nBased on the job description below, give me the 10 most likely interview questions, grouped into behavioral, technical, and culture fit. For each one, give me a bullet-point outline of what a strong answer looks like, using my background where it fits: [your key experience or skills]\n\nThen give me 3 smart questions to ask the interviewer that will make me stand out.\n\nJob description:\n[paste the job description]",
        "icon": "interview"
      },
      {
        "id": 226,
        "name": "LinkedIn Connection Request",
        "purpose": "A short cold outreach note with a small, easy ask",
        "prompt": "Write a short LinkedIn connection request to a [their job title] at [company name] I've never met. My goal: [learn about the company / ask for a referral / get career advice]\n\nKeep it under 5 sentences. Don't be sycophantic. Don't start with \"I came across your profile and was impressed.\" Be direct about why I'm reaching out to them specifically: [what you have in common, or why them]. Make it easy for them to say yes by keeping the ask small.",
        "icon": "handshake"
      },
      {
        "id": 227,
        "name": "Negotiate a Job Offer",
        "purpose": "A warm, confident counter-offer email",
        "prompt": "I just got a job offer for [role] at [company] with a salary of [offered amount]. Based on my experience in [field and years of experience] and the market rate for this role, I want to counter at [target amount].\n\nWrite a professional reply email that shows real enthusiasm for the offer, makes a specific counter with a brief justification, and keeps the tone warm so the relationship stays strong whatever the outcome. Base the justification only on what I've told you. Don't apologize for negotiating. Keep it under 200 words.",
        "icon": "scale"
      },
      {
        "id": 228,
        "name": "Reply to a Rejection",
        "purpose": "Turn a rejection into an open door",
        "prompt": "I applied for a [job title] role at [company] and got a rejection email.\n\nWrite a short, gracious reply that thanks them for their time, says I'm still genuinely interested in the company, and politely asks if they'd keep my details on file or share quick feedback on my application.\n\nConfident and professional, not desperate. Under 100 words. Leave a strong final impression that makes them remember me.",
        "icon": "follow-up"
      },
      {
        "id": 229,
        "name": "30-Day Job Search Plan",
        "purpose": "A week-by-week job search plan with daily actions",
        "prompt": "Build me a 30-day job search plan for someone looking for a [job title] role in [industry].\n\nBreak it into 4 weekly phases: week 1 foundations, week 2 outreach, week 3 applications, week 4 follow-ups and interviews. For each week, list 5 specific daily actions that move the needle.\n\nInclude advice on how to track applications, how many outreach messages to send per day, and how to stay consistent without burning out.\n\nTailor it for someone who is [currently employed and searching quietly / unemployed and searching full time].",
        "icon": "calendar"
      },
      {
        "id": 230,
        "name": "Research a Company",
        "purpose": "Know the company before you apply or interview",
        "prompt": "I'm about to apply for a [job title] role at [company name]. Before I send anything, help me research them properly.\n\nPull together: what the company actually does (in plain English), who their customers are, their recent wins or news from the last 6 months, the team or leadership worth knowing, and any red flags to watch for (layoffs, bad employee reviews, leadership drama). If you can't verify something or your information may be out of date, say so instead of guessing.\n\nThen give me 3 specific things I can mention in my application or interview that will show I did the work. Keep it sharp, no fluff.",
        "icon": "globe"
      }
    ]
  },
  {
    "id": "resume_makeover",
    "kind": "pack",
    "name": "Resume makeover",
    "icon": "resume",
    "description": "A 3-step series for one job: critique your resume against the job description, rewrite it from that feedback, then lay it out in a current style that suits your field. Run the steps in order in the same chat.",
    "prompts": [
      {
        "id": 221,
        "name": "Resume Critique for One Job",
        "purpose": "An honest hiring-manager and ATS review of your resume against one job description",
        "prompt": "Act as a hiring manager and an ATS (applicant tracking system) screener for the job below. Critique my resume for this one job only. Be direct and specific, not polite.\n\nCover:\n1. A fit score out of 10, with a one-line reason.\n2. Keyword gaps: important skills, tools, and phrases from the job description that are missing or buried in my resume.\n3. Weak bullets: quote each one, say what's wrong (vague, a duty instead of a result, no numbers), and how to fix it.\n4. What to cut or shrink because it doesn't help for this role.\n5. Format and ATS problems: length, section order, and anything a parser could misread, such as tables, columns, graphics, or text in headers.\n6. The top 5 changes that would most improve my chances, in priority order.\n\nDon't rewrite the resume yet. Don't assume experience I haven't listed. If something important seems to be missing, list it as a question for me.\n\nTarget role: [job title] at [company name]\n\nJob description:\n[paste the job description]\n\nMy resume:\n[paste your resume or CV]",
        "icon": "resume-search"
      },
      {
        "id": 222,
        "name": "Rewrite Resume From Feedback",
        "purpose": "Apply the critique and rewrite your resume to match that one job",
        "prompt": "Now rewrite my resume for this job using your critique above. Apply every fix you listed, most important first.\n\nMy answers to your questions: [your answers, or \"none\"]\n\nRules:\n- Use only facts from my resume and my answers. Don't invent jobs, titles, dates, tools, or numbers. Where a number would make a bullet stronger but I haven't given one, write (add number) so I can fill it in.\n- Open with a 2-3 line summary aimed at this role.\n- Start every bullet with a strong verb and show the result, not just the duty.\n- Work in the job description's keywords naturally, using its exact wording where it fits. No keyword stuffing.\n- Order sections and bullets by how relevant they are to this job.\n- Keep it to [1 page / 2 pages].\n\nReturn the full resume as plain text with clear section headings, then a short list of what changed and why.\n\nIf there's no resume and critique above, ask me for my resume and the job description first.",
        "icon": "resume"
      },
      {
        "id": 223,
        "name": "Resume Design & Format",
        "purpose": "A current, field-appropriate layout, delivered as a print-ready resume",
        "prompt": "Now design the layout for the rewritten resume above, in a current style that suits my field and level.\n\nMy field: [your field, e.g. software, finance, healthcare, design, marketing]\nMy level: [entry level / mid-level / senior / executive]\nCountry I'm applying in: [country]\nPaper size: [A4 / US Letter]\n\nFirst, give me a short design spec:\n- Layout: one column or two, and why for my field. Default to an ATS-safe single column unless my field rewards a visual resume, such as design or other creative roles.\n- Section order for my level.\n- Fonts (free and widely available), sizes for my name, headings, and body text, line spacing, and margins.\n- One accent color and where to use it.\n- What goes in the header (name, target title, location, email, phone, LinkedIn, portfolio or GitHub), and whether a photo is expected in my country.\n- What's in style for resumes in my field right now, and what looks dated (objective statements, skill bars, \"References available on request\", and so on).\n\nThen output the finished resume as one self-contained HTML file with inline CSS, sized for my paper size, that prints cleanly to PDF from the browser. Use real text, not images, keep it ATS-readable, and don't change the wording from the rewrite.",
        "icon": "palette"
      }
    ]
  },
  {
    "id": "legal_policy_compliance_assistance",
    "name": "Legal / policy / compliance assistance",
    "tier": 16,
    "prompts": [
      {
        "id": 181,
        "name": "Plain English",
        "prompt": "Explain the legal or policy language below in plain English without changing its apparent meaning. This is for understanding only, not legal advice.\n\nText:",
        "icon": "text"
      },
      {
        "id": 182,
        "name": "Obligations",
        "prompt": "List the obligations in the legal or policy text below, stated outright or clearly implied. Don't infer obligations it doesn't support.\n\nText:",
        "icon": "obligation"
      },
      {
        "id": 183,
        "name": "Restrictions",
        "prompt": "List the restrictions, prohibitions, and limitations stated in the legal or policy text below. Don't add any from outside the text.\n\nText:",
        "icon": "restriction"
      },
      {
        "id": 184,
        "name": "Deadlines",
        "prompt": "List the deadlines, notice periods, and important dates in the legal or policy text below, along with any conditions attached to them.\n\nText:",
        "icon": "deadline"
      },
      {
        "id": 185,
        "name": "Potential Issues",
        "prompt": "Point out provisions in the legal or policy text below that deserve a closer look and say why. Don't call a provision unlawful or defective unless the text supports it. This is not legal advice.\n\nText:",
        "icon": "review"
      },
      {
        "id": 186,
        "name": "Compare Versions",
        "prompt": "Compare the two versions below and list the differences in substance. Don't infer differences that aren't there.\n\nVersion 1:\n[paste version 1]\n\nVersion 2:\n[paste version 2]",
        "icon": "version"
      },
      {
        "id": 187,
        "name": "Policy Summary",
        "prompt": "Summarize what the policy below requires in practice: what people must, may, and must not do. Add no obligations it doesn't state.\n\nPolicy:",
        "icon": "document"
      }
    ]
  }
]);
