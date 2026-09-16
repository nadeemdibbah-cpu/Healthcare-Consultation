"use client";

import { FormEvent, useState } from "react";

type Message = { role: "assistant" | "user"; content: string };

const prompts = ["I have a toothache", "When can I see a GP?", "I want to share feedback"];

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    education: "BDS, MSc Restorative Dentistry",
    role: "Dentist",
    specialty: "Preventive care, restorative dentistry, and dental pain assessment.",
  },
  {
    name: "Dr. Omar Hassan",
    education: "MBBS, MRCGP",
    role: "General Practitioner",
    specialty: "Family medicine, everyday health concerns, and ongoing care guidance.",
  },
];

const facilities = [
  {
    name: "24/7 emergency care",
    detail: "Emergency assessment, triage, stabilisation, and specialist coordination for serious illness and injury.",
  },
  {
    name: "Advanced diagnostics",
    detail: "On-site CT, MRI, X-ray, and other diagnostic services support timely clinical decisions.",
  },
  {
    name: "Specialist consultations",
    detail: "Medical and surgical specialty consultations for adults, children, and families.",
  },
  {
    name: "Critical care support",
    detail: "Emergency services coordinate with critical-care and specialist teams when escalation is needed.",
  },
  {
    name: "Pharmacy services",
    detail: "Inpatient, outpatient, and emergency pharmacy support for prescribed medicines and care transitions.",
  },
  {
    name: "Ambulance services",
    detail: "Emergency, inter-facility, and inter-city medical transport supported by trained ambulance crews.",
  },
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello, I'm CareConnect. Tell me about a health concern, ask about an appointment, or share feedback.",
    },
  ]);
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
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply ?? "Sorry, I could not respond right now. Please try again." },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: "Sorry, I could not connect right now. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f8fc] px-4 py-8 sm:px-8">
      <section className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_rgba(3,33,71,0.12)]">
        <header className="border-b-4 border-[#ecad0a] bg-[#032147] px-6 py-7 text-white sm:px-10">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-[#ecad0a]">CARECONNECT</p>
          <h1 className="text-3xl font-bold">Healthcare Consultation Assistant</h1>
          <p className="mt-2 text-blue-100">Guidance for everyday concerns, appointments, and feedback.</p>
        </header>

        <div className="p-5 sm:p-8">
          <p className="mb-4 text-sm text-[#888888]">
            This assistant provides general information and is not a substitute for professional medical advice.
          </p>

          <section aria-labelledby="care-team-heading" className="mb-7 rounded-2xl bg-[#f5f8fc] p-5">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#209dd7]">Our care team</p>
              <h2 id="care-team-heading" className="mt-1 text-xl font-bold text-[#032147]">Meet the doctors</h2>
              <p className="mt-1 text-sm text-[#888888]">Demo profiles for this MVP; these names do not represent hospital staff.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {doctors.map((doctor) => (
                <article key={doctor.name} className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="text-lg font-bold text-[#032147]">{doctor.name}</p>
                  <p className="mt-1 font-semibold text-[#753991]">{doctor.role}</p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-[#032147]">Education</dt>
                      <dd className="text-[#888888]">{doctor.education}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#032147]">Specialty</dt>
                      <dd className="text-[#888888]">{doctor.specialty}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="facilities-heading" className="mb-7">
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#209dd7]">Islamabad, Pakistan</p>
              <h2 id="facilities-heading" className="mt-1 text-xl font-bold text-[#032147]">Shifa International Hospital</h2>
              <p className="mt-1 text-sm text-[#888888]">A multispecialty hospital in Islamabad. Confirm the relevant department, doctor, and appointment availability directly with the hospital before visiting.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {facilities.map((facility) => (
                <article key={facility.name} className="rounded-xl border border-slate-200 bg-white p-4">
                  <h3 className="font-bold text-[#032147]">{facility.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#888888]">{facility.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="contact-heading" className="mb-7 rounded-2xl border border-[#209dd7] bg-blue-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#209dd7]">Demo contact details</p>
            <h2 id="contact-heading" className="mt-1 text-xl font-bold text-[#032147]">Karachi location</h2>
            <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <p className="font-semibold text-[#032147]">Location</p>
                <p className="text-[#888888]">123 Main Boulevard, Clifton, Karachi, Pakistan</p>
              </div>
              <div>
                <p className="font-semibold text-[#032147]">Phone</p>
                <p className="text-[#888888]">+92 300 123 4567</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#888888]">This is fictional contact information for the MVP and is not affiliated with Shifa International Hospital.</p>
          </section>

          <div aria-live="polite" className="flex min-h-80 flex-col gap-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-3 leading-6 ${message.role === "user" ? "self-end bg-[#753991] text-white" : "bg-blue-50 text-[#032147]"}`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && <div className="rounded-2xl bg-blue-50 px-4 py-3 text-[#888888]">CareConnect is thinking...</div>}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(undefined, prompt)}
                className="rounded-full border border-[#209dd7] px-3 py-1.5 text-sm text-[#209dd7] transition hover:bg-blue-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={(event) => sendMessage(event)} className="mt-5 flex gap-3">
            <label className="sr-only" htmlFor="message">Your message</label>
            <input
              id="message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Describe your concern..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#209dd7] focus:ring-2 focus:ring-blue-100"
            />
            <button type="submit" disabled={isLoading} className="rounded-xl bg-[#753991] px-5 py-3 font-semibold text-white transition hover:bg-[#5e2e75] disabled:opacity-60">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
