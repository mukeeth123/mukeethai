import { MotionFloat, SectionLabel } from '../UI/MotionPrimitives';
import './FinalCta.css';

export default function FinalCta() {
  return (
    <section className="final-cta">
      <MotionFloat y={10} duration={6}>
        <div className="container final-cta__inner glass-card">
          <div>
            <SectionLabel>Ready to scale</SectionLabel>
            <h2>🚀 Let’s Build AI Systems That Generate Revenue</h2>
            <p className="final-cta__copy">
              Available for freelance, consulting, and global opportunities. I partner with product teams, founders, and enterprises to ship AI systems that move the business needle.
            </p>
          </div>

          <div className="final-cta__actions">
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Hire Me</a>
            <a href="https://wa.me/918179020981" target="_blank" rel="noreferrer" className="btn-secondary">WhatsApp Me</a>
            <a href="https://www.linkedin.com/in/syed-mukeeth-ur-rahiman-349120244/" target="_blank" rel="noreferrer" className="btn-secondary">View LinkedIn</a>
          </div>
        </div>
      </MotionFloat>
    </section>
  );
}
