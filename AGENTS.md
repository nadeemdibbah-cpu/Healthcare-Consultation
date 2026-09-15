# Healthcare Consultation & Appointment AI Bot

## Business Requirements

- Build an MVP healthcare assistant as a web application.
- Patients can describe a health concern in a chat interface.
- The assistant triages concerns to either a Dentist or General Practitioner (GP).
- The assistant can answer appointment-availability inquiries for the matched specialist.
- The assistant can accept and acknowledge service complaints or feedback.
- Keep the experience simple, helpful, and professional. Do not add user accounts, persistence, search, or unrelated features.

## Technical Details

- Implement a modern, client-rendered Next.js application in a `frontend` subdirectory.
- Use TypeScript, Tailwind CSS, Vercel AI SDK, and Groq with Llama 3.
- Read the Groq API key from `GROQ_API_KEY` in `.env.local`; never expose it in client-side code.
- Use clear dummy appointment availability. Persistence is not required for the MVP.

## Design

- Present a calm, accessible healthcare chat experience.
- Use Dark Navy `#032147` for primary headings, Blue `#209dd7` for key sections, Purple `#753991` for primary actions, Accent Yellow `#ecad0a` for highlights, and Gray `#888888` for supporting text.

## Delivery Requirements

1. Write a short plan with checkable success criteria, including scaffolding, `.gitignore`, and unit tests.
2. Implement the MVP.
3. Perform integration testing with Playwright or a similar tool and fix defects found.
4. Complete only after the app is tested and the development server is running.

## Coding Standards

1. Use current, idiomatic library versions and approaches.
2. Keep the solution simple. Do not over-engineer or add unnecessary features.
3. Keep the README minimal. Do not use emojis.
