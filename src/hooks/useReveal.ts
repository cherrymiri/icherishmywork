import { useEffect } from 'react';

/** .reveal 요소가 화면에 들어오면 .visible 추가 — 한 번 나타나면 유지 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.visible)'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px 20px 0px', threshold: 0.06 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
