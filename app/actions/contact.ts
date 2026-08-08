"use server";

import nodemailer from "nodemailer";
import { contactSchema, ContactFormData } from "../lib/schemas";
import { createLeadRecord } from "../lib/lead";

export async function submitContactForm(data: ContactFormData) {
  // 1. Validate data on the server
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Honeypot check for basic spam protection
  if (validatedFields.data.botcheck) {
    console.warn("Spam detected via honeypot field. Suppressing submission.");
    // Return fake success so bots don't realize they were caught
    return { success: true };
  }

  const {
    name,
    businessName,
    phone,
    email,
    serviceRequired,
    budgetRange,
    preferredContact,
    message,
    source,
  } = validatedFields.data;

  try {
    const lead = createLeadRecord({
      name,
      businessName,
      phone,
      email,
      service: serviceRequired,
      requirements: message,
      budget: budgetRange,
      source,
      notes: `Preferred Contact: ${preferredContact}`
    });

    const date = new Date(lead.createdDate).toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    
    const emailBody = `
New WISDO TECH Enquiry (Lead Record)

Lead ID: ${lead.id}
Status: ${lead.status}
Source: ${lead.source}

Name: ${lead.name}
Business: ${lead.businessName || "N/A"}
Phone: ${lead.phone}
Email: ${lead.email}
Service: ${lead.service}
Budget: ${lead.budget || "N/A"}
Requirements: ${lead.requirements}
Notes: ${lead.notes}
Date/Time: ${date}
    `.trim();

    // 3. Send email using Nodemailer
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

    // Check if provider is configured
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
      console.warn("SMTP credentials missing in environment variables. Lead captured but not sent.");
      console.log("--- SIMULATED EMAIL CONTENT ---");
      console.log(emailBody);
      console.log("-------------------------------");
      
      // Simulate network delay for UX
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return { success: true };
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Wisdo Tech Leads" <${SMTP_USER}>`,
      to: CONTACT_EMAIL, // Official WISDO TECH business email
      replyTo: email,
      subject: `New Lead: ${serviceRequired} - ${businessName || name}`,
      text: emailBody,
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected network error occurred." };
  }
}
