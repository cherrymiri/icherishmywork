/**
 * 작업물 데이터 — 여기만 고치면 사이트 내용이 바뀝니다.
 *
 * 이미지 넣는 법
 *   1) 이미지 파일을 public/works/ 폴더에 넣습니다. (예: public/works/02-thumb.webp)
 *   2) 아래 항목의 thumbnail / image 에 'works/02-thumb.webp' 처럼 적습니다. (앞에 / 없이)
 *   - thumbnail : HOME 썸네일 (일반 작업 1:1, 졸업작품 가로형으로 잘려 보임)
 *   - image     : 상세 페이지 대표 이미지 (원본 비율 그대로 표시)
 *   - ratio     : 대표 이미지 비율 — 'portrait'(세로형) | 'square'(정사각형) | 'wide'(가로형)
 *                 세로형·정사각형 → PC에서 왼쪽 이미지 + 오른쪽 설명
 *                 가로형           → PC에서 위 이미지 + 아래 설명
 *   - gallery   : 상세 페이지 하단 추가 이미지 (선택)
 *   - link      : 웹 기반 작품의 체험 링크 (선택)
 *
 * 권장: 썸네일 1200px, 대표 이미지 긴 변 2000px 이하의 WebP/JPG (모바일 속도)
 */

export type ImageRatio = 'portrait' | 'square' | 'wide';

export interface WorkImage {
  src: string;
  alt?: string;
}

export interface Work {
  slug: string; // 주소에 쓰이는 이름 (영문 소문자, 하이픈)
  title: string;
  subtitle?: string; // 한글명 등 보조 제목 (상세 페이지에 표시)
  category: string;
  year: string;
  featured?: boolean;
  thumbnail?: string;
  thumbnailSrcSet?: string; // 선택: 'works/a-1200.webp 1200w, works/a-1920.webp 1920w'
  thumbnailMobile?: string; // 선택: 모바일(700px 이하) 전용 썸네일
  thumbnailFit?: 'cover' | 'contain'; // contain = 이미지 전체를 잘리지 않게 표시
  thumbnailBg?: string; // contain일 때 남는 영역 색 (이미지 배경색과 맞추기)
  image?: string;
  imageAlt?: string;
  ratio: ImageRatio;
  description: string[]; // 문단 단위
  gallery?: WorkImage[];
  link?: { url: string; label?: string };
  tone?: string; // 이미지가 없을 때 플레이스홀더 색 (tone1~tone10)
}

/**
 * 〈When Love Responds〉 HOME 썸네일 선택 (시험 적용)
 *   'logo'    → 아이보리 로고 타이포그래피 썸네일
 *   'objects' → 여섯 오브제 썸네일 (이전 버전, 파일 보관 중)
 * 되돌리려면 아래 한 단어만 'objects'로 바꾸면 됩니다.
 */
const WLR_THUMBNAIL: 'logo' | 'objects' = 'logo';

const wlrThumbs = {
  logo: {
    thumbnail: 'works/when-love-responds-logo-1920.webp',
    thumbnailSrcSet: 'works/when-love-responds-logo-1200.webp 1200w, works/when-love-responds-logo-1920.webp 1920w, works/when-love-responds-logo-2560.webp 2560w',
  },
  objects: {
    thumbnail: 'works/when-love-responds-thumb-1920.webp',
    thumbnailSrcSet: 'works/when-love-responds-thumb-1200.webp 1200w, works/when-love-responds-thumb-1920.webp 1920w, works/when-love-responds-thumb-2560.webp 2560w',
  },
};

const placeholderText = ['텍스트를 입력하세요.', '작품 소개와 제작 의도는 나중에 이 자리에 입력하면 됩니다.'];

// 임시 비율 — 실제 이미지가 정해지면 작품마다 바꿔 주세요.
const previewRatios: ImageRatio[] = ['portrait', 'square', 'wide', 'portrait', 'square', 'portrait', 'square', 'wide', 'square', 'portrait'];

export const works: Work[] = [
  {
    slug: 'when-love-responds',
    title: 'When Love Responds',
    subtitle: '사랑의 응답',
    category: 'Interactive Media Art',
    year: '2026',
    featured: true,
    ratio: 'wide',
    description: placeholderText,
    // HOME 썸네일 — 위의 WLR_THUMBNAIL 설정에 따라 선택
    ...wlrThumbs[WLR_THUMBNAIL],
    thumbnailFit: 'contain',
    thumbnailBg: '#111113',
    // 상세 페이지 대표 이미지 — 여섯 오브제 이미지 (썸네일 설정과 무관)
    image: 'works/when-love-responds-thumb-2560.webp',
    imageAlt: 'When Love Responds — EROS, LUDUS, PHILIA, STORGE, PRAGMA, AGAPE 여섯 가지 사랑의 오브제',
    // link: { url: 'https://when-love-responds.vercel.app', label: '작품 체험하기' },
  },
  ...previewRatios.map<Work>((ratio, i) => ({
    slug: `work-${String(i + 2).padStart(2, '0')}`,
    title: '작품명을 입력하세요',
    category: '분야',
    year: '연도',
    ratio,
    description: placeholderText,
    tone: `tone${i + 1}`,
  })),
];

export const findWork = (slug: string | undefined) => works.find((w) => w.slug === slug);
