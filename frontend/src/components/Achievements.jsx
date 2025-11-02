import React from 'react';
import { Card } from './ui/card';
import { Trophy, Award, FileText, Rocket, FlaskConical } from 'lucide-react';
import '../styles/achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: <FileText size={32} />,
      category: 'Research',
      title: 'Research Publication',
      description: 'HiPC 2025',
      details: ['Paper submitted to prestigious international conference', 'Research progress at Vishv Inc. converted to publication on RISC-V optimization and edge AI deployment'],
      color: 'purple'
    },
    {
      icon: <Award size={32} />,
      category: 'Academic Achievement',
      title: 'IIT Jodhpur Merit',
      description: 'Selected through JEE Advanced',
      details: ['One of India\'s most competitive entrance examinations', 'Pursuing B.Tech in Electrical Engineering with strong academic standing (7.91 CGPA)'],
      color: 'blue'
    },
    {
      icon: <Rocket size={32} />,
      category: 'Professional Experience',
      title: 'ISRO Summer Intern',
      description: 'Indian Space Research Organization',
      details: ['Selected for competitive internship program at India\'s premier space agency', 'Designed complete analog IP from scratch - a valuable contribution to their IP design library for space applications'],
      color: 'orange'
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="section-divider"></div>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <Card key={index} className={`achievement-card ${achievement.color}`}>
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <span className="achievement-category">{achievement.category}</span>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <ul className="achievement-details">
                  {achievement.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
