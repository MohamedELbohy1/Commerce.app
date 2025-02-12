import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to E-Shop, your number one source for all things
            electronics. We're dedicated to providing you the best of electronic
            gadgets, with a focus on dependability, customer service, and
            uniqueness.
          </p>
          <p>
            Founded in 2023, E-Shop has come a long way from its beginnings.
            When we first started out, our passion for eco-friendly and smart
            gadgets drove us to start our own business.
          </p>
        </div>
        <div className="about-image">
          {/* Use an image from the web instead of a local image */}
          <img
            src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Electronics Board"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
