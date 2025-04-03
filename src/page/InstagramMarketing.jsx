import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./InstagramMarketing.css"
import imageSVG from '../assets/img/13955755_5398958.svg';
import { Link } from "react-router-dom";

function InstagramMarketing() {
  return (
    <>
    <Header/>
    {/* MAIN----------------------- */}
    <div className="InstagramMarketing-main">
      <div className="InstagramMarketing-main-blue-cover" />
      <div className="InstagramMarketing-content">
        <h2>Instagram Advertising</h2>
        <ul>
          <li>Home</li>
          <li>&gt;</li>
          <li>What we do</li>
          <li>&gt;</li>
          <li>Instagram Advertising</li>
        </ul>
      </div>
    </div>
    {/* TAGLINE-------------------- */}
    <div className="InstagramMarketing-tagline-section">
      <h2>Instagram Advertising</h2>
      <div className="InstagramMarketing-beat-img" />
      <p>
        Capture the attention of billions of consumers eager to build meaningful
        connections with your business.
      </p>
    </div>
    {/* HERO SECTION-------------- */}
    <div className="InstagramMarketing-hero-section">
      <div className="InstagramMarketing-hero-img">
      <img src={imageSVG} alt="SVG Image" />
      </div>
      <div className="InstagramMarketing-hero-content">
        <p className="InstagramMarketing-hero-techie">Our Advertising Experts</p>
        <h3>Instagram Advertising</h3>
        <div className="InstagramMarketing-hero-conent-para">
          <p>
            If you've started marketing on Instagram, you've likely realized how
            simple it is to set up an ad or post an update. But getting that
            content to truly succeed is a different story. There are several
            reasons why this happens. Social platforms, especially Instagram,
            evolve rapidly, introducing new features and products that can
            overwhelm the average marketer. Staying on top of Instagram's constant
            updates, keeping up with trends, responding to customer messages—all
            while managing other aspects of your brand—can feel like an impossible
            task.
          </p>
          <p>
            Even if you can stay current with these changes, you may not have the
            time to create unique content, run A/B tests, monitor your campaigns,
            optimize them, and analyze the results thoroughly. That's where we
            come in to help streamline the process and maximize your success.
          </p>
        </div>
        <div className="InstagramMarketing-hero-button">
        <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
    {/* CARDS - PROCESS------------------ */}
    <div className="InstagramMarketing-ag-format-container">
      <div className="InstagramMarketing-ag-courses_box">
        <div className="InstagramMarketing-ag-courses_item">
          <a href="#" className="InstagramMarketing-ag-courses-item_link">
            <div className="InstagramMarketing-ag-courses-item_bg" />
            <div className="InstagramMarketing-ag-courses-item_title">1. Analytics</div>
            <div className="InstagramMarketing-ag-courses-item_date-box">
              We work with data-tracking tools to gain insights that pinpoint
              where each campaign went right, improving your strategy.
            </div>
          </a>
        </div>
        <div className="InstagramMarketing-ag-courses_item">
          <a href="#" className="InstagramMarketing-ag-courses-item_link">
            <div className="InstagramMarketing-ag-courses-item_bg" />
            <div className="InstagramMarketing-ag-courses-item_title">
              2. Audience Identification
            </div>
            <div className="InstagramMarketing-ag-courses-item_date-box">
              We can identify and assess your audience, determining how best to
              use Instagram's powerful targeting capabilities.
            </div>
          </a>
        </div>
        <div className="InstagramMarketing-ag-courses_item">
          <a href="#" className="InstagramMarketing-ag-courses-item_link">
            <div className="InstagramMarketing-ag-courses-item_bg" />
            <div className="InstagramMarketing-ag-courses-item_title">3. Strategy</div>
            <div className="InstagramMarketing-ag-courses-item_date-box">
              We can create and implement an effective Instagram marketing
              strategy catered specifically to your brand's goals.
            </div>
          </a>
        </div>
        <div className="InstagramMarketing-ag-courses_item">
          <a href="#" className="InstagramMarketing-ag-courses-item_link">
            <div className="InstagramMarketing-ag-courses-item_bg" />
            <div className="InstagramMarketing-ag-courses-item_title">4. Monitoring</div>
            <div className="InstagramMarketing-ag-courses-item_date-box">
              We can monitor your Facebook Page and campaigns, recognizing any
              opportunities or issues that may pop up and responding in turn.
            </div>
          </a>
        </div>
        <div className="InstagramMarketing-ag-courses_item">
          <a href="#" className="InstagramMarketing-ag-courses-item_link">
            <div className="InstagramMarketing-ag-courses-item_bg" />
            <div className="InstagramMarketing-ag-courses-item_title">5. Paid Ads</div>
            <div className="InstagramMarketing-ag-courses-item_date-box">
              Paid ads are the best way to expand reach and gain traction on
              Instagram. We run the process from format selection to final
              analysis.
            </div>
          </a>
        </div>
        <div className="InstagramMarketing-ag-courses_item">
          <a href="#" className="InstagramMarketing-ag-courses-item_link">
            <div className="InstagramMarketing-ag-courses-item_bg" />
            <div className="InstagramMarketing-ag-courses-item_title">6. Content Creation</div>
            <div className="InstagramMarketing-ag-courses-item_date-box">
              We design and schedule regular updates and on-the-fly news items
              that will captivate your desired audience. We help you get the most
              out of your Page.
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default InstagramMarketing