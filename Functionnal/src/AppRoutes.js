import "./App.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const ProductsComponent = lazy(() => import("./Components/Products"));
const NotFound = lazy(() => import("./Components/NotFound"));
const ProductDetails = lazy(() => import("./Components/ProductDetails"));

const AppRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading content ...</div>}>
        <Routes>
          <Route exact path="/products" element={<ProductsComponent />} />
          <Route path="/test" element={<ProductsComponent />} />
          <Route path="/products/:name" element={<ProductDetails />} />

          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Suspense>
    </div>
  );
};
export default AppRoutes;
