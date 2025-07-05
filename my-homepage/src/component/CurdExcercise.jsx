import React, { Component } from 'react';

class MemberTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        { firstName: 'Neovic', lastName: 'Devierte', address: 'Silay City' },
        { firstName: 'Julyn', lastName: 'Divinagracia', address: 'E.B. Magalona' },
        { firstName: 'Gemalyn', lastName: 'Cepe', address: 'Bohol' },
        { firstName: 'Matet', lastName: 'Devierte', address: 'Silay City' },
        { firstName: 'Tintin', lastName: 'Devierte', address: 'Silay City' },
      ],
      searchTerm: '',
      isEditing: false,
      editIndex: null,
      newMember: { firstName: '', lastName: '', address: '' },
    };
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newMember: { ...prevState.newMember, [name]: value },
    }));
  };

  handleAdd = () => {
    if (
      this.state.newMember.firstName.trim() &&
      this.state.newMember.lastName.trim() &&
      this.state.newMember.address.trim()
    ) {
      this.setState((prevState) => ({
        members: [...prevState.members, prevState.newMember],
        newMember: { firstName: '', lastName: '', address: '' },
      }));
    }
  };

  handleEdit = (index) => {
    const selected = this.state.members[index];
    this.setState({
      newMember: { ...selected },
      isEditing: true,
      editIndex: index,
    });
  };

  handleUpdate = () => {
    const updatedMembers = [...this.state.members];
    updatedMembers[this.state.editIndex] = this.state.newMember;
    this.setState({
      members: updatedMembers,
      newMember: { firstName: '', lastName: '', address: '' },
      isEditing: false,
      editIndex: null,
    });
  };

  handleDelete = (index) => {
    const updated = this.state.members.filter((_, i) => i !== index);
    this.setState({ members: updated });
  };

  render() {
    const { members, searchTerm, newMember, isEditing } = this.state;
    const filtered = members.filter(
      (m) =>
        m.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div style={styles.container}>
        <h2>Member List</h2>

        <div style={styles.topBar}>
          <button style={styles.newButton}>+ New Member</button>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={this.handleSearch}
            style={styles.search}
          />
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>First Name</th>
              <th style={styles.th}>Last Name</th>
              <th style={styles.th}>Address</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((member, index) => (
              <tr key={index}>
                <td style={styles.td}>{member.firstName}</td>
                <td style={styles.td}>{member.lastName}</td>
                <td style={styles.td}>{member.address}</td>
                <td style={styles.td}>
                  <button style={styles.edit} onClick={() => this.handleEdit(index)}>Edit</button>
                  <button style={styles.delete} onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>{isEditing ? 'Edit Member' : 'Add New Member'}</h3>
        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newMember.firstName}
            onChange={this.handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newMember.lastName}
            onChange={this.handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={newMember.address}
            onChange={this.handleChange}
            style={styles.input}
          />
          <button onClick={isEditing ? this.handleUpdate : this.handleAdd} style={styles.add}>
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '90%',
    margin: '20px auto',
    fontFamily: 'Arial',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  newButton: {
    padding: '6px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  search: {
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ccc',
    marginBottom: '20px',
  },
  th: {
    border: '1px solid #ccc',
    padding: '8px',
    backgroundColor: '#f2f2f2',
  },
  td: {
    border: '1px solid #ccc',
    padding: '8px',
  },
  input: {
    margin: '5px',
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  add: {
    padding: '6px 12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  edit: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    marginRight: '5px',
    borderRadius: '4px',
  },
  delete: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default MemberTable;