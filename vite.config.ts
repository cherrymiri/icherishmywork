import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_HASH_ROUTER=1 → 단일 HTML 미리보기용(상대 경로 + 해시 주소). 기본(Vercel)은 일반 주소.
const hash = process.env.VITE_HASH_ROUTER === '1';

export default defineConfig({
  base: hash ? './' : '/',
  plugins: [react()],
});
