import React from 'react';
import GoogleLogInComponent from './GoogleLogInComponent';
import HomePage from './Pages/HomePage';
import { Route, Routes } from "react-router-dom";
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<HomePage />} /> 
    <Route path="/products" element={<ProductsPage />} />
     </Routes>
</div>
  );
}

export default App;

