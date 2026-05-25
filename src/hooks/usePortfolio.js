import { useState, useEffect, useRef } from 'react';

// Hook: detect mobile/desktop
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

// Hook: mouse tracker (desktop only)
export function useMouseTracker() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [normalized, setNormalized] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
      setNormalized({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return { mouse, normalized };
}

// Hook: scroll progress
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

// Hook: intersection observer for reveal
export function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Hook: counter animation
export function useCounter(target, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isActive]);

  return count;
}

// Hook: typing animation
export function useTypingEffect(texts, speed = 80, pause = 2000) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = texts[currentIndex];
    let timeout;

    if (!isDeleting && currentText === target) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      const delta = isDeleting ? speed / 2 : speed;
      timeout = setTimeout(() => {
        setCurrentText(isDeleting
          ? target.slice(0, currentText.length - 1)
          : target.slice(0, currentText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts, speed, pause]);

  return currentText;
}
