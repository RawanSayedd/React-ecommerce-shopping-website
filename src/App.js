import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="http://rawansayedd.github.io/React-ecommerce-shopping-website/"
              element={<Shop />}
            />
            <Route
              path="http://rawansayedd.github.io/React-ecommerce-shopping-website/contact"
              element={<Contact />}
            />
            <Route
              path="http://rawansayedd.github.io/React-ecommerce-shopping-website/cart"
              element={<Cart />}
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
