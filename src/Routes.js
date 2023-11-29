// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Productlist from './Components/Pages/Productlistpage/Productlist';
import ProductDetailsPage from './Components/Pages/ProductDetailsPage/ProductDetailsPage';
import OfflinePage from './Components/common/Offline';
import Notfound from './Components/common/Notfound/Notfound';

const AppRoutes = ({ status }) => (
  <Routes>
    <Route
      exact
      path="/"
      element={status ? <OfflinePage /> : <Home />}
    />
    <Route
      path="/productList"
      element={status ? <OfflinePage /> : <Productlist />}
    />
    <Route
      path="/ProductDetailsPage/:url_key"
      element={status ? <OfflinePage /> : <ProductDetailsPage />}
    />
    <Route
      path="*"
      element={<Notfound/>}
    />
  </Routes>
);

export default AppRoutes;
