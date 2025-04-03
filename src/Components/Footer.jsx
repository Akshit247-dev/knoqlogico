import React from "react";
import "./Both.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Link} from "react-router-dom";

// Link tag in <a></a>
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
                  <Link to="/Digitalmarketing">Digital Marketing</Link>
                </li>
                <li>
                   <Link to="/Seo-optimization">
                    Search Engine Optimization (SEO)
                    </Link>
                </li>
                <li>
                 <Link to="/ConversionRateOptimizationServices">
                    CRO Services
                    </Link>
                </li>
                <li>
                  <Link to="/PayPerClickMarketing">
                    Pay Per Click (PPC) Marketing
                    </Link>
                </li>
                <li>
                   <Link to="/SocialMediaMarketing">
                    Social Media Advertising
                    </Link>
                </li>
                <li>
                   <Link to="/App-development">App Development</Link>
                </li>
                <li>
                  <Link to="/WebDesignandDevelopment">
                    Web Design &amp; Development
                    </Link>
                </li>
                <li>
                  <Link to="/MediaProductionServices">Media Production</Link>
                </li>
                <li>
                  <Link to="/ContentMarketing">Content Marketing</Link>
                </li>
                <li>
                  <Link to="/eCommerceMarketing">eCommerce Marketing</Link>
                </li>
                <li>
                  <Link to="/online-marketplace-marketing">
                    Online Marketplace Marketing
                    </Link>
                </li>
                <li>
                  <Link to="/LinkBuilding">Link Building</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-footer-section">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li>
                 <Link to="/">Home</Link>
              </li>
              <li>
                 <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                 <Link to="/Terms&Conditions">Terms &amp; Conditions</Link>
              </li>
              <li>
                 <Link to="/Disclaimer">Disclaimer</Link>
              </li>
              <li>
                 <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                 <Link to="/Events">Events</Link>
              </li>
              <li>
                 <Link to="/Refund_policy">Refund Policy</Link>
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
