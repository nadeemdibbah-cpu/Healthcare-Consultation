# Healthcare Consultation & Appointment AI Bot

An open-source, AI-powered healthcare assistant built with **Next.js**, **Vercel AI SDK**, and **Groq (Llama 3)**. The application automatically triages patient medical concerns, routes them to the appropriate medical specialist, handles appointment inquiries, and logs service complaints.

---

## 🌟 Key Features

* **Intelligent Doctor Triage:** Automatically analyzes user symptoms to recommend the right specialist:
  * **Dentist:** Dental concerns, toothaches, gum problems, etc.
  * **General Practitioner (GP):** Headaches, body aches, fever, or general health issues.
* **Appointment Inquiries:** Helps patients check schedule availability based on their matched specialist.
* **Complaint Management:** Accepts, logs, and tracks user service complaints or feedback.
* **100% Open-Source & Free Tier:** Powered by open-source LLMs hosted via free endpoints (Groq API) and deployed on Vercel's free tier.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router, TypeScript)
* **Styling:** Tailwind CSS
* **AI Orchestration:** Vercel AI SDK
* **LLM Engine:** Llama 3 via Groq API
* **Version Control:** Git & GitHub
* **Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18 or higher) and Git installed on your machine.

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd healthcare-bot
npm install
3. Environment Setup
Create a .env.local file in the root directory and add your free Groq API key:
Code snippet
GROQ_API_KEY=your_groq_api_key_here
4. Run Locally
Start the local development server:
Bash
npm run dev
Open http://localhost:3000 in your browser to view the app.

📤 Deployment (Vercel)
    1. Push to GitHub:
       Bash
       git add .
       git commit -m "Initial commit for Healthcare Bot"
       git push origin main
    2. Deploy on Vercel:
        ◦ Import your GitHub repository to Vercel.
        ◦ Configure GROQ_API_KEY under Environment Variables.
        ◦ Click Deploy.
