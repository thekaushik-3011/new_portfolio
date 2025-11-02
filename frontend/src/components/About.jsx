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
      value: "7.91 CGPA"
    },
    {
      icon: <BookOpen size={28} />,
      title: "Research Focus",
      value: "Hardware Acceleration, VLSI, RISC-V, Embedded ML"
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
                I'm an Electrical Engineering student at IIT Jodhpur with a deep passion for VLSI design, custom processor architectures, and high-performance computing. My interests lie in exploring how hardware and artificial intelligence converge to build faster, smarter, and more efficient systems.
              </p>
              <p>
                I'm particularly passionate about RISC-V–based architectures, AI accelerators, and mixed-signal ASICs, focusing on how thoughtful design choices at the hardware level can unlock breakthroughs in speed, power efficiency, and security. With hands-on experience in RTL design, FPGA prototyping, and hardware verification, I aim to turn complex computational challenges into practical, silicon-ready solutions for next-generation computing.
              </p>
              <p>
                My professional journey includes transformative experiences at the <strong>Indian Space Research Organization (ISRO)</strong>, where I designed mission-critical digital-to-analog converters for interplanetary missions, and <strong>Vishv Inc.</strong>, where I pioneered optimization techniques for large language model inference on resource-constrained RISC-V platforms.
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
