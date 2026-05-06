import {
  AlertTriangle,
  GitMerge,
  Globe,
  Leaf,
  Lock,
  Shield,
  Users,
} from "lucide-react";

export const modules = [
  {
    id: "anti-corruption",
    title: "Anti-Corruption & Anti-Bribery",
    icon: Shield,
    status: "Completed",
    summary:
      "Never engage in bribery, facilitation payments, kickbacks, or anything that could be understood as an improper advantage.",
    details: [
      "Understand the difference between a modest business courtesy and a gift, meal, travel benefit, donation, sponsorship, or hiring request that creates risk.",
      "Government officials include elected officials, civil servants, state-owned enterprise employees, public university or hospital personnel, and public international organization staff.",
      "Escalate early when public-sector stakeholders, intermediaries, agents, permits, charitable donations, or unusual urgency are involved.",
    ],
    redFlags: ["Luxury gifts", "cash equivalents", "requests through agents", "side agreements", "charitable asks tied to decisions"],
    action: "Decline, document, and seek Ethics & Compliance or Legal guidance before proceeding.",
    deepDive: {
      principle:
        "Anti-corruption controls protect the firm's independence and the legitimacy of client service. The risk is not limited to explicit cash bribes; anything of value can create a problem if it is intended to influence a decision, reward favorable treatment, or bypass a lawful process.",
      scenarios: [
        ["Public official meeting", "A government-owned utility asks the team to cover travel for an official and a family member.", "Do not agree on the spot. Confirm whether the attendee is a government official, document the business purpose, and seek written approval before any expense is offered."],
        ["Charitable donation request", "A client decision maker suggests a donation to a favored charity before contract renewal.", "Treat the request as a potential improper advantage. Pause the donation, separate it from commercial discussions, and escalate."],
        ["Intermediary pressure", "An agent says a small cash payment is required to speed a permit.", "Refuse facilitation payments and escalate because intermediaries can create liability even when the firm does not make the payment directly."],
      ],
      checklist: [
        "Identify whether any party is a government official, state-owned entity, political organization, charity, agent, or intermediary.",
        "Confirm the business purpose, recipient, value, timing, and approval route for anything of value.",
        "Record gifts, meals, entertainment, travel, sponsorships, donations, and third-party payments accurately.",
        "Avoid cash, cash equivalents, personal benefits, side letters, vague invoices, or off-book arrangements.",
        "Escalate before acting when the request is urgent, unusual, tied to a decision, or routed through a third party.",
      ],
      mistakes: [
        "Assuming a payment is acceptable because it is customary locally.",
        "Treating a state-owned enterprise employee as a private-sector contact without checking status.",
        "Letting an agent, vendor, or client make a payment the team could not make directly.",
      ],
      escalation: "Escalate to Ethics & Compliance, Legal, or engagement leadership before offering, approving, reimbursing, or recording the benefit.",
    },
  },
  {
    id: "conflicts",
    title: "Conflicts of Interest",
    icon: GitMerge,
    status: "Pending",
    summary:
      "Identify, disclose, and manage personal, financial, employment, investment, family, and engagement conflicts before they affect judgment.",
    details: [
      "Conflicts can be actual, potential, or perceived; all three matter because trust depends on independence and transparent decision making.",
      "Client confidentiality across engagements is part of conflict management: do not transfer nonpublic information, assumptions, files, or insights between clients.",
      "Disclose relationships with client leaders, vendors, competitors, public officials, or candidates connected to the work.",
    ],
    redFlags: ["Family at client", "personal investments", "prior employer", "competing clients", "vendor referral benefits"],
    action: "Pause the decision and disclose the relationship or interest to the engagement leader and appropriate risk channel.",
    deepDive: {
      principle:
        "Conflicts management is about preserving independent judgment. A conflict does not always mean someone acted improperly, but nondisclosure can damage trust because others cannot evaluate safeguards, staffing, access restrictions, or recusal needs.",
      scenarios: [
        ["Personal relationship", "A close friend is the executive sponsor for a new engagement.", "Disclose immediately before staffing or client conversations continue. The firm can decide whether a screen, recusal, or staffing change is needed."],
        ["Financial interest", "A colleague owns stock or options in a company that may be affected by the work.", "Declare the interest and avoid decisions or analysis that could affect personal financial benefit until guidance is provided."],
        ["Client overlap", "A team member previously served a competitor and remembers confidential pricing assumptions.", "Do not reuse or discuss nonpublic information. Escalate so the team can confirm information barriers and permissible knowledge use."],
      ],
      checklist: [
        "Disclose personal, family, financial, employment, vendor, political, and board relationships connected to the work.",
        "Check whether the conflict is actual, potential, or perceived; all three can require management.",
        "Separate confidential information by client, matter, team, system access, and discussion channel.",
        "Document agreed safeguards such as recusal, restricted access, leadership review, or client disclosure where appropriate.",
        "Refresh disclosures when facts change, including new staffing, investments, client scope, or relationships.",
      ],
      mistakes: [
        "Waiting to disclose until the conflict becomes visible to someone else.",
        "Assuming a relationship is too minor to matter because it feels manageable personally.",
        "Using prior-client facts, documents, or assumptions as a shortcut on a new engagement.",
      ],
      escalation: "Escalate to the engagement manager, partner, conflict/risk team, or Legal before accessing materials or influencing decisions.",
    },
  },
  {
    id: "workplace-conduct",
    title: "Workplace Conduct & Anti-Harassment",
    icon: Users,
    status: "Completed",
    summary:
      "Maintain an inclusive, respectful, and caring meritocracy with no tolerance for harassment, discrimination, retaliation, or abusive conduct.",
    details: [
      "Respectful conduct applies in offices, client sites, travel, events, social channels, messaging tools, and offsite gatherings.",
      "Leaders have an elevated duty to act when they observe exclusion, retaliation, bullying, intimidation, or behavior that undermines psychological safety.",
      "Intent does not erase impact; colleagues are expected to address behavior quickly, privately where appropriate, and formally when needed.",
    ],
    redFlags: ["Repeated jokes", "exclusion from staffing", "retaliatory comments", "unwanted attention", "demeaning feedback"],
    action: "Intervene when safe, preserve facts, and escalate via HR, leadership, or Got a Concern.",
    deepDive: {
      principle:
        "Professional conduct standards apply wherever work relationships operate: offices, client sites, events, travel, messaging platforms, staffing discussions, reviews, and social settings connected to work. The standard is respectful behavior, not simply legal minimum compliance.",
      scenarios: [
        ["Repeated comments", "A colleague repeatedly makes identity-based jokes and says others are too sensitive.", "Address the behavior if safe, document facts, and escalate if it continues or is severe."],
        ["Retaliation signal", "After raising a concern, someone is excluded from key meetings and receives unexplained negative feedback.", "Treat retaliation risk seriously. Preserve timing and examples, then report through HR, leadership, or Got a Concern."],
        ["Client-site behavior", "A client stakeholder behaves inappropriately toward a team member during travel.", "Support the colleague, remove immediate exposure where possible, notify leadership, and escalate through firm channels."],
      ],
      checklist: [
        "Act early when behavior undermines dignity, inclusion, safety, or merit-based opportunity.",
        "Separate performance feedback from personal attacks, stereotypes, intimidation, or exclusion.",
        "Preserve specific facts: date, location, people involved, messages, witnesses, and impact.",
        "Use HR, leadership, Partner Conduct, or Got a Concern depending on urgency and sensitivity.",
        "Protect people who report or participate in reviews from retaliation.",
      ],
      mistakes: [
        "Dismissing behavior because it happened at an offsite, dinner, or informal channel.",
        "Waiting for a pattern when one severe incident already requires escalation.",
        "Letting business pressure override safety, dignity, or anti-retaliation obligations.",
      ],
      escalation: "Escalate through HR, leadership, Partner Conduct, or Got a Concern; use emergency or local safety routes where immediate harm is possible.",
    },
  },
  {
    id: "information-security",
    title: "Information Security & Data Privacy",
    icon: Lock,
    status: "Completed",
    summary:
      "Protect confidential information and personal data during collection, analysis, storage, collaboration, transfer, and disposal.",
    details: [
      "Use approved systems, least-privilege access, strong authentication, secure sharing, retention limits, and client-specific handling rules.",
      "Personal data requires lawful, fair, transparent, limited, and secure processing, with extra care for sensitive information.",
      "Confidentiality duties continue after an engagement ends and after employment ends.",
    ],
    redFlags: ["Unapproved tools", "personal email", "public GenAI prompts", "overbroad access", "lost devices", "unmasked datasets"],
    action: "Stop sharing, secure the material, report incidents immediately, and follow client and firm data-handling protocols.",
    deepDive: {
      principle:
        "Information protection is a lifecycle discipline. Risk starts before data is received and continues through collection, storage, analysis, sharing, model use, publication, retention, and disposal. Confidentiality obligations survive the end of an engagement.",
      scenarios: [
        ["Public AI tool", "A teammate wants to paste client records into an unapproved external AI assistant.", "Stop the upload. Use approved tools and confirm client, privacy, confidentiality, and data-minimization requirements."],
        ["Access too broad", "A shared folder contains sensitive client data and the whole office can open it.", "Restrict access immediately, preserve facts, and report the incident through the required channel."],
        ["Personal device", "A consultant downloads client files to a personal laptop before travel.", "Move work back to approved systems, delete local copies under guidance, and report if data may have been exposed."],
      ],
      checklist: [
        "Classify data before receipt: client confidential, personal data, sensitive personal data, regulated data, or public data.",
        "Use approved storage, approved collaboration channels, strong authentication, and least-privilege access.",
        "Minimize fields, mask or aggregate where possible, and avoid copying data between environments without approval.",
        "Confirm legal basis, client permission, retention period, cross-border transfer rules, and deletion requirements.",
        "Report suspected incidents quickly, including lost devices, misdirected emails, exposed folders, or unapproved uploads.",
      ],
      mistakes: [
        "Assuming anonymization is sufficient when records can still be reidentified.",
        "Using personal email, consumer file sharing, or public GenAI for convenience.",
        "Leaving access open after staffing changes or engagement close.",
      ],
      escalation: "Escalate to Information Security, Privacy, Legal, client leadership, or incident response channels as soon as exposure is suspected.",
    },
  },
  {
    id: "human-rights",
    title: "Human Rights & Labor Standards",
    icon: Globe,
    status: "Pending",
    summary:
      "Uphold human rights, labor standards, and supply-chain expectations consistent with global frameworks and firm commitments.",
    details: [
      "Human-rights risk can arise through firm operations, client work, suppliers, contractors, agents, and downstream third parties.",
      "Forced labor, child labor, exploitative conditions, trafficking, retaliation, and unsafe working conditions require immediate attention.",
      "Responsible third-party management includes onboarding diligence, risk assessment, monitoring, and corrective action where needed.",
    ],
    redFlags: ["Worker coercion", "withheld documents", "underage labor", "unsafe sites", "opaque subcontractors"],
    action: "Escalate through risk, procurement, legal, or Got a Concern channels before continuing the activity.",
    deepDive: {
      principle:
        "Human-rights diligence extends beyond direct employees. It can involve suppliers, subcontractors, recruiting channels, workplace safety, client contexts, communities, and vulnerable populations affected by operations or advice.",
      scenarios: [
        ["Supplier audit issue", "A vendor audit mentions workers paying recruitment fees and surrendering identity documents.", "Treat it as a severe forced-labor signal. Escalate to procurement, legal, and risk before renewing or expanding work."],
        ["Opaque subcontracting", "A supplier refuses to identify subcontractors performing critical work.", "Pause onboarding until diligence confirms ownership, labor practices, location, and compliance expectations."],
        ["Client operating context", "A project touches a region with reports of forced displacement or labor exploitation.", "Escalate for human-rights risk review and ensure scope, safeguards, and documentation are appropriate."],
      ],
      checklist: [
        "Identify whether workers, communities, suppliers, subcontractors, or vulnerable groups may be affected.",
        "Look for forced labor, child labor, trafficking, wage abuse, unsafe conditions, retaliation, discrimination, or coercion.",
        "Require supplier transparency, contractual standards, diligence, monitoring, and corrective action.",
        "Document risk assessment, decision owners, remediation expectations, and stop-work triggers.",
        "Use reporting channels when concerns appear credible even if all facts are not yet proven.",
      ],
      mistakes: [
        "Assuming responsibility ends because the issue sits with a subcontractor.",
        "Accepting broad certifications without checking high-risk locations or labor categories.",
        "Continuing work while severe allegations remain unresolved.",
      ],
      escalation: "Escalate to procurement, risk, Legal, human-rights or compliance contacts, or Got a Concern depending on severity and immediacy.",
    },
  },
  {
    id: "trade-controls",
    title: "Trade Controls & Sanctions",
    icon: AlertTriangle,
    status: "Pending",
    summary:
      "Comply with applicable sanctions, export controls, restricted-party rules, and prohibitions on certain jurisdictions or entities.",
    details: [
      "Screening matters for clients, beneficial owners, counterparties, vendors, data access, technology transfers, travel, and payments.",
      "Sanctions risk can be indirect: a transaction may involve a prohibited party through ownership, control, routing, facilitation, or services.",
      "Export controls can apply to software, technical data, encryption, analytics, AI models, or cross-border access by restricted persons.",
    ],
    redFlags: ["Opaque ownership", "restricted country touchpoints", "unusual payment route", "blocked party match", "export-controlled data"],
    action: "Do not proceed until Legal, Risk, or Trade Controls has cleared the facts.",
    deepDive: {
      principle:
        "Sanctions and trade controls can apply to people, entities, ownership structures, countries, sectors, technologies, software, data access, payments, and services. The risk can be indirect, so screening and escalation must happen before work proceeds.",
      scenarios: [
        ["Ownership match", "A prospective client is not listed directly, but a beneficial owner may be sanctioned.", "Pause onboarding and request screening and legal review of ownership, control, and transaction scope."],
        ["Cross-border data access", "A restricted-country team member requests access to technical data or analytics tools.", "Do not grant access until export-control and sanctions rules are reviewed."],
        ["Payment routing", "A vendor asks to route payment through an unrelated country or bank.", "Treat as a sanctions and anti-money-laundering signal. Escalate before payment or services continue."],
      ],
      checklist: [
        "Screen clients, beneficial owners, counterparties, vendors, banks, geographies, and relevant users.",
        "Check country, sector, ownership, control, restricted-party, export-control, and service-prohibition rules.",
        "Review whether software, models, encryption, technical data, or analytics access may be controlled.",
        "Document clearance before onboarding, contracting, payment, data transfer, or travel.",
        "Refresh screening when ownership, scope, geography, payment route, or users change.",
      ],
      mistakes: [
        "Proceeding because the named client is not directly on a sanctions list while ownership is unclear.",
        "Treating data access as operational rather than a possible export or services issue.",
        "Using alternate payment paths to solve a blocked or delayed transaction.",
      ],
      escalation: "Escalate to Legal, Risk, Trade Controls, or sanctions specialists before any commitment, access, payment, or delivery.",
    },
  },
  {
    id: "environmental-sustainability",
    title: "Environmental Sustainability",
    icon: Leaf,
    status: "Pending",
    summary:
      "Integrate sustainability commitments and ESG considerations into daily decisions, procurement, operations, travel, and client service.",
    details: [
      "Sustainability risk includes environmental impact, supplier practices, climate-related operational risk, and responsible client impact.",
      "Colleagues should avoid unsupported sustainability claims and ensure any public-facing statement is accurate, traceable, and approved.",
      "Environmental considerations should be part of planning, not an afterthought added after commercial decisions are already locked.",
    ],
    redFlags: ["Unverified ESG claims", "supplier concerns", "avoidable emissions", "weak documentation", "greenwashing risk"],
    action: "Use approved sustainability guidance, document assumptions, and escalate material claims or tradeoffs.",
    deepDive: {
      principle:
        "Sustainability work requires disciplined facts, traceable assumptions, and careful claims. The risk is not only environmental impact; it also includes unsupported public statements, incomplete measurement, supplier issues, and advice that ignores material climate or social tradeoffs.",
      scenarios: [
        ["Public claim", "A team wants to state that an initiative is net-zero aligned without final methodology review.", "Do not publish. Verify data, methodology, boundaries, approval, and evidence behind the claim."],
        ["Supplier concern", "A low-cost supplier has poor environmental documentation and unclear labor practices.", "Escalate through procurement/risk and assess whether remediation, alternatives, or stop-work criteria apply."],
        ["Client recommendation", "A recommendation reduces cost but materially increases emissions or regulatory exposure.", "Make the tradeoff explicit, document assumptions, and include sustainability and compliance considerations in decision materials."],
      ],
      checklist: [
        "Define boundaries, baseline, methodology, data quality, assumptions, and limitations for environmental analysis.",
        "Avoid unsupported or absolute claims unless reviewed, evidenced, and approved.",
        "Consider supplier, travel, operations, technology, waste, and client-impact dimensions.",
        "Record assumptions and decision tradeoffs so conclusions are auditable.",
        "Escalate high-impact claims, public statements, or material ESG tradeoffs before release.",
      ],
      mistakes: [
        "Using broad sustainability language without evidence or methodology.",
        "Treating ESG as a communications issue instead of an operational and risk issue.",
        "Ignoring supplier or implementation impacts because the analysis looks good at a high level.",
      ],
      escalation: "Escalate to sustainability experts, Legal, Risk, procurement, or communications reviewers before publishing claims or making material tradeoffs.",
    },
  },
];
