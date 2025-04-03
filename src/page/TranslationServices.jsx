import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "./TranslationServices.css"
import svgImage from '../assets/img/12085865_20944354.svg';
import { Link } from "react-router-dom";

function TranslationServices() {
  return (
    <>
    <Header/>
  {/* MAIN----------------------- */}
  <div className="TranslationServices-main">
    <div className="TranslationServices-main-blue-cover" />
    <div className="TranslationServices-content">
      <h2>Translation Services</h2>
      <ul>
        <li>Home</li>
        <li>&gt;</li>
        <li>What we do</li>
        <li>&gt;</li>
        <li>Translation Services</li>
      </ul>
    </div>
  </div>
  {/* TAGLINE-------------------- */}
  <div className="TranslationServices-tagline-section">
    <h2>Translation Services</h2>
    <div className="TranslationServices-beat-img" />
    <p>
      Break down language barriers and connect with a global audience through
      our professional translation services.
    </p>
  </div>
  {/* HERO SECTION-------------- */}
  <div className="TranslationServices-hero-section">
    <div className="TranslationServices-hero-img">
    <img src={svgImage} alt="Image Description" />
    </div>
    <div className="TranslationServices-hero-content">
      <p className="TranslationServices-hero-techie">Our Content Marketing Experts</p>
      <h3>Translation Services</h3>
      <div className="TranslationServices-hero-conent-para">
        <p>
          Our translation services are designed to break down language barriers
          and help your business connect with a wider audience. We provide
          accurate, culturally aware translations that ensure your message
          resonates with people from different backgrounds. Whether you need to
          translate your website, marketing materials, or product descriptions,
          our team is here to help you communicate effectively with your global
          customers.
        </p>
        <p>
          We understand that every market is unique, so we take the time to
          tailor translations to fit cultural nuances and local preferences. Our
          goal is to make your content feel natural and engaging, no matter
          where it's being read. Trust us to help you expand your reach with
          high-quality translation services that reflect the authenticity of
          your brand.
        </p>
      </div>
      <div className="TranslationServices-hero-button">
      <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  </div>
  {/* CARDS - PROCESS------------------ */}
  <div className="TranslationServices-ag-format-container">
    <div className="TranslationServices-ag-courses_box">
      <div className="TranslationServices-ag-courses_item">
        <a href="#" className="TranslationServices-ag-courses-item_link">
          <div className="TranslationServices-ag-courses-item_bg" />
          <div className="TranslationServices-ag-courses-item_title">1. Website Translation</div>
          <div className="TranslationServices-ag-courses-item_date-box">
            Expand your online presence by accurately translating your website's
            content to appeal to global audiences. Our translation services
            adapt your website's text, images, and cultural nuances to ensure it
            resonates with customers in different regions. We help you reach new
            markets while preserving your brand voice, making sure your website
            provides a seamless experience for users worldwide.
          </div>
        </a>
      </div>
      <div className="TranslationServices-ag-courses_item">
        <a href="#" className="TranslationServices-ag-courses-item_link">
          <div className="TranslationServices-ag-courses-item_bg" />
          <div className="TranslationServices-ag-courses-item_title">
            2. Advertising Translation
          </div>
          <div className="TranslationServices-ag-courses-item_date-box">
            Reach new customers and increase engagement by adapting marketing
            campaigns for global markets. We translate ad copy, brochures, and
            social media content, ensuring your message stays relevant and
            impactful. Our services help you connect with a broader audience,
            fostering trust and driving conversions by tailoring your marketing
            content for specific regional needs.
          </div>
        </a>
      </div>
      <div className="TranslationServices-ag-courses_item">
        <a href="#" className="TranslationServices-ag-courses-item_link">
          <div className="TranslationServices-ag-courses-item_bg" />
          <div className="TranslationServices-ag-courses-item_title">3. Document Translation</div>
          <div className="TranslationServices-ag-courses-item_date-box">
            Trust our professional translation services to handle your business
            documents with precision. We provide accurate translations of
            contracts, manuals, legal texts, and more, ensuring compliance and
            clarity. With a focus on industry-specific language, we help you
            maintain the integrity and confidentiality of your documents,
            allowing your business to operate smoothly across languages.
          </div>
        </a>
      </div>
      <div className="TranslationServices-ag-courses_item">
        <a href="#" className="TranslationServices-ag-courses-item_link">
          <div className="TranslationServices-ag-courses-item_bg" />
          <div className="TranslationServices-ag-courses-item_title">
            4. Multilingual SEO Services
          </div>
          <div className="TranslationServices-ag-courses-item_date-box">
            Boost your global online visibility with our multilingual SEO
            services. We optimize your website's content for multiple languages,
            integrating region-specific keywords and local SEO strategies to
            enhance rankings. Our goal is to help your website attract organic
            traffic from search engines in different languages, ensuring that
            your brand is discoverable by international customers.
          </div>
        </a>
      </div>
      <div className="TranslationServices-ag-courses_item">
        <a href="#" className="TranslationServices-ag-courses-item_link">
          <div className="TranslationServices-ag-courses-item_bg" />
          <div className="TranslationServices-ag-courses-item_title">
            5. Mobile App Localization
          </div>
          <div className="TranslationServices-ag-courses-item_date-box">
            Take your app global by localizing it for different languages and
            regions. Our mobile app translation services adjust your app's
            interface, features, and content to meet the expectations of the
            users worldwide. With localized apps, you ensure that customers from
            different countries have an intuitive, user-friendly experience that
            fits their language and cultural preferences.
          </div>
        </a>
      </div>
      <div className="TranslationServices-ag-courses_item">
        <a href="#" className="TranslationServices-ag-courses-item_link">
          <div className="TranslationServices-ag-courses-item_bg" />
          <div className="TranslationServices-ag-courses-item_title">6. E-commerce Translation</div>
          <div className="TranslationServices-ag-courses-item_date-box">
            Increase your e-commerce sales internationally by translating your
            product listings, descriptions, and reviews. Our services help make
            your online store accessible and engaging to customers in multiple
            languages, ensuring they can easily browse and purchase. We
            translate and adapt your content to meet local needs, offering a
            personalized shopping experience that increases trust and boosts
            conversions.
          </div>
        </a>
      </div>
    </div>
  </div>
  <Footer/>
</>

  )
}

export default TranslationServices