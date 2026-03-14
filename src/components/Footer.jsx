"use client";

import "../styles/Footer.css";

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Mailchimp / API integration later
  };

  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-left">
          <p className="footer-label">NEWSLETTER</p>
          <h3>Notes from the studio</h3>
          <p>
            Occasional updates on what I&apos;m building, learning, and figuring
            out in tech, freelancing, and creative work.
          </p>
        </div>

        <form className="footer-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button type="submit">Join</button>
        </form>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <h4>JENOGECHI STUDIO</h4>
          <p>
            A creative studio where web development, storytelling, and
            experimentation meet.
          </p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/work">Work</a>
          <a href="/content">Content</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-socials">
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

      <div className="footer-copy">
        <p>© 2026 Jenogechi Studio. Built with curiosity and probably too much overthinking.</p>
      </div>
    </footer>
  );
}
