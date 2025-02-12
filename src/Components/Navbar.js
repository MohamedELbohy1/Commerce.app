import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <h1>Amazon</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/">All Categories</Link>
            </li>
            <li class="nav-item">
              <Link to="/Products">Products</Link>
            </li>
            <li class="nav-item">
              <Link to="/About">About</Link>
            </li>
            <li class="nav-item">
              <Link to="/Contactus">Contact</Link>
            </li>
            <li class="nav-item">
              <Link to="/Login">User Account</Link>
            </li>

            <li class="nav-item dropdown">
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <Link to="/Register" class="btn">
              Register
            </Link>
            <Link to="/Login" class="btn">
              Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
