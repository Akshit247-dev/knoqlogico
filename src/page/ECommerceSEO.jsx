import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./ECommerceSEO.css"
import ecommerceSEOImage from '../assets/img/316835118_11400063.svg';
import { Link } from "react-router-dom";

function ECommerceSEO() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="ECommerceSEO-main">
    <div className="ECommerceSEO-main-blue-cover" />
    <div className="ECommerceSEO-content">
      <h2>eCommerce SEO</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>eCommerce SEO</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="ECommerceSEO-tagline-section">
    <h2>eCommerce SEO</h2>
    <div className="ECommerceSEO-beat-img" />
    <p>
      Boost Your Online Store's Visibility and Drive Sales with Expert eCommerce
      SEO.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="ECommerceSEO-hero-section">
  <div className="ECommerceSEO-hero-img">
      <img src={ecommerceSEOImage} alt="ECommerce SEO" />
    </div>
    <div className="ECommerceSEO-hero-content">
      <p className="ECommerceSEO-hero-techie">Our eCommerce Experts</p>
      <h3>eCommerce SEO</h3>
      <div className="ECommerceSEO-hero-conent-para">
        <p>
          Our eCommerce SEO services are all about helping your online store
          stand out and attract the right customers. We focus on optimizing your
          product pages, improving site structure, and boosting site speed, so
          shoppers can find what they're looking for quickly and easily. Whether
          you're selling clothes, gadgets, or anything in between, we make sure
          your store is easy to navigate and provides a great user experience,
          all while improving your rankings on search engines.
        </p>
        <p>
          But it's not just about getting traffic - it's about converting that
          traffic into real sales. Our team fine-tunes your website's SEO to
          target the right keywords, improve your product descriptions, and
          ensure everything is optimized for search engines like Google. With
          our eCommerce SEO expertise, we help you build a stronger online
          presence, increase organic traffic, and turn visitors into loyal
          customers who keep coming back.
        </p>
      </div>
      <div className="ECommerceSEO-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="ECommerceSEO-ag-format-container">
    <div className="ECommerceSEO-ag-courses_box">
      <div className="ECommerceSEO-ag-courses_item">
        <a href="#" className="ECommerceSEO-ag-courses-item_link">
          <div className="ECommerceSEO-ag-courses-item_bg" />
          <div className="ECommerceSEO-ag-courses-item_title">1. Keyword Research</div>
          <div className="ECommerceSEO-ag-courses-item_date-box">
            Identifying and targeting the right keywords that potential
            customers are searching for to ensure your products are easily
            discoverable.
          </div>
        </a>
      </div>
      <div className="ECommerceSEO-ag-courses_item">
        <a href="#" className="ECommerceSEO-ag-courses-item_link">
          <div className="ECommerceSEO-ag-courses-item_bg" />
          <div className="ECommerceSEO-ag-courses-item_title">2. On-Page SEO</div>
          <div className="ECommerceSEO-ag-courses-item_date-box">
            Optimizing product pages, category pages, and meta tags (title,
            description, images, etc.) to enhance search engine rankings and
            improve user experience.
          </div>
        </a>
      </div>
      <div className="ECommerceSEO-ag-courses_item">
        <a href="#" className="ECommerceSEO-ag-courses-item_link">
          <div className="ECommerceSEO-ag-courses-item_bg" />
          <div className="ECommerceSEO-ag-courses-item_title">3. Technical SEO</div>
          <div className="ECommerceSEO-ag-courses-item_date-box">
            Ensuring your eCommerce site is technically optimized includes site
            speed, mobile responsiveness, clean URL, &amp; easy navigation to
            improve SEO.
          </div>
        </a>
      </div>
      <div className="ECommerceSEO-ag-courses_item">
        <a href="#" className="ECommerceSEO-ag-courses-item_link">
          <div className="ECommerceSEO-ag-courses-item_bg" />
          <div className="ECommerceSEO-ag-courses-item_title">4. Optimization</div>
          <div className="ECommerceSEO-ag-courses-item_date-box">
            Creating and optimizing valuable content, such as product
            descriptions, blog posts, and reviews, to engage visitors and
            enhance SEO performance.
          </div>
        </a>
      </div>
      <div className="ECommerceSEO-ag-courses_item">
        <a href="#" className="ECommerceSEO-ag-courses-item_link">
          <div className="ECommerceSEO-ag-courses-item_bg" />
          <div className="ECommerceSEO-ag-courses-item_title">5. Link Building</div>
          <div className="ECommerceSEO-ag-courses-item_date-box">
            Building high-quality backlinks from reputable websites to increases
            your store's domain authority and improves site rankings.
          </div>
        </a>
      </div>
      <div className="ECommerceSEO-ag-courses_item">
        <a href="#" className="ECommerceSEO-ag-courses-item_link">
          <div className="ECommerceSEO-ag-courses-item_bg" />
          <div className="ECommerceSEO-ag-courses-item_title">
            6. Conversion Rate Optimization
          </div>
          <div className="ECommerceSEO-ag-courses-item_date-box">
            Analyzing user behavior and optimizing your site's design and layout
            to increase conversions and sales, ensuring a seamless shopping
            experience.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default ECommerceSEO