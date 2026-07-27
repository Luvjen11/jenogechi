import "../../styles/AboutSnippet.css";

export default function AboutSnippet() {
  return (
    <section className="about-snippet">
      <p className="snippet-label">ABOUT</p>
      <h2 className="snippet-title">Hi, I&apos;m Jen</h2>
      <p className="snippet-text">
        I&apos;m a developer building websites and MVPs for founders and creators.
        I also build and ship my own products, so I bring a founder&apos;s instinct
        for what actually needs to exist — not just a contractor&apos;s checklist.
      </p>
      <a href="/about" className="snippet-cta">More about me →</a>
    </section>
  );
}
