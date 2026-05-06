export default function SectionHeader({ eyebrow, title, text, inverse = false }) {
  return (
    <div className={`section-header fade-in ${inverse ? "inverse" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-lede">{text}</p> : null}
    </div>
  );
}
