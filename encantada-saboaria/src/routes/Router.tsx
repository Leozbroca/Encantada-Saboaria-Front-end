import { Routes, Route} from "react-router-dom";
import Contact from "../pages/contact/Contact";
import HomePage from "../pages/homepage/Homepage";
import ProductPage from "../pages/products/ProductPage";

const Router = () => {
    return(
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contato" element={<Contact/>}/>
                <Route path="/produtos" element={<ProductPage/>}/>
            </Routes>
    )
}

export default Router