# Blue Dragon Plumbing — V3 Demo Website

A commercial demo website for Blue Dragon Plumbing, a local plumbing business in Austin, Texas. This is a front-end demonstration intended to be shown to a potential client as a proposal for a professional website redesign.

**Live demo:** `https://hakimdev-tech.github.io/blue-dragon-demo/`

---

## 1. Project Overview

This website is designed to demonstrate how a credible, conversion-focused local plumbing business website should look and function. The primary goal is to generate phone calls and service requests from potential customers in the Austin area.

The previous version (V1) scored 7/10 on AI-Slop Risk. Version 2 improved significantly. This V3 corrects the remaining issues:

- All telephone links now use real `tel:` URLs
- The hero includes a service request form for immediate lead capture
- Form submission displays an honest demo message (no fake "sent" promises)
- No fabricated reviews, ratings, or business claims
- Complete SEO and accessibility implementation
- Mobile sticky call button for emergency conversion

---

## 2. Technology Used

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, flexbox, CSS grid, no frameworks
- **Vanilla JavaScript** — minimal, no libraries, no build step

No external dependencies. No npm. No build tools. The site works by simply opening `index.html` in a browser.

---

## 3. File Structure

```
blue-dragon-demo/
├── index.html      # Main page (all sections)
├── style.css       # Complete stylesheet
├── script.js       # Mobile nav + form handling
└── README.md       # This file
```

---

## 4. How to Run Locally

1. Download or clone the repository.
2. Open `index.html` directly in any modern web browser (Chrome, Firefox, Safari, Edge).
3. No server is required. No build step is needed.

To test on a mobile device:
- Serve the folder locally with a simple HTTP server, for example:
  - Python: `python -m http.server 8000`
  - Node.js: `npx serve .`
  - PHP: `php -S localhost:8000`
- Open the local IP address on your phone.
- Or use your browser's DevTools device emulation.

---

## 5. How to Deploy to GitHub Pages

1. Push all four files to a GitHub repository.
2. Go to **Settings > Pages** in the repository.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch (usually `main` or `master`) and the `/ (root)` folder.
5. Click **Save**.
6. GitHub will provide a URL such as `https://yourusername.github.io/blue-dragon-demo/`.
7. Update the `canonical` link and Open Graph `og:url` in `index.html` to match your actual URL.

---

## 6. How to Change the Phone Number

The phone number appears in multiple locations. If it changes, update all of these:

| File | Location | Current Value |
|---|---|---|
| `index.html` | Top bar link | `href="tel:+15129472491"` |
| `index.html` | Header CTA | `href="tel:+15129472491"` |
| `index.html` | Hero primary CTA | `href="tel:+15129472491"` |
| `index.html` | Trust strip | `(512) 947-2491` |
| `index.html` | Contact section | `href="tel:+15129472491"` |
| `index.html` | Footer | `href="tel:+15129472491"` |
| `index.html` | Sticky mobile call | `href="tel:+15129472491"` |
| `index.html` | Schema.org JSON-LD | `"telephone": "+1-512-947-2491"` |
| `index.html` | Meta description | `(512) 947-2491` |
| `index.html` | Title tag | `(512) 947-2491` (if included) |

**Important:** Always use the international format `+1-512-947-2491` in `tel:` links and structured data. Use the readable format `(512) 947-2491` for display text.

---

## 7. How to Change Business Information

### Business Name
- Update the text inside `.brand__name` in the header.
- Update `.footer__name` in the footer.
- Update the `name` field in the Schema.org JSON-LD.
- Update the `<title>` and Open Graph tags.

### Location
- Update the top bar text: "Local plumbing service in Austin"
- Update the footer location text: "Austin, Texas"
- Update the `areaServed` field in Schema.org JSON-LD.
- Update meta description and Open Graph description.

### Service Areas
- Edit the `.area-list` in the Service Area section.
- Do not invent cities that are not verified.

### Services
- Edit the `.services-grid` in the Services section.
- Do not add services that the business does not actually provide.

---

## 8. How to Connect the Contact Form to a Real Backend

The form in the hero is currently a **front-end demo only**. It validates input and shows a success message, but it does **not** send data to any server.

### Option A — Formspree (Recommended)

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy the endpoint URL (e.g., `https://formspree.io/f/YOUR_FORM_ID`).
3. In `index.html`, modify the `<form>` tag:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

4. Remove `id="service-form"` and `novalidate` if you want Formspree to handle validation.
5. Update `script.js` to remove the `e.preventDefault()` and demo success handling, or rewrite it to use `fetch()` for an async submission.

### Option B — Netlify Forms

If hosting on Netlify:

1. Add these attributes to the `<form>` tag:

```html
<form class="contact-form" name="service-request" data-netlify="true" method="POST">
```

2. Add a hidden input: `<input type="hidden" name="form-name" value="service-request">`
3. Netlify will automatically detect and process the form.

### Option C — Custom Backend

Point the form `action` attribute to your own endpoint:

```html
<form class="contact-form" action="https://your-api.com/submit" method="POST">
```

Update `script.js` to handle the response appropriately.

### Important Security Note

- Do **not** expose API keys, tokens, or secrets in frontend code.
- Do **not** use `eval()` or dynamic code execution.
- Do **not** store sensitive personal information in `localStorage`.

---

## 9. SEO Configuration

The following SEO elements are already implemented:

- `<html lang="en">`
- Unique `<title>` tag
- Meta description
- Viewport meta tag
- Canonical link (update with your real URL)
- Open Graph metadata (title, description, type, url, locale)
- Semantic HTML5 structure
- Single H1 per page
- Logical H2/H3 hierarchy
- Descriptive anchor text
- Schema.org structured data (JSON-LD)

### To Update SEO for Production

1. Update the canonical URL in `<link rel="canonical">`.
2. Update `og:url` to match your real domain.
3. Verify the meta description accurately reflects the business.
4. If the business has a real logo, add `og:image` with the logo URL.
5. Submit the site to Google Search Console after deployment.

---

## 10. Structured-Data Configuration

A minimal Schema.org `Plumber` type is included in the `<head>` using JSON-LD.

**Currently included (verified):**
- `@type`: Plumber
- `name`: Blue Dragon Plumbing
- `telephone`: +1-512-947-2491
- `url`: https://hakimdev-tech.github.io/blue-dragon-demo/
- `areaServed`: Austin
- `serviceType`: Leak Repair, Drain Cleaning, Water Heater Service, Fixture Repair

**Not included (requires verification):**
- `address` (physical address unknown)
- `openingHours` (hours unknown)
- `priceRange` (pricing unknown)
- `aggregateRating` / `reviewCount` (no verified reviews)
- `image` (no verified business photo)
- `foundingDate` (unknown)
- `employee` / `founder` (unknown)

**To expand structured data:**
Add verified properties to the JSON-LD script in `index.html`. Do not invent information.

---

## 11. Known Limitations

1. **No backend connected.** The contact form is a demo. It validates input but does not send emails or store data.
2. **No real photography.** The hero is text-based. A real business photo (service truck, team, or job site) should be added before production.
3. **No verified reviews.** The reviews section was removed entirely because no verified customer reviews were available.
4. **No business address.** The footer lists "Austin, Texas" only. A specific address should be added if verified.
5. **No business hours.** Opening hours were not verified and are therefore not displayed.
6. **No emergency claims.** 24/7, same-day, or emergency service claims were removed because they could not be verified.
7. **No license number.** "Licensed" was removed because no license number was provided for verification.

---

## 12. Placeholders Requiring Real Business Information

Before sending this demo to a real prospect or going live, verify and update:

| Item | Status | Action Required |
|---|---|---|
| Phone number | Verified | Confirm (512) 947-2491 is correct and active |
| Business name | Verified | Confirm "Blue Dragon Plumbing" is the preferred name |
| Service list | Partial | Verify the business performs all 4 listed services |
| Service areas | Partial | Confirm Austin, Georgetown, San Marcos are correct |
| Business photo | Missing | Obtain a real photo (truck, team, or job site) |
| Reviews | Missing | Collect 2–3 real Google reviews before adding a section |
| Email address | Missing | Add to footer if the business has a public email |
| Physical address | Missing | Add if the business wants to display it |
| Business hours | Missing | Add if verified |
| License number | Missing | Add only if verified and legally required to display |
| Insurance/bonding | Missing | Do not display without documentation |
| Years in business | Missing | Do not display without verification |
| Form backend | Missing | Connect to Formspree, Netlify, or custom backend |

---

## 13. Final QA Checklist

Before presenting the demo or deploying to production, verify:

- [ ] All telephone links use `href="tel:+15129472491"` and work on mobile devices
- [ ] No `about:invalid`, `#`, `javascript:`, or broken URLs exist
- [ ] No fake testimonials, ratings, or reviews are present
- [ ] No fake statistics, badges, awards, or certifications
- [ ] No fake license numbers, addresses, or business hours
- [ ] No unsupported claims (24/7, emergency, same-day, etc.)
- [ ] No AI-slop decorative elements (glows, glassmorphism, abstract shapes, 01/02/03/04 numbering)
- [ ] Form success message is honest and does not claim the message was sent
- [ ] Mobile sticky call bar is visible and tappable on phones
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] `aria-expanded` updates correctly on menu toggle
- [ ] Exactly one H1 on the page
- [ ] Semantic HTML is used throughout (header, nav, main, section, footer)
- [ ] Title tag is unique and descriptive
- [ ] Meta description is present and accurate
- [ ] Canonical URL is correct
- [ ] Open Graph metadata is complete
- [ ] Schema.org structured data contains only verified information
- [ ] All images have correct `alt` attributes (or empty `alt` for decorative images)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus states are visible on links, buttons, and form fields
- [ ] Color contrast meets WCAG AA standards
- [ ] `@media (prefers-reduced-motion: reduce)` is respected
- [ ] No horizontal overflow at 320px, 375px, 768px, 1024px, 1440px
- [ ] No console errors in browser DevTools
- [ ] No missing assets or broken internal links
- [ ] README is accurate and up to date

---

## 14. What Was Removed to Avoid AI Slop

The following patterns from V1 were identified as AI-generated template signals and were eliminated:

- Decorative glowing gradient blobs
- CSS-animated pipes and water droplets
- Glassmorphism and blurred backgrounds
- "BD" decorative badge
- Green online/status dot
- Numbered sections (01 / 02 / 03 / 04)
- Excessive card components with heavy shadows
- Giant rounded corners everywhere
- Generic "Why Choose Us" section
- Reviews placeholder with fake star ratings
- Excessive eyebrow labels above headings
- SaaS-style statistics strip
- Abstract hero card with floating elements
- Generic slogans: "Plumbing service you can trust," "Experience you can see," "Service you can count on"
- Unnecessary hover animations and scroll reveals
- Decorative geometric patterns
- Fake badges, awards, or certifications
- Fake testimonials

---

## 15. Accessibility Features

- Skip-to-content link for keyboard users
- Semantic HTML5 structure
- Proper heading hierarchy (single H1, logical H2/H3)
- All form fields have associated `<label>` elements
- Mobile menu uses `aria-expanded`, `aria-controls`, and `aria-label`
- Visible focus states on all interactive elements
- Sufficient color contrast on text and buttons
- `prefers-reduced-motion` media query support
- Form validation errors are announced visually and programmatically
- `aria-invalid` on invalid fields
- `role="status"` and `aria-live="polite"` on form success message

---

## 16. Performance Characteristics

- No external frameworks or libraries
- No Google Fonts imports (system font stack)
- No images (ready for lazy-loaded real photos)
- No video or background animations
- Minimal JavaScript (~3KB uncompressed)
- Single CSS file (~6KB uncompressed)
- No unnecessary external dependencies
- No render-blocking resources

---

## 17. License / Usage

This is a commercial demo concept. It is **not** an official Blue Dragon Plumbing website. The footer includes a note: "Demo website concept — not the official website of Blue Dragon Plumbing."

Before going live:
1. Remove the demo disclaimer from the footer.
2. Replace all placeholder content with verified business information.
3. Connect the contact form to a real backend.
4. Add real business photography.
5. Have the business owner review all claims for accuracy.
