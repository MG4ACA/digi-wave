'use client';
import { Button } from 'primereact/button';

export default function Services() {
  const services = [
    {
      icon: 'pi pi-desktop',
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, secure, and optimized for performance.',
      features: ['React & Next.js', 'API Development', 'Database Design', 'Cloud Deployment'],
    },
    {
      icon: 'pi pi-mobile',
      title: 'Mobile Applications',
      description:
        'Native and cross-platform mobile apps that provide seamless user experiences across iOS and Android devices.',
      features: [
        'React Native',
        'Progressive Web Apps',
        'App Store Optimization',
        'Push Notifications',
      ],
    },
    {
      icon: 'pi pi-palette',
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive designs that convert visitors into customers. From wireframes to high-fidelity prototypes.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: 'pi pi-cloud',
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and DevOps solutions that grow with your business. AWS, Azure, and Google Cloud expertise.',
      features: [
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Monitoring & Analytics',
        'Security & Compliance',
      ],
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: 'var(--spacing-16)' }}>
          <h2
            className="text-4xl font-bold"
            style={{ marginBottom: 'var(--spacing-4)', color: '#000000' }}
          >
            Our <span style={{ color: '#0046B6' }}>Services</span>
          </h2>
          <p className="text-xl container-sm" style={{ color: '#666666' }}>
            We offer comprehensive digital solutions to help your business thrive in the modern
            digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="p-grid">
          {services.map((service, index) => (
            <div key={index} className="p-col-12 p-lg-6">
              <div
                className="card card-body"
                style={{ height: '100%', marginBottom: 'var(--spacing-6)' }}
              >
                <div className="p-d-flex p-ai-start">
                  <div
                    className="p-d-flex p-ai-center p-jc-center p-flex-shrink-0"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-xl)',
                      background: '#e6f0ff',
                      marginRight: 'var(--spacing-4)',
                    }}
                  >
                    <i className={`${service.icon} text-2xl`} style={{ color: '#0046B6' }}></i>
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3
                      className="text-xl font-semibold"
                      style={{ marginBottom: 'var(--spacing-3)', color: '#000000' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        marginBottom: 'var(--spacing-4)',
                        lineHeight: '1.6',
                        color: '#666666',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--spacing-4)' }}>
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="p-d-flex p-ai-center"
                          style={{ marginBottom: 'var(--spacing-2)' }}
                        >
                          <i
                            className="pi pi-check"
                            style={{
                              marginRight: 'var(--spacing-2)',
                              fontSize: '0.875rem',
                              color: '#0046B6',
                            }}
                          ></i>
                          <span className="text-sm" style={{ color: '#666666' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      label="Learn More"
                      className="p-button-text p-button-sm"
                      icon="pi pi-arrow-right"
                      style={{ color: '#0046B6' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center" style={{ marginTop: 'var(--spacing-16)' }}>
          <div className="card card-body" style={{ background: '#e6f0ff', border: 'none' }}>
            <h3
              className="text-3xl font-bold"
              style={{ marginBottom: 'var(--spacing-4)', color: '#000000' }}
            >
              Ready to Start Your <span style={{ color: '#0046B6' }}>Project</span>?
            </h3>
            <p className="text-lg" style={{ marginBottom: 'var(--spacing-6)', color: '#666666' }}>
              Let&apos;s discuss how we can bring your vision to life with our expert team and
              proven process.
            </p>
            <div
              className="p-d-flex p-flex-column p-sm-flex-row p-jc-center"
              style={{ gap: 'var(--spacing-4)' }}
            >
              <Button
                label="Get Free Consultation"
                className="btn-large"
                icon="pi pi-calendar"
                style={{
                  backgroundColor: '#0046B6',
                  borderColor: '#0046B6',
                  color: '#FFFFFF',
                }}
              />
              <Button
                label="View Portfolio"
                className="btn-large"
                icon="pi pi-external-link"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#0046B6',
                  color: '#0046B6',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
