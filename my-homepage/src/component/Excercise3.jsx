import React, { Component } from 'react';
//import './NoteApp.css'; // Optional for styling

class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['This is just a note.', 'This is just a note.', 'This is just a note.'],
      input: '',
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = () => {
    if (this.state.input.trim() !== '') {
      this.setState((prevState) => ({
        notes: [...prevState.notes, prevState.input],
        input: '',
      }));
    }
  };

  handleRemove = (index) => {
    this.setState((prevState) => {
      const newNotes = prevState.notes.filter((_, i) => i !== index);
      return { notes: newNotes };
    });
  };

  handleRemoveAll = () => {
    this.setState({ notes: [] });
  };

  render() {
    return (
      <div className="note-app" style={styles.noteApp}>
        <h1 style={styles.header}>Java Sample Approach</h1>
        <h3>Java/JavaScript Technology - Spring Framework</h3>
        <p><b>JSA Notes:</b></p>

        {this.state.notes.map((note, index) => (
          <div key={index} style={styles.note}>
            <span>{index + 1}. {note}</span>
            <button onClick={() => this.handleRemove(index)} style={styles.button}>Remove</button>
          </div>
        ))}

        <div style={styles.action}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Add a note"
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>

        <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    );
  }
}

const styles = {
  noteApp: {
    border: '1px dashed blue',
    padding: '20px',
    width: '400px',
    fontFamily: 'Arial',
  },
  header: {
    borderBottom: '1px dotted gray',
  },
  note: {
    border: '1px dashed green',
    padding: '5px',
    marginBottom: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginLeft: '10px',
  },
  action: {
    marginTop: '10px',
    marginBottom: '10px',
  },
};

export default NoteApp;
