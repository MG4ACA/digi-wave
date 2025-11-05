'use client';
import Image from 'next/image';
import Link from 'next/link';
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
          <Link href="/" className="nav-link active">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About Us
          </Link>
          <Link href="/services" className="nav-link">
            Our Services
          </Link>
          <Link href="/our-advantage" className="nav-link">
            Our Advantage
          </Link>
          <Link href="/our-work" className="nav-link">
            Our Work
          </Link>
          <Link href="/contact" className="nav-link">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button icon="pi pi-bars" className="mobile-menu-btn" aria-label="Menu" />
      </div>
    </header>
  );
}
