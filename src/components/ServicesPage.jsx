import "../styles/ServicesPage.css";

export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* 1. HERO */}
      <section className="services-hero">
        <p className="services-kicker">SERVICES</p>
        <h1>What I Build</h1>
        <p className="services-hero-lead">
          I help founders, creators, and small businesses bring their ideas online.
        </p>
        <p className="services-hero-body">
          Some people come to me with a clear vision.
          Others just know they need &quot;a website&quot;.
          My job is to turn that into something structured, functional,
          and actually enjoyable to use.
        </p>
        <p className="services-hero-cta">Three ways we can work together ↓</p>
      </section>

      {/* 2. STUDIO PILLARS OVERVIEW */}
      <section className="pillars-overview">
        <div className="pillars-grid">
          <article className="pillar-card">
            <h2>Landing Pages</h2>
            <p>For launches, offers, and sign-ups.</p>
            <a href="#landing" className="pillar-link">Learn more</a>
          </article>
          <article className="pillar-card">
            <h2>Websites</h2>
            <p>For personal brands and small businesses.</p>
            <a href="#websites" className="pillar-link">Learn more</a>
          </article>
          <article className="pillar-card">
            <h2>MVP Builds</h2>
            <p>For founders testing early ideas.</p>
            <a href="#mvp" className="pillar-link">Learn more</a>
          </article>
        </div>
      </section>

      {/* 3. LANDING PAGES */}
      <section className="service-section" id="landing">
        <div className="service-inner">
          <p className="section-label">01</p>
          <h2>Landing Pages</h2>
          <p className="service-price">From £150 depending on scope</p>
          <p className="service-timeline">Timeline: 1–2 weeks</p>
          <p className="service-intro">
            Perfect for launches, products, waitlists, or offers.
          </p>
          <p className="service-desc">
            A landing page is designed for one thing:
            getting visitors to take action.
          </p>
          <div className="service-included">
            <p className="included-title">What&apos;s included</p>
            <ul>
              <li>Strategy and structure</li>
              <li>Mobile-first layout</li>
              <li>Conversion-focused design</li>
              <li>Contact / sign-up integration</li>
              <li>SEO basics</li>
              <li>Launch support</li>
            </ul>
          </div>
          <p className="service-body">
            Landing pages work best when they are simple and focused.
            Instead of overwhelming visitors with ten pages,
            everything they need to know lives in one clear flow.
            The goal is to make it easy for someone to understand your offer
            and say &quot;yes&quot;.
          </p>
          <div className="service-typical">
            <p className="typical-title">Typical clients</p>
            <ul>
              <li>Startup founders</li>
              <li>Personal brands</li>
              <li>Small businesses</li>
            </ul>
          </div>
          <a href="/contact" className="service-cta">Start a landing page →</a>
        </div>
      </section>

      {/* 4. WEBSITES */}
      <section className="service-section service-alt" id="websites">
        <div className="service-inner">
          <p className="section-label">02</p>
          <h2>Websites</h2>
          <p className="service-price">From £300 depending on scope</p>
          <p className="service-timeline">Timeline: 2–4 weeks</p>
          <p className="service-intro">
            For personal brands, creators, and small businesses.
          </p>
          <p className="service-desc">
            Your website is often the first impression someone has of your work.
            I build websites that feel clean, intentional,
            and easy for visitors to navigate.
            Something that represents your brand properly,
            not just a random template.
          </p>
          <div className="service-included">
            <p className="included-title">What&apos;s included</p>
            <ul>
              <li>Multi-page website</li>
              <li>Responsive design</li>
              <li>About + services structure</li>
              <li>Contact forms</li>
              <li>Portfolio / project sections</li>
              <li>SEO foundations</li>
            </ul>
          </div>
          <div className="service-typical">
            <p className="typical-title">Typical clients</p>
            <ul>
              <li>Startup founders</li>
              <li>Personal brands</li>
              <li>Small businesses</li>
            </ul>
          </div>
          <a href="/contact" className="service-cta">Build my website →</a>
        </div>
      </section>

      {/* 5. MVP BUILDS */}
      <section className="service-section" id="mvp">
        <div className="service-inner">
          <p className="section-label">03</p>
          <h2>MVP Builds</h2>
          <p className="service-price">From £500 depending on scope</p>
          <p className="service-timeline">Timeline: 4–8 weeks</p>
          <p className="service-intro">
            For founders testing ideas or building early products.
          </p>
          <p className="service-desc">
            If you have an idea for a product but nothing built yet,
            an MVP helps you turn that idea into something real.
            Instead of spending months planning,
            we create a working version you can show users,
            investors, or early customers.
          </p>
          <div className="service-included">
            <p className="included-title">What&apos;s included</p>
            <ul>
              <li>Product architecture</li>
              <li>Frontend development</li>
              <li>Backend setup</li>
              <li>Database structure</li>
              <li>Authentication</li>
              <li>Deployment</li>
            </ul>
          </div>
          <div className="service-typical">
            <p className="typical-title">Typical clients</p>
            <ul>
              <li>Startup founders</li>
              <li>Personal brands</li>
              <li>Small businesses</li>
            </ul>
          </div>
          <a href="/contact" className="service-cta">Discuss an MVP →</a>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section className="process-section">
        <div className="process-inner">
          <p className="section-label center">Process</p>
          <h2>How the process works</h2>
          <div className="process-steps">
            <div className="process-step">
              <span className="process-num">1</span>
              <div>
                <h3>Discovery</h3>
                <p>We talk about your idea, goals, and timeline.</p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-num">2</span>
              <div>
                <h3>Structure</h3>
                <p>I design the layout and architecture of the project.</p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-num">3</span>
              <div>
                <h3>Build</h3>
                <p>Development begins and you receive progress updates.</p>
              </div>
            </div>
            <div className="process-step">
              <span className="process-num">4</span>
              <div>
                <h3>Launch</h3>
                <p>We test, refine, and publish your project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="services-final-cta">
        <div className="services-cta-card">
          <h2>Have an idea you want to bring online?</h2>
          <p>Let&apos;s build something interesting.</p>
          <div className="services-cta-buttons">
            <a href="https://calendly.com/aestheticjenny04/30min" target="_blank" rel="noreferrer" className="services-cta-button">Book a discovery call</a>
            <a href="/contact" className="services-cta-button services-cta-secondary">Contact me</a>
          </div>
        </div>
      </section>
    </main>
  );
}
