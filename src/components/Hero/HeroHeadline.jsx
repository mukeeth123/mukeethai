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
        SYED <span className="hero-gradient-word">MUKEETH</span> UR RAHIMAN
      </span>
      <span className="hero__headline-line hero__headline-line--secondary">
         <span className="hero-gradient-word"></span>
      </span>
    </motion.h1>
  );
}
