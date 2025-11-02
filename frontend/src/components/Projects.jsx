import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import '../styles/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Scalable Hardware Acceleration for Transformers: Multi-FPGA Design for MiniLM',
      timeline: 'September 2025 – Ongoing',
      category: 'VLSI',
      tagline: 'Multi-FPGA hardware accelerator for high-performance Transformer inference',
      description: 'Ongoing research project designing a scalable, multi-FPGA hardware accelerator for the MiniLM Transformer model. The architecture features parallel, deeply pipelined processing across multiple FPGAs to dramatically improve performance and energy efficiency for NLP inference over traditional CPU/GPU solutions.',
      achievements: [
        'Successfully developed and applied robust INT8 quantization scheme for MiniLM model, significantly reducing memory footprint',
        'Simplified computational logic by replacing floating-point with integer operations while minimizing accuracy loss',
        'Conducting comprehensive performance profiling across CPU, GPU, and TPU platforms for baseline establishment',
        'Designing custom processing elements (PEs) for matrix multiplication and attention mechanisms',
        'Engineering high-speed, low-latency inter-FPGA communication protocols for distributed parallel workload',
        'Developing efficient on-chip memory hierarchies for optimized data movement'
      ],
      technologies: ['FPGA', 'RTL Design', 'Verilog', 'SystemVerilog', 'Transformers', 'MiniLM', 'INT8 Quantization', 'Hardware Acceleration', 'Parallel Computing', 'Distributed Systems', 'NLP', 'Deep Learning'],
      outcomes: 'Creating next-generation AI accelerator for efficient Transformer inference at scale',
      githubLink: null,
      demoLink: null,
      status: 'in-progress'
    },
    {
      title: 'AI-Driven Logic Synthesis: Reinforcement Learning for Circuit Optimization',
      timeline: 'September 2025 – October 2025',
      category: 'VLSI',
      tagline: 'Autonomous RL agent for VLSI logic synthesis optimization using DQN',
      description: 'Implemented an autonomous Reinforcement Learning agent to solve complex optimization problems in VLSI logic synthesis. Inspired by the DRILLS framework, this project replaces traditional hand-coded synthesis scripts with a learned policy to optimize digital circuits for structural efficiency, specifically targeting node count reduction.',
      achievements: [
        'Successfully automated the full RTL-to-optimized-AIG flow, achieving significant circuit complexity reduction across all benchmarks',
        'Sin circuit: Reduced from 8,469 nodes to 3,427 nodes (5,042 nodes saved - 59.5% reduction)',
        'Square circuit: Reduced from 34,152 nodes to 19,195 nodes (14,957 nodes saved - 43.8% reduction)',
        'Bar circuit: Reduced from 5,142 nodes to 2,319 nodes (2,823 nodes saved - 54.9% reduction)',
        'Adder circuit: Reduced from 2,552 nodes to 1,662 nodes (890 nodes saved - 34.9% reduction)',
        'Learned policy demonstrated high-impact optimizations with node reductions between 35% and 60% across different designs'
      ],
      technologies: ['Python', 'Yosys', 'ABC', 'NetworkX', 'Deep Q-Network (DQN)', 'Reinforcement Learning', 'Logic Synthesis', 'And-Inverter Graph (AIG)', 'RTL', 'VLSI', 'EDA'],
      outcomes: 'Achieved 35-60% circuit complexity reduction through autonomous RL-based optimization',
      githubLink: 'https://github.com/thekaushik-3011/rl_for_design_synthesis',
      demoLink: null
    },
    {
      title: 'SAT-Based Formal Verification: Verilog-to-CNF Converter',
      timeline: 'September 2025 – October 2025',
      category: 'VLSI',
      tagline: 'Complete C++ toolchain for translating Verilog to SAT problems for formal verification',
      description: 'Developed a complete C++ toolchain to bridge the gap between high-level hardware design and mathematical proof systems. The tool parses synthesizable Verilog for combinational circuits and translates it into Boolean Satisfiability (SAT) problems, enabling rigorous formal verification through Tseitin transformation and DIMACS CNF output.',
      achievements: [
        'Built robust Verilog parser handling vector expansion, generate loop unrolling, and complex arithmetic/logic expressions',
        'Implemented automatic gate synthesis converting high-level arithmetic operations into gate-level structures (n-bit ripple-carry adders)',
        'Developed complete Tseitin transformation for all standard gate types (AND, OR, NOT, XOR, MUX) producing valid SAT instances',
        'Successfully validated on multiple complex test cases, each exceeding 100 gates, demonstrating scalability and correctness',
        'Enabled formal verification, bug detection, and test vector generation through standard SAT solver integration'
      ],
      technologies: ['C++', 'Verilog', 'SAT Solving', 'Tseitin Transformation', 'DIMACS CNF', 'Formal Verification', 'Logic Synthesis', 'Recursive Descent Parser', 'Gate-Level Modeling'],
      outcomes: 'Created production-ready formal verification toolchain for combinational circuit validation',
      githubLink: 'https://github.com/thekaushik-3011/verilog2cnf',
      demoLink: null
    },
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
      githubLink: 'https://github.com/thekaushik-3011/handwritten-digits',
      demoLink: null
    },
    {
      title: 'Logisim-Based MIPS Simulator',
      timeline: 'November 2024 – November 2024',
      category: 'FPGA Design',
      tagline: 'Educational MIPS processor simulator with complete instruction set support',
      description: 'Designed a comprehensive MIPS processor simulator in Logisim with ALU, Control Unit, and Register File, implementing R-type, I-type, and J-type instructions for teaching and research purposes.',
      achievements: [
        'Implemented complete MIPS instruction set including R-type, I-type, and J-type instructions',
        'Verified execution of arithmetic, logic, and branch operations through comprehensive testing',
        'Built modular components for extensibility in teaching and research applications',
        'Designed intuitive visual representation of datapath and control signals',
        'Created educational tool for understanding processor architecture fundamentals'
      ],
      technologies: ['Logisim', 'MIPS Architecture', 'Digital Logic Design', 'Computer Architecture', 'ALU Design', 'Control Unit', 'Register File'],
      outcomes: 'Developed comprehensive educational tool for processor architecture understanding',
      githubLink: null,
      demoLink: null
    },
    {
      title: 'Content-Based Music Recommendation System',
      timeline: 'September 2024 – December 2024',
      category: 'Machine Learning',
      tagline: 'Interactive web application for personalized music recommendations using cosine similarity',
      description: 'Designed and deployed a content-based music recommendation system with an interactive Streamlit web application. The system suggests new songs based on the characteristics of user-selected songs using TF-IDF vectorization and cosine similarity for real-time recommendations.',
      achievements: [
        'Built recommendation engine using cosine similarity on high-dimensional feature space',
        'Processed and cleaned raw Kaggle dataset using Pandas for robust data pipeline',
        'Implemented TF-IDF vectorization to convert song metadata (artist, album, genre) into numerical features',
        'Computed and serialized similarity matrix using pickle for efficient real-time querying',
        'Developed interactive Streamlit web application for seamless user experience',
        'Achieved real-time song recommendations with pre-computed similarity scores'
      ],
      technologies: ['Python', 'Streamlit', 'scikit-learn', 'Pandas', 'NumPy', 'TF-IDF', 'Cosine Similarity', 'Pickle', 'Machine Learning', 'Content-Based Filtering'],
      outcomes: 'Created production-ready recommendation system with interactive web interface',
      githubLink: 'https://github.com/rahulrangers/Music-Recommendation-System',
      demoLink: null
    },
    {
      title: 'Voice-Controlled Home Automation System',
      timeline: 'March 2024 – May 2024',
      category: 'Embedded Systems',
      tagline: 'Google Assistant-based IoT automation with real-time control',
      description: 'Built Google Assistant-based automation system with sub-500ms latency using ESP8266/ESP32 and relay modules for appliance control, integrated with MQTT for real-time IoT communication.',
      achievements: [
        'Achieved <500 ms latency for voice command processing and appliance control',
        'Used ESP8266/ESP32 microcontrollers with relay modules for reliable appliance switching',
        'Integrated MQTT protocol for real-time IoT communication and device management',
        'Implemented secure authentication and authorization for smart home control',
        'Developed scalable architecture supporting multiple devices and rooms'
      ],
      technologies: ['ESP8266', 'ESP32', 'Google Assistant', 'MQTT', 'IoT', 'Relay Control', 'Voice Recognition', 'Home Automation'],
      outcomes: 'Created responsive voice-controlled home automation with real-time device management',
      githubLink: 'https://github.com/thekaushik-3011/Home-Automation',
      demoLink: null
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
      githubLink: 'https://github.com/thekaushik-3011/DigitalClock',
      demoLink: null
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
              {project.status === 'in-progress' && (
                <div className="publication-status">
                  <span className="status-badge in-progress">In Progress</span>
                </div>
              )}
              
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

                {project.githubLink && (
                  <div className="project-actions">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="action-btn"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} />
                      Repository
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
