import { useEffect, useState } from "react";
import Hero from "./components/Hero.jsx";
import AboutPSR from "./components/AboutPSR.jsx";
import ModuleGrid from "./components/ModuleGrid.jsx";
import ModuleDetail from "./components/ModuleDetail.jsx";
import KeyObligations from "./components/KeyObligations.jsx";
import DecisionFramework from "./components/DecisionFramework.jsx";
import ReportingEscalation from "./components/ReportingEscalation.jsx";
import ScenarioLibrary from "./components/ScenarioLibrary.jsx";
import Quiz from "./components/Quiz.jsx";
import CertFooter from "./components/CertFooter.jsx";
import SourceNotes from "./components/SourceNotes.jsx";
import { modules } from "./data/modules.js";

export default function App() {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const completedCount = modules.filter((module) => module.status === "Completed").length;
  const selectedModule = modules.find((module) => module.id === selectedModuleId);

  useEffect(() => {
    function syncModuleFromHash() {
      const match = window.location.hash.match(/^#module-(.+)$/);
      setSelectedModuleId(match ? match[1] : null);
    }

    syncModuleFromHash();
    window.addEventListener("popstate", syncModuleFromHash);
    window.addEventListener("hashchange", syncModuleFromHash);
    return () => {
      window.removeEventListener("popstate", syncModuleFromHash);
      window.removeEventListener("hashchange", syncModuleFromHash);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".fade-in"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [selectedModuleId]);

  function openModule(moduleId) {
    setSelectedModuleId(moduleId);
    window.history.pushState(null, "", `#module-${moduleId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeModule() {
    setSelectedModuleId(null);
    window.history.pushState(null, "", "#modules");
    window.setTimeout(() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" }), 0);
  }

  if (selectedModule) {
    return <ModuleDetail module={selectedModule} onBack={closeModule} />;
  }

  return (
    <main>
      <Hero completedCount={completedCount} moduleCount={modules.length} />
      <AboutPSR />
      <ModuleGrid modules={modules} onSelect={openModule} />
      <KeyObligations />
      <DecisionFramework />
      <ReportingEscalation />
      <ScenarioLibrary />
      <Quiz />
      <SourceNotes />
      <CertFooter />
    </main>
  );
}
