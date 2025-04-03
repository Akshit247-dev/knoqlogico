import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "./Lead_Generation_Services.css"
import leadGenerationImage from '../assets/img/Lead-Generation-Services.svg';
import { Link } from "react-router-dom";

function Lead_Generation_Services() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="Lead_Generation_Services-main">
    <div className="Lead_Generation_Services-main-blue-cover" />
    <div className="Lead_Generation_Services-content">
      <h2>Lead Generation Services</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Lead Generation Services</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="Lead_Generation_Services-tagline-section">
    <h2>Lead Generation Services</h2>
    <div className="Lead_Generation_Services-beat-img" />
    <p>
      Lead Generation Services help businesses attract and convert potential
      customers into qualified leads, fueling sales and business growth. These
      services are crucial for companies looking to build a pipeline of
      prospects and nurture them toward making a purchase decision.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="Lead_Generation_Services-hero-section">
    <div className="Lead_Generation_Services-hero-img">
    <img src={leadGenerationImage} alt="Lead Generation Services" />
    </div>
    <div className="Lead_Generation_Services-hero-content">
      <p className="Lead_Generation_Services-hero-techie">Our Marketing Expert</p>
      <h3>Lead Generation Services</h3>
      <div className="Lead_Generation_Services-hero-conent-para">
        <p>
          Generating sales and conversions starts with acquiring high-quality
          leads—prospects who have shown interest in your products or services.
          Effective lead generation strategies help businesses attract and
          nurture these prospects, turning them into paying customers. However,
          despite being a top priority for 50% of marketers, 68% of B2B
          companies struggle to secure quality leads, and 88% admit they are
          only somewhat satisfied with their current process.
        </p>
        <p>
          Knoqlogico, we specialize in providing outsourced lead generation
          services that deliver real results. Our team identifies the best lead
          generation channels for your business and crafts customized marketing
          strategies that align with your prospects' needs.
        </p>
      </div>
      <div className="Lead_Generation_Services-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="Lead_Generation_Services-ag-format-container">
    <div className="Lead_Generation_Services-ag-courses_box">
      <div className="Lead_Generation_Services-ag-courses_item">
        <a href="#" className="Lead_Generation_Services-ag-courses-item_link">
          <div className="Lead_Generation_Services-ag-courses-item_bg" />
          <div className="Lead_Generation_Services-ag-courses-item_title">
            1. Accelerate Sales with Knoqlogico
          </div>
          <div className="Lead_Generation_Services-ag-courses-item_date-box">
            Knoqlogico, our lead generation services help you identify
            high-potential leads and deliver timely information that guides them
            through the sales funnel faster. By streamlining the process, we
            reduce costs associated with lengthy sales cycles and help you
            achieve faster conversions with greater efficiency.
          </div>
        </a>
      </div>
      <div className="Lead_Generation_Services-ag-courses_item">
        <a href="#" className="Lead_Generation_Services-ag-courses-item_link">
          <div className="Lead_Generation_Services-ag-courses-item_bg" />
          <div className="Lead_Generation_Services-ag-courses-item_title">
            2.Enhance Lead Quality with Knoqlogico
          </div>
          <div className="Lead_Generation_Services-ag-courses-item_date-box">
            Knoqlogico, we understand that not all leads are the right fit for
            your business. Our outsourced lead generation services focus on
            attracting high-quality prospects by tailoring content and marketing
            strategies to engage your ideal audience.
          </div>
        </a>
      </div>
      <div className="Lead_Generation_Services-ag-courses_item">
        <a href="#" className="Lead_Generation_Services-ag-courses-item_link">
          <div className="Lead_Generation_Services-ag-courses-item_bg" />
          <div className="Lead_Generation_Services-ag-courses-item_title">
            3. Collect Valuable Customer Data with Knoqlogico
          </div>
          <div className="Lead_Generation_Services-ag-courses-item_date-box">
            At Knoqlogico, we leverage every brand interaction—form submissions,
            website visits, and other touchpoints—to gather critical customer
            insights that shape data-driven marketing strategies for better lead
            generation and conversion.
          </div>
        </a>
      </div>
      <div className="Lead_Generation_Services-ag-courses_item">
        <a href="#" className="Lead_Generation_Services-ag-courses-item_link">
          <div className="Lead_Generation_Services-ag-courses-item_bg" />
          <div className="Lead_Generation_Services-ag-courses-item_title">
            4.Save Time and Money with Knoqlogico
          </div>
          <div className="Lead_Generation_Services-ag-courses-item_date-box">
            Knoqlogico eliminates the need for additional staff and training,
            helping your business save valuable time and resources. Our expert
            team handles tasks like data mining and list building, allowing your
            sales and marketing teams to focus on what matters most—closing
            deals and driving revenue.
          </div>
        </a>
      </div>
      <div className="Lead_Generation_Services-ag-courses_item">
        <a href="#" className="Lead_Generation_Services-ag-courses-item_link">
          <div className="Lead_Generation_Services-ag-courses-item_bg" />
          <div className="Lead_Generation_Services-ag-courses-item_title">
            5. Grow Your Following with Knoqlogico
          </div>
          <div className="Lead_Generation_Services-ag-courses-item_date-box">
            Knoqlogico, we use well-researched content and consistent
            communication to position your brand as an industry authority. This
            approach not only attracts key industry players but also fosters a
            loyal community of advocates—key factors in driving business growth
            and expanding your online presence.
          </div>
        </a>
      </div>
      <div className="Lead_Generation_Services-ag-courses_item">
        <a href="#" className="Lead_Generation_Services-ag-courses-item_link">
          <div className="Lead_Generation_Services-ag-courses-item_bg" />
          <div className="Lead_Generation_Services-ag-courses-item_title">
            6. Automate Lead Management with Knoqlogico
          </div>
          <div className="Lead_Generation_Services-ag-courses-item_date-box">
            Knoqlogico, you gain access to the latest lead management tools and
            techniques without the need for costly technology and training. Our
            marketing lead generation services include automated solutions for
            lead nurturing, scoring and streamlined lead management that drives
            better results.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default Lead_Generation_Services