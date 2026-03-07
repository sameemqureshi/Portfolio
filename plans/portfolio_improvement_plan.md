# Portfolio Improvement Plan — Sameem Qureshi
> Generated: 2026-02-19 | Status: Pending Implementation

---

## Overview

This plan covers all improvements identified during the portfolio review, organized by priority tier. Each item includes the affected file, the problem, and the exact fix required.

---

## 🔴 PHASE 1 — Critical Bugs (Fix First)

### 1.1 Remove Duplicate "Recent Articles" Section
- **File:** `app/page.tsx`
- **Lines:** 544–575
- **Problem:** The entire Articles section (`<motion.section id="articles">`) is copy-pasted verbatim. Two sections share the same `id="articles"`, breaking anchor navigation and causing duplicate DOM content.
- **Fix:** Delete lines 544–575 entirely. Keep only the first instance (lines 511–542).

---

### 1.2 Remove Public Phone Number
- **File:** `app/page.tsx`
- **Line:** 154
- **Problem:** Personal mobile number `+91 7972817097` is hardcoded in the hero section, publicly visible to all visitors and web crawlers.
- **Fix:** Remove the phone number span entirely. Replace with city/country only:
  ```tsx
  // Before
  Pune · India · <span className="font-mono">+91 7972817097</span>
  
  // After
  Pune, India
  ```

---

### 1.3 Fix `id="skills"` Anchor Mismatch
- **File:** `app/page.tsx`
- **Lines:** 353 (Education section), 447 (Skills section)
- **Problem:** The Education/Certifications section has `id="skills"`, but the actual "Technical Arsenal" skills grid has no `id`. The navbar links to `#skills` and lands on Education instead of Skills.
- **Fix:**
  - Remove `id="skills"` from the Education section (line 353) → add `id="education"` instead
  - Add `id="skills"` to the Technical Arsenal section (line 447)
  - Update navbar to add `{ name: 'Education', href: '#education' }` if desired

---

### 1.4 Fix Missing `id` on Testimonials Section
- **File:** `app/page.tsx`
- **Line:** 409
- **Problem:** Testimonials section has no `id`, cannot be deep-linked or added to navbar.
- **Fix:** Add `id="testimonials"` to the section element.

---

## 🟠 PHASE 2 — High Priority UX & Credibility

### 2.1 Add Hero CTA Buttons
- **File:** `app/page.tsx`
- **Lines:** 83–157 (hero section)
- **Problem:** No primary call-to-action in the hero. Visitors don't know what to do in the first 30 seconds. The 30-second test fails.
- **Fix:** Add two CTA buttons below the badge pills:
  ```tsx
  // Primary CTA
  <Link href="#projects">
    <button>View My Work ↓</button>
  </Link>
  
  // Secondary CTA
  <a href="/resume.pdf" download>
    Download Resume
  </a>
  ```
- **Also:** Add a `resume.pdf` to the `/public` directory.

---

### 2.2 Replace Placeholder Testimonials
- **File:** `app/data.ts`
- **Lines:** 211–222
- **Problem:** `Sarah Chen` (Senior Product Manager) and `David Miller` (Lead Developer @ TechFlow) appear to be fabricated placeholder names. Generic roles with no LinkedIn verification hurt credibility more than having no testimonials.
- **Fix Options (choose one):**
  - **Option A:** Replace with real LinkedIn recommendations from actual colleagues at Logitech or IIT Madras. Add a `linkedIn` URL field to each testimonial for verification.
  - **Option B:** Remove the testimonials section entirely until real ones are available.
  - **Option C:** Replace with a "LinkedIn Recommendations" link card pointing to your actual LinkedIn profile.

---

### 2.3 Fix OG Image Format (SVG → PNG)
- **File:** `app/layout.tsx` (line 30), `public/og-image.svg`
- **Problem:** LinkedIn, Twitter/X, Facebook, and most social platforms do not render SVG Open Graph images. The portfolio will show a broken/missing preview when shared on social media.
- **Fix:**
  1. Convert `public/og-image.svg` to `public/og-image.png` at 1200×630px resolution.
  2. Update `app/layout.tsx`:
     ```tsx
     // Before
     url: "/og-image.svg"
     
     // After
     url: "/og-image.png"
     ```
  3. Recommended content for OG image: Name, title, company, and a clean dark background matching the portfolio theme.

---

### 2.4 Enable Articles in Navbar
- **File:** `app/components/Navbar.tsx`
- **Line:** 27
- **Problem:** Articles link is commented out (`// { name: 'Articles', href: '/articles' }`), but the Articles section renders on the homepage and `/articles` route exists.
- **Fix:** Uncomment the Articles nav link. Ensure `/articles` page has real content before enabling.

---

### 2.5 Add Accessibility to Mobile Menu Button
- **File:** `app/components/Navbar.tsx`
- **Line:** 63
- **Problem:** Mobile hamburger button has no `aria-label`, failing WCAG 2.1 AA accessibility standards.
- **Fix:**
  ```tsx
  // Before
  <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ...">
  
  // After
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden ..."
    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={isOpen}
  >
  ```

---

## 🟡 PHASE 3 — Content Quality

### 3.1 Remove HSC/SSC Education Entries
- **File:** `app/data.ts`
- **Lines:** 252–263
- **Problem:** Showing Class 10 (SSC) and Class 12 (HSC) results is standard for fresh graduates but looks padded for a working professional at Logitech with two bachelor's degrees.
- **Fix:** Remove the last two entries from the `education` array. Keep only:
  - IIT Madras — BS in Data Science (CGPA: 8.09)
  - DYPIEMR, Pune — BS in Computer Science (CGPA: 8.70)

---

### 3.2 Add Quantified Impact to Project Descriptions
- **File:** `app/data.ts`
- **Lines:** 9–157
- **Problem:** Project descriptions use vague language ("scalable", "robust", "production-ready") without measurable outcomes. Hiring managers want numbers.
- **Fix:** Update each project's `desc` field with metrics:

  | Project | Current | Suggested Improvement |
  |---|---|---|
  | Heart Disease MLOps | "Production-ready...MLOps workflow" | Add: "Achieved 94% AUC; <200ms inference on GKE with auto-scaling" |
  | DocuVision RAG | "Improved accuracy and processing speed" | Add specific % improvement over baseline RAG |
  | Speech-to-Text | "Scalable automated pipeline" | Add: "Processed X hours of audio; reduced curation time by Y%" |
  | Answerly Chatbot | "Deliver grounded answers" | Add: "Reduced hallucination rate by X% using strict prompt grounding" |

---

### 3.3 Add Real Article Content or External Links
- **File:** `app/data.ts` (lines 159–209), `app/articles/[slug]/page.tsx`
- **Problem:** 7 articles are listed with titles and descriptions but appear to be stubs with no real content. Visitors clicking through will find empty pages, damaging credibility.
- **Fix Options:**
  - **Option A (Recommended):** Write full MDX content for at least 2–3 articles. The MLOps on GCP and RAG articles align perfectly with your project work.
  - **Option B:** Add `externalUrl` field to articles that link to dev.to / Medium / Hashnode posts.
  - **Option C:** Remove articles from homepage until content is ready. Keep the `/articles` route but show a "Coming Soon" state.

---

### 3.4 Add More Work Experience or Open Source Section
- **File:** `app/data.ts`
- **Lines:** 224–236
- **Problem:** Only one work experience entry (Logitech) makes the experience section feel thin, especially for someone with a strong project portfolio.
- **Fix Options:**
  - Add any internships, freelance, or contract work
  - Add a separate "Open Source Contributions" section
  - Add a "Side Projects" or "Freelance" entry if applicable

---

## 🔵 PHASE 4 — Performance & Architecture

### 4.1 Extract Client State to Sub-Component
- **File:** `app/page.tsx`
- **Line:** 1 (`'use client'`)
- **Problem:** The entire page is a client component because of `useState` for project filtering. This disables SSR for the whole page, hurting initial load performance and SEO crawlability.
- **Fix:** Create `app/components/ProjectsSection.tsx` as a client component containing only the filter state and project grid. The rest of `app/page.tsx` becomes a server component.
  ```
  app/
  ├── page.tsx              ← Server Component (no 'use client')
  └── components/
      └── ProjectsSection.tsx  ← Client Component ('use client', useState)
  ```

---

### 4.2 Fix Image Priority for Above/Below Fold
- **File:** `app/page.tsx` (line 298), `app/components/ProjectImage.tsx`
- **Problem:** All project images use the same loading strategy. Above-fold images should use `priority={true}`, below-fold should use `loading="lazy"`.
- **Fix:** Pass `priority` prop based on project index:
  ```tsx
  <Image
    priority={index < 2}  // First 2 projects are above fold
    loading={index < 2 ? "eager" : "lazy"}
    ...
  />
  ```

---

### 4.3 Add `viewport` Meta Tag
- **File:** `app/layout.tsx`
- **Problem:** No explicit viewport configuration. Next.js handles this by default, but adding explicit viewport export ensures proper mobile rendering.
- **Fix:** Add to `app/layout.tsx`:
  ```tsx
  export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#020617', // slate-950
  };
  ```

---

### 4.4 Add Structured Data (JSON-LD)
- **File:** `app/layout.tsx` or `app/page.tsx`
- **Problem:** No structured data markup. Adding `Person` schema helps Google understand who you are and can trigger rich results.
- **Fix:** Add JSON-LD script in layout:
  ```tsx
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Sameem Qureshi",
        "jobTitle": "AI/ML & LLM Engineer",
        "worksFor": { "@type": "Organization", "name": "Logitech" },
        "url": "https://sameemqureshi.dev",
        "sameAs": [
          "https://github.com/sameemqureshi",
          "https://www.linkedin.com/in/sameemqureshi/"
        ]
      })
    }}
  />
  ```

---

## 🟢 PHASE 5 — Enhancements & Differentiators

### 5.1 Add "Open to Work" / "Available for Opportunities" Badge
- **File:** `app/page.tsx` (hero section)
- **Problem:** Recruiters can't tell at a glance if you're open to new roles.
- **Fix:** Add an animated availability badge near your name:
  ```tsx
  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
    Open to Opportunities
  </span>
  ```

---

### 5.2 Add Resume/CV Download Button
- **File:** `app/page.tsx` (hero section), `app/components/Navbar.tsx`
- **Problem:** No way to download a resume. Hiring managers expect this.
- **Fix:**
  1. Add `public/resume.pdf` (keep it updated)
  2. Add download button in hero and/or navbar:
     ```tsx
     <a href="/resume.pdf" download="Sameem_Qureshi_Resume.pdf">
       Download CV
     </a>
     ```

---

### 5.3 Verify ChatWidget is Functional
- **File:** `app/components/ChatWidget.tsx`
- **Problem:** The AI chat widget is the most memorable differentiator in the portfolio. If it's a UI stub with no real responses, it will frustrate visitors and leave a negative impression.
- **Fix:** Ensure the widget connects to a real LLM endpoint (e.g., OpenAI, Groq, or a local model). It should answer questions about your experience, projects, and availability.

---

### 5.4 Add GitHub Stars to Project Cards
- **File:** `app/page.tsx` (project cards), `app/data.ts`
- **Problem:** Projects have GitHub links but no social proof metrics.
- **Fix:** Fetch GitHub star counts at build time using `fetch` in a server component:
  ```tsx
  // In a server component or getStaticProps equivalent
  const res = await fetch('https://api.github.com/repos/sameemqureshi/DocuVision-RAG-AI-Driven-Visual-Knowledge-Extraction');
  const { stargazers_count } = await res.json();
  ```

---

### 5.5 Add "Currently Building" Section
- **File:** `app/data.ts`, `app/page.tsx`
- **Problem:** No indication of what you're actively working on. This signals momentum and keeps the portfolio fresh.
- **Fix:** Add a small "Currently Building" card near the hero or in the about section:
  ```
  🔨 Currently Building: [Project Name] — [one-line description]
  ```

---

## Implementation Order

```
Phase 1 (Critical)    → Fix bugs, takes ~30 minutes
Phase 2 (High)        → UX/credibility, takes ~2 hours  
Phase 3 (Content)     → Writing/data work, takes ~4 hours
Phase 4 (Performance) → Architecture refactor, takes ~3 hours
Phase 5 (Enhancements)→ New features, takes ~4 hours
```

**Total estimated effort:** ~13 hours of focused work

---

## Files to Modify

| File | Phases |
|---|---|
| `app/page.tsx` | 1.1, 1.2, 1.3, 1.4, 2.1, 4.1, 4.2, 5.1, 5.2 |
| `app/data.ts` | 2.2, 3.1, 3.2, 3.3, 3.4 |
| `app/layout.tsx` | 2.3, 4.3, 4.4 |
| `app/components/Navbar.tsx` | 2.4, 2.5, 5.2 |
| `app/components/ChatWidget.tsx` | 5.3 |
| `app/components/ProjectsSection.tsx` | 4.1 (new file) |
| `public/og-image.png` | 2.3 (new file, replace SVG) |
| `public/resume.pdf` | 5.2 (new file) |

---

*Plan created by portfolio review. Implement phases in order for maximum impact.*
