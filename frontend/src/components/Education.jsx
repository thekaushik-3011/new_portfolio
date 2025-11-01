import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import '../styles/education.css';

const Education = () => {
  const coursework = {
    'Hardware Design & Architecture': [
      'Computer Architecture',
      'VLSI Design',
      'Digital Electronics',
      'Embedded Systems Design'
    ],
    'Analog & Signal Processing': [
      'Analog Circuits',
      'Digital Signal Processing',
      'Signals and Systems',
      'Control Systems'
    ],
    'Computer Science & Programming': [
      'Data Structures and Algorithms',
      'Pattern Recognition',
      'Probability & Statistics'
    ]
  };

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Academic Background</h2>
          <div className="section-divider"></div>
        </div>

        <div className="education-content">
          <Card className="education-card primary">
            <div className="education-header">
              <div className="education-icon">
                <GraduationCap size={48} />
              </div>
              <div className="education-title-section">
                <h3 className="institution-name">Indian Institute of Technology, Jodhpur</h3>
                <div className="degree-info">
                  <h4 className="degree">Bachelor of Technology (B.Tech)</h4>
                  <p className="specialization">Electrical Engineering</p>
                </div>
              </div>
            </div>

            <div className="education-details">
              <div className="detail-row">
                <div className="detail-item">
                  <Calendar size={18} />
                  <span>November 2022 – Present (Expected 2026)</span>
                </div>
                <div className="detail-item">
                  <Award size={18} />
                  <span>CGPA: 7.91/10</span>
                </div>
              </div>
              <p className="institution-description">
                One of India's premier technical institutes, known for cutting-edge research and academic excellence in engineering and sciences.
              </p>
            </div>
          </Card>

          <Card className="education-card secondary">
            <div className="education-header">
              <div className="education-icon small">
                <BookOpen size={32} />
              </div>
              <div className="education-title-section">
                <h3 className="institution-name">Kendriya Vidyalaya ONGC Chandkheda</h3>
                <div className="degree-info">
                  <h4 className="degree">Higher Secondary Education</h4>
                </div>
              </div>
            </div>

            <div className="education-details">
              <div className="detail-row">
                <div className="detail-item">
                  <Calendar size={18} />
                  <span>June 2010 – May 2022</span>
                </div>
                <div className="detail-item">
                  <Award size={18} />
                  <span>96.8% (School Topper)</span>
                </div>
              </div>
              <p className="achievement-note">
                Consistently ranked among top performers throughout academic career
              </p>
            </div>
          </Card>
        </div>

        <div className="coursework-section">
          <h3 className="coursework-title">Relevant Coursework</h3>
          <div className="coursework-grid">
            {Object.entries(coursework).map(([category, courses], index) => (
              <Card key={index} className="coursework-card">
                <h4 className="coursework-category">{category}</h4>
                <ul className="courses-list">
                  {courses.map((course, idx) => (
                    <li key={idx} className="course-item">{course}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
