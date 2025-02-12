import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/mail.png";
import loctionIcon from "../assets/Loction.png";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
          <div className="contact-header">
            <h1>Contact US</h1>
            <p>Have any questions for us?Dont hesitate to contact us</p>
            <div className="contact-form">
              <form>
                <label>Name *</label>
                <input type="text" placeholder="Enter your name" required />
                <label>Phone Number</label>
                <input type="number" placeholder="Enter your phone" required />
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email" required />
                <label>Message *</label>
                <textarea
                  placeholder="Enter your message..."
                  rows={5}
                  cols={40}
                />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4vcol-xxl-4">
          <div className="contact-us">
            <h3 style={{ fontWeight: "700" }}>Let`s Keep in Touch!</h3>
            <p>
              We would love to hear from you.Contact us for any inquires you
              might have for us
            </p>
            <div className="contacts">
              <div>
                <img src={phoneIcon} alt="Phone" width={25} height={25} />
                <span> +1 (555) 234-567</span>
              </div>
              <div>
                <img src={emailIcon} alt="email" width={20} height={20} />
                <span style={{ marginLeft: "20px" }}>person@gmail.com</span>
              </div>
              <div>
                <img src={loctionIcon} alt="loctian" width={25} height={25} />
                <span> 123 Main Street,Suite 10S, USA</span>
              </div>
            </div>
            <div className="Opening">
              <h4>Opening Hours</h4>
              <div>
                <span>
                  <strong style={{ color: "#000" }}>MON to FRI: </strong>
                  <span> 08:00 AM - 04:00 PM</span>
                </span>
                <br />
                <span>
                  <strong style={{ color: "#000" }}>SAT to SUN: </strong>
                  <span> 09:00 AM - 03:00 PM</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
<div>
  <h1>Contact US</h1>
</div>;
