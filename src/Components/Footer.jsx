import React from "react";
import "./Both.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-footer-container">
          <div className="footer-footer-section">
            <h3>KEEP IN TOUCH</h3>
            <div className="footer-address">
              <p>IN Office:</p>
              <p>1st Floor, Rana Complex,</p>
              <p>Bhauwala, Dehradun,</p>
              <p> Uttarakhand, India</p>
              <p>248007</p>
            </div>
            <div className="footer-contact">
              <p>
                <i className="fas fa-phone" />
                <a
                  href="tel:+917351056005"
                  target="_blank"
                  style={{ color: "#999999" }}
                >
                  {" "}
                  +91 735 105 6005
                </a>
              </p>
              <p>
                <i className="fas fa-phone" />
                <a
                  href="tel:01353547103"
                  target="_blank"
                  style={{ cursor: "pointer" }}
                />{" "}
                0135 3547 103
              </p>
            </div>
            <div className="footer-social-icons">
              <a
                href="https://in.linkedin.com/company/knoqlogico"
                className="footer-social-icon"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a
                href="https://www.instagram.com/knoqlogico/"
                className="footer-social-icon"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="https://www.facebook.com/people/Knoqlogico/100092261611303/"
                className="footer-social-icon"
              >
                <i className="fa-brands fa-facebook" />
              </a>
            </div>
            <div className="footer-refer-us">
              <h4>Refer Us</h4>
            </div>
          </div>
          <div className="footer-footer-section">
            <h3>What We Do</h3>
            <div className="footer-news-list">
              <ul>
                <li>
                  <a href="digital-marketing.html">Digital Marketing</a>
                </li>
                <li>
                  <a href="seo_ptimization.html">
                    Search Engine Optimization (SEO)
                  </a>
                </li>
                <li>
                  <a href="ConversionRateOptimizationServices.html">
                    CRO Services
                  </a>
                </li>
                <li>
                  <a href="PayPerClickMarketing.html">
                    Pay Per Click (PPC) Marketing
                  </a>
                </li>
                <li>
                  <a href="SocialMediaMarketing.html">
                    Social Media Advertising
                  </a>
                </li>
                <li>
                  <a href="App-development.html">App Development</a>
                </li>
                <li>
                  <a href="WebDesignandDevelopment.html">
                    Web Design &amp; Development
                  </a>
                </li>
                <li>
                  <a href="MediaProductionServices.html">Media Production</a>
                </li>
                <li>
                  <a href="ContentMarketing.html">Content Marketing</a>
                </li>
                <li>
                  <a href="eCommerceMarketing.html">eCommerce Marketing</a>
                </li>
                <li>
                  <a href="online-marketplace-marketing.html">
                    Online Marketplace Marketing
                  </a>
                </li>
                <li>
                  <a href="LinkBuilding.html">Link Building</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-footer-section">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/privacypolicy">Privacy Policy</a>
              </li>
              <li>
                <a href="/Terms&Conditions">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="/Disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/Events">Events</a>
              </li>
              <li>
                <a href="/Refund_policy">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-footer-section">
            <h3>Serving Worldwide</h3>
            <div className="footer-worldwide-list">
              <ul>
                <li>India</li>
                <li>USA</li>
                <li>Norway</li>
                <li>Canada</li>
                <li>Europe</li>
                <li>Denmark</li>
                <li>Australia</li>
                <li>New Zealand</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-footer-bottom">
          <div className="footer-country-flags">
            <span className="footer-flag-item">
              <img src="./ind_flag.png" />
              IN
            </span>
          </div>
          <div className="copyright">
            <p>© Copyright 2024 | All Rights Reserved by Knoqlogico.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
