'use client';
import Image from 'next/image';
import './styles/OurStory.css';

export default function OurStory() {
  return (
    <section className="our-story-section">
      <div className="our-story-container">
        <div className="our-story-left">
          <div className="story-images">
            <div className="story-image-large">
              <Image
                src="/images/project-images-1.jpg"
                alt="DigiWave Event"
                width={400}
                height={300}
                className="story-img"
              />
            </div>
            <div className="story-images-small">
              <Image
                src="/images/project-images-2.jpg"
                alt="DigiWave Team"
                width={180}
                height={140}
                className="story-img"
              />
              <Image
                src="/images/hero-background-2.jpg"
                alt="DigiWave Work"
                width={180}
                height={140}
                className="story-img"
              />
            </div>
          </div>
        </div>

        <div className="our-story-right">
          <h4 className="our-story-label">Our Story</h4>
          <h2 className="our-story-title">
            Tranforming <span className="text-blue">ideas</span>
            <br />
            Into Digital Reality
          </h2>
          <p className="our-story-text">
            DigiWave holds exclusive rights of a collaboration with local brands, radio and
            television networks, ensuring unparalleled media access for our clients. Backed by the
            reputable Wickramanayake Holdings, we combine corporate stability with cutting-edge
            digital and technological approaches to deliver measurable results that drive business
            growth.
          </p>

          <div className="our-story-stats">
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">89%</div>
              <div className="stat-label">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
