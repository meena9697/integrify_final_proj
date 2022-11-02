import React from 'react';
import GoogleLogInComponent from './GoogleLogInComponent';
import HomePage from './Pages/HomePage';
import { Route, Routes } from "react-router-dom";
import ProductsPage from './Pages/ProductsPage';
import RegisterPage from './Pages/RegisterPage';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<HomePage/>} /> 
    <Route path = "/register" element = {<RegisterPage/>} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:product_type" element={<ProductPage />} />

     </Routes>
</div>
  );
}

export default App;

