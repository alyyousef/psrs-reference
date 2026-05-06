import { CheckCircle, HelpCircle } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { decisionQuestions } from "../data/site.js";

export default function DecisionFramework() {
  return (
    <section className="section" id="decision">
      <div className="container">
        <SectionHeader
          eyebrow="Judgment framework"
          title="The Five-Question Pause"
          text="Use this before gifts, staffing decisions, data transfers, public-sector interactions, third-party onboarding, sustainability claims, or any action that feels rushed."
        />
        <div className="framework-grid">
          <article className="framework-intro fade-in">
            <HelpCircle size={34} strokeWidth={1.6} aria-hidden="true" />
            <h3>When in doubt, slow the decision down.</h3>
            <p>
              PSR is not just a set of prohibited acts. It is a way to structure
              professional judgment when the answer is unclear, facts are incomplete,
              commercial pressure is high, or reputational stakes are meaningful.
            </p>
          </article>
          <div className="question-list">
            {decisionQuestions.map((question, index) => (
              <div className="question-item fade-in" key={question}>
                <span>{index + 1}</span>
                <CheckCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                <p>{question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
