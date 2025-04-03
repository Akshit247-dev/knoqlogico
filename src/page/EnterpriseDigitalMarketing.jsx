import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./EnterpriseDigitalMarketing.css"
import enterpriseDigitalMarketingImage from '../assets/img/10782789_19199219.svg';
import { Link } from "react-router-dom";

function EnterpriseDigitalMarketing() {
  return (
    <>
    <Header/>
    {/* MAIN----------------------- */}
    <div className="EnterpriseDigitalMarketing-main">
      <div className="EnterpriseDigitalMarketing-main-blue-cover" />
      <div className="EnterpriseDigitalMarketing-content">
        <h2>Enterprise Digital Marketing</h2>
        <ul>
          <li>Home</li>
          <li>&gt;</li>
          <li>What we do</li>
          <li>&gt;</li>
          <li>Enterprise Digital Marketing</li>
        </ul>
      </div>
    </div>
    {/* TAGLINE-------------------- */}
    <div className="EnterpriseDigitalMarketing-tagline-section">
      <h2>Enterprise Digital Marketing</h2>
      <div className="EnterpriseDigitalMarketing-beat-img" />
      <p>
        Why Your Business Could Benefit from Comprehensive Digital Marketing
        Solutions - Everything You Need, All in One Place.
      </p>
    </div>
    {/* HERO SECTION-------------- */}
    <div className="EnterpriseDigitalMarketing-hero-section">
    <div className="EnterpriseDigitalMarketing-hero-img">
      <img src={enterpriseDigitalMarketingImage} alt="Enterprise Digital Marketing" />
    </div>
      <div className="EnterpriseDigitalMarketing-hero-content">
        <p className="EnterpriseDigitalMarketing-hero-techie">Our Digital Marketing Experts</p>
        <h3>Enterprise Digital Marketing</h3>
        <div className="EnterpriseDigitalMarketing-hero-conent-para">
          <p>
            Large organizations often encounter distinct marketing challenges,
            stemming from their expansive audience and complex structure.With
            numerous departments working on different projects, maintaining
            consistent messaging can be difficult, leading to a fragmented
            customer experience.
          </p>
          <p>
            That's where Knoqlogico's enterprise marketing comes in. We simplify
            your digital marketing strategy by aligning all your efforts across
            every touchpoint, creating a cohesive plan tailored to address your
            unique challenges, goals, and audience.
          </p>
        </div>
        <div className="EnterpriseDigitalMarketing-hero-button">
        <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
    {/* CARDS - PROCESS------------------ */}
    <div className="EnterpriseDigitalMarketing-ag-format-container">
      <div className="EnterpriseDigitalMarketing-ag-courses_box">
        <div className="EnterpriseDigitalMarketing-ag-courses_item">
          <a href="#" className="EnterpriseDigitalMarketing-ag-courses-item_link">
            <div className="EnterpriseDigitalMarketing-ag-courses-item_bg" />
            <div className="EnterpriseDigitalMarketing-ag-courses-item_title">1. Scalability</div>
            <div className="EnterpriseDigitalMarketing-ag-courses-item_date-box">
              As your business expands, so does your customer base and their
              evolving needs. At Knoqlogico, our enterprise digital marketing
              solutions grow with you, making it easy to meet increasing demand
              without the need for major changes.
            </div>
          </a>
        </div>
        <div className="EnterpriseDigitalMarketing-ag-courses_item">
          <a href="#" className="EnterpriseDigitalMarketing-ag-courses-item_link">
            <div className="EnterpriseDigitalMarketing-ag-courses-item_bg" />
            <div className="EnterpriseDigitalMarketing-ag-courses-item_title">2. Data-Driven</div>
            <div className="EnterpriseDigitalMarketing-ag-courses-item_date-box">
              Large companies have access to a wealth of data from various
              sources. At Knoqlogico, we leverage this data, along with market
              research, to craft tailored strategies that drive better results and
              higher returns for your business.
            </div>
          </a>
        </div>
        <div className="EnterpriseDigitalMarketing-ag-courses_item">
          <a href="#" className="EnterpriseDigitalMarketing-ag-courses-item_link">
            <div className="EnterpriseDigitalMarketing-ag-courses-item_bg" />
            <div className="EnterpriseDigitalMarketing-ag-courses-item_title">3. Go Global</div>
            <div className="EnterpriseDigitalMarketing-ag-courses-item_date-box">
              Utilize online channels like social media, emails, and paid search
              to connect with your wider audience. With Knoqlogico's enterprise
              marketing expertise, you can broaden your reach globally and unlock
              a new marketing opportunities.
            </div>
          </a>
        </div>
        <div className="EnterpriseDigitalMarketing-ag-courses_item">
          <a href="#" className="EnterpriseDigitalMarketing-ag-courses-item_link">
            <div className="EnterpriseDigitalMarketing-ag-courses-item_bg" />
            <div className="EnterpriseDigitalMarketing-ag-courses-item_title">
              4. Enterprise Lead Generation
            </div>
            <div className="EnterpriseDigitalMarketing-ag-courses-item_date-box">
              Enterprise marketing requires a new approach for traditional B2C or
              B2B lead generation. Our lead generation experts customize
              strategies for your industry &amp; audience, help you attract
              higher-quality leads that convert.
            </div>
          </a>
        </div>
        <div className="EnterpriseDigitalMarketing-ag-courses_item">
          <a href="#" className="EnterpriseDigitalMarketing-ag-courses-item_link">
            <div className="EnterpriseDigitalMarketing-ag-courses-item_bg" />
            <div className="EnterpriseDigitalMarketing-ag-courses-item_title">5. Brand Consistency</div>
            <div className="EnterpriseDigitalMarketing-ag-courses-item_date-box">
              With our enterprise digital marketing strategy, your brand message
              stays consistent across every touchpoint. Whether it's your website,
              social media, or email marketing, customers will have a seamless
              experience everywhere.
            </div>
          </a>
        </div>
        <div className="EnterpriseDigitalMarketing-ag-courses_item">
          <a href="#" className="EnterpriseDigitalMarketing-ag-courses-item_link">
            <div className="EnterpriseDigitalMarketing-ag-courses-item_bg" />
            <div className="EnterpriseDigitalMarketing-ag-courses-item_title">
              6. Laser-Focused Targeting
            </div>
            <div className="EnterpriseDigitalMarketing-ag-courses-item_date-box">
              With precise targeting options like demographics, interests, and
              behavior, Knoqlogico helps you save money by focusing only on those
              truly interested in your offerings. Plus, we help you remarket to
              potential customers.
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default EnterpriseDigitalMarketing