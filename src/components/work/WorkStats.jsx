'use client';
import './styles/WorkStats.css';

export default function WorkStats() {
  const stats = [
    {
      number: '50+',
      label: 'Successful Campaigns',
    },
    {
      number: '100+',
      label: 'Media Placements',
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
    },
    {
      number: '24/7',
      label: 'Crisis Support',
    },
  ];

  return (
    <section className="work-stats-section">
      <div className="work-stats-container">
        <h3 className="work-stats-label">Our Track Record</h3>
        <h2 className="work-stats-title">Numbers that speak to our success</h2>

        <div className="work-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="work-stat-item">
              <div className="work-stat-number">{stat.number}</div>
              <div className="work-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
