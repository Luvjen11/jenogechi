import "../styles/WorkPage.css";

export default function WorkPage() {
  const selectedProjects = [
    {
      title: "Digital Exhibition Group",
      description:
        "Designing experiences that live between digital and physical. Immersive ecosystems where brands, people, and culture meet — creative consultancy, 3D technology, and digital exhibitions.",
      tags: ["Consultancy", "3D", "Digital Exhibitions"],
      image: "/images/work/digital-exhibition.png",
      link: "https://digitalexhibitiongroup.com/",
    },
    {
      title: "Yoga YV",
      description:
        "Yoga & Pilates in London. Expert-led sessions that help you build strength, flexibility, and calm from the inside out. Menopause-friendly classes and a supportive community.",
      tags: ["Website", "Yoga", "Pilates"],
      image: "/images/work/yv-yoga.png",
      link: "https://www.yogayv.com/",
    },
    {
      title: "Digital Jewelry Week",
      description:
        "From 29 countries to one platform. A 100% digital showcase built for 3D jewelry, powered by Lov3D — showrooms, jewels, talks, and masterclasses.",
      tags: ["Events", "3D", "Jewelry"],
      image: "/images/work/digital-jewelry.png",
      link: "https://djwxlov3d.vercel.app/",
    },
    {
      title: "Ntụgharị",
      description:
        "Igbo language learning for the diaspora. A safe, judgment-free space to practice and build confidence in your heritage language — alphabet, vocabulary, stories, and everyday phrases.",
      tags: ["Language", "Learning", "Web"],
      image: "/images/work/ntughari.png",
      link: "https://ntughari.vercel.app/",
    },
    {
      title: "Digital Design Week",
      description:
        "A digital exhibition where design work exists as you made it — 3D space, dimensions, materials, light. Students and studios submit across five categories; one week of digital exhibition, April 20–26 2026.",
      tags: ["Events", "3D", "Design"],
      image: "/images/work/ddweek.png",
      link: "https://www.ddweek.com/",
    },
    {
      title: "LU Hair Vision",
      description:
        "Luxury hair, braids, extensions, makeup artistry, and bridal booking experience. A multilingual website crafted to present premium services with strong storytelling, visual polish, and clear booking conversion.",
      tags: ["Website", "Beauty", "Booking"],
      image: "/images/work/luhairvision.png",
      link: "https://luhairvision.vercel.app/en",
    },
  ];

  const archiveProjects = [
    { title: "SelfSaga", description: "A personal growth platform exploring gamified self-development." },
    { title: "MovieMuse", description: "A full-stack web app for your personal movie collection and reviews. Add titles by hand or import from TMDB (movies) or AniList (anime); filter by type and genre, write and edit reviews. Includes a content-based “similar movies” recommendation system." },
    { title: "Bristol Community Events (BCE)", description: "A web-based platform to promote, manage, and connect community events in Bristol. Discover, book, and manage local events; admins get tools for event data, venues, and bookings. Built for accessibility, simplicity, and responsive design." },
    { title: "Akụkọ nke Ndụ", description: "Akụkọ means “story” and Ndụ means “life” in Igbo — together, “The Story of Life.” A tiny library of moments that moved me: save, revisit, and organize quotes from the books I love. A cozy place to collect and revisit my favorite book quotes." },
  ];

  return (
    <main className="work-page">
      <section className="work-hero">
        <p className="work-label">WORK / PROJECTS / ARCHIVE</p>
        <h1>Selected Work</h1>
        <p className="work-intro">
          A curated selection of projects, experiments, and digital products I&apos;ve
          built along the way. Some were created for clients, some for learning,
          and some because my brain refused to leave the idea alone.
        </p>
      </section>

      <section className="featured-project">
        <div className="featured-image">
          <img src="/images/work/lov3d-feature.png" alt="LOV3D - 3D product design platform" />
        </div>
        <div className="featured-content">
          <p className="work-label">FEATURED PROJECT</p>
          <h2>LOV3D</h2>
          <p>
            A 3D product design platform where designers, dreamers, and investors meet. Upload your work, share your process, and connect with those who believe in your vision.
          </p>
          <p>
            Categories span jewelry, furniture, architecture, and tech. I developed and shipped user-facing features and supported the live platform.
          </p>
          <a href="https://lov3d.io/" className="work-link" target="_blank" rel="noreferrer">
            Visit lov3d.io →
          </a>
        </div>
      </section>

      <section className="selected-projects">
        <p className="work-label">SELECTED PROJECTS</p>
        {selectedProjects.map((project) => (
          <article className="project-row" key={project.title}>
            <div className="project-thumb">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-main">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-meta">
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">View project →</a>
            </div>
          </article>
        ))}
      </section>

      <section className="archive-section">
        <p className="work-label">EXPERIMENTS / IN PROGRESS</p>
        <h2>Ideas still growing</h2>
        <ul className="archive-list">
          {archiveProjects.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span> — {item.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="portfolio-bridge">
        <h2>Want the technical side?</h2>
        <p>
          Jen-OS is my developer portfolio, where I document the code, architecture,
          and deeper technical thinking behind my builds.
        </p>
        <a href="https://jen-os.vercel.app/" className="bridge-btn" target="_blank" rel="noreferrer">
          Visit developer portfolio →
        </a>
      </section>

      <section className="work-cta">
        <h2>Have an idea you want to bring online?</h2>
        <p>Let&apos;s build something interesting.</p>
        <div className="work-cta-actions">
          <a href="/contact" className="bridge-btn primary">Work with me</a>
          <a href="/contact" className="bridge-btn">Contact me</a>
        </div>
      </section>
    </main>
  );
}
