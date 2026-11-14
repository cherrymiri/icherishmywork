import Footer from '../components/Footer';
import { about } from '../data/site';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('ABOUT');
  return (
    <div className="page about-page">
      <div className="inner">
        <p className="section-label">ABOUT</p>
        <div className="about-layout">
          <div>
            <h1 className="page-title">
              {about.headline.map((l, i) => <span key={i}>{l}{i < about.headline.length - 1 && <br />}</span>)}
            </h1>
            <p className="page-intro">{about.intro}</p>
          </div>
        </div>
        <section className="about-extra">
          <h2>WHAT I DO</h2>
          <div>{about.whatIDo.map((t, i) => <p key={i}>{t}</p>)}</div>
        </section>
        <section className="about-extra">
          <h2>TOOLS</h2>
          <div>{about.tools.map((t, i) => <p key={i}>{t}</p>)}</div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
