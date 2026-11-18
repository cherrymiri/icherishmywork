import { Link } from 'react-router-dom';

/** hideContact: CONTACT 페이지에서 중복 링크를 숨김(자리는 유지해 높이·정렬 그대로). */
export default function Footer({ hideContact = false }: { hideContact?: boolean }) {
  return (
    <footer className="footer">
      <small>© 2026 icherishmywork</small>
      {hideContact
        ? <span className="footer-placeholder" aria-hidden="true">CONTACT ↗</span>
        : <Link to="/contact">CONTACT ↗</Link>}
    </footer>
  );
}
