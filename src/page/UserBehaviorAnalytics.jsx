import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./UserBehaviorAnalytics.css"
import svgImage from '../assets/img/9932806_4289752.svg';
import { Link } from "react-router-dom";

function UserBehaviorAnalytics() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="UserBehaviorAnalytics-main">
    <div className="UserBehaviorAnalytics-main-blue-cover" />
    <div className="UserBehaviorAnalytics-content">
      <h2>User Behavior Analytics</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>User Behavior Analytics</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="UserBehaviorAnalytics-tagline-section">
    <h2>User Behavior Analytics</h2>
    <div className="UserBehaviorAnalytics-beat-img" />
    <p>
      User Behavior Analytics is Essential for Your Business. Ensure Your
      Marketing Strategies Connect with Your Target Audience.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="UserBehaviorAnalytics-hero-section">
    <div className="UserBehaviorAnalytics-hero-img">
    <img src={svgImage} alt="Image Description" />
    </div>
    <div className="UserBehaviorAnalytics-hero-content">
      <p className="UserBehaviorAnalytics-hero-techie">Our CRO Experts</p>
      <h3>User Behavior Analytics</h3>
      <div className="UserBehaviorAnalytics-hero-conent-para">
        <p>
          Make informed decisions swiftly and deliver exceptional customer
          experiences. From user journey mapping to predictive customer behavior
          analytics, Knowlogico offers a comprehensive range of user and entity
          behavior analytics services designed to elevate your digital strategy.
        </p>
        <p>
          User Behavior Analytics (UBA) involves tracking and analyzing how
          users interact with digital platforms. Now often referred to as User
          and Entity Behavior Analytics (UEBA), this approach expands to include
          other entities, such as apps, network devices, and processes, in
          understanding broader behavioral trends. The goal of UEBA is to
          identify behavior patterns, detect anomalies, and extract valuable
          insights that can enhance user experiences, improve security, and
          guide data-driven business decisions.
        </p>
      </div>
      <div className="UserBehaviorAnalytics-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="UserBehaviorAnalytics-ag-format-container">
    <div className="UserBehaviorAnalytics-ag-courses_box">
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">1. Google Analytics</div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            Gain a comprehensive understanding of your customer behavior across
            devices and platforms. Page views to audience demographics, we
            provide a holistic view that empowers you to make strategic
            decisions.
          </div>
        </a>
      </div>
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">
            2. Search Engine Optimization (SEO)
          </div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            At Knoqlogico, we use advanced user behavior analytics software to
            analyze browsing patterns and preferences. This ensures that your
            search engine optimization efforts stay aligned with changing user
            habits and behaviors.
          </div>
        </a>
      </div>
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">
            3. User Experience (UX) Testing
          </div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            Identify usability issues and potential cybersecurity risks related
            to user behavior analytics. Our team works diligently to optimize
            your digital platforms, ensuring a smooth and secure user journey.
          </div>
        </a>
      </div>
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">
            4. Conversion Rate Optimization
          </div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            We analyze user behaviors within the conversion funnel using
            advanced analytics tools to identify and address conversion
            bottlenecks, ultimately boosting your overall conversion rates and
            performance.
          </div>
        </a>
      </div>
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">5. A/B Testing</div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            Our team supports ongoing A/B testing as your business grows. From
            refining call-to-action (CTA) buttons to adjusting page layouts, we
            implement data-driven changes to optimize and enhance your site's
            performance.
          </div>
        </a>
      </div>
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">6. User Journey Mapping</div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            Visualize and understand the entire user journey, uncovering
            opportunities to optimize key touchpoints. We help you customize
            customer experiences for maximum impact and engagement.
          </div>
        </a>
      </div>
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">
            7. Behavioral Segmentation
          </div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            Our behavioral segmentation services group users based on their
            behaviors, preferences, and demographics. This enables us to create
            targeted and personalized marketing strategies that effectively
            connect with each audience segment, driving engagement and
            conversions.
          </div>
        </a>
      </div>
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">8. Predictive Analytics</div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            Stay ahead of the curve with predictive analytics. We use machine
            learning algorithms in user behavior analytics to forecast user
            actions, enabling proactive decision-making and strategies that
            align with future trends and industry best practices.
          </div>
        </a>
      </div>
      <div className="UserBehaviorAnalytics-ag-courses_item">
        <a href="#" className="UserBehaviorAnalytics-ag-courses-item_link">
          <div className="UserBehaviorAnalytics-ag-courses-item_bg" />
          <div className="UserBehaviorAnalytics-ag-courses-item_title">9. Anomaly Detection</div>
          <div className="UserBehaviorAnalytics-ag-courses-item_date-box">
            Protect your digital assets from cybersecurity risks related to user
            behavior analytics. Our team employs machine learning algorithms to
            analyze user activities, flagging abnormal or risky events in real
            time across your digital platforms, particularly your website.
          </div>
        </a>
      </div>
    </div>
  </div>
<Footer/>
</>
  )
}

export default UserBehaviorAnalytics