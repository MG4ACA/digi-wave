'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from 'primereact/button';
import './styles/Header.css';

export default function Header() {
  const pathname = usePathname();

  const getNavLinkClass = (path) => {
    return `nav-link ${pathname === path ? 'active' : ''}`;
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <Image src="/images/logo-blue.png" alt="DigiWave Logo" width={180} height={60} />
        </div>

        <nav className="nav-menu">
          <Link href="/" className={getNavLinkClass('/')}>
            Home
          </Link>
          <Link href="/about" className={getNavLinkClass('/about')}>
            About Us
          </Link>
          <Link href="/services" className={getNavLinkClass('/services')}>
            Our Services
          </Link>
          <Link href="/our-advantage" className={getNavLinkClass('/our-advantage')}>
            Our Advantage
          </Link>
          <Link href="/our-work" className={getNavLinkClass('/our-work')}>
            Our Work
          </Link>
          <Link href="/contact" className={getNavLinkClass('/contact')}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button icon="pi pi-bars" className="mobile-menu-btn" aria-label="Menu" />
      </div>
    </header>
  );
}
