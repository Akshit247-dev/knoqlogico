import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./ECommerceMarketing.css"
import eCommerceImage from '../assets/img/20770186_Sandy_Bus-41_Single-04.svg';
import { Link } from "react-router-dom";

function ECommerceMarketing() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="ECommerceMarketing-main">
    <div className="ECommerceMarketing-main-blue-cover" />
    <div className="ECommerceMarketing-content">
      <h2>eCommerce Marketing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>eCommerce Marketing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="ECommerceMarketing-tagline-section">
    <h2>eCommerce Marketing</h2>
    <div className="ECommerceMarketing-beat-img" />
    <p>
      Drive Sales, Boost Engagement, and Grow Your Online Store with Smart
      eCommerce Marketing.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="ECommerceMarketing-hero-section">
  <div className="ECommerceMarketing-hero-img">
      <img src={eCommerceImage} alt="ECommerce Marketing" />
    </div>
    <div className="ECommerceMarketing-hero-content">
      <p className="ECommerceMarketing-hero-techie">Our eCommerce Experts</p>
      <h3>eCommerce Marketing</h3>
      <div className="ECommerceMarketing-hero-conent-para">
        <p>
          eCommerce marketing is all about getting your products in front of the
          right people at the right time. We focus on creating strategies that
          not only drive traffic to your online store but also convert visitors
          into loyal customers. From paid ads to social media promotions, our
          team helps you leverage every digital platform to boost your sales and
          grow your brand's presence online.
        </p>
        <p>
          We understand that running an eCommerce business means wearing many
          hats. That's why we take care of the marketing side, from crafting
          engaging product descriptions and email campaigns to optimizing your
          site for better customer experience and SEO. With the right approach,
          your store can attract more visitors, increase engagement, and
          ultimately, grow your revenue.
        </p>
      </div>
      <div className="ECommerceMarketing-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="ECommerceMarketing-ag-format-container">
    <div className="ECommerceMarketing-ag-courses_box">
      <div className="ECommerceMarketing-ag-courses_item">
        <a href="#" className="ECommerceMarketing-ag-courses-item_link">
          <div className="ECommerceMarketing-ag-courses-item_bg" />
          <div className="ECommerceMarketing-ag-courses-item_title">
            1. Search Engine Optimization
          </div>
          <div className="ECommerceMarketing-ag-courses-item_date-box">
            Optimizing your eCommerce site to rank higher in search engines can
            drive organic traffic. It includes keyword research, on-page SEO,
            and optimizing product descriptions, images, and metadata to enhance
            your chances of impression.
          </div>
        </a>
      </div>
      <div className="ECommerceMarketing-ag-courses_item">
        <a href="#" className="ECommerceMarketing-ag-courses-item_link">
          <div className="ECommerceMarketing-ag-courses-item_bg" />
          <div className="ECommerceMarketing-ag-courses-item_title">
            2. Pay-Per-Click Advertising
          </div>
          <div className="ECommerceMarketing-ag-courses-item_date-box">
            With PPC campaigns, you can target specific keywords and
            demographics to bring in highly qualified traffic quickly. Platforms
            like Google Ads and social media channels allow for precise
            targeting to increase conversions and sales.
          </div>
        </a>
      </div>
      <div className="ECommerceMarketing-ag-courses_item">
        <a href="#" className="ECommerceMarketing-ag-courses-item_link">
          <div className="ECommerceMarketing-ag-courses-item_bg" />
          <div className="ECommerceMarketing-ag-courses-item_title">3. Email Marketing</div>
          <div className="ECommerceMarketing-ag-courses-item_date-box">
            Effective email campaigns help nurture customer relationships,
            promote products, and announce sales or promotions. Through
            personalized offers and tailored messaging, email marketing can
            drive repeat business and engage your customer base.
          </div>
        </a>
      </div>
      <div className="ECommerceMarketing-ag-courses_item">
        <a href="#" className="ECommerceMarketing-ag-courses-item_link">
          <div className="ECommerceMarketing-ag-courses-item_bg" />
          <div className="ECommerceMarketing-ag-courses-item_title">4. Social Media Marketing</div>
          <div className="ECommerceMarketing-ag-courses-item_date-box">
            Social media platforms like Instagram, Facebook, and Pinterest are
            powerful tools for eCommerce businesses. Paid ads, organic posts,
            and influencer collaborations can create awareness, generate
            interest, and drive traffic to your website.
          </div>
        </a>
      </div>
      <div className="ECommerceMarketing-ag-courses_item">
        <a href="#" className="ECommerceMarketing-ag-courses-item_link">
          <div className="ECommerceMarketing-ag-courses-item_bg" />
          <div className="ECommerceMarketing-ag-courses-item_title">
            5. Conversion Rate Optimization
          </div>
          <div className="ECommerceMarketing-ag-courses-item_date-box">
            CRO focuses on optimizing your eCommerce website to convert visitors
            into paying customers. By analyzing user behavior and making
            improvements such as clearer calls-to-action, better product pages,
            &amp; faster checkout, you can improve your sales.
          </div>
        </a>
      </div>
      <div className="ECommerceMarketing-ag-courses_item">
        <a href="#" className="ECommerceMarketing-ag-courses-item_link">
          <div className="ECommerceMarketing-ag-courses-item_bg" />
          <div className="ECommerceMarketing-ag-courses-item_title">6. Affiliate Marketing</div>
          <div className="ECommerceMarketing-ag-courses-item_date-box">
            Partnering with affiliates or influencers can help expand your
            reach. By offering commissions for sales generated through their
            referrals, affiliate marketing allows you to leverage external
            partners to drive traffic and sales to your online store.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default ECommerceMarketing