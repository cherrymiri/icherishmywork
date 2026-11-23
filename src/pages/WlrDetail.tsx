import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { wlrDetail as d } from '../data/wlrDetail';
import { asset } from '../utils';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const srcSet = (s: string) =>
  s.split(',').map((p) => { const [path, w] = p.trim().split(/\s+/); return `${asset(path)} ${w}`; }).join(', ');

/** 〈When Love Responds, 사랑의 응답〉 전용 상세 페이지 */
export default function WlrDetail() {
  useDocumentTitle('When Love Responds, 사랑의 응답');
  return (
    <div className="page project-page wlr-page">
      <div className="inner">
        <a className="wlr-hero" href={d.galleryUrl} target="_blank" rel="noopener noreferrer" aria-label={`${d.title} — 체험웹 열기 (새 탭)`}>
          <img
            src={asset(d.hero.src)}
            srcSet={srcSet(d.hero.srcSet)}
            sizes="(max-width: 1200px) 100vw, 1100px"
            width={d.hero.width}
            height={d.hero.height}
            alt="When Love Responds 통합 웹사이트 메인 화면 — EROS, LUDUS, PHILIA, STORGE, PRAGMA, AGAPE"
            fetchpriority="high"
            decoding="async"
          />
        </a>
        <p className="wlr-hero-caption">{d.heroCaption}</p>

        <header className="wlr-head">
          <h1>{d.title}</h1>
          <span className="project-meta">{d.meta}</span>
        </header>

        <section className="wlr-intro" aria-labelledby="wlr-intro-label">
          <h2 className="wlr-label" id="wlr-intro-label">작품 소개</h2>
          <p>{d.intro}</p>
        </section>

        <section className="wlr-loves" aria-labelledby="wlr-loves-label">
          <h2 className="wlr-label" id="wlr-loves-label">여섯 가지의 사랑</h2>
          {d.loves.map((l) => (
            <article className={`wlr-love wlr-love--${l.key}`} key={l.key}>
              <figure className="wlr-love-img">
                <img
                  src={asset(l.image.src)}
                  srcSet={srcSet(l.image.srcSet)}
                  sizes="(max-width: 700px) 92vw, 50vw"
                  width={l.image.width}
                  height={l.image.height}
                  alt={`${l.name} 오브제`}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="wlr-love-text">
                <h3>{l.name} · {l.nameKo}</h3>
                <p className="wlr-love-sub">{l.subtitle}</p>
                <p className="wlr-love-body">{l.description}</p>
                <h4 className="wlr-label">INTERACTION</h4>
                <p className="wlr-love-body">{l.interaction}</p>
              </div>
            </article>
          ))}
        </section>

        <Link className="back-link" to="/">← ALL WORKS</Link>
        <Footer />
      </div>
    </div>
  );
}
