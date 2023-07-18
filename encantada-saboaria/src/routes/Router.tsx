import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/Homepage";
import Contact from "../pages/contact/Contact";
import ProductPage from "../pages/products/ProductPage";
import Product from "../pages/product/Product";
import Wish from "../pages/wish/Wish";
import Cart from "../pages/cart/Cart";
import About from "../pages/about/About";
import Purchase from "../pages/purchase/Purchase";
import NotFound from "../pages/notFound/notFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/produtos" element={<ProductPage />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/desejo" element={<Wish />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
