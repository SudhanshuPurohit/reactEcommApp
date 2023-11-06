import React, { useEffect, useState } from 'react'
import Home from './pages/Home';
import ReactLoading from 'react-loading';

import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Registerpage';
import Allproducts from './pages/Allproducts';
import Productdetail from './components/Productdetail';
import Cart from './components/Cart';

const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/allproduct" element={<Allproducts />}> </Route>
        <Route path="/details/:id" element={<Productdetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
     
    </>
  )
}

export default App;