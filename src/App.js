import Home from "./pages/Home";
import React from "react";

import Cart from "./pages/Cart";
import "./styles/app.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import ProductList from "./pages/ProductList";
import MainPage from "./pages/ProductList";
import Product from "./components/Product";
import Register from "./pages/Login/Register";
import { Main } from "./pages/Main";
import { Success } from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>

        <Route path="/Main/:id">
          <Main />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
