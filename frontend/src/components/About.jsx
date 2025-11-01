import React from 'react';
import { GraduationCap, TrendingUp, BookOpen, FileText, Briefcase, Target } from 'lucide-react';
import { Card } from './ui/card';
import '../styles/about.css';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap size={28} />,
      title: "Institution",
      value: "Indian Institute of Technology, Jodhpur"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Academic Excellence",
      value: "7.91 CGPA | 96.8% (School Topper)"
    },
    {
      icon: <BookOpen size={28} />,
      title: "Research Focus",
      value: "Hardware Acceleration, VLSI, Embedded ML"
    },
    {
      icon: <FileText size={28} />,
      title: "Publications",
      value: "1 Paper Submitted (HiPC 2025)"
    },
    {
      icon: <Briefcase size={28} />,
      title: "Industry Experience",
      value: "ISRO, Vishv Inc."
    },
    {
      icon: <Target size={28} />,
      title: "Specialization",
      value: "Analog/Digital ASIC Design, FPGA, RISC-V"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="biography">
              <p>
                I am an Electrical Engineering student at the prestigious <strong>Indian Institute of Technology, Jodhpur</strong>, with a distinguished academic record (CGPA: 7.91/10) and a passion for pushing the boundaries of hardware innovation. My expertise spans the complete spectrum of hardware development—from analog circuit design and ASIC architecture to FPGA implementation and embedded systems optimization.
              </p>
              <p>
                My professional journey includes transformative experiences at the <strong>Indian Space Research Organization (ISRO)</strong>, where I designed mission-critical digital-to-analog converters for interplanetary missions, and <strong>Vishv Inc.</strong>, where I pioneered optimization techniques for large language model inference on resource-constrained RISC-V platforms.
              </p>
              <p>
                I specialize in bridging the gap between theoretical hardware design and practical, high-performance implementations. My work emphasizes precision engineering, rigorous validation methodologies, and innovative problem-solving approaches that deliver measurable results—whether it's achieving <strong>80dB SNR</strong> in DAC designs or attaining <strong>3.4× performance improvements</strong> in parallel computing architectures.
              </p>
              <p className="highlight-text">
                Currently seeking opportunities in semiconductor design, VLSI engineering, and advanced embedded systems development where I can contribute to next-generation hardware solutions.
              </p>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <Card key={index} className="highlight-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-content">
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-value">{item.value}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
