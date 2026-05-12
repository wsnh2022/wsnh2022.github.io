# Google Analytics 4 (GA4) — Beginner Reference Notes

## What Is GA4

Google Analytics 4 is a free web analytics service by Google.
It tracks visitor behavior on your website and reports it in a dashboard at `analytics.google.com`.

No backend required. Works on static sites hosted on GitHub Pages.

---

## What It Tracks (For a Portfolio Site)

| Metric | What It Tells You |
|---|---|
| Active users | How many people visited |
| Page views | Which pages were viewed |
| Traffic source | Google search / direct / LinkedIn / referral |
| Session duration | How long visitors stayed |
| Device type | Mobile / desktop / tablet |
| Country / city | Where visitors are located |
| Events | Clicks, scrolls, outbound link clicks |

---

## Account Structure (Important to Understand First)

```
Google Account (Gmail)
└── Analytics Account        ← top-level container (e.g. "My Portfolio Analytics")
    └── Property             ← one per website/app (e.g. "WSNH Portfolio")
        └── Data Stream      ← one per platform: Web / iOS / Android
            └── Measurement ID  ← G-XXXXXXXXXX  (goes into your HTML)
```

The **Measurement ID** is the only thing that goes into your HTML files.

---

## Limits Per Gmail Account (Free Tier)

| Item | Limit |
|---|---|
| Analytics Accounts | 100 per Google account |
| Properties per Account | 100 per Analytics account |
| Data Streams per Property | 50 per property |
| Websites you can track | Effectively unlimited within above structure |
| Cost | Free |

**Practical meaning:** One Gmail account can track hundreds of separate websites across multiple properties at no cost.

---

## Step-by-Step Integration Guide

### Step 1 — Go to Google Analytics

Navigate to `https://analytics.google.com`
Sign in with your Gmail account.

---

### Step 2 — Create an Analytics Account

1. Click **Admin** (gear icon, bottom-left)
2. Under the **Account** column → click **Create Account**
3. Enter an account name (e.g. `Personal Projects`)
4. Accept data sharing settings → click **Next**

---

### Step 3 — Create a Property

1. Enter a property name (e.g. `WSNH Portfolio`)
2. Set your reporting time zone and currency
3. Click **Next**

---

### Step 4 — Set Business Details

| Field | Value for a Portfolio |
|---|---|
| Industry | Technology |
| Business size | Small (1–10 employees) |
| Objectives | Understand web traffic + View user engagement |

Click **Create**.

---

### Step 5 — Create a Data Stream

1. Choose platform → **Web**
2. Enter your website URL (e.g. `https://wsnh2022.github.io`)
3. Enter a stream name (e.g. `WSNH Portfolio Web`)
4. Leave **Enhanced measurement** ON
5. Click **Create stream**
6. Copy the **Measurement ID** — format: `G-XXXXXXXXXX`

---

### Step 6 — Add the Tag to Your HTML

Paste the following into the `<head>` section of **every HTML page**, as early as possible:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace both instances of `G-XXXXXXXXXX` with your actual Measurement ID.

**Placement rule:** Must be in `<head>`, before `</head>`. Earlier is better.

---

### Step 7 — Verify Tag is Firing

1. Go to `analytics.google.com`
2. Admin → Data Streams → click your stream
3. Scroll to **"View tag instructions"**
4. GA4 will confirm: `Google tag G-XXXXXXXXXX is already installed on your site`

Alternatively: open your live site, then check GA4 → **Reports → Realtime** — you should see yourself as an active user.

---

### Step 8 — Wait for Data

| Timeline | What Happens |
|---|---|
| 0–1 hour | Realtime report shows live visitors |
| 24 hours | Standard reports begin populating |
| 48–72 hours | Full data visible in all report sections |

---

## Multi-Site Setup (One Gmail Account)

If you have more than one website to track:

- **Same project / domain family** → add a new Data Stream inside the same Property
- **Completely separate website** → create a new Property inside the same Analytics Account
- **Completely separate client or project** → create a new Analytics Account

You do not need a new Gmail account for each site.

---

## Common Mistakes

| Mistake | Result |
|---|---|
| Using someone else's Measurement ID | Your data goes to their account |
| Placing tag in `<body>` instead of `<head>` | Tag may fire late or inconsistently |
| Only adding tag to one page | Other pages go untracked |
| Not pushing changes to GitHub Pages | Tag exists locally but not on live site |
| Checking reports before 24 hours | Reports appear empty — not broken |

---

## This Project — WSNH Portfolio

| Field | Value |
|---|---|
| Analytics Account | Personal / WSNH |
| Property | WSNH Portfolio |
| Data Stream | WSNH Portfolio Web |
| Stream URL | `https://wsnh2022.github.io` |
| Measurement ID | `G-YT5JNT9C24` |
| Files Tagged | `index.html`, `experience.html` |
| Tag Placement | `<head>`, lines 33–43 (index), lines 32–39 (experience) |
| Verified | Yes — GA4 confirmed tag installed |

---

*Reference notes — GA4 Free Tier — Static Site / GitHub Pages context.*
