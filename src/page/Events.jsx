import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Events.css"
function Events() {
  return (
      <>
      <Header/>
        <section className="hero-section-for-events">
          <div className="section-title">
            <h2>Events</h2>
            <img src="./section-img.png" alt="Section Image" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum in delectus dolore eligendi nam error!
            </p>
          </div>
        </section>
        {/* --------------------------------------------------------------------------------- */}
        <div className="all-events-section">
          <div className="event1">
            <div className="event1-img">
              <img src="./Knoqlogico.png" alt="Event Image" />
            </div>
            <div className="event1-content">
              <h2 className="event1-title">
                First Gen Founders Conclave &amp; Awards 2024.
              </h2>
              <p>
                Lalit K. Singh Kushwaha, CEO of Knoqlogico IT Solutions, was
                honored at the Himalayan Buzz First Gen Founders Conclave and
                Awards 2024 for his exceptional entrepreneurial spirit and
                remarkable contributions to the business world. This event
                celebrated trailblazers who are the first in their generation to
                venture into entrepreneurship. Lalit's leadership and
                Knoqlogico's innovative IT solutions were recognized as
                benchmarks in the industry, marking a proud milestone in our
                journey of excellence and impact.
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <div className="event-img-container-carousel">
          <div className="carousel-wrapper">
            <button className="carousel-btn prev-btn">
              <i className="fa-solid fa-angle-left" />
            </button>
            <div className="carousel">
              <img src="./ee1.jpeg" alt="Event Image 1" />
              <img src="./ee2.jpeg" alt="Event Image 2" />
              <img src="./ee3.jpg" alt="Event Image 3" />
              <img src="./ee4.jpg" alt="Event Image 4" />
              <img src="./ee5.jpg" alt="Event Image 5" />
              <img src="./ee6.jpg" alt="Event Image 6" />
              <img src="./ee7.jpg" alt="Event Image 7" />
            </div>
            <button className="carousel-btn next-btn">
              <i className="fa-solid fa-angle-right" />
            </button>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <hr
          style={{
            margin: "50px 40px",
            height: 5,
            backgroundColor: "#e1e1e1",
            border: "none",
            borderRadius: 10,
          }}
        />
        {/* --------------------------------------------------------------------------------- */}
        <div className="all-events-section">
          <div className="event1">
            <div className="event2-img">
              <img src="./csr-main.jpg" alt="Event Image" />
            </div>
            <div className="event1-content">
              <h2 className="event1-title">
                Knoqlogico Spreads Festive Cheer with CSR Initiative
              </h2>
              <p>
                Knoqlogico IT Solutions proudly embarked on a meaningful CSR
                initiative this Christmas, bringing joy to the young minds at
                Kites Play Pre And Remedial School. Our team visited the school
                to engage with the students, sharing festive moments and
                creating lasting memories. We interacted with the children,
                listening to their dreams and aspirations, and gifted them
                thoughtful presents to brighten their holiday season. This
                activity reflects Knoqlogico’s deep commitment to giving back to
                the community and fostering positive change. By supporting these
                children, we aim to inspire hope and make a lasting difference,
                reinforcing our belief in the power of kindness and community
                spirit.
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <div className="event-img-container-carousel">
          <div className="carousel-wrapper">
            <button className="carousel-btn prev-btn">
              <i className="fa-solid fa-angle-left" />
            </button>
            <div className="carousel">
              <img src="./csr1.jpg" alt="Event Image 1" />
              <img src="./csr2.jpg" alt="Event Image 2" />
              <img src="./csr3.jpg" alt="Event Image 3" />
              <img src="./csr4.jpg" alt="Event Image 4" />
              <img src="./csr5.jpg" alt="Event Image 5" />
              <img src="./csr6.jpg" alt="Event Image 6" />
              <img src="./csr7.jpg" alt="Event Image 7" />
              <img src="./csr8.jpg" alt="Event Image 8" />
              <img src="./csr9.jpg" alt="Event Image 9" />
            </div>
            <button className="carousel-btn next-btn">
              <i className="fa-solid fa-angle-right" />
            </button>
          </div>
        </div>
        <Footer/>
      </>
  );
}

export default Events;
