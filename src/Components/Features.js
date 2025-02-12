import React from "react";
import "../styles/Features.css";
import products from "../data/products";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AddToCartButton from "./AddToCart";

function Features() {
  const limitproducts = products.slice(0, 8);
  return (
    <>
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
            <div className="feature">
              <h3>
                {
                  <img
                    src="/images/headphones.png"
                    alt="Resp"
                    width={40}
                    height={40}
                    style={{ marginInline: "10px" }}
                  />
                }
                Responsive
              </h3>
              <p>Customer service available 24/7</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
            <div className="feature">
              <h3>
                {
                  <img
                    src="/images/verified.png"
                    alt="Secure"
                    width={40}
                    height={40}
                    style={{ marginInline: "10px" }}
                  />
                }
                Secure
              </h3>
              <p>Certified marketplace since 2017</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
            <div className="feature">
              <h3>
                {
                  <img
                    src="/images/shipped.png"
                    alt="Shipped"
                    width={40}
                    height={40}
                    style={{ marginInline: "10px" }}
                  />
                }
                Shipping
              </h3>
              <p>Free, fast, and reliable worldwide</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
            <div className="feature">
              <h3>
                {
                  <img
                    src="/images/transparency.png"
                    alt="trans"
                    width={40}
                    height={40}
                    style={{ marginInline: "10px" }}
                  />
                }
                Transparent
              </h3>
              <p>Hassle-free return policy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery" style={{ marginBlock: "80px" }}>
        <h1>Products</h1>
        {limitproducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <h3>{product.name}</h3>
            <p id="product-shortDescription">{product.shortDescription}</p>
            <p id="product-price">${product.price}</p>
            <Link to={`/product/${product.id}`}>Read More</Link>
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
