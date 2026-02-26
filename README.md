# Yoghesh — Data Analyst & AI-Generalist Freelancer

> Data analysis is where everything starts — automation, design, and development are what make it stick.

**Live Portfolio → [wsnh2022.github.io](https://wsnh2022.github.io/)**

---

## Who This Is For

**Recruiters:** This repository is the source code for my personal portfolio. The site itself is the deliverable — visit the live link above. The README documents how it was built and why decisions were made the way they were.

**Developers:** Pure HTML5, CSS3, and Vanilla JavaScript. No frameworks. No build tools. No dependencies beyond Tailwind CDN and Font Awesome. Every decision is intentional and documented below.

---

## What I Do

7+ years in supply chain analytics and multi-domain workflow engineering. I work across the full operational stack:

| Domain | Tools |
|---|---|
| Data & Analytics | SQL, Power BI, Excel (VBA + Power Query), Python |
| Workflow Automation | AutoHotkey v2, n8n, Webhooks, API integrations |
| Web Development | HTML5, CSS3, Vanilla JS, Tailwind CSS |
| Design & Content | Canva Pro, Brand Assets, Social Media ([@datacraft.yogi](https://www.instagram.com/datacraft.yogi/)) |

I don't specialize in one tool. I specialize in making disconnected systems work together.

---

## Proficiency Levels

| Tool / Skill | Level |
|---|---|
| Excel (VBA, Power Query) | 95% |
| AutoHotkey v2 | 90% |
| SQL | 90% |
| Power BI (DAX, Data Modeling) | 85% |
| Canva & Visual Design | 85% |
| n8n Workflow Automation | 80% |
| Web Technologies (HTML/CSS/JS) | 80% |
| Python (Scripting, Analysis) | 75% |
| Social Media Content | 75% |

---

## Impact Metrics

| Metric | Result |
|---|---|
| Cost Savings | ₹1.7 Million — non-moving inventory reduction |
| Efficiency Gained | 40+ hrs/month — MIS report automation |
| Service Rank | #1 in State — inventory optimization |
| CSAT Improvement | 72% → 95% — accelerated escalation resolution |
| Automation Coverage | 100% manual entry eliminated (ticketing pipeline) |
| Hours Saved Annually | 1920+ hrs — facility automation system |

---

## Featured Projects

### PROJ_001 — [PopSearch: Instant Search Assistant](https://github.com/wsnh2022/pop-search)
**Stack:** Electron, AutoHotkey v2 | **Type:** Desktop Utility

Portable Windows search tool with instant access to 40+ search engines. 60MB idle RAM. Built for maximum efficiency with zero installation friction.

---

### PROJ_002 — [Facility Automation Pipeline](https://github.com/wsnh2022/n8n-form-to-inbox-automation)
**Stack:** n8n, Webhooks, Email API | **Type:** Workflow Engineering

End-to-end automated ticketing system. Eliminated 100% of manual data entry. Saves 330+ hours annually across facility operations.

---

### PROJ_003 — SQL ETL Pipeline
**Stack:** SQL | **Type:** Data Engineering

Structured query system extracting legacy retail data. Reduced reporting lag from 24 hours to real-time.

---

### PROJ_004 — [This Portfolio](https://github.com/wsnh2022/wsnh2022.github.io)
**Stack:** HTML5, CSS3, Vanilla JS, Tailwind CSS | **Type:** Web Development

Custom static site hosted on GitHub Pages. No frameworks. 95+ Lighthouse score. See technical details below.

---

### PROJ_005 — Brand Asset Library
**Stack:** Canva Pro | **Type:** Freelance Design

Custom print and digital brand assets for small businesses. Focus on typographic hierarchy, color consistency, and print-ready output. *(Full portfolio coming soon)*

---

## Technical Architecture — This Portfolio

### Stack Decision

| Choice | Reason |
|---|---|
| No React / Next.js | Portfolio sites do not need component trees or build pipelines |
| No CSS frameworks (installed) | Tailwind loaded via CDN — zero build config, full utility access |
| Vanilla JS only | No runtime dependencies, no version conflicts, full browser compatibility |
| GitHub Pages | Free, fast, continuous deployment on push — appropriate for a static site |

### Implementation Details

- **Styling:** Tailwind CSS utility-first with custom Glassmorphism effects and CSS animations
- **Animations:** IntersectionObserver-based scroll-reveal — no GSAP, no ScrollMagic
- **Interactivity:** Custom JS for project filtering, animated counters, active nav state on scroll
- **SEO:** Open Graph + Twitter Card meta tags, Schema.org JSON-LD structured data (Person)
- **Analytics:** Google Analytics 4 (Measurement ID: G-YT5JNT9C24) on all pages
- **Performance:** 95+ Lighthouse score — no render-blocking resources, lazy assets

---

## 🛠️ Local Development

While this is a static site, you can run a local development server for a better experience (auto-reload, proper asset paths):

```bash
# Install development dependencies (Vite)
npm install

# Start local development server
npm run dev

# Preview the site
npm run preview
```

---

## 📂 File Structure

```
wsnh_portfolio/
├── index.html              # Main portfolio page
├── experience.html         # Detailed experience page
├── SQL-Reference.html      # SQL implementation details
├── README.md               # This file
├── portfolio-improvement-plan.md
└── package.json            # Dev server config
```

---

## Repository Standards

- All code hand-written — no generators, no templates
- No external JS dependencies loaded at runtime (except Font Awesome icons)
- Comments in HTML explain intent, not mechanics
- Mobile-first responsive layout via Tailwind breakpoints

---

## Connect

| Platform | Link |
|---|---|
| LinkedIn | [yoghesh-analytics](https://www.linkedin.com/in/yoghesh-analytics/) |
| Instagram | [@datacraft.yogi](https://www.instagram.com/datacraft.yogi/) |
| Email | [wsnh.code5621@gmail.com](mailto:wsnh.code5621@gmail.com) |

---

*Built with precision. Optimized for impact. No frameworks were harmed in the making of this portfolio.*
