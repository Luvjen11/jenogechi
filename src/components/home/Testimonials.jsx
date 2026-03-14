"use client";

import { useState } from "react";
import "../../styles/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Jennifer built a beautiful and clean website that perfectly represents my brand.",
      name: "Client Name",
      role: "Founder",
    },
    {
      quote:
        "Working with Jen was a great experience. She understood the vision immediately.",
      name: "Another Client",
      role: "Business Owner",
    },
    {
      quote:
        "She combines design and engineering which makes the final product feel very polished.",
      name: "Startup Founder",
      role: "Tech Founder",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="testimonial-section">
      <p className="testimonial-section-label">WHAT PEOPLE SAY</p>
      <h2 className="testimonial-section-title">Testimonials</h2>
      <div className="testimonial-card">
        <button className="arrow left" onClick={prev} type="button" aria-label="Previous testimonial">
          ←
        </button>

        <div className="testimonial-content">
          <p className="testimonial-text">
            &quot;{testimonial.quote}&quot;
          </p>

          <div className="testimonial-author">
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </div>
        </div>

        <button className="arrow right" onClick={next} type="button" aria-label="Next testimonial">
          →
        </button>
      </div>
    </section>
  );
}
