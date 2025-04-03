import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Enterprise_PPC_Marketing.css'
import enterprisePPCImage from '../assets/img/Enterprise-PPC-Marketing.svg';
import { Link } from "react-router-dom";

function Enterprise_PPC_Marketing() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="Enterprise_PPC_Marketing-main">
    <div className="Enterprise_PPC_Marketing-main-blue-cover" />
    <div className="Enterprise_PPC_Marketing-content">
      <h2>Enterprise PPC Marketing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Enterprise PPC Marketing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="Enterprise_PPC_Marketing-tagline-section">
    <h2>Enterprise PPC Marketing</h2>
    <div className="Enterprise_PPC_Marketing-beat-img" />
    <p>
      Enterprise PPC marketing involves managing large-scale pay-per-click
      campaigns designed to drive significant traffic and conversions for large
      organizations or enterprises.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="Enterprise_PPC_Marketing-hero-section">
  <div className="Enterprise_PPC_Marketing-hero-img">
      <img src={enterprisePPCImage} alt="Enterprise PPC Marketing" />
    </div>
    <div className="Enterprise_PPC_Marketing-hero-content">
      <p className="Enterprise_PPC_Marketing-hero-techie">Our Marketing Expert</p>
      <h3>Enterprise PPC Marketing</h3>
      <div className="Enterprise_PPC_Marketing-hero-conent-para">
        <p>
          Struggling to generate qualified leads and expand your customer base
          in a saturated market? Occupy prime real estate in search results and
          social networks with Knoqlogico's enterprise pay-per-click (PPC)
          management services.
        </p>
        <p>
          Our proven, data-driven approach places your ads in front of
          high-converting leads, ensuring maximum return on investment and
          profitability. Partner with Knoqlogico today to start seeing
          exceptional results in your large-scale PPC campaigns.
        </p>
      </div>
      <div className="Enterprise_PPC_Marketing-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="Enterprise_PPC_Marketing-ag-format-container">
    <div className="Enterprise_PPC_Marketing-ag-courses_box">
      <div className="Enterprise_PPC_Marketing-ag-courses_item">
        <a href="#" className="Enterprise_PPC_Marketing-ag-courses-item_link">
          <div className="Enterprise_PPC_Marketing-ag-courses-item_bg" />
          <div className="Enterprise_PPC_Marketing-ag-courses-item_title">
            1. Enterprise Keyword Research &amp; Analysis
          </div>
          <div className="Enterprise_PPC_Marketing-ag-courses-item_date-box">
            Knoqlogico's enterprise PPC experts use advanced tools to analyze
            customer search behavior and predict their search queries. We
            categorize target keywords based on industry relevance, search
            volume, and competition.
          </div>
        </a>
      </div>
      <div className="Enterprise_PPC_Marketing-ag-courses_item">
        <a href="#" className="Enterprise_PPC_Marketing-ag-courses-item_link">
          <div className="Enterprise_PPC_Marketing-ag-courses-item_bg" />
          <div className="Enterprise_PPC_Marketing-ag-courses-item_title">
            2. Enterprise Landing Page
          </div>
          <div className="Enterprise_PPC_Marketing-ag-courses-item_date-box">
            Knoqlogico optimizes landing pages to convert PPC traffic into leads
            with persuasive copy, clear calls-to-action (CTAs), and a seamless
            user experience. Our tailored approach, customized for each
            location's unique offerings or promotions, enhances conversions and
            maximizes business growth.
          </div>
        </a>
      </div>
      <div className="Enterprise_PPC_Marketing-ag-courses_item">
        <a href="#" className="Enterprise_PPC_Marketing-ag-courses-item_link">
          <div className="Enterprise_PPC_Marketing-ag-courses-item_bg" />
          <div className="Enterprise_PPC_Marketing-ag-courses-item_title">
            3. Enterprise PPC Ad Management
          </div>
          <div className="Enterprise_PPC_Marketing-ag-courses-item_date-box">
            Knoqlogico's enterprise PPC ad management team drives qualified
            leads by handling bid optimization, ad copywriting, and budget
            management. Our experts provide actionable recommendations to
            enhance performance, ensuring your campaigns connect with the right
            prospects.
          </div>
        </a>
      </div>
      <div className="Enterprise_PPC_Marketing-ag-courses_item">
        <a href="#" className="Enterprise_PPC_Marketing-ag-courses-item_link">
          <div className="Enterprise_PPC_Marketing-ag-courses-item_bg" />
          <div className="Enterprise_PPC_Marketing-ag-courses-item_title">
            4. Enterprise Nextdoor Advertising
          </div>
          <div className="Enterprise_PPC_Marketing-ag-courses-item_date-box">
            Knoqlogico provides Nextdoor advertising as part of our enterprise
            PPC services, targeting local audiences with precision. Using
            demographics, interests, and neighborhoods, we craft tailored ads,
            track key metrics, and optimize campaigns for maximum effectiveness
            and ROI.
          </div>
        </a>
      </div>
      <div className="Enterprise_PPC_Marketing-ag-courses_item">
        <a href="#" className="Enterprise_PPC_Marketing-ag-courses-item_link">
          <div className="Enterprise_PPC_Marketing-ag-courses-item_bg" />
          <div className="Enterprise_PPC_Marketing-ag-courses-item_title">5. ECommerce Marketing</div>
          <div className="Enterprise_PPC_Marketing-ag-courses-item_date-box">
            Knoqlogico's enterprise eCommerce marketing services help your brand
            stand out in a crowded market. We optimize listings, target key
            keywords, and run high-converting ads across Google Shopping, Amazon
            Sponsored Products, and Instagram to drive traffic and increase
            conversions for your online store.
          </div>
        </a>
      </div>
      <div className="Enterprise_PPC_Marketing-ag-courses_item">
        <a href="#" className="Enterprise_PPC_Marketing-ag-courses-item_link">
          <div className="Enterprise_PPC_Marketing-ag-courses-item_bg" />
          <div className="Enterprise_PPC_Marketing-ag-courses-item_title">
            6. Enterprise Amazon Marketing
          </div>
          <div className="Enterprise_PPC_Marketing-ag-courses-item_date-box">
            Boost your Amazon sales with Knoqlogico's enterprise PPC services.
            We optimize your product listings using high-converting keywords,
            improve seller reputation, and implement sponsored ads to expand
            your reach. Our experts ensure your listings stand out, helping you
            gain more reviews, visibility for better performance.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default Enterprise_PPC_Marketing