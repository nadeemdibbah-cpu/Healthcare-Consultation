"use client";

import { FormEvent, useState } from "react";

type Message = { role: "assistant" | "user"; content: string };

const prompts = ["I have a toothache", "When can I see a GP?", "I want to share feedback"];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Hello, I’m CareConnect. Tell me about a health concern, ask about an appointment, or share feedback." }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(event?: FormEvent, preset?: string) {
    event?.preventDefault();
    const message = (preset ?? input).trim();
    if (!message || isLoading) return;
    setMessages((current) => [...current, { role: "user", content: message }]);
    setInput("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message }) });
      const data = await response.json();
      setMessages((current) => [...current, { role: "assistant", content: data.reply ?? "Sorry, I could not respond right now. Please try again." }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "Sorry, I could not connect right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return <main className="min-h-screen bg-[#f5f8fc] px-4 py-8 sm:px-8"><section className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgba(3,33,71,0.12)]"><header className="border-b-4 border-[#ecad0a] bg-[#032147] px-6 py-7 text-white sm:px-10"><p className="mb-2 text-sm font-semibold tracking-[0.2em] text-[#ecad0a]">CARECONNECT</p><h1 className="text-3xl font-bold">Healthcare Consultation Assistant</h1><p className="mt-2 text-blue-100">Guidance for everyday concerns, appointments, and feedback.</p></header><div className="p-5 sm:p-8"><p className="mb-4 text-sm text-[#888888]">This assistant provides general information and is not a substitute for professional medical advice.</p><div aria-live="polite" className="flex min-h-80 flex-col gap-4">{messages.map((message, index) => <div key={index} className={`max-w-[85%] rounded-2xl px-4 py-3 leading-6 ${message.role === "user" ? "self-end bg-[#753991] text-white" : "bg-blue-50 text-[#032147]"}`}>{message.content}</div>)}{isLoading && <div className="rounded-2xl bg-blue-50 px-4 py-3 text-[#888888]">CareConnect is thinking…</div>}</div><div className="mt-6 flex flex-wrap gap-2">{prompts.map((prompt) => <button key={prompt} type="button" onClick={() => sendMessage(undefined, prompt)} className="rounded-full border border-[#209dd7] px-3 py-1.5 text-sm text-[#209dd7] transition hover:bg-blue-50">{prompt}</button>)}</div><form onSubmit={(event) => sendMessage(event)} className="mt-5 flex gap-3"><label className="sr-only" htmlFor="message">Your message</label><input id="message" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Describe your concern…" className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#209dd7] focus:ring-2 focus:ring-blue-100" /><button type="submit" disabled={isLoading} className="rounded-xl bg-[#753991] px-5 py-3 font-semibold text-white transition hover:bg-[#5e2e75] disabled:opacity-60">Send</button></form></div></section></main>;
}
