"use client";

import "../styles/ContactPage.css";

const CALENDLY_URL = "https://calendly.com/aestheticjenny04/30min";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form backend / email service integration later
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-label">CONTACT</p>
        <h1>Let&apos;s bring your idea online.</h1>
        <p className="contact-intro">
          If you need a landing page, a website, or help shaping your online
          presence, I&apos;d love to hear what you&apos;re working on.
          <br />
          You can use the form below or reach out directly.
        </p>
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="contact-hero-calendly">
          Book a discovery call
        </a>
      </section>

      <section className="contact-grid">
        <div className="contact-info-card">
          <p className="section-label">WHAT I CAN HELP WITH</p>
          <h2>What you can contact me for</h2>

          <ul className="contact-services-list">
            <li>Landing pages for launches, offers, and waitlists</li>
            <li>Websites for personal brands and small businesses</li>
            <li>MVP builds for early-stage ideas</li>
            <li>Creative collaborations and content opportunities</li>
          </ul>

          <div className="direct-contact">
            <p className="section-label">PREFER EMAIL?</p>
            <a href="mailto:jenniferooke11@gmail.com">jenniferooke11@gmail.com</a>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/jenniferogechiokeke/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@jenogechiYT" target="_blank" rel="noreferrer">
              YouTube
            </a>
            {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a> */}
          </div>
        </div>

        <div className="contact-form-card">
          <p className="section-label">START HERE</p>
          <h2>Tell me a bit about your project</h2>
          <p className="form-intro">
            A few details and I&apos;ll know where to start.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>

            <div className="form-row">
              <label htmlFor="project">What are you building?</label>
              <input
                type="text"
                id="project"
                name="project"
                placeholder="A website, landing page, product idea..."
              />
            </div>

            <div className="form-row">
              <label htmlFor="help">What do you need help with?</label>
              <textarea
                id="help"
                name="help"
                rows={5}
                placeholder="Tell me a bit about the project and what you need."
              />
            </div>

            <div className="form-row two-col">
              <div>
                <label htmlFor="timeline">Timeline</label>
                <input type="text" id="timeline" name="timeline" placeholder="e.g. next month" />
              </div>

              <div>
                <label htmlFor="budget">Budget (optional)</label>
                <input type="text" id="budget" name="budget" placeholder="e.g. £500–£1000" />
              </div>
            </div>

            <button type="submit" className="contact-submit">
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <section className="contact-note-section">
        <div className="contact-note-card">
          <p className="section-label center">A QUICK NOTE</p>
          <p className="contact-note">
            I currently work with founders, creators, and small businesses
            looking for thoughtful digital work. If your project feels like a
            good fit, I&apos;ll get back to you with the next steps.
          </p>
        </div>
      </section>
    </main>
  );
}
