import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./Context";
import { lastCartItems } from "../data/products";

const AddToCartButton = ({ product }) => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  const handleAddToCart = () => {
    if (isAuthenticated) {
      lastCartItems.push(product);
      history.push("/cart");
    } else {
      history.push("/Register");
    }
  };

  return (
    <button onClick={handleAddToCart} className="addcart">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
