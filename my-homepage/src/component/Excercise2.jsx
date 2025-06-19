import React, { Component } from 'react';

class Excercise2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: ['Java Core', 'Spring Boot', 'AngularJS', 'ReactJS', 'Integration']
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = this.state.input.trim();
    if (trimmedInput !== '') {
      this.setState((prevState) => ({
        items: [...prevState.items, trimmedInput],
        input: ''
      }));
    }
  }

  handleRemoveAll = () => {
    this.setState({ items: [] });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2><b>Java Sample Approach</b></h2>
        <p><b>Categories:</b></p>
        <ol>
          {this.state.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
        <form onSubmit={this.handleSubmit} style={{ marginTop: '10px' }}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Enter item"
            style={styles.input}
          />
          <button type="submit" style={styles.addBtn}>Add</button>
        </form>
        <button onClick={this.handleRemoveAll} style={styles.removeBtn}>Remove All</button>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '300px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '2px 2px 10px #ccc',
    fontFamily: 'Arial'
  },
  input: {
    padding: '6px',
    width: '60%',
    marginRight: '8px'
  },
  addBtn: {
    padding: '6px 12px'
  },
  removeBtn: {
    marginTop: '10px',
    padding: '6px 12px'
  }
};

export default Excercise2;
