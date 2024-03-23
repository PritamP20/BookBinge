import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Seller from './components/Seller';
import Books from './components/Books';
import Demand from './components/Demand';
import Footer from './components/Footer';
import Carosal from './components/Carosal';
import Genre from './components/Genre'; // 
import Viwe from './components/Viwe';

function App() {
  const [count, setCount] = useState(0)

  const DashBoard = ()=>{
    return(
      <div>
      <Carosal></Carosal>
      <Category></Category>
      <Books></Books>
      <Demand></Demand>
    </div>
    )
    
  }

  return (
    <div className=''>
      <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/view' element={<Viwe/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  )
}

export default App;
