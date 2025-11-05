'use client';
import { Button } from 'primereact/button';
import './styles/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h3 className="cta-label">Ready to Transform Your Brand?</h3>
        <h2 className="cta-title">
          Join the successful brands <span className="text-blue">partnering with DigiWave.</span>
        </h2>
        <Button label="Start Your Journey Today" className="cta-button" />
      </div>
    </section>
  );
}
