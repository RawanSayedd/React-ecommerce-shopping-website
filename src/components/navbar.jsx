import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="http://rawansayedd.github.io/React-ecommerce-shopping-website/">
          Shop{" "}
        </Link>
        <Link to="http://rawansayedd.github.io/React-ecommerce-shopping-website/contact">
          Contact{" "}
        </Link>
        <Link to="http://rawansayedd.github.io/React-ecommerce-shopping-website/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
