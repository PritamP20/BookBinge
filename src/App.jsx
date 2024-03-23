import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Seller from './components/Seller';
import Books from './components/Books';
import Demand from './components/Demand';
import Footer from './components/Footer';
import Carosal from './components/Carosal';
import Genre from './components/Genre'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Router>
        <Navbar />
        <Carosal />
        <Category/>
        <Books/>
        <Demand/>
        <Routes>
          <Route path='/' element={<Category />} />
          <Route path='/genre/:genre' element={<Genre />} />
          <Route path='/books' element={<Books />} />
          <Route path='/demand' element={<Demand />} />
          <Route path='/seller' element={<Seller />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;

