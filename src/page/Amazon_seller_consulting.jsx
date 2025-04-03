import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "./Amazon_seller_consulting.css"
import amazonSellerConsultingImage from '../assets/img/amazon-seller-consulting1.svg';
import { Link } from "react-router-dom";

function Amazon_seller_consulting() {
  return (
    <>
    <Header/>
    {/* MAIN----------------------- */}
    <div className="Amazon-seller-consulting-main">
      <div className="Amazon-seller-consulting-main-blue-cover" />
      <div className="Amazon-seller-consulting-content">
        <h2>Amazon Seller Consulting</h2>
        <ul>
          <li>Home</li>
          <li>&gt;</li>
          <li>What we do</li>
          <li>&gt;</li>
          <li>Amazon Seller Consulting</li>
        </ul>
      </div>
    </div>
    {/* TAGLINE-------------------- */}
    <div className="Amazon-seller-consulting-tagline-section">
      <h2>Amazon Seller Consulting</h2>
      <div className="Amazon-seller-consulting-beat-img" />
      <p>
        Unlock your brand's potential with expert Amazon Seller Consulting –
        maximize sales, optimize listings, and outpace your competition!
      </p>
    </div>
    {/* HERO SECTION-------------- */}
    <div className="Amazon-seller-consulting-hero-section">
    <div className="Amazon-seller-consulting-hero-img">
      <img src={amazonSellerConsultingImage} alt="Amazon Seller Consulting" />
    </div>
      <div className="Amazon-seller-consulting-hero-content">
        <p className="Amazon-seller-consulting-hero-techie">
          Why does your business need Amazon Seller Consulting?{" "}
        </p>
        <h3>Amazon Seller Consulting</h3>
        <div className="Amazon-seller-consulting-hero-conent-para">
          <p>
            Amazon Seller Consulting is essential to help your business stand out
            in a competitive marketplace. Experts analyze your store's
            performance, provide insights, and optimize listings, ensuring you
            attract the right customers. This guidance helps you maximize
            profitability and efficiency while navigating Amazon's complex
            platform.
          </p>
          <p>
            With a professional consultant, you'll receive personalized strategies
            tailored to your brand's needs. They help you create optimized product
            listings, improve search visibility, and offer guidance on
            advertising. As a result, you’ll see better sales performance, lower
            costs, and ultimately, stronger brand growth in the ever-evolving
            Amazon ecosystem.
          </p>
        </div>
        <div className="Amazon-seller-consulting-hero-button">
        <Link to="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
    {/* CARDS - PROCESS------------------ */}
    <div className="Amazon-seller-consulting-ag-format-container">
      <div className="Amazon-seller-consulting-ag-courses_box">
        <div className="Amazon-seller-consulting-ag-courses_item">
          <a href="#" className="Amazon-seller-consulting-ag-courses-item_link">
            <div className="Amazon-seller-consulting-ag-courses-item_bg" />
            <div className="Amazon-seller-consulting-ag-courses-item_title">
              1. Product Listing Optimization
            </div>
            <div className="Amazon-seller-consulting-ag-courses-item_date-box">
              We optimize your product listings with targeted keywords, compelling
              descriptions, high-quality images, and strategic bullet points. This
              enhances visibility, boosts click-through rates, and encourages
              higher conversion rates, ensuring your products stand out in a
              crowded marketplace. With optimized listings, you attract more
              customers and increase your sales potential.
            </div>
          </a>
        </div>
        <div className="Amazon-seller-consulting-ag-courses_item">
          <a href="#" className="Amazon-seller-consulting-ag-courses-item_link">
            <div className="Amazon-seller-consulting-ag-courses-item_bg" />
            <div className="Amazon-seller-consulting-ag-courses-item_title">
              2. Amazon Advertising Campaigns
            </div>
            <div className="Amazon-seller-consulting-ag-courses-item_date-box">
              Our experts create and manage effective Amazon PPC campaigns to
              drive traffic, increase visibility, and boost sales. By
              strategically targeting the right keywords, optimizing bidding
              strategies, and continuously monitoring performance, we ensure you
              achieve maximum return on investment (ROI) with minimal ad spend.
            </div>
          </a>
        </div>
        <div className="Amazon-seller-consulting-ag-courses_item">
          <a href="#" className="Amazon-seller-consulting-ag-courses-item_link">
            <div className="Amazon-seller-consulting-ag-courses-item_bg" />
            <div className="Amazon-seller-consulting-ag-courses-item_title">
              3. Customized Amazon Selling Strategies
            </div>
            <div className="Amazon-seller-consulting-ag-courses-item_date-box">
              With the intense competition on Amazon, a vague approach won’t lead
              to profitable outcomes. You need a clear, focused strategy tailored
              to your business’s specific needs and goals. Amazon seller
              consulting services create strategies customized to fit your budget,
              objectives, and preferred sales channels, helping you achieve
              long-term success.
            </div>
          </a>
        </div>
        <div className="Amazon-seller-consulting-ag-courses_item">
          <a href="#" className="Amazon-seller-consulting-ag-courses-item_link">
            <div className="Amazon-seller-consulting-ag-courses-item_bg" />
            <div className="Amazon-seller-consulting-ag-courses-item_title">4. Competitive Analysis</div>
            <div className="Amazon-seller-consulting-ag-courses-item_date-box">
              We thoroughly analyze your competitors’ listings, pricing, and
              strategies to identify growth opportunities. This in-depth analysis
              allows us to tailor your approach, ensuring you stay ahead of the
              competition, capture more market share, and significantly boost
              sales performance, enhancing your brand’s visibility and success in
              the marketplace.
            </div>
          </a>
        </div>
        <div className="Amazon-seller-consulting-ag-courses_item">
          <a href="#" className="Amazon-seller-consulting-ag-courses-item_link">
            <div className="Amazon-seller-consulting-ag-courses-item_bg" />
            <div className="Amazon-seller-consulting-ag-courses-item_title">5. Amazon SEO Services </div>
            <div className="Amazon-seller-consulting-ag-courses-item_date-box">
              Our consultants focus on Amazon-specific SEO to improve your search
              ranking and product visibility. By enhancing your title,
              description, backend search terms, and optimizing product features,
              we help increase your chances of appearing on top search results,
              attracting more potential customers and driving higher traffic and
              conversions for your business.
            </div>
          </a>
        </div>
        <div className="Amazon-seller-consulting-ag-courses_item">
          <a href="#" className="Amazon-seller-consulting-ag-courses-item_link">
            <div className="Amazon-seller-consulting-ag-courses-item_bg" />
            <div className="Amazon-seller-consulting-ag-courses-item_title">
              6. Brand Strategy &amp; Storefront Design
            </div>
            <div className="Amazon-seller-consulting-ag-courses-item_date-box">
              We help establish a strong brand identity on Amazon through
              personalized storefront design, strategic branding, and tailored
              messaging. This creates a cohesive, professional experience for
              customers, builds trust, strengthens brand loyalty, and encourages
              repeat purchases, ultimately boosting your credibility and
              visibility on the platform for long-term growth.
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </>  
  )
}

export default Amazon_seller_consulting