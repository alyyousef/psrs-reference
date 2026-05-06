import { useState } from "react";
import { ArrowDownRight, BookOpen, CheckCircle } from "lucide-react";
import { sectionNav } from "../data/site.js";

export default function Hero({ completedCount, moduleCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = (completedCount / moduleCount) * 100;

  return (
    <header className="hero-section" id="top">
      <nav className={`top-nav ${menuOpen ? "menu-open" : ""}`} aria-label="Section navigation">
        <a className="wordmark" href="#top">
          <img src={`${import.meta.env.BASE_URL}SY.png`} alt="" />
          <span>McK | Sherif Youssef</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="section-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <div className="nav-links" id="section-menu">
          {sectionNav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>

      <div className="container hero-layout">
        <div className="hero-copy fade-in">
          <p className="hero-kicker">McK | Sherif Youssef</p>
          <h1>Core Principles Reference</h1>
          <p>
            Annual Certification Program for ethics, compliance, risk judgment,
            confidentiality, reporting, and professional conduct.
          </p>
          <hr />
          <div className="hero-actions">
            <a className="primary-button" href="#modules">
              <BookOpen size={18} aria-hidden="true" />
              Study Modules
            </a>
            <a className="secondary-button" href="#quiz">
              Knowledge Check
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label={`${completedCount} of ${moduleCount} modules completed`}>
          <CheckCircle size={26} aria-hidden="true" />
          <p>Certification Progress</p>
          <strong>{completedCount} of {moduleCount}</strong>
          <span>modules completed</span>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <small>{Math.round(progress)}% complete based on module status</small>
        </aside>
      </div>
    </header>
  );
}
