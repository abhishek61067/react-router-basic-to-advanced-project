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

const LazyLoadedAboutPage = React.lazy(() => {
  return import("./components/About");
});

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Suspense is used to show loader. i.e. showing fallback until the child component is loaded */}
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
          {/* nested route */}
          <Route index element={<Featured />} />
          <Route path="brand" element={<Brand />} />
          {/* dynamic route and also the nested route so nested dynamic route */}
          {/* dynamic route are those route whose path is not specified */}
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
