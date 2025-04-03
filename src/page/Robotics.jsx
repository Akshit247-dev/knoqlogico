import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "./Robotics.css"
import { Link } from "react-router-dom";
import roboticsImg from "../assets/img/155965446_10548558.jpg";
import handsOnLearningImg from "../assets/img/15475.jpg";
import expertMentorsImg from "../assets/img/2148863420.jpg";
import projectBasedLearningImg from "../assets/img/2148863376.jpg";
import certificationImg from "../assets/img/2148863412.jpg";

function Robotics() {
  return (
    <>
    <Header/>
    {/* ---------------------------------------------------- */}
    <div className="Robotics-main">
      <div className="Robotics-main-blue-cover" />
      <div className="Robotics-content">
        <h2>Robotics</h2>
        <p style={{ color: "white" }}>
          Upskill in cutting-edge technologies through our hands-on,
          industry-focused programs.
        </p>
      </div>
    </div>
    <div className="Robotics-hero-section">
      <div className="Robotics-hero-img">
      <img src={roboticsImg} alt="Robotics Hero" />
      </div>
      <div className="Robotics-hero-content">
        <p className="Robotics-hero-techie">Our Training Experts</p>
        <h3>Robotics Training Program</h3>
        <div className="Robotics-hero-conent-para">
          <p>
            Our training programs are crafted to deliver the perfect blend of
            theoretical insights and practical expertise in Robotics and IoT.
            Whether you're a beginner exploring these fields or a professional
            looking to deepen your knowledge, our courses offer tailored learning
            paths that ensure success.
          </p>
          <p>
            From foundational concepts to advanced applications, we make learning
            engaging and impactful through real-world projects, expert mentoring,
            and state-of-the-art resources.
          </p>
        </div>
        <div className="Robotics-hero-button">
        <Link to="/Contact" className="contact-link">Contact Us</Link>
        </div>
      </div>
    </div>
    <div className="Robotics-robotics-cards-section">
      <h2 className="Robotics-section-heading">How You Will Be Trained</h2>
      <div className="Robotics-cards-container">
        <div className="Robotics-training-card">
        <img
      src={handsOnLearningImg}
      alt="Hands-On Learning"
      className="Robotics-card-image"
    />
          <div className="Robotics-card-content">
            <h3>Hands-On Learning</h3>
            <p>
              Engage in practical sessions with real robots. Build, design, and
              program robots to develop skills that you can immediately apply.
            </p>
          </div>
        </div>
        <div className="Robotics-training-card">
        <img
      src={expertMentorsImg}
      alt="Expert Mentors"
      className="Robotics-card-image"
    />
          <div className="Robotics-card-content">
            <h3>Expert Mentors</h3>
            <p>
              Learn from experienced professionals and industry experts who will
              guide you every step of the way, ensuring you get the most out of
              your training.
            </p>
          </div>
        </div>
        <div className="Robotics-training-card">
        <img
      src={projectBasedLearningImg}
      alt="Project-Based Learning"
      className="Robotics-card-image"
    />
          <div className="Robotics-card-content">
            <h3>Project-Based Learning</h3>
            <p>
              Work on exciting projects that mirror real-world challenges.
              Collaborate with peers and gain hands-on experience to enhance your
              knowledge.
            </p>
          </div>
        </div>
        <div className="Robotics-training-card">
        <img
      src={certificationImg}
      alt="Certification"
      className="Robotics-card-image"
    />
          <div className="Robotics-card-content">
            <h3>Certification</h3>
            <p>
              Receive certification upon completion, validating your skills and
              boosting your credentials in the field of robotics.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="Robotics-learning-journey">
      <h2 className="Robotics-journey-heading">Start Your Learning Journey Today!</h2>
      <p className="Robotics-journey-content">
        Equip yourself with skills that set you apart in Robotics and IoT. Let's
        build a smarter future together.
      </p>
      <Link to="/Contact" className="Robotics-journey-button">
      Enroll Now
    </Link>
    </div>
    <Footer/>
  </>  
  )
}

export default Robotics