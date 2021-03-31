import * as React from 'react';
import './App.scss';
import Header from "../header/Header";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";

class App extends React.Component<{appStyles: string}> {
  constructor(props: any) {
    super(props);
    console.log('props:', props);
    this.state = {};
  }

  getClasses() {
    return `app ${this.props.appStyles}`
  }

  render() {
    return <div className={this.getClasses()}>
      <Header/>
      <div className="flex">
        <div className="left-container">
          <Contact/>
          <Education/>
          <Skills/>
        </div>
        <div className="main-content">
          <Experience/>
        </div>
      </div>
    </div>;
  }
}

export default App;
