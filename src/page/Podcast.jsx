import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Podcast.css";
import { Link } from "react-router-dom";

function Podcast() {
  return (
    <>
      <Header />
      <>
        <div className="Podcast-main">
          <div className="Podcast-main-blue-cover" />
          <div className="Podcast-content">
            <h1>Welcome to the Knoqlogico Podcast</h1>
            <p style={{ color: "white" }}>
              We bring insightful conversations with business owners,
              innovators, and experts to help you take your business to the next
              level.
            </p>
          </div>
        </div>
        <section className="Podcast-overview-section">
          <div className="Podcast-container">
            <h2>About the Knoqlogico Podcast</h2>
            <div className="Podcast-about-content">
              <div className="Podcast-about-podcast-img" />
              <div className="Podcast-about-content-written">
                <p>
                  At Knoqlogico, we believe in sharing knowledge and inspiring
                  growth. In our podcast, we invite business leaders,
                  entrepreneurs, and experts from various industries to share
                  their journeys, lessons, and actionable strategies. Whether
                  you are starting a new business or looking to scale, our
                  podcast will provide valuable insights for every entrepreneur.
                </p>
                <p>
                  Episodes will cover topics like branding, marketing,
                  entrepreneurship, technology, and much more. Stay tuned for
                  upcoming releases!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="Podcast-upcoming-episodes">
          <h2 className="Podcast-section-title">Upcoming Episodes</h2>
          <p>
            Our first few episodes are on their way! Here's a sneak peek at some
            of the exciting topics we'll be covering:
          </p>
          <div className="Podcast-upcoming-list">
            <div className="Podcast-upcoming-card">
              <h3>Building yourself as Strong Brand Identity</h3>
              <p>
                Learn the key steps to creating a memorable brand that resonates
                with your audience.
              </p>
              <a href="#" className="Podcast-episode-link">
                Notify Me When Available
              </a>
            </div>
            <div className="Podcast-upcoming-card">
              <h3>Leveraging Technology for Business Growth</h3>
              <p>
                Discover how to use the latest tech tools to streamline your
                business operations.
              </p>
              <a href="#" className="Podcast-episode-link">
                Notify Me When Available
              </a>
            </div>
            <div className="Podcast-upcoming-card">
              <h3>Marketing Strategies for the growing Startups</h3>
              <p>
                Get insights on low-cost, highly effective marketing strategies
                for growing your startup.
              </p>
              <a href="#" className="Podcast-episode-link">
                Notify Me When Available
              </a>
            </div>
          </div>
        </section>
        <section className="Podcast-testimonials">
          <h2 className="Podcast-section-title">What Our Listeners Are Saying</h2>
          <div className="Podcast-testimonial-cards">
            <div className="Podcast-testimonial-card">
              <p>
                "The Knoqlogico Podcast has been a game-changer for my business.
                The tips and stories shared have helped me scale my startup in
                ways I never thought possible!"
              </p>
              <p className="Podcast-testimonial-name">
                - Sarah D., Founder of InnovateX
              </p>
            </div>
            <div className="Podcast-testimonial-card">
              <p>
                "As a new entrepreneur, the advice on branding and marketing
                strategies has been invaluable. I can't wait for the next
                episode!"
              </p>
              <p className="Podcast-testimonial-name">- James T., CEO of GreenTech</p>
            </div>
            <div className="Podcast-testimonial-card">
              <p>
                "A must-listen for any business owner. The podcast covers a
                variety of topics that are highly relevant to today's business
                landscape!"
              </p>
              <p className="Podcast-testimonial-name">- Mark L., Business Consultant</p>
            </div>
          </div>
        </section>
        <section className="Podcast-how-to-listen">
          <h2 className="Podcast-section-title">
            How to Listen to the Knoqlogico Podcast
          </h2>
          <p>
            Our podcast will be available on all major platforms, so you can
            listen at your convenience, whether you're at home or on the go.
            Here's how you can tune in:
          </p>
          <div className="Podcast-platform-cards">
            <div className="Podcast-platform-card">
              <h3>Apple Podcasts</h3>
              <p>
                Listen on the go with Apple Podcasts. Get our episodes directly
                on your iPhone or MacBook.
              </p>
            </div>
            <div className="Podcast-platform-card">
              <h3>Spotify</h3>
              <p>
                Prefer Spotify? Don't worry, we've got you covered. Tune in on
                your mobile app or desktop!
              </p>
            </div>
            <div className="Podcast-platform-card">
              <h3>Google Podcasts</h3>
              <p>
                If you're an Android user, catch our podcast on Google Podcasts
                for easy access on your device.
              </p>
            </div>
          </div>
        </section>
        <section className="Podcast-cta-section" id="subscribe">
          <div className="Podcast-cta-content">
            <h2>Stay Tuned for More</h2>
            <p>
              Sign up below to receive notifications when our first episodes go
              live!
            </p>
            <a href="/Contact" className="Podcast-cta-button">
              Subscribe Now
            </a>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
}

export default Podcast;
