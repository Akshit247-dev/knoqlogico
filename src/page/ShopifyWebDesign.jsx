import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './ShopifyWebDesign.css'
import svgImage from '../assets/img/14449322_5469615.svg';
import { Link } from "react-router-dom";

function ShopifyWebDesign() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="ShopifyWebDesign-main">
    <div className="ShopifyWebDesign-main-blue-cover" />
    <div className="ShopifyWebDesign-content">
      <h2>Shopify Web Design</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Shopify Web Design</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="ShopifyWebDesign-tagline-section">
    <h2>Shopify Web Design</h2>
    <div className="ShopifyWebDesign-beat-img" />
    <p>
      Transform Your E-Commerce Vision into a Seamless Online Experience with
      Custom Shopify Designs.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="ShopifyWebDesign-hero-section">
    <div className="ShopifyWebDesign-hero-img">
    <img src={svgImage} alt="Image Description" />
    </div>
    <div className="ShopifyWebDesign-hero-content">
      <p className="ShopifyWebDesign-hero-techie">Our eCommerce Experts</p>
      <h3>Shopify Web Design</h3>
      <div className="ShopifyWebDesign-hero-conent-para">
        <p>
          When it comes to building a website that's not just functional but
          also user-friendly and visually appealing, Shopify is a go-to
          platform, and we're here to help you make the most of it. Our Shopify
          web design services are all about creating a unique online store that
          reflects your brand's personality and engages your customers from the
          moment they land on your page. Whether you're looking for a clean,
          minimalist design or something bold and eye-catching, we'll work with
          you to craft a site that speaks to your audience.
        </p>
        <p>
          We don't just stop at pretty designs — we focus on building an
          intuitive shopping experience that converts visitors into loyal
          customers. From smooth navigation to fast loading times, secure
          payment gateways, and mobile optimization, we've got it covered. Plus,
          we'll make sure your Shopify store is set up for SEO success, so you
          can get noticed by the right people. Let's work together to turn your
          e-commerce vision into reality and help your business thrive online.
        </p>
      </div>
      <div className="ShopifyWebDesign-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="ShopifyWebDesign-ag-format-container">
    <div className="ShopifyWebDesign-ag-courses_box">
      <div className="ShopifyWebDesign-ag-courses_item">
        <a href="#" className="ShopifyWebDesign-ag-courses-item_link">
          <div className="ShopifyWebDesign-ag-courses-item_bg" />
          <div className="ShopifyWebDesign-ag-courses-item_title">
            1. Custom Shopify Theme Design
          </div>
          <div className="ShopifyWebDesign-ag-courses-item_date-box">
            Tailor your Shopify store's look and feel with unique, custom themes
            that align with your brand identity, making your store stand out
            from the competition.
          </div>
        </a>
      </div>
      <div className="ShopifyWebDesign-ag-courses_item">
        <a href="#" className="ShopifyWebDesign-ag-courses-item_link">
          <div className="ShopifyWebDesign-ag-courses-item_bg" />
          <div className="ShopifyWebDesign-ag-courses-item_title">
            2. Mobile-Responsive Design
          </div>
          <div className="ShopifyWebDesign-ag-courses-item_date-box">
            Ensure your Shopify store is optimized for mobile devices, providing
            a seamless shopping experience for customers across smartphones and
            tablets.
          </div>
        </a>
      </div>
      <div className="ShopifyWebDesign-ag-courses_item">
        <a href="#" className="ShopifyWebDesign-ag-courses-item_link">
          <div className="ShopifyWebDesign-ag-courses-item_bg" />
          <div className="ShopifyWebDesign-ag-courses-item_title">3. Shopify Store Setup</div>
          <div className="ShopifyWebDesign-ag-courses-item_date-box">
            From setting up your store to configuring payment gateways,
            shipping, taxes, and more, we ensure everything is ready for a
            smooth operation.
          </div>
        </a>
      </div>
      <div className="ShopifyWebDesign-ag-courses_item">
        <a href="#" className="ShopifyWebDesign-ag-courses-item_link">
          <div className="ShopifyWebDesign-ag-courses-item_bg" />
          <div className="ShopifyWebDesign-ag-courses-item_title">
            4. Shopify App Integration
          </div>
          <div className="ShopifyWebDesign-ag-courses-item_date-box">
            Enhance your store's functionality by integrating the best Shopify
            apps for inventory management, marketing, customer support, and
            more.
          </div>
        </a>
      </div>
      <div className="ShopifyWebDesign-ag-courses_item">
        <a href="#" className="ShopifyWebDesign-ag-courses-item_link">
          <div className="ShopifyWebDesign-ag-courses-item_bg" />
          <div className="ShopifyWebDesign-ag-courses-item_title">5. SEO Optimization</div>
          <div className="ShopifyWebDesign-ag-courses-item_date-box">
            Boost your online visibility with search engine optimization,
            ensuring your Shopify store ranks well on Google and other search
            engines.
          </div>
        </a>
      </div>
      <div className="ShopifyWebDesign-ag-courses_item">
        <a href="#" className="ShopifyWebDesign-ag-courses-item_link">
          <div className="ShopifyWebDesign-ag-courses-item_bg" />
          <div className="ShopifyWebDesign-ag-courses-item_title">
            6. Ongoing Shopify Store Maintenance
          </div>
          <div className="ShopifyWebDesign-ag-courses-item_date-box">
            Regular updates, technical support, and performance checks ensure
            your Shopify store remains secure, optimized, and running smoothly
            at all times.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default ShopifyWebDesign