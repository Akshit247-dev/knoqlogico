import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./seo_optimization.css"
import rbImage from '../assets/img/rb_32010.png';
import { Link } from "react-router-dom";

function seo_optimization() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="seo_optimization-main">
    <div className="seo_optimization-main-blue-cover" />
    <div className="seo_optimization-content">
      <h2>SEO Optimization</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>Services</li>
        <li>&gt;</li>
        <li>SEO Optimization</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="seo_optimization-tagline-section">
    <h2>SEO Optimization</h2>
    <div className="seo_optimization-beat-img" />
    <p>
      Boost your website's visibility and organic traffic with customised SEO
      strategies by Knologico. We help you rank higher on Google and attract the
      right audience.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="seo_optimization-hero-section">
    <div className="seo_optimization-hero-img">
    <img src={rbImage} alt="Image Description" />
    </div>
    <div className="seo_optimization-hero-content">
      <p className="seo_optimization-hero-techie">Our SEO Experts</p>
      <h3>SEO Optimization</h3>
      <div className="seo_optimization-hero-conent-para">
        <p>
          At Knologico, our SEO experts focus on boosting your website's
          rankings and online presence with tailored strategies. We cover
          technical, on-page, and off-page SEO, aligning with your business
          goals. Our approach combines keyword research, content optimisation,
          and backlink building to enhance search engine visibility and user
          experience.
        </p>
        <p>
          By monitoring performance and adapting to algorithm changes, we ensure
          lasting results. A well-optimised website improves rankings, retains
          visitors, and drives conversions, making SEO essential for your
          success.
        </p>
      </div>
      <div className="seo_optimization-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* <h2 style="text-align: center; margin-top: 40px; padding: 6px 10px; background-color: #e2e2e2;">  
Our SEO Services
    </h2> */}
  {/* CARDS - PROCESS------------------ */}
  <div className="seo_optimization-ag-format-container">
    <div className="seo_optimization-ag-courses_box">
      <div className="seo_optimization-ag-courses_item">
        <a href="#" className="seo_optimization-ag-courses-item_link">
          <div className="seo_optimization-ag-courses-item_bg" />
          <div className="seo_optimization-ag-courses-item_title">1. Keyword Research</div>
          <div className="seo_optimization-ag-courses-item_date-box">
            Effective SEO begins with comprehensive keyword research. At
            Knoqlogico, we focus on identifying high-value, relevant keywords
            that attract the right audience to your website. Using advanced
            tools, we analyze search volume, competition, and user intent to
            ensure that your content is optimised to rank for the best keywords
            in your industry, driving quality traffic.
          </div>
        </a>
      </div>
      <div className="seo_optimization-ag-courses_item">
        <a href="#" className="seo_optimization-ag-courses-item_link">
          <div className="seo_optimization-ag-courses-item_bg" />
          <div className="seo_optimization-ag-courses-item_title">
            2. On-Page SEO Optimization
          </div>
          <div className="seo_optimization-ag-courses-item_date-box">
            On-page SEO is a crucial factor in improving your website's search
            engine rankings. Our team at Knoqlogico works to optimise your
            website's content, meta tags, headings, images, and internal
            linking, aligning with the latest SEO standards. We prioritize
            creating high-quality content that is both informative and
            SEO-friendly, boosting your chances of ranking higher.
          </div>
        </a>
      </div>
      <div className="seo_optimization-ag-courses_item">
        <a href="#" className="seo_optimization-ag-courses-item_link">
          <div className="seo_optimization-ag-courses-item_bg" />
          <div className="seo_optimization-ag-courses-item_title">
            3. Off-Page SEO &amp; Link Building
          </div>
          <div className="seo_optimization-ag-courses-item_date-box">
            Off-page SEO and link building are essential for improving your
            website's authority, online credibility, and overall digital
            presence. Our seasoned experts implement advanced white-hat
            link-building strategies to acquire high-quality, relevant backlinks
            from trusted sources, significantly boosting your site's domain
            authority, search rankings, and organic traffic potential.
          </div>
        </a>
      </div>
      <div className="seo_optimization-ag-courses_item">
        <a href="#" className="seo_optimization-ag-courses-item_link">
          <div className="seo_optimization-ag-courses-item_bg" />
          <div className="seo_optimization-ag-courses-item_title">4. Technical SEO</div>
          <div className="seo_optimization-ag-courses-item_date-box">
            A solid technical foundation is key to successful SEO and long-term
            online growth. Our expert team conducts thorough audits to identify
            and address critical technical issues such as slow page load times,
            broken links, mobile responsiveness challenges, and poor navigation
            structures. By resolving these issues, we ensure a seamless user
            experience, enhanced website functionality.
          </div>
        </a>
      </div>
      <div className="seo_optimization-ag-courses_item">
        <a href="#" className="seo_optimization-ag-courses-item_link">
          <div className="seo_optimization-ag-courses-item_bg" />
          <div className="seo_optimization-ag-courses-item_title">5. Content Optimization</div>
          <div className="seo_optimization-ag-courses-item_date-box">
            Content is the heart of SEO and a key driver of online success.
            Knologico helps you optimise content that effectively answers your
            audience's search queries, seamlessly integrates relevant keywords,
            and delivers real value. Whether it's for blog posts, landing pages,
            or product descriptions, we ensure your content is highly
            SEO-friendly, engages readers, drives consistent traffic, and ranks
            prominently on search engines.
          </div>
        </a>
      </div>
      <div className="seo_optimization-ag-courses_item">
        <a href="#" className="seo_optimization-ag-courses-item_link">
          <div className="seo_optimization-ag-courses-item_bg" />
          <div className="seo_optimization-ag-courses-item_title">
            6. SEO Analytics &amp; Reporting
          </div>
          <div className="seo_optimization-ag-courses-item_date-box">
            Continuous performance tracking is crucial for achieving and
            maintaining long-term SEO success. Using advanced analytics tools,
            we closely monitor key performance indicators such as organic
            traffic, bounce rate, keyword rankings, and user engagement. We
            deliver, detailed reports that provide valuable insights into your
            progress while offering recommendations for ongoing optimization and
            growth.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>
  )
}

export default seo_optimization