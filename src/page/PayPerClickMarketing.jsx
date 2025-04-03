import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./PayPerClickMarketing.css"
import wavyTechImage from '../assets/img/12290961_Wavy_Tech-15_Single-06.svg';
import { Link } from "react-router-dom";

function PayPerClickMarketing() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="PayPerClickMarketing-main">
    <div className="PayPerClickMarketing-main-blue-cover" />
    <div className="PayPerClickMarketing-content">
      <h2>Pay Per Click Marketing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Pay Per Click Marketing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="PayPerClickMarketing-tagline-section">
    <h2>Pay Per Click Marketing</h2>
    <div className="PayPerClickMarketing-beat-img" />
    <p>
      Reach the right audience at the right time with data-driven pay-per-click
      strategies designed to maximize ROI and grow your online presence.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="PayPerClickMarketing-hero-section">
    <div className="PayPerClickMarketing-hero-img">
    <img src={wavyTechImage} alt="Wavy Tech Image" />
    </div>
    <div className="PayPerClickMarketing-hero-content">
      <p className="PayPerClickMarketing-hero-techie">Our PPC Experts</p>
      <h3>Pay Per Click Marketing</h3>
      <div className="PayPerClickMarketing-hero-conent-para">
        <p>
          Pay-per-click (PPC) marketing is a smart way to connect with your
          audience exactly when they're looking for what you offer. It's about
          being visible when it matters most, without wasting resources. With
          PPC, you only pay when someone clicks on your ad, making it an
          efficient way to drive traffic, generate leads, and boost sales.
          Whether it's Google Ads, Bing, or social media platforms, we help you
          navigate the complexities to ensure your campaigns deliver real,
          measurable results.
        </p>
        <p>
          We understand that every business has unique goals, and that's why we
          take a personalized approach to PPC. It's not just about setting up
          ads; it's about understanding your audience, crafting compelling
          messages, and optimizing campaigns to get the best bang for your buck.
          Our focus is on transparency, continuous improvement, and making sure
          you see the value in every click. With us, you get a partner who
          genuinely cares about your success.
        </p>
      </div>
      <div className="PayPerClickMarketing-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="PayPerClickMarketing-ag-format-container">
    <div className="PayPerClickMarketing-ag-courses_box">
      <div className="PayPerClickMarketing-ag-courses_item">
        <a href="#" className="PayPerClickMarketing-ag-courses-item_link">
          <div className="PayPerClickMarketing-ag-courses-item_bg" />
          <div className="PayPerClickMarketing-ag-courses-item_title">1. Keyword Research</div>
          <div className="PayPerClickMarketing-ag-courses-item_date-box">
            We analyze your target audience and industry to identify the most
            relevant keywords for your campaigns, ensuring your ads reach to
            right people at right time.
          </div>
        </a>
      </div>
      <div className="PayPerClickMarketing-ag-courses_item">
        <a href="#" className="PayPerClickMarketing-ag-courses-item_link">
          <div className="PayPerClickMarketing-ag-courses-item_bg" />
          <div className="PayPerClickMarketing-ag-courses-item_title">2. Campaign Setup</div>
          <div className="PayPerClickMarketing-ag-courses-item_date-box">
            From creating engaging ad copy to setting up campaigns on platforms
            like Google Ads and Bing, we manage every aspect to drive maximum
            ROI.
          </div>
        </a>
      </div>
      <div className="PayPerClickMarketing-ag-courses_item">
        <a href="#" className="PayPerClickMarketing-ag-courses-item_link">
          <div className="PayPerClickMarketing-ag-courses-item_bg" />
          <div className="PayPerClickMarketing-ag-courses-item_title">3. A/B Testing</div>
          <div className="PayPerClickMarketing-ag-courses-item_date-box">
            We test different ad formats, headlines, and visuals to see what
            resonates most with your audience, refining campaigns for optimal
            performance.
          </div>
        </a>
      </div>
      <div className="PayPerClickMarketing-ag-courses_item">
        <a href="#" className="PayPerClickMarketing-ag-courses-item_link">
          <div className="PayPerClickMarketing-ag-courses-item_bg" />
          <div className="PayPerClickMarketing-ag-courses-item_title">4. Landing Page Design</div>
          <div className="PayPerClickMarketing-ag-courses-item_date-box">
            Our team designs and optimizes landing pages tailored to your
            campaigns, ensuring they're visually appealing and
            conversion-focused.
          </div>
        </a>
      </div>
      <div className="PayPerClickMarketing-ag-courses_item">
        <a href="#" className="PayPerClickMarketing-ag-courses-item_link">
          <div className="PayPerClickMarketing-ag-courses-item_bg" />
          <div className="PayPerClickMarketing-ag-courses-item_title">5. Remarketing Campaigns</div>
          <div className="PayPerClickMarketing-ag-courses-item_date-box">
            We help you reconnect with potential customers who've previously
            visited your site by creating compelling remarketing ads that bring
            them back.
          </div>
        </a>
      </div>
      <div className="PayPerClickMarketing-ag-courses_item">
        <a href="#" className="PayPerClickMarketing-ag-courses-item_link">
          <div className="PayPerClickMarketing-ag-courses-item_bg" />
          <div className="PayPerClickMarketing-ag-courses-item_title">6. Performance Tracking</div>
          <div className="PayPerClickMarketing-ag-courses-item_date-box">
            We provide detailed reports with actionable insights, keeping you
            informed about your campaign's progress and opportunities for
            improvement.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default PayPerClickMarketing