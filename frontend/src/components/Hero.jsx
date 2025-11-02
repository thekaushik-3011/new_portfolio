import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import '../styles/hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const rotatingTexts = [
    "Architecting efficient RTL designs",
    "Optimizing ML inference on RISC-V",
    "Designing analog circuits for space applications"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="circuit-pattern"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            KAUSHIK SALLA
          </h1>
          <h2 className="hero-title">Hardware Design Engineer</h2>
          <p className="hero-subtitle">
            VLSI • AI Accelerators • Processor Design • ASIC/FPGA
          </p>
          <div className="rotating-text-container">
            <p className="rotating-text" key={currentText}>
              {rotatingTexts[currentText]}
            </p>
          </div>
          
          <div className="hero-actions">
            <Button
              size="lg"
              className="primary-cta"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="secondary-cta"
              onClick={() => window.open('https://drive.google.com/file/d/1Q3jXw9kWbKIWRIjtBmrCzXU9qjXr_wEM/view?usp=sharing', '_blank')}
            >
              Download Resume
            </Button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/thekaushik-3011" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/kaushik-salla" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sallakaushik@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <ChevronDown size={32} className="bounce" />
      </button>
    </section>
  );
};

export default Hero;
