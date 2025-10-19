'use client';
import Image from 'next/image';
import './styles/BrandLogos.css';

const logos = [
  { src: '/images/brand-logo-1.png', alt: 'Brand 1' },
  { src: '/images/brand-logo-2.png', alt: 'Brand 2' },
  { src: '/images/brand-logo-3.png', alt: 'Brand 3' },
  { src: '/images/brand-logo-4.png', alt: 'Brand 4' },
  { src: '/images/brand-logo-5.png', alt: 'Brand 5' },
];

export default function BrandLogos() {
  return (
    <section className="brand-logos-section">
      <div className="brand-logos-bg">
        <div className="brand-logos-row">
          {logos.map((logo, idx) => (
            <div className="brand-logo-item" key={idx}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="brand-logo-img"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
