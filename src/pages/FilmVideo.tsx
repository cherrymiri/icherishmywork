import { useState } from 'react';
import Footer from '../components/Footer';
import { films } from '../data/films';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function FilmVideo() {
  useDocumentTitle('FILM & VIDEO');
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="page fv-page">
      <div className="fv-wide">
        <header className="fv-head">
          <h1 className="page-title fv-title">FILM &amp; VIDEO</h1>
          <span className="fv-count">{String(films.length).padStart(2, '0')} WORKS</span>
        </header>
        <ul className="fv-list">
          {films.map((f, i) => {
            const isOpen = open === i;
            return (
              <li className={`fv-item${isOpen ? ' is-open' : ''}`} key={f.title}>
                <button type="button" className="fv-row" aria-expanded={isOpen} aria-controls={`fv-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="fv-name">
                    <span className="fv-item-title">{f.title}</span>
                    <span className="fv-item-cat">{f.category}</span>
                  </span>
                  <span className="fv-icon" aria-hidden="true" />
                </button>
                <div className="fv-panel" id={`fv-panel-${i}`} role="region" aria-label={f.title}>
                  <div className="fv-panel-inner">
                    <div className="fv-body">
                      <div className="fv-desc">{f.description.map((p, k) => <p key={k}>{p}</p>)}</div>
                      {f.photos && (
                        <div className="fv-photos">
                          {f.photos.map((src, k) => (
                            <img key={src} src={src} alt={`${f.title} 촬영 장면 ${k + 1}`} width={548} height={305} loading="lazy" decoding="async" />
                          ))}
                        </div>
                      )}
                      <div className="fv-info">
                        <span className="fv-period"><span className="fv-period-label">{f.periodLabel}</span>{f.period}</span>
                        {f.youtube && (
                          <a className="fv-yt" href={f.youtube} target="_blank" rel="noopener noreferrer">
                            WATCH ON YOUTUBE
                            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 8 8 2M3.2 2H8v4.8" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Footer />
      </div>
    </div>
  );
}
