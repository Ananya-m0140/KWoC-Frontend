import "../styles/TestimonialCard.css";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageLink: string;
  blogLink: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, quote, imageLink, blogLink } = props.testimonial;

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          <img src={imageLink} alt={name} />
        </div>
        <div className="text-left">
          <h6 className="testimonial-name">{name}</h6>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
      <div className="testimonial-quote-container">
        <p className="testimonial-quote">
          <span className="testimonial-quote-symbol">"</span>
          <span>{quote}</span>
          <span className="testimonial-quote-symbol">"</span>
        </p>
      </div>
      <a href={blogLink} target="_blank" rel="noopener noreferrer">
        <div className="read-blog-button">
          <p>Read Full Blog</p>
        </div>
      </a>
    </div>
  );
}
