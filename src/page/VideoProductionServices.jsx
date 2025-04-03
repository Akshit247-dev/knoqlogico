import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./VideoProductionServices.css"
import svgImage from '../assets/img/12085849_20944342.svg';
import { Link } from "react-router-dom";

function VideoProductionServices() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="VideoProductionServices-main">
    <div className="VideoProductionServices-main-blue-cover" />
    <div className="VideoProductionServices-content">
      <h2>Video Production Services</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Video Production Services</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="VideoProductionServices-tagline-section">
    <h2>Video Production Services</h2>
    <div className="VideoProductionServices-beat-img" />
    <p>
      Bringing Your Brand Story to Life with Stunning Video Content That
      Engages, Inspires, and Converts.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="VideoProductionServices-hero-section">
    <div className="VideoProductionServices-hero-img">
    <img src={svgImage} alt="Image Description" />
    </div>
    <div className="VideoProductionServices-hero-content">
      <p className="VideoProductionServices-hero-techie">Our Production Experts</p>
      <h3>Video Production Services</h3>
      <div className="VideoProductionServices-hero-conent-para">
        <p>
          Our video production services create engaging, high-quality content
          that tells your brand's story and captivates your audience. From
          concept development and scriptwriting to shooting and editing, our
          experienced team handles every aspect of the video production process.
          Whether it's for promotional videos, explainer videos, or corporate
          presentations, we craft videos that align with your business goals and
          resonate with your target audience.
        </p>
        <p>
          We use the latest technology and creative techniques to deliver
          professional-grade videos that enhance your marketing strategy. Our
          video production services focus on optimizing content for various
          platforms, including social media, websites, and email campaigns. With
          a strong focus on visual storytelling, we help you create compelling
          videos that drive engagement and conversions.
        </p>
      </div>
      <div className="VideoProductionServices-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="VideoProductionServices-ag-format-container">
    <div className="VideoProductionServices-ag-courses_box">
      <div className="VideoProductionServices-ag-courses_item">
        <a href="#" className="VideoProductionServices-ag-courses-item_link">
          <div className="VideoProductionServices-ag-courses-item_bg" />
          <div className="VideoProductionServices-ag-courses-item_title">1. PRE-PRODUCTION</div>
          <div className="VideoProductionServices-ag-courses-item_date-box">
            Pre-production is a crucial phase of the production process. It
            demands careful planning and preparation. We never go to a video
            shoot before we have a detailed schedule and know precisely what
            footage to capture. This is when we iron out the details and ensure
            an easy, consistent, and cost effective.
          </div>
        </a>
      </div>
      <div className="VideoProductionServices-ag-courses_item">
        <a href="#" className="VideoProductionServices-ag-courses-item_link">
          <div className="VideoProductionServices-ag-courses-item_bg" />
          <div className="VideoProductionServices-ag-courses-item_title">2. PRODUCTION</div>
          <div className="VideoProductionServices-ag-courses-item_date-box">
            Lights, camera, action! Whether we're shooting on-location, in
            studio, or out in the street, our cinematographers are prepared to
            capture the highest quality footage for your media project. The
            director will oversee the production, ensuring you get the most
            value for your time, creativity, and budget.
          </div>
        </a>
      </div>
      <div className="VideoProductionServices-ag-courses_item">
        <a href="#" className="VideoProductionServices-ag-courses-item_link">
          <div className="VideoProductionServices-ag-courses-item_bg" />
          <div className="VideoProductionServices-ag-courses-item_title">3. POST-PRODUCTION</div>
          <div className="VideoProductionServices-ag-courses-item_date-box">
            Editing is where the magic happens. With the latest software and
            talented editors, your footage is transformed into a work of art.
            Our post-production services include motion graphics, titles, 2D
            &amp; 3D animation, voiceover, visual effects, music, sound design
            and color grading. If you can imagine it, we can do it.
          </div>
        </a>
      </div>
      <div className="VideoProductionServices-ag-courses_item">
        <a href="#" className="VideoProductionServices-ag-courses-item_link">
          <div className="VideoProductionServices-ag-courses-item_bg" />
          <div className="VideoProductionServices-ag-courses-item_title">4. DELIVERY</div>
          <div className="VideoProductionServices-ag-courses-item_date-box">
            You can get the final video in any medium you like. We have the
            in-house ability to export to any file format and upload to any
            video hosting service available (YouTube, Vimeo, Twitter, Instagram,
            Facebook). We can also embed the video into your own website.
          </div>
        </a>
      </div>
      {/* <div class="ag-courses_item">
    <a href="#" class="ag-courses-item_link">
      <div class="ag-courses-item_bg"></div>

      <div class="ag-courses-item_title">5. Content Optimization</div>

      <div class="ag-courses-item_date-box">
          We tailor each video and audio asset for the best performance on various platforms, adjusting file sizes, formats, and resolution to ensure maximum reach and effectiveness, whether on social media, websites, or ad campaigns.
      </div>
    </a>
  </div>
  <div class="ag-courses_item">
    <a href="#" class="ag-courses-item_link">
      <div class="ag-courses-item_bg"></div>

      <div class="ag-courses-item_title">6. Distribution & Analytics</div>

      <div class="ag-courses-item_date-box">
          After production, we assist with content distribution, ensuring it reaches your target audience across multiple platforms. We provide detailed performance analytics to track viewer engagement, conversion rates, and overall success.
      </div>
    </a>
  </div> */}
    </div>
  </div>
  <Footer/>
</>
  )
}

export default VideoProductionServices