import {
  ClipboardCheck,
  FileText,
  GitMerge,
  HelpCircle,
  Lock,
  Scale,
  Shield,
  Users,
} from "lucide-react";

export const obligations = [
  { icon: Shield, title: "Integrity", text: "Never offer, accept, or facilitate bribes, kickbacks, facilitation payments, or improper advantages." },
  { icon: GitMerge, title: "Independence", text: "Disclose all actual, potential, and perceived conflicts of interest immediately." },
  { icon: Lock, title: "Confidentiality", text: "Protect client confidential information and personal data at all times and in every tool." },
  { icon: ClipboardCheck, title: "Certification", text: "Complete annual PSR certification and required attestations before the stated deadline." },
  { icon: HelpCircle, title: "Speak Up", text: "Report suspected misconduct, policy violations, or legal concerns through available channels." },
  { icon: Scale, title: "Legal Compliance", text: "Abide by applicable trade controls, sanctions, privacy, anti-corruption, and labor standards." },
  { icon: FileText, title: "Records", text: "Maintain complete, accurate, traceable, and timely records for decisions, expenses, and approvals." },
  { icon: Users, title: "Respect", text: "Treat colleagues, clients, suppliers, and communities with dignity, respect, inclusion, and care." },
];

export const decisionQuestions = [
  "Is it lawful in every jurisdiction touched by the work?",
  "Is it consistent with Our Code, firm policies, client obligations, and professional standards?",
  "Would the decision still feel right if reviewed by a client, regulator, colleague, or the public?",
  "Have conflicts, data restrictions, sanctions exposure, and third-party risks been checked?",
  "Have the right leaders or firm function experts reviewed the decision before action is taken?",
];

export const reportingSteps = [
  {
    number: "01",
    title: "Identify",
    description:
      "Recognize conduct that may violate Our Code, firm policy, professional standards, client obligations, or law. Trust your concern when facts feel incomplete, inconsistent, or pressured.",
  },
  {
    number: "02",
    title: "Stabilize",
    description:
      "Stop risky activity where practical, preserve relevant facts, avoid forwarding sensitive data unnecessarily, and do not investigate beyond your role.",
  },
  {
    number: "03",
    title: "Report",
    description:
      'Use Got a Concern, HR, Legal, Ethics & Compliance, Partner Conduct, or relevant leadership. Got a Concern is hosted by a third party and can support confidential and anonymous reporting where permitted.',
  },
  {
    number: "04",
    title: "Protection",
    description:
      "Good-faith reporters must not face retaliation. Keep matter details confidential and cooperate with review teams if asked.",
  },
];

export const scenarios = [
  ["Gift offered after delivery", "Bribery and books-and-records risk", "Decline or hold pending guidance; document offer; notify manager or compliance."],
  ["Client asks to use a personal email account", "Confidentiality, privacy, record retention", "Use approved systems only; escalate if client insists."],
  ["Friend works at target client", "Actual or perceived conflict", "Disclose before joining discussions or accessing materials."],
  ["Restricted-party ownership rumor", "Sanctions or trade controls", "Pause onboarding and request screening or legal review."],
  ["Vendor promises preferred pricing for referral", "Conflict, procurement, improper benefit", "Do not accept; disclose and route through procurement."],
  ["Dataset contains employee health details", "Sensitive personal data", "Confirm lawful basis, minimization, access controls, masking, and retention."],
  ["Team joke repeatedly targets identity", "Harassment or discrimination", "Address if safe and report through HR or Got a Concern."],
  ["Supplier labor concern appears in audit", "Human rights and third-party risk", "Escalate through procurement/risk; require remediation or stop work if severe."],
];

export const sectionNav = [
  ["Overview", "#about"],
  ["Modules", "#modules"],
  ["Obligations", "#obligations"],
  ["Decision", "#decision"],
  ["Reporting", "#reporting"],
  ["Scenarios", "#scenarios"],
  ["Quiz", "#quiz"],
  ["Sources", "#sources"],
];

export const principleCards = [
  ["Purpose", "Ground decisions in the firm's purpose, mission, values, and commitment to clients, communities, and colleagues."],
  ["Integrity", "Use judgment that earns trust even when no one policy appears to answer the exact fact pattern."],
  ["Speak Up", "Treat reporting as an obligation, not only an option, when misconduct or policy violations may have occurred."],
  ["Responsible Client Service", "Select, staff, protect, analyze, and deliver work in ways that preserve independence and confidentiality."],
  ["Respect", "Maintain a workplace where inclusion, dignity, safety, and non-retaliation are operating norms."],
  ["Lawful Conduct", "Do the right thing across bribery, sanctions, privacy, competition, records, and public-sector interactions."],
];

export const quickStats = [
  ["7", "Code Principles"],
  ["100%", "Completion Required"],
  ["Annual", "Risk Certification"],
  ["45,000+", "Colleagues Globally"],
];
