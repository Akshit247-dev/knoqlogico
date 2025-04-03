import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Products.css";
import img1 from "../assets/img/22111738_6563972.jpg";
import img2 from "../assets/img/13404912_5244056.svg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <Header />
      {/* MAIN----------------------- */}
      <div className="Products-main">
        <div className="Products-main-blue-cover" />
        <div className="Products-content">
          <h2>Products</h2>
          <p style={{ color: "white" }}>
            Making Innovation Simple and Accessible.
          </p>
        </div>
      </div>
      {/* HERO SECTION-------------- */}
      <div className="Products-hero-section">
        <div className="Products-hero-img">
          <img src={img1} alt="Image 1" />
        </div>
        <div className="Products-hero-content">
          <h3>Our carefuly crafted Products</h3>
          <div className="Products-hero-conent-para">
            <p>
              At Knoqlogico, we focus on creating technology that is both
              practical and reliable. Our products are designed to address
              everyday challenges, making complex tasks easier and more
              efficient. Whether you're looking to streamline your processes or
              find simple solutions to enhance your productivity, we provide
              tools that are built with your needs in mind. Our approach is to
              deliver dependable products that make a positive impact without
              the complexity.
            </p>
            <p>
              We believe technology should empower, not overwhelm. That's why
              our products are crafted to be straightforward, user-friendly, and
              accessible to everyone. We understand that your time is valuable,
              and we aim to offer solutions that help you achieve more with less
              effort. Our goal is to make innovation practical, offering
              technology that works seamlessly in your daily life and supports
              your success in a meaningful way.
            </p>
          </div>
          <div className="Products-hero-button">
            <Link to="/Contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="Products-hero-section">
        <div className="Products-hero-content">
          <h3>Why Choose Our Products?</h3>
          <div className="Products-hero-conent-para">
            <p>
              <i
                className="fa-regular fa-hand-point-right"
                style={{ color: "#000000" }}
              />
              &nbsp;
              <strong style={{ textDecoration: "underline" }}>
                User-Centric Design:
              </strong>
              Our products are built with simplicity and ease of use in mind,
              ensuring they seamlessly integrate into your workflow and daily
              tasks.
            </p>
            <p>
              <i
                className="fa-regular fa-hand-point-right"
                style={{ color: "#000000" }}
              />
              &nbsp;
              <strong style={{ textDecoration: "underline" }}>
                Reliable Performance:
              </strong>
              At Knoqlogico, we prioritize quality and dependability, offering
              products that consistently deliver reliable results and help you
              stay productive.
            </p>
            <p>
              <i
                className="fa-regular fa-hand-point-right"
                style={{ color: "#000000" }}
              />
              &nbsp;
              <strong style={{ textDecoration: "underline" }}>
                Affordable Innovation:
              </strong>
              We provide cutting-edge technology at accessible prices, ensuring
              you get the best value without compromising on performance.
            </p>
            <p>
              <i
                className="fa-regular fa-hand-point-right"
                style={{ color: "#000000" }}
              />
              &nbsp;
              <strong style={{ textDecoration: "underline" }}>
                Customer Support:
              </strong>
              Our dedicated support team is always ready to assist you,
              providing personalized solutions and ensuring you get the most out
              of our products.
            </p>
          </div>
        </div>
        <div className="Products-hero-img">
          <img src={img2} alt="Image 2" />
        </div>
      </div>
      <br />
      <br />
      <section className="Products-cta-section">
        <div className="Products-cta-container">
          <div className="Products-cta-content">
            <h2 className="Products-cta-title">
              For more information connect with us just Call +91 735 105 6005
            </h2>
            <p className="Products-cta-subtitle">
              Our Team Always ready to help you
            </p>
            <div className="Products-cta-buttons">
              <Link to="/Contact" className="Products-cta-btn primary">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CARDS - PROCESS------------------ */}
      <div className="Products-card-trainings-type">
        <h2 className="Products-training-cards-heading">Our Products</h2>
        <div className="Products-training-cards">
          <div className="Products-training-robotics">
            <div className="Products-robo-img" />
            <div className="Products-robo-content">
              <h3>CRM/ERP</h3>
              <p>
                Knoqlogico's CRM/ERP solution is designed to help businesses
                optimize their operations by centralizing customer data,
                automating key processes, and improving team collaboration.
                Whether you're managing customer relationships, tracking sales,
                or overseeing financial data, our platform provides a
                comprehensive, scalable solution to streamline your business,
                enhance productivity, and make informed decisions that drive
                growth
              </p>
              {/* <Link to="/Robotics">Read More</Link> */}
            </div>
          </div>
          <div className="Products-training-iot">
            <div className="Products-iot-img" />
            <div className="Products-iot-content">
              <h3>Who's Best</h3>
              <p>
                Who's Best by Knoqlogico helps businesses create an impactful
                online presence by showcasing their products, services, and
                customer success stories in a professional and engaging manner.
                With features that allow businesses to highlight their strengths
                and track performance, Who's Best is the perfect tool to build
                credibility, attract new customers, and stand out in today's
                competitive market.
              </p>
              {/* <Link to="/iot">Read More</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="Products-learning-journey">
        <h2 className="Products-journey-heading">
          Take Your Business to the Next Level Today!
        </h2>
        <p className="Products-journey-content">
          Empower your business with Knoqlogico's CRM/ERP solution and showcase
          your success with Who's Best. Let's make your business smarter and
          more efficient.
        </p>
        <Link to="/Contact" className="Products-journey-button">
          Get Started Now
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Products;
