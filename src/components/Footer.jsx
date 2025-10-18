'use client';
import { Button } from 'primereact/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#000000', color: 'white' }}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="section-sm">
          <div className="p-grid">
            {/* Company Info */}
            <div className="p-col-12 p-md-6 p-lg-4">
              <div className="text-2xl font-bold" style={{ marginBottom: 'var(--spacing-4)' }}>
                Digi Wave
              </div>
              <p style={{ marginBottom: 'var(--spacing-6)', opacity: 0.8, lineHeight: '1.6' }}>
                Creating beautiful digital experiences that drive business growth. We turn your
                ideas into powerful web applications.
              </p>

              {/* Social Links */}
              <div className="p-d-flex" style={{ gap: 'var(--spacing-3)' }}>
                <Button
                  icon="pi pi-twitter"
                  className="p-button-rounded p-button-text"
                  style={{ color: 'white' }}
                  aria-label="Twitter"
                />
                <Button
                  icon="pi pi-linkedin"
                  className="p-button-rounded p-button-text"
                  style={{ color: 'white' }}
                  aria-label="LinkedIn"
                />
                <Button
                  icon="pi pi-github"
                  className="p-button-rounded p-button-text"
                  style={{ color: 'white' }}
                  aria-label="GitHub"
                />
                <Button
                  icon="pi pi-instagram"
                  className="p-button-rounded p-button-text"
                  style={{ color: 'white' }}
                  aria-label="Instagram"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-col-12 p-md-6 p-lg-2">
              <h4 style={{ marginBottom: 'var(--spacing-4)', color: 'white' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--spacing-3)' }}>
                  <a
                    href="#home"
                    style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                  >
                    Home
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--spacing-3)' }}>
                  <a
                    href="#about"
                    style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                  >
                    About
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--spacing-3)' }}>
                  <a
                    href="#services"
                    style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                  >
                    Services
                  </a>
                </li>
                <li style={{ marginBottom: 'var(--spacing-3)' }}>
                  <a
                    href="#contact"
                    style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="p-col-12 p-md-6 p-lg-3">
              <h4 style={{ marginBottom: 'var(--spacing-4)', color: 'white' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--spacing-3)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Web Development</span>
                </li>
                <li style={{ marginBottom: 'var(--spacing-3)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Mobile Apps</span>
                </li>
                <li style={{ marginBottom: 'var(--spacing-3)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>UI/UX Design</span>
                </li>
                <li style={{ marginBottom: 'var(--spacing-3)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Cloud Solutions</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="p-col-12 p-md-6 p-lg-3">
              <h4 style={{ marginBottom: 'var(--spacing-4)', color: 'white' }}>Get in Touch</h4>
              <div style={{ marginBottom: 'var(--spacing-3)' }}>
                <div className="p-d-flex p-ai-center">
                  <i
                    className="pi pi-envelope"
                    style={{ marginRight: 'var(--spacing-2)', opacity: 0.8 }}
                  ></i>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>hello@digiwave.com</span>
                </div>
              </div>
              <div style={{ marginBottom: 'var(--spacing-3)' }}>
                <div className="p-d-flex p-ai-center">
                  <i
                    className="pi pi-phone"
                    style={{ marginRight: 'var(--spacing-2)', opacity: 0.8 }}
                  ></i>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>+1 (555) 123-4567</span>
                </div>
              </div>
              <div>
                <div className="p-d-flex p-ai-center">
                  <i
                    className="pi pi-map-marker"
                    style={{ marginRight: 'var(--spacing-2)', opacity: 0.8 }}
                  ></i>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: 'var(--spacing-6) 0',
          }}
        >
          <div className="p-grid p-ai-center">
            <div className="p-col-12 p-md-6">
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>
                © {currentYear} Digi Wave. All rights reserved.
              </div>
            </div>
            <div className="p-col-12 p-md-6">
              <div className="p-d-flex p-jc-start p-md-jc-end" style={{ gap: 'var(--spacing-6)' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                  Privacy Policy
                </a>
                <a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
