import React from 'react';
import { Card } from './ui/card';
import { Rocket, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import '../styles/experience.css';

const Experience = () => {
  const experiences = [
    {
      organization: 'Indian Space Research Organization (ISRO)',
      position: 'Summer Research Intern',
      duration: 'May 2025 – July 2025',
      location: 'India',
      icon: <Rocket size={32} />,
      project: 'Mission-Critical Analog IP Design for Space Applications',
      achievements: [
        'Architected and designed a high-precision 12-bit segmented current-steering Digital-to-Analog Converter (DAC) as part of a mission-critical IP core for interplanetary and microwave remote sensing missions',
        'Implemented advanced circuit techniques using cascode current mirrors in TowerJazz PDK, achieving exceptional performance metrics: ~80dB SNR at low frequencies and ~60dB near Nyquist frequency',
        'Targeted 500 MSPS operation suitable for high-speed data acquisition in Successive Approximation Register (SAR) converters',
        'Conducted comprehensive validation through Cadence Virtuoso simulations including Monte Carlo analysis, PVT corner analysis, and temperature sweep simulations (-5°C, 25°C, 65°C)',
        'Developed robust testbenches using Verilog-A for mixed-signal verification',
        'Designed for reliability and performance in harsh space environments with stringent radiation tolerance requirements'
      ],
      skills: ['Cadence Virtuoso', 'Analog Circuit Design', 'DAC Architectures', 'Verilog-A', 'Mixed-Signal ASIC Design', 'IC Layout', 'IP Core Development'],
      impact: "Contributed to India's space exploration capabilities through precision analog design"
    },
    {
      organization: 'Vishv Inc.',
      position: 'Research Intern',
      duration: 'May 2025 – August 2025',
      location: 'Remote',
      icon: <Building2 size={32} />,
      project: 'Optimizing Large Language Model Inference on RISC-V Embedded Platforms',
      achievements: [
        'Pioneered optimization strategies for deploying Large Language Models (LLMs) on resource-constrained quad-core RISC-V embedded platforms',
        'Conducted comprehensive performance benchmarking across three parallel programming paradigms: OpenMP, MPI, and POSIX threads',
        'Evaluated performance across models of varying complexity (3-layer, 5-layer, 9-layer networks) culminating in LLaMA-2 architecture (110M parameters)',
        'Achieved significant performance improvements: 3× speedup using OpenMP optimization and 3.4× speedup using MPI parallelization on large-scale models',
        'Reached ~7 tokens/second throughput on embedded hardware',
        'Performed detailed compiler analysis (GCC vs. Clang) to identify optimal compilation strategies',
        'Investigated architectural bottlenecks including cache coherency issues and memory hierarchy limitations',
        'Authored research paper submitted to International Workshop on RISC-V for High-Performance Computing (RISCV-HPC) at HiPC 2025'
      ],
      skills: ['RISC-V Architecture', 'LLM Inference Optimization', 'Parallel Programming (OpenMP, MPI, pthreads)', 'Performance Profiling', 'Compiler Optimization', 'Edge AI', 'Research Methodology'],
      impact: 'Advanced the state-of-the-art in edge AI deployment on open-source processor architectures'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <Card className="experience-card">
                <div className="experience-header">
                  <div className="experience-icon">{exp.icon}</div>
                  <div className="experience-title-section">
                    <h3 className="experience-organization">{exp.organization}</h3>
                    <h4 className="experience-position">{exp.position}</h4>
                    <div className="experience-meta">
                      <span className="meta-item">
                        <Calendar size={16} />
                        {exp.duration}
                      </span>
                      <span className="meta-item">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  <div className="project-overview">
                    <h5 className="project-title">Project Overview</h5>
                    <p className="project-description">{exp.project}</p>
                  </div>

                  <div className="achievements-section">
                    <h5 className="achievements-title">Key Contributions & Achievements</h5>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <CheckCircle2 size={18} className="check-icon" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="skills-acquired">
                    <h5 className="skills-title">Technical Skills Acquired</h5>
                    <div className="skills-tags">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="impact-section">
                    <p className="impact-text"><strong>Impact:</strong> {exp.impact}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
