import "../styles/ContentPage.css";
import { MAILCHIMP_SUBSCRIBE_ACTION } from "@/lib/mailchimp";
import MailchimpHoneypot from "@/components/MailchimpHoneypot";

export default function ContentPage() {
  const latestItems = [
    {
      title: "Building my portfolio as a CS student",
      description: "Documenting how I'm designing and building my developer portfolio while learning in public.",
      type: "Video",
      href: "#",
      cta: "Watch →",
    },
    {
      title: "What I'm focusing on in my early 20s",
      description: "A reflection on skills, systems, and priorities while building a career in tech.",
      type: "Article",
      href: "#",
      cta: "Read →",
    },
  ];

  const startupProjects = [
    { name: "SelfSaga", line: "A gamified personal growth platform exploring systems for self-development." },
    { name: "OneSeed", line: "A spiritual reflection tool designed to support small daily habits of faith." },
    { name: "Content Nest", line: "A structured space for managing content ideas." },
  ];

  return (
    <main className="content-page">
      <section className="content-hero">
        <p className="content-label">BUILDING IN PUBLIC</p>
        <h1>Content & Ideas</h1>
        <p className="content-hero-lead">
          Here&apos;s where I document what I&apos;m building, learning, and experimenting with — from tech projects to personal systems and startup ideas.
        </p>
        <p className="content-hero-tagline">
          Some things start as content.
          <br />
          Some turn into products.
        </p>
      </section>

      <section className="content-pillars">
        <div className="pillars-inner">
          <article className="pillar-card">
            <h3>YouTube</h3>
            <p>Longer videos where I document projects, tech experiments, and building in public.</p>
          </article>
          <article className="pillar-card">
            <h3>Articles</h3>
            <p>Notes and thoughts about tech, systems, and building digital products.</p>
          </article>
          <article className="pillar-card">
            <h3>Startup Journey</h3>
            <p>Updates about what I&apos;m building, experiments, and lessons along the way.</p>
          </article>
          <article className="pillar-card">
            <h3>SelfSaga</h3>
            <p>Ideas and concepts related to the gamified personal growth platform I&apos;m building.</p>
          </article>
        </div>
      </section>

      <section className="latest-content">
        <p className="content-label">LATEST</p>
        <h2>Recent posts & videos</h2>
        <div className="content-grid">
          {latestItems.map((item) => (
            <article className="content-card" key={item.title}>
              <span className="content-type">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href}>{item.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="startup-section">
        <p className="content-label">PROJECTS</p>
        <h2>Building things that might work</h2>
        <p className="startup-intro">
          Alongside client work, I&apos;m also building my own ideas.
          <br />
          Some stay as experiments. Some slowly evolve into real products.
        </p>
        <ul className="startup-list">
          {startupProjects.map((project) => (
            <li key={project.name}>
              <strong>{project.name}</strong>
              <span> — {project.line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="selfsaga-block">
        <div className="selfsaga-inner">
          <p className="content-label">FEATURED PROJECT</p>
          <h2>SelfSaga</h2>
          <p className="selfsaga-body">
            SelfSaga explores a different way of thinking about personal growth.
            Instead of productivity systems that feel rigid or overwhelming, the idea is to create something softer — a space where reflection, progress, and small daily actions can feel more like a story than a checklist.
          </p>
          <p className="selfsaga-note">This project is still evolving.</p>
          <a href="#" className="selfsaga-cta">Follow the journey →</a>
        </div>
      </section>

      <section className="content-newsletter">
        <div className="newsletter-inner">
          <p className="content-label">NEWSLETTER</p>
          <h2>Occasional thoughts</h2>
          <p className="newsletter-text">
            Every now and then I send a small update about what I&apos;m building, learning, or experimenting with.
            <br />
            No spam. Just ideas.
          </p>
          <form
            className="newsletter-form"
            action={MAILCHIMP_SUBSCRIBE_ACTION}
            method="post"
            target="_blank"
          >
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL-content"
              placeholder="Your email"
              aria-label="Email address"
              required
              autoComplete="email"
              className="required email"
            />
            <MailchimpHoneypot />
            <button type="submit" name="subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
