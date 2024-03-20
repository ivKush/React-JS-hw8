import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/mainPage';
import Catalog from './pages/catalogPage';
// import Product_page from './pages/productPage'
import RegistrationPage from './pages/registrationPage'
import CartPage from './pages/cartPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Catalog" element={<Catalog />} />
        {/* <Route path="/Product" element={<ProductsPage />} /> */}
        <Route path="/Registration" element={<RegistrationPage />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
      // <Product_page />
  );
}

export default App;
