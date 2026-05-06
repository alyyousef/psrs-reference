import SectionHeader from "./SectionHeader.jsx";
import { scenarios } from "../data/site.js";

export default function ScenarioLibrary() {
  return (
    <section className="section" id="scenarios">
      <div className="container">
        <SectionHeader
          eyebrow="Applied examples"
          title="Scenario Library"
          text="A quick reference for common gray areas. The expected action is intentionally conservative: protect information, document facts, and use the right escalation route."
        />
        <div className="scenario-table fade-in" role="table" aria-label="PSR scenario library">
          <div className="scenario-row scenario-head" role="row">
            <span>Scenario</span>
            <span>Risk signal</span>
            <span>Expected action</span>
          </div>
          {scenarios.map(([scenario, risk, action]) => (
            <div className="scenario-row" role="row" key={scenario}>
              <span>{scenario}</span>
              <span>{risk}</span>
              <span>{action}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
