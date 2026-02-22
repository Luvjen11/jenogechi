import "../styles/StudioPillar.css";

export default function StudioPillar() {
  const services = [
    {
      title: "Landing Pages",
      subtitle: "For launches, offers, and sign-ups",
      desc: "A clean, conversion-focused page with strong structure, mobile-first layout, and a clear CTA.",
      badge: "1–2 weeks",
      image: "/images/left-pillar.png",
    },
    {
      title: "Websites",
      subtitle: "Personal brands + small businesses",
      desc: "A story-led website that looks premium, loads fast, and makes it easy for people to contact you.",
      badge: "2–4 weeks",
      image: "/images/center-pillar.png",
    },
    {
      title: "MVP Builds",
      subtitle: "For founders and early-stage ideas",
      desc: "A simple, working product you can demo. Built with clean code and scalable structure.",
      badge: "4–8 weeks",
      image: "/images/right-pillar.png",
    },
  ];

  return (
    <section className="pillars-section">
      <div className="pillars-label">
        <h1>STUDIO PILLARS</h1>
      </div>
      <div className="pillars-inner">
        <div className="pillars-stack">
          {services.map((s, idx) => (
            <article className={`postit postit-${idx + 1}`} key={s.title}>
              <div className="postit-frame">
                <img className="postit-image" src={s.image} alt={s.title} />

                <div className="postit-content">
                  <div className="postit-top">
                    <h2 className="postit-title">{s.title}</h2>
                    <span className="postit-badge">{s.badge}</span>
                  </div>

                  <p className="postit-subtitle">{s.subtitle}</p>
                  <p className="postit-desc">{s.desc}</p>

                  <a className="postit-link" href="/services">
                    Learn more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
