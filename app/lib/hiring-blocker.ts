/**
 * Shared utility to detect employment / job application intent.
 * WISDO TECH is not currently hiring. Employment requests are blocked before launching WhatsApp or Gmail.
 * Academic student enquiries for project guidance & learning are preserved and permitted.
 */
export function detectJobSeekingIntent(
  fields: (string | undefined)[],
  isStudentTrack: boolean = false
): boolean {
  const combined = fields.filter(Boolean).join(" ").toLowerCase();
  if (!combined.trim()) return false;

  // Normalize whitespace and common punctuation
  const clean = combined.replace(/[-_./\\,;:!?()[\]{}"'`~]/g, " ").replace(/\s+/g, " ").trim();

  // Student academic guidance & practical learning exception
  const isStudentGuidance =
    isStudentTrack ||
    /\b(academic\s+project|final\s+year\s+project|college\s+project|student\s+guidance|tech\s+learning|learn\s+coding|project\s+guidance|study\s+guidance|b\.?tech\s+project|m\.?tech\s+project|mca\s+project|student\s+learning|learning\s+support|practical\s+guidance|real\s+world\s+project|how\s+real\s+projects\s+work|learning\s+guidance|curious\s+about\s+how\s+real\s+projects\s+work|mba|bba|b\.?com|m\.?com|mca|m\.?sc|bca|b\.?sc)\b/i.test(clean);

  // Strong job-seeking phrases & regex patterns
  const jobPatterns: RegExp[] = [
    /\bapply(ing)?\s+(for\s+)?(a\s+)?(developer|designer|engineer|position|role|job|work|employment|vacancy|opening|post)\b/i,
    /\b(job|employment)\s+application\b/i,
    /\b(job|employment)\s+(vacancy|vacancies|opening|openings|opportunity|opportunities|interview)\b/i,
    /\blooking\s+for\s+(a\s+)?(job|work|employment|vacancy|opening|career\s+opportunity)\b/i,
    /\bseeking\s+(a\s+)?(job|employment|vacancy|opening|career\s+opportunity)\b/i,
    /\bcareer\s+(opportunity|opportunities|opening|openings)\b/i,
    /\b(fresher|freshers)\s+(job|jobs|hiring|opening|openings|vacancy)\b/i,
    /\b(recruitment|hiring)\s+(enquiry|inquiry|process|drive|update)\b/i,
    /\bare\s+you\s+hiring\b/i,
    /\b(any\s+)?(job\s+)?(openings?|vacanc(y|ies))\s+(available|there)?\b/i,
    /\b(sending|sharing|attached|submitting|with)\s+(my\s+)?(cv|resume|biodata)\b/i,
    /\b(cv|resume|biodata)\s+(attached|submission|for\s+(job|employment|hiring|review))\b/i,
    /\b(want|wish|like)\s+to\s+join\s+(your\s+)?(company|team)\s+as\s+(an?\s+)?(employee|developer|designer|intern)\b/i,
    /\b(hire|recruit)\s+me\b/i,
    /\b(software\s+developer|frontend\s+developer|backend\s+developer|full\s*stack\s+developer|ui\s*ux\s+designer|web\s+developer|developer|designer|engineer)\s+(job|position|role|vacancy|opening|post)\b/i,
    /\b(internship\s+application|applying\s+for\s+internship)\b/i,
  ];

  for (const pattern of jobPatterns) {
    if (pattern.test(clean)) {
      // If student is asking for learning or academic guidance without explicit employment seeking:
      if (
        isStudentGuidance &&
        !/\b(job\s+(opening|vacancy|application|post)|hire\s+me|salary|ctc|resume|cv|biodata|fresher\s+job|looking\s+for\s+employment|apply(ing)?\s+for\s+(a\s+)?(developer|designer|engineer|position|role|job))\b/i.test(clean)
      ) {
        continue;
      }
      return true;
    }
  }

  return false;
}

export const HIRING_BLOCKED_MESSAGE =
  "Thanks for your interest in WISDO TECH. We’re not accepting job applications at the moment. This form is currently for project and service enquiries.";
