# 345 Technology website — rules for Claude

This site is built and maintained **only by prompting Claude**. Nobody edits it by hand. Follow these rules for every change.

## Workflow
- Never commit to `main` directly. Create a branch, make the change, run `npm run build` and fix any errors, then open a pull request.
- Netlify builds a Deploy Preview for each pull request. Give the preview link to the requester and say in plain English what changed.
- Merge only when the requester explicitly approves ("publish", "go live", "merge").
- Keep changes small and focused, with one topic per pull request.

## Structure
- Pages: `src/pages/*.astro` (file name = URL).
- Shared layout, head tags, HubSpot tracking and GA4: `src/layouts/Base.astro`.
- Header/footer/nav: `src/components/`, with nav items in `src/config/site.ts`.
- All IDs (HubSpot portal ID, region, form IDs, GA4 ID), the contact email and the primary CTA: `src/config/site.ts` only.
- HubSpot forms: `<HubSpotForm form="assessment" />`. Add new forms to `integrations.forms` in the config.
- Design tokens (colours, fonts, spacing): `src/styles/global.css`. Reuse the existing classes (`section`, `container`, `narrow`, `card`, `grid grid-3`, `btn btn-primary`, `checklist`, `tags`, `on-dark`, `tint`) before writing new CSS.

## Brand (see project doc "345_Technology_Brand_Guidelines_Draft")
- Tagline: "Confident migration, without disruption."
- Primary CTA label: "Book a migration assessment" → `/assessment/`.
- Colours: dark blue #002B50 anchors everything. Accent is Option B: fuchsia #C93089 (hover #A80273, pressed #850159, white text) for CTAs and bold highlights only, at no more than 10% of the page. Lilac #B89AF7 (`--accent-2`) is a supporting accent for backgrounds, diagrams and tags, never the primary CTA.
- Voice: clear, confident, open, warm, calm. Short sentences, plain UK English.
- StoryBrand: the customer is the hero and 345 is the guide. Lead with their problem and their outcome.
- Avoid: "seamless", "risk-free", "revolutionary", "game-changing", "cutting-edge", "next-generation", "digital transformation", and generic "AI-powered". Say "AI-assisted".
- Never invent statistics, customer names, case studies or guarantees. Use only approved figures: £3–5K per interface all-in; ~30 interfaces ≈ 6 months, ~100 ≈ 12 months; free AI-assisted assessment (about one week); assessment + proof of value £10,000 + VAT; the anonymised "Recent work" figures on the home page. The only named customer approved so far is The Guinness Partnership (Owen Thomas testimonial, quote verbatim). Guarantee wording: "Ask us about our safe-cutover guarantee." only.
- Accessibility: WCAG 2.2 AA, visible focus, alt text on informative images, 44px touch targets.
- Imagery: no server-rack clichés, glowing code, globes, handshakes or sci-fi AI art.

## Scope of services (confirmed)
Migrations to Azure from: BizTalk, MuleSoft, IBM ACE/IIB/WebSphere Message Broker, Boomi, webMethods, legacy Logic Apps, Power Automate, Oracle Service Bus, Oracle OCI, SAP Integration Suite. API management: Anypoint, Apigee, IBM API Connect, Amazon API Gateway. Messaging/protocols: EDI, AS2, SOAP, XML, HTTP/webhooks, MSMQ, IBM MQ. Data stores: local DBs, file drops, SFTP, custom tables. Automation: Control-M, Windows/SQL schedulers, batch scripts.
