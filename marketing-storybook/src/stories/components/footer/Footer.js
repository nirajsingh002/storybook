import React from "react";
import PropTypes from "prop-types";
import "./footer.css";

export const Footer = ({ ...props }) => {
  return (
    <div className="footer">
      <div className="row topSection">
        <div className="col-5">
          <img src="/images/yellow-logo.png" />
          <h1>Discover what the largest LTL Network Alliance can do for you.</h1>
          <ul className="logo-container">
            <li>
              <img src="/images/Holland-logo.png" />
            </li>
            <li>
              <img src="/images/new-penn-logo.png" />
            </li>
            <li>
              <img src="/images/Reddaway-logo.png" />
            </li>
            <li>
              <img src="/images/YRC-logo.png" />
            </li>
            <li>
              <img src="/images/HNRY-logo.png" />
            </li>
          </ul>
        </div>
        <div className="col-6 col-sm-offset-1">
          <div className="row">
            <div className="col-6 padding-0">
              <ul className="footerLinks mT-sm-33">
                <li>Prviacy Policy</li>
                <li>Notice and Legal Disclaimer</li>
                <li>Copyright</li>
                <li>Live Chat</li>
              </ul>
            </div>
            <div className="col-6 padding-0">
              <ul className="footerLinks">
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Help Center</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row alignItemCenter bottomSection borderTop">
      <div className="col-6 floatRight">
            <ul className="socialIcons">
                <li>
                    <img src="/images/twitter-logo.png" />
                </li>
                <li>
                    <img src="/images/facebook-logo.png" />
                </li>
                <li>
                    <img src="/images/linkedin-logo.png" />
                </li>
            </ul>
        </div>
        <div className="col-6 fontSize12">&copy; 2020 YRC Worldwide Inc. All rights reserved.</div>
        
      </div>
    </div>
  );
};
