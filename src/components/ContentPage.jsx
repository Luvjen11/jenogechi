import "../styles/ContentPage.css";

export default function ContentPage() {
  const links = [
    {
      name: "TikTok — @selfsaga",
      line: "SelfSaga updates, personal growth systems, and building in public.",
      href: "https://www.tiktok.com/@selfsaga",
    },
    {
      name: "TikTok — @jenogechi",
      line: "Dev life, project breakdowns, and behind-the-scenes of the studio.",
      href: "https://www.tiktok.com/@jenogechi",
    },
    {
      name: "YouTube",
      line: "Longer-form videos on projects, tech experiments, and building in public.",
      href: "https://www.youtube.com/@jenogechiYT",
    },
  ];

  return (
    <main className="content-page">
      <section className="content-hero">
        <p className="content-label">BUILDING IN PUBLIC</p>
        <h1>Where I post</h1>
        <p className="content-hero-lead">
          The client work lives on the rest of this site. This is where I
          document what I&apos;m building and learning day to day — mostly on
          TikTok and YouTube.
        </p>
      </section>

      <section className="content-links">
        <div className="content-links-grid">
          {links.map((link) => (
            <a
              className="content-link-card"
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{link.name}</h3>
              <p>{link.line}</p>
              <span className="content-link-cta">Visit →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="selfsaga-block">
        <div className="selfsaga-inner">
          <p className="content-label">FEATURED PROJECT</p>
          <h2>SelfSaga</h2>
          <p className="selfsaga-body">
            SelfSaga explores a different way of thinking about personal growth.
            Instead of productivity systems that feel rigid or overwhelming, the
            idea is to create something softer — a space where reflection,
            progress, and small daily actions can feel more like a story than a
            checklist.
          </p>
          <p className="selfsaga-note">
            Still evolving — follow along on TikTok for updates.
          </p>
          <a
            href="https://www.tiktok.com/@selfsaga"
            className="selfsaga-cta"
            target="_blank"
            rel="noreferrer"
          >
            Follow the journey →
          </a>
        </div>
      </section>
    </main>
  );
}
