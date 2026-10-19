# Tepnology

Marketing site for Tepnology, a Service-Disabled Veteran-Owned (SDVOSB), minority-owned technology consulting firm serving the VA, DoD, and federal civilian agencies.

**Stack:** Next.js 16 (App Router, Cache Components) · React 19 · Tailwind CSS v4 · shadcn/ui (Radix) · Zod

## Development

```bash
yarn install
yarn dev     # http://localhost:3000
yarn lint
yarn build
```

## Where things live

| Path | What |
| --- | --- |
| `src/lib/site.ts` | **All company facts and copy**: name, contact info, founder, UEI/CAGE, NAICS, services, agencies, values |
| `src/app/(site)/*/page.tsx` | Routes: `/`, `/services`, `/capabilities`, `/about`, `/careers`, `/contact` |
| `src/app/(site)/contact/actions.ts` | Contact form server action (validation), sends via `src/lib/email.ts` |
| `src/components/ui/` | shadcn/ui components (add more with `npx shadcn@latest add <name>`) |
| `src/components/layout/` | Header, footer |
| `src/components/marketing/` | Section, page hero, CTA band |
| `src/app/globals.css` | Theme tokens (light + dark) |

## Capability statement

`/capability-statement` is a one-page, print-ready capability statement built from `src/lib/site.ts`. The site links to the exported PDF at `public/tepnology-capability-statement.pdf`. After changing company data, regenerate it:

```bash
yarn build && yarn start          # or yarn dev
yarn capability-statement         # needs Google Chrome installed; BASE_URL / CHROME_PATH to override
```

## Contact form email

Inquiries from `/contact` are emailed to the team with [Resend](https://resend.com) (free plan: 3,000 emails/month, 100/day). Replying to the email replies to the sender. Code: `src/lib/email.ts`.

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. Set the same variables in your hosting provider for production. Without a key, local dev just logs submissions; production shows the visitor an error with the contact email instead.
