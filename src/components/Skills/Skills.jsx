import { useState } from 'react';
import { skills } from '../../constants/data';
import { useReveal } from '../../hooks/usePortfolio';
import { SectionLabel } from '../UI/MotionPrimitives';
import './Skills.css';

const categories = ['All', ...new Set(skills.map(s => s.category))];

function SkillBar({ skill, index, isVisible }) {
  return (
    <div
      className={`skill-bar${isVisible ? ' skill-bar--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.04}s` }}
    >
      <div className="skill-bar__header">
        <span className="skill-bar__name">{skill.name}</span>
        <span className="skill-bar__level" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
            boxShadow: isVisible ? `0 0 8px ${skill.color}66` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: headRef, isVisible: headVisible } = useReveal(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useReveal(0.05);

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section skills">
      <div className="container">

        {/* Header */}
        <div ref={headRef} className={`reveal${headVisible ? ' visible' : ''}`}>
          <SectionLabel>Technical Arsenal</SectionLabel>
          <h2 className="section-title">
            AI Skill <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="skills__subtitle">
            A battle-tested stack of AI/ML tools, frameworks, cloud platforms, and automation systems — from classical ML to agentic AI architectures.
          </p>
        </div>

        {/* Category filters */}
        <div className="skills__filters scroll-x">
          {categories.map(cat => (
            <button
              key={cat}
              className={`skills__filter${activeCategory === cat ? ' skills__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              id={`skill-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className="skills__grid">
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} isVisible={gridVisible} />
          ))}
        </div>

        {/* Tech orbit display */}
        <div className="skills__orbit-section">
          <SectionLabel>Core Technologies</SectionLabel>
          <div className="skills__orbit">
            {[
              { name: 'Python', color: '#00d4ff', size: 'lg' },
              { name: 'LangChain', color: '#00ff88', size: 'lg' },
              { name: 'LangGraph', color: '#7c3aed', size: 'lg' },
              { name: 'FastAPI', color: '#00d4ff', size: 'md' },
              { name: 'GPT-4', color: '#00ff88', size: 'lg' },
              { name: 'RAG', color: '#7c3aed', size: 'md' },
              { name: 'Docker', color: '#00d4ff', size: 'md' },
              { name: 'n8n', color: '#00ff88', size: 'sm' },
              { name: 'Pinecone', color: '#7c3aed', size: 'sm' },
              { name: 'PyTorch', color: '#00d4ff', size: 'md' },
              { name: 'React', color: '#00ff88', size: 'sm' },
              { name: 'GCP', color: '#7c3aed', size: 'sm' },
              { name: 'Kafka', color: '#00d4ff', size: 'sm' },
              { name: 'Redis', color: '#00ff88', size: 'sm' },
              { name: 'HuggingFace', color: '#7c3aed', size: 'md' },
            ].map((tech, i) => (
              <div
                key={tech.name}
                className={`skills__orbit-item skills__orbit-item--${tech.size}`}
                style={{
                  borderColor: `${tech.color}33`,
                  color: tech.color,
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills__bg-glow" />
    </section>
  );
}
