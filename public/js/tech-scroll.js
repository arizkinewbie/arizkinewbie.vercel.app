/**
 * High-Tech Scroll Interaction Script for arizkinewbie.com
 * Handles scroll progress laser, entrance reveals with stagger, and floating HUD.
 * Pure Vanilla JS, zero dependencies, ultra lightweight.
 */
(() => {
  if (typeof window === 'undefined') return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Create Laser Progress Bar
  let progressBar = document.getElementById('tech-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'tech-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);
  }

  // 2. Create Floating HUD Back-To-Top Button
  let backToTop = document.getElementById('tech-back-to-top');
  if (!backToTop) {
    backToTop = document.createElement('button');
    backToTop.id = 'tech-back-to-top';
    backToTop.type = 'button';
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    backToTop.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
      <span>Top</span>
    `;
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(backToTop);
  }

  // 3. Scroll Tracker (Throttled via requestAnimationFrame)
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (progressBar) {
          progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        }

        if (backToTop) {
          if (scrollTop > 380) {
            backToTop.classList.add('visible');
          } else {
            backToTop.classList.remove('visible');
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial state

  if (isReducedMotion) return;

  // 4. Staggered Scroll Reveal System
  const initScrollReveals = () => {
    const selectorGroups = [
      { selector: '.proof__cell', stagger: 80 },
      { selector: '.talk__row', stagger: 70 },
      { selector: '.card', stagger: 90 },
      { selector: '.work', stagger: 100 },
      { selector: 'section > .grid > div:first-child', stagger: 0 },
      { selector: '.contact-box', stagger: 80 }
    ];

    const elementsToReveal = [];

    selectorGroups.forEach(group => {
      const items = Array.from(document.querySelectorAll(group.selector));
      items.forEach((item, index) => {
        if (!item.classList.contains('tech-reveal')) {
          item.classList.add('tech-reveal');
          item.style.setProperty('--tech-delay', `${index * group.stagger}ms`);
          elementsToReveal.push(item);
        }
      });
    });

    if (!('IntersectionObserver' in window)) {
      elementsToReveal.forEach(el => el.classList.add('tech-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('tech-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.1
    });

    elementsToReveal.forEach(el => observer.observe(el));

    // Fallback: If anything is still not revealed after 2s, force reveal
    setTimeout(() => {
      elementsToReveal.forEach(el => {
        if (!el.classList.contains('tech-revealed')) {
          el.classList.add('tech-revealed');
        }
      });
    }, 2000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveals);
  } else {
    initScrollReveals();
  }
})();
