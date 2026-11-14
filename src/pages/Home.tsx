import { Link } from 'react-router-dom';
import { works } from '../data/works';
import WorkThumb from '../components/WorkThumb';
import Footer from '../components/Footer';
import { useReveal } from '../hooks/useReveal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle();
  useReveal();
  return (
    <div className="page home">
      <h1 className="visually-hidden">icherishmywork</h1>
      {/* 큰 로고 자리 — 실제 로고(.brand)는 헤더가 이 위치에 맞춰 그립니다 */}
      <div className="hero-logo-wrap" aria-hidden="true">
        <div className="hero-logo-slot" id="hero-logo-slot" />
      </div>
      <div className="content">
        <ul className="works-grid" id="works" aria-label="작업 목록">
          {works.map((w, i) => (
            <li key={w.slug} className={w.featured ? 'featured' : undefined}>
              <Link
                to={`/works/${w.slug}`}
                className="work reveal"
                style={{ transitionDelay: `${(i % 2) * 85}ms` }}
              >
                <WorkThumb work={w} />
                <div className="work-info">
                  <div className="work-title">{w.title}</div>
                  <div className="work-meta">{w.category} · {w.year}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="archive-link" to="/motion-video">
          <span>Motion &amp; Video</span>
          <span>VIEW ARCHIVE ↗</span>
        </Link>
        <Footer />
      </div>
    </div>
  );
}
