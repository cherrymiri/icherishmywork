import Footer from '../components/Footer';
import { videos, videoPlaceholderCategories } from '../data/site';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function MotionVideo() {
  useDocumentTitle('Motion & Video');
  return (
    <div className="page archive-page">
      <div className="inner">
        <p className="section-label">MORE WORKS</p>
        <h1 className="page-title">Motion &amp; Video</h1>
        <p className="page-intro">영상 아카이브 작품은 나중에 연결합니다.</p>
        {videos.length === 0
          ? videoPlaceholderCategories.map((c) => (
              <div className="archive-item" key={c}>{c}　　—　　작품을 추가하세요</div>
            ))
          : videos.map((v, i) => {
              const body = (<><span>{v.title}</span><span>{v.category}</span>{v.year && <span className="year">{v.year}</span>}</>);
              return v.url
                ? <a className="archive-item" key={i} href={v.url} target="_blank" rel="noopener noreferrer">{body}</a>
                : <div className="archive-item" key={i}>{body}</div>;
            })}
        <Footer />
      </div>
    </div>
  );
}
