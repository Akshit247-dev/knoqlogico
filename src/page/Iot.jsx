import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Iot.css";
import { Link } from "react-router-dom";
import imageSrc from "../assets/img/9319893_4139985.svg";
import imageSrc1 from "../assets/img/2149357673.jpg";
import imageSrc3 from "../assets/img/18705.jpg";
import projectImage from "../assets/img/112941.jpg";
import certificationImg from "../assets/img/2151037121.jpg";

function Iot() {
  return (
    <>
      <Header />
      <div className="Iot-main">
        <div className="Iot-main-blue-cover" />
        <div className="Iot-content">
          <h2>IOT</h2>
          <p style={{ color: "white" }}>
            Upskill in cutting-edge technologies through our hands-on,
            industry-focused programs.
          </p>
        </div>
      </div>
      <div className="Iot-hero-section">
        <div className="Iot-hero-img">
          <img src={imageSrc} alt="IoT Hero" />
        </div>
        <div className="Iot-hero-content">
          <p className="Iot-hero-techie">Our Training Experts</p>
          <h3>IOT Training Program</h3>
          <div className="Iot-hero-conent-para">
            <p>
              Our IoT training program gives you the knowledge and skills to
              design, develop, and implement IoT solutions across industries.
              Learn to integrate sensors, work with data, and build scalable IoT
              systems that are set to transform the world.
            </p>
            <p>
              Whether you are just starting or already familiar with IoT, our
              hands-on approach ensures you gain practical skills that can be
              immediately applied in real-world projects and professional
              environments.
            </p>
          </div>
          <div className="Iot-hero-button">
            <Link to="/Contact" className="contact-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="Iot-robotics-cards-section">
        <h2 className="Iot-section-heading">How You Will Be Trained</h2>
        <div className="Iot-cards-container">
          <div className="Iot-training-card">
            <img
              src={imageSrc1}
              alt="Hands-On Learning"
              className="Iot-card-image"
            />
            <div className="Iot-card-content">
              <h3>IoT Fundamentals</h3>
              <p>
                Learn the core concepts of IoT, including sensors, communication
                protocols, and data acquisition systems.
              </p>
            </div>
          </div>
          <div className="Iot-training-card">
            <img
              src={imageSrc3}
              alt="Expert Mentors"
              className="Iot-card-image"
            />
            <div className="Iot-card-content">
              <h3>IoT Programming</h3>
              <p>
                Gain hands-on experience with programming IoT devices using
                languages like Python, C++, and Node.js.
              </p>
            </div>
          </div>
          <div className="Iot-training-card">
            <img
              src={projectImage}
              alt="Project-Based Learning"
              className="Iot-card-image"
            />
            <div className="Iot-card-content">
              <h3>IoT Architecture</h3>
              <p>
                Understand the architecture of IoT systems, from device
                communication to cloud platforms and analytics.
              </p>
            </div>
          </div>
          <div className="Iot-training-card">
            <img
              src={certificationImg}
              alt="Certification"
              className="Iot-card-image"
            />
            <div className="Iot-card-content">
              <h3>IoT Projects</h3>
              <p>
                Work on real-world IoT projects, building smart systems that can
                solve everyday challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Iot-learning-journey">
        <h2 className="Iot-journey-heading">
          Start Your Learning Journey Today!
        </h2>
        <p className="Iot-journey-content">
          Equip yourself with skills that set you apart in Robotics and IoT.
          Let's build a smarter future together.
        </p>
        <Link to="/Contact" className="Iot-journey-button">
          Enroll Now
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Iot;
