import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Category from './components/Category';
import Navbar from './components/Navbar';
import Seller from './components/Seller';
import Books from './components/Books';
import Demand from './components/Demand';
import Footer from './components/Footer';
import Carosal from './components/Carosal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Router>
      <Navbar></Navbar>
      <Carosal></Carosal>
      <Category></Category>
      <Books></Books>
      <Demand></Demand>
      <Routes>
        <Route path='/seller' element={<Seller/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
