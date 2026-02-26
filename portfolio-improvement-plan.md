# Portfolio Improvement Plan — wsnh2022.github.io
**Subject:** Yoghesh VM  
**Audited:** 2026-02-22  
**Scope:** Content and copy changes only. No redesign. Static HTML/CSS/JS. GitHub Pages.

---

## 1. Section-by-Section Audit

### 1.1 `<title>` / Page Meta
| | Current | Gap |
|---|---|---|
| Title tag | `Yoghesh VM \| Data Analyst \| Business Automation & Supply Chain Optimization` | Omits freelance, design, and content services entirely |
| Meta description | Not audited (assumed absent or matching title) | Missing SEO signal for non-data clients |

---

### 1.2 Hero Section
| | Current | Gap |
|---|---|---|
| Headline | *I Help Businesses Make Faster, Smarter Decisions Through Data* | Excludes design, content, and web development audiences |
| Subheadline | *Data Analyst specializing in Business Automation & Supply Chain Optimization — 7+ years* | Accurate but one-dimensional. Freelance range is invisible. |
| CTA buttons | LinkedIn / My Works | "My Works" links to `#contact`, not to the project section — broken UX |
| Stat counters | 4 counters — all data/supply chain framed | No signal of creative or freelance output volume |

---

### 1.3 Philosophy Section
| | Current | Gap |
|---|---|---|
| Copy | Frames work exclusively around operational data, warehouse managers, procurement | Creative and content clients will self-select out here |
| Chips | Data Translation / Process Optimization / Team Enablement | Missing: Content Strategy, Visual Communication, Web Development |

---

### 1.4 Technical Proficiency (Skill Bars)
| | Current | Gap |
|---|---|---|
| Listed skills | SQL, Power BI, Excel/VBA, Python, AutoHotkey, n8n | Canva, content creation, web dev (HTML/CSS/JS) absent entirely |

---

### 1.5 Project Portfolio
| | Current | Gap |
|---|---|---|
| Filter tags | All / Power BI / Python / AutoHotkey / n8n / SQL / Electron | No tags for: Design, Content, Web, Freelance |
| PROJ_001 | PopSearch — Desktop App | Present, documented, linked |
| PROJ_002 | Facility Automation Pipeline | Present, documented, linked |
| Empty state | "No projects found in this category" + "More coming soon" | Dead end for every non-data filter. Actively signals incompleteness. |
| Missing | Social Media Content Creation | No card, no proof |
| Missing | Website / Portfolio Development | No card, no proof |
| Missing | Canva Design (cards, flyers, branding) | No card, no proof |

---

### 1.6 Beyond the Terminal
| | Current | Gap |
|---|---|---|
| Copy | Two bullet points — Digital Branding, Lightweight Tools | Generic. No specifics. |
| CTA | `[DESIGN SHOWCASE]` button | Button exists but links to nothing (dead anchor or `#contact`) |
| Proof | None | Section is a claim with zero evidence |

---

### 1.7 Footer / Contact
| | Current | Gap |
|---|---|---|
| Social links | GitHub, LinkedIn, Instagram, Email | Instagram handle (`datacraft.yogi`) suggests content work — not surfaced anywhere above the fold |
| Footer tagline | *Built with precision. Optimized for impact.* | Fine. Keep it. |

---

## 2. Exact Content Recommendations Per Gap

### 2.1 Page Meta
**Change the title tag to:**
```
Yoghesh VM | Data Analyst · Automation · Freelance Design & Content
```
**Add a meta description:**
```html
<meta name="description" content="Yoghesh VM — Data Analyst and AI-assisted freelancer 
specializing in Supply Chain analytics, workflow automation, social media content, 
Canva design, and static web development.">
```
**Where:** `<head>` block in `index.html`.  
**Proof required:** None. Copy change only.

---

### 2.2 Philosophy Section — Chip Additions
Add three chips to the existing row:

```
Content Strategy | Visual Communication | Web Development
```

No copy rewrite required in this section — the chip additions do the repositioning work without contradicting the operational narrative.

---

### 2.3 Technical Proficiency — Add Three Skill Bars
Append to the existing skill bar list:

| Skill | Suggested % | Justification |
|---|---|---|
| Canva & Visual Design | 85% | Primary tool for all three design service categories |
| HTML / CSS / JavaScript | 80% | Portfolio site itself is the proof of work |
| Social Media Content Strategy | 75% | Conservative — adjust up if volume of output supports it |

Do not fabricate percentages. Set these at levels you can defend in a client conversation.

---

### 2.4 Project Portfolio — Filter Tag Additions
Add the following filter buttons to the existing tag row:

```
Design | Content | Web
```

Each new project card below must map to at least one of these tags. The existing empty-state message ("No projects found in this category yet") must be removed or replaced with cards before launch.

---

## 3. Revised Hero Headline and Subheadline

### Current
> **I Help Businesses Make Faster, Smarter Decisions Through Data**  
> Data Analyst specializing in Business Automation & Supply Chain Optimization with 7+ years of experience transforming workflows and delivering measurable ROI.

### Revised
> **Data-Driven by Trade. Multi-Disciplinary by Design.**  
> I'm Yoghesh VM — Data Analyst and AI-assisted freelancer with 7+ years in Supply Chain analytics, workflow automation, and operations. I also build static websites, create Canva-based brand assets, and produce social media content for small businesses and professionals.

**Rationale:**  
- Headline anchors on data identity first — preserves Supply Chain positioning.  
- "AI-assisted freelancer" signals range without inflating seniority claims.  
- Subheadline enumerates all three missing services explicitly so search and referral traffic self-qualifies.  
- No claims that require proof beyond what's already in the project section.

**Also fix:** Change the "MY WORKS" CTA button `href` from `#contact` to `#projects`.

---

## 4. Project Cards for the Three Missing Skill Areas

---

### PROJ_003 — Social Media Content Creation

```
ID: PROJ_003

Title: Social Media Content System — datacraft.yogi

Stack:
  - Canva (visual templates)
  - Meta Business Suite (scheduling)
  - ChatGPT / Claude (copy drafting)
  - Instagram

Type: Freelance / Ongoing Content Operation

Description:
  Designed and maintained a templated content pipeline for @datacraft.yogi on 
  Instagram. Produces data-themed educational posts, carousel breakdowns, and 
  reels covering analytics, automation, and career content. All visuals built 
  in Canva with a consistent brand system. Copy drafted with AI assistance and 
  edited for voice consistency.

Proof of Work:
  - Live Instagram: instagram.com/datacraft.yogi
  - [Link to 3–5 best-performing posts or a Canva export PDF if account is small]

Outcome:
  Active content library. Demonstrates ability to produce consistent, 
  branded social content independently — the exact service offered to clients.

Filter Tags: Content, Design
```

**Proof required:** Link the Instagram account directly. If follower count or engagement is low, lead with content quality and consistency, not metrics.

---

### PROJ_004 — Website / Portfolio Development

```
ID: PROJ_004

Title: Personal Portfolio — wsnh2022.github.io

Stack:
  - HTML5
  - CSS3 (custom, no frameworks)
  - Vanilla JavaScript
  - GitHub Pages

Type: Web Development / Self-Initiated

Description:
  Designed and built this portfolio from scratch as a static site hosted on 
  GitHub Pages. No frameworks, no build tools, no dependencies. Structured 
  for fast load times, long-term maintainability, and GitHub-renderable 
  documentation. Serves as both a professional showcase and a live proof of 
  web development capability.

Proof of Work:
  - Live site: wsnh2022.github.io
  - Source: github.com/wsnh2022/wsnh2022.github.io (make repo public if not already)

Outcome:
  Fully self-authored site. Zero third-party libraries. Demonstrates ability 
  to deliver a complete static web product from brief to deployment.

Filter Tags: Web
```

**Proof required:** Make the source repository public. The site is already live — the repo is the proof.

---

### PROJ_005 — Canva Design (Cards, Flyers, Branding)

```
ID: PROJ_005

Title: Freelance Brand Asset Library

Stack:
  - Canva Pro
  - Brand kit management
  - Print-ready export (PDF, PNG)

Type: Freelance Design / Client Work

Description:
  Created print and digital brand assets for [N] clients/projects including 
  visiting cards, event flyers, and social media branding kits. All work 
  produced in Canva with attention to alignment, typography hierarchy, color 
  consistency, and client-specified tone. Assets delivered print-ready at 
  300 DPI where applicable.

Proof of Work:
  - [Link to Behance portfolio, Google Drive folder, or hosted image gallery]
  - Minimum: 4–6 sample pieces covering at least two asset types

Outcome:
  Delivered [X] assets across [N] projects. Repeat clients or referrals, 
  if applicable, noted here.

Filter Tags: Design
```

**Proof required:** This card cannot go live as a placeholder. You need a minimum of 4–6 samples in a publicly linkable location — Behance, a Google Drive share link, or a static `/design/` subdirectory in the GitHub Pages repo. Pick one and link it before publishing this card.

---

## 5. Revised "Beyond the Terminal" Section

### Current (verbatim)
> My expertise extends into creative digital organization and branding. I apply the same discipline to design as I do to code.
> - **Digital Branding** — Posters, Flyers, Social Media Assets, and Visiting Cards designed with precision and purpose.
> - **Lightweight Tools** — Building standalone Windows utilities...
> [DESIGN SHOWCASE] ← dead link

---

### Revised Copy

**Section heading:** `Beyond the Terminal`  
*(Keep the existing heading — it works.)*

**Body copy:**

> Data analysis is the anchor. It's not the ceiling.
>
> I produce Canva-based brand assets — visiting cards, event flyers, and social media kits — for small businesses and independent professionals who need clean, print-ready output without agency overhead. I also run [@datacraft.yogi](https://www.instagram.com/datacraft.yogi/) on Instagram, a self-managed content operation covering analytics, automation, and career topics for data professionals.
>
> The same logic that governs a good dashboard governs a good flyer: clear hierarchy, no noise, right information in front of the right audience.

**Replace the dead `[DESIGN SHOWCASE]` button with two concrete links:**

```html
<a href="https://www.instagram.com/datacraft.yogi/" target="_blank">Content Feed →</a>
<a href="[YOUR DESIGN PORTFOLIO LINK]" target="_blank">Design Samples →</a>
```

If the design portfolio link is not ready, remove the button entirely. A dead link is worse than no link.

---

## 6. Tag and Filter Category Additions — Summary

| New Tag | Maps To | Required Before Launch |
|---|---|---|
| `Design` | PROJ_003, PROJ_005 | Yes — at least one card with proof |
| `Content` | PROJ_003 | Yes — Instagram link minimum |
| `Web` | PROJ_004 | Yes — make source repo public |

Add these as filter buttons in the same `<div>` or `<ul>` that contains the existing All / Power BI / Python / AutoHotkey / n8n / SQL / Electron buttons.

The JavaScript filter logic that drives existing tags should require no changes — new tags follow the same `data-tag` attribute pattern already in use, assuming that's how the current filter is implemented.

---

## Launch Checklist — Before Publishing Any of This

- [ ] `[DESIGN SHOWCASE]` button target resolved — link or remove
- [ ] `MY WORKS` hero CTA fixed to point at `#projects`
- [ ] PROJ_004 source repo made public on GitHub
- [ ] Minimum 4–6 design samples hosted and linked for PROJ_005
- [ ] Instagram linked directly from PROJ_003 card
- [ ] Meta description added to `<head>`
- [ ] Three new filter tags added to project filter bar
- [ ] Empty-state cards removed or replaced before any tag goes live

---

*Plan ends. No redesign required. All items above are content, copy, or attribute-level changes.*
