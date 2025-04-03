import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import watiBadge from "../assets/img/Wati Partner Badge (2).png";
import shopifyBadge from "../assets/img/Shopify-Certified-Partner-Logo.png";
import googleAdsBadge from "../assets/img/Google-ads-certified.webp";
import googleMarketingBadge from "../assets/img/Google-marketing-program-certified.webp";
import linkedinBadge from "../assets/img/linkedin-badge.webp";
import sectionImage from "../assets/img/section-img.png";

import blogImage1 from "../assets/img/blogs1.webp"
import blogImage2 from "../assets/img/blogs2.webp";
import blogImage3 from "../assets/img/blogs3.webp";

import l1 from "../assets/img/l1.jpg";
import l2 from "../assets/img/l2.png";
import l3 from "../assets/img/l3.png";
import l4 from "../assets/img/l4.png";
import l5 from "../assets/img/l5.png";
import l6 from "../assets/img/l6.png";
import l7 from "../assets/img/l7.png";
import l8 from "../assets/img/l8.jpg";
import l9 from "../assets/img/l9.jpeg";
import l10 from "../assets/img/l10.png";
// import sectionImage1 from "../assets/img/section-img.png";
// import "./CounterAnimation";
// import "./apppp";

const facts = [
  { icon: "fas fa-home", target: 17, text: "Years of Experience" },
  { icon: "fas fa-briefcase", target: 300, text: "Projects Done" },
  { icon: "fas fa-smile", target: 50, text: "Happy Clients" },
  { icon: "fas fa-users", target: 3, text: "Team Members" },
];

function Home() {

  
  const [hover, setHover] = useState(false);
  //Fun Facts Section
  const [counters, setCounters] = useState(facts.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((count, index) => {
          return count < facts[index].target ? count + 1 : count;
        })
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="home-hero-section">
        <div className="home-hero-content">
          <div className="home-hero-tagline">
            Knoqlogico: Innovating Connections, Empowering Growth.
          </div>
          <div className="home-hero-para">
            <strong>Knoqlogico:</strong> Offering Comprehensive Digital
            Expertise and Tailored Solutions to Elevate Your Online Presence,
            Enhance Engagement, and Drive Business Growth.
          </div>
          <div className="home-our-partners">
            <h5 className="home-our-partner-heading">Our Partners</h5>
            <div className="home-partner-logos">
              <img src={watiBadge} alt="Wati Partner Badge" />
              <img src={shopifyBadge} alt="Shopify Partner Badge" />
              <img src={googleAdsBadge} alt="Google Ads Certified" />
              <img src={googleMarketingBadge} alt="Google Marketing Program Certified"/>
              <img src={linkedinBadge} alt="LinkedIn Badge" />
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <section className="home-features">
        <div className="home-container">
          {/* Section Title */}
          <div className="home-section-title">
            <h2>How We Work</h2>
            <img src={sectionImage} alt="Section Image" />
            <p>
              We deliver success through integrity, quality, and collaboration,
              creating solutions aligned with your goals and expectations.
            </p>
          </div>
          {/* Features Grid */}
          <div className="home-features-grid">
            {/* Feature 1 */}
            <div className="home-feature-item">
              <div className="home-icon">
                <i className="home-fa-solid fa-magnifying-glass" />
              </div>
              <h3>1. Planning &amp; Research</h3>
              <p style={{ marginTop: 30, textAlign: "center" }}>
                We analyze your goals, audience, and competitors to create a
                strategic, customized solution, ensuring efficient achievement
                of objectives.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="home-feature-item">
              <div className="home-icon">
                <i className="home-fa fa-cogs" />
              </div>
              <h3>2. Development</h3>
              <p style={{ marginTop: 30, textAlign: "center" }}>
                At Knoqlogico, we develop scalable, user-friendly solutions with
                clean code, responsive design, and seamless functionality for
                all platforms.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="home-feature-item">
              <div className="home-icon">
                <i className="home-fa fa-handshake" />
              </div>
              <h3>3. Deliver</h3>
              <p style={{ marginTop: 30, textAlign: "center" }}>
                We ensure on-time delivery through thorough testing, smooth
                implementation, and a solution that exceeds expectations to
                empower success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}

      {/* Fun Facts Section */}
      <section id="fun-facts">
        <div className="home-blue-overlay" />
        <div className="home-container">
          <div className="home-fun-facts-grid">
            {facts.map((fact, index) => (
              <div className="home-fun-fact-item" key={index}>
                <i className={fact.icon} />
                <div className="home-content">
                  <div className="home-number">
                    <span className="home-counter">{counters[index]}</span>
                    <span>+</span>
                  </div>
                  <p>{fact.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------- */}
      <section className="home-why-choose">
        <div className="home-containerrrrr">
          {/* Section Title */}
          <div className="home-section-title" style={{ textAlign: "center" }}>
            <h2>Why Choose Knoqlogico</h2>
            <img src={sectionImage} alt="Section Image" />
            <p>
              We deliver innovative, reliable IT solutions tailored to your
              business needs, ensuring optimal performance, security, and
              scalability.
            </p>
          </div>
          {/*<div class="content-wrapper">*/}
          {/*  <div class="choose-left">*/}
          {/*    <h3>Who We Are</h3>*/}
          {/*    <p>*/}
          {/*      Knoqlogico is your all-encompassing digital marketing partner.*/}
          {/*      With a rich history of serving clients across diverse industries*/}
          {/*      since 2023, we offer a broad spectrum of services to enhance your*/}
          {/*      online presence.*/}
          {/*    </p>*/}
          {/*    <p>*/}
          {/*      Our digital marketing solutions encompass strategic consulting and*/}
          {/*      proficient management across various tactics such as search engine*/}
          {/*      optimization (SEO), pay-per-click (PPC) advertising, Amazon store*/}
          {/*      optimization, compelling copywriting, conversion rate optimization*/}
          {/*      (CRO), and beyond. Additionally, our seasoned team provides*/}
          {/*      top-notch web design and development services tailored for both*/}
          {/*      eCommerce and B2B enterprises.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div class="choose-right">*/}
          {/*    <div class="video-wrapper">*/}
          {/*      <iframe*/}
          {/*        src="https://www.youtube.com/embed/gPCGWWw7BRo"*/}
          {/*        title="Introducing Knoqlogico"*/}
          {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
          {/*        allowfullscreen*/}
          {/*      >*/}
          {/*      </iframe>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="home-content-wrapper">
            <div className="home-choose-left">
              <h3>Who We Are</h3>
              <p>
                Knoqlogico is your all-encompassing digital marketing partner.
                With a rich history of serving clients across diverse industries
                since 2023, we offer a broad spectrum of services to enhance
                your online presence.
              </p>
              <p>
                Our digital marketing solutions encompass strategic consulting
                and proficient management across various tactics such as search
                engine optimization (SEO), pay-per-click (PPC) advertising,
                Amazon store optimization, compelling copywriting, conversion
                rate optimization (CRO), and beyond. Additionally, our seasoned
                team provides top-notch web design and development services
                tailored for both eCommerce and B2B enterprises.
              </p>
            </div>
            {/*Right Section (Video Embed) */}
            <div className="home-choose-right">
              <div className="home-video-wrapper">
                <iframe
                  src="https://drive.google.com/file/d/1wBR2cttDEVD1hiyQof5IlA0gnrSU8x-P/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}
      <section className="home-cta-section">
        <div className="home-cta-container">
          <div className="home-cta-content">
            <h2 className="home-cta-title">
              For more information connect with us just call +91 735 105 6005
            </h2>
            <p className="home-cta-subtitle">Our team always ready to help you</p>
            <div className="home-cta-buttons">
              <Link to="/Contact" className="home-cta-btn primary">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}
      <section className="home-service-section">
        <div className="home-container">
          <div className="home-section-title" style={{ textAlign: "center" }}>
            <h2>Top-Rated Services For Our Clients</h2>
            <img src={sectionImage} alt="Section Image" />
            <p>
              Strategy Driven and Outcome Focused Empowering Growth and
              Sustainable Success.
            </p>
          </div>
          <div className="home-service-cards">
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-prescription" />
              </div>
              <h3>Social Media Marketing</h3>
              <p className="home-service-description">
                We create engaging, results-driven strategies to amplify your
                brand's presence across various social media
              </p>
              <Link to="/SocialMediaMarketing" className="home-service-btn">
                Learn More
              </Link>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-brand-designfloat" />
              </div>
              <h3>Graphic Design</h3>
              <p className="home-service-description">
                Our creative designs are crafted to effectively communicate your
                brand's story and stand out in a crowded
              </p>
              <Link to="Graphic-designing" className="home-service-btn">
                Learn More
              </Link>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-code-alt" />
              </div>
              <h3>Website Development</h3>
              <p className="home-service-description">
                We design and develop websites that offer seamless user
                experiences while aligning with your brand's identity.
              </p>
              <Link to="/web-services" className="home-service-btn">
                Learn More
              </Link>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-file-text" />
              </div>
              <h3>Content Writing</h3>
              <p className="home-service-description">
                Our content is optimized for both SEO and engagement, helping to
                connect with your audience and grow your
              </p>
              <Link to="/Content-writing" className="home-service-btn">
                Learn More
              </Link>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-search-document" />
              </div>
              <h3>SEO Optimization</h3>
              <p className="home-service-description">
                We employ effective SEO strategies to improve your website's
                visibility and drive organic traffic to your site.
              </p>
              <Link to="/Seo-optimization" className="home-service-btn">
                Learn More
              </Link>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-edit" />
              </div>
              <h3>Video Editing</h3>
              <p className="home-service-description">
                We provide high-quality video editing services to captivate your
                audience and deliver your brand message effectively.
              </p>
              <Link to="/Video-editing" className="home-service-btn">
                Learn More
              </Link>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-edit" />
              </div>
              <h3>Google ADs</h3>
              <p className="home-service-description">
                We provide high-quality video editing services to captivate your
                audience and deliver your brand message effectively.
              </p>
              <Link
                to="/Google-Ads-Management-Services"
                className="home-service-btn"
              >
                Learn More
              </Link>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-edit" />
              </div>
              <h3>Meta ADs</h3>
              <p className="home-service-description">
                Advertisements that businesses can run on Meta-owned platforms
                like Facebook, Instagram, and Messenger, allowing them to reach
                a wide audience and promote their products or services.
              </p>
              <Link to="/Meta-ads" className="home-service-btn">
                Learn More
              </Link>
            </div>
            <div className="home-service-card">
              <div className="home-service-icon">
                <i className="home-icofont icofont-edit" />
              </div>
              <h3>CRO Audits</h3>
              <p className="home-service-description">
                Boost conversions with expert CRO. Uncover insights, optimize
                strategies, and achieve measurable growth.
              </p>
              <Link to="/CROAudit" className="home-service-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}
      <section className="home-blog-updates">
        <div className="home-content-container">
          <div className="home-section-title" style={{ textAlign: "center" }}>
            <h2>Stay Updated With The Latest Trends</h2>
            <img src={sectionImage} alt="Section Image" />
            <p>
              Discover the latest insights and updates on digital marketing,
              business solutions, and more.
            </p>
          </div>
          <div className="home-posts-grid">
            <div className="home-post-card">
              <div className="home-post-image">
              <img src={blogImage1} alt="Blog Post 1" />
              </div>
              <div className="home-post-info">
                <span className="home-post-date">September 17, 2024</span>
                <h3>
                  <Link to="/Blogs">
                    Why AI is Reshaping Digital Marketing in 2024
                  </Link>
                </h3>
                <p className="home-post-excerpt">
                  AI is revolutionizing how brands connect with customers by
                  processing massive...
                </p>
              </div>
            </div>
            <div className="home-post-card">
              <div className="home-post-image">
              <img src={blogImage2} alt="Blog Post 2" />
              </div>
              <div className="home-post-info">
                <span className="home-post-date">September 14, 2024</span>
                <h3>
                  <Link to="/Blogs">
                    The Future of Social Media Marketing in 2024: Trends and
                    Strategies for Growth
                  </Link>
                </h3>
                <p className="home-post-excerpt">
                  Social media continues to evolve as a crucial tool for
                  businesses to engage audiences...
                </p>
              </div>
            </div>
            <div className="home-post-card">
              <div className="home-post-image">
              <img src={blogImage3} alt="Blog Post 3" />
              </div>
              <div className="home-post-info">
                <span className="home-post-date">September 13, 2024</span>
                <h3>
                  <Link to="/Blogs">
                    The Ultimate Guide to Maximize ROI with PPC in 2024
                  </Link>
                </h3>
                <p className="home-post-excerpt">
                  As businesses shift toward measurable, results-driven
                  marketing, PPC advertising...
                </p>
              </div>
            </div>
          </div>
          <div
            className="home-read-more-btn"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            <a
              href="/Blogs"
              className="home-read-more-btn"
              style={{
                color: hover ? "var(--first)" : "var(--second)",
                backgroundColor: hover ? "var(--second)" : "#f9f9f9",
                padding: "10px 20px",
                borderRadius: 5,
                textDecoration: "none",
                transition: "0.2s ease-in-out",
              }}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              Read More...
            </a>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}
      <div className="home-logo-carousel-container-new">
        <div className="home-section-title" style={{ textAlign: "center" }}>
          <h2>Our Clients</h2>
        </div>
        <div className="home-logo-carousel">
          <div className="home-logo-slide">
          <img src={l1} alt="Logo 1" />
          </div>
          <div className="home-logo-slide">
          <img src={l2} alt="Logo 2" />;
          </div>
          <div className="home-logo-slide">
          <img src={l3} alt="Logo 3" />
          </div>
          <div className="home-logo-slide">
          <img src={l4} alt="Logo 4" />
          </div>
          <div className="home-logo-slide">
            <img src={l5} alt="Logo 5" />
          </div>
          <div className="home-logo-slide">
          <img src={l6} alt="Logo 6" />
          </div>
          <div className="home-logo-slide">
          <img src={l7} alt="Logo 7" />
          </div>
          <div className="home-logo-slide">
          <img src={l8} alt="Logo 8" />
          </div>
          <div className="home-logo-slide">
          <img src={l9} alt="Logo 9" />
          </div>
          <div className="home-logo-slide">
          <img src={l10} alt="Logo 10" />
          </div>
          {/* Duplicate slides for seamless marquee effect */}
          <div className="home-logo-slide">
            <img src="./l1.jpg" alt="Logo 1" />
          </div>
          <div className="home-logo-slide">
            <img src="./l2.png" alt="Logo 2" />
          </div>
          <div className="home-logo-slide">
            <img src="./l3.png" alt="Logo 3" />
          </div>
          <div className="home-logo-slide">
            <img src="./l4.png" alt="Logo 4" />
          </div>
          <div className="home-logo-slide">
            <img src="./l5.png" alt="Logo 5" />
          </div>
          <div className="home-logo-slide">
            <img src="./l6.png" alt="Logo 6" />
          </div>
          <div className="home-logo-slide">
            <img src="./l7.png" alt="Logo 7" />
          </div>
          <div className="home-logo-slide">
            <img src="./l8.jpg" alt="Logo 8" />
          </div>
          <div className="home-logo-slide">
            <img src="./l9.jpeg" alt="Logo 9" />
          </div>
          <div className="home-logo-slide">
            <img src="./l10.png" alt="Logo 10" />
          </div>
          {/* Duplicate slides for seamless marquee effect */}
          <div className="home-logo-slide">
            <img src="./l1.jpg" alt="Logo 1" />
          </div>
          <div className="home-logo-slide">
            <img src="./l2.png" alt="Logo 2" />
          </div>
          <div className="home-logo-slide">
            <img src="./l3.png" alt="Logo 3" />
          </div>
          <div className="home-logo-slide">
            <img src="./l4.png" alt="Logo 4" />
          </div>
          <div className="home-logo-slide">
            <img src="./l5.png" alt="Logo 5" />
          </div>
          <div className="home-logo-slide">
            <img src="./l6.png" alt="Logo 6" />
          </div>
          <div className="home-logo-slide">
            <img src="./l7.png" alt="Logo 7" />
          </div>
          <div className="home-logo-slide">
            <img src="./l8.jpg" alt="Logo 8" />
          </div>
          <div className="home-logo-slide">
            <img src="./l9.jpeg" alt="Logo 9" />
          </div>
          <div className="home-logo-slide">
            <img src="./l10.png" alt="Logo 10" />
          </div>
          {/* Duplicate slides for seamless marquee effect */}
          <div className="home-logo-slide">
            <img src="./l1.jpg" alt="Logo 1" />
          </div>
          <div className="home-logo-slide">
            <img src="./l2.png" alt="Logo 2" />
          </div>
          <div className="home-logo-slide">
            <img src="./l3.png" alt="Logo 3" />
          </div>
          <div className="home-logo-slide">
            <img src="./l4.png" alt="Logo 4" />
          </div>
          <div className="home-logo-slide">
            <img src="./l5.png" alt="Logo 5" />
          </div>
          <div className="home-logo-slide">
            <img src="./l6.png" alt="Logo 6" />
          </div>
          <div className="home-logo-slide">
            <img src="./l7.png" alt="Logo 7" />
          </div>
          <div className="home-logo-slide">
            <img src="./l8.jpg" alt="Logo 8" />
          </div>
          <div className="home-logo-slide">
            <img src="./l9.jpeg" alt="Logo 9" />
          </div>
          <div className="home-logo-slide">
            <img src="./l10.png" alt="Logo 10" />
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <div className="home-form-section-main">
        <div className="home-blue-overlay" />
        <div className="home-form-section">
          {/* <form action="/leads/create" method="POST"> */}
          <form
            method="POST"
            id="contactForm"
            action="https://formspree.io/f/xwpvbeaw"
          >
            {/* <form action="knoq-data.php" method="POST"> */}
            <h2 style={{ textAlign: "center", marginBottom: 20 }}>
              Contact Us
            </h2>
            <div className="home-form-input-field">
              <input
                type="text"
                name="Firstname"
                placeholder="First Name"
                id="fname"
                required=""
              />
              <input
                style={{ marginTop: 15 }}
                type="text"
                name="Lastname"
                id="lname"
                placeholder="Last Name"
                required=""
              />
            </div>
            <div className="home-form-input-field">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                id="phone"
                required=""
              />
            </div>
            <div className="home-form-input-field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                id="email"
                required=""
              />
            </div>
            <div className="home-form-group">
              <textarea
                name="message"
                placeholder="Write your message here..."
                id="msg"
                required=""
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              className="home-submit-btn"
              defaultValue="Send Message"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
