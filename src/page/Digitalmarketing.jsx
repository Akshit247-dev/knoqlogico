import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./Digitalmarketing.css"
import digitalMarketingImage from '../assets/img/rb_28145.png';
import { Link } from "react-router-dom";

function Digitalmarketing() {
  return (
   
   <>
   <Header />
  {/* MAIN----------------------- */}
  <div className="Digitalmarketing-main">
    <div className="Digitalmarketing-main-blue-cover" />
    <div className="Digitalmarketing-content">
      <h2>Digital Marketing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>Services</li>
        <li>&gt;</li>
        <li>Digital Marketing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="Digitalmarketing-tagline-section">
    <h2>Digital Marketing</h2>
    <div className="Digitalmarketing-beat-img" />
    <p>
      We craft result-driven digital marketing strategies to boost your online
      visibility, drive targeted traffic, and convert leads into loyal customers
      through SEO, content, and paid ads.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="Digitalmarketing-hero-section">
  <div className="Digitalmarketing-hero-img">
      <img src={digitalMarketingImage} alt="Digital Marketing" />
    </div>
    <div className="Digitalmarketing-hero-content">
      <p className="Digitalmarketing-hero-techie">Our Digital Marketing Experts</p>
      <h3>Digital Marketing</h3>
      <div className="Digitalmarketing-hero-conent-para">
        <p>
          At Knoqlogico, we believe that every brand has a unique story to tell,
          and our digital marketing strategies are designed to amplify that
          story. From building a strong online presence to creating impactful
          campaigns, we ensure that our clients connect with their target
          audience effectively. By leveraging data-driven insights, cutting-edge
          tools, and a creative approach, we deliver measurable results that
          help businesses grow and thrive in today's competitive landscape.
        </p>
        <p>
          Our team goes beyond the basics to foster long-term success for our
          clients. We specialize in SEO, social media marketing, pay-per-click
          advertising, and content creation that not only attract potential
          customers but also build lasting relationships. With a focus on
          innovation and collaboration, Knoqlogico empowers businesses to reach
          new heights while staying true to their core values.
        </p>
      </div>
      <div className="Digitalmarketing-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* <h2 style="text-align: center; margin-top: 40px; padding: 6px 10px; background-color: #e2e2e2;">
Our Digital Marketing Services
    </h2> */}
  {/* CARDS - PROCESS------------------ */}
  <div className="Digitalmarketing-ag-format-container">
    <div className="Digitalmarketing-ag-courses_box">
      <div className="Digitalmarketing-ag-courses_item">
        <a href="#" className="Digitalmarketing-ag-courses-item_link">
          <div className="Digitalmarketing-ag-courses-item_bg" />
          <div className="Digitalmarketing-ag-courses-item_title">
            1. Digital Marketing Strategy
          </div>
          <div className="Digitalmarketing-ag-courses-item_date-box">
            A clear and focused digital marketing strategy is essential for
            achieving your business goals. Our team designs data-driven plans,
            including SEO, content marketing, and social media strategies,
            ensuring maximum reach and ROI.
          </div>
        </a>
      </div>
      <div className="Digitalmarketing-ag-courses_item">
        <a href="#" className="Digitalmarketing-ag-courses-item_link">
          <div className="Digitalmarketing-ag-courses-item_bg" />
          <div className="Digitalmarketing-ag-courses-item_title">
            2. Digital Marketing Content Creation
          </div>
          <div className="Digitalmarketing-ag-courses-item_date-box">
            Content drives digital campaigns. Our experts create SEO-optimized,
            engaging content, from blog posts to videos and social media
            updates. Every piece is crafted to connect with your audience,
            enhance engagement, and boost search engine rankings.
          </div>
        </a>
      </div>
      <div className="Digitalmarketing-ag-courses_item">
        <a href="#" className="Digitalmarketing-ag-courses-item_link">
          <div className="Digitalmarketing-ag-courses-item_bg" />
          <div className="Digitalmarketing-ag-courses-item_title">
            3. Digital Marketing Advertising
          </div>
          <div className="Digitalmarketing-ag-courses-item_date-box">
            We design targeted advertising campaigns across platforms like
            Google Ads, Facebook, Instagram, and LinkedIn. These campaigns are
            tailored to reach your ideal audience, ensuring your message drives
            traffic, conversions, and measurable results.
          </div>
        </a>
      </div>
      <div className="Digitalmarketing-ag-courses_item">
        <a href="#" className="Digitalmarketing-ag-courses-item_link">
          <div className="Digitalmarketing-ag-courses-item_bg" />
          <div className="Digitalmarketing-ag-courses-item_title">
            4. Digital Marketing Analytics
          </div>
          <div className="Digitalmarketing-ag-courses-item_date-box">
            Our analytics services provide in-depth insights into your
            campaign's performance, covering website traffic, engagement, and
            conversion rates. Using this data, we refine your marketing
            strategies to improve ROI and achieve better outcomes.
          </div>
        </a>
      </div>
      <div className="Digitalmarketing-ag-courses_item">
        <a href="#" className="Digitalmarketing-ag-courses-item_link">
          <div className="Digitalmarketing-ag-courses-item_bg" />
          <div className="Digitalmarketing-ag-courses-item_title">
            5. Digital Marketing Engagement
          </div>
          <div className="Digitalmarketing-ag-courses-item_date-box">
            Strengthening your audience relationships is key. We implement
            innovative strategies that enhance meaningful interactions on social
            media, email marketing, and online communities, fostering deeper
            customer loyalty and building enduring brand advocacy.
          </div>
        </a>
      </div>
      <div className="Digitalmarketing-ag-courses_item">
        <a href="#" className="Digitalmarketing-ag-courses-item_link">
          <div className="Digitalmarketing-ag-courses-item_bg" />
          <div className="Digitalmarketing-ag-courses-item_title">
            6. Digital Marketing Optimization
          </div>
          <div className="Digitalmarketing-ag-courses-item_date-box">
            Optimization is the backbone of digital success. Through A/B
            testing, SEO audits, and campaign performance tracking, we refine
            your strategies continuously. This ensures your marketing remains
            effective, driving maximum returns and keeping you ahead of the
            competition.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>
  )
}

export default Digitalmarketing