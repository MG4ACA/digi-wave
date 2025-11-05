'use client';
import Image from 'next/image';
import './styles/ProjectShowcase.css';

export default function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      icon: '🎪',
      color: 'blue',
      title: 'Galle Food Festival',
      challenge:
        'The client needed to generate significant buzz and footfall for a new food festival in a competitive market with limited initial awareness.',
      solution:
        'We designed a comprehensive multi-channel campaign combining influencer collaborations, geo-targeted social ads, media partnerships, and on-ground activations to create anticipation and drive attendance.',
      results:
        'Record attendance with over 15,000 visitors, extensive media coverage across TV, radio, and online platforms, and overwhelmingly positive sentiment across social channels.',
      image: '/images/project-images-2.jpg',
      tags: ['Event PR', 'Influencer Marketing', 'Media Relations'],
    },
    {
      id: 2,
      icon: '🎵',
      color: 'purple',
      title: 'ELB in Concert',
      challenge:
        'The project aimed to revive interest in classic Sri Lankan music for a younger, digitally-native audience while honoring the legacy of legendary artist.',
      solution:
        'Our strategy focused on nostalgic storytelling through video teasers, behind-the-scenes content, radio spots, influencer endorsements, and targeted Facebook/Instagram campaigns to bridge generational gaps.',
      results:
        'Sold-out concert with 5,000+ attendees, viral social media engagement (2M+ impressions), and positive coverage in leading national publications.',
      image: '/images/project-images-1.jpg',
      tags: ['Digital Marketing', 'Content Creation', 'Event Management'],
    },
    {
      id: 3,
      icon: '⚓',
      color: 'orange',
      title: 'Strong Navy Campaign',
      challenge:
        "Raising awareness and appreciation for the Sri Lankan Navy's contributions while encouraging public support and recruitment interest.",
      solution:
        'We crafted a patriotic narrative through documentary-style videos, testimonials from naval personnel, social media storytelling, and strategic media placements to highlight their service and sacrifices.',
      results:
        'Significant increase in public engagement, enhanced brand perception for the Navy, and a measurable uptick in recruitment inquiries.',
      image: '/images/hero-background-1.jpg',
      tags: ['Public Relations', 'Video Production', 'Media Outreach'],
    },
    {
      id: 4,
      icon: '🎭',
      color: 'green',
      title: 'Monik Legacy 24 - "We Thrive Together"',
      challenge:
        'The challenge was to position a cultural legacy event as a contemporary, must-attend experience while preserving its traditional essence and attracting diverse audiences.',
      solution:
        'We combined traditional PR with modern digital tactics—media partnerships, influencer storytelling, dynamic visual content, countdown campaigns, and interactive social engagement to build momentum.',
      results:
        'Successful event turnout exceeding expectations, widespread media coverage, trending hashtags, and strengthened community engagement around the cultural legacy.',
      image: '/images/hero-background-2.jpg',
      tags: ['Event Management', 'Digital Campaign', 'Brand Positioning'],
    },
  ];

  return (
    <section className="project-showcase-section">
      <div className="project-showcase-header">
        <h3 className="project-showcase-label">Featured Projects</h3>
        <h2 className="project-showcase-title">
          Real campaign. Real results. <span className="text-blue">Real Impact</span>
        </h2>
      </div>

      <div className="project-showcase-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
          >
            <div className="project-content">
              <div className={`project-icon-wrapper bg-${project.color}`}>
                <span className="project-icon">{project.icon}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>

              <div className="project-section">
                <h4 className="project-section-title">The Challenge</h4>
                <p className="project-section-text">{project.challenge}</p>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">Our Solution</h4>
                <p className="project-section-text">{project.solution}</p>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">The Results</h4>
                <p className="project-section-text">{project.results}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="project-img"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
