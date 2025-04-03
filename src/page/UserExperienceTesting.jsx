import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import  "./UserExperienceTesting.css"
import svgImage from '../assets/img/37455684_8459800.svg';
import { Link } from "react-router-dom";

function UserExperienceTesting() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="UserExperienceTesting-main">
    <div className="UserExperienceTesting-main-blue-cover" />
    <div className="UserExperienceTesting-content">
      <h2>User Experience Testing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>User Experience Testing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="UserExperienceTesting-tagline-section">
    <h2>User Experience Testing</h2>
    <div className="UserExperienceTesting-beat-img" />
    <p>
      User Experience Testing is Essential for Your Business. Spot Usability
      Issues Before They Affect Your Bottom Line.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="UserExperienceTesting-hero-section">
    <div className="UserExperienceTesting-hero-img">
    <img src={svgImage} alt="Image Description" />
    </div>
    <div className="UserExperienceTesting-hero-content">
      <p className="UserExperienceTesting-hero-techie">Our CRO Experts</p>
      <h3>User Experience Testing</h3>
      <div className="UserExperienceTesting-hero-conent-para">
        <p>
          User experience testing, also known as UX or usability testing,
          examines how users interact with websites, apps, or other digital
          platforms.This testing measures how easy or difficult it is for users
          to navigate a platform and achieve their desired goals. By gathering
          insights from real users, businesses can make informed decisions to
          improve usability, accessibility, and overall user satisfaction across
          all digital touchpoints.
        </p>
        <p>
          At knoqlogico, we go beyond just UX testing; we provide actionable
          insights that drive tangible results. From decreasing bounce rates and
          increasing conversions to building stronger brand loyalty, our user
          testing services help unlock the full potential of your digital
          assets. Don't let usability challenges hold back your digital success.
          Conduct comprehensive user testing for your website or app and elevate
          the experience for your audience.
        </p>
      </div>
      <div className="UserExperienceTesting-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="UserExperienceTesting-ag-format-container">
    <div className="UserExperienceTesting-ag-courses_box">
      <div className="UserExperienceTesting-ag-courses_item">
        <a href="#" className="UserExperienceTesting-ag-courses-item_link">
          <div className="UserExperienceTesting-ag-courses-item_bg" />
          <div className="UserExperienceTesting-ag-courses-item_title">1. Usability Testing</div>
          <div className="UserExperienceTesting-ag-courses-item_date-box">
            At Knoqlogico, we dive deeper than basic website usability testing.
            We identify friction points, navigation obstacles, and ensure that
            your website or app aligns perfectly with user expectations,
            providing a smooth and intuitive experience.
          </div>
        </a>
      </div>
      <div className="UserExperienceTesting-ag-courses_item">
        <a href="#" className="UserExperienceTesting-ag-courses-item_link">
          <div className="UserExperienceTesting-ag-courses-item_bg" />
          <div className="UserExperienceTesting-ag-courses-item_title">
            2. A/B and Multivariate Testing
          </div>
          <div className="UserExperienceTesting-ag-courses-item_date-box">
            At Knoqlogico, we utilize advanced user testing software to optimize
            your pages based on key performance metrics. Whether it's
            fine-tuning a call-to-action button or experimenting with content,
            our services are focused on maximizing conversions.
          </div>
        </a>
      </div>
      <div className="UserExperienceTesting-ag-courses_item">
        <a href="#" className="UserExperienceTesting-ag-courses-item_link">
          <div className="UserExperienceTesting-ag-courses-item_bg" />
          <div className="UserExperienceTesting-ag-courses-item_title">3. Accessibility Testing</div>
          <div className="UserExperienceTesting-ag-courses-item_date-box">
            At Knoqlogico, we test for WCAG and ADA compliance issues like color
            contrast, screen reader compatibility, and keyboard navigation. Our
            accessibility testing ensures your platform remains compliant with
            ethical and legal standards.
          </div>
        </a>
      </div>
      <div className="UserExperienceTesting-ag-courses_item">
        <a href="#" className="UserExperienceTesting-ag-courses-item_link">
          <div className="UserExperienceTesting-ag-courses-item_bg" />
          <div className="UserExperienceTesting-ag-courses-item_title">
            4. Cross-Browser and Cross-Device
          </div>
          <div className="UserExperienceTesting-ag-courses-item_date-box">
            At Knoqlogico, our UX experts use advanced testing software to
            ensure consistent user experience across different browsers,
            operating systems, and devices. We conduct thorough evaluations to
            provide you with clear insights into your customer experience.
          </div>
        </a>
      </div>
      <div className="UserExperienceTesting-ag-courses_item">
        <a href="#" className="UserExperienceTesting-ag-courses-item_link">
          <div className="UserExperienceTesting-ag-courses-item_bg" />
          <div className="UserExperienceTesting-ag-courses-item_title">5. Performance Testing</div>
          <div className="UserExperienceTesting-ag-courses-item_date-box">
            At Knowlogico, whether you're managing high traffic or preparing for
            growth, our performance testing evaluates your digital
            infrastructure's scalability. We ensure your platform can handle
            heavy traffic and peak usage.
          </div>
        </a>
      </div>
      <div className="UserExperienceTesting-ag-courses_item">
        <a href="#" className="UserExperienceTesting-ag-courses-item_link">
          <div className="UserExperienceTesting-ag-courses-item_bg" />
          <div className="UserExperienceTesting-ag-courses-item_title">
            6. Prototype and Wireframe Testing
          </div>
          <div className="UserExperienceTesting-ag-courses-item_date-box">
            At Knoqlogico, we evaluate early-stage designs with advanced user
            testing software to pinpoint potential issues before implementation.
            This proactive approach helps you avoid costly revisions during the
            development process.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default UserExperienceTesting