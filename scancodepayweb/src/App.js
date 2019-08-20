import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './input.js';
import Form from './jsx/form.js'

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
          <h1 className={"word_hello"}>hello  {this.state.var} </h1>
            <button className={"name_button"} onClick={this.command = this.command.bind(this)}>changename</button>
            {/*<Input></Input>*/}

            <Form></Form>

        </div>
    );
  }
}

export default App;
