import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            numquam voluptatum aut iste, cupiditate alias ad aliquid! Vero
            officia repellat repudiandae rem, nulla, reprehenderit placeat iusto
            consectetur voluptas quia reiciendis.
          </p>
          <div className="social-links">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact Details</h2>
          <ul>
            <li>+9337984488</li>
            <li>BBSR, India</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ tomato.com -All Right Reserved</p>
    </div>
  );
};

export default Footer;
