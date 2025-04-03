import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./YouTube_Advertising_Services.css"
import youtubeAdvertisingImage from '../assets/img/YouTubeAdvertisingServices.svg';
import { Link } from "react-router-dom";

function YouTube_Advertising_Services() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="YouTube-Advertising-Services-main">
    <div className="YouTube-Advertising-Services-main-blue-cover" />
    <div className="YouTube-Advertising-Services-content">
      <h2>YouTube Advertising Services</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>YouTube Advertising Services</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="YouTube-Advertising-Services-tagline-section">
    <h2>YouTube Advertising Services</h2>
    <div className="YouTube-Advertising-Services-beat-img" />
    <p>
      Establish a strong digital presence and optimize your website to improve
      search engine rankings, driving more traffic and visibility.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="YouTube-Advertising-Services-hero-section">
  <div className="YouTube-Advertising-Services-hero-img">
      <img src={youtubeAdvertisingImage} alt="YouTube Advertising Services" />
    </div>
    <div className="YouTube-Advertising-Services-hero-content">
      <p className="YouTube-Advertising-Services-hero-techie">Our Marketing Expert</p>
      <h3>YouTube Advertising Services</h3>
      <div className="YouTube-Advertising-Services-hero-conent-para">
        <p>
          Our Google Ads experts at knoqlogico set up, monitor, and optimize
          campaigns to send targeted leads to your website and other online
          properties. Drive advertising revenue while lowering acquisition costs
          with knoqlogico's expert Google Ads management services, ensuring
          maximum ROI for your business.
        </p>
        <p>
          From campaign setup to managing creatives, our certified Google Ads
          specialists at knoqlogico help you reach the right audience and drive
          qualified leads to your website. Our Google Ads management services
          deliver real results while lowering your cost per lead and increasing
          ad conversions, ensuring your marketing budget is maximized
          effectively.
        </p>
      </div>
      <div className="YouTube-Advertising-Services-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="YouTube-Advertising-Services-ag-format-container">
    <div className="YouTube-Advertising-Services-ag-courses_box">
      <div className="YouTube-Advertising-Services-ag-courses_item">
        <a href="#" className="YouTube-Advertising-Services-ag-courses-item_link">
          <div className="YouTube-Advertising-Services-ag-courses-item_bg" />
          <div className="YouTube-Advertising-Services-ag-courses-item_title">1. Technical SEO Review</div>
          <div className="YouTube-Advertising-Services-ag-courses-item_date-box">
            We conduct a thorough technical SEO audit to identify and resolve
            any issues impacting your website’s performance. Our audit examines
            key factors such as mobile optimization, internal linking, page
            speed, XML sitemap, indexation, crawl errors, robots.txt, and site
            architecture. Based on the findings, we create both immediate and
            long-term solutions to enhance user experience and boost your
            rankings on Google.
          </div>
        </a>
      </div>
      <div className="YouTube-Advertising-Services-ag-courses_item">
        <a href="#" className="YouTube-Advertising-Services-ag-courses-item_link">
          <div className="YouTube-Advertising-Services-ag-courses-item_bg" />
          <div className="YouTube-Advertising-Services-ag-courses-item_title">2. Competitor Analysis</div>
          <div className="YouTube-Advertising-Services-ag-courses-item_date-box">
            Gain a comprehensive understanding of your competition’s SEO
            strategies and uncover conversion opportunities. Our technical SEO
            consultant analyzes your competitors' keyword performance, rankings,
            social media presence, and backlink profiles. By assessing these
            factors, we craft tailored strategies that give you a competitive
            edge in your niche, helping you stand out and attract more traffic.
          </div>
        </a>
      </div>
      <div className="YouTube-Advertising-Services-ag-courses_item">
        <a href="#" className="YouTube-Advertising-Services-ag-courses-item_link">
          <div className="YouTube-Advertising-Services-ag-courses-item_bg" />
          <div className="YouTube-Advertising-Services-ag-courses-item_title">3. Meta Data Analysis</div>
          <div className="YouTube-Advertising-Services-ag-courses-item_date-box">
            Enhance your online visibility and drive more traffic with
            well-crafted meta tags that accurately describe your page content to
            both visitors and search engines. At knoqlogico, we optimize
            technical SEO for WordPress by refining meta descriptions, title
            tags, meta keywords, alt attributes, and robots tags, ensuring your
            site remains competitive in search rankings and misused metadata
            doesn’t harm your SEO performance
          </div>
        </a>
      </div>
      <div className="YouTube-Advertising-Services-ag-courses_item">
        <a href="#" className="YouTube-Advertising-Services-ag-courses-item_link">
          <div className="YouTube-Advertising-Services-ag-courses-item_bg" />
          <div className="YouTube-Advertising-Services-ag-courses-item_title">4. Image Optimization</div>
          <div className="YouTube-Advertising-Services-ag-courses-item_date-box">
            Large images can slow down your site, affecting performance and user
            experience. With our technical SEO for eCommerce, we optimize images
            by selecting the best file formats, refining alt attributes, and
            reducing file sizes. Additionally, we implement image sitemaps and
            optimization plugins to boost load speeds, enhance user experience,
            and improve SEO.
          </div>
        </a>
      </div>
      <div className="YouTube-Advertising-Services-ag-courses_item">
        <a href="#" className="YouTube-Advertising-Services-ag-courses-item_link">
          <div className="YouTube-Advertising-Services-ag-courses-item_bg" />
          <div className="YouTube-Advertising-Services-ag-courses-item_title">5. Speed Optimization </div>
          <div className="YouTube-Advertising-Services-ag-courses-item_date-box">
            Page speed impacts both your rankings and your customers' online
            experience. Our technical SEO experts optimize CSS, JavaScript, and
            HTML files through compression, streamline code, reduce redirects,
            and implement browser caching. We also leverage content distribution
            networks (CDNs) and enhance server response time to boost your
            site’s performance and SEO.
          </div>
        </a>
      </div>
      <div className="YouTube-Advertising-Services-ag-courses_item">
        <a href="#" className="YouTube-Advertising-Services-ag-courses-item_link">
          <div className="YouTube-Advertising-Services-ag-courses-item_bg" />
          <div className="YouTube-Advertising-Services-ag-courses-item_title">6. Keyword Research</div>
          <div className="YouTube-Advertising-Services-ag-courses-item_date-box">
            Keyword research is the foundation of an effective digital marketing
            strategy. Our SEO experts analyze industry trends, consumer
            behavior, and your niche to identify high-performing keywords. We
            conduct technical SEO audits to assess your current keyword rankings
            and optimize your web pages with the best search terms for better
            visibility and performance.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default YouTube_Advertising_Services