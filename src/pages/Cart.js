//npm install react-stripe-checkout
import { Add, Remove, StayPrimaryPortraitRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { userRequest } from "../requestMethods";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  //check payment
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", { data: res.data });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <div className="cart">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <h1>YOUR BAG</h1>
        <div className="top">
          <button className="conting-btn">CONTING SHOPPING</button>
          <div className="top-texts">
            <span>Shopping Bag(2)</span>
            <span>Your Whishlist (0)</span>
          </div>
          <button className="ckeckout-btn">CHECKOUT NOW </button>
        </div>
        <div className="bottom">
          <div className="info">
            {cart.products.map((product) => (
              <div className="product">
                <div className="product-detail">
                  <img src={product.img} />
                  <div className="details">
                    <span className="product-name">
                      <b>Product:</b> {product.title}
                    </span>
                    <span className="product-id">
                      <b>ID:</b> {product.id}
                    </span>
                    <div
                      className="product-color"
                      style={{ backgroundColor: [product.color] }}
                    ></div>
                    <span className="product-size">
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className="price-detail">
                  <div className="amount">
                    <Add />
                    <span>{product.quantity}</span>
                    <Remove />
                  </div>
                  <h5>{product.price * product.quantity} $</h5>
                </div>
              </div>
            ))}

            <hr />
          </div>
          <div className="summary">
            <h1>ORDER SUMMARY</h1>
            <div className="summary-item">
              <span>Subtotal</span>
              <h5>{cart.total} $</h5>
            </div>
            <div className="summary-item">
              <span>Estimated Shipping</span>
              <h5>$ 5.90</h5>
            </div>
            <div className="summary-item">
              <span>Shipping Discount</span>
              <h5>$ -5.90</h5>
            </div>
            <div className="summary-item">
              <h3>Total</h3>
              <h5>{cart.total} $</h5>
            </div>
            <StripeCheckout
              name="Lama shop"
              image="https://avatars.githubercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`your total is $${cart.total * 100}`}
              amount={onToken}
              stripeKey={KEY}
            >
              <button> CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
