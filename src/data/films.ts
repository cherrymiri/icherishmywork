/** FILM & VIDEO 아카이브 — 원고는 최종 확정본(수정 금지). */
export interface FilmItem {
  title: string;
  category: string;
  periodLabel: string;
  period: string;
  description: string[];
  youtube?: string;
  photos?: string[];
}

export const films: FilmItem[] = [
  {
    "title": "인연하다",
    "category": "Documentary Film · Writing & Lighting",
    "periodLabel": "제작 기간",
    "period": "2024.10 – 2025.02",
    "description": [
      "다큐멘터리 〈인연하다〉에 작가와 조명부원으로 참여했다. 작가로서 자료 조사와 인터뷰 대상자 선정, 질문지 및 스크립트 작성을 맡았으며, 촬영 현장에서는 조명 기기를 세팅하고 빛의 세기와 각도를 조절했다.",
      "해당 작품은 2025년 충무로독립단편영화제에서 수상작으로 선정됐다."
    ],
    "photos": [
      "/works/inyeon-1.webp",
      "/works/inyeon-2.webp"
    ]
  },
  {
    "title": "학보사 브이로그",
    "category": "Longform · Video Editing",
    "periodLabel": "제작 시기",
    "period": "2024.07",
    "description": [
      "교내 학보사의 일상을 담은 브이로그를 편집했다. 프리미어 프로를 활용해 장면이 자연스럽게 이어지도록 컷을 편집했으며, 장면의 분위기에 맞춰 자막의 글꼴과 색상을 선택하고 키프레임으로 움직임을 더했다."
    ],
    "youtube": "https://youtu.be/Iki-tPRClCc?si=_H8ZTj78K9bhM0NB"
  },
  {
    "title": "영상 편집 튜토리얼",
    "category": "Shortform · Video Editing",
    "periodLabel": "제작 시기",
    "period": "2025.04",
    "description": [
      "애프터이펙트로 네온사인 효과를 만드는 과정을 소개하는 숏폼 튜토리얼 영상이다. 작업 과정을 직접 녹화한 뒤 프리미어 프로로 컷을 편집하고 필요한 자막을 추가했으며, 배경에 블러 효과를 적용해 편집 과정에 집중할 수 있도록 구성했다."
    ],
    "youtube": "https://youtube.com/shorts/e5XQX1NdK80?si=tS5J0sk4wyV9sW5v"
  },
  {
    "title": "1분 브리핑 영상",
    "category": "Shortform · Video Editing",
    "periodLabel": "제작 시기",
    "period": "2024.06",
    "description": [
      "학보사 기자들이 뽑은 베스트 5월 학보를 소개하기 위해 제작한 1분 브리핑 영상이다. 스토리보드 작성부터 촬영까지 직접 진행했으며, 프리미어 프로로 컷 편집과 색 보정, 자막 작업을 했다."
    ],
    "youtube": "https://youtube.com/shorts/ejBQOm7dNNY?si=Pi6Q2mGyA4zpT7Vt"
  }
];
