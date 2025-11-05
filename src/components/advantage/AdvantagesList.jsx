'use client';
import Image from 'next/image';
import './styles/AdvantagesList.css';

export default function AdvantagesList() {
  const advantages = [
    {
      id: 1,
      icon: '1',
      color: 'blue',
      title: 'Exclusive Media Access',
      description:
        "We don't just have contacts; we have direct access. As part of the Wickramanayake Holdings ecosystem, we have unparalleled entry to television, radio, and digital platforms—ensuring that your brand's story doesn't just get sent—it gets seen and heard.",
      image: '/images/hero-background-2.jpg',
    },
    {
      id: 2,
      icon: '2',
      color: 'green',
      title: 'Strong Corporate Backbone',
      description:
        "Our foundation under Wickramanayake Holdings (Pvt) Ltd provides a level of stability, resources, and credibility that standalone agencies simply can't match. We bring the reliability and corporate strength to execute large-scale, complex campaigns.",
      image: '/images/project-images-1.jpg',
    },
    {
      id: 3,
      icon: '3',
      color: 'purple',
      title: 'Local Insight, Global Standards',
      description:
        'We understand the nuances of the Sri Lankan market—the written, the languages, the media consumption habits. We blend this deep local insight with international best practices in PR and digital marketing, giving you the best of both worlds.',
      image: '/images/project-images-2.jpg',
    },
    {
      id: 4,
      icon: '4',
      color: 'red',
      title: 'Results-Driven Methodology',
      description:
        'We are obsessed with data. Our X-step "DigiWave Approach" ensures every campaign is strategically planned, expertly executed, and rigorously measured against clear, quantified goals. We don\'t just run campaigns; we deliver outcomes.',
      image: '/images/hero-background-3.jpg',
    },
    {
      id: 5,
      icon: '5',
      color: 'orange',
      title: 'Innovation DNA',
      description:
        'The digital space never stops moving and neither do we. We are constantly exploring new platforms, formats, and creative storytelling techniques. For us, being ahead means being different. We offer cutting-edge strategies that keep your brand in front.',
      image: '/images/hero-background-1.jpg',
    },
  ];

  return (
    <section className="advantages-list-section">
      <div className="advantages-list-header">
        <h3 className="advantages-list-label">Why Partner with DigiWave?</h3>
        <h2 className="advantages-list-title">
          Five compelling reasons that <span className="text-blue">set us apart from the</span>
          <br />
          <span className="text-blue">competition</span>
        </h2>
      </div>

      <div className="advantages-list-container">
        {advantages.map((advantage, index) => (
          <div
            key={advantage.id}
            className={`advantage-card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
          >
            <div className="advantage-content">
              <div className={`advantage-icon-wrapper bg-${advantage.color}`}>
                <span className="advantage-icon">{advantage.icon}</span>
              </div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>

            <div className="advantage-image">
              <Image
                src={advantage.image}
                alt={advantage.title}
                width={500}
                height={350}
                className="advantage-img"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
