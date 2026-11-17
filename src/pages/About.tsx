import { Fragment } from 'react';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const TOOLS = ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Blender', 'Claude'];

export default function About() {
  useDocumentTitle('ABOUT');
  return (
    <div className="page about-page">
      <div className="about-wide">
        <div className="about-grid">
          <p className="section-label about-label">ABOUT</p>
          <div className="about-body">
            <h1 className="about-headline">I cherish my work.</h1>
            <div className="about-text">
              <p>나에게 디자인은 무에서 유를 만들어내는 일이다. 머릿속에만 존재하던 생각을 눈앞의 결과물로 만들어내고 그 안에 나만의 취향과 감각을 담는 것을 좋아한다.</p>
              <p>음악과 일상의 다양한 순간에서 영감을 얻으며 따뜻하고 사랑스러운 것들에 마음이 끌린다. 새로운 트렌드를 받아들이면서도 그 안에서 나만의 색을 잃지 않으려 노력한다.</p>
              <p>그래픽 디자인부터 3D, 인터랙티브 웹과 미디어아트까지 다양한 분야를 넘나들며 작업한다. 단순히 보기 좋은 결과물을 넘어, 작품에 담은 의미가 보는 사람에게 전해지기를 바란다. <br className="pc-br" />특히 인터랙티브 작업은 누군가 직접 참여하고 반응하는 순간 비로소 완성된다고 생각한다.</p>
              <p>내가 의도한 것이 작품에 잘 드러나고, 그 의미가 관람객에게 전달되는 것. 그리고 그 과정에서 예상하지 못했던 새로운 반응을 만나는 것까지, 모두 내가 작업을 계속하고 싶은 이유다.</p>
              <p><strong>cherish</strong>는 아끼고 소중히 여긴다는 뜻을 가진 단어다. 내가 만든 작업을 누구보다 좋아하고 아끼는 마음을 담아, 이 공간을 <strong>icherishmywork</strong>라고 이름 지었다.</p>
            </div>
            <section className="about-tools">
              <h2>TOOLS</h2>
              <p>{TOOLS.map((t, i) => <Fragment key={t}><span className="tool">{t}</span>{i < TOOLS.length - 1 && ' · '}</Fragment>)}</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
