import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Home.css";
// import "./CounterAnimation";
// import "./apppp";

function Home() {
  return (
    <>
      <Header />
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-tagline">
            Knoqlogico: Innovating Connections, Empowering Growth.
          </div>
          <div className="hero-para">
            <strong>Knoqlogico:</strong> Offering Comprehensive Digital
            Expertise and Tailored Solutions to Elevate Your Online Presence,
            Enhance Engagement, and Drive Business Growth.
          </div>
          <div className="our-partners">
            <h5 className="our-partner-heading">Our Partners</h5>
            <div className="partner-logos">
              <img
                src="./Wati Partner Badge (2).png"
                alt="Wati Partner Badge"
              />
              <img
                src="./Shopify-Certified-Partner-Logo.png"
                alt="Shopify Partner Badge"
              />
              <img
                src="./Google-ads-certified.webp"
                alt="Google ads certified"
              />
              <img
                src="./Google-marketing-program-certified.webp"
                alt="Google marketing program certified"
              />
              <img src="./linkedin-badge.webp" alt="linkedin Badge" />
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <section className="features">
        <div className="container">
          {/* Section Title */}
          <div className="section-title">
            <h2>How We Work</h2>
            <img src="./section-img.png" alt="Section Image" />
            <p>
              We deliver success through integrity, quality, and collaboration,
              creating solutions aligned with your goals and expectations.
            </p>
          </div>
          {/* Features Grid */}
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-item">
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <h3>1. Planning &amp; Research</h3>
              <p style={{ marginTop: 30, textAlign: "center" }}>
                We analyze your goals, audience, and competitors to create a
                strategic, customized solution, ensuring efficient achievement
                of objectives.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="feature-item">
              <div className="icon">
                <i className="fa fa-cogs" />
              </div>
              <h3>2. Development</h3>
              <p style={{ marginTop: 30, textAlign: "center" }}>
                At Knoqlogico, we develop scalable, user-friendly solutions with
                clean code, responsive design, and seamless functionality for
                all platforms.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="feature-item">
              <div className="icon">
                <i className="fa fa-handshake" />
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
        <div className="blue-overlay" />
        <div className="container">
          <div className="fun-facts-grid">
            {/* Single Fact */}
            <div className="fun-fact-item">
              <i className="fas fa-home" />
              <div className="content">
                <div className="number">
                  <span className="counter" data-target={7}>
                    0
                  </span>
                  <span>+</span>
                </div>
                <p>Years of Experience</p>
              </div>
            </div>
            {/* Single Fact */}
            <div className="fun-fact-item">
              <i className="fas fa-briefcase" />
              <div className="content">
                <div className="number">
                  <span className="counter" data-target={300}>
                    0
                  </span>
                  <span>+</span>
                </div>
                <p>Projects Done</p>
              </div>
            </div>
            {/* Single Fact */}
            <div className="fun-fact-item">
              <i className="fas fa-smile" />
              <div className="content">
                <div className="number">
                  <span className="counter" data-target={250}>
                    0
                  </span>
                  <span>+</span>
                </div>
                <p>Happy Clients</p>
              </div>
            </div>
            {/* Single Fact */}
            <div className="fun-fact-item">
              <i className="fas fa-users" />
              <div className="content">
                <div className="number">
                  <span className="counter" data-target={15}>
                    0
                  </span>
                  <span>+</span>
                </div>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}
      <section className="why-choose">
        <div className="containerrrrr">
          {/* Section Title */}
          <div className="section-title" style={{ textAlign: "center" }}>
            <h2>Why Choose Knoqlogico</h2>
            <img src="./section-img.png" alt="Section Image" />
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
          <div className="content-wrapper">
            <div className="choose-left">
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
            <div className="choose-right">
              <div className="video-wrapper">
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
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              For more information connect with us just call +91 735 105 6005
            </h2>
            <p className="cta-subtitle">Our team always ready to help you</p>
            <div className="cta-buttons">
              <a href="contact.html" className="cta-btn primary">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}
      <section className="service-section">
        <div className="container">
          <div className="section-title" style={{ textAlign: "center" }}>
            <h2>Top-Rated Services For Our Clients</h2>
            <img src="./section-img.png" alt="Section Image" />
            <p>
              Strategy Driven and Outcome Focused Empowering Growth and
              Sustainable Success.
            </p>
          </div>
          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon">
                <i className="icofont icofont-prescription" />
              </div>
              <h3>Social Media Marketing</h3>
              <p className="service-description">
                We create engaging, results-driven strategies to amplify your
                brand's presence across various social media
              </p>
              <a href="SocialMediaMarketing.html" className="service-btn">
                Learn More
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="icofont icofont-brand-designfloat" />
              </div>
              <h3>Graphic Design</h3>
              <p className="service-description">
                Our creative designs are crafted to effectively communicate your
                brand's story and stand out in a crowded
              </p>
              <a href="graphic-designing.html" className="service-btn">
                Learn More
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="icofont icofont-code-alt" />
              </div>
              <h3>Website Development</h3>
              <p className="service-description">
                We design and develop websites that offer seamless user
                experiences while aligning with your brand's identity.
              </p>
              <a href="web-services.html" className="service-btn">
                Learn More
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="icofont icofont-file-text" />
              </div>
              <h3>Content Writing</h3>
              <p className="service-description">
                Our content is optimized for both SEO and engagement, helping to
                connect with your audience and grow your
              </p>
              <a href="Content-writing.html" className="service-btn">
                Learn More
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="icofont icofont-search-document" />
              </div>
              <h3>SEO Optimization</h3>
              <p className="service-description">
                We employ effective SEO strategies to improve your website's
                visibility and drive organic traffic to your site.
              </p>
              <a href="seo_ptimization.html" className="service-btn">
                Learn More
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="icofont icofont-edit" />
              </div>
              <h3>Video Editing</h3>
              <p className="service-description">
                We provide high-quality video editing services to captivate your
                audience and deliver your brand message effectively.
              </p>
              <a href="Video-editing.html" className="service-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}
      <section className="blog-updates">
        <div className="content-container">
          <div className="section-title" style={{ textAlign: "center" }}>
            <h2>Stay Updated With The Latest Trends</h2>
            <img src="./section-img.png" alt="Section Image" />
            <p>
              Discover the latest insights and updates on digital marketing,
              business solutions, and more.
            </p>
          </div>
          <div className="posts-grid">
            <div className="post-card">
              <div className="post-image">
                <img src="./blogs1.webp" alt="Blog Post 1" />
              </div>
              <div className="post-info">
                <span className="post-date">September 17, 2024</span>
                <h3>
                  <a href="blogs.html">
                    Why AI is Reshaping Digital Marketing in 2024
                  </a>
                </h3>
                <p className="post-excerpt">
                  AI is revolutionizing how brands connect with customers by
                  processing massive...
                </p>
              </div>
            </div>
            <div className="post-card">
              <div className="post-image">
                <img src="./blogs2.webp" alt="Blog Post 2" />
              </div>
              <div className="post-info">
                <span className="post-date">September 14, 2024</span>
                <h3>
                  <a href="blogs.html">
                    The Future of Social Media Marketing in 2024: Trends and
                    Strategies for Growth
                  </a>
                </h3>
                <p className="post-excerpt">
                  Social media continues to evolve as a crucial tool for
                  businesses to engage audiences...
                </p>
              </div>
            </div>
            <div className="post-card">
              <div className="post-image">
                <img src="./blogs3.webp" alt="Blog Post 3" />
              </div>
              <div className="post-info">
                <span className="post-date">September 13, 2024</span>
                <h3>
                  <a href="blogs.html">
                    The Ultimate Guide to Maximize ROI with PPC in 2024
                  </a>
                </h3>
                <p className="post-excerpt">
                  As businesses shift toward measurable, results-driven
                  marketing, PPC advertising...
                </p>
              </div>
            </div>
          </div>
          <div
            className="read-more-btn"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            <a
              style={{
                color: "var(--second)",
                backgroundColor: "#f9f9f9",
                padding: "10px 20px",
                borderRadius: 5,
                textDecoration: "none",
                transition: "0.2s ease-in-out",
              }}
              onmouseover="this.style.color='var(--first)'; this.style.backgroundColor='var(--second)';"
              onmouseout="this.style.color='var(--second)'; this.style.backgroundColor='#f9f9f9';"
              href="blogs.html"
              className="read-more-btn"
            >
              Read More...
            </a>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------- */}
      <div className="logo-carousel-container-new">
        <div className="section-title" style={{ textAlign: "center" }}>
          <h2>Our Clients</h2>
        </div>
        <div className="logo-carousel">
          <div className="logo-slide">
            <img src="./l1.jpg" alt="Logo 1" />
          </div>
          <div className="logo-slide">
            <img src="./l2.png" alt="Logo 2" />
          </div>
          <div className="logo-slide">
            <img src="./l3.png" alt="Logo 3" />
          </div>
          <div className="logo-slide">
            <img src="./l4.png" alt="Logo 4" />
          </div>
          <div className="logo-slide">
            <img src="./l5.png" alt="Logo 5" />
          </div>
          <div className="logo-slide">
            <img src="./l6.png" alt="Logo 6" />
          </div>
          <div className="logo-slide">
            <img src="./l7.png" alt="Logo 7" />
          </div>
          <div className="logo-slide">
            <img src="./l8.jpg" alt="Logo 8" />
          </div>
          <div className="logo-slide">
            <img src="./l9.jpeg" alt="Logo 9" />
          </div>
          <div className="logo-slide">
            <img src="./l10.png" alt="Logo 10" />
          </div>
          {/* Duplicate slides for seamless marquee effect */}
          <div className="logo-slide">
            <img src="./l1.jpg" alt="Logo 1" />
          </div>
          <div className="logo-slide">
            <img src="./l2.png" alt="Logo 2" />
          </div>
          <div className="logo-slide">
            <img src="./l3.png" alt="Logo 3" />
          </div>
          <div className="logo-slide">
            <img src="./l4.png" alt="Logo 4" />
          </div>
          <div className="logo-slide">
            <img src="./l5.png" alt="Logo 5" />
          </div>
          <div className="logo-slide">
            <img src="./l6.png" alt="Logo 6" />
          </div>
          <div className="logo-slide">
            <img src="./l7.png" alt="Logo 7" />
          </div>
          <div className="logo-slide">
            <img src="./l8.jpg" alt="Logo 8" />
          </div>
          <div className="logo-slide">
            <img src="./l9.jpeg" alt="Logo 9" />
          </div>
          <div className="logo-slide">
            <img src="./l10.png" alt="Logo 10" />
          </div>
          {/* Duplicate slides for seamless marquee effect */}
          <div className="logo-slide">
            <img src="./l1.jpg" alt="Logo 1" />
          </div>
          <div className="logo-slide">
            <img src="./l2.png" alt="Logo 2" />
          </div>
          <div className="logo-slide">
            <img src="./l3.png" alt="Logo 3" />
          </div>
          <div className="logo-slide">
            <img src="./l4.png" alt="Logo 4" />
          </div>
          <div className="logo-slide">
            <img src="./l5.png" alt="Logo 5" />
          </div>
          <div className="logo-slide">
            <img src="./l6.png" alt="Logo 6" />
          </div>
          <div className="logo-slide">
            <img src="./l7.png" alt="Logo 7" />
          </div>
          <div className="logo-slide">
            <img src="./l8.jpg" alt="Logo 8" />
          </div>
          <div className="logo-slide">
            <img src="./l9.jpeg" alt="Logo 9" />
          </div>
          <div className="logo-slide">
            <img src="./l10.png" alt="Logo 10" />
          </div>
          {/* Duplicate slides for seamless marquee effect */}
          <div className="logo-slide">
            <img src="./l1.jpg" alt="Logo 1" />
          </div>
          <div className="logo-slide">
            <img src="./l2.png" alt="Logo 2" />
          </div>
          <div className="logo-slide">
            <img src="./l3.png" alt="Logo 3" />
          </div>
          <div className="logo-slide">
            <img src="./l4.png" alt="Logo 4" />
          </div>
          <div className="logo-slide">
            <img src="./l5.png" alt="Logo 5" />
          </div>
          <div className="logo-slide">
            <img src="./l6.png" alt="Logo 6" />
          </div>
          <div className="logo-slide">
            <img src="./l7.png" alt="Logo 7" />
          </div>
          <div className="logo-slide">
            <img src="./l8.jpg" alt="Logo 8" />
          </div>
          <div className="logo-slide">
            <img src="./l9.jpeg" alt="Logo 9" />
          </div>
          <div className="logo-slide">
            <img src="./l10.png" alt="Logo 10" />
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <div className="form-section-main">
        <div className="blue-overlay" />
        <div className="form-section">
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
            <div className="form-input-field">
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
            <div className="form-input-field">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                id="phone"
                required=""
              />
            </div>
            <div className="form-input-field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                id="email"
                required=""
              />
            </div>
            <div className="form-group">
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
              className="submit-btn"
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
