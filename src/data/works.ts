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
  thumbnailBg?: string;
  thumbnailSize?: [number, number]; // 지정하면 정사각형 대신 원본 비율 그대로 표시 (포스터 등) — [가로, 세로]
  imageSize?: [number, number]; // 상세 이미지 원본 크기 (로딩 중 자리 확보용)
  imageSrcSet?: string; // 선택: 상세 이미지 해상도별 파일 // contain일 때 남는 영역 색 (이미지 배경색과 맞추기)
  image?: string;
  imageAlt?: string;
  ratio: ImageRatio;
  description: string[]; // 문단 단위
  video?: { src: string; poster?: string; caption?: string }; // 상세 페이지 대표 영상 (있으면 이미지 대신 표시)
  wideImage?: { src: string; srcSet?: string; width: number; height: number; alt?: string }; // 영상·글 아래 가로 전체 이미지
  gallery?: WorkImage[];
  link?: { url: string; label?: string };
  tone?: string; // 이미지가 없을 때 플레이스홀더 색 (tone1~tone10)
}

/**
 * 〈When Love Responds〉 HOME 썸네일 선택
 *   'logo-light' → 화이트 배경(#FFFDFC) + 원본 브라운 로고 (현재)
 *   'logo-dark'  → 블랙 배경(#111113) + 아이보리 로고 (보관)
 *   'objects'    → 여섯 오브제 썸네일 (보관)
 * 바꾸려면 아래 한 단어만 바꾸면 됩니다.
 */
const WLR_THUMBNAIL: 'logo-light' | 'logo-dark' | 'objects' = 'logo-light';

const set = (name: string) =>
  [1200, 1920, 2560].map((w) => `works/when-love-responds-${name}-${w}.webp ${w}w`).join(', ');

const wlrThumbs = {
  'logo-light': { thumbnail: 'works/when-love-responds-logo-light-1920.webp', thumbnailSrcSet: set('logo-light'), thumbnailBg: '#FFFDFC' },
  'logo-dark': { thumbnail: 'works/when-love-responds-logo-1920.webp', thumbnailSrcSet: set('logo'), thumbnailBg: '#111113' },
  objects: { thumbnail: 'works/when-love-responds-thumb-1920.webp', thumbnailSrcSet: set('thumb'), thumbnailBg: '#111113' },
};

const placeholderText = ['텍스트를 입력하세요.', '작품 소개와 제작 의도는 나중에 이 자리에 입력하면 됩니다.'];

/**
 * HOME 작업물 순서 = 이 배열 순서 (총 11개)
 *  1줄: When Love Responds (전체 너비)
 *  2줄: 11월의 사랑 운세 | 사이버 샌드위치 말랑이
 *  3줄: 전시 공간 (3D) | 나만의 공간 (3D)
 *  4~6줄: 포스터 6개 (원본 비율)
 */
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
    // 상세 페이지 대표 이미지 — 여섯 오브제 이미지 (썸네일 설정과 무관)
    image: 'works/when-love-responds-thumb-2560.webp',
    imageAlt: 'When Love Responds — EROS, LUDUS, PHILIA, STORGE, PRAGMA, AGAPE 여섯 가지 사랑의 오브제',
    // link: { url: 'https://when-love-responds.vercel.app', label: '작품 체험하기' },
  },
  {
    slug: 'november-love-fortune',
    title: '당신의 11월, 어떤 사랑이 응답할까요?',
    category: 'Interactive Web Invitation',
    year: '2026',
    ratio: 'square',
    description: placeholderText,
    thumbnail: 'works/november-love-fortune.webp', // 실제 사이트 1080×1080 화면 캡처
    image: 'works/november-love-fortune.webp',
    imageAlt: '11월의 사랑 운세 웹초대장 메인 화면',
    link: { url: 'https://november-love-fortune.vercel.app', label: 'VISIT WEBSITE' },
  },
  {
    slug: 'cyber-sandwich-squishy',
    title: '사이버 샌드위치 말랑이',
    category: 'Web Interaction',
    year: '2026',
    ratio: 'square',
    description: placeholderText,
    thumbnail: 'works/cyber-sandwich-squishy.webp', // 실제 사이트 1080×1080 화면 캡처
    image: 'works/cyber-sandwich-squishy.webp',
    imageAlt: '사이버 샌드위치 말랑이 인터랙션 화면',
    link: { url: 'https://cyber-sandwich-squishy.vercel.app', label: 'VISIT WEBSITE' },
  },
  // 전시 공간 — 썸네일 '기말최종이미지.png' → 영상 '전시공간 기말프로젝트 영상 최종.mp4'
  {
    slug: 'exhibition-space',
    title: "시선의 차이 — 보는 나, 보이는 나",
    category: "Interactive Exhibition Planning",
    year: "2025",
    ratio: 'square',
    description: ["우리는 스스로 기대하는 모습과 실제 행동으로 드러나는 모습 사이에서 종종 차이를 경험한다. 〈시선의 차이 - 보는 나, 보이는 나〉는 이러한 차이를 세 개의 공간으로 풀어낸 체험형 미디어아트 전시 기획이다.", "첫 번째 공간에서 관람객은 타인의 기록을 살펴보고, 자신을 표현하는 단어와 문장을 입력하며 아직 존재하지 않는 '기대된 나'를 상상한다.\n두 번째 공간에서는 아무런 정보가 주어지지 않은 초록색 크로마키 공간에 들어선다. 낯선 공간을 스스로 탐색하며 자연스럽게 드러나는 몸짓은 기대와 예상을 벗어난 가장 솔직한 나의 모습이다.\n마지막 공간에서는 앞서 입력한 문장과 실제 행동이 합성된 영상을 마주한다. 기대했던 모습과 실제 모습이 하나로 합쳐진 '또 다른 나'를 통해, 나라는 존재가 하나의 모습으로 고정되지 않음을 전달하고자 했다."], // 1문단 / 2~4문단은 한 단락(줄바꿈만)
    thumbnail: 'works/exhibition-space-thumb.webp',
    thumbnailBg: '#040404',
    video: { src: 'works/exhibition-space.mp4', poster: 'works/exhibition-space-poster.webp', caption: '영상을 클릭하면 재생하거나 일시정지할 수 있습니다.' },
    wideImage: { src: 'works/exhibition-space-full-1920.webp', srcSet: 'works/exhibition-space-full-1200.webp 1200w, works/exhibition-space-full-1920.webp 1920w', width: 1920, height: 1080, alt: '시선의 차이 — 세 개의 전시 공간' },
  },
  // 나만의 공간 (My Own Space) — 썸네일은 영상 181번째 프레임 → 영상 '전시공간블렌더영상0001-0250.mp4'
  {
    slug: 'my-own-space',
    title: "나만의 공간",
    category: "3D Modeling & Visualization",
    year: '2025',
    ratio: 'square',
    description: ["나의 취향과 이야기를 하나의 공간에 담아 시각적으로 표현한 3D 프로젝트다.", "손그림으로 공간을 스케치한 뒤 Blender를 활용해 3D로 구현했다. 좋아하는 분홍색을 공간의 주된 색상으로 사용하고, 사랑을 향한 마음은 하트로 표현했다. 좋아하는 꽃과 물은 침대 주변에 배치하고, 내 이름과 발음이 비슷한 체리 모양의 조명을 공간 곳곳에 더했다.\n침대 옆에는 일상에서 빼놓을 수 없는 노트북을 놓았다. 이처럼 나를 나타내는 색과 사물들을 하나씩 채워 넣으며 내가 좋아하는 것들로 이루어진 나만의 공간을 완성했다."],
    thumbnail: 'works/pink-room-thumb.webp',
    video: { src: 'works/pink-room.mp4', poster: 'works/pink-room-poster.webp', caption: '영상을 클릭하면 재생하거나 일시정지할 수 있습니다.' },
  },
  // ── 포스터 6개 (원본 세로 비율 그대로, 잘림 없음) ──
  {
    slug: 'poster-01',
    title: "Different Girl - NMIXX",
    category: "Poster Design",
    year: '2026',
    ratio: 'portrait',
    description: ["NMIXX의 〈Different Girl〉을 듣고 느낀 감정을 시각적으로 표현한 개인 포스터 작업이다.", "포스터에 사용된 모든 문구는 노래 가사에서 가져왔으며, 한국어 가사는 영어로 번역해 배치했다. 평범했던 내 일상에 갑자기 나타난 특별한 존재에게 이끌리고, 그 사람의 모든 것을 알아가고 싶어지는 마음을 담아내고자 했다.", "포스터 하단의 'Who can deny her?'는 크고 굵은 타이포그래피로 바로 위 가사보다 강렬하게 표현했으며, 이어지는 'Different Girl'은 다른 서체를 활용해 차이를 두었다. 또한 외계인이든 공룡이든 어떤 모습이어도 나의 bestie가 되어 달라는 가사를 포인트로 배치해 특별한 존재를 향한 애정을 강조했다."],
    thumbnail: 'works/poster-01-thumb.webp',
    thumbnailSrcSet: 'works/poster-01-thumb-600.webp 600w, works/poster-01-thumb.webp 1000w',
    thumbnailSize: [1000, 1500],
    image: 'works/poster-01-full-2000.webp', // 원본 해상도(2000×3000)
    imageSrcSet: 'works/poster-01-thumb.webp 1000w, works/poster-01-full-2000.webp 2000w',
    imageSize: [2000, 3000],
    imageAlt: "Different Girl - NMIXX 포스터",
  },
  {
    slug: 'poster-02',
    title: "널 따라가 (You, You) - TWS",
    category: "Poster Design",
    year: "2026",
    ratio: 'portrait',
    description: ["투어스의 〈널 따라가 (You, You)〉를 듣고 느낀 청량한 분위기를 시각적으로 표현한 개인 포스터 작업이다.", "포스터에 사용된 모든 문구는 노래 가사에서 가져왔으며, 한국어 가사는 영어로 번역해 배치했다. 노래에서 느껴지는 청량감과 투어스라는 그룹이 가진 밝고 생동감 있는 분위기를 바다 위 반짝이는 윤슬로 표현했다. 메인 타이포그래피는 자간을 좁히고 글자를 세로로 길게 늘려 트렌디한 느낌을, 서브 타이포그래피는 포토샵의 혼합 모드를 활용하여 바닷물같이 투명하고 반짝이는 느낌을 줬다."],
    thumbnail: 'works/poster-02-thumb.webp',
    thumbnailSrcSet: 'works/poster-02-thumb-600.webp 600w, works/poster-02-thumb.webp 1000w',
    thumbnailSize: [1000, 1500], // 썸네일만 2:3 (위아래 단색 확장) — 상세는 원본 4:5
    image: 'works/poster-02-full.webp',
    imageSize: [1080, 1350],
    imageAlt: "널 따라가 (You, You) - TWS 포스터",
  },
  {
    slug: 'poster-03',
    title: "Blue Valentine - NMIXX",
    category: "Poster Design",
    year: '2025',
    ratio: 'portrait',
    description: ["NMIXX의 〈Blue Valentine〉이 담고 있는 애증의 감정을 시각적으로 표현한 개인 포스터 작업이다.", "사랑하기에 미워하면서도 결국 다시 돌아가게 되는 관계를 담은 곡으로, 노래의 분위기와 제목에 등장하는 'Blue'를 반영해 포스터 전체를 푸른빛으로 구성했다.", "특히 가사 중 '우린 마치 broken glass on the ground'에서 영감을 받아 깨진 유리의 흔적과 파편, 유리로 만들어진 듯한 날개를 더했다. 또한 모델의 다른 컷에 포토샵 필터 효과를 적용하고 포스터 곳곳에 배치해 감각적으로 구성했다."],
    thumbnail: 'works/poster-03-thumb.webp',
    thumbnailSrcSet: 'works/poster-03-thumb-600.webp 600w, works/poster-03-thumb.webp 1000w',
    thumbnailSize: [1000, 1500],
    image: 'works/poster-03-full.webp',
    imageSize: [1600, 2400],
    imageAlt: "Blue Valentine - NMIXX 포스터",
  },
  {
    slug: 'poster-04',
    title: "OVERDRIVE - TWS",
    category: "Poster Design",
    year: '2025',
    ratio: 'portrait',
    description: ["투어스의 〈OVERDRIVE〉를 듣고 노래의 분위기를 시각적으로 표현한 개인 포스터 작업이다.", "앨범 커버의 푸른색을 중심으로 포스터의 색감을 구성하고, 노래에서 느껴지는 청량한 분위기를 담아 투어스 특유의 시원하고 밝은 이미지를 표현했다.\n또한 공개된 티저 사진의 천사 컨셉을 반영해 인물 뒤에 날개를 배치하여 티저에서의 분위기를 포스터에도 이어가고자 했다."],
    thumbnail: 'works/poster-04-thumb.webp',
    thumbnailSrcSet: 'works/poster-04-thumb-600.webp 600w, works/poster-04-thumb.webp 1000w',
    thumbnailSize: [1000, 1500],
    image: 'works/poster-04-full.webp',
    imageSize: [1600, 2400],
    imageAlt: "OVERDRIVE - TWS 포스터",
  },
  {
    slug: 'poster-05',
    title: "PAXXWORD - NMIXX",
    category: "Poster Design",
    year: '2026',
    ratio: 'portrait',
    description: ["NMIXX의 〈PAXXWORD〉를 듣고 노래의 분위기를 시각적으로 표현한 개인 포스터 작업이다.", "인터넷에 접속하는 듯한 레트로 전자음에서 영감을 받아, 과거의 인터넷 화면을 연상시키는 분위기를 포스터에 담아내고자 했다.", "레트로한 인터넷 감성을 살리면서도 전체적인 구성에서는 트렌디함을 놓치고 싶지 않았다. 별 모양의 그래픽 요소를 포인트로 활용하고, 타이포그래피와 도형의 배치에 신경 써 두 가지 분위기가 자연스럽게 어우러지도록 작업했다."],
    thumbnail: 'works/poster-05-thumb.webp',
    thumbnailSrcSet: 'works/poster-05-thumb-600.webp 600w, works/poster-05-thumb.webp 1000w',
    thumbnailSize: [1000, 1500],
    image: 'works/poster-05-full.webp',
    imageSize: [1600, 2400],
    imageAlt: "PAXXWORD - NMIXX 포스터",
  },
  {
    slug: 'poster-06',
    title: "BOOM - NMIXX",
    category: "Poster Design",
    year: '2025',
    ratio: 'portrait',
    description: ["NMIXX의 〈BOOM〉이라는 노래 제목에서 연상되는 이미지를 시각적으로 표현한 개인 포스터 작업이다.", "'BOOM'이라는 단어가 주는 폭발적인 느낌에서 영감을 받아 포스터 전체를 카툰 분위기로 구성했으며, 커다란 메인 타이포그래피 주변으로 선이 뻗어 나가는 효과를 더해 글자가 터져 나오는 듯한 느낌을 강조했다.\n또한 말풍선과 별 모양의 그래픽, 여러 장으로 나누어 배치한 인물 사진을 활용해 만화의 한 장면처럼 생동감 있게 표현했다."],
    thumbnail: 'works/poster-06-thumb.webp',
    thumbnailSrcSet: 'works/poster-06-thumb-600.webp 600w, works/poster-06-thumb.webp 1000w',
    thumbnailSize: [1000, 1500], // 썸네일만 2:3 (위아래 단색 확장) — 상세는 원본 4:5
    image: 'works/poster-06-full.webp',
    imageSize: [1080, 1350],
    imageAlt: "BOOM - NMIXX 포스터",
  },
];

/** 예전 주소 → 새 주소 (바뀐 주소로 자동 이동) */
export const slugAliases: Record<string, string> = { 'pink-room': 'my-own-space' };

export const findWork = (slug: string | undefined) => works.find((w) => w.slug === slug);
