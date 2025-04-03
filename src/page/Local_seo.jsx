import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./Local_seo.css"
import localSeoImage from '../assets/img/local-seo.svg';
import { Link } from "react-router-dom";

function Local_seo() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="Local-seo-main">
    <div className="Local-seo-main-blue-cover" />
    <div className="Local-seo-content">
      <h2>Optimizing for Local Search - Local SEO</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Optimizing for Local Search - Local SEO</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="Local-seo-tagline-section">
    <h2>Optimizing for Local Search - Local SEO</h2>
    <div className="Local-seo-beat-img" />
    <p>
      Boost your online presence and connect with your audience in specific
      locations with tailored strategies designed to enhance visibility and
      engagement where it matters most
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="Local-seo-hero-section">
    <div className="Local-seo-hero-img">
    <img src={localSeoImage} alt="Local SEO" />
    </div>
    <div className="Local-seo-hero-content">
      <p className="Local-seo-hero-techie">Why Local SEO Matters for Your Business ?</p>
      <h3>Optimizing for Local Search - Local SEO</h3>
      <div className="Local-seo-hero-conent-para">
        <p>
          In today's competitive digital landscape, investing in top-notch local
          SEO services can be the key to a successful business. A study by
          MarketingSherpa revealed that nearly 54% of respondents see local
          search as having the most significant impact on digital marketing
          efforts. As digital presence becomes more important, focusing on local
          SEO optimization is essential for businesses.
        </p>
        <p>
          For small businesses and multi-location firms, local SEO is a critical
          strategy for attracting qualified leads and converting them into
          sales. Without a solid local SEO strategy in place, you may be
          inadvertently hindering your business's growth and missing out on
          valuable opportunities.
        </p>
      </div>
      <div className="Local-seo-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="Local-seo-ag-format-container">
    <div className="Local-seo-ag-courses_box">
      <div className="Local-seo-ag-courses_item">
        <a href="#" className="Local-seo-ag-courses-item_link">
          <div className="Local-seo-ag-courses-item_bg" />
          <div className="Local-seo-ag-courses-item_title">1. Local SEO Review</div>
          <div className="Local-seo-ag-courses-item_date-box">
            At Knoqlogico, we conduct a comprehensive local SEO audit to
            evaluate your current rankings, uncover valuable insights, and
            create a tailored SEO strategy. We review your NAP visibility,
            identify service areas, and analyze your Google My Business listing.
            Our experts also assess your landing pages, local citations,
            competitor performance, and organic link profiles to ensure a strong
            local SEO foundation.
          </div>
        </a>
      </div>
      <div className="Local-seo-ag-courses_item">
        <a href="#" className="Local-seo-ag-courses-item_link">
          <div className="Local-seo-ag-courses-item_bg" />
          <div className="Local-seo-ag-courses-item_title">2. Keyword Research</div>
          <div className="Local-seo-ag-courses-item_date-box">
            Enhance your local reach with focused keyword research and
            personalized optimization strategies. Our team identifies
            geo-targeted, industry-specific keywords and organizes them by
            search intent. We then create a strategy to help you develop locally
            optimized, impactful content. You'll receive regular keyword ranking
            and performance reports to track and monitor your SEO growth.
          </div>
        </a>
      </div>
      <div className="Local-seo-ag-courses_item">
        <a href="#" className="Local-seo-ag-courses-item_link">
          <div className="Local-seo-ag-courses-item_bg" />
          <div className="Local-seo-ag-courses-item_title">3. On-Page Optimization</div>
          <div className="Local-seo-ag-courses-item_date-box">
            We optimize your website for your target location by adding
            geo-specific keywords to your homepage, metadata, and service pages.
            Our team creates location-focused content, improves social signals,
            and applies local business schema to help search engines better
            understand your offerings, boosting visibility and improving your
            rankings in local search results.
          </div>
        </a>
      </div>
      <div className="Local-seo-ag-courses_item">
        <a href="#" className="Local-seo-ag-courses-item_link">
          <div className="Local-seo-ag-courses-item_bg" />
          <div className="Local-seo-ag-courses-item_title">4. Content Writing</div>
          <div className="Local-seo-ag-courses-item_date-box">
            Create and share engaging local SEO content to capture your
            audience's attention. Our team of content experts and industry
            professionals collaborate to craft a comprehensive local SEO guide
            for your marketing strategy. We handle keyword research, guest
            blogging, and site content optimization, ensuring compelling titles
            and high-quality content to drive more traffic.
          </div>
        </a>
      </div>
      <div className="Local-seo-ag-courses_item">
        <a href="#" className="Local-seo-ag-courses-item_link">
          <div className="Local-seo-ag-courses-item_bg" />
          <div className="Local-seo-ag-courses-item_title">
            5. Conversion Rate Optimization (CRO)
          </div>
          <div className="Local-seo-ag-courses-item_date-box">
            Let our local digital marketing team manage your SEO services to
            boost your local rankings. From creating service and city pages to
            improving mobile-friendliness and completing your local SEO
            checklist, we've got you covered. Our targeted strategies drive
            high-quality sales calls and consistently improve your conversion
            rate month-over-month.
          </div>
        </a>
      </div>
      <div className="Local-seo-ag-courses_item">
        <a href="#" className="Local-seo-ag-courses-item_link">
          <div className="Local-seo-ag-courses-item_bg" />
          <div className="Local-seo-ag-courses-item_title">6. eCommerce SEO</div>
          <div className="Local-seo-ag-courses-item_date-box">
            Studies show 50% of consumers perform mobile searches before making
            purchasing decisions. Our local SEO services connect your brand with
            local consumers. We optimize your Google My Business profile,
            leverage geo-targeted keywords and content, build local citations,
            and manage online reviews to increase your visibility and drive more
            local engagement and sales.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default Local_seo