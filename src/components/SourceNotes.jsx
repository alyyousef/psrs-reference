import SectionHeader from "./SectionHeader.jsx";
import { researchLimits, sourceCategories, sourceLinks } from "../data/sources.js";

export default function SourceNotes() {
  return (
    <section className="section" id="sources">
      <div className="container">
        <SectionHeader
          eyebrow="Research basis"
          title="Public Source Notes"
          text="A transparent source map for the reference and quiz content. The site uses McKinsey public governance materials where available, then official regulator or standards-body sources for legal concepts."
        />

        <div className="source-method fade-in">
          {sourceCategories.map((category) => (
            <article key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>

        <div className="source-matrix fade-in">
          <div className="source-row source-head">
            <span>Source</span>
            <span>Coverage</span>
            <span>How it is used</span>
          </div>
          {sourceLinks.map((source) => (
            <a className="source-row" href={source.url} target="_blank" rel="noreferrer" key={source.title}>
              <span>
                <strong>{source.title}</strong>
                <small>{source.category} | {source.updated}</small>
              </span>
              <span>
                {source.note}
                <em>{source.supports.join(" / ")}</em>
              </span>
              <span>{source.useFor}</span>
            </a>
          ))}
        </div>

        <div className="research-limits fade-in">
          <h3>Interpretation Limits</h3>
          <ul>
            {researchLimits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
