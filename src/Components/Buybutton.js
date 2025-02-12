import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./Context";

const BuyButton = ({ product }) => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  const handleBuy = () => {
    if (isAuthenticated) {
      alert("The Product is Suceessfully Buying");
      history.push("/");
    } else {
      history.push("/register");
    }
  };

  return (
    <button
      type="submit"
      onClick={handleBuy}
      className="buy-btn-2 btn btn-primary"
    >
      Buy Now
    </button>
  );
};

export default BuyButton;
