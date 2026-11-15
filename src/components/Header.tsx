import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LOGO, prefersReducedMotion } from '../utils';

const NAV = [
  { to: '/', label: 'WORKS' },
  { to: '/about', label: 'ABOUT' },
  { to: '/contact', label: 'CONTACT' },
];
const THRESHOLD = 24; // 이만큼 스크롤하면 헤더 전환

type Box = { x: number; y: number; w: number };

/**
 * 하나의 워드마크(.brand)가 HOME 첫 화면에서는 중앙에 크게,
 * 스크롤하거나 다른 페이지에서는 상단 왼쪽에 작게 위치합니다.
 * 위치는 각 자리(hero-logo-slot / sticky-logo-slot)를 측정해 transform으로 이동 → 레이아웃 밀림 없음.
 */
export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(() => window.scrollY > THRESHOLD);
  const compact = !isHome || scrolled;
  const [menuOpen, setMenuOpen] = useState(false);
  const [boxes, setBoxes] = useState<{ big: Box | null; small: Box } | null>(null);
  const [animate, setAnimate] = useState(false);

  const smallSlot = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 스크롤 상태
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // 로고 자리 측정
  const measure = useCallback(() => {
    const s = smallSlot.current;
    if (!s) return;
    const small = { x: s.offsetLeft, y: s.offsetTop, w: s.offsetWidth };
    const hero = document.getElementById('hero-logo-slot');
    let big: Box | null = null;
    if (hero) {
      const r = hero.getBoundingClientRect();
      big = { x: r.left, y: r.top + window.scrollY, w: r.width };
    }
    setBoxes({ big, small });
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [pathname, measure]);

  // 레이아웃이 바뀌면(스크롤바 등장, 글꼴·이미지 로딩, 창 크기 등) 자동으로 다시 측정
  useEffect(() => {
    if (!('ResizeObserver' in window)) return;
    let raf = 0;
    const ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(measure); });
    ro.observe(document.documentElement);
    if (smallSlot.current) ro.observe(smallSlot.current);
    const hero = document.getElementById('hero-logo-slot');
    if (hero) ro.observe(hero);
    document.fonts?.ready.then(measure).catch(() => {});
    window.addEventListener('load', measure);
    return () => { ro.disconnect(); cancelAnimationFrame(raf); window.removeEventListener('load', measure); };
  }, [pathname, measure]);

  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      setAnimate(false);
      raf = requestAnimationFrame(measure);
    };
    window.addEventListener('resize', onResize);
    // 첫 측정 이후부터 이동 애니메이션 사용
    const t = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(t);
    };
  }, [measure]);

  useEffect(() => {
    if (!animate) {
      const t = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(t);
    }
  }, [animate]);

  // 로고 위치·크기 계산 — 크기는 width 로 직접 지정(비율 계산 없음)해서, 측정이 한 번 어긋나도 비정상적으로 커지지 않음
  let style: React.CSSProperties | undefined;
  if (boxes) {
    const { big, small } = boxes;
    const target = big && !compact ? big : small;
    style = { width: target.w, transform: `translate3d(${target.x}px, ${target.y}px, 0)` };
  }

  const onBrandClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
    setMenuOpen(false);
  };

  // 모바일 메뉴: 스크롤 잠금, ESC, 포커스 관리
  const closeMenu = useCallback((restoreFocus = true) => {
    setMenuOpen(false);
    if (restoreFocus) trigger.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const html = document.documentElement;
    const prev = [html.style.overflow, document.body.style.overflow];
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
      if (e.key === 'Tab' && menuRef.current) {
        const f = menuRef.current.querySelectorAll<HTMLElement>('a, button');
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = prev[0];
      document.body.style.overflow = prev[1];
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen, closeMenu]);

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => setMenuOpen(false), [pathname]);

  // PC 크기로 바뀌면 메뉴 닫기
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 701px)');
    const fn = () => mq.matches && setMenuOpen(false);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'current' : undefined);

  return (
    <>
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>

      <Link
        to="/"
        className={`brand${compact ? '' : ' is-big'}${boxes ? '' : ' is-measuring'}${animate ? '' : ' no-anim'}`}
        style={style}
        onClick={onBrandClick}
        aria-label={isHome ? 'icherishmywork — 맨 위로' : 'icherishmywork — 홈으로'}
        aria-hidden={menuOpen || undefined}
        tabIndex={menuOpen ? -1 : undefined}
      >
        <img src={LOGO} alt="" width={1911} height={346} />
      </Link>

      <header className={`sticky${compact ? ' show' : ''}`} aria-hidden={!compact || undefined}>
        <div className="sticky-logo-slot" ref={smallSlot} aria-hidden="true" />
        <nav className="top-nav" aria-label="주요 메뉴">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end className={navClass} tabIndex={compact ? undefined : -1}
              onClick={(e) => { if (n.to === '/' && isHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' }); } }}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button
          ref={trigger}
          className="menu-trigger"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          tabIndex={compact ? undefined : -1}
          onClick={() => setMenuOpen(true)}
        >
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M3 8h18M3 16h18" />
          </svg>
        </button>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="메뉴"
        aria-hidden={!menuOpen}
        // 메뉴 항목 바깥(빈 영역)을 누르면 닫힘
        onClick={(e) => { if (!(e.target as HTMLElement).closest('a, button')) closeMenu(false); }}
      >
        <div className="mobile-menu-head">
          <Link to="/" tabIndex={menuOpen ? undefined : -1} onClick={(e) => { onBrandClick(e); }} aria-label="홈으로">
            <img src={LOGO} alt="icherishmywork" />
          </Link>
          <button ref={closeBtn} className="mobile-menu-close" aria-label="메뉴 닫기" tabIndex={menuOpen ? undefined : -1} onClick={() => closeMenu()}>
            ×
          </button>
        </div>
        <nav className="mobile-menu-items" aria-label="모바일 메뉴">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end className={navClass} tabIndex={menuOpen ? undefined : -1}
              onClick={(e) => { if (n.to === '/' && isHome) { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'auto' }); } }}>
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
