# Frontend project notes

This frontend belongs to the Healthcare Consultation & Appointment AI Bot MVP.

## Requirements

- Build a simple, modern client-rendered Next.js app in the `frontend` directory.
- Show a calm healthcare chat experience with trusted design colors and clear messaging.
- Route inquiries to a Dentist, GP, appointment availability, or a complaint/feedback flow.
- Keep the app simple and free of accounts, persistence, or unrelated features.
- Read the Groq key from the root `.env.local` file; do not expose it in client code.

## Safe defaults

- If `GROQ_API_KEY` is missing, return a local fallback reply instead of failing.
- Keep responses concise, helpful, and professional.
- Do not add diagnosis or medical certainty beyond general guidance.

## Verification

Before completing changes, run:

- `npm run test`
- `npm run build`
- `npm run test:e2e`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
