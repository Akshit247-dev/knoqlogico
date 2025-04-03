import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./Search_Engine_Marketing.css"
import searchEngineMarketing from '../assets/img/SearchEngineMarketing.svg';
import { Link } from "react-router-dom";

function Search_Engine_Marketing() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="Search-Engine-Marketing-main">
    <div className="Search-Engine-Marketing-main-blue-cover" />
    <div className="Search-Engine-Marketing-content">
      <h2>Search Engine Marketing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Search Engine Marketing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="Search-Engine-Marketing-tagline-section">
    <h2>Search Engine Marketing</h2>
    <div className="Search-Engine-Marketing-beat-img" />
    <p>
      Search Engine Marketing (SEM) is a powerful online advertising strategy
      used to increase the visibility of websites on search engine result pages
      (SERPs). By leveraging paid search ads, SEM allows businesses to target
      specific keywords related to their products or services.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="Search-Engine-Marketing-hero-section">
    <div className="Search-Engine-Marketing-hero-img">
    <img src={searchEngineMarketing} alt="Search Engine Marketing" />
    </div>
    <div className="Search-Engine-Marketing-hero-content">
      <p className="Search-Engine-Marketing-hero-techie">Our SEO Expert</p>
      <h3>Search Engine Marketing</h3>
      <div className="Search-Engine-Marketing-hero-conent-para">
        <p>
          knoqlogico, search engine advertising is one of the most
          cost-efficient ways to connect your brand with high-converting
          customers and increase your revenue. SEM advertising allows you to
          take advantage of consumers’ online behavior and position your ads
          precisely when they are looking for your brand offerings and are ready
          to purchase
        </p>
        <p>
          In knoqlogico, with evolving user expectations and advanced search
          engines, factors like site speed and mobile optimization are
          essential. Google now prioritizes mobile-friendliness for ranking.
          Poor structure, slow loading, or broken redirects may lead to
          penalties, lower rankings, and reduced organic traffic.
        </p>
      </div>
      <div className="Search-Engine-Marketing-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="Search-Engine-Marketing-ag-format-container">
    <div className="Search-Engine-Marketing-ag-courses_box">
      <div className="Search-Engine-Marketing-ag-courses_item">
        <a href="#" className="Search-Engine-Marketing-ag-courses-item_link">
          <div className="Search-Engine-Marketing-ag-courses-item_bg" />
          <div className="Search-Engine-Marketing-ag-courses-item_title">
            1. Keyword Research and Strategy
          </div>
          <div className="Search-Engine-Marketing-ag-courses-item_date-box">
            Knoqlogico identifies the right keywords to optimize your search
            marketing campaigns. We analyze search intent, value, and volume to
            tailor keywords to your brand. Competitor benchmarking helps expand
            your list, ensuring better rankings, audience targeting, visibility
            with a data-driven approach.
          </div>
        </a>
      </div>
      <div className="Search-Engine-Marketing-ag-courses_item">
        <a href="#" className="Search-Engine-Marketing-ag-courses-item_link">
          <div className="Search-Engine-Marketing-ag-courses-item_bg" />
          <div className="Search-Engine-Marketing-ag-courses-item_title">2. Amazon PPC</div>
          <div className="Search-Engine-Marketing-ag-courses-item_date-box">
            Boost visibility with Amazon sponsored ads. Our experts optimize
            your PPC keyword strategy, adjust bids based on ad placements, and
            structure campaigns for optimal product performance. We analyze
            ACoS, ad performance, and sales to develop data-driven strategies
            that attract new buyers and increase your brand’s sales effectively.
          </div>
        </a>
      </div>
      <div className="Search-Engine-Marketing-ag-courses_item">
        <a href="#" className="Search-Engine-Marketing-ag-courses-item_link">
          <div className="Search-Engine-Marketing-ag-courses-item_bg" />
          <div className="Search-Engine-Marketing-ag-courses-item_title">3. Video Advertising</div>
          <div className="Search-Engine-Marketing-ag-courses-item_date-box">
            Studies reveal that 72% of consumers prefer video content over text
            when learning about products or services. At Knoqlogico, our YouTube
            marketing services drive brand awareness, engagement, and
            conversions. We craft keyword-rich titles, descriptions, and tags
            while ensuring mobile optimization for seamless brand messaging
            across all devices.
          </div>
        </a>
      </div>
      <div className="Search-Engine-Marketing-ag-courses_item">
        <a href="#" className="Search-Engine-Marketing-ag-courses-item_link">
          <div className="Search-Engine-Marketing-ag-courses-item_bg" />
          <div className="Search-Engine-Marketing-ag-courses-item_title">4. SEM PPC Management</div>
          <div className="Search-Engine-Marketing-ag-courses-item_date-box">
            Knoqlogico, we focus on minimizing your costs while maximizing
            campaign efficiency. Our search marketing experts manage every
            aspect of your paid advertising campaigns, from keyword research and
            optimization to performance analysis. Trust us to deliver PPC
            strategies that drive measurable results and boost your bottom line.
          </div>
        </a>
      </div>
      <div className="Search-Engine-Marketing-ag-courses_item">
        <a href="#" className="Search-Engine-Marketing-ag-courses-item_link">
          <div className="Search-Engine-Marketing-ag-courses-item_bg" />
          <div className="Search-Engine-Marketing-ag-courses-item_title">
            5. Remarketing Services at Knoqlogico
          </div>
          <div className="Search-Engine-Marketing-ag-courses-item_date-box">
            At Knoqlogico, we specialize in launching remarketing campaigns that
            serve as constant reminders of your brand offerings, ensuring
            cost-effective results, with our remarketing experts at Knoqlogico
            strategically setting up remarketing codes, targeting specific
            visitor segments, and crafting compelling ads
          </div>
        </a>
      </div>
      <div className="Search-Engine-Marketing-ag-courses_item">
        <a href="#" className="Search-Engine-Marketing-ag-courses-item_link">
          <div className="Search-Engine-Marketing-ag-courses-item_bg" />
          <div className="Search-Engine-Marketing-ag-courses-item_title">
            6. Bing and Google Ads Management at Knoqlogico
          </div>
          <div className="Search-Engine-Marketing-ag-courses-item_date-box">
            Stay ahead of the competition and dominate major search engines with
            our expert Bing and Google Ads management services. At Knoqlogico,
            we implement a multi-channel approach to strengthen your brand
            presence and maximize conversion opportunities across various online
            platforms.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default Search_Engine_Marketing