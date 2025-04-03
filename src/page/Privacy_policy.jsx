import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Privacy_policy.css";
import { Link } from "react-router-dom"; 

function Privacy_policy() {
  return (
      <>
      <Header/>
        <div className="breadcrumbs">
          <div className="container">
            <h2>Privacy Policy</h2>
            <ul className="bread-list">
              <li>Home</li>
              <li>&gt;</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        {/* Main Section */}
        <div className="container privacy-policy">
          <div className="section-title">
            <h1>Privacy Policy</h1>
          </div>
          {/* Who we are Section */}
          <div className="policy-section fadeIn">
            <h2 className="section-heading">Who we are</h2>
            <p>
              Our website address is:{" "}
              <a href="https://www.knoqlogico.com" className="link">
                https://www.knoqlogico.com
              </a>
            </p>
          </div>
          {/* Comments Section */}
          <div className="policy-section fadeIn">
            <h2 className="section-heading">Comments</h2>
            <p>
              When visitors leave comments on the site, we collect the data
              shown in the comments form, along with the visitor's IP address
              and browser user agent string to help with spam detection.
            </p>
            <p>
              An anonymized string created from your email address (also called
              a hash) may be provided to the Gravatar service.
            </p>
          </div>
          {/* Media Section */}
          <div className="policy-section fadeIn">
            <h2 className="section-heading">Media</h2>
            <p>
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS). Visitors to the
              website can download and extract location data from images on the
              website.
            </p>
          </div>
          {/* Cookies Section */}
          <div className="policy-section fadeIn">
            <h2 className="section-heading">Cookies</h2>
            <p>
              Articles on this site may include embedded content (e.g., videos,
              images, articles, etc.). Embedded content from other websites
              behaves in the exact same way as if the visitor has visited the
              other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed
              additional third-party tracking, and monitor your interaction with
              that embedded content.
            </p>
          </div>
          {/* Data Sharing Section */}
          <div className="policy-section fadeIn">
            <h2 className="section-heading">Who we share your data with</h2>
            <p>
              If you request a password reset, your IP address will be included
              in the reset email.
            </p>
          </div>
          {/* Retention Section */}
          <div className="policy-section fadeIn">
            <h2 className="section-heading">How long we retain your data</h2>
            <p>
              If you leave a comment, the comment and its metadata are retained
              indefinitely. This is so we can recognize and approve any
              follow-up comments automatically instead of holding them in a
              moderation queue.
            </p>
            <p>
              For users that register on our website (if any), we also store the
              personal information they provide in their user profile. All users
              can see, edit, or delete their personal information at any time
              (except they cannot change their username).
            </p>
          </div>
          {/* Rights Section */}
          <div className="policy-section fadeIn">
            <h2 className="section-heading">
              What rights you have over your data
            </h2>
            <p>
              If you have an account on this site, or have left comments, you
              can request to receive an exported file of the personal data we
              hold about you, including any data you have provided to us. You
              can also request that we erase any personal data we hold about
              you.
            </p>
          </div>
          {/* Data Sending Section */}
          <div className="policy-section fadeIn">
            <h2 className="section-heading">Where your data is sent</h2>
            <p>
              Visitor comments may be checked through an automated spam
              detection service.
            </p>
          </div>
        </div>
        <Footer/>
      </>
  );
}

export default Privacy_policy;
