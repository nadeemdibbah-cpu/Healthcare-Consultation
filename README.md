# Healthcare Consultation & Appointment AI Bot

A simple Next.js healthcare assistant for triage guidance, appointment availability, and feedback handling.

## Run locally

1. Create `.env.local` in the project root with `GROQ_API_KEY=your_key_here`.
2. In `frontend`, run `npm install`.
3. Run `npm run dev`.
4. Open `http://127.0.0.1:3000`.

If `GROQ_API_KEY` is missing, the app falls back to safe local responses.

## Validation

Run these checks from `frontend`:

- `npm run test`
- `npm run build`
- `npm run test:e2e`
