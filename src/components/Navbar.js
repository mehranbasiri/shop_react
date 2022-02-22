import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="search-container">
            <input type="search" placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <h1>LAMA.</h1>
        </div>
        <div className="right">
          <div className="menuItem">Register</div>
          <div className="menuItem">SIGN IN</div>
          <Link to="/cart">
            <div className="menuItem">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
