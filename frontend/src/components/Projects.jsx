import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import '../styles/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Custom Bootloader for ARM Cortex-M4',
      timeline: 'February 2025 – March 2025',
      category: 'Embedded Systems',
      tagline: 'Intelligent firmware management system with integrated machine learning capabilities',
      description: 'Designed and implemented a sophisticated bootloader architecture for the STM32 Discovery Board (ARM Cortex-M4), featuring advanced system initialization, memory management, and application loading capabilities.',
      achievements: [
        'Developed modular, application-independent bootloader architecture ensuring reusability across diverse embedded applications',
        'Integrated complete MNIST handwritten digit recognition system, achieving 95% classification accuracy',
        'Optimized memory utilization, efficiently managing 64 KB flash memory',
        'Implemented robust error handling, checksum verification, and secure boot mechanisms',
        'Enabled field-programmable firmware updates without specialized programming hardware'
      ],
      technologies: ['ARM Cortex-M4', 'STM32', 'Embedded C', 'Bootloader Design', 'Memory Management', 'Machine Learning', 'UART Protocol'],
      outcomes: 'Reduced development iteration time by 40% through efficient firmware update mechanism',
      githubLink: '#',
      demoLink: '#'
    },
    {
      title: 'FPGA-Based Multifunctional Digital Clock System',
      timeline: 'March 2024 – April 2024',
      category: 'FPGA Design',
      tagline: 'High-precision real-time clock system with advanced timing functionalities',
      description: 'Architected and implemented a comprehensive real-time clock system on FPGA, featuring alarm, countdown timer, and stopwatch functionalities with emphasis on modularity and power efficiency.',
      achievements: [
        'Designed complete digital system using Verilog HDL, operating at 50 MHz clock frequency with precise timekeeping algorithms',
        'Achieved exceptional reliability validated through continuous 72-hour stress testing without timing drift',
        'Implemented sophisticated user interface with 4-digit seven-segment LED multiplexing and debounced button inputs',
        'Reduced input latency to under 10 milliseconds through optimized finite state machine (FSM) design',
        'Developed modular, hierarchical architecture enabling seamless integration with larger FPGA-based systems'
      ],
      technologies: ['Verilog HDL', 'FPGA Design', 'RTL Design', 'Finite State Machines', 'Digital Logic', 'Seven-Segment Display', 'Timing Analysis'],
      outcomes: 'Demonstrated proficiency in complete FPGA design flow from specification to implementation',
      githubLink: '#',
      demoLink: '#'
    }
  ];

  const categories = ['all', 'Embedded Systems', 'FPGA Design', 'VLSI', 'Machine Learning', 'Software'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div className="project-filters">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? 'default' : 'outline'}
              className="filter-btn"
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </Button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="project-thumbnail">
                <div className="thumbnail-placeholder">
                  <div className="circuit-graphic"></div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-meta">
                    <span className="category-badge">
                      <Tag size={14} />
                      {project.category}
                    </span>
                    <span className="timeline">
                      <Calendar size={14} />
                      {project.timeline}
                    </span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-achievements">
                  <h4 className="achievements-subtitle">Key Achievements</h4>
                  <ul className="achievements-list">
                    {project.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.slice(0, 6).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-outcomes">
                  <p className="outcomes-text"><strong>Impact:</strong> {project.outcomes}</p>
                </div>

                <div className="project-actions">
                  <Button variant="outline" size="sm" className="action-btn">
                    <Github size={16} />
                    Repository
                  </Button>
                  <Button variant="outline" size="sm" className="action-btn">
                    <ExternalLink size={16} />
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          <Card className="project-card coming-soon">
            <div className="coming-soon-content">
              <div className="coming-soon-icon">+</div>
              <h3>More Projects Coming Soon</h3>
              <p>VLSI Design & ASIC Implementation</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
