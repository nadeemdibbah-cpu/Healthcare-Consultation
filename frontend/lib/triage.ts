export type CareRoute = "dentist" | "gp" | "appointments" | "complaint";

const dentalTerms = ["tooth", "teeth", "dental", "gum", "mouth", "jaw", "cavity"];
const appointmentTerms = ["appointment", "available", "availability", "schedule", "book"];
const complaintTerms = ["complaint", "complain", "feedback", "unhappy", "poor service"];

export function detectRoute(message: string): CareRoute {
  const text = message.toLowerCase();
  if (complaintTerms.some((term) => text.includes(term))) return "complaint";
  if (appointmentTerms.some((term) => text.includes(term))) return "appointments";
  if (dentalTerms.some((term) => text.includes(term))) return "dentist";
  return "gp";
}

export function fallbackReply(message: string): string {
  switch (detectRoute(message)) {
    case "dentist":
      return "Based on what you shared, a Dentist is the right place to start. For severe swelling, uncontrolled bleeding, or trouble breathing, seek urgent medical care now.";
    case "appointments":
      return "We currently have GP appointments available Monday to Friday, 9:00 AM–5:00 PM, and Dentist appointments Tuesday and Thursday, 10:00 AM–4:00 PM. Tell me which specialist you need and your preferred day.";
    case "complaint":
      return "I am sorry your experience did not meet expectations. Your feedback has been acknowledged. Please share what happened and the date of your visit so the care team can review it.";
    default:
      return "A General Practitioner is the best first step for this concern. If symptoms are severe, sudden, or life-threatening, contact local emergency services immediately.";
  }
}
