import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Step 1: Initialize state
    this.state = {
      count: 0
    };
  }

  // Step 2: Method to increment count
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  // Step 3: Method to decrement count
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  // Step 4: Method to reset count
  reset = () => {
    this.setState({ count: 0 });
  }

  // Step 5: Render method
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Counter App (Class Component)</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment} style={{ margin: '5px' }}>Add+</button>
        <button 
          onClick={this.decrement} 
          style={{ margin: '5px' }}
          disabled={this.state.count <= 0}
        >Minus-</button>
        <button onClick={this.reset} style={{ margin: '5px' }}>Reset</button>
      </div>
    );
  }
}

export default Counter;
