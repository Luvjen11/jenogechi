"use client";
import { useMemo, useState } from "react";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const projects = useMemo(
    () => [
      {
        id: "lov3d",
        tab: "LOV3D",
        accent: "tab1",
        title: "LOV3D Platform Features",
        subtitle: "React • Supabase • Production work",
        description:
          "Built and shipped UI features for a live platform, supporting user interactions and media workflows for digital jewel uploads.",
        highlights: [
          "Shipped features used by real users",
          "Improved media/workflow UX",
          "Collaborated with team + designers",
        ],
        image: "/images/projects/lov3d.png", 
        links: [
          { label: "Case Study", href: "/work/lov3d" },
          { label: "GitHub (private)", href: "#" },
        ],
      },
      {
        id: "booktracker",
        tab: "Shelfie",
        accent: "tab2",
        title: "Shelfie Book Tracker (PWA)",
        subtitle: "Next.js • Firebase • PWA",
        description:
          "A feminine PWA for tracking reads, quotes, and goals with a clean, cozy UI and fast load times.",
        highlights: ["PWA installable", "Simple auth + persistence", "UI-first UX"],
        image: "/images/projects/shelfie.png",
        links: [
          { label: "Live Demo", href: "#" },
          { label: "GitHub", href: "#" },
        ],
      },
      {
        id: "candymoney",
        tab: "Candy Finance",
        accent: "tab3",
        title: "Candy Finance Money Tracker",
        subtitle: "React • Data viz • UX",
        description:
          "Pastel-themed money tracker built to make budgeting less painful and more visual.",
        highlights: ["Budget categories", "Spending overview", "Clean UI components"],
        image: "/images/projects/candy.png",
        links: [
          { label: "Live Demo", href: "#" },
          { label: "Case Study", href: "/work/candy-finance" },
        ],
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId);

  return (
    <section className="projectsTabs">
      <div className="projectsTabs__header">
        <h2 className="projectsTabs__title">Selected Work</h2>
        <p className="projectsTabs__subtitle">
          Click a tab. Judge my work. Politely.
        </p>
      </div>

      <div className="folder">
        {/* Tabs */}
        <div className="folder__tabs" role="tablist" aria-label="Project tabs">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={p.id === activeId}
              className={`tab ${p.accent} ${p.id === activeId ? "isActive" : ""}`}
              onClick={() => setActiveId(p.id)}
            >
              {p.tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="folder__panel" role="tabpanel">
          <div className="panel">
            <div className="panel__left">
              <h3 className="panel__title">{active.title}</h3>
              <div className="panel__meta">{active.subtitle}</div>
              <p className="panel__desc">{active.description}</p>

              <ul className="panel__list">
                {active.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="panel__actions">
                {active.links.map((l) => (
                  <a key={l.label} className="btn" href={l.href}>
                    {l.label} →
                  </a>
                ))}
              </div>
            </div>

            <div className="panel__right">
              <div className="panel__imageFrame">
                {active.image ? (
                  <img
                    src={active.image}
                    alt={active.title}
                    className="panel__image"
                  />
                ) : (
                  <div className="panel__placeholder">
                    Add an image here (or keep it minimal).
                  </div>
                )}
                <div className="paperclip" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className="folder__footer">
          {/* <a className="tinyLink" href="/projects">
            View all projects →
          </a> */}
          <a className="tinyLink" href="https://jen-os.vercel.app/" target="_blank">
            Full portfolio site →
          </a>
        </div>
      </div>
    </section>
  );
}