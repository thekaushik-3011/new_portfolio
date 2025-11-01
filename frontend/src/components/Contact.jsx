import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import '../styles/contact.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    if (formData.message.length < 50) {
      toast({
        title: "Error",
        description: "Message must be at least 50 characters",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you! I'll get back to you within 24-48 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider"></div>
          <h3 className="contact-headline">Open to Opportunities in Hardware Design, VLSI, and Embedded Systems</h3>
          <p className="contact-subheadline">
            I'm actively seeking internships, full-time positions, and research collaborations where I can contribute to cutting-edge hardware innovations.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <Card className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject/Topic *</label>
                  <Select value={formData.subject} onValueChange={handleSubjectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="job">Job Opportunity</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message (minimum 50 characters)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                  <span className="char-count">{formData.message.length} characters</span>
                </div>

                <Button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          <div className="contact-info-section">
            <Card className="contact-info-card">
              <h3 className="info-title">Direct Contact</h3>
              
              <div className="contact-details">
                <a href="mailto:sallakaushik@gmail.com" className="contact-item">
                  <Mail size={24} />
                  <div>
                    <span className="label">Email</span>
                    <span className="value">sallakaushik@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+918780898610" className="contact-item">
                  <Phone size={24} />
                  <div>
                    <span className="label">Phone</span>
                    <span className="value">+91-8780898610</span>
                  </div>
                </a>

                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <span className="label">Location</span>
                    <span className="value">IIT Jodhpur, Rajasthan, India</span>
                  </div>
                </div>
              </div>

              <div className="social-links-section">
                <h4 className="social-title">Connect With Me</h4>
                <div className="social-links">
                  <a href="https://linkedin.com/in/kaushik-salla" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Linkedin size={24} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/thekaushik-3011" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Github size={24} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <Button className="resume-download-btn" onClick={() => alert('Resume download')}>
                <Download size={18} />
                Download Complete Resume
              </Button>

              <div className="availability-section">
                <div className="availability-badge">
                  <span className="status-indicator"></span>
                  Available for Opportunities
                </div>
                <p className="response-time">Typical response time: 24-48 hours</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
