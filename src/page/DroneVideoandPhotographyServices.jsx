import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./DroneVideoandPhotographyServices.css"
import droneImage from '../assets/img/11668624_20945637.svg';
import { Link } from "react-router-dom";

function DroneVideoandPhotographyServices() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="DroneVideoandPhotographyServices-main">
    <div className="DroneVideoandPhotographyServices-main-blue-cover" />
    <div className="DroneVideoandPhotographyServices-content">
      <h2>Drone Video and Photography Services</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Drone Video and Photography Services</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="DroneVideoandPhotographyServices-tagline-section">
    <h2>Drone Video and Photography Services</h2>
    <div className="DroneVideoandPhotographyServices-beat-img" />
    <p>
      Take Your Visual Storytelling to New Heights With Expert Drone Video and
      Photography Services.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="DroneVideoandPhotographyServices-hero-section">
  <div className="DroneVideoandPhotographyServices-hero-img">
      <img src={droneImage} alt="Drone Video and Photography Services" />
    </div>
    <div className="DroneVideoandPhotographyServices-hero-content">
      <p className="DroneVideoandPhotographyServices-hero-techie">Our Production Experts</p>
      <h3>Drone Video and Photography Services</h3>
      <div className="DroneVideoandPhotographyServices-hero-conent-para">
        <p>
          Drone video and photography services provide a unique perspective that
          captivates your audience and highlights the beauty of your property,
          event, or project. Our expert drone operators use state-of-the-art
          equipment to capture high-resolution images and 4K videos that
          showcase stunning aerial views. Whether you're marketing real estate,
          covering events, or showcasing construction progress, drone footage
          offers a dynamic way to tell your story and leave a lasting
          impression.
        </p>
        <p>
          At Knoqlogico, we ensure every shot is professionally edited to align
          with your brand's vision and goals. From breathtaking landscapes to
          intricate architectural details, we deliver visually compelling
          content that enhances your marketing strategy. Our drone services
          comply with legal and safety standards, providing you with
          high-quality results while maintaining peace of mind.
        </p>
      </div>
      <div className="DroneVideoandPhotographyServices-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="DroneVideoandPhotographyServices-ag-format-container">
    <div className="DroneVideoandPhotographyServices-ag-courses_box">
      <div className="DroneVideoandPhotographyServices-ag-courses_item">
        <a href="#" className="DroneVideoandPhotographyServices-ag-courses-item_link">
          <div className="DroneVideoandPhotographyServices-ag-courses-item_bg" />
          <div className="DroneVideoandPhotographyServices-ag-courses-item_title">
            1. Consultation and Planning
          </div>
          <div className="DroneVideoandPhotographyServices-ag-courses-item_date-box">
            We start by understanding your project needs, goals, and creative
            vision. Our team discusses the location, purpose, and style of the
            drone footage or photography to ensure a tailored approach that
            meets your expectations.
          </div>
        </a>
      </div>
      <div className="DroneVideoandPhotographyServices-ag-courses_item">
        <a href="#" className="DroneVideoandPhotographyServices-ag-courses-item_link">
          <div className="DroneVideoandPhotographyServices-ag-courses-item_bg" />
          <div className="DroneVideoandPhotographyServices-ag-courses-item_title">2. Site Assessment</div>
          <div className="DroneVideoandPhotographyServices-ag-courses-item_date-box">
            Before the shoot, we conduct a detailed site inspection to evaluate
            weather conditions, airspace restrictions, and potential obstacles.
            This step ensures safety and compliance with local regulations.
          </div>
        </a>
      </div>
      <div className="DroneVideoandPhotographyServices-ag-courses_item">
        <a href="#" className="DroneVideoandPhotographyServices-ag-courses-item_link">
          <div className="DroneVideoandPhotographyServices-ag-courses-item_bg" />
          <div className="DroneVideoandPhotographyServices-ag-courses-item_title">3. Aerial Capturing</div>
          <div className="DroneVideoandPhotographyServices-ag-courses-item_date-box">
            Our licensed drone operators use advanced drones equipped with
            high-resolution cameras to capture stunning aerial shots and videos.
            We capture unique angles and cinematic movements that best represent
            your project.
          </div>
        </a>
      </div>
      <div className="DroneVideoandPhotographyServices-ag-courses_item">
        <a href="#" className="DroneVideoandPhotographyServices-ag-courses-item_link">
          <div className="DroneVideoandPhotographyServices-ag-courses-item_bg" />
          <div className="DroneVideoandPhotographyServices-ag-courses-item_title">
            4. Post-Production Editing
          </div>
          <div className="DroneVideoandPhotographyServices-ag-courses-item_date-box">
            After capturing the footage, our professional editing team enhances
            the visuals by applying color grading, stabilization, and
            transitions. We also add text overlays, music, and other elements to
            create a polished final product.
          </div>
        </a>
      </div>
      <div className="DroneVideoandPhotographyServices-ag-courses_item">
        <a href="#" className="DroneVideoandPhotographyServices-ag-courses-item_link">
          <div className="DroneVideoandPhotographyServices-ag-courses-item_bg" />
          <div className="DroneVideoandPhotographyServices-ag-courses-item_title">
            5. Client Review and Feedback
          </div>
          <div className="DroneVideoandPhotographyServices-ag-courses-item_date-box">
            We share the edited footage with you for review, allowing you to
            provide feedback or request adjustments. Your satisfaction is our
            priority, and we work closely with you until the final output aligns
            perfectly with your vision and exceeds expectations.
          </div>
        </a>
      </div>
      <div className="DroneVideoandPhotographyServices-ag-courses_item">
        <a href="#" className="DroneVideoandPhotographyServices-ag-courses-item_link">
          <div className="DroneVideoandPhotographyServices-ag-courses-item_bg" />
          <div className="DroneVideoandPhotographyServices-ag-courses-item_title">6. Final Delivery</div>
          <div className="DroneVideoandPhotographyServices-ag-courses-item_date-box">
            Once approved, the final high-quality images and videos are
            delivered in your desired format, ready for immediate use. Whether
            you need content for marketing, events, or personal use, we ensure a
            seamless, efficient delivery process.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>


  )
}

export default DroneVideoandPhotographyServices