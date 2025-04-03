import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import rbImage from "../assets/img/rb_3680.png";
import "./Video_editing.css"
import { Link } from "react-router-dom";

function Video_editing() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="Video-editing-main">
    <div className="Video-editing-main-blue-cover" />
    <div className="Video-editing-content">
      <h2>Video Editing</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>Services</li>
        <li>&gt;</li>
        <li>Video Editing</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="Video-editing-tagline-section">
    <h2>Video Editing</h2>
    <div className="Video-editing-beat-img" />
    <p>
      Transforming raw footage into captivating stories that inspire, engage,
      and leave a lasting impact on your audience.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="Video-editing-hero-section">
    <div className="Video-editing-hero-img">
    <img src={rbImage} alt="RB Image" />
    </div>
    <div className="Video-editing-hero-content">
      <p className="Video-editing-hero-techie">Our Video Editing Experts</p>
      <h3>Video Editing</h3>
      <div className="Video-editing-hero-conent-para">
        <p>
          Bring your ideas to life with professional video editing that
          captivates and communicates your vision. Whether it's corporate
          videos, social media reels, or personal projects, we ensure every
          frame tells a story. With seamless transitions, crisp audio, and
          dynamic effects, your content will leave a lasting impression.
        </p>
        <p>
          At Knoqlogico, we combine creativity with precision to deliver videos
          that stand out. From color grading and motion graphics to fine-tuning
          details, we handle every aspect of editing with care. Let us transform
          your raw footage into polished visuals that engage your audience and
          elevate your brand.
        </p>
      </div>
      <div className="Video-editing-hero-button">
        <a href="#">Contact Us</a>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="Video-editing-ag-format-container">
    <div className="Video-editing-ag-courses_box">
      <div className="Video-editing-ag-courses_item">
        <a href="#" className="Video-editing-ag-courses-item_link">
          <div className="Video-editing-ag-courses-item_bg" />
          <div className="Video-editing-ag-courses-item_title">
            1. Corporate Video Editing
          </div>
          <div className="Video-editing-ag-courses-item_date-box">
            Transform raw footage into polished corporate videos, including
            promotional clips, presentations, and internal training materials.
          </div>
        </a>
      </div>
      <div className="Video-editing-ag-courses_item">
        <a href="#" className="Video-editing-ag-courses-item_link">
          <div className="Video-editing-ag-courses-item_bg" />
          <div className="Video-editing-ag-courses-item_title">
            2. Social Media Video Editing
          </div>
          <div className="Video-editing-ag-courses-item_date-box">
            Create eye-catching, engaging, and platform-optimized videos for
            social media, from Instagram reels to TikToks, ensuring max reach
            and engagement.
          </div>
        </a>
      </div>
      <div className="Video-editing-ag-courses_item">
        <a href="#" className="Video-editing-ag-courses-item_link">
          <div className="Video-editing-ag-courses-item_bg" />
          <div className="Video-editing-ag-courses-item_title">3. YouTube Video Editing</div>
          <div className="Video-editing-ag-courses-item_date-box">
            Enhance your YouTube channel with high-quality edits, including
            intro/outro creation, transitions, and syncing with music to keep
            your audience hooked.
          </div>
        </a>
      </div>
      <div className="Video-editing-ag-courses_item">
        <a href="#" className="Video-editing-ag-courses-item_link">
          <div className="Video-editing-ag-courses-item_bg" />
          <div className="Video-editing-ag-courses-item_title">4. Event Video Editing</div>
          <div className="Video-editing-ag-courses-item_date-box">
            Turn event footage (conferences, weddings, webinars) into
            captivating highlight reels and full-length edits that capture every
            significant moment.
          </div>
        </a>
      </div>
      <div className="Video-editing-ag-courses_item">
        <a href="#" className="Video-editing-ag-courses-item_link">
          <div className="Video-editing-ag-courses-item_bg" />
          <div className="Video-editing-ag-courses-item_title">5. Explainer Videos</div>
          <div className="Video-editing-ag-courses-item_date-box">
            Create product demo videos and explainer videos that showcase your
            product's features, benefits, and usage in an engaging and
            easy-to-understand way.
          </div>
        </a>
      </div>
      <div className="Video-editing-ag-courses_item">
        <a href="#" className="Video-editing-ag-courses-item_link">
          <div className="Video-editing-ag-courses-item_bg" />
          <div className="Video-editing-ag-courses-item_title">6. Interview Editing</div>
          <div className="Video-editing-ag-courses-item_date-box">
            Craft powerful testimonial and interview videos, polishing the
            content and enhancing the message to amplify customer and client
            experiences effectively.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default Video_editing