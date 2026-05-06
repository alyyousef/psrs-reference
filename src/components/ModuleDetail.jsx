import { ArrowLeft, CheckCircle } from "lucide-react";
import { sourceLinks } from "../data/sources.js";

export default function ModuleDetail({ module, onBack }) {
  const Icon = module.icon;

  return (
    <main className="module-page">
      <header className="module-page-hero">
        <div className="container">
          <button className="back-button" type="button" onClick={onBack}>
            <ArrowLeft size={18} aria-hidden="true" />
            Back to modules
          </button>
          <div className="module-page-title">
            <Icon size={40} strokeWidth={1.65} aria-hidden="true" />
            <span className={`badge ${module.status === "Completed" ? "badge-complete" : "badge-pending"}`}>
              {module.status}
            </span>
            <h1>{module.title}</h1>
            <p>{module.summary}</p>
          </div>
        </div>
      </header>

      <section className="section module-page-section">
        <div className="container detail-layout">
          <article className="detail-main">
            <p className="eyebrow">Core principle</p>
            <p className="principle-statement">{module.deepDive.principle}</p>

            <p className="eyebrow">What to know</p>
            <div className="detail-list">
              {module.details.map((detail) => (
                <div className="detail-item" key={detail}>
                  <CheckCircle size={18} strokeWidth={1.8} aria-hidden="true" />
                  <p>{detail}</p>
                </div>
              ))}
            </div>

            <div className="detail-block">
              <p className="eyebrow">Applied scenarios</p>
              <div className="deep-scenario-list">
                {module.deepDive.scenarios.map(([title, context, response]) => (
                  <article className="deep-scenario" key={title}>
                    <h3>{title}</h3>
                    <p>{context}</p>
                    <strong>{response}</strong>
                  </article>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <p className="eyebrow">Control checklist</p>
              <div className="checklist-grid">
                {module.deepDive.checklist.map((item) => (
                  <div className="checklist-item" key={item}>
                    <CheckCircle size={17} strokeWidth={1.8} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-action">
              <p className="eyebrow">Expected action</p>
              <h2>{module.action}</h2>
              <p>{module.deepDive.escalation}</p>
            </div>
          </article>

          <aside className="detail-side">
            <p className="eyebrow">Risk signals</p>
            <div className="red-flags detail-flags">
              {module.redFlags.map((flag) => <span key={flag}>{flag}</span>)}
            </div>

            <div className="source-mini">
              <p className="eyebrow">Relevant public references</p>
              {sourceLinks.slice(0, 4).map((source) => (
                <a key={source.title} href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
              ))}
            </div>

            <div className="mistakes-box">
              <p className="eyebrow">Common mistakes</p>
              <ul>
                {module.deepDive.mistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
