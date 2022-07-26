import React from 'react';
import Header from './container/Header.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductComponent from './container/ProductComponent.js';
import ProductDetail from './container/ProductDetail.js';
import ProductorListing from './container/ProductorListing.js';
import "./App.css";

const App = () => {
  return (
    <div className='App'>
  <Router>
  <Header/>
  <Routes>
     <Route path='/' element={<ProductorListing/>} />
     <Route path='/product/:productId' element={<ProductDetail/>} />
     <Route> 404 not found!</Route> 
     </Routes>
    </Router>
    </div>
  )
}

export default App