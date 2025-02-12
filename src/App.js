import "./App.css";
import Contact from "./Components/Contactus";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/footer";
import Banner from "./Components/Banner";
import Login from "./Components/login";
import Register from "./Components/Register";
import { AuthProvider } from "./Components/Context";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Gallery from "./Components/Gallery";
import products from "./data/products";
import ProductDetails from "./Components/ProductDetails";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Banner />
              <Features />
            </Route>
            <Route path="/Contactus">
              <Contact />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Products">
              <Gallery products={products} />
            </Route>
            <Route path="/product/:id">
              <ProductDetails products={products} />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
