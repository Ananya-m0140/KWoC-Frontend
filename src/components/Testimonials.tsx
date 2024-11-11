import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../data/testimonials.json";
import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <div className={`testimonials-container testimonials-container-md`}>
      <section className="testimonials-header">
        <h1 className="testimonials-title testimonials-title-sm">
          Testimonials
        </h1>
        <p className="testimonials-subtitle">What past participants say</p>
      </section>
      <div
        className={`testimonials-grid testimonials-grid-sm testimonials-grid-lg`}
      >
        <div className="testimonials-column">
          {testimonialsData.testimonials.map(
            (testimonial, index) =>
              index % 3 === 1 && (
                <TestimonialCard key={index} testimonial={testimonial} />
              )
          )}
        </div>
        <div className="testimonials-column">
          {testimonialsData.testimonials.map(
            (testimonial, index) =>
              index % 3 === 0 && (
                <TestimonialCard key={index} testimonial={testimonial} />
              )
          )}
        </div>
        <div className="testimonials-column">
          {testimonialsData.testimonials.map(
            (testimonial, index) =>
              index % 3 === 2 && (
                <TestimonialCard key={index} testimonial={testimonial} />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
