import React from 'react'
import Home from './pages/Home.jsx';
import Header from './components/Header';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Product from './pages/Product.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:name' element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App;