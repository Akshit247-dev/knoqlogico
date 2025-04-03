import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Graphic_designing.css";
import { Link } from "react-router-dom";
import graphicDesignImg from "../assets/img/rb_1537.png";

function Graphic_designing() {
  return (
    <>
      <Header />
      {/* MAIN----------------------- */}
      <div className="Graphic-designing-main">
        <div className="Graphic-designing-main-blue-cover" />
        <div className="Graphic-designing-content">
          <h2>Graphic Designing</h2>
          <ul>
            <li>Home</li>
            <li>&gt;</li>
            <li>Services</li>
            <li>&gt;</li>
            <li>Graphic Designing</li>
          </ul>
        </div>
      </div>
      {/* TAGLINE-------------------- */}
      <div className="Graphic-designing-tagline-section">
        <h2>Graphic Designing</h2>
        <div className="Graphic-designing-beat-img" />
        <p>
          At Knoqlogico, we craft exceptional graphic designs that capture your
          brand's essence, from logos to marketing materials, creating memorable
          experiences that connect with your audience and help you stand out.
        </p>
      </div>
      {/* HERO SECTION-------------- */}
      <div className="Graphic-designing-hero-section">
        <div className="Graphic-designing-hero-img">
          <img src={graphicDesignImg} alt="Graphic Designing" />
        </div>
        <div className="Graphic-designing-hero-content">
          <p className="Graphic-designing-hero-techie">
            Our Graphic Designing Experts
          </p>
          <h3>Graphic Designing</h3>
          <div className="Graphic-designing-hero-conent-para">
            <p>
              Our expert graphic designers create visually stunning solutions
              that reflect your brand's identity. From logo design to marketing
              collateral, we craft designs that not only look great but also
              resonate with your audience. We work closely with you to
              understand your vision and translate it into impactful visual
              elements that capture attention and leave a lasting impression. By
              combining creativity with strategy, we ensure your brand stands
              out in a competitive marketplace, driving engagement and growth.
            </p>
          </div>
          <div className="Graphic-designing-hero-button">
            <Link to="/Contact">Contact Us</Link>
          </div>
        </div>
      </div>
      {/* CARDS - PROCESS------------------ */}
      <div className="Graphic-designing-ag-format-container">
        <div className="Graphic-designing-ag-courses_box">
          <div className="Graphic-designing-ag-courses_item">
            <Link to="#" className="Graphic-designing-ag-courses-item_link">
              <div className="Graphic-designing-ag-courses-item_bg" />
              <div className="Graphic-designing-ag-courses-item_title">
                1. Custom Designs
              </div>
              <div className="Graphic-designing-ag-courses-item_date-box">
                Every brand has its own unique story, and we're here to help you
                tell yours through personalized graphic design. Whether you need
                a captivating logo, eye-catching marketing materials, or a
                complete brand identity makeover, we work closely with you to
                create designs that resonate with your target audience. Our
                talented team combines creativity with strategic insight to
                produce visuals that connect with your customers.
              </div>
            </Link>
          </div>
          <div className="Graphic-designing-ag-courses_item">
            <Link to="#" className="Graphic-designing-ag-courses-item_link">
              <div className="Graphic-designing-ag-courses-item_bg" />
              <div className="Graphic-designing-ag-courses-item_title">
                2. Comprehensive Design
              </div>
              <div className="Graphic-designing-ag-courses-item_date-box">
                We offer a full range of graphic design services to enhance your
                brand's presence and appeal. From Logo Design &amp; Branding to
                craft unique, memorable logos, to Print Design for stunning
                brochures, flyers, and business cards. Our Digital Design covers
                social media graphics, website layouts, and email templates,
                while our Packaging Design ensures your products stand out with
                visually appealing and brand-focused designs.
              </div>
            </Link>
          </div>
          <div className="Graphic-designing-ag-courses_item">
            <Link to="#" className="Graphic-designing-ag-courses-item_link">
              <div className="Graphic-designing-ag-courses-item_bg" />
              <div className="Graphic-designing-ag-courses-item_title">
                3. Focus on Quality
              </div>
              <div className="Graphic-designing-ag-courses-item_date-box">
                We believe every design—big or small—deserves meticulous
                attention to detail and a touch of creativity. Our expert team
                ensures that every aspect of your design—from typography and
                color choices to layout and overall aesthetics—is thoughtfully
                crafted. This approach guarantees consistency, professionalism,
                and high quality across all the platforms, helping your brand
                stand out and make a lasting impression.
              </div>
            </Link>
          </div>
          <div className="Graphic-designing-ag-courses_item">
            <Link to="#" className="Graphic-designing-ag-courses-item_link">
              <div className="Graphic-designing-ag-courses-item_bg" />
              <div className="Graphic-designing-ag-courses-item_title">
                4. Faster Turnaround{" "}
              </div>
              <div className="Graphic-designing-ag-courses-item_date-box">
                We understand that time is a critical resource in business.
                That's why our streamlined and efficient design process ensures
                you receive top-notch deliverables exactly when you need them.
                Whether you're launching a new product, planning a high-profile
                event, or kicking off a major marketing campaign, we work
                diligently to help you meet tight deadlines without ever
                compromising on quality or attention to detail.
              </div>
            </Link>
          </div>
          <div className="Graphic-designing-ag-courses_item">
            <Link to="#" className="Graphic-designing-ag-courses-item_link">
              <div className="Graphic-designing-ag-courses-item_bg" />
              <div className="Graphic-designing-ag-courses-item_title">
                5. Collaborative Approach
              </div>
              <div className="Graphic-designing-ag-courses-item_date-box">
                Your vision matters! We take great pride in our collaborative
                approach to design, ensuring you are an integral part of the
                process every step of the way. From initial brainstorming
                sessions to final revisions, we maintain clear and open
                communication, actively incorporating your feedback to make sure
                the end result aligns perfectly with your brand's objectives,
                vision, and goals, creating a design that truly reflects your
                unique identity.
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Graphic_designing;
