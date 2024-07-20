import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import ProductListingPage from '../Pages/ProductListingPage/ProductListingPage';
import ProductViewPage from '../Pages/ProductViewPage/ProductViewPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lista-de-produtos" element={<ProductListingPage />} />
      <Route path="/produto" element={<ProductViewPage />} />
    </Routes>
  );
}

export default AppRoutes;
