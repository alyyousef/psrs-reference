import SectionHeader from "./SectionHeader.jsx";
import { principleCards, quickStats } from "../data/site.js";
import { sourceLinks } from "../data/sources.js";

export default function AboutPSR() {
  return (
    <section className="section section-gray" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Program overview"
          title="About This Program"
          text="A public-source learning reference based on McKinsey's published Code, governance statements, and official legal/regulatory references. It is designed as a study aid, not a substitute for internal policy guidance."
        />

        <div className="about-grid">
          <div className="about-copy fade-in">
            <h3>Firm-wide mandatory risk discipline</h3>
            <p>
              McKinsey publicly describes Our Code as the foundation for how colleagues
              build and maintain trust with clients, communities, and one another. Its
              public Human Rights Statement says active colleagues participate in risk
              training and certify compliance with firm policies and Our Code annually.
            </p>
            <p>
              This reference organizes the major PSR topics into decision-ready modules:
              anti-corruption, conflicts, conduct, information security, human rights,
              trade controls, privacy, records, reporting, and sustainability.
            </p>
            <a className="text-link" href="#sources">Review source basis</a>
          </div>

          <div className="stats-grid">
            {quickStats.map(([value, label]) => (
              <article className="stat-card fade-in" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="principles-grid">
          {principleCards.map(([title, text]) => (
            <article className="principle-card fade-in" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="source-strip">
          <span>Public content anchors</span>
          {sourceLinks.slice(0, 4).map((source) => (
            <a key={source.title} href={source.url} target="_blank" rel="noreferrer">
              {source.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
