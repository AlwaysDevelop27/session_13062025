import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '500px', margin: 'auto' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
