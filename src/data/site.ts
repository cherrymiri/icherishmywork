/** ABOUT · CONTACT · Motion & Video 내용 — 확정되면 여기서 수정하세요. */

export const about = {
  headline: ['텍스트를', '입력하세요.'], // 줄 단위
  intro: '자기소개 텍스트를 입력하세요.\n\n작업에 대한 생각이나 나를 소개하는 문구를\n나중에 이 자리에 넣을 수 있습니다.',
  whatIDo: ['작업 분야를 입력하세요.', 'Graphic Design　/　Interactive Media　/　3D'],
  tools: ['사용 도구를 입력하세요.'],
};

export const contact = {
  intro: '텍스트를 입력하세요.',
  email: 'yes_021@naver.com',
  instagram: 'icherishmywork',
};

export interface Video {
  title: string;
  category: string; // 예: Motion Graphic / Longform / Shortform
  year?: string;
  url?: string; // 유튜브·비메오 등 링크
}

/** 영상 작업 목록. 비어 있으면 임시 항목이 표시됩니다. */
export const videos: Video[] = [];
export const videoPlaceholderCategories = ['Motion Graphic', 'Longform', 'Shortform'];
