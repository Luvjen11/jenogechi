import "../../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <p className="studio-label">JENOGECHI STUDIO</p>

          <h1>
            I build websites, MVPs, and digital tools
            <br />
            for founders and small businesses.
          </h1>

          <p className="hero-description">
            A creative studio where web development, storytelling,
            and experimentation meet.
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
