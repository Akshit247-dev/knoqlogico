import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./DigitalPROutreach.css"
import prOutreachImage from '../assets/img/proutrich1.png';
import { Link } from "react-router-dom";

function DigitalPROutreach() {
  return (
    <>
    <Header/>
    {/* MAIN----------------------- */}
    <div className="DigitalPROutreach-main">
      <div className="DigitalPROutreach-main-blue-cover" />
      <div className="DigitalPROutreach-content">
        <h2>Digital PR</h2>
        <ul>
          <li>Home</li>
          <li>&gt;</li>
          <li>What we do</li>
          <li>&gt;</li>
          <li>Digital PR</li>
        </ul>
      </div>
    </div>
    {/* TAGLINE-------------------- */}
    <div className="DigitalPROutreach-tagline-section">
      <h2>Digital PR</h2>
      <div className="DigitalPROutreach-beat-img" />
      <p>
        Your business needs online PR services to craft compelling content that
        attracts both media attention and engages your audience.
      </p>
    </div>
    {/* HERO SECTION-------------- */}
    <div className="DigitalPROutreach-hero-section">
    <div className="DigitalPROutreach-hero-img">
      <img src={prOutreachImage} alt="Digital PR Outreach" />
    </div>
      <div className="DigitalPROutreach-hero-content">
        <p className="DigitalPROutreach-hero-techie">Our Link Building Experts</p>
        <h3>Digital PR</h3>
        <div className="DigitalPROutreach-hero-conent-para">
          <p>
            At knoqlogico, our digital PR outreach strategy is centered around
            fostering meaningful relationships with key online journalists,
            bloggers, and influencers in your industry. We craft tailored,
            engaging pitches that highlight your brand's unique story and
            offerings, distributing them to the right publications and platforms.
            This approach ensures your business gets the media exposure it
            deserves, while securing valuable backlinks that contribute to your
            website's SEO performance.
          </p>
          <p>
            Our team leverages digital PR to not only increase brand visibility
            but also establish your company as an authority in your field. By
            combining storytelling with strategic media placements, we ensure your
            message resonates with a wider audience. This process helps you build
            credibility, enhance your reputation, and generate organic interest in
            your brand without relying on hard-sell tactics.
          </p>
        </div>
        <div className="DigitalPROutreach-hero-button">
        <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
    {/* CARDS - PROCESS------------------ */}
    <div className="DigitalPROutreach-ag-format-container">
      <div className="DigitalPROutreach-ag-courses_box">
        <div className="DigitalPROutreach-ag-courses_item">
          <a href="#" className="DigitalPROutreach-ag-courses-item_link">
            <div className="DigitalPROutreach-ag-courses-item_bg" />
            <div className="DigitalPROutreach-ag-courses-item_title">
              1. Manual Outreach Service
            </div>
            <div className="DigitalPROutreach-ag-courses-item_date-box">
              At knoqlogico, we help you nurture relationships with your referring
              domains and maintain regular communication to strengthen your
              backlink strategy. By identifying credible websites with similar
              target audiences and assessing their SEO performance, we ensure your
              brand gains valuable backlinks that boost visibility and
              credibility.
            </div>
          </a>
        </div>
        <div className="DigitalPROutreach-ag-courses_item">
          <a href="#" className="DigitalPROutreach-ag-courses-item_link">
            <div className="DigitalPROutreach-ag-courses-item_bg" />
            <div className="DigitalPROutreach-ag-courses-item_title">2. PR SEO Services</div>
            <div className="DigitalPROutreach-ag-courses-item_date-box">
              At knoqlogico, we seamlessly integrate online PR services with your
              SEO campaigns. Our team identifies valuable keywords, crafts content
              strategies, and implements effective link-building tactics to
              improve your organic search results. Through on-page and off-page PR
              efforts, we amplify your brand's message across multiple channels.
            </div>
          </a>
        </div>
        <div className="DigitalPROutreach-ag-courses_item">
          <a href="#" className="DigitalPROutreach-ag-courses-item_link">
            <div className="DigitalPROutreach-ag-courses-item_bg" />
            <div className="DigitalPROutreach-ag-courses-item_title">3. Link Building</div>
            <div className="DigitalPROutreach-ag-courses-item_date-box">
              At knoqlogico, we focus on building a robust backlink profile to
              drive quality traffic and enhance your site's indexability. Our
              online PR agency helps boost your domain by securing natural,
              high-quality backlinks from trusted sources. Using ethical
              link-building practices, we ensure your brand gets featured in
              relevant publications.
            </div>
          </a>
        </div>
        <div className="DigitalPROutreach-ag-courses_item">
          <a href="#" className="DigitalPROutreach-ag-courses-item_link">
            <div className="DigitalPROutreach-ag-courses-item_bg" />
            <div className="DigitalPROutreach-ag-courses-item_title">4. Content Marketing</div>
            <div className="DigitalPROutreach-ag-courses-item_date-box">
              At knoqlogico, we believe quality content is essential for securing
              media coverage and backlinks. Our digital PR team creates compelling
              multimedia assets that speak to your audience and align with your
              brand's vision. We distribute these assets to relevant publications
              to generate positive mentions and valuable backlinks.
            </div>
          </a>
        </div>
        <div className="DigitalPROutreach-ag-courses_item">
          <a href="#" className="DigitalPROutreach-ag-courses-item_link">
            <div className="DigitalPROutreach-ag-courses-item_bg" />
            <div className="DigitalPROutreach-ag-courses-item_title">5. Guest Posts</div>
            <div className="DigitalPROutreach-ag-courses-item_date-box">
              At knoqlogico, we understand that how you present your brand is key
              to building authority and trust. Our digital PR team helps you get
              featured in reputable publications by crafting compelling guest
              posts that highlight your brand's unique value. We strategically
              distribute these posts to relevant outlets to maximize exposure.
            </div>
          </a>
        </div>
        <div className="DigitalPROutreach-ag-courses_item">
          <a href="#" className="DigitalPROutreach-ag-courses-item_link">
            <div className="DigitalPROutreach-ag-courses-item_bg" />
            <div className="DigitalPROutreach-ag-courses-item_title">6. Niche Edits</div>
            <div className="DigitalPROutreach-ag-courses-item_date-box">
              At knoqlogico, our PR services include securing link placements on
              high-authority blog posts to enhance visibility. We reach out to
              trusted websites to propose the addition of relevant, authoritative
              backlinks to their existing content. Through our ethical niche
              edits, we ensure all inbound links are earned naturally.
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default DigitalPROutreach