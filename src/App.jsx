import React from "react";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation } from "react-router-dom";

// pages
import CartPage from "./page/CartPage";
import HomePage from "./page/Homepage";
import Layout from "./component/Layout";
import LoginPage from "./page/LoginPage";
import PageNotFound from "./page/PageNotFound";
import DirectBuyPage from "./page/DirectBuyPage";
import ProductDetailPage from "./page/ProductDetailPage";
import ProductSearchResultPage from "./page/ProductSearchResultPage";
import { NonUserAuth, UserAuth } from "./component/Authenticate/Authenticate";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/product/cari/:searchParams" element={<ProductSearchResultPage />} />
            <Route path="/category/:category" element={<ProductSearchResultPage />} />
            <Route
              path="/cart"
              element={
                <UserAuth>
                  <CartPage />
                </UserAuth>
              }
            />
            <Route
              path="/beli-langsung"
              element={
                <UserAuth>
                  <DirectBuyPage />
                </UserAuth>
              }
            />
          </Route>
          <Route>
            <Route
              path="/login"
              element={
                <NonUserAuth>
                  <LoginPage />
                </NonUserAuth>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
