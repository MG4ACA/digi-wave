'use client';
import Image from 'next/image';
import './styles/ServicesList.css';

export default function ServicesList() {
  const services = [
    {
      id: 1,
      icon: '📱',
      color: 'cyan',
      title: 'Public Relations & Media Engagement',
      subtitle: 'Position your brand at the forefront of public consciousness',
      description: 'Elevating your story reaches the right audience at the right time.',
      image: '/images/project-images-1.jpg',
      items: [
        { name: 'PR Program for Organizations', price: 'Rs 250,000 +VAT' },
        { name: 'Tailored Packages', price: '' },
        { name: 'Product News Releases', price: 'Rs 25,000 +VAT' },
        { name: 'Audiovisual Engagement', price: '' },
        { name: 'Press Release Service', price: 'Rs 25,000 +VAT' },
        { name: 'Appointment Rs. 50,000', price: '' },
        { name: 'Media Event Coverage', price: '' },
        { name: 'TV Appearance Rs. 50,000', price: '' },
      ],
    },
    {
      id: 2,
      icon: '📊',
      color: 'purple',
      title: 'Digital Marketing & Social Media',
      subtitle: 'Turn followers into loyal customers',
      description:
        'From strategy to execution, we manage every aspect of your digital engagement and conversions. Turn followers into fans and clicks into customers.',
      image: '/images/project-images-2.jpg',
      packages: [
        { name: 'Digital Starter Package', price: 'Rs 30,000' },
        { name: 'SEO Content', price: 'Rs 50,000' },
        { name: 'Standard Package', price: 'Rs 50,000' },
        { name: 'Advanced Package', price: 'Rs 75,000' },
      ],
      campaignPricing: [
        { name: 'LEAD ADS (FB) Campaigns', price: 'Rs 40,000' },
        { name: 'LEAD Linkedin (BASIC)', price: 'Rs 60,000' },
      ],
      features: [
        'Comprehensive Social Media Management & Strategy',
        'Targeted Digital Advertising Campaigns (Social, Search, Display)',
        'Community Management & Growth',
        'Online Reputation Management',
      ],
    },
    {
      id: 3,
      icon: '🚨',
      color: 'red',
      title: 'Crisis Communication',
      subtitle: 'Navigate challenging situations with confidence',
      description:
        "When crisis strikes, we'll help you navigate challenging situations and safeguard your brand's integrity with expert crisis management solutions.",
      image: '/images/hero-background-1.jpg',
      items: [
        { name: 'Crisis Management Retainer', price: 'Rs 200,000 +VAT' },
        { name: 'Strategic Response Planning & Strategy', price: '' },
        { name: 'Real-time Issue Monitoring & Management', price: '' },
        { name: 'Development of Crisis Communication Protocols', price: '' },
        { name: 'Spokesperson Training and Message Control', price: '' },
      ],
    },
    {
      id: 4,
      icon: '🎉',
      color: 'green',
      title: 'Event Management & Brand Activations',
      subtitle: 'Create experiences that resonate',
      description:
        'We design and execute memorable events and activations that forge deep emotional connections with your target audience and amplify brand presence.',
      image: '/images/hero-background-2.jpg',
      items: [
        {
          name: 'Corporate/Product Launches and Brand Experience Design (Rs 300,000 Min BASE Regarding Project)',
          price: '',
        },
        { name: 'End-to-end Event Planning & Execution', price: '' },
        { name: 'On-site Coordination & Logistics', price: '' },
        { name: 'Securing comprehensive Event Media Coverage', price: '' },
        { name: 'Guest & Stakeholder Management', price: '' },
      ],
    },
    {
      id: 5,
      icon: '🎬',
      color: 'orange',
      title: 'Content Creation',
      subtitle: 'Tell your story with content that engages',
      description:
        'Our creative team produces high-quality, multi-format content that resonates with audiences and drives action. From video to social posts, we craft content that converts.',
      image: '/images/hero-background-3.jpg',
      items: [
        { name: 'Professional Video Package', price: 'Rs 50,000 +VAT' },
        { name: 'Professional Video Production & Social Content', price: 'Rs 50,000- Rs 300,000' },
        { name: 'Influencer-Generated Content', price: 'Rs 20,000 >' },
      ],
      features: [
        'Compelling Copywriting for ads, websites, and blogs',
        'Professional Video Production & Editing',
        'Photography & Visual Assets',
        'Engaging Graphic Design & Multimedia Content',
      ],
    },
    {
      id: 6,
      icon: '💼',
      color: 'blue',
      title: 'Investor & Stakeholder Communications',
      subtitle: 'Maintain trust and transparency',
      description:
        'Maintain clear, consistent messaging to keep your investors, partners, and key stakeholders informed, engaged, and confident in your vision.',
      image: '/images/project-images-1.jpg',
      packages: [
        { name: 'Annual Report Writing/Communication', price: 'Rs 350,000 +VAT' },
        { name: 'Shareholder Meeting & Press Release Package', price: 'Rs 75,000' },
      ],
      features: [
        'Development of Annual Reports & Financial Communications',
        'Stakeholder Mapping & Engagement Strategies',
        'Internal Communications Support',
        'ESG documentation, Social, Governance Reporting',
      ],
    },
  ];

  return (
    <section className="services-list-section">
      <div className="services-list-header">
        <h3 className="services-list-label">Our Core Services</h3>
        <h2 className="services-list-title">
          Comprehensive solutions to <span className="text-blue">elevate your brand</span>
          <br />
          <span className="text-blue">and drive results.</span>
        </h2>
      </div>

      <div className="services-list-container">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-detail-card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
          >
            <div className="service-detail-content">
              <div className={`service-detail-header bg-${service.color}`}>
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-detail-title">{service.title}</h3>
              </div>
              <h4 className="service-subtitle">{service.subtitle}</h4>
              <p className="service-description">{service.description}</p>

              {service.packages && (
                <div className="service-packages">
                  <h5 className="packages-title">Packages:</h5>
                  <div className="packages-grid">
                    {service.packages.map((pkg, idx) => (
                      <div key={idx} className="package-item">
                        <span className="package-name">{pkg.name}</span>
                        <span className="package-price">{pkg.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.campaignPricing && (
                <div className="service-campaigns">
                  <h5 className="campaigns-title">Campaign Pricing:</h5>
                  <div className="campaigns-list">
                    {service.campaignPricing.map((campaign, idx) => (
                      <div key={idx} className="campaign-item">
                        <span className="campaign-name">{campaign.name}</span>
                        <span className="campaign-price">{campaign.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.items && (
                <div className="service-items">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="service-item">
                      {item.price ? (
                        <>
                          <span className="item-name">{item.name}</span>
                          <span className="item-price">{item.price}</span>
                        </>
                      ) : (
                        <span className="item-name-full">• {item.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {service.features && (
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="service-detail-image">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={350}
                className="service-img"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
