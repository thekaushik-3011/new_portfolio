import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Cpu, Code, Wrench, Wifi, Brain } from 'lucide-react';
import '../styles/skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 'hardware',
      label: 'Hardware Design',
      icon: <Cpu size={20} />,
      skills: [
        { name: 'RTL Design & Verification', level: 90, items: ['Verilog', 'SystemVerilog', 'SystemC'] },
        { name: 'ASIC Design Flow', level: 85, items: ['Synthesis', 'Place & Route', 'Static Timing Analysis'] },
        { name: 'FPGA Development', level: 88, items: ['Implementation', 'Optimization', 'Debugging'] },
        { name: 'Mixed-Signal Circuit Design', level: 82, items: ['Analog & Digital Integration'] },
        { name: 'Processor Architectures', level: 90, items: ['RISC-V', 'ARM Cortex-M', 'MIPS', 'x86'] },
        { name: 'Device Driver Development', level: 80, items: ['Kernel-level Programming'] },
        { name: 'Hardware-Software Co-design', level: 85, items: ['System Integration'] }
      ]
    },
    {
      id: 'programming',
      label: 'Programming',
      icon: <Code size={20} />,
      skills: [
        { name: 'Systems Programming', level: 92, items: ['C', 'C++', 'Embedded C', 'Rust'] },
        { name: 'Scripting & Automation', level: 88, items: ['Python', 'Bash'] },
        { name: 'Hardware Description', level: 90, items: ['Verilog', 'SystemVerilog', 'SystemC'] },
        { name: 'Assembly Languages', level: 85, items: ['ARM', 'MIPS', 'x86'] },
        { name: 'Version Control', level: 90, items: ['Git', 'GitHub Workflows'] }
      ]
    },
    {
      id: 'tools',
      label: 'EDA Tools',
      icon: <Wrench size={20} />,
      skills: [
        { name: 'Analog Design', level: 88, items: ['Cadence Virtuoso', 'Verilog-A', 'LTspice'] },
        { name: 'Digital Design', level: 90, items: ['Verilator', 'Logisim', 'Modelsim'] },
        { name: 'System Design', level: 85, items: ['MATLAB', 'Simulink'] },
        { name: 'Embedded Development', level: 87, items: ['STM32CubeIDE', 'Keil µVision'] },
        { name: 'Emulation & Debug', level: 82, items: ['QEMU', 'Hardware Debug Tools'] }
      ]
    },
    {
      id: 'protocols',
      label: 'Protocols',
      icon: <Wifi size={20} />,
      skills: [
        { name: 'Network Protocols', level: 80, items: ['TCP/IP Stack'] },
        { name: 'Embedded Interfaces', level: 90, items: ['I2C', 'SPI', 'UART', 'CAN'] },
        { name: 'High-Speed Interfaces', level: 75, items: ['PCIe', 'USB'] },
        { name: 'Wireless Protocols', level: 70, items: ['IoT Communication'] }
      ]
    },
    {
      id: 'ml',
      label: 'ML & HPC',
      icon: <Brain size={20} />,
      skills: [
        { name: 'Neural Network Architectures', level: 85, items: ['Deep Learning'] },
        { name: 'Hardware Acceleration', level: 88, items: ['ML/AI Optimization'] },
        { name: 'Parallel Computing', level: 90, items: ['OpenMP', 'MPI', 'pthreads'] },
        { name: 'Model Optimization', level: 82, items: ['Quantization', 'Pruning'] },
        { name: 'Edge AI & IoT', level: 85, items: ['Embedded ML'] },
        { name: 'Performance Profiling', level: 87, items: ['Benchmarking', 'Analysis'] }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A comprehensive skill set spanning the full hardware design lifecycle—from system architecture and RTL design to physical implementation and validation.
          </p>
        </div>

        <Tabs defaultValue="hardware" className="skills-tabs">
          <TabsList className="skills-tabs-list">
            {skillCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="skills-tab-trigger">
                {category.icon}
                <span>{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="skills-tab-content">
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="skill-card">
                    <div className="skill-header">
                      <h3 className="skill-name">{skill.name}</h3>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="skill-items">
                      {skill.items.map((item, idx) => (
                        <span key={idx} className="skill-tag">{item}</span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
