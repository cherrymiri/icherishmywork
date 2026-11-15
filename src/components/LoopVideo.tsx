import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../utils';

/** 자동재생·무한반복 영상. 화면을 한 번 클릭(또는 Enter/Space)하면 정지/재생. */
export default function LoopVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || prefersReducedMotion()) return; // 모션 감소 설정 시에는 자동재생하지 않음
    v.muted = true; // 브라우저 자동재생 정책상 음소거 상태여야 자동재생 가능
    v.play().catch(() => {});
  }, [src]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay={!prefersReducedMotion()}
      muted
      loop
      playsInline
      preload="auto"
      width={1080}
      height={1080}
      className="loop-video"
      tabIndex={0}
      aria-label={`${label} 영상 — 클릭하면 정지/재생`}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      }}
    />
  );
}
