import type { Work } from '../data/works';
import { asset } from '../utils';

export function FeaturedPlaceholder({ withTitle = true }: { withTitle?: boolean }) {
  return (
    <div className="placeholder-content">
      <div className="circles" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      <small>통합웹 스크린샷이 들어갈 자리</small>
      {withTitle && <strong>When Love Responds</strong>}
      {withTitle && <em>IMAGE PLACEHOLDER</em>}
    </div>
  );
}

export default function WorkThumb({ work }: { work: Work }) {
  if (work.thumbnail) {
    return (
      <div className="work-photo">
        <img
          src={asset(work.thumbnail)}
          alt=""
          loading={work.featured ? 'eager' : 'lazy'}
          decoding="async"
          {...(work.featured ? { fetchpriority: 'high' } : {})}
        />
      </div>
    );
  }
  if (work.featured) return <div className="work-photo featured-art"><FeaturedPlaceholder /></div>;
  return (
    <div className={`work-photo placeholder ${work.tone ?? 'tone1'}`}>
      <span className="empty-label">썸네일 이미지</span>
    </div>
  );
}
