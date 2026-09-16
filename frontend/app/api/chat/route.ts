import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";
import { fallbackReply } from "@/lib/triage";

export async function POST(request: Request) {
  const body = await request.json();
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!message) return Response.json({ error: "Please enter a message." }, { status: 400 });
  if (!process.env.GROQ_API_KEY) return Response.json({ reply: fallbackReply(message) });

  const { text } = await generateText({
    model: groq("llama-3.3-70b-versatile"),
    system: "You are CareConnect, a concise healthcare assistant. Route dental symptoms to a Dentist and general symptoms to a GP. Give general information only, never diagnose. For emergencies, tell the user to seek immediate local emergency care. For appointments, use GP: Monday-Friday 9 AM-5 PM; Dentist: Tuesday and Thursday 10 AM-4 PM. Acknowledge complaints professionally.",
    prompt: message,
  });

  return Response.json({ reply: text });
}
