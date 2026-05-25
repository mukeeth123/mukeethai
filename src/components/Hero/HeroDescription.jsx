import { motion } from 'framer-motion';

export default function HeroDescription() {
  return (
    <motion.p
      className="hero__subtitle text-lg leading-relaxed text-white/65"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.28 }}
    >
      We are entering an era
      where AI systems will think, adapt, and act.
    </motion.p>
  );
}
