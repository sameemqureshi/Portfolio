# Portfolio Improvement Plan

Based on a review of your current portfolio and trends from top software engineer portfolios in 2025, here is a strategic plan to elevate your site.

## 🔍 Analysis & Inspiration
**Current State:** Your portfolio has a strong, clean aesthetic (Modern Dark UI) and excellent content structure. It resembles high-quality minimal portfolios (like Brittany Chiang's v4).
**Missing Elements:**
1.  **Visual Evidence:** "Show, don't just tell." Top portfolios almost always include screenshots, GIFs, or video demos of projects. Currently, yours relies on text and abstract gradients.
2.  **Navigation:** Single-page scrolls are great, but a sticky navbar improves UX significantly.
3.  **"AI Native" Identity:** As an AI/LLM Engineer, your portfolio should *feel* like it uses AI. A static site doesn't fully demonstrate your specific expertise.
4.  **Social Proof:** Testimonials or recommendations are powerful trust signals.

## 🚀 Proposed Roadmap

### Phase 1: Visual Impact (Priority High)
*Transform the "Projects" section from text-cards to rich media cards.*
- [ ] **Data Structure:** Update `app/data.ts` to include `image` or `thumbnail` paths for each project.
- [ ] **Project Cards:** Update `app/page.tsx` to render project thumbnails.
- [ ] **Project Details:** Update `ProjectContent.tsx` to show a hero image or gallery for the case studies.

### Phase 2: User Experience & Navigation
*Improve browsability.*
- [ ] **Navbar Component:** Create a floating/sticky `Navbar.tsx` with smooth-scroll links (About, Experience, Projects, Contact).
- [ ] **Integration:** Add the Navbar to the global layout.

### Phase 3: The "AI Factor" (The Wow Feature)
*Differentiate yourself as an LLM Engineer.*
- [ ] **Chat Widget UI:** Create a floating "Chat with my Portfolio" button.
- [ ] **Interface:** Build a chat window component that mimics an LLM interface.
- [ ] **(Optional) Functionality:** Initially, this can be a UI mock or a simple keyword matcher, but we can structure it to easily connect to an OpenAI/Gemini API later.

### Phase 4: Content & Trust
- [ ] **Testimonials Section:** Add a section for endorsements from `app/data.ts`.
- [ ] **Featured Project:** Highlight the "DocuVision RAG" project with a larger, dedicated layout section since it's your flagship work.

## 📝 Todo List

- [ ] Gather/Create dummy screenshots for projects (using placeholders if real ones aren't available).
- [ ] Update `app/data.ts` with `image` fields.
- [ ] Modify `app/page.tsx` to display images in project cards.
- [ ] Create `components/Navbar.tsx` and integrate it.
- [ ] Create `components/ChatWidget.tsx` (UI only).
- [ ] Add `Testimonials` section to `app/page.tsx`.
