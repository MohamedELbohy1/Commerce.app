import React from "react";
import "../styles/Banner.css";
import laptopImage from "../assets/images/iphone.jpg"; // replace with actual image path

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 ">
            <div className="banner-text">
              <h2>Your One-Stop Electronic Market</h2>
              <p>
                Welcome to e-shop, a place where you can buy everything about
                electronics. Sale every day!
              </p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <div className="banner-image">
              <img src={laptopImage} alt="Laptop" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
