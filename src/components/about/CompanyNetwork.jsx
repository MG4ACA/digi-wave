'use client';
import Image from 'next/image';
import './styles/CompanyNetwork.css';

export default function CompanyNetwork() {
  return (
    <section className="company-network-section">
      <div className="company-network-container">
        <h3 className="network-subtitle">Wickramanayake Holdings</h3>
        <h2 className="network-title">
          A powerful network driving <span className="text-blue">Digital Transformation</span>
        </h2>

        <div className="wh-logo-container">
          <Image
            src="/images/logo-blue.png"
            alt="Wickramanayake Holdings"
            width={200}
            height={80}
            className="wh-logo"
          />
          <p className="wh-subtitle">Wickramanayake Holdings Pvt (Ltd)</p>
        </div>

        <div className="divisions-grid">
          <div className="division-card division-events">
            <h4 className="division-title">Wickramanayake Events</h4>
            <ul className="division-list">
              <li>Event Organizer</li>
              <li>Audio, Video, Filming</li>
            </ul>
          </div>

          <div className="division-card division-digiwave">
            <h4 className="division-title">DigiWave</h4>
            <ul className="division-list">
              <li>Public Relations</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div className="division-card division-news">
            <h4 className="division-title">News & Media</h4>
            <ul className="division-list">
              <li>News M</li>
              <li>The Life Carear</li>
              <li>AIL</li>
              <li>Gossiplk</li>
              <li>Expohens</li>
              <li>Daily Three</li>
              <li>Newsvle</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
