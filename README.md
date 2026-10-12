# Moss & Muzzle — FireWorks Pet Grooming Template

A static, responsive appointment-services template adapted from the FireWorks salon module for pet grooming. The fictional demo includes services and illustrative pricing, provider-role placeholders, an original gallery, first-visit guidance, booking policies, location/hour placeholders, and a pet-specific intake preview.

## Local preview

Serve the repository root with any static web server, for example `python3 -m http.server 4173`, then open `http://localhost:4173`.

## Safe demo behavior

The appointment form validates in the browser and renders an on-screen summary using DOM text nodes. It has no form action, network request, storage, upload, payment, calendar, or confirmation behavior. `booking-config.js` remains inert until all live-provider gates are deliberately enabled after client approval and end-to-end testing.

All names, people, credentials, prices, hours, policies, locations, service areas, and availability are labeled sample or placeholder content. Demo pages intentionally use `noindex` and `robots.txt` disallows crawling.

## Client launch checklist

- Replace fictional identity, pricing, provider profiles, credentials, gallery, hours, address, contact details, and policies with verified client content.
- Select a booking/CRM provider that supports the approved pet intake and document rules.
- Configure credentials outside public source, map fields, and test all notifications, confirmations, documents, payments, and failure states.
- Replace demo metadata/schema, add canonical URLs and sitemap, then remove `noindex` only after all claims and locations are verified.

See `FIREWORKS-PROJECT.md` for pricing, inputs, integration gates, and the publishing handoff.
