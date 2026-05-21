import { useEffect } from 'react';

function useRevealAnimations() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

    if (revealItems.length === 0) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-revealed'));
      return undefined;
    }

    const loadItems = revealItems.filter(
      (item) => item.dataset.reveal === 'load',
    );
    const scrollItems = revealItems.filter(
      (item) => item.dataset.reveal !== 'load',
    );

    const loadFrame = window.requestAnimationFrame(() => {
      loadItems.forEach((item, index) => {
        if (!item.style.getPropertyValue('--reveal-delay')) {
          item.style.setProperty('--reveal-delay', `${index * 90}ms`);
        }

        item.classList.add('is-revealed');
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.16,
      },
    );

    scrollItems.forEach((item) => observer.observe(item));

    return () => {
      window.cancelAnimationFrame(loadFrame);
      observer.disconnect();
    };
  }, []);
}

export default useRevealAnimations;
