// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook1';
import BookList from './components/BookList1';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar1';

function App() {
  return (
    <Router>
      <div style={{
        maxWidth: 500,
        margin: '30px auto',
        border: '4px solid #eee',
        borderRadius: 8,
        background: 'lightyellow',
        boxShadow: '0 2px 8px #eee',
        padding: 20
      }}>
        <h2 style={{ color: 'purple', marginBottom: 0, marginTop: 10 }}>Java Sample Approach</h2>
        <h3 style={{ color: 'black', marginTop: 0 }}>Book Mangement Application</h3>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/help" element={<div>Help Page</div>} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        {/* Only one Navbar at top and one at bottom, not two in a row */}
        <div style={{ height: 20 }}></div>
      </div>
    </Router>
  );
}

export default App;
