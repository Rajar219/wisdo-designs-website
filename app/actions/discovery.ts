"use server";

import nodemailer from "nodemailer";
import { discoverySchema, DiscoveryFormData } from "../lib/schemas";
import { createLeadRecord } from "../lib/lead";

export type DiscoverySubmitResult = {
  success: boolean;
  leadId?: string;
  simulated?: boolean;
  message?: string;
  errors?: Record<string, string[] | undefined>;
  formErrors?: string[];
};

export async function submitDiscoveryForm(data: DiscoveryFormData): Promise<DiscoverySubmitResult> {
  // 1. Validate data on server
  const validated = discoverySchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      formErrors: validated.error.flatten().formErrors,
    };
  }

  // Honeypot check for spam protection
  if (validated.data.botcheck) {
    console.warn("Spam detected via botcheck honeypot in discovery. Suppressing submission.");
    return { success: true };
  }

  const {
    name,
    organization,
    phone,
    email,
    services,
    budget,
    requirements,
    additionalRequirements,
    source,
    isStudent,
  } = validated.data;

  try {
    // 2. Create Lead Record in system
    const lead = createLeadRecord({
      name,
      businessName: organization || (isStudent ? "Student / Academic" : ""),
      phone: phone,
      email: email || "",
      service: services.join(", "),
      requirements: requirements || "Not provided",
      budget: budget || "Budget not decided",
      source: source || (isStudent ? "Student Project Discovery" : "Gamified Project Discovery"),
      notes: [
        isStudent ? "Academic / Student Guidance Enquiry" : "Gamified Discovery Mission Brief",
        additionalRequirements ? `Additional: ${additionalRequirements}` : ""
      ].filter(Boolean).join(" | "),
    });

    const date = new Date(lead.createdDate).toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

    // Structured project brief matching specification
    const emailBody = `
WISDO TECH — PROJECT DISCOVERY BRIEF

Client Name: ${name}
Business / Organization: ${organization || "Not provided"}
Mobile / WhatsApp: ${phone}
Email: ${email || "Not provided"}
Selected Service(s): ${services.join(", ")}
Budget Range: ${budget || "Budget not decided"}
Project Description: ${requirements || "Not provided"}
Additional Requirements: ${additionalRequirements || "None"}
Enquiry Source: ${source || "Gamified Project Discovery"}
Date / Time: ${date}
Lead ID: ${lead.id}
    `.trim();

    // 3. Send email via Nodemailer if SMTP configured
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
      console.warn("SMTP credentials not fully configured. Discovery enquiry recorded locally.");
      console.log("--- STRUCTURED DISCOVERY ENQUIRY ---");
      console.log(emailBody);
      console.log("------------------------------------");

      // Small realistic response delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      return { success: true, leadId: lead.id, simulated: true };
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: parseInt(SMTP_PORT, 10) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Wisdo Tech Project Discovery" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email || undefined,
      subject: `New Project Enquiry: ${services.slice(0, 2).join(", ")} - ${organization || name}`,
      text: emailBody,
    });

    return { success: true, leadId: lead.id, simulated: false };
  } catch (error) {
    console.error("Error submitting project discovery:", error);
    return { success: false, message: "An unexpected network error occurred while submitting." };
  }
}

export async function logWhatsAppDiscoveryInitiation(data: Partial<DiscoveryFormData>) {
  try {
    if (data.name) {
      const lead = createLeadRecord({
        name: data.name,
        businessName: data.organization || (data.isStudent ? "Student / Academic" : ""),
        phone: data.phone || "",
        email: data.email || "",
        service: Array.isArray(data.services) ? data.services.join(", ") : (data.services || "General"),
        requirements: data.requirements || "Not provided",
        budget: data.budget || "Not specified",
        source: data.source || "Interactive Project Discovery (WhatsApp)",
        notes: "Client initiated WhatsApp contact from Discovery Review",
      });
      console.log(`[WhatsApp Lead Captured] ID: ${lead.id} Name: ${lead.name}`);
      return { success: true, leadId: lead.id };
    }
  } catch (err) {
    console.warn("WhatsApp lead log warning:", err);
  }
  return { success: true };
}
