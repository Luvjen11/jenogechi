import "../styles/AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-grid">
          <div className="about-hero-text">
            <p className="about-kicker">ABOUT JENOGECHI STUDIO</p>
            <h1>Hi, I&apos;m Jen.</h1>
            <p className="about-lead">
              A developer, builder, and professional overthinker who somehow
              turned curiosity into a career.
            </p>
            <p className="about-body">
              I&apos;m an Igbo Nigerian girl born and raised in Italy, now in the UK
              studying computer science and building things on the internet.
              Somewhere between coding, side projects, and trying to make sense
              of adult life, I realised I genuinely love creating digital things
              that help people feel more organised, clear, and less overwhelmed.
            </p>
          </div>

          <div className="about-hero-visual">
            <div className="polaroid polaroid-main">
              <img src="/images/about.jpg" alt="Jen portrait" />
              <p></p>
            </div>
            <div className="sticky-note">
              <p>
                born in Italy
                <br />
                Nigerian
                <br />
                now building in the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 1 */}
      <section className="story-section story-alt">
        <div className="story-text">
          <p className="section-label">01 / HOW IT STARTED</p>
          <h2>I didn&apos;t grow up with a grand tech origin story.</h2>
          <p>
            I wish I could say I built my first computer at age five or hacked
            into something impressive before puberty. Sadly, no.
          </p>
          <p>
            It started more like this: <em>&quot;Ooh, that looks interesting. I want
            to learn that.&quot;</em>
          </p>
          <p>
            First it was HTML. Then CSS. Then suddenly I was in a full-on
            situationship with Java, React, APIs, and debugging things at
            unreasonable hours.
          </p>
        </div>

        <div className="story-visual">
          <div className="paper-card">
            <pre>{`<div>
  curiosity = true;
  chaos = also true;
</div>`}</pre>
          </div>
        </div>
      </section>

      {/* SCENE 2 */}
      <section className="story-section">
        <div className="story-visual">
          <div className="polaroid">
            <img src="/images/coding.png" alt="Coding or workspace" />
            <p>somewhere between curiosity and code</p>
          </div>
        </div>

        <div className="story-text">
          <p className="section-label">02 / WHAT I BUILD</p>
          <h2>I build things that help ideas exist online.</h2>
          <p>
            Today I build digital products, websites, landing pages, and small
            experiments that help people bring their ideas to life on the
            internet.
          </p>
          <p>
            Sometimes that means building for clients. Sometimes it means
            building my own projects. Most of the time it means taking something
            messy and turning it into something clearer, more useful, and more
            real.
          </p>
        </div>
      </section>

      {/* SERVICE STYLE CARDS */}
      <section className="about-focus">
        <p className="section-label center">03 / WHAT I FOCUS ON</p>
        <div className="focus-grid">
          <article className="focus-card">
            <h3>Websites</h3>
            <p>
              Clean, thoughtful websites for founders, personal brands, and
              small businesses.
            </p>
          </article>

          <article className="focus-card">
            <h3>Landing Pages</h3>
            <p>
              Focused pages that help people understand the offer and take
              action.
            </p>
          </article>

          <article className="focus-card">
            <h3>Digital Products</h3>
            <p>
              Small tools, MVPs, and ideas that need structure, interaction, and
              clarity.
            </p>
          </article>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="timeline-header">
          <p className="section-label">04 / THE JOURNEY SO FAR</p>
          <h2>Still figuring it out. Still building anyway.</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h3>Learning through projects</h3>
              <p>
                I learned best by building. Courses helped, but making things
                real helped more.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h3>Bootcamps and hands-on experience</h3>
              <p>
                I kept sharpening my skills through bootcamps, practical
                projects, and building consistently.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h3>Freelance and real-world builds</h3>
              <p>
                I started working on actual websites and digital products, which
                taught me how much clarity and communication matter.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div className="timeline-content">
              <h3>Building my own ideas too</h3>
              <p>
                Alongside client work, I&apos;ve been exploring startup ideas,
                personal tools, and projects that reflect the way I think.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-section">
        <div className="trust-grid">
          <div className="trust-text">
            <p className="section-label">05 / WHY WORK WITH ME</p>
            <h2>I care about how your idea feels online, not just whether it loads.</h2>
            <p>
              When I work on a website or product, I&apos;m not only thinking about
              code. I&apos;m thinking about how someone experiences your brand, how
              clearly your offer comes across, and whether the final result
              feels intentional.
            </p>
            <p>
              My goal is to build things that look good, work properly, and make
              people trust what they&apos;re seeing.
            </p>
          </div>

          <div className="trust-note">
            <div className="note-card">
              <p className="note-title">Things I care about</p>
              <ul>
                <li>Clear structure</li>
                <li>Thoughtful design</li>
                <li>Usable interfaces</li>
                <li>Communication that makes sense</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-card">
          <p className="section-label center">06 / NEXT STEP</p>
          <h2>Let&apos;s build something interesting.</h2>
          <p>
            If you have an idea, a business, or a project you want to bring
            online, I&apos;d love to hear about it.
          </p>

          <div className="about-cta-actions">
            <a href="/work" className="primary-btn">
              View my work
            </a>
            <a href="/contact" className="secondary-btn">
              Contact me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
