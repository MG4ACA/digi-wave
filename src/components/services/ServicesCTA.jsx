'use client';
import { Button } from 'primereact/button';
import './styles/ServicesCTA.css';

export default function ServicesCTA() {
  return (
    <section className="services-cta-section">
      <div className="services-cta-container">
        <h3 className="services-cta-label">Ready to Ride the Digital Wave?</h3>
        <h2 className="services-cta-title">
          Let&apos;s build a campaign that drives{' '}
          <span className="text-blue">your vision forward.</span>
        </h2>
        <Button label="Get Your Free Consultation" className="services-cta-button" />
      </div>
    </section>
  );
}
