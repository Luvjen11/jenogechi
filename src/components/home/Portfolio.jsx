"use client";
import { useMemo, useState } from "react";
import "../../styles/Portfolio.css";

export default function Portfolio() {
  const projects = useMemo(
    () => [
      {
        id: "lov3d",
        tab: "LOV3D",
        accent: "tab1",
        title: "LOV3D",
        subtitle: "3D Product Design Platform",
        description:
          "LOV3D is where designers, dreamers, and investors meet. Upload your work, share your process, and connect with those who believe in your vision. Categories include jewelry, furniture, architecture, and tech.",
        highlights: [
          "3D product design and upload",
          "Explore by category (jewelry, furniture, architecture, tech)",
          "Digital Jewelry Week on the platform",
        ],
        image: "/images/work/lov3d.png",
        links: [
          { label: "Visit lov3d.io", href: "https://lov3d.io/" },
          { label: "See more work", href: "/work" },
        ],
      },
      {
        id: "yv-yoga",
        tab: "Yoga YV",
        accent: "tab2",
        title: "Yoga YV",
        subtitle: "Yoga & Pilates in London",
        description:
          "We're not here to just stretch — we're here to reconnect. Expert-led sessions in yoga and Pilates that help you build strength, flexibility, and calm from the inside out. Menopause-friendly classes and a supportive environment.",
        highlights: [
          "Menopause-friendly classes",
          "Yoga & Pilates, book sessions online",
          "Classes, events, shop, and community",
        ],
        image: "/images/work/yv-yoga.png",
        links: [
          { label: "Visit yogayv.com", href: "https://www.yogayv.com/" },
          { label: "See more work", href: "/work" },
        ],
      },
      {
        id: "digital-jewelry-week",
        tab: "Digital Jewelry Week",
        accent: "tab3",
        title: "Digital Jewelry Week",
        subtitle: "100% digital showcase • Powered by Lov3D",
        description:
          "From 29 countries to one platform. A 100% digital showcase built for 3D and powered by Lov3D. Explore jewelry from emerging voices to established brands, immersive showrooms, and talks & masterclasses.",
        highlights: [
          "Immersive showrooms — digital jewelry comes alive",
          "Jewels, events, talks & masterclasses",
          "Global platform, built for 3D",
        ],
        image: "/images/work/digital-jewelry.png",
        links: [
          { label: "Visit DJW", href: "https://djwxlov3d.vercel.app/" },
          { label: "See more work", href: "/work" },
        ],
      },
      {
        id: "ntughari",
        tab: "Ntụgharị",
        accent: "tab4",
        title: "Ntụgharị",
        subtitle: "Igbo Language Learning",
        description:
          "The Bridge. You understand Igbo — now let's help you speak it. Ntụgharị creates a safe, judgment-free space to practice and build confidence in your heritage language. Alphabet, vocabulary, stories, and phrase-to-pieces.",
        highlights: [
          "36 Igbo letters & sounds, vocabulary by category",
          "Stories, sentence skeletons, everyday phrases",
          "Built for the diaspora: understand → speak",
        ],
        image: "/images/work/ntughari.png",
        links: [
          { label: "Visit ntughari.vercel.app", href: "https://ntughari.vercel.app/" },
          { label: "See more work", href: "/work" },
        ],
      },
      {
        id: "luhairvision",
        tab: "LU Hair Vision",
        accent: "tab5",
        title: "LU Hair Vision",
        subtitle: "Luxury Hair, Braids & Bridal",
        description:
          "LU Hair Vision is a luxury beauty brand site designed to feel elevated, elegant, and conversion-focused. It presents services, bridal experience, gallery highlights, and integrated booking in a seamless multilingual flow.",
        highlights: [
          "Multilingual experience (EN, IT, FR)",
          "Service menu, bridal page, gallery, and booking flow",
          "Luxury-first visual direction with conversion-focused sections",
        ],
        image: "/images/work/luhairvision.png",
        links: [
          { label: "Visit luhairvision", href: "https://luhairvision.vercel.app/en" },
          { label: "See more work", href: "/work" },
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
          <a className="portfolio-dev-btn" href="https://jen-os.vercel.app/" target="_blank" rel="noreferrer">
            Visit developer portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}