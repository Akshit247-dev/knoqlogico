import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./ContentMarketing.css"
import contentMarketingImage from '../assets/img/9908153_4309857.jpg'; 
import { Link } from "react-router-dom";

function ContentMarketing() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="ContentMarketing-main">
    <div className="ContentMarketing-main-blue-cover" />
    <div className="ContentMarketing-content">
      <h2>Content Marketing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Content Marketing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="ContentMarketing-tagline-section">
    <h2>Content Marketing</h2>
    <div className="ContentMarketing-beat-img" />
    <p>
      Craft Compelling Stories, Engage Your Audience, and Drive Conversions with
      Expert Content Marketing Solutions.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="ContentMarketing-hero-section">
  <div className="ContentMarketing-hero-img">
      <img src={contentMarketingImage} alt="Content Marketing" />
    </div>
    <div className="ContentMarketing-hero-content">
      <p className="ContentMarketing-hero-techie">Our Content Marketing Experts</p>
      <h3>Content Marketing</h3>
      <div className="ContentMarketing-hero-conent-para">
        <p>
          Content marketing focuses on creating, publishing, and distributing
          valuable content to attract and engage a clearly defined audience.
          This strategy builds trust, nurtures customer relationships, and
          drives conversions by addressing the specific needs and interests of
          your target market. Whether through blogs, videos, social media posts,
          or infographics, content marketing delivers consistent, relevant
          messaging that positions your brand as a leader in its field.
        </p>
        <p>
          At Knoqlogico, we craft tailored content strategies that resonate with
          your audience and align with your business objectives. Our team
          performs in-depth research to identify trending topics, keywords, and
          customer pain points. We develop high-quality content optimized for
          search engines and user engagement, ensuring every piece drives
          traffic, boosts brand visibility, and fosters long-term growth.
        </p>
      </div>
      <div className="ContentMarketing-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="ContentMarketing-ag-format-container">
    <div className="ContentMarketing-ag-courses_box">
      <div className="ContentMarketing-ag-courses_item">
        <a href="#" className="ContentMarketing-ag-courses-item_link">
          <div className="ContentMarketing-ag-courses-item_bg" />
          <div className="ContentMarketing-ag-courses-item_title">1. Strategy Development</div>
          <div className="ContentMarketing-ag-courses-item_date-box">
            Begin with a thorough analysis of your business goals, target
            audience, and industry trends. Identify content gaps and
            opportunities to craft strategy that aligns with your objectives,
            ensuring a strong foundation for all marketing efforts.
          </div>
        </a>
      </div>
      <div className="ContentMarketing-ag-courses_item">
        <a href="#" className="ContentMarketing-ag-courses-item_link">
          <div className="ContentMarketing-ag-courses-item_bg" />
          <div className="ContentMarketing-ag-courses-item_title">2. Content Creation</div>
          <div className="ContentMarketing-ag-courses-item_date-box">
            Produce high-quality, engaging, and valuable content tailored to
            your audience's needs. This includes blogs, videos, case studies,
            infographics, and whitepapers that address pain points, educate, and
            inspire your audience.
          </div>
        </a>
      </div>
      <div className="ContentMarketing-ag-courses_item">
        <a href="#" className="ContentMarketing-ag-courses-item_link">
          <div className="ContentMarketing-ag-courses-item_bg" />
          <div className="ContentMarketing-ag-courses-item_title">3. Content Optimization</div>
          <div className="ContentMarketing-ag-courses-item_date-box">
            Use SEO techniques to improve content visibility. This includes
            strategic keyword integration, meta-tagging, creating
            mobile-friendly formats, and ensuring your content aligns with user
            intent and search engine algorithms.
          </div>
        </a>
      </div>
      <div className="ContentMarketing-ag-courses_item">
        <a href="#" className="ContentMarketing-ag-courses-item_link">
          <div className="ContentMarketing-ag-courses-item_bg" />
          <div className="ContentMarketing-ag-courses-item_title">4. Content Distribution</div>
          <div className="ContentMarketing-ag-courses-item_date-box">
            Amplify your content through multiple channels, such as social
            media, email newsletters, paid ads, and collaboration with
            influencers. Leverage each platform's unique strengths to reach and
            engage your audience effectively.
          </div>
        </a>
      </div>
      <div className="ContentMarketing-ag-courses_item">
        <a href="#" className="ContentMarketing-ag-courses-item_link">
          <div className="ContentMarketing-ag-courses-item_bg" />
          <div className="ContentMarketing-ag-courses-item_title">5. Performance Monitoring</div>
          <div className="ContentMarketing-ag-courses-item_date-box">
            Track and analyze metrics like website traffic, engagement rates,
            click-through rates, and conversions. Use advanced analytics tools
            to gain insights into what resonates with your audience and refine
            your strategy accordingly.
          </div>
        </a>
      </div>
      <div className="ContentMarketing-ag-courses_item">
        <a href="#" className="ContentMarketing-ag-courses-item_link">
          <div className="ContentMarketing-ag-courses-item_bg" />
          <div className="ContentMarketing-ag-courses-item_title">6. Continuous Improvement</div>
          <div className="ContentMarketing-ag-courses-item_date-box">
            Based on performance data, optimize your strategy and content to
            enhance ROI. Experiment with new formats, trends, and channels to
            ensure your content remains fresh, relevant, and impactful in
            achieving your goals.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default ContentMarketing