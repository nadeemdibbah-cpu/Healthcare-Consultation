# Claude project brief

This project is the healthcare consultation assistant MVP.

## Main goals

- Triage a patient concern to a Dentist or General Practitioner.
- Answer dummy appointment availability queries for the right specialist.
- Acknowledge and record service complaints or feedback in a simple manner.
- Present a clean, accessible chat experience while keeping the app lightweight.

## Working rules

- Work inside the `frontend` project folder.
- Use TypeScript and Tailwind styling with a user-friendly, healthcare-focused interface.
- Keep the code minimal and avoid adding unnecessary features or persistence.
- Do not add authentication or any user database layer.
- Keep the app working even when the Groq API key is absent by using safe fallback replies.

## Completion checks

Before finishing, confirm the app is passing:

- unit tests (`npm run test`)
- production build (`npm run build`)
- browser smoke test (`npm run test:e2e`)
