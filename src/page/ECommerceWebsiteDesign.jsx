import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./ECommerceWebsiteDesign.css"
import ecommerceWebsiteImage from '../assets/img/13454552_5252481.svg';
import { Link } from "react-router-dom";

function ECommerceWebsiteDesign() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="ECommerceWebsiteDesign-main">
    <div className="ECommerceWebsiteDesign-main-blue-cover" />
    <div className="ECommerceWebsiteDesign-content">
      <h2>eCommerce Website Design</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>eCommerce Website Design</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="ECommerceWebsiteDesign-tagline-section">
    <h2>eCommerce Website Design</h2>
    <div className="ECommerceWebsiteDesign-beat-img" />
    <p>Transforming Ideas into Seamless Shopping Experiences.</p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="ECommerceWebsiteDesign-hero-section">
  <div className="ECommerceWebsiteDesign-hero-img">
      <img src={ecommerceWebsiteImage} alt="ECommerce Website Design" />
    </div>
    <div className="ECommerceWebsiteDesign-hero-content">
      <p className="ECommerceWebsiteDesign-hero-techie">Our eCommerce Experts</p>
      <h3>eCommerce Website Design</h3>
      <div className="ECommerceWebsiteDesign-hero-conent-para">
        <p>
          When it comes to creating an eCommerce website, we understand that
          your goal is to make shopping online as easy and enjoyable as possible
          for your customers. Our team works closely with you to design a site
          that's not only visually appealing but also user-friendly and
          optimized for conversions. From browsing your product catalog to
          checking out smoothly, we focus on every detail to create a seamless
          shopping experience.
        </p>
        <p>
          We don't just build eCommerce sites—we build online stores that help
          your business grow. With responsive design, fast loading times, and
          intuitive navigation, your customers will enjoy shopping on any
          device. We also make sure your site is optimized for search engines,
          so you can reach more customers and boost your sales. With our
          expertise in eCommerce website design, you can expect a site that's
          designed to turn visitors into loyal customers.
        </p>
      </div>
      <div className="ECommerceWebsiteDesign-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="ECommerceWebsiteDesign-ag-format-container">
    <div className="ECommerceWebsiteDesign-ag-courses_box">
      <div className="ECommerceWebsiteDesign-ag-courses_item">
        <a href="#" className="ECommerceWebsiteDesign-ag-courses-item_link">
          <div className="ECommerceWebsiteDesign-ag-courses-item_bg" />
          <div className="ECommerceWebsiteDesign-ag-courses-item_title">1. Custom Store Design</div>
          <div className="ECommerceWebsiteDesign-ag-courses-item_date-box">
            Tailored designs that reflect your brand's identity &amp; offer a
            seamless shopping experience, increasing customer retention &amp;
            sales.
          </div>
        </a>
      </div>
      <div className="ECommerceWebsiteDesign-ag-courses_item">
        <a href="#" className="ECommerceWebsiteDesign-ag-courses-item_link">
          <div className="ECommerceWebsiteDesign-ag-courses-item_bg" />
          <div className="ECommerceWebsiteDesign-ag-courses-item_title">
            2. Mobile-Optimized Design
          </div>
          <div className="ECommerceWebsiteDesign-ag-courses-item_date-box">
            Optimized designs for all devices, ensuring a smooth user experience
            on mobile, tablet, and desktop for better engagement.
          </div>
        </a>
      </div>
      <div className="ECommerceWebsiteDesign-ag-courses_item">
        <a href="#" className="ECommerceWebsiteDesign-ag-courses-item_link">
          <div className="ECommerceWebsiteDesign-ag-courses-item_bg" />
          <div className="ECommerceWebsiteDesign-ag-courses-item_title">3. Easy Navigation</div>
          <div className="ECommerceWebsiteDesign-ag-courses-item_date-box">
            Well-organized categories, filters, and search options to help
            customers find what they're looking for quickly and easily.
          </div>
        </a>
      </div>
      <div className="ECommerceWebsiteDesign-ag-courses_item">
        <a href="#" className="ECommerceWebsiteDesign-ag-courses-item_link">
          <div className="ECommerceWebsiteDesign-ag-courses-item_bg" />
          <div className="ECommerceWebsiteDesign-ag-courses-item_title">
            4. SEO-Optimized Development
          </div>
          <div className="ECommerceWebsiteDesign-ag-courses-item_date-box">
            Implementing SEO best practices on product pages, categories, and
            site structure to help improve search engine visibility and drive
            organic traffic.
          </div>
        </a>
      </div>
      <div className="ECommerceWebsiteDesign-ag-courses_item">
        <a href="#" className="ECommerceWebsiteDesign-ag-courses-item_link">
          <div className="ECommerceWebsiteDesign-ag-courses-item_bg" />
          <div className="ECommerceWebsiteDesign-ag-courses-item_title">
            5. Pay-Gateway Integration
          </div>
          <div className="ECommerceWebsiteDesign-ag-courses-item_date-box">
            Secure and reliable payment systems integrated into your eCommerce
            site, offering multiple payment methods for customer convenience.
          </div>
        </a>
      </div>
      <div className="ECommerceWebsiteDesign-ag-courses_item">
        <a href="#" className="ECommerceWebsiteDesign-ag-courses-item_link">
          <div className="ECommerceWebsiteDesign-ag-courses-item_bg" />
          <div className="ECommerceWebsiteDesign-ag-courses-item_title">
            6. Cart &amp; Checkout Optimization
          </div>
          <div className="ECommerceWebsiteDesign-ag-courses-item_date-box">
            Streamlined shopping cart and checkout processes to minimize
            abandoned carts and increase conversions, ensuring a hassle-free
            purchase experience.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default ECommerceWebsiteDesign