import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "./Context";
import { signUp } from "./auth";
import google from "../assets/search.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("Member");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const history = useHistory();

  const { registerUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 3 || username.length > 50) {
      alert("Username must be between 3 and 50 characters long.");
      return;
    }
    if (!username || !email || !password || !phoneNumber) {
      setError("Please fill in all fields");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    const result = signUp(username, email, password, phoneNumber, role);
    if (result) {
      setIsSignedUp(true);
    } else {
      setError(result);
    }

    console.log("Registered successfully");
    registerUser(email, password, role);

    history.push("/login");

    console.log("Form submitted", { username, email, phoneNumber, password });
  };
  if (isSignedUp) {
    return history.push("/Login");
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <h1 className="register-heading">Create An Account</h1>
        <div class="mb-3">
          <label htmlFor="username" class="form-label">
            Username*
          </label>
          <input
            class="form-control"
            type="text"
            minLength={3}
            maxLength={50}
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
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
        <div class="mb-3">
          <label htmlFor="phoneNumber" class="form-label">
            Phone Number*
          </label>
          <input
            class="form-control"
            type="tel"
            pattern="^01[0-2]\d{8}$"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role*
          </label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Member">Member</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <span style={{ textAlign: "left", marginBlock: "10px" }}>
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
          Already have an account? <Link to="/Login"> Sign in now</Link>
        </span>
      </form>
    </>
  );
};

export default Register;
