import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Seller from './components/Seller';
import Books from './components/Books';
import Demand from './components/Demand';
import Footer from './components/Footer';
import Genre from './components/Genre'; // 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}/>
        <Route path='/category' element={<Category />}/>
        {/* Adjust the Route for the Genre component */}
        <Route path="/genre/:genre" element={<Genre />} />
        {/* Ensure that the Genre component receives the genre parameter */}
        <Route path='/' element={<Books />}/>
        <Route path='/' element={<Demand />}/>
        <Route path='/seller' element={<Seller />}/>
        <Route path='/fo' element={<Footer />}/>
      </Routes>
    </Router>
  )
}

export default App;
