import "../../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <p className="studio-label">JENOGECHI STUDIO</p>

          <h1>
            Websites, landing pages, and MVPs
            <br />
            — built to actually convert.
          </h1>

          <p className="hero-description">
            I help founders, creators, and small businesses turn ideas
            into structured, working products online.
          </p>

          <a href="/contact" className="hero-button hero-button-primary">Work with me</a>
        </div>

        <div className="hero-right">
          <div className="image-placeholder">
            <img src="/images/hero-image.jpg" alt="Hero Image" width={320} height={420} />
          </div>
        </div>

      </div>
    </section>
  );
}
