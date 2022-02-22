import React, { useState, useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";

import { useDispatch } from "react-redux";
export const Main = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    color: [],
    size: [],
  });
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/`)
      .then((response) => setProduct(response.data[id - 1]));
  }, [id]);
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  //Add to cart
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <div className="product-list">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <div className="img-container">
          <img src={product.img} />
        </div>

        <div className="info">
          <h1>{product.title}</h1>
          <p>
            In a physical store you would try to connect with every person that
            entered in the hope of converting them into a buyer, and the same
            must go for eCommerce. Think about how you would pitch a product in
            person and then try to put it into words for online readers. As a
            fashion retailer, customers will assume you know a lot about trends
            and style, so offer advice about how they can best wear your
            clothes.
          </p>
          <span> {product.price} $</span>
          <div className="filter-container">
            <div className="filter">
              <span>Color</span>
              {product.color.map((c) => (
                <div
                  onClick={() => setColor(c)}
                  key={c.id}
                  className="filter-color"
                  style={{ backgroundColor: c }}
                ></div>
              ))}
            </div>
            <div className="filter">
              <span>Size</span>
              <select onChange={(e) => setSize(e.target.value)}>
                {product.size.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount">
              <Remove onClick={() => handleQuantity("dec")} />
              <span>{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <button onClick={handleClick}>Add to Cart</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};
export default Main;
