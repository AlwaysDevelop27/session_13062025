// components/BookList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
  const books = [
    { id: 1, name: 'Book 1' },
    { id: 2, name: 'Book 2' },
    { id: 3, name: 'Book 3' },
  ];

  return (
    <div>
      <h4 style={{ textAlign: 'left', marginLeft: 30, marginTop: 0 }}>Book List:</h4>
      <ul style={{ textAlign: 'left', marginLeft: 50 }}>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`} style={{ color: 'purple', textDecoration: 'underline' }}>{book.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
