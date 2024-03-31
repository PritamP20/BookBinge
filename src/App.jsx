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
import Viwe from './components/Viwe';
import Cart from './components/cart';

function App() {
  const [count, setCount] = useState(0)

  const isMainWebsite = location.pathname === '/';


  const Dashboard = () => {
    return (
      <div>
        <Carosal />
        <Category />
        <Books />
        <Demand />
      </div>
    )
  }

  return (
    <div className=''>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/category' element={<Category />} />
          <Route path='/genre/:genre' element={<Genre />} />
          <Route path='/seller' element={<Seller />} />
          <Route path='/view' element={<Viwe />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {isMainWebsite && <Footer />} 
        
      </Router>
    </div>
  )
}

export default App;
