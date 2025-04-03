import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./Content_writing.css"
import rbImage from "../assets/img/rb_75313.png";
import { Link } from "react-router-dom";

function Content_writing() {
  return (
    <>
    <Header/>
    {/* MAIN----------------------- */}
    <div className="Content-writing-main">
      <div className="Content-writing-main-blue-cover" />
      <div className="Content-writing-content">
        <h2>Content Writing</h2>
        <ul>
          <li>Home</li>
          <li>&gt;</li>
          <li>Services</li>
          <li>&gt;</li>
          <li>Content Writing</li>
        </ul>
      </div>
    </div>
    {/* TAGLINE-------------------- */}
    <div className="Content-writing-tagline-section">
      <h2>Content Writing</h2>
      <div className="Content-writing-beat-img" />
      <p>Words that resonate, stories that inspire, results that matter.</p>
    </div>
    {/* HERO SECTION-------------- */}
    <div className="Content-writing-hero-section">
      <div className="Content-writing-hero-img">
      <img src={rbImage} alt="RB Image" />;
      </div>
      <div className="Content-writing-hero-content">
        <p className="Content-writing-hero-techie">Our Content Writing Experts</p>
        <h3>Content Writing</h3>
        <div className="Content-writing-hero-conent-para">
          <p>
            Knoqlogico is a forward-thinking digital organization committed to
            transforming businesses with cutting-edge digital and tech solutions.
            From crafting professional websites that enhance online visibility to
            delivering tailored strategies that boost customer engagement,
            Knoqlogico empowers businesses to achieve their goals. With a focus on
            seamless functionality and impactful design, we help clients build a
            strong digital presence that drives growth and sets them apart in
            competitive markets.
          </p>
          <p>
            At Knoqlogico, innovation meets expertise to deliver results that
            matter. Whether it's creating intuitive web experiences or providing
            scalable tech solutions, our team works collaboratively with clients
            to understand their unique needs. By combining creativity with
            technical precision, we ensure businesses, both domestic and
            international, thrive in the digital landscape. Together, let's build
            a future where your business stands out and succeeds.
          </p>
        </div>
        <div className="Content-writing-hero-button">
        <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
    {/* CARDS - PROCESS------------------ */}
    <div className="Content-writing-ag-format-container">
      <div className="Content-writing-ag-courses_box">
        <div className="Content-writing-ag-courses_item">
          <a href="#" className="Content-writing-ag-courses-item_link">
            <div className="Content-writing-ag-courses-item_bg" />
            <div className="Content-writing-ag-courses-item_title">1. SEO Content Writing</div>
            <div className="Content-writing-ag-courses-item_date-box">
              Knoqlogico creates SEO content tailored to your target audience.
              Drive organic traffic and improve visibility with well-researched
              keyword.
            </div>
          </a>
        </div>
        <div className="Content-writing-ag-courses_item">
          <a href="#" className="Content-writing-ag-courses-item_link">
            <div className="Content-writing-ag-courses-item_bg" />
            <div className="Content-writing-ag-courses-item_title">
              2. Blog &amp; Article Writing
            </div>
            <div className="Content-writing-ag-courses-item_date-box">
              Engage readers with captivating blogs and articles designed to
              establish thought leadership and connect with your audience
              authentically.
            </div>
          </a>
        </div>
        <div className="Content-writing-ag-courses_item">
          <a href="#" className="Content-writing-ag-courses-item_link">
            <div className="Content-writing-ag-courses-item_bg" />
            <div className="Content-writing-ag-courses-item_title">
              3. Social Media Content Creation
            </div>
            <div className="Content-writing-ag-courses-item_date-box">
              From eye-catching captions to strategic campaign content, we deliver
              posts that spark engagement and build a loyal following.
            </div>
          </a>
        </div>
        <div className="Content-writing-ag-courses_item">
          <a href="#" className="Content-writing-ag-courses-item_link">
            <div className="Content-writing-ag-courses-item_bg" />
            <div className="Content-writing-ag-courses-item_title">4. Website Copywriting</div>
            <div className="Content-writing-ag-courses-item_date-box">
              With persuasive and conversion-focused website copy, Knoqlogico
              ensures your online presence speaks volumes about your brand and
              drives results.
            </div>
          </a>
        </div>
        <div className="Content-writing-ag-courses_item">
          <a href="#" className="Content-writing-ag-courses-item_link">
            <div className="Content-writing-ag-courses-item_bg" />
            <div className="Content-writing-ag-courses-item_title">5. E-Commerce Content</div>
            <div className="Content-writing-ag-courses-item_date-box">
              Elevate your product pages with enticing descriptions that highlight
              features, benefits, and value, encouraging customers to click “Buy
              Now.”
            </div>
          </a>
        </div>
        <div className="Content-writing-ag-courses_item">
          <a href="#" className="Content-writing-ag-courses-item_link">
            <div className="Content-writing-ag-courses-item_bg" />
            <div className="Content-writing-ag-courses-item_title">6. Case Studies</div>
            <div className="Content-writing-ag-courses-item_date-box">
              Showcase your expertise with in-depth whitepapers and compelling
              case studies that persuade stakeholders and build trust.
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default Content_writing