import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/mail.png";
import loctionIcon from "../assets/Loction.png";
import viseIcon from "../assets/visa.png";
import cardIcon from "../assets/money.png";
import payIcon from "../assets/paypal.png";
import paypalIcon from "../assets/apple-pay.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-4">
            <div class="more-details">
              <h3 style={{ marginBottom: "60px", fontWeight: "bold" }}>
                Online Shopping
              </h3>
              <div class="contact">
                <div>
                  <img src={phoneIcon} alt="Phone" width={25} height={25} />
                  <span> +1 (555) 234-567</span>
                </div>
                <div>
                  <img src={emailIcon} alt="email" width={20} height={20} />
                  <span style={{ marginLeft: "30px" }}>person@gmail.com</span>
                </div>
                <div>
                  <img src={loctionIcon} alt="loctian" width={25} height={25} />
                  <span> 123 Main Street,Suite 10S, USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mb-4">
            <div className="footer-links">
              <header>
                <h3>Links</h3>
              </header>
              <article>
                <ul>
                  <li>
                    <a href="/">Products List</a>
                  </li>
                  <li>
                    <a href="/">Order Tracking</a>
                  </li>
                  <li>
                    <a href="/">Products Guide</a>
                  </li>
                  <li>
                    <a href="/">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="/">Tech Blog</a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mb-4">
            <div className="footer-links">
              <header>
                <h3>Supports</h3>
              </header>
              <article>
                <ul>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Return Policy</a>
                  </li>
                  <li>
                    <a href="/">Help Center</a>
                  </li>
                  <li>
                    <a href="/">Store Locations</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mb-4">
            <div className="footer-links">
              <header>
                <h3>Categories</h3>
              </header>
              <article>
                <ul>
                  <li>
                    <a href="/">Computers</a>
                  </li>
                  <li>
                    <a href="/">Phones&Accessories</a>
                  </li>
                  <li>
                    <a href="/">Audio&Headphones</a>
                  </li>
                  <li>
                    <a href="/">Home Applicanes</a>
                  </li>
                  <li>
                    <a href="/">Home Theater</a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mb-4">
            <div className="footer-links">
              <header>
                <h3>Payments</h3>
              </header>
              <article>
                <img
                  src={viseIcon}
                  alt="visa card"
                  width={45}
                  height={30}
                  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
                <img
                  src={cardIcon}
                  alt="card"
                  width={45}
                  height={30}
                  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
                <img
                  src={payIcon}
                  alt="pay-card"
                  width={45}
                  height={30}
                  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
                <img
                  src={paypalIcon}
                  alt="paypal-card"
                  width={45}
                  height={30}
                  style={{ backgroundColor: "#fff", borderRadius: "8px" }}
                />
              </article>
              <header>
                <h3 style={{ marginTop: "40px" }}>Follow Us</h3>
              </header>
              <div class="social-media">
                <ul>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">Instagram</a>
                  </li>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
