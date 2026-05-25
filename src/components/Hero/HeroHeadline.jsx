import { motion } from 'framer-motion';

export default function HeroHeadline() {
  return (
    <motion.h1
      className="hero__headline font-extrabold text-[#f0f4ff]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.18 }}
    >
      <span className="hero__headline-line">
        I explore how <span className="hero-gradient-word">AI</span> can reason,
      </span>
      <span className="hero__headline-line hero__headline-line--secondary">
        adapt, and <span className="hero-gradient-word">evolve</span>
      </span>
    </motion.h1>
  );
}
