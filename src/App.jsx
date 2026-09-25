import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import AboutPage from "./pages/AboutPage";
import ShippingPage from "./pages/ShippingPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import AccountPage from "./pages/AccountPage";
import SearchPage from "./pages/SearchPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Catalog />} />
          <Route path="category/:slug" element={<Catalog />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order/:id" element={<ConfirmationPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
}
