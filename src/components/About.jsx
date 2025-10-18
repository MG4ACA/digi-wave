'use client';
import Image from 'next/image';

export default function About() {
  const services = [
    {
      icon: 'pi pi-palette',
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive designs that convert visitors into customers. We create pixel-perfect interfaces from your Figma designs.',
    },
    {
      icon: 'pi pi-code',
      title: 'Development',
      description:
        'Modern, scalable applications built with the latest technologies. React, Next.js, Node.js, and cloud-native architectures.',
    },
    {
      icon: 'pi pi-mobile',
      title: 'Mobile-First',
      description:
        'Responsive designs that work perfectly on all devices. Progressive web apps that feel native on mobile.',
    },
    {
      icon: 'pi pi-cloud',
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment strategies. AWS, Azure, and Google Cloud expertise.',
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Performance',
      description:
        'Lightning-fast applications optimized for speed and SEO. Core Web Vitals optimization and best practices.',
    },
    {
      icon: 'pi pi-shield',
      title: 'Security',
      description:
        'Enterprise-grade security and compliance. GDPR, SOC2, and industry-standard security implementations.',
    },
  ];

  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2
            className="text-4xl font-bold"
            style={{ marginBottom: 'var(--spacing-4)', color: '#000000' }}
          >
            Why Choose <span style={{ color: '#0046B6' }}>Digi Wave</span>?
          </h2>
          <p className="text-xl container-sm" style={{ color: '#666666' }}>
            We are a passionate team of designers and developers focused on delivering exceptional
            digital experiences that drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="p-grid">
          {services.map((service, index) => (
            <div key={index} className="p-col-12 p-md-6 p-lg-4">
              <div className="card card-body text-center" style={{ height: '100%' }}>
                <div
                  className="p-d-inline-flex p-ai-center p-jc-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-full)',
                    background: '#e6f0ff',
                    margin: '0 auto var(--spacing-4) auto',
                  }}
                >
                  <i className={`${service.icon} text-2xl`} style={{ color: '#0046B6' }}></i>
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ marginBottom: 'var(--spacing-3)', color: '#000000' }}
                >
                  {service.title}
                </h3>
                <p style={{ lineHeight: '1.6', color: '#666666' }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="section-sm">
          <div className="p-grid p-jc-center">
            <div className="p-col-12 p-md-8">
              <div className="card card-body">
                <div className="p-grid text-center">
                  <div className="p-col-12 p-sm-3">
                    <div className="text-4xl font-bold" style={{ color: '#0046B6' }}>
                      50+
                    </div>
                    <div style={{ color: '#666666' }}>Projects Completed</div>
                  </div>
                  <div className="p-col-12 p-sm-3">
                    <div className="text-4xl font-bold" style={{ color: '#0046B6' }}>
                      5+
                    </div>
                    <div style={{ color: '#666666' }}>Years Experience</div>
                  </div>
                  <div className="p-col-12 p-sm-3">
                    <div className="text-4xl font-bold" style={{ color: '#0046B6' }}>
                      30+
                    </div>
                    <div style={{ color: '#666666' }}>Happy Clients</div>
                  </div>
                  <div className="p-col-12 p-sm-3">
                    <div className="text-4xl font-bold" style={{ color: '#0046B6' }}>
                      100%
                    </div>
                    <div style={{ color: '#666666' }}>Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="section-sm">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-12)' }}>
            <h3
              className="text-3xl font-bold"
              style={{ marginBottom: 'var(--spacing-4)', color: '#000000' }}
            >
              Meet Our <span style={{ color: '#0046B6' }}>Team</span>
            </h3>
            <p style={{ color: '#666666' }}>
              Passionate professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="p-grid">
            <div className="p-col-12 p-md-6 p-lg-3">
              <div className="card card-body text-center">
                <div
                  style={{
                    position: 'relative',
                    width: '120px',
                    height: '120px',
                    margin: '0 auto var(--spacing-4) auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/images/team-member-images.jpg"
                    alt="Team Member"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4
                  className="font-semibold"
                  style={{ color: '#000000', marginBottom: 'var(--spacing-2)' }}
                >
                  Sarah Johnson
                </h4>
                <p className="text-sm" style={{ color: '#0046B6' }}>
                  Lead Designer
                </p>
              </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-3">
              <div className="card card-body text-center">
                <div
                  style={{
                    position: 'relative',
                    width: '120px',
                    height: '120px',
                    margin: '0 auto var(--spacing-4) auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/images/team-member-images (1).jpg"
                    alt="Team Member"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4
                  className="font-semibold"
                  style={{ color: '#000000', marginBottom: 'var(--spacing-2)' }}
                >
                  Mike Chen
                </h4>
                <p className="text-sm" style={{ color: '#0046B6' }}>
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-3">
              <div className="card card-body text-center">
                <div
                  style={{
                    position: 'relative',
                    width: '120px',
                    height: '120px',
                    margin: '0 auto var(--spacing-4) auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/images/team-member-images (2).jpg"
                    alt="Team Member"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4
                  className="font-semibold"
                  style={{ color: '#000000', marginBottom: 'var(--spacing-2)' }}
                >
                  Emily Rodriguez
                </h4>
                <p className="text-sm" style={{ color: '#0046B6' }}>
                  Project Manager
                </p>
              </div>
            </div>

            <div className="p-col-12 p-md-6 p-lg-3">
              <div className="card card-body text-center">
                <div
                  style={{
                    position: 'relative',
                    width: '120px',
                    height: '120px',
                    margin: '0 auto var(--spacing-4) auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/images/team-member-images (3).jpg"
                    alt="Team Member"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4
                  className="font-semibold"
                  style={{ color: '#000000', marginBottom: 'var(--spacing-2)' }}
                >
                  David Kim
                </h4>
                <p className="text-sm" style={{ color: '#0046B6' }}>
                  DevOps Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
