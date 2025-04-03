import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./Web_services.css"
import whatsappImage from "../assets/img/WhatsApp Image 2024-12-11 at 5.49.36 PM.jpeg";
import { Link } from "react-router-dom";

function Web_services() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="Web-services-main">
    <div className="Web-services-main-blue-cover" />
    <div className="Web-services-content">
      <h2>Web Services</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>Services</li>
        <li>&gt;</li>
        <li>Web Services</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="Web-services-tagline-section">
    <h2>Web Services</h2>
    <div className="Web-services-beat-img" />
    <p>
      "Transform your online presence with comprehensive web services that
      combine functionality, visual appeal, and performance."
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="Web-services-hero-section">
    <div className="Web-services-hero-img">
    <img src={whatsappImage} alt="WhatsApp Preview" />;
    </div>
    <div className="Web-services-hero-content">
      <p className="Web-services-hero-techie">From Our Techies</p>
      <h3>Web Services</h3>
      <div className="Web-services-hero-conent-para">
        <p>
          Our skilled developers and designers deliver innovative web services
          to enhance user experience, boost engagement, and drive conversions.
          We leverage cutting-edge technologies and best practices to create
          visually stunning, responsive, and highly functional websites. Our
          services cater to businesses of all sizes, focusing on seamless
          design, advanced functionality, and optimal performance. From
          designing and developing to optimising and maintaining your website,
          we ensure your online presence is powerful, user-friendly, and aligned
          with your business objectives.
        </p>
      </div>
      <div className="Web-services-hero-button">
      <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  </div>
  <h2
    style={{
      textAlign: "center",
      marginTop: 40,
      padding: "6px 10px",
      backgroundColor: "#e2e2e2"
    }}
  >
    Our Web Services
  </h2>
  {/* CARDS------------------ */}
  <div className="Web-services-ag-format-container">
    <div className="Web-services-ag-courses_box">
      <div className="Web-services-ag-courses_item">
      <Link to="/WebDesignandDevelopment" className="Web-services-ag-courses-item_link">
          <div className="Web-services-ag-courses-item_bg" />
          <div className="Web-services-ag-courses-item_title">
            1. Web Design &amp; Development
          </div>
          <div className="Web-services-ag-courses-item_date-box">
            We offer expert web design and development services that focus on
            creating modern, user-friendly, and mobile-responsive websites. Our
            team ensures that your website reflects your brand’s identity while
            providing a seamless experience for your users.
          </div>
          </Link>
      </div>
      <div className="Web-services-ag-courses_item">
       <Link to="/CustomSoftwareSolutions" className="Web-services-ag-courses-item_link">
          <div className="Web-services-ag-courses-item_bg" />
          <div className="Web-services-ag-courses-item_title">
            2. Custom Software Solutions
          </div>
          <div className="Web-services-ag-courses-item_date-box">
            At Knoqlogico, we create custom software solutions tailored to your
            specific business needs. Whether it's a content management system
            (CMS), e-commerce platform, or enterprise application, we design and
            build solutions that help streamline operations, improve efficiency,
            and drive growth.
          </div>
       </Link>
      </div>
      <div className="Web-services-ag-courses_item">
       <Link to="/CRMSolution" className="Web-services-ag-courses-item_link">
          <div className="Web-services-ag-courses-item_bg" />
          <div className="Web-services-ag-courses-item_title">3. CRM Solutions</div>
          <div className="Web-services-ag-courses-item_date-box">
            Customer Relationship Management (CRM) is crucial for enhancing
            customer interactions and improving sales. Our CRM solutions are
            designed to help businesses manage and analyse customer
            interactions, automate workflows, and boost customer satisfaction.
          </div>
       </Link>
      </div>
      <div className="Web-services-ag-courses_item">
       <Link to="/#" className="Web-services-ag-courses-item_link">
          <div className="Web-services-ag-courses-item_bg" />
          <div className="Web-services-ag-courses-item_title">4. SEO Optimization</div>
          <div className="Web-services-ag-courses-item_date-box">
            Search Engine Optimization (SEO) is essential for improving the
            visibility of your website on search engines like Google. Our team
            implements SEO best practices to optimise your website's content,
            structure, and performance, ensuring better rankings and organic
            traffic.
          </div>
       </Link>
      </div>
      <div className="Web-services-ag-courses_item">
       <Link to="/#" className="Web-services-ag-courses-item_link">
          <div className="Web-services-ag-courses-item_bg" />
          <div className="Web-services-ag-courses-item_title">5. E-commerce Solutions</div>
          <div className="Web-services-ag-courses-item_date-box">
            We offer e-commerce solutions to help businesses sell products and
            services online. From building custom e-commerce websites to
            integrating payment systems and inventory management, we ensure that
            your e-commerce platform is optimised for conversions and user
            experience.
          </div>
       </Link>
      </div>
      <div className="Web-services-ag-courses_item">
       <Link to="/#" className="Web-services-ag-courses-item_link">
          <div className="Web-services-ag-courses-item_bg" />
          <div className="Web-services-ag-courses-item_title">
            6. Website Maintenance &amp; Support
          </div>
          <div className="Web-services-ag-courses-item_date-box">
            Ongoing maintenance is vital for keeping your website secure, fast,
            and up-to-date. Our website maintenance services ensure that your
            site is always functioning at its best, with regular updates,
            security patches, and performance improvements.
          </div>
       </Link>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default Web_services