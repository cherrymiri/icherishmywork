import Footer from '../components/Footer';
import { contact } from '../data/site';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('CONTACT');
  return (
    <div className="page">
      <div className="inner">
        <h1 className="page-title">CONTACT</h1>
        <div className="contact-layout">
          <div><p className="page-intro">{contact.intro}</p></div>
          <div>
            <a className="contact-line" href={`mailto:${contact.email}`}>
              <strong>EMAIL</strong><span>{contact.email} ↗</span>
            </a>
            <a className="contact-line" href={`https://www.instagram.com/${contact.instagram}/`} target="_blank" rel="noopener noreferrer">
              <strong>INSTAGRAM</strong><span>@{contact.instagram} ↗</span>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
