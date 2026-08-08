export type LeadStatus = "New" | "Contacted" | "Qualified" | "Proposal Sent" | "Negotiation" | "Won" | "Lost" | "On Hold";
export type LeadSource = "Website" | "WhatsApp" | "Google" | "Instagram" | "Referral" | "Other";

export interface LeadRecord {
  id: string;
  name: string;
  businessName?: string;
  phone: string;
  email: string;
  service: string;
  requirements: string;
  budget?: string;
  timeline?: string;
  source: LeadSource | string;
  createdDate: string;
  status: LeadStatus;
  notes: string;
}

export function createLeadRecord(data: Partial<LeadRecord>): LeadRecord {
  return {
    id: data.id || crypto.randomUUID(),
    name: data.name || "",
    businessName: data.businessName || "",
    phone: data.phone || "",
    email: data.email || "",
    service: data.service || "",
    requirements: data.requirements || "",
    budget: data.budget || "",
    timeline: data.timeline || "",
    source: data.source || "Website",
    createdDate: data.createdDate || new Date().toISOString(),
    status: data.status || "New",
    notes: data.notes || "",
  };
}
