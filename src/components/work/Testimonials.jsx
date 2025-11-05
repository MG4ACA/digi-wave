'use client';
import './styles/Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Tech Solutions Inc.',
      quote:
        'DigiWave transformed our brand presence. Their strategic approach and media connections delivered results beyond our expectations.',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'Innovation Labs',
      quote:
        "Working with DigiWave was a game-changer. Their team's creativity and professionalism helped us reach audiences we never thought possible.",
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Brand Manager',
      company: 'Global Ventures',
      quote:
        "The ROI we achieved through DigiWave's campaigns exceeded all projections. They truly understand the digital landscape.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-icon">💬</div>
              <p className="testimonial-quote">&quot;{testimonial.quote}&quot;</p>
              <div className="testimonial-author">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
                <p className="testimonial-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
