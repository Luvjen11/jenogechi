import "../../styles/HowIWork.css";

const steps = [
  { num: "1", title: "Discovery", text: "We talk about your idea and goals." },
  { num: "2", title: "Structure", text: "I design the layout and architecture." },
  { num: "3", title: "Build", text: "Development begins with regular updates." },
  { num: "4", title: "Launch", text: "We test, refine, and publish your project." },
];

export default function HowIWork() {
  return (
    <section className="how-i-work">
      <p className="how-label">PROCESS</p>
      <h2 className="how-title">How the process works</h2>
      <div className="how-steps">
        {steps.map((step) => (
          <article className="how-step" key={step.num}>
            <span className="how-num" aria-hidden="true">{step.num}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
