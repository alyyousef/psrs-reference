import SectionHeader from "./SectionHeader.jsx";

export default function ModuleGrid({ modules, onSelect }) {
  return (
    <section className="section" id="modules">
      <div className="container">
        <SectionHeader
          eyebrow="Core curriculum"
          title="Core Principles Modules"
          text="Seven concise modules. Open any module for scenarios, checklists, risk signals, and escalation guidance."
        />

        <div className="module-grid">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <button className="module-card fade-in" type="button" key={module.title} onClick={() => onSelect(module.id)}>
                <div className="module-number">0{index + 1}</div>
                <div className="card-topline">
                  <Icon size={30} strokeWidth={1.75} aria-hidden="true" />
                  <span className={`badge ${module.status === "Completed" ? "badge-complete" : "badge-pending"}`}>
                    {module.status}
                  </span>
                </div>
                <h3>{module.title}</h3>
                <p>{module.summary}</p>
                <div className="module-preview">
                  <strong>Key points</strong>
                  <ul>
                    {module.details.slice(0, 3).map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
                <span className="module-link">Open module</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
