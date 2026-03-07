# Detailed Portfolio Improvement Plan (Sameem Qureshi)

## Executive Summary
This plan is organized into **4 implementation phases** with clear deliverables, dependencies, and success metrics.

**Estimated timeline:** 4–6 weeks (or ~20–26 focused hours).

---

## Phase 1 — Visual Enhancement & Content (Week 1–2)
**Goal:** Make projects visually compelling, enable testimonials, tighten navigation.

### 1.1 Project screenshots & media
**Files:** [`app/data.ts`](../app/data.ts), [`public/`](../public)

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 1.1.1 | Gather or create real screenshots for placeholder-image projects | High | 4–6h |
| 1.1.2 | Create hero images for flagship projects (Heart Disease MLOps, DocuVision RAG) | High | 2–3h |
| 1.1.3 | Update project `image` fields in [`projects`](../app/data.ts) | High | 30m |

**Implementation detail (data model improvement):**
Add optional `heroImage` per project (used on project detail pages).

```ts
// Example change in app/data.ts
{
  title: 'Household Services App',
  slug: 'household-services-app',
  // Before:
  // image: 'https://placehold.co/600x400/png?text=Household+Services',

  // After:
  image: '/projects/household-services-dashboard.png',
  heroImage: '/heroes/household-services-hero.png',
}
```

**Deliverables:**
- `/public/projects/*` contains real screenshots for all projects
- `/public/heroes/*` contains 1–2 hero images

---

### 1.2 Enable testimonials section
**Files:** [`app/page.tsx`](../app/page.tsx)

Current testimonials are present in [`app/data.ts`](../app/data.ts) but the UI is commented out in [`app/page.tsx`](../app/page.tsx).

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 1.2.1 | Uncomment testimonials block | High | 5m |
| 1.2.2 | Refine card styling and hover/focus states | High | 30m |
| 1.2.3 | Place testimonials between Projects and Skills | Medium | 15m |

**Success metrics:**
- Testimonials render on home page
- Layout is responsive and readable

---

### 1.3 Add “Articles” to navigation
**Files:** [`app/components/Navbar.tsx`](../app/components/Navbar.tsx)

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 1.3.1 | Add `/articles` link to desktop navbar | High | 10m |
| 1.3.2 | Add `/articles` link to mobile menu | High | 10m |

Suggested link array update:

```ts
const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact', href: 'mailto:qureshisameem01@gmail.com' },
];
```

---

## Phase 2 — SEO & Social Sharing (Week 2)
**Goal:** Improve discoverability + make shared links look professional.

### 2.1 Metadata + Open Graph + Twitter cards
**Files:** [`app/layout.tsx`](../app/layout.tsx), [`public/`](../public)

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 2.1.1 | Create OG image (`/public/og-image.png`, 1200×630) | High | 1–2h |
| 2.1.2 | Add Open Graph `images` to metadata | High | 30m |
| 2.1.3 | Add Twitter card metadata | Medium | 20m |

**Implementation sketch:**
```ts
// app/layout.tsx
export const metadata: Metadata = {
  // ...
  openGraph: {
    title: 'Sameem Qureshi | AI/ML & LLM Engineer',
    description: 'Building practical AI systems and developer tools.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};
```

---

### 2.2 Structured data (JSON-LD)
**Files:** [`app/layout.tsx`](../app/layout.tsx) (or a helper module)

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 2.2.1 | Add Person schema for better SEO | Medium | 30m |

Add a small helper (example):
```ts
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sameem Qureshi',
    jobTitle: 'AI/ML & LLM Engineer',
    sameAs: [
      'https://github.com/sameemqureshi',
      'https://www.linkedin.com/in/sameemqureshi/',
    ],
  };
}
```

---

### 2.3 robots + sitemap
**Files:** [`public/robots.txt`](../public/robots.txt) or Next sitemap route

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 2.3.1 | Add `robots.txt` | Medium | 10m |
| 2.3.2 | Add `app/sitemap.ts` (Next MetadataRoute) | Medium | 20m |

Sitemap should include:
- `/`
- `/articles`
- `/articles/[slug]` for each article
- `/projects/[slug]` for each project

---

## Phase 3 — “AI Factor” (Week 3)
**Goal:** Turn the chat widget into a real AI demo (aligned to your identity).

### 3.1 Create chat API route
**Files:** `app/api/chat/route.ts`

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 3.1.1 | Add `/api/chat` POST route | High | 1–2h |
| 3.1.2 | Inject portfolio context (projects/skills/experience) | High | 1h |
| 3.1.3 | Add rate limiting + basic abuse protection | Medium | 1–2h |

Notes:
- Start with simple “context stuffing” from [`app/data.ts`](../app/data.ts)
- Later upgrade to real RAG (chunk + embed + retrieve)

---

### 3.2 Connect [`ChatWidget`](../app/components/ChatWidget.tsx) to backend
**Files:** [`app/components/ChatWidget.tsx`](../app/components/ChatWidget.tsx)

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 3.2.1 | Replace mock responses with API call | High | 1–2h |
| 3.2.2 | Add error states + retries | High | 1h |
| 3.2.3 | Optional: stream responses | Medium | 2–3h |

**Success metrics:**
- Chat answers questions grounded in your portfolio data
- Errors handled gracefully

---

## Phase 4 — Polish, Accessibility, Performance (Week 4)
**Goal:** Make the site production-grade.

### 4.1 Accessibility pass
**Files:** [`app/page.tsx`](../app/page.tsx), [`app/components/Navbar.tsx`](../app/components/Navbar.tsx), [`app/components/ChatWidget.tsx`](../app/components/ChatWidget.tsx), [`app/globals.css`](../app/globals.css)

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 4.1.1 | Add `aria-label` and `title` to icon-only controls | High | 30m |
| 4.1.2 | Ensure visible focus ring styles | High | 30m |
| 4.1.3 | Add skip-to-content link | Medium | 20m |
| 4.1.4 | Validate heading hierarchy | High | 30m |

---

### 4.2 Performance improvements
**Files:** [`app/page.tsx`](../app/page.tsx), [`app/components/ChatWidget.tsx`](../app/components/ChatWidget.tsx)

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 4.2.1 | Lazy-load ChatWidget using `next/dynamic` | Medium | 30m |
| 4.2.2 | Add `sizes` + `priority` to above-the-fold images | High | 1h |
| 4.2.3 | Review bundle size and remove unused icons/imports | Medium | 30m |

---

### 4.3 Articles content
**Files:** [`app/articles/page.tsx`](../app/articles/page.tsx), `app/articles/[slug]/page.tsx`

| Task | Description | Priority | Effort |
|------|-------------|----------|--------|
| 4.3.1 | Write bodies for top 3 articles | High | 4–6h |
| 4.3.2 | Add code highlighting + TOC | Medium | 2h |
| 4.3.3 | Add share buttons | Low | 1h |

---

## Timeline (suggested)

Week 1:
- Phase 1.1: screenshots + update [`app/data.ts`](../app/data.ts)
- Phase 1.2: enable testimonials in [`app/page.tsx`](../app/page.tsx)
- Phase 1.3: navbar link updates in [`app/components/Navbar.tsx`](../app/components/Navbar.tsx)

Week 2:
- Phase 2: OG image + metadata in [`app/layout.tsx`](../app/layout.tsx)
- Utilities: `robots.txt`, `sitemap`

Week 3:
- Phase 3: real chat endpoint + connect widget

Week 4:
- Phase 4: accessibility, performance, article content

---

## Dependencies & prerequisites
- **Phase 1:** project screenshots / assets
- **Phase 2:** (optional) domain for canonical OG URLs
- **Phase 3:** LLM provider key (OpenAI/Anthropic/etc.) + budget

---

## Validation checklist

Phase 1:
- [ ] All projects show real images
- [ ] Testimonials visible
- [ ] Articles link in navbar

Phase 2:
- [ ] OG preview validates (LinkedIn/Twitter)
- [ ] Sitemap includes all dynamic routes

Phase 3:
- [ ] Chat returns grounded responses
- [ ] Errors handled

Phase 4:
- [ ] Lighthouse > 90
- [ ] Axe DevTools: 0 critical issues
- [ ] Mobile layout verified
