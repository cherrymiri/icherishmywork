# icherishmywork

개인 디자인 포트폴리오 — V5 프로토타입 디자인을 React + Vite + TypeScript로 옮긴 사이트입니다.

## 내용 바꾸기 (코드 몰라도 되는 곳)

| 바꿀 것 | 파일 |
|---|---|
| 작업물 11개 (제목·분야·연도·설명·이미지·비율·체험 링크) | `src/data/works.ts` |
| ABOUT 소개 문구, 작업 분야, 사용 도구 | `src/data/site.ts` → `about` |
| CONTACT 소개 문구, 이메일, 인스타그램 | `src/data/site.ts` → `contact` |
| Motion & Video 영상 목록 | `src/data/site.ts` → `videos` |
| 이미지 파일 | `public/works/` 폴더에 넣기 |

이미지 비율(`ratio`)
- `portrait` 세로형 / `square` 정사각형 → PC: 왼쪽 이미지 + 오른쪽 설명
- `wide` 가로형 → PC: 위 이미지 + 아래 설명
- 모바일은 모두 위에서 아래 순서로 배치됩니다.

권장 이미지: WebP 또는 JPG, 썸네일 약 1200px, 대표 이미지 긴 변 2000px 이하.

## 주소 구조

| 페이지 | 주소 |
|---|---|
| HOME | `/` |
| 작품 상세 | `/works/작품-slug` |
| ABOUT | `/about` |
| CONTACT | `/contact` |
| Motion & Video | `/motion-video` |

## 실행 (개발자용)

```bash
npm install
npm run dev      # 로컬 미리보기 http://localhost:5173
npm run build    # 배포용 빌드 → dist/
```

## Vercel 배포

1. 이 폴더를 GitHub 저장소에 올립니다.
2. vercel.com → Add New → Project → 저장소 선택 → Deploy (설정 변경 필요 없음, Vite 자동 인식).
3. 이후 GitHub에 변경을 올리면 자동으로 다시 배포됩니다.

`vercel.json`에 새로고침 시 404가 나지 않도록 하는 설정이 들어 있습니다.
