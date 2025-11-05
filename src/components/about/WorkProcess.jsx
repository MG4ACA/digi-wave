'use client';
import './styles/WorkProcess.css';

export default function WorkProcess() {
  const steps = [
    {
      number: '1',
      title: 'Planning',
      description: 'Understanding your goals and crafting a strategy',
    },
    {
      number: '2',
      title: 'Engagement',
      description: 'Building connections across all media channels',
    },
    {
      number: '3',
      title: 'Advocacy',
      description: 'Creating authentic voices for your brand',
    },
    {
      number: '4',
      title: 'Amplification',
      description: 'Maximizing reach and engagement',
    },
    {
      number: '5',
      title: 'Validation',
      description: 'Analyzing results and delivering actionable insights',
    },
  ];

  return (
    <section className="work-process-section">
      <div className="work-process-container">
        <h3 className="process-label">Work Process</h3>
        <h2 className="process-title">Our Proven Work Process</h2>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon-wrapper">
                <div className="step-icon">
                  <span className="step-number">{step.number}</span>
                </div>
              </div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
