import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "./WebDesignandDevelopment.css"
import webImage from '../assets/img/web.png';
import { Link } from "react-router-dom";

function WebDesignandDevelopment() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="WebDesignandDevelopment-main">
    <div className="WebDesignandDevelopment-main-blue-cover" />
    <div className="WebDesignandDevelopment-content">
      <h2>Web Design and Development</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>Services</li>
        <li>&gt;</li>
        <li>Web-Services</li>
        <li>&gt;</li>
        <li>Web Design and Development</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="WebDesignandDevelopment-tagline-section">
    <h2>Web Design and Development</h2>
    <div className="WebDesignandDevelopment-beat-img" />
    <p>
      Crafting Stunning Websites with Seamless Functionality that Drive Results
      and Enhance User Experience.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="WebDesignandDevelopment-hero-section">
    <div className="WebDesignandDevelopment-hero-img">
    <img src={webImage} alt="Web Image" />
    </div>
    <div className="WebDesignandDevelopment-hero-content">
      <p className="WebDesignandDevelopment-hero-techie">Our SEO Experts</p>
      <h3>Web Design and Development</h3>
      <div className="WebDesignandDevelopment-hero-conent-para">
        <p>
          At Knoqlogico, we specialize in creating visually appealing and highly
          functional websites tailored to meet the unique needs of your
          business. Our web design and development services are focused on
          delivering an intuitive user experience while ensuring your site is
          responsive, fast, and optimized for all devices. We collaborate
          closely with you to understand your goals, ensuring the final product
          reflects your brand's identity and engages your target audience
          effectively.
        </p>
        <p>
          Our development team utilizes the latest technologies and best
          practices to build websites that not only look great but also perform
          seamlessly. From custom features and e-commerce solutions to content
          management systems and SEO integration, we ensure your website is
          equipped to help your business grow. With Knoqlogico, you get more
          than just a website - you get a powerful online presence designed for
          success.
        </p>
      </div>
      <div className="WebDesignandDevelopment-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="WebDesignandDevelopment-ag-format-container">
    <div className="WebDesignandDevelopment-ag-courses_box">
      <div className="WebDesignandDevelopment-ag-courses_item">
        <a href="#" className="WebDesignandDevelopment-ag-courses-item_link">
          <div className="WebDesignandDevelopment-ag-courses-item_bg" />
          <div className="WebDesignandDevelopment-ag-courses-item_title">1. Custom Web Design</div>
          <div className="WebDesignandDevelopment-ag-courses-item_date-box">
            Tailored web design solutions that reflect your brand identity and
            engage your audience with intuitive, responsive layouts.
          </div>
        </a>
      </div>
      <div className="WebDesignandDevelopment-ag-courses_item">
        <a href="#" className="WebDesignandDevelopment-ag-courses-item_link">
          <div className="WebDesignandDevelopment-ag-courses-item_bg" />
          <div className="WebDesignandDevelopment-ag-courses-item_title">2. Website Development</div>
          <div className="WebDesignandDevelopment-ag-courses-item_date-box">
            Robust, scalable development with cutting-edge technologies ensuring
            a fast, secure, and seamless browsing experience.
          </div>
        </a>
      </div>
      <div className="WebDesignandDevelopment-ag-courses_item">
        <a href="#" className="WebDesignandDevelopment-ag-courses-item_link">
          <div className="WebDesignandDevelopment-ag-courses-item_bg" />
          <div className="WebDesignandDevelopment-ag-courses-item_title">3. E-Commerce Solutions</div>
          <div className="WebDesignandDevelopment-ag-courses-item_date-box">
            Comprehensive e-commerce development to help you build and manage an
            online store with user-friendly features.
          </div>
        </a>
      </div>
      <div className="WebDesignandDevelopment-ag-courses_item">
        <a href="#" className="WebDesignandDevelopment-ag-courses-item_link">
          <div className="WebDesignandDevelopment-ag-courses-item_bg" />
          <div className="WebDesignandDevelopment-ag-courses-item_title">4. SEO Optimization</div>
          <div className="WebDesignandDevelopment-ag-courses-item_date-box">
            On-page and off-page SEO services to improve search engine rankings,
            drive organic traffic to your website, and enhance overall online
            visibility.
          </div>
        </a>
      </div>
      <div className="WebDesignandDevelopment-ag-courses_item">
        <a href="#" className="WebDesignandDevelopment-ag-courses-item_link">
          <div className="WebDesignandDevelopment-ag-courses-item_bg" />
          <div className="WebDesignandDevelopment-ag-courses-item_title">5. Content Mng. Systems</div>
          <div className="WebDesignandDevelopment-ag-courses-item_date-box">
            Easy-to-use CMS solutions that empower you to manage, update, and
            maintain your website content without technical expertise.
          </div>
        </a>
      </div>
      <div className="WebDesignandDevelopment-ag-courses_item">
        <a href="#" className="WebDesignandDevelopment-ag-courses-item_link">
          <div className="WebDesignandDevelopment-ag-courses-item_bg" />
          <div className="WebDesignandDevelopment-ag-courses-item_title">6. Website Maintenance</div>
          <div className="WebDesignandDevelopment-ag-courses-item_date-box">
            Ongoing website support, updates, and security checks to ensure your
            site runs smoothly and stays up-to-date with the latest trends and
            technologies.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default WebDesignandDevelopment