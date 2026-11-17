import { Link, Navigate, useParams } from 'react-router-dom';
import { findWork, slugAliases } from '../data/works';
import { FeaturedPlaceholder } from '../components/WorkThumb';
import Footer from '../components/Footer';
import LoopVideo from '../components/LoopVideo';
import WlrDetail from './WlrDetail';
import NovDetail from './NovDetail';
import { asset } from '../utils';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const RATIO_LABEL = { wide: '가로형', portrait: '세로형', square: '정사각형' } as const;

export default function WorkDetail() {
  const { slug } = useParams();
  const work = findWork(slug);
  useDocumentTitle(work?.title === '작품명을 입력하세요' ? 'WORKS' : work?.title);
  if (work?.slug === 'when-love-responds') return <WlrDetail />;
  if (work?.slug === 'november-love-fortune') return <NovDetail />;
  if (!work) return <Navigate to={slug && slugAliases[slug] ? `/works/${slugAliases[slug]}` : '/'} replace />;

  const visualClass = work.image || work.video
    ? 'project-visual has-image'
    : `project-visual ${work.featured ? 'featured-art' : `placeholder ${work.tone ?? 'tone1'}`}`;

  return (
    <div className="page project-page">
      <div className="inner">
        <article className={`project-layout layout-${work.ratio}`}>
          <figure className={visualClass}>
            {work.video ? (
              <LoopVideo
                src={asset(work.video.src)}
                poster={work.video.poster ? asset(work.video.poster) : undefined}
                label={work.title}
              />
            ) : work.image ? (
              <img src={asset(work.image)} alt={work.imageAlt ?? work.title} width={work.imageSize?.[0]} height={work.imageSize?.[1]} decoding="async" fetchpriority="high" />
            ) : work.featured ? (
              <FeaturedPlaceholder withTitle={false} />
            ) : (
              <div className="project-visual-label">
                <span>대표 이미지</span>
                <small>{RATIO_LABEL[work.ratio]} 이미지 자리 · 추후 교체</small>
              </div>
            )}
          </figure>
          <div className="project-description">
            <div className="project-heading">
              <h1>{work.title}</h1>
              {work.subtitle && <span className="project-subtitle">{work.subtitle}</span>}
              <span className="project-meta">{work.category} · {work.year}</span>
            </div>
            <div className="project-summary">
              {work.description.map((p, i) => <p key={i}>{p}</p>)}
              {work.link && (
                <a className="project-link" href={work.link.url} target="_blank" rel="noopener noreferrer">
                  {work.link.label ?? '작품 체험하기'} ↗
                </a>
              )}
            </div>
          </div>
        </article>

        {work.gallery && work.gallery.length > 0 && (
          <div className="detail-grid">
            {work.gallery.map((g, i) => (
              <img key={i} src={asset(g.src)} alt={g.alt ?? ''} loading="lazy" decoding="async" />
            ))}
          </div>
        )}

        <Link className="back-link" to="/">← ALL WORKS</Link>
        <Footer />
      </div>
    </div>
  );
}
