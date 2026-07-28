"use client";

import { useState } from "react";
import "../../styles/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with Jennifer it was an easy and smooth experience, she is very knowledgeable and focused on learning all new tools.",
      name: "Dario Rjeili",
      role: "Digital Jewelry Week, LOV3D",
    },
    {
      quote:
        "I wanted a website for a long time. Jen was professional, and excellent with technical solutions to solve problems with the design.",
      name: "Yvonne Greaves",
      role: "YogaYV",
    },
    {
      quote: "Very useful!! And she is very professional!!",
      name: "Lucrezia",
      role: "LU Hair Vision",
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
