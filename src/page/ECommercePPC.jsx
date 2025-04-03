import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./ECommercePPC.css"
import ecommercePPCImage from '../assets/img/10783890_19197433.svg';
import { Link } from "react-router-dom";

function ECommercePPC() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="ECommercePPC-main">
    <div className="ECommercePPC-main-blue-cover" />
    <div className="ECommercePPC-content">
      <h2>eCommerce PPC</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>eCommerce PPC</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="ECommercePPC-tagline-section">
    <h2>eCommerce PPC</h2>
    <div className="ECommercePPC-beat-img" />
    <p>
      Drive Targeted Traffic, Boost Sales, and Maximize ROI with eCommerce PPC.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="ECommercePPC-hero-section">
  <div className="ECommercePPC-hero-img">
      <img src={ecommercePPCImage} alt="ECommerce PPC" />
    </div>
    <div className="ECommercePPC-hero-content">
      <p className="ECommercePPC-hero-techie">Our eCommerce Experts</p>
      <h3>eCommerce PPC</h3>
      <div className="ECommercePPC-hero-conent-para">
        <p>
          eCommerce PPC (Pay-Per-Click) is all about helping your online store
          get in front of the right people at the right time. We create targeted
          ad campaigns that make your products stand out when shoppers are
          actively searching for them. Whether it's on Google, Facebook, or
          other platforms, we ensure your ads reach potential customers, drive
          traffic to your site, and ultimately boost sales.
        </p>
        <p>
          Our team works closely with you to identify the best keywords and
          strategies for your specific business. We keep an eye on how the ads
          are performing, making adjustments as needed to make sure you're
          getting the best return on investment. With eCommerce PPC, you don't
          just attract visitors - you bring in people who are ready to buy.
        </p>
      </div>
      <div className="ECommercePPC-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="ECommercePPC-ag-format-container">
    <div className="ECommercePPC-ag-courses_box">
      <div className="ECommercePPC-ag-courses_item">
        <a href="#" className="ECommercePPC-ag-courses-item_link">
          <div className="ECommercePPC-ag-courses-item_bg" />
          <div className="ECommercePPC-ag-courses-item_title">1. Campaign Strategy Dev.</div>
          <div className="ECommercePPC-ag-courses-item_date-box">
            We create tailored PPC strategies that align with your business
            goals and target audience to maximize ROI.
          </div>
        </a>
      </div>
      <div className="ECommercePPC-ag-courses_item">
        <a href="#" className="ECommercePPC-ag-courses-item_link">
          <div className="ECommercePPC-ag-courses-item_bg" />
          <div className="ECommercePPC-ag-courses-item_title">2. Keyword Research</div>
          <div className="ECommercePPC-ag-courses-item_date-box">
            In-depth research to find high-converting keywords and optimize your
            PPC ads to drive targeted traffic.
          </div>
        </a>
      </div>
      <div className="ECommercePPC-ag-courses_item">
        <a href="#" className="ECommercePPC-ag-courses-item_link">
          <div className="ECommercePPC-ag-courses-item_bg" />
          <div className="ECommercePPC-ag-courses-item_title">3. Ad Copywriting</div>
          <div className="ECommercePPC-ag-courses-item_date-box">
            Crafting compelling ad copy and designing attention-grabbing visuals
            to improve click-through rates (CTR) and engagement.
          </div>
        </a>
      </div>
      <div className="ECommercePPC-ag-courses_item">
        <a href="#" className="ECommercePPC-ag-courses-item_link">
          <div className="ECommercePPC-ag-courses-item_bg" />
          <div className="ECommercePPC-ag-courses-item_title">
            4. Landing Page Optimization
          </div>
          <div className="ECommercePPC-ag-courses-item_date-box">
            Designing and optimizing landing pages that convert visitors into
            customers by aligning with ad messaging and improving UX.
          </div>
        </a>
      </div>
      <div className="ECommercePPC-ag-courses_item">
        <a href="#" className="ECommercePPC-ag-courses-item_link">
          <div className="ECommercePPC-ag-courses-item_bg" />
          <div className="ECommercePPC-ag-courses-item_title">5. Bid Management</div>
          <div className="ECommercePPC-ag-courses-item_date-box">
            Constant monitoring and adjusting of bids to maximize your ad spend,
            ensuring you only pay for clicks that matter.
          </div>
        </a>
      </div>
      <div className="ECommercePPC-ag-courses_item">
        <a href="#" className="ECommercePPC-ag-courses-item_link">
          <div className="ECommercePPC-ag-courses-item_bg" />
          <div className="ECommercePPC-ag-courses-item_title">6. Performance Tracking</div>
          <div className="ECommercePPC-ag-courses-item_date-box">
            Detailed analysis and reporting to track your PPC campaign
            performance, identify trends, and optimize for better results.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default ECommercePPC