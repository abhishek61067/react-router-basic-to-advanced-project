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
import Login from "./utils/auth/Login";
import Profile from "./components/Profile";
import AuthProtectedWrapper from "./utils/auth/AuthProtectedWrapper";
import { Suspense, lazy } from "react";
import About from "./components/About";

// const About = lazy(() => {
//   return import("./components/About");
// });

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback="loading..">
              <About />
            </Suspense>
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
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <AuthProtectedWrapper>
              <Profile />
            </AuthProtectedWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
