import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./ConversionRateOptimizationServices.css"
import croImage from '../assets/img/7182241_3582338.svg'; 
import { Link } from "react-router-dom";

function ConversionRateOptimizationServices() {
  return (
    <>
    <Header/>
    {/* MAIN----------------------- */}
    <div className="ConversionRateOptimizationServices-main">
      <div className="ConversionRateOptimizationServices-main-blue-cover" />
      <div className="ConversionRateOptimizationServices-content">
        <h2>Conversion Rate Optimization Services</h2>
        <ul>
          <li>Home</li>
          <li>&gt;</li>
          <li>What we do</li>
          <li>&gt;</li>
          <li>Conversion Rate Optimization Services</li>
        </ul>
      </div>
    </div>
    {/* TAGLINE-------------------- */}
    <div className="ConversionRateOptimizationServices-tagline-section">
      <h2>Conversion Rate Optimization Services</h2>
      <div className="ConversionRateOptimizationServices-beat-img" />
      <p>
        Discover how our expert-driven Conversion Rate Optimization (CRO) services
        can help you turn your website into a powerful sales engine, improving
        customer engagement and increasing ROI.
      </p>
    </div>
    {/* HERO SECTION-------------- */}
    <div className="ConversionRateOptimizationServices-hero-section">
    <div className="ConversionRateOptimizationServices-hero-img">
      <img src={croImage} alt="Conversion Rate Optimization Services" />
    </div>
      <div className="ConversionRateOptimizationServices-hero-content">
        <p className="ConversionRateOptimizationServices-hero-techie">Our CRO Experts</p>
        <h3>Conversion Rate Optimization Services</h3>
        <div className="ConversionRateOptimizationServices-hero-conent-para">
          <p>
            At its core, Conversion Rate Optimization (CRO) is about making the
            most of the visitors you already have. It's not about flashy gimmicks
            or quick fixes—it's about understanding what your audience truly wants
            and creating an experience that makes it easy for them to take action.
            Our approach is thoughtful and data-driven, focusing on small,
            meaningful changes that can make a big difference to your website's
            performance over time.
          </p>
          <p>
            We believe in working closely with you to identify pain points, test
            ideas, and refine your user experience until it feels just right. CRO
            isn't a one-size-fits-all solution; it's a journey of continuous
            improvement. Whether it's streamlining a checkout process, fine-tuning
            a call-to-action, or improving page layouts, we're here to help you
            grow in a way that feels natural and sustainable.
          </p>
        </div>
        <div className="ConversionRateOptimizationServices-hero-button">
        <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
    {/* CARDS - PROCESS------------------ */}
    <div className="ConversionRateOptimizationServices-ag-format-container">
      <div className="ConversionRateOptimizationServices-ag-courses_box">
        <div className="ConversionRateOptimizationServices-ag-courses_item">
          <a href="#" className="ConversionRateOptimizationServices-ag-courses-item_link">
            <div className="ConversionRateOptimizationServices-ag-courses-item_bg" />
            <div className="ConversionRateOptimizationServices-ag-courses-item_title">1. UX Optimization</div>
            <div className="ConversionRateOptimizationServices-ag-courses-item_date-box">
              Streamline your website's design and navigation to create a seamless
              experience that keeps visitors engaged and encourages conversions.
            </div>
          </a>
        </div>
        <div className="ConversionRateOptimizationServices-ag-courses_item">
          <a href="#" className="ConversionRateOptimizationServices-ag-courses-item_link">
            <div className="ConversionRateOptimizationServices-ag-courses-item_bg" />
            <div className="ConversionRateOptimizationServices-ag-courses-item_title">2. A/B Testing</div>
            <div className="ConversionRateOptimizationServices-ag-courses-item_date-box">
              Experiment with different versions of your content, layouts, or
              calls-to-action to discover what resonates best with your audience.
            </div>
          </a>
        </div>
        <div className="ConversionRateOptimizationServices-ag-courses_item">
          <a href="#" className="ConversionRateOptimizationServices-ag-courses-item_link">
            <div className="ConversionRateOptimizationServices-ag-courses-item_bg" />
            <div className="ConversionRateOptimizationServices-ag-courses-item_title">
              3. Funnel Analysis and Optimization
            </div>
            <div className="ConversionRateOptimizationServices-ag-courses-item_date-box">
              Identify and fix major drop-offs in your sales funnel to guide users
              smoothly from entry to final conversion success and improved
              results.
            </div>
          </a>
        </div>
        <div className="ConversionRateOptimizationServices-ag-courses_item">
          <a href="#" className="ConversionRateOptimizationServices-ag-courses-item_link">
            <div className="ConversionRateOptimizationServices-ag-courses-item_bg" />
            <div className="ConversionRateOptimizationServices-ag-courses-item_title">
              4. Landing Page Optimization
            </div>
            <div className="ConversionRateOptimizationServices-ag-courses-item_date-box">
              Craft compelling landing pages with clear messaging, strong visuals,
              and persuasive CTAs to boost lead generation and sales.
            </div>
          </a>
        </div>
        <div className="ConversionRateOptimizationServices-ag-courses_item">
          <a href="#" className="ConversionRateOptimizationServices-ag-courses-item_link">
            <div className="ConversionRateOptimizationServices-ag-courses-item_bg" />
            <div className="ConversionRateOptimizationServices-ag-courses-item_title">
              5. Performance Optimization
            </div>
            <div className="ConversionRateOptimizationServices-ag-courses-item_date-box">
              Enhance load times and overall site performance to reduce bounce
              rates and keep visitors engaged.
            </div>
          </a>
        </div>
        <div className="ConversionRateOptimizationServices-ag-courses_item">
          <a href="#" className="ConversionRateOptimizationServices-ag-courses-item_link">
            <div className="ConversionRateOptimizationServices-ag-courses-item_bg" />
            <div className="ConversionRateOptimizationServices-ag-courses-item_title">6. Behavioral Analytics</div>
            <div className="ConversionRateOptimizationServices-ag-courses-item_date-box">
              Gain insights into how users interact with your website, helping you
              pinpoint opportunities to improve engagement.
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default ConversionRateOptimizationServices