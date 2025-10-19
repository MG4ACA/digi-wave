import Image from 'next/image';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-bg" />
      <div className="footer-content">
        <div className="footer-col footer-brand pr-6">
          <Image
            src="/images/logo-white.png"
            alt="DigiWave Logo"
            width={180}
            height={60}
            className="footer-logo"
          />
          <div className="footer-desc">
            A Next-Generation PR and Digital Marketing Agency riding the digital wave to transform
            your brand's story.
          </div>
          <div className="footer-socials">
            <span className="footer-dot" />
            <span className="footer-dot" />
          </div>
        </div>
        <div className="footer-col footer-links">
          <div className="footer-title">Quick Links</div>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#advantage">Our Advantage</a>
            </li>
            <li>
              <a href="#work">Our Work</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <div className="footer-title">Contact Info</div>
          <ul>
            <li>
              <span className="pi pi-envelope"></span> digiwavesrilanka@gmail.com
            </li>
            <li>
              <span className="pi pi-phone"></span> +94 77 444 199 00
            </li>
            <li>
              <span className="pi pi-globe"></span> www.digiwave.lk
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
