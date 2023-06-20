import Home from "./pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Products/Product";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products/:cat" element={<Product />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
