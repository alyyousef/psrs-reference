import SectionHeader from "./SectionHeader.jsx";
import { reportingSteps } from "../data/site.js";

export default function ReportingEscalation() {
  return (
    <section className="section section-gray" id="reporting">
      <div className="container">
        <SectionHeader
          eyebrow="Reporting and escalation"
          title="How to Raise a Concern"
          text="McKinsey's public Code materials describe a duty to speak up and identify Got a Concern as a third-party-hosted channel for confidential and anonymous reporting where permitted by law."
        />
        <div className="steps-grid">
          {reportingSteps.map((step) => (
            <article className="step fade-in" key={step.title}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <div className="info-box fade-in">
          Public McKinsey materials describe the Professional Standards Committee
          as a global committee that reviews partner misconduct matters that may
          put the firm at risk or involve breaches of firm policy, professional
          standards, or firm values. Reported consequences can include performance
          downtick, financial penalty, leadership removal, or separation.
        </div>
      </div>
    </section>
  );
}
