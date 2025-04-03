import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./CustomWebsiteDesign.css"
import customWebsiteImage from '../assets/img/8354902_3847762.jpg';
import { Link } from "react-router-dom";

function CustomWebsiteDesign() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="CustomWebsiteDesign-main">
    <div className="CustomWebsiteDesign-main-blue-cover" />
    <div className="CustomWebsiteDesign-content">
      <h2>Custom Website Design</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Custom Website Design</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="CustomWebsiteDesign-tagline-section">
    <h2>Custom Website Design</h2>
    <div className="CustomWebsiteDesign-beat-img" />
    <p>
      Custom web design offers the flexibility and uniqueness required to create
      a site tailored to your brand's specific needs and goals.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="CustomWebsiteDesign-hero-section">
  <div className="CustomWebsiteDesign-hero-img">
      <img src={customWebsiteImage} alt="Custom Website Design" />
    </div>
    <div className="CustomWebsiteDesign-hero-content">
      <p className="CustomWebsiteDesign-hero-techie">Our Web Experts</p>
      <h3>Custom Website Design</h3>
      <div className="CustomWebsiteDesign-hero-conent-para">
        <p>
          Your website is a vital tool for showcasing your brand and engaging
          with clients globally, operating around the clock to drive results.
          However, achieving your ROI goals often depends on a critical
          decision: opting for a website template or a custom design.
        </p>
        <p>
          Website templates are pre-designed frameworks crafted using HTML or
          CSS, where developers can insert content into a predefined structure.
          While they allow for minor edits, such as adjusting colors, fonts, and
          images, their limitations become apparent—what you see is essentially
          what you get. Though cost-effective and time-saving, templates often
          lack the flexibility and originality needed to distinguish your brand.
        </p>
      </div>
      <div className="CustomWebsiteDesign-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="CustomWebsiteDesign-ag-format-container">
    <div className="CustomWebsiteDesign-ag-courses_box">
      <div className="CustomWebsiteDesign-ag-courses_item">
        <a href="#" className="CustomWebsiteDesign-ag-courses-item_link">
          <div className="CustomWebsiteDesign-ag-courses-item_bg" />
          <div className="CustomWebsiteDesign-ag-courses-item_title">1. WordPress Experts</div>
          <div className="CustomWebsiteDesign-ag-courses-item_date-box">
            Avoid a generic website that gets lost in the digital noise. Trust
            our custom website design company and collaborate with skilled
            WordPress specialists. Our experts move beyond pre-made themes and
            plugins, crafting a distinctive and refined site that embodies your
            unique branding and delivers you an exceptional user experience.
          </div>
        </a>
      </div>
      <div className="CustomWebsiteDesign-ag-courses_item">
        <a href="#" className="CustomWebsiteDesign-ag-courses-item_link">
          <div className="CustomWebsiteDesign-ag-courses-item_bg" />
          <div className="CustomWebsiteDesign-ag-courses-item_title">2. Website Analysis</div>
          <div className="CustomWebsiteDesign-ag-courses-item_date-box">
            We gather and analyze your website data to create a custom eCommerce
            design that boosts organic traffic. Our team conducts usability
            analysis, reviews content accuracy and consistency, and tests your
            site's technical performance across browsers. This approach ensures
            your custom design meets the needs of your target audience.
          </div>
        </a>
      </div>
      <div className="CustomWebsiteDesign-ag-courses_item">
        <a href="#" className="CustomWebsiteDesign-ag-courses-item_link">
          <div className="CustomWebsiteDesign-ag-courses-item_bg" />
          <div className="CustomWebsiteDesign-ag-courses-item_title">3. CMS Integration</div>
          <div className="CustomWebsiteDesign-ag-courses-item_date-box">
            Incorporate CMS capabilities into your custom web design to
            streamline content creation and translation processes. At
            Knowlogico, we use advanced plugins and technologies to manage
            multilingual sites efficiently. Our web design solutions provide
            content flexibility and include reusable patterns for optimized
            eCommerce features.
          </div>
        </a>
      </div>
      <div className="CustomWebsiteDesign-ag-courses_item">
        <a href="#" className="CustomWebsiteDesign-ag-courses-item_link">
          <div className="CustomWebsiteDesign-ag-courses-item_bg" />
          <div className="CustomWebsiteDesign-ag-courses-item_title">4. Responsive Web Design</div>
          <div className="CustomWebsiteDesign-ag-courses-item_date-box">
            Research by QuBit reveals that slow-loading websites cause an
            estimated $2.6 billion in annual revenue loss. Ensure your site
            adjusts seamlessly to all screen sizes and devices to enhance
            customer retention. At Knowlogico, we employ scalable vector
            graphics (SVGs), optimize clickable areas and buttons, use
            responsive images, and leverage device features to drive sales.
          </div>
        </a>
      </div>
      <div className="CustomWebsiteDesign-ag-courses_item">
        <a href="#" className="CustomWebsiteDesign-ag-courses-item_link">
          <div className="CustomWebsiteDesign-ag-courses-item_bg" />
          <div className="CustomWebsiteDesign-ag-courses-item_title">5. Website Maintenance</div>
          <div className="CustomWebsiteDesign-ag-courses-item_date-box">
            Rest assured with Knowlogico's professional custom web design team
            managing your site updates and maintenance. We conduct user testing,
            perform backups, address security updates, fix broken links, remove
            redundant form fields, and execute test purchases. Our team provides
            prompt and dependable technical support to protect your website from
            cyber threats.
          </div>
        </a>
      </div>
      <div className="CustomWebsiteDesign-ag-courses_item">
        <a href="#" className="CustomWebsiteDesign-ag-courses-item_link">
          <div className="CustomWebsiteDesign-ag-courses-item_bg" />
          <div className="CustomWebsiteDesign-ag-courses-item_title">
            6. Conversion Rate Optimization
          </div>
          <div className="CustomWebsiteDesign-ag-courses-item_date-box">
            Increase your leads and conversions with Knowlogico's custom web
            design packages. Our team of design and development specialists is
            dedicated to attracting high-quality traffic to your site. We craft
            engaging content, optimize visuals, implement and test effective
            call-to-action, and streamline your website's registration &amp;
            checkout processes.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default CustomWebsiteDesign