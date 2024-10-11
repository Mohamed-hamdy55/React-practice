import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Conatct from "./Contact";
import NoPage from "./NoPage";
import productDetails from "./ProductDetails";

export default function Layout() {
  return (
    <>
      <Router>
        <Header />
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/contact" exact component={Conatct}></Route>
            <Route path="/products" exact component={Products}></Route>
            <Route
              path="/products/productDetails/:id"
              component={productDetails}
            ></Route>
            <Route path="*" exact component={NoPage}></Route>
          </Switch>
        </div>
      </Router>
      <hr />
      <Footer />
    </>
  );
}
