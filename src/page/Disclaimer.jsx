import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Disclaimer.css";
import { Link } from "react-router-dom";

function Disclaimer() {
  return (
    <>
      <Header />
      <>
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Disclaimer</h2>
            <ul className="bread-list">
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>&gt;</li>
              <li className="active">Disclaimer</li>
            </ul>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* Main Section */}
        <div className="container">
          {/* Disclaimer Title */}
          <div className="section-title">
            <h1>Disclaimer</h1>
          </div>
          {/* Disclaimer Content */}
          <div className="disclaimer-box">
            <h2>Disclaimer for Knoqlogico IT Solutions Pvt Ltd</h2>
            <p>
              If you require any more information or have any questions about
              our site's disclaimer, please feel free to contact us by email at
              <a
                href="mailto:connect@knoqlogico.com"
                style={{ color: "#090df9" }}
              >
                connect@knoqlogico.com
              </a>
              .
            </p>
          </div>
          {/* Website Disclaimer */}
          <div className="disclaimer-box">
            <h2>
              Disclaimers for{" "}
              <a href="https://knoqlogico.com">www.knoqlogico.com</a>
            </h2>
            <p>
              All the information on this website is published in good faith and
              for general information purposes only. We do not make any
              warranties about the completeness, reliability, or accuracy of
              this information. Any action you take upon the information you
              find on this website is strictly at your own risk. We will not be
              liable for any losses and/or damages in connection with the use of
              our website.
            </p>
            <p>
              From our website, you can visit other websites by following
              hyperlinks to external sites. While we strive to provide only
              quality links, we have no control over the content of these sites.
              These links do not imply a recommendation for the content on these
              sites.
            </p>
            <p>
              Please be aware that when you leave our website, other sites may
              have different privacy policies. Check their policies before
              engaging with them.
            </p>
          </div>
          {/* Consent Section */}
          <div className="disclaimer-box">
            <h2>Consent</h2>
            <p>
              By using our website, you hereby consent to our disclaimer and
              agree to its terms.
            </p>
          </div>
          {/* Update Section */}
          <div className="disclaimer-box">
            <h2>Update</h2>
            <p>
              Should we make any changes to this document, those changes will be
              prominently posted here.
            </p>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default Disclaimer;
