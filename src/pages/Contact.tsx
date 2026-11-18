import Footer from '../components/Footer';
import { contact } from '../data/site';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Arrow = () => (
  <svg className="ct-arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3.5 12.5 12.5 3.5M5 3.5h7.5V11" fill="none" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export default function Contact() {
  useDocumentTitle('CONTACT');
  return (
    <div className="page ct-page">
      <div className="ct-wide">
        <h1 className="ct-title">CONTACT</h1>
        <ul className="ct-list">
          <li>
            <a className="ct-row" href={`mailto:${contact.email}`}>
              <span className="ct-label">EMAIL</span>
              <span className="ct-value">{contact.email}</span>
              <Arrow />
            </a>
          </li>
          <li>
            <a className="ct-row" href={`https://www.instagram.com/${contact.instagram}/`} target="_blank" rel="noopener noreferrer">
              <span className="ct-label">INSTAGRAM</span>
              <span className="ct-value">@{contact.instagram}</span>
              <Arrow />
            </a>
          </li>
        </ul>
        <Footer hideContact />
      </div>
    </div>
  );
}
