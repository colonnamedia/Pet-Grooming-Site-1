# FireWorks Project — Moss & Muzzle Pet Grooming

## Family and reuse decision

Appointment-Based Services. This is a pet-grooming adaptation of the existing Platinum Salon module, preserving the proven service detail, gallery, provider profile, policy, and scheduling-handoff patterns. A separate repository is justified because pet grooming needs materially different intake fields, health/vaccination and document gates, species and size routing, coat-condition assessment, handling notes, and confirmation language.

The public-facing identity **Moss & Muzzle** is fictional demonstration content. No displayed person, role, credential, price, hour, address, policy, service area, availability, or claim represents a real business.

## Pages and reusable sections

1. **Home** — purpose-designed grooming hero, service overview, original sample gallery, groomer-role placeholders, first-visit steps, sample policies, and hours/location placeholders.
2. **Services** — detailed sample services, illustrative pricing, add-ons, timing, and transparent price factors.
3. **Appointment Request** — safe local-only pet intake with provider gating and a visible document-upload lock.

Reusable modules: responsive header/mobile navigation, demo disclosure bar, service cards, image gallery, provider profiles, policy cards, first-visit sequence, location card, detailed service rows, price-factor list, intake form, local summary, provider gate, and footer.

Future design variants: playful neighborhood groomer; bright veterinary-adjacent but non-medical; mobile groomer with verified coverage; boutique breed-specialist; high-volume salon with separate dog-size paths. Each variant needs its own verified services, claims, handling limits, logistics, and imagery.

## CTA and intake fields

Primary CTA: **Preview appointment request** in the demo; **Request an appointment** or a verified provider-specific action at client launch.

Demo fields: pet name, species, breed/mix, approximate size, coat condition, requested service, preferred date, time preference, provider preference, optional handling/comfort notes, owner name, email, phone, and required demo acknowledgement. Vaccination/document upload is explicitly disabled.

The demo form uses no `action`, API, local/session storage, cookies, upload field, payment, calendar, or remote service. It validates locally and renders an on-screen summary only. Reloading clears it.

## Supported and proposed integrations

A client may use MoeGo, Gingr, DaySmart Pet, Square Appointments with a separate intake workflow, or another provider chosen after requirements review. No provider is endorsed or bundled.

`booking-config.js` exposes only public gate flags and a public HTTPS handoff URL. A live handoff appears only when all are true:

- provider name and HTTPS URL are configured;
- the provider supports the approved pet-intake workflow;
- health, vaccination, behavior, matting, consent, cancellation, privacy, document-retention, and payment policies are client-approved;
- the complete flow has passed end-to-end testing.

Credentials must never be committed to public source. Real document handling requires a secure client-selected provider, access rules, retention/deletion decisions, approved consent/privacy language, and upload/download testing. Embedded/API work, webhooks, CRM routing, reminders, deposits, payments, and staff calendars are separate scoped integration work.

## Required client inputs

Verified business/legal/display name, logo and palette, services, species served, size rules, prices and add-ons, timing guidance, provider names/photos/bios/credentials/schedules, gallery rights, address and service area, parking/accessibility, hours and holidays, phone/email, booking/CRM provider, health and vaccination rules, document requirements, behavior and bite-history language, matting/de-matting policy, special-handling limits, emergency contact/process, cancellations, deposits, late arrival, pickup/abandoned-pet terms, consent/privacy terms, review permissions, analytics and domain access.

## Build-price rationale

**Build: $1,799**. This exceeds the $999 minimum because the template includes three complete pages, original optimized hero and gallery imagery, detailed services and pricing logic, provider profiles, first-visit education, policy architecture, a pet-specific multi-field intake, accessible local validation/summary, document and provider safety gates, responsive design, and editable SEO/schema foundations.

Separate recurring services:

- **Standard hosting — $499/year primary or $59.99/month**
- Small Business hosting — $299/year or $39.99/month (available only if the final scope is reduced to a simpler static site)
- Advanced hosting — from $899/year or $99.99/month when custom application/integration requirements justify it
- Domain registration/renewal — $20/year, subject to availability

Hosting, domains, and integration work are never discounted with the build.

## Optional add-ons

- Standard booking / appointment integration: **$199 setup** in the FireWorks checkout; provider subscription or usage fees remain separate
- Custom pet-intake field mapping beyond the standard handoff: **from $299 setup** after provider review
- Secure vaccination/document workflow: **from $499 setup**, only with approved provider and policies; provider fees separate
- Deposit/payment connection: **from $299 setup**; processor fees and subscriptions separate
- CRM routing or automation: **from $299 setup**
- Extra service or verified location page: **$125/page**
- Staff/gallery owner-editing workflow: **from $399 setup**
- Copywriting, photography, logo, accessibility remediation beyond template scope, and custom API/webhook work: quoted separately

## SEO and service-area structure

Editable titles, descriptions, headings, alt text, internal links, Open Graph image, responsive image dimensions, and demo `WebPage`/`LocalBusiness` JSON-LD are included. The structure supports one verified location page plus legitimate service pages. Add only locations actually served; do not create copied city-doorway pages or fabricate proximity, rankings, reviews, credentials, or emergency availability.

The fictional demo intentionally uses `noindex, nofollow` and a disallowing `robots.txt`. At client launch, replace the identity and schema, add verified NAP/hours/service area, canonical URLs, a real sitemap, and client-owned social/profile links before indexing.

## Original imagery

Hero: original photorealistic image generated specifically for a pet-grooming website, showing an adult professional groomer calmly brushing an apricot dog in a bright cream-and-sage studio. Composition places subjects to the right with left-side headline space and preserves a useful mobile crop. Gallery images were also purpose-generated for sample full-groom, cat brush-out, and bath/detail service outcomes. All production assets are locally optimized WebP files between approximately 58–88 KB.

## Preview, commits, and verification

Repository: https://github.com/colonnamedia/Pet-Grooming-Site-1

Production preview: https://pet-grooming-site-1.vercel.app/

FireWorks collection: https://fireworks-websitebuilder.com/WebsiteCollection

## Published verification — 2026-10-12

- Template build commit: `3fa3d00236cf015caa5512cdd83805145d625739`.
- FireWorks catalog commit: `95e106e13a5fb49e896e6c0f564b39aaa2dc9d69` (latest `main` was read immediately before the atomic server/preview update).
- Vercel production URL returned success and served Home, Services, and Appointment Request. All four optimized WebP assets loaded, desktop hero composition and headline were visually checked, page navigation resolved, and service/provider query selections populated the intake.
- The production intake accepted only a fictional test, rendered its summary locally, explicitly reported that no request was sent, and reset to the form on reload. The vaccination field remained disabled, the real-provider card remained hidden, and `booking-config.js` retained all three approval/test gates as `false`.
- Static checks passed JavaScript syntax, unique IDs, internal assets, and the 200 KB image budget; production accessibility trees exposed page titles, headings, alt text, navigation, required form fields, disabled document handling, and the local-only disclosure.
- FireWorks Home and Website Collection both published the card as **Featured** and **Available** under Pet Grooming. The generated hero loaded in the storefront preview, and the in-page live demo rendered the deployed Vercel site.
- Store checkout resolved to `moss-muzzle-pet-grooming` and displayed **$1,799 one-time**, **$499/year** annual hosting as the primary selection or **$59.99/month**, **$20/year** domain registration, and separately priced optional add-ons. The default annual checkout total was **$2,318** before optional add-ons.
- Responsive CSS was statically verified at the 980 px and 700 px breakpoints, including stacked content, mobile navigation, hero crop, touch-sized controls, and the fixed mobile CTA. The public deployment was checked in-browser at desktop width; Google PageSpeed's mobile renderer could not resolve the fresh Vercel hostname during this run, so no PageSpeed score is claimed.
