import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <p className="studio-label">JENOGECHI STUDIO</p>

          <h1>
            I build digital projects
            <br />
            and document the journey.
          </h1>
            {/* <h1>JENOGECHI STUDIO</h1>
            <p className="hero-description">I run a creative studio where I build digital products
            and document the journey into the digital world.</p> */}

          <p className="hero-description">
            A creative studio where web development, storytelling,
            and experimentation meet.
          </p>

          <button className="hero-button">
            <a href="/contact">Work with me</a>
          </button>
        </div>

        <div className="hero-right">
          <div className="image-placeholder">
            Find image to add
          </div>
        </div>

      </div>
    </section>
  );
}