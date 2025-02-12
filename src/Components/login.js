import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./Context";
import google from "../assets/search.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState("");
  const { registeredUser, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (
      registeredUser &&
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      const role = login(email, password);
      if (role === "Admin") {
        history.push("/dashboard"); // Redirect Admin to dashboard
      } else {
        history.push("/"); // Redirect regular users to cart
      }
      // history.push("/");
    } else {
      setError("Invalid email or password");
    }

    console.log("Logging in", { email, password });

    // handleLogin();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-heading">Sign in</h1>
        <div class="mb-3">
          <label htmlFor="email" class="form-label">
            Email*
          </label>
          <input
            class="form-control"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="password" class="form-label">
            Password*
          </label>
          <input
            class="form-control"
            type="password"
            minLength={3}
            maxLength={50}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="btn btn-primary class= mt-1">
          Login
        </button>
        <span style={{ textAlign: "center", marginBlock: "10px" }}>
          OR SIGN UP WITH
        </span>
        <button className="btn-google">
          <img src={google} alt="google" width={16} height={16} />
          Google
        </button>
        <button className="btn-google">
          <img src={facebook} alt="facebook" width={16} height={16} />
          Facebook
        </button>
        <span className="link-sign">
          Don't have account? <Link to="/Register">Sign up</Link>
        </span>
      </form>
    </>
  );
};

export default Login;
