import { describe, expect, it } from "vitest";
import { detectRoute, fallbackReply } from "./triage";

describe("detectRoute", () => {
  it("routes dental concerns to a dentist", () => expect(detectRoute("My tooth hurts")).toBe("dentist"));
  it("routes appointment requests", () => expect(detectRoute("Can I book an appointment?")).toBe("appointments"));
  it("routes feedback as a complaint", () => expect(detectRoute("I want to make a complaint")).toBe("complaint"));
  it("defaults health concerns to a GP", () => expect(detectRoute("I have a headache")).toBe("gp"));
});

describe("fallbackReply", () => it("provides appointment availability", () => expect(fallbackReply("What appointment slots are available?")).toContain("Monday to Friday")));
