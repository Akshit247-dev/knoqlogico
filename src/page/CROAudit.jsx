import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./CROAudit.css"
import croAuditImage from '../assets/img/10782759_19197295.svg';
import { Link } from "react-router-dom";

function CROAudit() {
  return (
    <>
    <Header/>
    {/* MAIN----------------------- */}
    <div className="CROAudit-main">
      <div className="CROAudit-main-blue-cover" />
      <div className="CROAudit-content">
        <h2>CRO Audit</h2>
        <ul>
          <li>Home</li>
          <li>&gt;</li>
          <li>What we do</li>
          <li>&gt;</li>
          <li>CRO Audit</li>
        </ul>
      </div>
    </div>
    {/* TAGLINE-------------------- */}
    <div className="CROAudit-tagline-section">
      <h2>CRO Audit</h2>
      <div className="CROAudit-beat-img" />
      <p>
        Overcome conversion challenges and transform your visitors into loyal
        customers. Seize growth opportunities and enhance your revenue potential.
      </p>
    </div>
    {/* HERO SECTION-------------- */}
    <div className="CROAudit-hero-section">
    <div className="CROAudit-hero-img">
      <img src={croAuditImage} alt="CRO Audit" />
    </div>
      <div className="CROAudit-hero-content">
        <p className="CROAudit-hero-techie">Our CRO Experts</p>
        <h3>CRO Audit</h3>
        <div className="CROAudit-hero-conent-para">
          <p>
            Consistently reviewing and refining your conversion optimization
            strategy is essential to stay aligned with evolving market trends and
            shifting consumer preferences. A conversion optimization audit
            empowers businesses to maintain a competitive edge by uncovering
            actionable insights into the strengths and weaknesses of their website
            design, content, and overall user experience.
          </p>
          <p>
            knoqlogico, a trusted name in the industry, has a proven track record
            of delivering successful optimization solutions. We collaborate with
            businesses of all sizes across diverse sectors to enhance their
            websites, boost brand visibility, and turn potential leads into loyal
            customers.
          </p>
        </div>
        <div className="CROAudit-hero-button">
        <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
    {/* CARDS - PROCESS------------------ */}
    <div className="CROAudit-ag-format-container">
      <div className="CROAudit-ag-courses_box">
        <div className="CROAudit-ag-courses_item">
          <a href="#" className="CROAudit-ag-courses-item_link">
            <div className="CROAudit-ag-courses-item_bg" />
            <div className="CROAudit-ag-courses-item_title">
              1. End-to-End Web Services
            </div>
            <div className="CROAudit-ag-courses-item_date-box">
              At knoqlogico, we go beyond conducting a comprehensive website
              conversion analysis. As a full-service digital marketing company, we
              provide an extensive suite of services to enhance your entire online
              presence. Our offerings include search engine optimization (SEO),
              content marketing, pay-per-click (PPC) advertising, web design, and
              social media marketing (SMM), ensuring a holistic approach to your
              digital growth.
            </div>
          </a>
        </div>
        <div className="CROAudit-ag-courses_item">
          <a href="#" className="CROAudit-ag-courses-item_link">
            <div className="CROAudit-ag-courses-item_bg" />
            <div className="CROAudit-ag-courses-item_title">2. Niche Analysis</div>
            <div className="CROAudit-ag-courses-item_date-box">
              In today's competitive digital marketing landscape, understanding
              your business niche is essential for success. We incorporate a
              thorough niche analysis into our comprehensive conversion
              optimization audit. This involves evaluating target audience,
              identifying their needs and preferences, and determining how your
              product or service fits into their lives. This targeted approach
              ensures your strategies align with audience expectations.
            </div>
          </a>
        </div>
        <div className="CROAudit-ag-courses_item">
          <a href="#" className="CROAudit-ag-courses-item_link">
            <div className="CROAudit-ag-courses-item_bg" />
            <div className="CROAudit-ag-courses-item_title">
              3. Full Suite of CRO Tools
            </div>
            <div className="CROAudit-ag-courses-item_date-box">
              At knoqlogico, we leverage advanced CRO tools like Google Analytics
              to collect valuable data and gain insights into your website's user
              behavior. Our conversion rate optimization experts utilize the
              latest technology to ensure your CRO audit is precise and
              comprehensive. Every campaign we execute is driven by data and
              insights, not guesswork, ensuring measurable results and impactful
              strategies.
            </div>
          </a>
        </div>
        <div className="CROAudit-ag-courses_item">
          <a href="#" className="CROAudit-ag-courses-item_link">
            <div className="CROAudit-ag-courses-item_bg" />
            <div className="CROAudit-ag-courses-item_title">
              4. Proven Track Record of Success
            </div>
            <div className="CROAudit-ag-courses-item_date-box">
              knoqlogico is a trusted name in conversion rate optimization,
              recognized with numerous awards and accolades for our expertise. We
              have successfully helped countless businesses boost their profits
              with customer-focused CRO strategies. Backed by innovative
              approaches, we ensure exceptional ROI on your CRO audit investment.
            </div>
          </a>
        </div>
        <div className="CROAudit-ag-courses_item">
          <a href="#" className="CROAudit-ag-courses-item_link">
            <div className="CROAudit-ag-courses-item_bg" />
            <div className="CROAudit-ag-courses-item_title">5. Continuous CRO Audits</div>
            <div className="CROAudit-ag-courses-item_date-box">
              A single audit can offer valuable insights into your website's
              current conversion rate, but regular audits enable continuous
              monitoring and optimization. At knoqlogico, we emphasize an ongoing
              strategy of analysis and refinement to keep your conversions
              performing at their best. Experience lasting success with our
              dedicated CRO services.
            </div>
          </a>
        </div>
        <div className="CROAudit-ag-courses_item">
          <a href="#" className="CROAudit-ag-courses-item_link">
            <div className="CROAudit-ag-courses-item_bg" />
            <div className="CROAudit-ag-courses-item_title">6. Transparent Reporting</div>
            <div className="CROAudit-ag-courses-item_date-box">
              At knoqlogico, our conversion rate optimization strategy includes
              regular progress updates throughout your CRO audit. Clients gain
              access to real-time data and insights into their website's
              performance. You'll receive a detailed report highlighting the
              enhancements made and providing actionable recommendations for
              future.
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default CROAudit