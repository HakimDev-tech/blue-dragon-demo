# Blue Dragon Plumbing — V2 Demo Website

A commercial demo website for Blue Dragon Plumbing, a local plumbing business in Austin, Texas. This is a front-end demonstration intended to be shown to a potential client as a proposal for a professional website redesign.

**Live demo:** `https://hakimdev-tech.github.io/blue-dragon-demo/`

---

## Project Purpose

This website is designed to demonstrate how a credible, conversion-focused local plumbing business website should look and function. The goal is to generate phone calls and service requests from potential customers in the Austin area.

The previous version (V1) scored 7/10 on AI-Slop Risk. This V2 was rebuilt from the ground up to eliminate generic template patterns and replace them with a structure, design, and copy that feels like a real local American service business.

---

## Technology Used

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, flexbox, CSS grid, no frameworks
- **Vanilla JavaScript** — minimal, no libraries, no build step

No external dependencies. No npm. No build tools. The site works by simply opening `index.html` in a browser.

---

## File Structure

```
blue-dragon-demo/
├── index.html      # Main page (all sections)
├── style.css       # Complete stylesheet
├── script.js       # Mobile nav + form handling
└── README.md       # This file
```

---

## How to Run Locally

1. Download or clone the repository.
2. Open `index.html` directly in any modern web browser.
3. No server is required. No build step is needed.

To test on a mobile device:
- Serve the folder locally with a simple HTTP server (e.g., `python -m http.server 8000` or `npx serve .`), then open the local IP on your phone.
- Or use your browser's DevTools device emulation.

---

## How to Deploy to GitHub Pages

1. Push all four files to a GitHub repository.
2. Go to **Settings > Pages** in the repository.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch (usually `main` or `master`) and the `/ (root)` folder.
5. Click **Save**.
6. GitHub will provide a URL such as `https://yourusername.github.io/blue-dragon-demo/`.

---

## Where to Replace Placeholder Business Information

Before delivering this to a real prospect, verify and update the following:

| Location | Current Text | Action |
|---|---|---|
| `index.html` — Top bar | "Local plumbing service in Austin" | Update if needed |
| `index.html` — Hero H1 | "Plumbing Services in Austin, TX" | Update if the service area changes |
| `index.html` — Hero paragraph | "Blue Dragon Plumbing provides residential plumbing service..." | Update to match actual services |
| `index.html` — Service Area | "Austin, Georgetown, San Marcos, Surrounding areas" | Verify and adjust cities |
| `index.html` — Footer | "Austin, Texas" | Add exact address if available and desired |
| `index.html` — Footer email | None currently shown | Add real email if available |

**Do not invent:** business hours, license numbers, years in business, insurance details, or emergency service claims without verification.

---

## Where to Insert Real Photography

The hero section contains a clearly labeled placeholder:

```html
<div class="photo-placeholder">
  <span class="photo-placeholder__label">Replace with real Blue Dragon Plumbing photo</span>
  <span class="photo-placeholder__hint">Service truck, job site, or team photo</span>
</div>
```

**To replace it:**

1. Obtain a real photograph from the business owner (service truck, team photo, job-site photo, or owner portrait).
2. Add the image file to the repository.
3. Replace the `.photo-placeholder` div with:

```html
<img src="your-photo.jpg" alt="Blue Dragon Plumbing service truck in Austin, Texas" loading="lazy">
```

**Photo guidelines:**
- Use an authentic business photograph, not stock imagery.
- Recommended: 800×600px or larger, compressed for web.
- Alt text should describe the actual content of the photo.
- The layout is designed to accommodate a 4:3 aspect ratio image.

---

## How to Connect the Contact Form to a Backend

The form in the Contact section is currently a **front-end demo only**. It validates input and shows a success message, but it does not actually send data anywhere.

### Option A — Formspree (Recommended for simplicity)

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy the endpoint URL (e.g., `https://formspree.io/f/YOUR_FORM_ID`).
3. In `index.html`, add these two attributes to the `<form>` tag:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

4. Remove `id="service-form"` and `novalidate` if you want Formspree to handle validation, or keep them and adjust `script.js` to allow normal submission.

### Option B — Netlify Forms

If hosting on Netlify:

1. Add `data-netlify="true"` and `name="contact"` to the `<form>` tag.
2. Netlify will automatically detect and process the form.

### Option C — Custom Backend

Point the form `action` attribute to your own endpoint (e.g., a PHP script, Node.js endpoint, or email service API).

### Important

Update `script.js` to remove the `e.preventDefault()` and demo success handling once a real backend is connected, or modify the logic to use `fetch()` to submit asynchronously.

---

## Business Claims That Require Verification

The following claims from the old V1 were **removed** because they could not be verified. Do **not** re-add them without proof:

| Claim | Status | Why it was removed |
|---|---|---|
| "30+ years of experience" | Removed | No founding year verified. |
| "Licensed" | Removed | No license number provided. |
| "Bonded" | Removed | No bond documentation verified. |
| "Insured" | Removed | No insurance details verified. |
| "Residential & commercial" | Removed to "residential" | Commercial service not confirmed. |
| "English & Español" | Removed | Bilingual service not confirmed. |
| "24/7" | Removed | Hours not verified. |
| "Emergency service" | Removed | Emergency availability not confirmed. |
| "Same-day service" | Removed | Response times not verified. |
| Specific license numbers | Removed | Would be illegal to fake. |
| Exact business address | Removed | Not provided. |
| Exact business hours | Removed | Not provided. |

**Safe statements used instead:**
- "Serving Austin and surrounding communities"
- "Call for availability"
- "Call to discuss your plumbing problem"
- "Phone support"
- "Service requests available"

---

## What Was Deliberately Removed to Avoid AI Slop

The following patterns from V1 were identified as AI-generated template signals and were completely removed:

- Decorative glowing gradient blobs in the hero
- CSS-animated pipes and water droplets
- Glassmorphism and blurred backgrounds
- "BD" decorative badge
- Green online/status dot
- Numbered sections (01 / 02 / 03 / 04)
- Excessive card components with heavy shadows
- Large rounded corners everywhere
- Generic "Why Choose Us" section
- Placeholder reviews section (hidden until real reviews are available)
- Excessive eyebrow labels above every heading
- SaaS-style statistics strip
- Abstract hero card with floating elements
- Generic slogans: "Plumbing service you can trust," "Experience you can see," "Service you can count on"
- Unnecessary hover animations and scroll reveals
- Decorative geometric patterns
- Fake badges, awards, or certifications
- Fake testimonials or star ratings

---

## What Remains to Be Verified Before Sending the Demo to a Real Prospect

Before this demo is presented to a real business owner, confirm the following:

1. **Business services** — Verify that Blue Dragon Plumbing actually performs: leak repair, drain cleaning, water heater service, and fixture repair. Adjust the list if needed.
2. **Service area** — Confirm the exact cities served. The current list (Austin, Georgetown, San Marcos + surrounding) should be verified.
3. **Phone number** — Confirm that (512) 947-2491 is the correct primary business number.
4. **Business name** — Confirm the exact legal name and whether "Blue Dragon Plumbing" is the preferred branding.
5. **Photography** — Obtain at least one real photograph (truck, team, or job site) to replace the hero placeholder.
6. **Form backend** — Connect the contact form to Formspree, Netlify Forms, or another backend before production use.
7. **Email address** — If the business has a public email, add it to the footer or contact section.
8. **Google Business Profile** — Check if the business has public reviews. If yes, integrate 2–3 real reviews into a future reviews section.
9. **Business description** — Verify the hero paragraph accurately describes what the business does.
10. **Legal review** — If the prospect approves the demo, have them review all text to ensure no unintended claims are made.

---

## Accessibility Notes

- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `footer`)
- Proper heading hierarchy (single H1, logical H2/H3 order)
- All form fields have associated `<label>` elements
- Mobile menu uses `aria-expanded` and `aria-controls`
- Focus states are visible on all interactive elements
- Sufficient color contrast on text and buttons
- Skip link pattern included in CSS (add to HTML if desired)
- Respects `prefers-reduced-motion`

---

## Performance Notes

- No external frameworks or libraries
- No Google Fonts imports (uses system font stack)
- No images (placeholder only, ready for lazy-loaded real photos)
- No video or background animations
- Minimal JavaScript (~3KB uncompressed)
- CSS is organized and commented for maintainability

---

## License / Usage

This is a commercial demo concept. It is not an official Blue Dragon Plumbing website. The footer includes a note: "Demo concept — business information should be verified before production use."

Before going live, remove the demo note and replace all placeholder content with verified business information.
