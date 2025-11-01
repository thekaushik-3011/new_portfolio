import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import '../styles/footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">KAUSHIK SALLA</h3>
            <p className="footer-tagline">Hardware Design Engineer | VLSI | Embedded Systems</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>More</h4>
              <ul>
                <li><a href="#education">Education</a></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <div className="footer-social">
                <a href="https://github.com/thekaushik-3011" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/kaushik-salla" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:sallakaushik@gmail.com" className="footer-social-link">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Kaushik Salla. All rights reserved.
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            className="back-to-top"
            onClick={scrollToTop}
          >
            <ArrowUp size={18} />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
