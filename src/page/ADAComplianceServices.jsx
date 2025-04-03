import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./ADAComplianceServices.css"
import heroImage from '../assets/img/7471676_3677285.svg';
import { Link } from "react-router-dom";


function ADAComplianceServices() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="ADAComplianceServices-main">
    <div className="ADAComplianceServices-main-blue-cover" />
    <div className="ADAComplianceServices-content">
      <h2>ADA Compliance Services</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>ADA Compliance Services</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="ADAComplianceServices-tagline-section">
    <h2>ADA Compliance Services</h2>
    <div className="ADAComplianceServices-beat-img" />
    <p>Reliable Hosting for Seamless Performance and Unmatched Uptime.</p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="ADAComplianceServices-hero-section">
  <div className="ADAComplianceServices-hero-img">
      <img src={heroImage} alt="Hero Image" />
    </div>
    <div className="ADAComplianceServices-hero-content">
      <p className="ADAComplianceServices-hero-techie">Our Web Experts</p>
      <h3>ADA Compliance Services</h3>
      <div className="ADAComplianceServices-hero-conent-para">
        <p>
          ADA compliance services ensure that your website meets accessibility
          standards required by law. Our team conducts thorough accessibility
          audits to identify areas where your website may fall short of ADA
          regulations. We then implement necessary changes, such as adding
          alternative text for images, improving color contrast, and ensuring
          that your website is navigable via keyboard for users with
          disabilities. These improvements help create an inclusive web
          experience that complies with legal requirements.
        </p>
        <p>
          Additionally, our services include ongoing monitoring and updates to
          keep your site in line with evolving accessibility guidelines. We
          incorporate assistive technologies, such as screen readers and
          speech-to-text, to enhance usability for all users. By prioritizing
          ADA compliance, we help your business avoid potential lawsuits while
          improving customer experience and expanding your reach to a wider
          audience.
        </p>
      </div>
      <div className="ADAComplianceServices-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="ADAComplianceServices-ag-format-container">
    <div className="ADAComplianceServices-ag-courses_box">
      <div className="ADAComplianceServices-ag-courses_item">
        <a href="#" className="ADAComplianceServices-ag-courses-item_link">
          <div className="ADAComplianceServices-ag-courses-item_bg" />
          <div className="ADAComplianceServices-ag-courses-item_title">1. Accessibility Audit</div>
          <div className="ADAComplianceServices-ag-courses-item_date-box">
            We conduct a thorough audit of your website to identify areas that
            don't meet ADA accessibility standards. This includes evaluating the
            site for visual and navigational elements.
          </div>
        </a>
      </div>
      <div className="ADAComplianceServices-ag-courses_item">
        <a href="#" className="ADAComplianceServices-ag-courses-item_link">
          <div className="ADAComplianceServices-ag-courses-item_bg" />
          <div className="ADAComplianceServices-ag-courses-item_title">2. Strategy Development</div>
          <div className="ADAComplianceServices-ag-courses-item_date-box">
            Based on the audit findings, we develop a tailored strategy that
            addresses the specific areas needing improvement to make your
            website fully compliant with ADA guidelines.
          </div>
        </a>
      </div>
      <div className="ADAComplianceServices-ag-courses_item">
        <a href="#" className="ADAComplianceServices-ag-courses-item_link">
          <div className="ADAComplianceServices-ag-courses-item_bg" />
          <div className="ADAComplianceServices-ag-courses-item_title">3. Technical Enhancements</div>
          <div className="ADAComplianceServices-ag-courses-item_date-box">
            Our team implements necessary changes such as optimizing image alt
            text, improving color contrast, adding keyboard navigability, and
            ensuring proper HTML structure for screen readers.
          </div>
        </a>
      </div>
      <div className="ADAComplianceServices-ag-courses_item">
        <a href="#" className="ADAComplianceServices-ag-courses-item_link">
          <div className="ADAComplianceServices-ag-courses-item_bg" />
          <div className="ADAComplianceServices-ag-courses-item_title">4. Assistive Technology</div>
          <div className="ADAComplianceServices-ag-courses-item_date-box">
            We integrate assistive technologies, including screen readers and
            voice recognition tools, to enhance accessibility for users with
            disabilities.
          </div>
        </a>
      </div>
      <div className="ADAComplianceServices-ag-courses_item">
        <a href="#" className="ADAComplianceServices-ag-courses-item_link">
          <div className="ADAComplianceServices-ag-courses-item_bg" />
          <div className="ADAComplianceServices-ag-courses-item_title">
            5. Testing and Quality Assurance
          </div>
          <div className="ADAComplianceServices-ag-courses-item_date-box">
            We conduct extensive testing using both automated tools and manual
            checks to ensure your website meets all ADA requirements.
          </div>
        </a>
      </div>
      <div className="ADAComplianceServices-ag-courses_item">
        <a href="#" className="ADAComplianceServices-ag-courses-item_link">
          <div className="ADAComplianceServices-ag-courses-item_bg" />
          <div className="ADAComplianceServices-ag-courses-item_title">6. Ongoing Monitoring</div>
          <div className="ADAComplianceServices-ag-courses-item_date-box">
            ADA compliance is an ongoing process. We provide regular updates and
            monitoring to ensure your site stays compliant with evolving
            accessibility standards.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default ADAComplianceServices