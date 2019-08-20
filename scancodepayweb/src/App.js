import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test.js';

class App extends Component {
  constructor (pros) {
    super(pros)
    this.state = {
        var:"mike",
        count:1
    }
  }

  command(){
      this.setState({
          count:this.state.count+1
      });
      if (this.state.count % 2) {
          this.setState({
              var: "mike"
          });
      } else {
          this.setState({
              var: "Summer"
          })
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
          <a>hello  </a>
          {this.state.var}
            <button onClick={this.command = this.command.bind(this)}>changename</button>
          <Test></Test>
        </div>
    );
  }
}

export default App;
