import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
