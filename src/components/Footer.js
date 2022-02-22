import {
  Facebook,
  Instagram,
  MailOutline,
  Payment,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h1>LAMA.</h1>
        <p>
          There are many variations of passages of lorem Ipsum available , but
          the majority have suffered alteation in some from, by injected humor,
          or randomised words which don't look even slightly believabe
        </p>
        <div className="social">
          <div style={{ backgroundColor: "#385999" }} className="social-icon">
            <Facebook />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E4405F" }}>
            <Instagram />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="center">
        <h3>Useful Links</h3>
        <ul>
          <li>Home </li>
          <li>Cart</li>
          <li>Man Fasion</li>
          <li>Women Fasion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li> Order Tracking</li>
          <li> Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="right">
        <h3> Contact</h3>
        <h5>
          {" "}
          <Room style={{ marginRight: "10px" }} />
          Karaj , Kamalshahr bolve shahrdari gholestan 1{" "}
        </h5>
        <h5>
          <Phone style={{ marginRight: "10px" }} /> 0938 402 9498
        </h5>
        <h5>
          <MailOutline style={{ marginRight: "10px" }} /> mehranbsl78@gmail.com
        </h5>
      </div>
    </div>
  );
};

export default Footer;
