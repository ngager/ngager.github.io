import * as React from 'react';
import './App.scss';
import Header from "../header/Header";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Skills from "../skills/Skills";

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
      <div className="h-100">
        <Contact/>
        <Education/>
        <Skills/>
      </div>
    </div>;
  }
}

export default App;
