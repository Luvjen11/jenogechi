import "../../styles/ContentPreview.css";

export default function ContentPreview() {
  return (
    <section className="content-preview">
      <p className="cp-label">BUILDING IN PUBLIC</p>
      <h2 className="cp-title">Content & ideas</h2>
      <p className="cp-text">
        YouTube, startup journey notes, and updates on projects like SelfSaga.
      </p>
      <a href="/content" className="cp-cta">Follow the journey →</a>
    </section>
  );
}
