import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./SocialMediaMarketing.css"
import rbImage from '../assets/img/rb_9027.png';
import { Link } from "react-router-dom";

function SocialMediaMarketing() {
  return (
    <>
    <Header/>
    {/* MAIN----------------------- */}
    <div className="SocialMediaMarketing-main">
      <div className="SocialMediaMarketing-main-blue-cover" />
      <div className="SocialMediaMarketing-content">
        <h2>Social Media Marketing</h2>
        <ul>
          <li>Home</li>
          <li>&gt;</li>
          <li>Services</li>
          <li>&gt;</li>
          <li>Social Media Marketing</li>
        </ul>
      </div>
    </div>
    {/* TAGLINE-------------------- */}
    <div className="SocialMediaMarketing-tagline-section">
      <h2>Social Media Marketing</h2>
      <div className="SocialMediaMarketing-beat-img" />
      <p>
        Social media is key to enhancing brand visibility, engaging customers, and
        driving business growth. Our team will help create a personalized strategy
        and manage your platforms effectively.
      </p>
    </div>
    {/* HERO SECTION-------------- */}
    <div className="SocialMediaMarketing-hero-section">
      <div className="SocialMediaMarketing-hero-img">
      <img src={rbImage} alt="Image Description" />
      </div>
      <div className="SocialMediaMarketing-hero-content">
        <p className="SocialMediaMarketing-hero-techie">Our Social Media Marketing Experts</p>
        <h3>Social Media Marketing</h3>
        <div className="SocialMediaMarketing-hero-conent-para">
          <p>
            Our social media experts craft innovative strategies to build brand
            awareness, foster engagement, and drive meaningful business results.
            We create captivating content tailored to your audience while managing
            your platforms for consistent and impactful communication. Utilizing
            data-driven insights and industry best practices, we ensure your
            social media presence is optimized for maximum reach and performance.
            From strategy development to campaign execution and analytics, our
            services empower businesses to connect with their audience and achieve
            measurable growth across social platforms.
          </p>
        </div>
        <div className="SocialMediaMarketing-hero-button">
        <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
    {/* <h2 style="text-align: center; margin-top: 40px; padding: 6px 10px; background-color: #e2e2e2;">  
  Our Social Media Services
      </h2> */}
    {/* CARDS - PROCESS------------------ */}
    <div className="SocialMediaMarketing-ag-format-container">
      <div className="SocialMediaMarketing-ag-courses_box">
        <div className="SocialMediaMarketing-ag-courses_item">
          <a href="#" className="SocialMediaMarketing-ag-courses-item_link">
            <div className="SocialMediaMarketing-ag-courses-item_bg" />
            <div className="SocialMediaMarketing-ag-courses-item_title">1. Social Media Strategy</div>
            <div className="SocialMediaMarketing-ag-courses-item_date-box">
              We begin by gaining a deep understanding of your business goals,
              target audience, and unique brand identity. With this foundation,
              our expert team designs a tailored social media strategy that
              amplifies your brand's voice and vision, ensuring your message
              resonates powerfully and connects effectively across all platforms
              for maximum impact.
            </div>
          </a>
        </div>
        <div className="SocialMediaMarketing-ag-courses_item">
          <a href="#" className="SocialMediaMarketing-ag-courses-item_link">
            <div className="SocialMediaMarketing-ag-courses-item_bg" />
            <div className="SocialMediaMarketing-ag-courses-item_title">
              2. Social Media Content Creation
            </div>
            <div className="SocialMediaMarketing-ag-courses-item_date-box">
              Content is the cornerstone of successful social media campaigns and
              brand engagement. We create high-quality content, graphics, blog
              posts, captions, and engaging videos. Our strategically curated
              approach ensures your content not only resonates with your audience
              but also drives interactions, boosts visibility, and fosters lasting
              connections.
            </div>
          </a>
        </div>
        <div className="SocialMediaMarketing-ag-courses_item">
          <a href="#" className="SocialMediaMarketing-ag-courses-item_link">
            <div className="SocialMediaMarketing-ag-courses-item_bg" />
            <div className="SocialMediaMarketing-ag-courses-item_title">
              3. Social Media Advertising
            </div>
            <div className="SocialMediaMarketing-ag-courses-item_date-box">
              Our targeted social media advertising campaigns are expertly crafted
              to connect with your ideal audience and deliver results. Whether
              it's Facebook Ads, Instagram promotions, LinkedIn ads, or other
              platforms, we meticulously optimize each campaign to increase
              traffic, drive conversions, boost brand awareness, and achieve your
              unique business objectives.
            </div>
          </a>
        </div>
        <div className="SocialMediaMarketing-ag-courses_item">
          <a href="#" className="SocialMediaMarketing-ag-courses-item_link">
            <div className="SocialMediaMarketing-ag-courses-item_bg" />
            <div className="SocialMediaMarketing-ag-courses-item_title">4. Social Media Analytics</div>
            <div className="SocialMediaMarketing-ag-courses-item_date-box">
              We track and analyze key social media performance metrics, such as
              engagement rates, follower growth, impressions, and ROI. These
              insights provide a clear picture of what's working and where
              improvements are needed. We continuously refine your campaigns to
              achieve higher returns.
            </div>
          </a>
        </div>
        <div className="SocialMediaMarketing-ag-courses_item">
          <a href="#" className="SocialMediaMarketing-ag-courses-item_link">
            <div className="SocialMediaMarketing-ag-courses-item_bg" />
            <div className="SocialMediaMarketing-ag-courses-item_title">
              5. Social Media Engagement
            </div>
            <div className="SocialMediaMarketing-ag-courses-item_date-box">
              Creating meaningful interactions with your audience is vital for
              building a strong online presence. Our team focuses on driving
              engagement through interactive posts, polls, contests, and
              responding to audience's queries and feedback. We help build a loyal
              and engaged community around your brand.
            </div>
          </a>
        </div>
        <div className="SocialMediaMarketing-ag-courses_item">
          <a href="#" className="SocialMediaMarketing-ag-courses-item_link">
            <div className="SocialMediaMarketing-ag-courses-item_bg" />
            <div className="SocialMediaMarketing-ag-courses-item_title">
              6. Social Media Optimization
            </div>
            <div className="SocialMediaMarketing-ag-courses-item_date-box">
              We expertly manage your social media profiles—be it Facebook,
              Instagram, LinkedIn, Twitter, or others—ensuring consistent updates,
              strategic optimization, and impactful branding. Our goal is to
              strengthen your presence, boost engagement, and grow your audience
              organically and effectively.
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default SocialMediaMarketing