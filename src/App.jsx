import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Seller from './components/Seller';
import Books from './components/Books';
import Demand from './components/Demand';
import Footer from './components/Footer';
import Carosal from './components/Carosal';
import Genre from './components/Genre';
import Viwe from './components/Viwe';
import Cart from './components/cart';
import SignIn from './components/SignIn';
import Portfolio from './components/Portfolio';
import Logo from './components/Logo';

function App() {
  
  const Dashboard = () => (
    <div>
      <Navbar></Navbar>
      <Logo></Logo>
      <Carosal />
      <Category />
      <Books />
      <Demand />
      <Footer></Footer>
    </div>
  );

  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/genre/:genre" element={<Genre />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/view" element={<Viwe />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} /> {/* Sign-in route */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio route */}
        </Routes>
      
    </Router>
  );
}

export default App;
