'use client';
import Image from 'next/image';
import { Button } from 'primereact/button';

export default function Hero() {
  return (
    <section id="home" className="hero section-lg p-d-flex p-ai-center">
      <div className="container">
        <div className="p-grid p-nogutter p-ai-center">
          <div className="p-col-12 p-md-6">
            <div className="p-pr-0 p-md-pr-4">
              <h1
                className="text-5xl font-bold"
                style={{ lineHeight: '1.1', marginBottom: 'var(--spacing-6)', color: '#000000' }}
              >
                Build Beautiful
                <span style={{ color: '#0046B6' }}> Digital </span>
                Experiences
              </h1>
              <p
                className="text-xl"
                style={{ marginBottom: 'var(--spacing-8)', lineHeight: '1.7', color: '#666666' }}
              >
                We design and develop modern web applications that scale. Transform your ideas into
                powerful digital solutions with our expert team.
              </p>
              <div
                className="p-d-flex p-flex-column p-sm-flex-row"
                style={{ gap: 'var(--spacing-4)' }}
              >
                <Button
                  label="Get Started"
                  icon="pi pi-arrow-right"
                  className="btn-large"
                  style={{
                    backgroundColor: '#0046B6',
                    borderColor: '#0046B6',
                    color: '#FFFFFF',
                  }}
                />
                <Button
                  label="View Portfolio"
                  className="btn-large"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: '#0046B6',
                    color: '#0046B6',
                  }}
                />
              </div>

              {/* Stats */}
              <div className="p-grid p-mt-6">
                <div className="p-col-4">
                  <div className="text-3xl font-bold" style={{ color: '#0046B6' }}>
                    50+
                  </div>
                  <div className="text-sm" style={{ color: '#666666' }}>
                    Projects
                  </div>
                </div>
                <div className="p-col-4">
                  <div className="text-3xl font-bold" style={{ color: '#0046B6' }}>
                    5+
                  </div>
                  <div className="text-sm" style={{ color: '#666666' }}>
                    Years
                  </div>
                </div>
                <div className="p-col-4">
                  <div className="text-3xl font-bold" style={{ color: '#0046B6' }}>
                    100%
                  </div>
                  <div className="text-sm" style={{ color: '#666666' }}>
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-col-12 p-md-6">
            <div className="p-pl-0 p-md-pl-4 p-mt-4 p-md-mt-0">
              {/* Hero Image/Illustration */}
              <div
                style={{
                  height: '400px',
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <Image
                  src="/images/office_1_d337a6.png"
                  alt="Digital Agency Office"
                  fill
                  style={{ objectFit: 'cover' }}
                />

                {/* Floating Elements */}
                <div
                  className="card p-p-3"
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'white',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  <i className="pi pi-mobile" style={{ color: '#0046B6' }}></i>
                  <span className="text-sm font-medium p-ml-2">Responsive</span>
                </div>

                <div
                  className="card p-p-3"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    background: 'white',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  <i className="pi pi-bolt" style={{ color: '#0046B6' }}></i>
                  <span className="text-sm font-medium p-ml-2">Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
