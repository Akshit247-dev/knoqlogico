import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Contact.css"
import { Link } from "react-router-dom";


function Contact() {
  return (
    <>
      <Header />
      <>
        {/* End Header Area */}
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container">
            <h2>Contact Us</h2>
            <ul className="bread-list">
              <li>
              <Link to="/home">Home</Link>
              </li>
              <li>›</li>
              <li className="active">Contact Us</li>
            </ul>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* Start Contact Us */}
        <section className="contact-us">
          <div className="container">
            <div className="row">
              {/* Map Section */}
              <div className="contact-left">
                <h2>Find Us Here</h2>
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220248.59801767027!2d77.63398313281249!3d30.396835500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2b839063c0f9%3A0x34db7bfe51d6830b!2sKnoqlogico%20IT%20Solutions%20Pvt.%20Ltd.%20%7C%20Internet%20Marketing%20Experts%20In%20Dehradun%20%7C%20Best%20Digital%20Marketing%20Company%20In%20Dehradun!5e0!3m2!1sen!2sin!4v1734520248839!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              {/* Contact Form Section */}
              <div className="contact-right">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to contact us.</p>
                <form
                  id="contactForm"
                  action="https://formspree.io/f/xwpvbeaw"
                  method="POST"
                >
                  {/* <form id="contactForm" action="/leads/create" method="POST"> */}
                  {/* <form id="contactForm" action="knoq-data.php" method="POST"> */}
                  <div className="form-group">
                    <input
                      type="text"
                      id="fname"
                      name="Firstname"
                      placeholder="FirstName"
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
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="msg"
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <input
                    className="btn-submit"
                    type="submit"
                    defaultValue="Send Message"
                  />
                </form>
              </div>
            </div>
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-card">
                <i className="icon">
                  <i
                    className="fa-solid fa-phone"
                    style={{ color: "var(--second)" }}
                  />
                </i>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+917351056005">+91 735 105 6005</a>
                </p>
                <p>
                  <a href="mailto:connect@knoqlogico.com">
                    connect@knoqlogico.com
                  </a>
                </p>
              </div>
              <div className="info-card">
                <i className="icon">
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "var(--second)" }}
                  />
                </i>
                <h4>Address</h4>
                <p>1st Floor, Rana Complex, Bhauwala</p>
                <p>Uttarakhand, 248007</p>
              </div>
              <div className="info-card">
                <i className="icon">
                  <i
                    className="fa-solid fa-clock"
                    style={{ color: "var(--second)" }}
                  />
                </i>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 8:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Contact Us */}
      </>

      <Footer />
    </>
  );
}

export default Contact;
