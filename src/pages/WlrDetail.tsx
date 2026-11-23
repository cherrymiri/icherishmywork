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
        <div className="wlr-video">
          <video
            controls
            playsInline
            preload="metadata"
            poster={asset('works/when-love-responds-orbs-1920.webp')}
            width={1920}
            height={1080}
            aria-label={`${d.title} 작품 소개 영상`}
          >
            <source src={asset('works/when-love-responds-intro.mp4')} type="video/mp4" />
          </video>
        </div>
        <div className="wlr-cta">
          <a className="wlr-cta-btn" href={d.galleryUrl} target="_blank" rel="noopener noreferrer">
            작품 직접 체험하기 <span className="wlr-cta-arrow" aria-hidden="true">↗</span>
          </a>
          <p className="wlr-cta-note">여섯 가지 사랑을 직접 경험해 보세요.</p>
        </div>

        <header className="wlr-head">
          <h1>{d.title}</h1>
          <span className="project-meta">{d.meta}</span>
        </header>

        <section className="wlr-intro" aria-labelledby="wlr-intro-label">
          <h2 className="wlr-label" id="wlr-intro-label">작품 소개</h2>
          <p>{(() => {
            // PC: 문장 끝에서 줄바꿈 (세 줄), 모바일: 자연스럽게 흐름
            const t = d.intro;
            const a = t.indexOf('친구와의'), b = t.indexOf('이토록');
            const last = t.slice(b).split('사랑의 응답〉은');
            return (<>
              {t.slice(0, a)}<span className="pc-br"><br /></span>
              {t.slice(a, b)}
              {last[0]}<span className="nowrap">사랑의 응답〉은</span>{last[1]}
            </>);
          })()}</p>
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
