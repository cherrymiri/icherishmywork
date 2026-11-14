/** public 폴더 파일 경로를 배포 위치에 맞게 바꿉니다. 외부 URL은 그대로. */
export const asset = (path: string) =>
  /^(https?:)?\/\//.test(path) ? path : import.meta.env.BASE_URL + path.replace(/^\//, '');

export const LOGO = asset('logo.png');
export const LOGO_RATIO = 1911 / 346;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const SITE = 'icherishmywork';
