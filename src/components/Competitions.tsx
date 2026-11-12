import { Volleyball } from "lucide-react";
import { competitions } from "@/data/competitions";

export default function Competitions() {
  return (
    <section className="competitions-section" id="competitions" aria-labelledby="competitions-heading">
      <div className="page-width">
        <div className="competitions-heading">
          <p className="section-label section-label-light"><i />Playing experience</p>
          <h2 id="competitions-heading">Competitions played</h2>
          <p>Competitive volleyball experience spanning middle school, high school, university, and senior-level national tournaments in Ghana.</p>
        </div>
        <div className="competition-grid">
          {competitions.map((competition, index) => (
            <article className="competition-card" key={competition.id} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="competition-card-top"><Volleyball size={22} aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <h3>{competition.name}{competition.id === "senior-national" && " - Senior Level"}</h3>
              <p>{competition.category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
