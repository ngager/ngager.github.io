import * as React from 'react';
import './App.scss';
import Header from "../header/Header";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import TechSkills from "../tech-skills/TechSkills";
import Experience from "../experience/Experience";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import SoftSkills from "../soft-skills/SoftSkills";
import LoadingOverlay from "react-loading-overlay";

type MyProps = {appStyles: string};
type MyState = {loading: boolean};

class App extends React.Component<MyProps, MyState> {

  constructor(props: any) {
    super(props);
    this.state = {
      loading: false
    };
  }

  getClasses() {
    return `app ${this.props.appStyles}`
  }

  printDocument() {
    this.setState({ loading: true });
    const input = document.getElementById('root');
    html2canvas(input as HTMLElement, {scale: 2, foreignObjectRendering: true,  useCORS: true, allowTaint: true})
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({orientation: 'p'});
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
      this.setState({ loading: false });

    });
  }

  render() {
    return <div className={this.getClasses()}>
      <Header/>

        <LoadingOverlay
          active={this.state.loading}
          styles={{
            overlay: (base) => ({
              ...base,
              background: 'rgba(92,108,132,0.86)'
            })
          }}
          spinner>
          <div className="content-container">
            <div className="left-container">
              <Contact/>
              <Education/>
              <TechSkills/>
              <SoftSkills/>
            </div>
            <div className="main-content">
              <button className="pdf-button" onClick={this.printDocument.bind(this)} data-html2canvas-ignore="true">PDF</button>
              <Experience/>
            </div>
          </div>
        </LoadingOverlay>

    </div>;
  }
}

export default App;
