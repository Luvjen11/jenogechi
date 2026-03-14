import "../../styles/AboutSnippet.css";

export default function AboutSnippet() {
  return (
    <section className="about-snippet">
      <p className="snippet-label">ABOUT</p>
      <h2 className="snippet-title">Hi, I&apos;m Jen</h2>
      <p className="snippet-text">
        I&apos;m a computer science student and developer building digital products for founders and creators. I enjoy turning ideas into structured, thoughtful online experiences.
      </p>
      <a href="/about" className="snippet-cta">More about me →</a>
    </section>
  );
}
