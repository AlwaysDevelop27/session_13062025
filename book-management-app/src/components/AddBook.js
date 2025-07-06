import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [book, setBook] = useState({ title: '', author: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/books', book);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Book</h3>
      <input name="title" placeholder="Title" onChange={handleChange} required /><br />
      <input name="author" placeholder="Author" onChange={handleChange} required /><br />
      <textarea name="description" placeholder="Description" onChange={handleChange} required /><br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBook;
