import React, { useEffect, useState } from 'react';
import api from '../api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await api.get('/books');
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await api.delete(`/books/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h3>Book List:</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <a href="#"><b>{book.title}</b></a><br />
            Author: {book.author}<br />
            <p>{book.description}</p>
            <button onClick={() => deleteBook(book.id)}>Remove</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
