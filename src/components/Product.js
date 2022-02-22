import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <div className="circle"></div>
      <img src={item.img} />
      <div className="product-info">
        <div className="icon">
          <ShoppingCartOutlined />
        </div>
        <div className="icon">
          <Link to={`/Main/${item.id}`}>
            <Search />
          </Link>
        </div>
        <div className="icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
