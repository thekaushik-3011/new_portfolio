import React from 'react';
import { Card } from './ui/card';
import { Telescope, Palette, Cpu, Users } from 'lucide-react';
import '../styles/leadership.css';

const Leadership = () => {
  const roles = [
    {
      icon: <Telescope size={32} />,
      position: 'Coordinator',
      organization: 'Nexus - Astronomy and Astrophysics Club',
      institution: 'Indian Institute of Technology, Jodhpur',
      description: 'Leading a team of astronomy enthusiasts in organizing stargazing sessions, workshops, and astrophysics lectures. Coordinating outreach programs to promote space science awareness among students.',
      responsibilities: [
        'Leading astronomy club operations and event planning',
        'Organizing stargazing sessions and workshops',
        'Managing inter-college collaborations',
        'Promoting space science awareness'
      ]
    },
    {
      icon: <Palette size={32} />,
      position: 'Core Team Member',
      organization: 'Ateliers - Art Society',
      institution: 'Indian Institute of Technology, Jodhpur',
      description: 'Contributing to cultural and artistic initiatives at IIT Jodhpur. Organizing art exhibitions, workshops, and creative events.',
      responsibilities: [
        'Organizing art exhibitions and workshops',
        'Contributing to creative event planning',
        'Bridging technical education and creative expression',
        'Managing cultural initiatives'
      ]
    },
    {
      icon: <Cpu size={32} />,
      position: 'Support Team Member',
      organization: 'ISRO IRoC-24 Rover Project',
      institution: 'Indian Institute of Technology, Jodhpur',
      description: 'Supporting the development of autonomous rover for ISRO\'s Inter-IIT Rover Challenge. Contributing technical expertise in embedded systems and control algorithms.',
      responsibilities: [
        'Supporting autonomous rover development',
        'Contributing embedded systems expertise',
        'Collaborating on complex engineering challenges',
        'Working with multidisciplinary teams'
      ]
    }
  ];

  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Leadership & Beyond Engineering</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Beyond technical excellence, I believe in holistic development through leadership, creative expression, and collaborative innovation.
          </p>
        </div>

        <div className="leadership-grid">
          {roles.map((role, index) => (
            <Card key={index} className="leadership-card">
              <div className="leadership-header">
                <div className="leadership-icon">{role.icon}</div>
                <div className="leadership-title-section">
                  <h3 className="leadership-position">{role.position}</h3>
                  <h4 className="leadership-organization">{role.organization}</h4>
                  <p className="leadership-institution">{role.institution}</p>
                </div>
              </div>

              <p className="leadership-description">{role.description}</p>

              <div className="responsibilities-section">
                <h5 className="responsibilities-title">Key Responsibilities</h5>
                <ul className="responsibilities-list">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="skills-demonstrated">
          <Card className="skills-card">
            <div className="skills-header">
              <Users size={28} />
              <h3>Skills Demonstrated</h3>
            </div>
            <div className="skills-tags">
              {['Leadership', 'Team Collaboration', 'Event Management', 'Cross-functional Communication', 'Project Coordination'].map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
