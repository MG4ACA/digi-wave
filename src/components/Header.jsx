'use client';
import Image from 'next/image';
import { Button } from 'primereact/button';
import './styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <Image src="/images/logo-blue.png" alt="DigiWave Logo" width={180} height={60} />
        </div>

        <nav className="nav-menu">
          <a href="#home" className="nav-link active">
            Home
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#services" className="nav-link">
            Our Services
          </a>
          <a href="#advantage" className="nav-link">
            Our Advantage
          </a>
          <a href="#work" className="nav-link">
            Our Work
          </a>
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button icon="pi pi-bars" className="mobile-menu-btn" aria-label="Menu" />
      </div>
    </header>
  );
}
