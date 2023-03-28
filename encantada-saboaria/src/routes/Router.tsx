import { Routes, Route} from "react-router-dom";
import About from "../pages/about/About";
import Cart from "../pages/cart/Cart";
import Contact from "../pages/contact/Contact";
import HomePage from "../pages/homepage/Homepage";
import Product from "../pages/product/Product";
import ProductPage from "../pages/products/ProductPage";
import Purchase from "../pages/purchase/Purchase";

const Router = () => {
    return(
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contato" element={<Contact/>}/>
                <Route path="/produtos" element={<ProductPage/>}/>
                <Route path="/produto/:id" element={<Product/>}/>
                <Route path="/compras" element={<Purchase/>}/>
                <Route path="/carrinho" element={<Cart/>}/>
                <Route path="/sobre" element={<About/>}/>
            </Routes>
    )
}

export default Router