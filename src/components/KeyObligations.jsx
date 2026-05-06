import SectionHeader from "./SectionHeader.jsx";
import { obligations } from "../data/site.js";

export default function KeyObligations() {
  return (
    <section className="section obligations-section" id="obligations">
      <div className="container">
        <SectionHeader
          eyebrow="Colleague obligations"
          title="Your Core Obligations as a McKinsey Colleague"
          text="The practical standard is simple: pause when the situation is uncertain, protect trust while facts are clarified, and escalate through the right channel before risk becomes irreversible."
          inverse
        />
        <div className="obligations-grid">
          {obligations.map((item) => {
            const Icon = item.icon;
            return (
              <article className="obligation-card fade-in" key={item.title}>
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
