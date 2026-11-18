import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import WorkDetail from './pages/WorkDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import FilmVideo from './pages/FilmVideo';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import './styles/global.css';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'works/:slug', element: <WorkDetail /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'film-video', element: <FilmVideo /> },
      { path: 'motion-video', element: <Navigate to="/film-video" replace /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
];

const router = import.meta.env.VITE_HASH_ROUTER === '1' ? createHashRouter(routes) : createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
