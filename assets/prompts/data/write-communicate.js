// Write & communicate: the prompt categories and packs listed under this heading in the
// prompts.html sidebar, in sidebar order. A pack (a series of prompts that build
// on each other) has "kind": "pack". Prompt ids are shared by every data file.
PROMPT_LIBRARY.addTopic("Write & communicate", [
  {
    "id": "writing_rewriting",
    "name": "Writing & rewriting",
    "tier": 2,
    "prompts": [
      {
        "id": 11,
        "name": "Fix Grammar",
        "prompt": "Correct the grammar, spelling, and punctuation in the text below without changing its meaning. Add no commentary. Return only the rewritten text.\n\nText:",
        "icon": "check"
      },
      {
        "id": 12,
        "name": "Polish",
        "prompt": "Polish the text below so it reads clearly and correctly. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "polish"
      },
      {
        "id": 13,
        "name": "Rewrite",
        "prompt": "Rewrite the text below so it is clearer, more natural, and easier to read. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "refresh-text"
      },
      {
        "id": 14,
        "name": "Make Professional",
        "prompt": "Rewrite the text below in a professional, polished tone. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "briefcase"
      },
      {
        "id": 15,
        "name": "Make Casual",
        "prompt": "Rewrite the text below in a relaxed, conversational tone, the way you'd say it to a friend. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "casual"
      },
      {
        "id": 16,
        "name": "Make Formal",
        "prompt": "Rewrite the text below in a formal tone. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "formal"
      },
      {
        "id": 17,
        "name": "Make Concise",
        "prompt": "Make the text below shorter by cutting filler, repetition, and unnecessary words. Keep all the important information. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "shorten"
      },
      {
        "id": 18,
        "name": "Expand",
        "prompt": "Expand the text below by developing its ideas: add explanation, examples, and transitions. Keep my meaning and position. Don't add statistics, quotes, or specific facts unless I gave them, and mark any spot where one would help. Return only the expanded text.\n\nText:",
        "icon": "expand"
      },
      {
        "id": 20,
        "name": "Make Friendly",
        "prompt": "Rewrite the text below so it sounds warm and approachable without being overly familiar. Keep my message the same. Return only the rewritten text.\n\nText:",
        "icon": "human"
      },
      {
        "id": 23,
        "name": "Improve Flow",
        "prompt": "Rewrite the text below so its ideas connect smoothly from one to the next. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "flow"
      },
      {
        "id": 24,
        "name": "Improve Clarity",
        "prompt": "Rewrite the text below to remove ambiguity and make the meaning clear. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "lightbulb"
      },
      {
        "id": 26,
        "name": "Make Human",
        "prompt": "Rewrite the text below so it sounds natural and human, not robotic or stiff. Keep my meaning and facts. Add no new claims. Return only the rewritten text.\n\nText:",
        "icon": "human"
      },
      {
        "id": 27,
        "name": "Professional Email",
        "prompt": "Turn the text below into a professional email with a clear subject line, greeting, short body, and closing. Keep my message, and don't invent details about the recipient. Return only the email.\n\nText:",
        "icon": "mail"
      },
      {
        "id": 29,
        "name": "Turn Into a Message",
        "prompt": "Turn the text below into a short message suitable for chat. Keep my meaning and facts. Add no new claims. Return only the message.\n\nText:",
        "icon": "chat"
      },
      {
        "id": 30,
        "name": "Turn Into Bullet Points",
        "prompt": "Turn the text below into clear bullet points, grouped logically. Add nothing that isn't in the text. Return only the bullet points.\n\nText:",
        "icon": "list"
      },
      {
        "id": 31,
        "name": "Turn Into a Checklist",
        "prompt": "Turn the text below into a practical checklist of things to do, with no repeats. Don't invent tasks, owners, or deadlines. Return only the checklist.\n\nText:",
        "icon": "checklist"
      },
      {
        "id": 32,
        "name": "Turn Into Steps",
        "prompt": "Turn the text below into clear steps in order. If a step seems to be missing, flag it instead of making it up. Return only the steps.\n\nText:",
        "icon": "next"
      }
    ]
  },
  {
    "id": "tone_controls",
    "name": "Tone controls",
    "tier": 3,
    "prompts": [
      {
        "id": 33,
        "name": "Confident",
        "prompt": "Rewrite the text below so it sounds confident, decisive, and direct without being aggressive or rude. Keep my position. Return only the rewritten text.\n\nText:",
        "icon": "target"
      },
      {
        "id": 34,
        "name": "Direct",
        "prompt": "Rewrite the text below so it gets straight to the point. Lead with the main point and cut unnecessary wording. Keep my meaning. Return only the rewritten text.\n\nText:",
        "icon": "shorten"
      },
      {
        "id": 35,
        "name": "Empathetic",
        "prompt": "Rewrite the text below with more empathy for the reader. Don't invent feelings, circumstances, or commitments. Return only the rewritten text.\n\nText:",
        "icon": "human"
      },
      {
        "id": 36,
        "name": "Diplomatic",
        "prompt": "Rewrite the text below so it makes the same point tactfully and diplomatically. Reduce confrontation, but don't weaken my position. Return only the rewritten text.\n\nText:",
        "icon": "neutral"
      },
      {
        "id": 37,
        "name": "Executive",
        "prompt": "Rewrite the text below for a busy executive. Lead with decisions, outcomes, and risks, and cut the rest. Return only the rewritten text.\n\nText:",
        "icon": "briefcase"
      },
      {
        "id": 38,
        "name": "Academic",
        "prompt": "Rewrite the text below in a clear academic style. Don't add unsupported claims or references. Return only the rewritten text.\n\nText:",
        "icon": "document"
      },
      {
        "id": 39,
        "name": "Technical",
        "prompt": "Rewrite the text below in precise technical language for an informed reader. Use technical terms only where they add accuracy, and don't add technical details I didn't give. Return only the rewritten text.\n\nText:",
        "icon": "code"
      },
      {
        "id": 40,
        "name": "Persuasive",
        "prompt": "Rewrite the text below to make its argument as persuasive as possible. Strengthen the reasoning, but don't exaggerate or invent evidence, guarantees, or claims. Return only the rewritten text.\n\nText:",
        "icon": "target"
      },
      {
        "id": 41,
        "name": "Neutral",
        "prompt": "Rewrite the text below in an objective, neutral tone. Remove emotional or persuasive framing and keep the facts and meaning. Return only the rewritten text.\n\nText:",
        "icon": "neutral"
      },
      {
        "id": 42,
        "name": "Enthusiastic",
        "prompt": "Rewrite the text below with more energy and enthusiasm while keeping it natural. Don't add exaggerated claims or change my message. Return only the rewritten text.\n\nText:",
        "icon": "energy"
      },
      {
        "id": 43,
        "name": "Apologetic",
        "prompt": "Rewrite the text below as a sincere, professional apology. Don't invent events or admit to anything the text doesn't support. Return only the apology.\n\nText:",
        "icon": "apology"
      },
      {
        "id": 44,
        "name": "Firm",
        "prompt": "Rewrite the text below to state my position clearly and firmly, without hostility, insults, or threats. Return only the rewritten text.\n\nText:",
        "icon": "shield"
      }
    ]
  },
  {
    "id": "email_communication",
    "name": "Email & communication",
    "tier": 7,
    "prompts": [
      {
        "id": 81,
        "name": "Reply",
        "prompt": "Draft a reply to the message below. The point I want to make: [paste or type your main point]\n\nDon't invent facts, promises, or personal details. Return only the reply.\n\nMessage:\n[paste the message]",
        "icon": "chat"
      },
      {
        "id": 82,
        "name": "Reply - Short",
        "prompt": "Draft a short reply to the message below that deals with the main point. The point I want to make: [paste or type your main point]\n\nDon't invent facts, promises, or personal details. Return only the reply.\n\nMessage:\n[paste the message]",
        "icon": "shorten"
      },
      {
        "id": 83,
        "name": "Reply - Professional",
        "prompt": "Draft a professional reply to the message below. The point I want to make: [paste or type your main point]\n\nDon't invent facts, promises, or personal details. Return only the reply.\n\nMessage:\n[paste the message]",
        "icon": "briefcase"
      },
      {
        "id": 84,
        "name": "Reply - Friendly",
        "prompt": "Draft a friendly, natural reply to the message below. The point I want to make: [paste or type your main point]\n\nDon't invent facts, promises, or personal details. Return only the reply.\n\nMessage:\n[paste the message]",
        "icon": "human"
      },
      {
        "id": 85,
        "name": "Reply - Firm",
        "prompt": "Draft a firm but professional reply to the message below, with no insults, threats, or needless escalation. The point I want to make: [paste or type your main point]\n\nDon't invent facts, promises, or personal details. Return only the reply.\n\nMessage:\n[paste the message]",
        "icon": "shield"
      },
      {
        "id": 86,
        "name": "Reply - Decline",
        "prompt": "Draft a clear, polite reply that declines the request in the message below. Don't make up a reason for declining.\n\nDon't invent facts, promises, or personal details. Return only the reply.\n\nMessage:\n[paste the message]",
        "icon": "decline"
      },
      {
        "id": 87,
        "name": "Reply - Follow Up",
        "prompt": "Draft a short, action-focused follow-up to the message below. What I want to happen next: [paste or type the next step]\n\nDon't invent facts, promises, or personal details. Return only the reply.\n\nMessage:\n[paste the message]",
        "icon": "follow-up"
      },
      {
        "id": 88,
        "name": "Request Clarification",
        "prompt": "I received the message below and need more information. Draft a reply asking the sender only for what is needed to clear up what's unclear. Return only the reply.\n\nMessage:",
        "icon": "help"
      },
      {
        "id": 89,
        "name": "Ask for Action",
        "prompt": "Write a short message asking for the action described below. Don't add unrelated requests. Return only the message.\n\nText:",
        "icon": "action"
      },
      {
        "id": 90,
        "name": "Remove Emotion",
        "prompt": "Rewrite the message below so it is objective and professional. Remove emotional or inflammatory wording, and keep the facts, my position, and my request. Return only the revised message.\n\nMessage:",
        "icon": "neutral"
      }
    ]
  },
  {
    "id": "marketing_sales",
    "name": "Marketing & sales",
    "tier": 15,
    "prompts": [
      {
        "id": 171,
        "name": "Marketing Copy",
        "prompt": "Rewrite the text below as compelling marketing copy. Don't invent benefits, proof, statistics, or guarantees. Return only the copy.\n\nText:",
        "icon": "megaphone"
      },
      {
        "id": 172,
        "name": "Headline",
        "prompt": "Write 5 short headlines that accurately reflect the text below. Don't add claims it doesn't make.\n\nText:",
        "icon": "headline"
      },
      {
        "id": 173,
        "name": "Hook",
        "prompt": "Write 5 strong opening hooks based on the text below, with no misleading exaggeration or made-up claims.\n\nText:",
        "icon": "hook"
      },
      {
        "id": 174,
        "name": "Call to Action",
        "prompt": "Write a call to action that fits the offer in the text below. Don't invent an offer, deadline, or benefit.\n\nText:",
        "icon": "cta"
      },
      {
        "id": 175,
        "name": "Value Proposition",
        "prompt": "Turn the information below into a clear value proposition for customers. Don't invent differentiators.\n\nInformation:",
        "icon": "value"
      },
      {
        "id": 176,
        "name": "Sales Pitch",
        "prompt": "Turn the information below into a short sales pitch, using only the benefits and evidence it contains.\n\nInformation:",
        "icon": "sales"
      },
      {
        "id": 177,
        "name": "Customer Benefit",
        "prompt": "Rewrite the text below around the benefits that matter most to the customer. Don't invent outcomes.\n\nText:",
        "icon": "benefit"
      },
      {
        "id": 178,
        "name": "Objection Handling",
        "prompt": "List likely customer objections to the offer below and give a grounded response to each. Don't invent evidence or guarantees.\n\nOffer:",
        "icon": "objection"
      },
      {
        "id": 179,
        "name": "Product Description",
        "prompt": "Turn the information below into a clear product description, using only the features and claims it contains. Don't make up specifications.\n\nInformation:",
        "icon": "product"
      },
      {
        "id": 180,
        "name": "Social Post",
        "prompt": "Turn the text below into a short [platform] post that represents it accurately. Don't add claims or context.\n\nText:",
        "icon": "chat"
      }
    ]
  }
]);
