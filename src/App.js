import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Brand from "./components/Brand";
import ProductDetail from "./components/ProductDetail";
import SearchParamsExample from "./components/SearchParamsExample";

const LazyLoadedAboutPage = React.lazy(() => {
  return import("./components/About");
});

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading..">
              <LazyLoadedAboutPage />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="brand" element={<Brand />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="search-params-example" element={<SearchParamsExample />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
