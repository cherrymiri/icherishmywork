import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { cybDetail as d } from '../data/cybDetail';
import { asset } from '../utils';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/** 〈사이버 샌드위치 말랑이〉 전용 상세 페이지 (When Love Responds 상세와 같은 디자인 체계) */
export default function CybDetail() {
  useDocumentTitle(d.title);
  return (
    <div className="page project-page wlr-page cyb-page">
      <div className="inner">
        <a className="wlr-hero nov-hero" href={d.url} target="_blank" rel="noopener noreferrer" aria-label={`${d.title} — 체험웹 열기 (새 탭)`}>
          <picture>
            {/* 모바일: 별도로 캡처한 모바일 화면 */}
            <source media="(max-width: 700px)" srcSet={asset(d.heroMobile.src)} width={d.heroMobile.width} height={d.heroMobile.height} />
            <img
              src={asset(d.heroPc.src)}
              sizes="(max-width: 1200px) 100vw, 1100px"
              width={d.heroPc.width}
              height={d.heroPc.height}
              alt={`${d.title} 메인 화면`}
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        </a>
        <p className="wlr-hero-caption">{d.heroCaption}</p>

        <header className="wlr-head">
          <h1>{d.title}</h1>
          <span className="project-meta">{d.meta}</span>
        </header>

        <section className="wlr-intro" aria-labelledby="cyb-intro-label">
          <h2 className="wlr-label" id="cyb-intro-label">작품 소개</h2>
          {d.intro.map((p, i) => <p key={i} className="keep-breaks">{p}</p>)}
        </section>

        <div className="nov-steps">
          {d.steps.map((s) => (
            <figure key={s.src}>
              <img src={asset(s.src)} width={s.width} height={s.height} alt={s.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>

        <Link className="back-link" to="/">← ALL WORKS</Link>
        <Footer />
      </div>
    </div>
  );
}
