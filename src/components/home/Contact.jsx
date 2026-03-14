import "../../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-cta">
      <div className="contact-cta-card">
        <p className="contact-cta-label">LET&apos;S BUILD SOMETHING GOOD</p>

        <h2 className="contact-cta-title">
          Have an idea you want to bring online?
        </h2>

        <p className="contact-cta-text">
          Let&apos;s talk about your project and see if we&apos;re a good fit.
        </p>

        <div className="contact-cta-buttons">
          <a href="https://calendly.com/aestheticjenny04/30min" target="_blank" rel="noreferrer" className="contact-cta-button contact-cta-primary">
            Book a discovery call
          </a>
          <a href="/contact" className="contact-cta-button contact-cta-secondary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
