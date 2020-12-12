import * as React from 'react';
import './App.scss';

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
    return <div className={this.getClasses()}>TES</div>;
  }
}

export default App;
