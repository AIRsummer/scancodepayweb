import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test.js';

class App extends Component {
  constructor (pros) {
    super(pros)
    this.state = {
      var:"mike"
    }
  }
  render() {
    return (
        <div className="App">
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
          <a>hello</a>
          {this.state.var}
          <Test></Test>
        </div>
    );
  }
}

export default App;
