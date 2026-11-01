import { useEffect } from 'react';

// Blocks inside each section (below the hero) that fade and slide in when scrolled into view
const TARGETS = 'main section:not(.hero) > *';

export default function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined;

    const elements = Array.from(document.querySelectorAll(TARGETS));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0 }
    );

    elements.forEach((el) => {
      // Stagger siblings slightly so a section builds up from top to bottom
      const index = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 0.08}s`);
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove('reveal', 'revealed'));
    };
  }, []);
}
