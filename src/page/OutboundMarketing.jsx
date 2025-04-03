import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./OutboundMarketing.css"
import heroImage from '../assets/img/10782697_19197898.svg';
import { Link } from "react-router-dom";

function OutboundMarketing() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="OutboundMarketing-main">
    <div className="OutboundMarketing-main-blue-cover" />
    <div className="OutboundMarketing-content">
      <h2>Outbound Marketing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Outbound Marketing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="OutboundMarketing-tagline-section">
    <h2>Outbound Marketing</h2>
    <div className="OutboundMarketing-beat-img" />
    <p>Reaching Beyond the Inbox: Engaging Your Audience, Driving Results.</p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="OutboundMarketing-hero-section">
    <div className="OutboundMarketing-hero-img">
    <img src={heroImage} alt="Hero Image" />
    </div>
    <div className="OutboundMarketing-hero-content">
      <p className="OutboundMarketing-hero-techie">Our Content Marketing Experts</p>
      <h3>Outbound Marketing</h3>
      <div className="OutboundMarketing-hero-conent-para">
        <p>
          Outbound marketing is all about reaching out to potential customers
          directly and getting your brand in front of them. This could mean
          things like cold calling, sending emails, or running ads that target
          specific groups of people. The goal is to actively engage with your
          audience, whether they're already aware of your brand or not, and grab
          their attention with compelling offers or valuable content.
        </p>
        <p>
          While it might seem more traditional compared to inbound marketing,
          outbound marketing can still work wonders when done right. It's about
          being proactive, reaching out to the right people at the right time,
          and starting a conversation that could lead to long-term
          relationships. Think of it as casting a wider net and hoping to catch
          the interest of your ideal customer.
        </p>
      </div>
      <div className="OutboundMarketing-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="OutboundMarketing-ag-format-container">
    <div className="OutboundMarketing-ag-courses_box">
      <div className="OutboundMarketing-ag-courses_item">
        <a href="#" className="OutboundMarketing-ag-courses-item_link">
          <div className="OutboundMarketing-ag-courses-item_bg" />
          <div className="OutboundMarketing-ag-courses-item_title">1. Cold Calling</div>
          <div className="OutboundMarketing-ag-courses-item_date-box">
            Directly reaching out to potential customers via phone calls. This
            approach allows for immediate, personalized interaction and helps
            build relationships with prospects.
          </div>
        </a>
      </div>
      <div className="OutboundMarketing-ag-courses_item">
        <a href="#" className="OutboundMarketing-ag-courses-item_link">
          <div className="OutboundMarketing-ag-courses-item_bg" />
          <div className="OutboundMarketing-ag-courses-item_title">
            2. Email Marketing Campaigns
          </div>
          <div className="OutboundMarketing-ag-courses-item_date-box">
            Sending targeted emails to specific customer segments with
            personalized offers, updates, or promotions. This keeps your brand
            top of mind and encourages engagement.
          </div>
        </a>
      </div>
      <div className="OutboundMarketing-ag-courses_item">
        <a href="#" className="OutboundMarketing-ag-courses-item_link">
          <div className="OutboundMarketing-ag-courses-item_bg" />
          <div className="OutboundMarketing-ag-courses-item_title">3. Paid Advertising (PPC)</div>
          <div className="OutboundMarketing-ag-courses-item_date-box">
            Running paid ads on platforms like Google Ads, social media, or
            display networks to drive traffic to your site. PPC ads can be
            highly targeted based on demographics, interests, or search
            behavior.
          </div>
        </a>
      </div>
      <div className="OutboundMarketing-ag-courses_item">
        <a href="#" className="OutboundMarketing-ag-courses-item_link">
          <div className="OutboundMarketing-ag-courses-item_bg" />
          <div className="OutboundMarketing-ag-courses-item_title">4. Direct Mail</div>
          <div className="OutboundMarketing-ag-courses-item_date-box">
            Sending physical mail such as postcards, brochures, or catalogs to
            potential customers. This method can help your brand stand out and
            make a tangible impression.
          </div>
        </a>
      </div>
      <div className="OutboundMarketing-ag-courses_item">
        <a href="#" className="OutboundMarketing-ag-courses-item_link">
          <div className="OutboundMarketing-ag-courses-item_bg" />
          <div className="OutboundMarketing-ag-courses-item_title">5. Event Marketing</div>
          <div className="OutboundMarketing-ag-courses-item_date-box">
            Attending or hosting events where you can directly interact with
            potential clients, showcase your products or services, build
            meaningful relationships, &amp; generate business opportunities.
          </div>
        </a>
      </div>
      <div className="OutboundMarketing-ag-courses_item">
        <a href="#" className="OutboundMarketing-ag-courses-item_link">
          <div className="OutboundMarketing-ag-courses-item_bg" />
          <div className="OutboundMarketing-ag-courses-item_title">6. Broadcasting</div>
          <div className="OutboundMarketing-ag-courses-item_date-box">
            Using traditional media like TV or radio ads to reach a broad
            audience. This approach is effective for building awareness,
            especially with mass-market products or services.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default OutboundMarketing