import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <h2>Programmig fun </h2>
        <h3>More Exiciting More Fun</h3>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
