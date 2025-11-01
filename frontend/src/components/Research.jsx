import React from 'react';
import { Card } from './ui/card';
import { FileText, Users, Calendar, Award, Target } from 'lucide-react';
import '../styles/research.css';

const Research = () => {
  const researchInterests = [
    'Hardware Acceleration for Machine Learning',
    'RISC-V Processor Optimization',
    'Mixed-Signal ASIC Design for Space Applications',
    'Low-Power Embedded Systems',
    'High-Performance Computing on Resource-Constrained Platforms'
  ];

  return (
    <section id="research" className="research-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Research Contributions & Publications</h2>
          <div className="section-divider"></div>
        </div>

        <div className="research-content">
          <Card className="publication-card">
            <div className="publication-status">
              <span className="status-badge under-review">Under Review</span>
            </div>
            
            <div className="publication-header">
              <FileText size={32} className="publication-icon" />
              <div>
                <h3 className="publication-title">
                  Optimizing Large Language Model Inference on RISC-V Embedded Platforms: A Comparative Study of Parallel Programming Paradigms
                </h3>
              </div>
            </div>

            <div className="publication-meta">
              <div className="meta-item">
                <Users size={16} />
                <span>Authors: Kaushik Salla, et al.</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>Submitted: 2025</span>
              </div>
            </div>

            <div className="publication-venue">
              <p className="venue-info">
                <strong>Submitted To:</strong> International Workshop on RISC-V for High-Performance Computing (RISCV-HPC)
              </p>
              <p className="conference-info">
                <strong>Conference:</strong> HiPC 2025 (32nd International Conference on High-Performance Computing, Data, and Analytics)
              </p>
            </div>

            <div className="publication-abstract">
              <h4>Abstract Summary</h4>
              <p>
                This paper presents a comprehensive performance analysis of deploying large language models on resource-constrained RISC-V embedded platforms. We evaluate three parallel programming paradigms (OpenMP, MPI, and pthreads) across models of varying complexity, achieving up to 3.4× performance improvement on the LLaMA-2 architecture with 110M parameters.
              </p>
            </div>

            <div className="research-areas">
              <h4>Research Areas</h4>
              <div className="areas-tags">
                {['Edge AI', 'RISC-V Architecture', 'Parallel Computing', 'Performance Optimization', 'Embedded Machine Learning'].map((area, idx) => (
                  <span key={idx} className="area-tag">{area}</span>
                ))}
              </div>
            </div>
          </Card>

          <div className="research-interests">
            <Card className="interests-card">
              <div className="interests-header">
                <Target size={28} />
                <h3>Research Interests</h3>
              </div>
              <ul className="interests-list">
                {researchInterests.map((interest, idx) => (
                  <li key={idx} className="interest-item">
                    <Award size={18} />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
