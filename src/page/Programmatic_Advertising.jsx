import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./Programmatic_Advertising.css"
import programmaticAdvertising from '../assets/img/Programmatic-Advertising.svg';
import { Link } from "react-router-dom";

function Programmatic_Advertising() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="Programmatic_Advertising-main">
    <div className="Programmatic_Advertising-main-blue-cover" />
    <div className="Programmatic_Advertising-content">
      <h2>Programmatic Advertising</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Programmatic Advertising</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="Programmatic_Advertising-tagline-section">
    <h2>Programmatic Advertising</h2>
    <div className="Programmatic_Advertising-beat-img" />
    <p>
      Programmatic Advertising Automates the buying and placement of ads using
      algorithms and real-time data to target the right audience at the right
      time.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="Programmatic_Advertising-hero-section">
    <div className="Programmatic_Advertising-hero-img">
    <img src={programmaticAdvertising} alt="Programmatic Advertising" />
    </div>
    <div className="Programmatic_Advertising-hero-content">
      <p className="Programmatic_Advertising-hero-techie">Our Marketing Expert</p>
      <h3>Programmatic Advertising</h3>
      <div className="Programmatic_Advertising-hero-conent-para">
        <p>
          Knoqlogico helps you strategically target users based on their
          previous site behavior. If they visited a pricing page, we retarget
          them with a personalized promotional offer to drive conversions. For
          users who read specific blog posts, we deliver content ads to keep
          them engaged. If they added items to their cart but didn't complete
          checkout.
        </p>
        <p>
          Knoqlogico encourages them to finalize the purchase with display ads
          across their frequently visited sites. With programmatic retargeting,
          Knoqlogico provides tailored solutions for every stage of the user
          journey, turning missed opportunities into valuable revenue.
        </p>
      </div>
      <div className="Programmatic_Advertising-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="Programmatic_Advertising-ag-format-container">
    <div className="Programmatic_Advertising-ag-courses_box">
      <div className="Programmatic_Advertising-ag-courses_item">
        <a href="#" className="Programmatic_Advertising-ag-courses-item_link">
          <div className="Programmatic_Advertising-ag-courses-item_bg" />
          <div className="Programmatic_Advertising-ag-courses-item_title">
            1. Full Media Planning with Knoqlogico
          </div>
          <div className="Programmatic_Advertising-ag-courses-item_date-box">
            Knoqlogico, our programmatic advertising agency, meticulously crafts
            strategic plans to optimize your digital advertising efforts. We
            start by thoroughly understanding your business, ideal customers,
            and campaign goals. This ensures your programmatic ad campaigns are
            set up for long-term success, driving sustainable growth and
            measurable results. Our tailored approach guarantees maximum .
          </div>
        </a>
      </div>
      <div className="Programmatic_Advertising-ag-courses_item">
        <a href="#" className="Programmatic_Advertising-ag-courses-item_link">
          <div className="Programmatic_Advertising-ag-courses-item_bg" />
          <div className="Programmatic_Advertising-ag-courses-item_title">
            2.Omnichannel Campaign Management with Knoqlogico
          </div>
          <div className="Programmatic_Advertising-ag-courses-item_date-box">
            Knoqlogico, we seamlessly execute coordinated campaigns across
            multiple channels, including websites, mobile apps, and social media
            platforms. Our omnichannel approach ensures your brand maintains a
            consistent presence, boosting engagement and visibility across the
            digital landscape. This unified strategy drives greater impact and
            strengthens your brand’s reach.
          </div>
        </a>
      </div>
      <div className="Programmatic_Advertising-ag-courses_item">
        <a href="#" className="Programmatic_Advertising-ag-courses-item_link">
          <div className="Programmatic_Advertising-ag-courses-item_bg" />
          <div className="Programmatic_Advertising-ag-courses-item_title">
            3. Programmatic Ads Creative and Testing with Knoqlogico
          </div>
          <div className="Programmatic_Advertising-ag-courses-item_date-box">
            Knoqlogico, our programmatic advertising company specializes in
            creating eye-catching ads that drive desired user actions. Through
            continuous testing and optimization, we design display banners,
            video cutdowns, and other assets that maximize the impact of your ad
            investment. Our creative approach ensures your campaigns deliver the
            best results.
          </div>
        </a>
      </div>
      <div className="Programmatic_Advertising-ag-courses_item">
        <a href="#" className="Programmatic_Advertising-ag-courses-item_link">
          <div className="Programmatic_Advertising-ag-courses-item_bg" />
          <div className="Programmatic_Advertising-ag-courses-item_title">
            4. Programmatic Video Advertising with Knoqlogico
          </div>
          <div className="Programmatic_Advertising-ag-courses-item_date-box">
            Capture your audience’s attention with immersive programmatic video
            ads. Whether in-stream or out-stream, Knoqlogico crafts compelling
            video campaigns that resonate with your target audience and drive
            engagement. Our approach ensures your video ads effectively
            communicate your message and boost user interaction, maximizing your
            campaign’s impact.
          </div>
        </a>
      </div>
      <div className="Programmatic_Advertising-ag-courses_item">
        <a href="#" className="Programmatic_Advertising-ag-courses-item_link">
          <div className="Programmatic_Advertising-ag-courses-item_bg" />
          <div className="Programmatic_Advertising-ag-courses-item_title">
            5. Programmatic Audio Advertising with Knoqlogico
          </div>
          <div className="Programmatic_Advertising-ag-courses-item_date-box">
            Expand your reach and connect with more customers through
            programmatic audio ads. Knoqlogico handles media buys across premium
            publishers and optimizes delivery based on engagement metrics. We
            serve dynamic audio ads that resonate with your target audience,
            ensuring your message hits the right mark with your best customers.
          </div>
        </a>
      </div>
      <div className="Programmatic_Advertising-ag-courses_item">
        <a href="#" className="Programmatic_Advertising-ag-courses-item_link">
          <div className="Programmatic_Advertising-ag-courses-item_bg" />
          <div className="Programmatic_Advertising-ag-courses-item_title">
            6. Ongoing Campaign Consulting and Analysis with Knoqlogico
          </div>
          <div className="Programmatic_Advertising-ag-courses-item_date-box">
            Knoqlogico, we ensure your programmatic campaigns evolve with
            changing market dynamics. Our team provides continuous analysis,
            offering valuable insights and actionable recommendations to refine
            your strategy for optimal performance.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default Programmatic_Advertising