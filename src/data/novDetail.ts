/**
 * 〈당신의 11월, 어떤 사랑이 응답할까요?〉 상세 페이지 — 확정 원고 (원고 파일에서 그대로 추출, 임의 수정 금지)
 */
export const novDetail = {
  "title": "당신의 11월, 어떤 사랑이 응답할까요?",
  "meta": "Interactive Web Design · 2026",
  "url": "https://november-love-fortune.vercel.app/",
  "heroCaption": "이미지를 클릭하면 체험웹으로 연결됩니다",
  "intro": [
    "웹 기반 인터랙티브 미디어아트를 졸업작품으로 제작한 만큼, 졸업전시 초대장 역시 관람객이 직접 참여할 수 있는 방식으로 만들고 싶었다.",
    "〈당신의 11월, 어떤 사랑이 응답할까요?〉는 여섯 가지 사랑을 주제로 제작한 인터랙티브 웹 초대장이다.",
    "'11월의 사랑을 뽑아보세요' 버튼을 누르면 여섯 장의 카드가 중앙으로 모여 하나의 카드로 합쳐진다. 카드가 뒤집히면 여섯 가지 사랑 중 하나의 운세가 무작위로 나타난다.",
    "관람객은 자신의 사랑 운세를 확인한 뒤, '행운의 시간'과 '행운의 장소'를 확인할 수 있다. 이 두 항목에 실제 졸업전시의 일정과 장소를 담아, 사랑의 운세를 확인하는 경험이 자연스럽게 전시 초대로 이어지도록 구성했다."
  ],
  "heroPc": {
    "srcSet": "works/nov-hero-pc-1440.webp 1440w, works/nov-hero-pc-2400.webp 2400w",
    "src": "works/nov-hero-pc-1440.webp",
    "width": 2400,
    "height": 1500
  },
  "heroMobile": {
    "src": "works/nov-hero-m-780.webp",
    "width": 780,
    "height": 1328
  },
  "steps": [
    {
      "src": "works/nov-step1-780.webp",
      "width": 780,
      "height": 1328,
      "alt": "여섯 장의 카드가 중앙으로 모이는 화면"
    },
    {
      "src": "works/nov-step2-780.webp",
      "width": 780,
      "height": 1328,
      "alt": "카드가 뒤집히고 사랑 운세가 나타난 화면"
    },
    {
      "src": "works/nov-step3-780.webp",
      "width": 780,
      "height": 2330,
      "alt": "행운의 날짜와 행운의 장소를 확인하는 화면"
    }
  ]
} as const;
