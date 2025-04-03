import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./WebsiteHosting.css"
import hostingImage from '../assets/img/22112061_6578717.svg';
import { Link } from "react-router-dom";

function WebsiteHosting() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="WebsiteHosting-main">
    <div className="WebsiteHosting-main-blue-cover" />
    <div className="WebsiteHosting-content">
      <h2>Website Hosting</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Website Hosting</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="WebsiteHosting-tagline-section">
    <h2>Website Hosting</h2>
    <div className="WebsiteHosting-beat-img" />
    <p>Reliable Hosting for Seamless Performance and Unmatched Uptime.</p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="WebsiteHosting-hero-section">
    <div className="WebsiteHosting-hero-img">
    <img src={hostingImage} alt="Website Hosting" />
    </div>
    <div className="WebsiteHosting-hero-content">
      <p className="WebsiteHosting-hero-techie">Our Web Experts</p>
      <h3>Website Hosting</h3>
      <div className="WebsiteHosting-hero-conent-para">
        <p>
          Website hosting is a service that allows individuals and businesses to
          store their websites on a server, making them accessible to users over
          the internet. When you choose a hosting provider, you are renting
          space on a server where all your website's files, data, and content
          are stored. Hosting services vary in terms of performance,
          scalability, and support.
        </p>
        <p>
          Different types of hosting services include shared hosting, VPS
          (Virtual Private Server) hosting, dedicated hosting, and cloud
          hosting. The best hosting option depends on the specific needs of your
          website, such as expected traffic, resource usage, and budget.
          Reliable hosting ensures fast load times, high uptime, and security
          for your website.
        </p>
      </div>
      <div className="WebsiteHosting-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="WebsiteHosting-ag-format-container">
    <div className="WebsiteHosting-ag-courses_box">
      <div className="WebsiteHosting-ag-courses_item">
        <a href="#" className="WebsiteHosting-ag-courses-item_link">
          <div className="WebsiteHosting-ag-courses-item_bg" />
          <div className="WebsiteHosting-ag-courses-item_title">
            1. Tailored Hosting Plan Selection
          </div>
          <div className="WebsiteHosting-ag-courses-item_date-box">
            We help you choose the ideal hosting plan based on your website's
            traffic, complexity, and functionality requirements, ensuring
            optimal performance.
          </div>
        </a>
      </div>
      <div className="WebsiteHosting-ag-courses_item">
        <a href="#" className="WebsiteHosting-ag-courses-item_link">
          <div className="WebsiteHosting-ag-courses-item_bg" />
          <div className="WebsiteHosting-ag-courses-item_title">2. Domain Management</div>
          <div className="WebsiteHosting-ag-courses-item_date-box">
            Our team assists you in registering a unique domain name and manages
            your domain settings for seamless integration with your website.
          </div>
        </a>
      </div>
      <div className="WebsiteHosting-ag-courses_item">
        <a href="#" className="WebsiteHosting-ag-courses-item_link">
          <div className="WebsiteHosting-ag-courses-item_bg" />
          <div className="WebsiteHosting-ag-courses-item_title">
            3. Website Setup &amp; Configuration
          </div>
          <div className="WebsiteHosting-ag-courses-item_date-box">
            We handle the setup of your website files, ensuring a smooth upload
            process and proper server configuration for quick launch and easy
            access.
          </div>
        </a>
      </div>
      <div className="WebsiteHosting-ag-courses_item">
        <a href="#" className="WebsiteHosting-ag-courses-item_link">
          <div className="WebsiteHosting-ag-courses-item_bg" />
          <div className="WebsiteHosting-ag-courses-item_title">
            4. DNS Setup &amp; Optimization
          </div>
          <div className="WebsiteHosting-ag-courses-item_date-box">
            We configure your domain's DNS settings for fast and reliable access
            to your website, ensuring minimal downtime.
          </div>
        </a>
      </div>
      <div className="WebsiteHosting-ag-courses_item">
        <a href="#" className="WebsiteHosting-ag-courses-item_link">
          <div className="WebsiteHosting-ag-courses-item_bg" />
          <div className="WebsiteHosting-ag-courses-item_title">
            5. Comprehensive Security Setup
          </div>
          <div className="WebsiteHosting-ag-courses-item_date-box">
            Our service includes the installation of SSL certificates,
            firewalls, and automated backups to keep your website secure.
          </div>
        </a>
      </div>
      <div className="WebsiteHosting-ag-courses_item">
        <a href="#" className="WebsiteHosting-ag-courses-item_link">
          <div className="WebsiteHosting-ag-courses-item_bg" />
          <div className="WebsiteHosting-ag-courses-item_title">
            6. Monitoring &amp; Support
          </div>
          <div className="WebsiteHosting-ag-courses-item_date-box">
            We provide ongoing performance monitoring, uptime tracking, and
            technical support to ensure your website runs smoothly at all times.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default WebsiteHosting