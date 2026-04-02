import "../../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <p className="studio-label">JENOGECHI STUDIO</p>

          <h1>
            I build websites
            <br /> 
            and MVPs
            <br />
            for founders and small businesses.
          </h1>

          <p className="hero-description">
            Computer Science student. Developer. Moving into AI and data-led products.
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
