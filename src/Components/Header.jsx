import React from "react";
import './heade.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";


function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-button, .dropdown-content")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header-header">
        <div className="header-header-container">
          <div className="header-logo-container">
            <Link to="/" className="header-logo-home-link">
              <img src="/knoq_logo.png" alt="Knoqlogico" />
            </Link>
          </div>
          <nav className="header-navbar">
            <ul className="header-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#" id="header-services-link">
                  What We Do{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    style={{ color: "#000000" }}
                  />
                </Link>
                <ul className="header-dropdown-menu" id="header-services-dropdown">
                  <div className="header-column-one">
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/Digitalmarketing">
                        <i
                          className="fa-solid fa-bullhorn"
                          style={{ color: "#000000" }}
                        />{" "}
                        Digital Marketing
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/DigitalMarketingStrategyDevelopment">
                            Digital Marketing Strategy Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/FranchiseDigitalMarketing">
                            Franchise Digital Marketing
                          </Link>
                        </li>
                        <li>
                          <Link to="/EnterpriseDigitalMarketing">
                            Enterprise Digital Marketing
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/Seo-optimization">
                        <i
                          className="fa-brands fa-searchengin"
                          style={{ color: "#000000" }}
                        />{" "}
                        Search Engine Optimization (SEO)
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/Local-seo">Local SEO</Link>
                        </li>
                        <li>
                          <Link to="/technical-seo">Technical SEO</Link>
                        </li>
                        <li>
                          <Link to="/franchise-seo">Franchise SEO</Link>
                        </li>
                        <li>
                          <Link to="/enterprise-seo">Enterprise SEO</Link>
                        </li>
                        <li>
                          <Link to="/generative-optimization">
                            Generative Engine Optimization
                          </Link>
                        </li>
                        <li>
                          <Link to="/seo-audits">SEO Audits</Link>
                        </li>
                        <li>
                          <Link to="/franchise-seo-audits">
                            Franchise SEO Audit
                          </Link>
                        </li>
                        <li>
                          <Link to="/enterprise-seo-audit">
                            Enterprise SEO Audit
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <Link
                        id="header-sud-header"
                        to="/ConversionRateOptimizationServices"
                      >
                        <i
                          className="fa-solid fa-filter"
                          style={{ color: "#000000" }}
                        />{" "}
                        CRO Services
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/CROAudit">CRO Audits</Link>
                        </li>
                        <li>
                          <Link to="/UserExperienceTesting">
                            User Experience Testing
                          </Link>
                        </li>
                        <li>
                          <Link to="/UserBehaviorAnalytics">
                            User Behavior Analytics
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="header-column-two">
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/PayPerClickMarketing">
                        <i
                          className="fa-solid fa-arrow-pointer"
                          style={{ color: "#000000" }}
                        />{" "}
                        Pay Per Click (PPC) Marketing
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/Search-Engine-Marketing">
                            Search Engine Marketing (SEM)
                          </Link>
                        </li>
                        <li>
                          <Link to="/Google-Ads-Management-Services">
                            Google Ads Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/YouTube-Advertising-Services">
                            YouTube Ads Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/Programmatic-Advertising">
                            Programmatic Advertising
                          </Link>
                        </li>
                        <li>
                          <Link to="/Lead-Generation-Services">
                            Lead Generation Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/Franchise-PPC-Marketing">
                            Franchise PPC
                          </Link>
                        </li>
                        <li>
                          <Link to="/Enterprise-PPC-Marketing">
                            Enterprise PPC
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/SocialMediaMarketing">
                        <i
                          className="fa-solid fa-hashtag"
                          style={{ color: "#000000" }}
                        />{" "}
                        Social Media Advertising
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/FacebookAdvertising">Facebook</Link>
                        </li>
                        <li>
                          <Link to="/InstagramMarketing">Instagram</Link>
                        </li>
                        <li>
                          <Link to="/TwitterAdvertising">Twitter</Link>
                        </li>
                        <li>
                          <Link to="/LinkedInMarketing">LinkedIn</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/App-development">
                        <i
                          className="fa-solid fa-mobile-screen-button"
                          style={{ color: "#000000" }}
                        />{" "}
                        App Development
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/iOSAppDevelopment">
                            iOS App Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/AndroidAppDevelopment">
                            Android App Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/HybridAppDevelopment">
                            Hybrid App Development
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="header-column-three">
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/WebDesignandDevelopment">
                        <i
                          className="fa-solid fa-globe"
                          style={{ color: "#000000" }}
                        />{" "}
                        Web Design &amp; Development
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/BrandingServices">Branding Services</Link>
                        </li>
                        <li>
                          <Link to="/CustomWebsiteDesign">
                            Custom Website Design
                          </Link>
                        </li>
                        <li>
                          <Link to="/WordPressWebsiteDesign">
                            WordPress Website Design
                          </Link>
                        </li>
                        <li>
                          <Link to="/WebsiteHosting">Website Hosting</Link>
                        </li>
                        <li>
                          <Link to="/ADAComplianceServices">
                            ADA Compliance Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/MediaProductionServices">
                        <i
                          className="fa-solid fa-camera"
                          style={{ color: "#000000" }}
                        />{" "}
                        Media Production
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/VideoProductionServices">
                            Video Production
                          </Link>
                        </li>
                        <li>
                          <Link to="/VideoTestimonialServices">
                            Video Testimonial Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/ProductPhotographyServices">
                            Product Photography Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/DroneVideoandPhotographyServices">
                            Drone Video &amp; Photography Service
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/ContentMarketing">
                        <i
                          className="fa-regular fa-file-lines"
                          style={{ color: "#000000" }}
                        />{" "}
                        Content Marketing
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/SEOContentWritingServices">
                            SEO Content Writing
                          </Link>
                        </li>
                        <li>
                          <Link to="/CopywritingServices">
                            Copywriting Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/TranslationServices">
                            Translation Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/EmailMarketingServices">
                            Email Marketing Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/OutboundMarketing">
                            Outbound Marketing
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="header-column-four">
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/eCommerceMarketing">
                        <i
                          className="fa-solid fa-cart-shopping"
                          style={{ color: "#000000" }}
                        />{" "}
                        eCommerce Marketing
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/eCommerceSEO">eCommerce SEO</Link>
                        </li>
                        <li>
                          <Link to="/eCommercePPC">eCommerce PPC</Link>
                        </li>
                        <li>
                          <Link to="/ShopifyWebDesign">Shopify Web Design</Link>
                        </li>
                        <li>
                          <Link to="/eCommerceWebsiteDesign">
                            eCommerce Web Design
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <Link
                        id="header-sud-header"
                        to="/online-marketplace-marketing"
                      >
                        <i
                          className="fa-solid fa-store"
                          style={{ color: "#000000" }}
                        />{" "}
                        Online Marketplace Marketing
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/amazon-seo">Amazon SEO</Link>
                        </li>
                        <li>
                          <Link to="/amazon-ppc">Amazon Advertising/PPC</Link>
                        </li>
                        <li>
                          <Link to="/amazon-storefront-branding">
                            Amazon Storefront &amp; Branding
                          </Link>
                        </li>
                        <li>
                          <Link to="/amazon-seller-consulting">
                            Amazon Seller Consulting
                          </Link>
                        </li>
                        <li>
                          <Link to="/amazon-post-management">
                            Amazon Posts Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/amazon-dsp-adversitment">
                            Amazon DSP Advertising Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/walmart-marketplace">
                            Walmart Marketplace
                          </Link>
                        </li>
                        <li>
                          <Link to="/target-marketplace">
                            Target Plus Marketplace
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <Link id="header-sud-header" to="/LinkBuilding">
                        <i
                          className="fa-solid fa-link"
                          style={{ color: "#000000" }}
                        />{" "}
                        Link Building
                      </Link>
                      <ul className="header-sub-menu">
                        <li>
                          <Link to="/DigitalPROutreach">
                            Digital PR Outreach
                          </Link>
                        </li>
                        <li>
                          <Link to="/HAROLinkBuilding">HARO Link Building</Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
                {/* <ul
                  className="header-dropdown-menu-mobile-view"
                  id="header-services-dropdown"
                >
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="sud-header" to="/digital-marketing">
                      <i
                        className="fa-solid fa-bullhorn"
                        style={{ color: "#000000" }}
                      />{" "}
                      Digital Marketing
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/digital-marketing-strategy-development">
                          Digital Marketing Strategy Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/FranchiseDigitalMarketing">
                          Franchise Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to="/EnterpriseDigitalMarketing">
                          Enterprise Digital Marketing
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/seo_ptimization">
                      <i
                        className="fa-brands fa-searchengin"
                        style={{ color: "#000000" }}
                      />{" "}
                      Search Engine Optimization (SEO)
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/local-seo">Local SEO</Link>
                      </li>
                      <li>
                        <Link to="/technical-seo">Technical SEO</Link>
                      </li>
                      <li>
                        <Link to="/franchise-seo">Franchise SEO</Link>
                      </li>
                      <li>
                        <Link to="/enterprise-seo">Enterprise SEO</Link>
                      </li>
                      <li>
                        <Link to="/generative-optimization">
                          Generative Engine Optimization
                        </Link>
                      </li>
                      <li>
                        <Link to="/seo-audits">SEO Audits</Link>
                      </li>
                      <li>
                        <Link to="/franchise-seo-audits">
                          Franchise SEO Audit
                        </Link>
                      </li>
                      <li>
                        <Link to="/enterprise-seo-audit">
                          Enterprise SEO Audit
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link
                      id="header-sud-header"
                      to="/ConversionRateOptimizationServices"
                    >
                      <i
                        className="fa-solid fa-filter"
                        style={{ color: "#000000" }}
                      />{" "}
                      CRO Services
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/CROAudit">CRO Audits</Link>
                      </li>
                      <li>
                        <Link to="/UserExperienceTesting">
                          User Experience Testing
                        </Link>
                      </li>
                      <li>
                        <Link to="/UserBehaviorAnalytics">
                          User Behavior Analytics
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/PayPerClickMarketing">
                      <i
                        className="fa-solid fa-arrow-pointer"
                        style={{ color: "#000000" }}
                      />{" "}
                      Pay Per Click (PPC) Marketing
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/Search-Engine-Marketing">
                          Search Engine Marketing (SEM)
                        </Link>
                      </li>
                      <li>
                        <Link to="/Google-Ads-Management-Services">
                          Google Ads Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/YouTube-Advertising-Services">
                          YouTube Ads Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/Programmatic-Advertising">
                          Programmatic Advertising
                        </Link>
                      </li>
                      <li>
                        <Link to="/Lead-Generation-Services">
                          Lead Generation Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/Franchise-PPC-Marketing">Franchise PPC</Link>
                      </li>
                      <li>
                        <Link to="/Enterprise-PPC-Marketing">
                          Enterprise PPC
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/SocialMediaMarketing">
                      <i
                        className="fa-solid fa-hashtag"
                        style={{ color: "#000000" }}
                      />{" "}
                      Social Media Advertising
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/FacebookAdvertising">Facebook</Link>
                      </li>
                      <li>
                        <Link to="/InstagramMarketing">Instagram</Link>
                      </li>
                      <li>
                        <Link to="/TwitterAdvertising">Twitter</Link>
                      </li>
                      <li>
                        <Link to="/LinkedInMarketing">LinkedIn</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/App-development">
                      <i
                        className="fa-solid fa-mobile-screen-button"
                        style={{ color: "#000000" }}
                      />{" "}
                      App Development
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/iOSAppDevelopment">iOS App Development</Link>
                      </li>
                      <li>
                        <Link to="/AndroidAppDevelopment">
                          Android App Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/HybridAppDevelopment">
                          Hybrid App Development
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/WebDesignandDevelopment">
                      <i
                        className="fa-solid fa-globe"
                        style={{ color: "#000000" }}
                      />{" "}
                      Web Design &amp; Development
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/BrandingServices">Branding Services</Link>
                      </li>
                      <li>
                        <Link to="/CustomWebsiteDesign">
                          Custom Website Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/WordPressWebsiteDesign">
                          WordPress Website Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/WebsiteHosting">Website Hosting</Link>
                      </li>
                      <li>
                        <Link to="/ADAComplianceServices">
                          ADA Compliance Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/MediaProductionServices">
                      <i
                        className="fa-solid fa-camera"
                        style={{ color: "#000000" }}
                      />{" "}
                      Media Production
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/VideoProductionServices">
                          Video Production
                        </Link>
                      </li>
                      <li>
                        <Link to="/VideoTestimonialServices">
                          Video Testimonial Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/ProductPhotographyServices">
                          Product Photography Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/DroneVideoandPhotographyServices">
                          Drone Video &amp; Photography Service
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/ContentMarketing">
                      <i
                        className="fa-regular fa-file-lines"
                        style={{ color: "#000000" }}
                      />{" "}
                      Content Marketing
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/SEOContentWritingServices">
                          SEO Content Writing
                        </Link>
                      </li>
                      <li>
                        <Link to="/CopywritingServices">
                          Copywriting Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/TranslationServices">
                          Translation Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/EmailMarketingServices">
                          Email Marketing Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/OutboundMarketing">Outbound Marketing</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/eCommerceMarketing">
                      <i
                        className="fa-solid fa-cart-shopping"
                        style={{ color: "#000000" }}
                      />{" "}
                      eCommerce Marketing
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/eCommerceSEO">eCommerce SEO</Link>
                      </li>
                      <li>
                        <Link to="/eCommercePPC">eCommerce PPC</Link>
                      </li>
                      <li>
                        <Link to="/ShopifyWebDesign">Shopify Web Design</Link>
                      </li>
                      <li>
                        <Link to="/eCommerceWebsiteDesign">
                          eCommerce Web Design
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/online-marketplace-marketing">
                      <i
                        className="fa-solid fa-store"
                        style={{ color: "#000000" }}
                      />{" "}
                      Online Marketplace Marketing
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/amazon-seo">Amazon SEO</Link>
                      </li>
                      <li>
                        <Link to="/amazon-ppc">Amazon Advertising/PPC</Link>
                      </li>
                      <li>
                        <Link to="/amazon-storefront-branding">
                          Amazon Storefront &amp; Branding
                        </Link>
                      </li>
                      <li>
                        <Link to="/amazon-seller-consulting">
                          Amazon Seller Consulting
                        </Link>
                      </li>
                      <li>
                        <Link to="/amazon-post-management">
                          Amazon Posts Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/amazon-dsp-adversitment">
                          Amazon DSP Advertising Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/walmart-marketplace">
                          Walmart Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link to="/target-marketplace">
                          Target Plus Marketplace
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <Link id="header-sud-header" to="/LinkBuilding">
                      <i
                        className="fa-solid fa-link"
                        style={{ color: "#000000" }}
                      />{" "}
                      Link Building
                    </Link>
                    <ul className="header-sub-menu">
                      <li>
                        <Link to="/DigitalPROutreach">Digital PR Outreach</Link>
                      </li>
                      <li>
                        <Link to="/HAROLinkBuilding">HARO Link Building</Link>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link to="/" id="products-link">
                  Our Products{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    style={{ color: "#000000" }}
                  />
                </Link>
                <ul className="header-dropdown-menu" id="products-dropdown">
                  <li>
                    <Link to="/Products">CRM/ERP</Link>
                  </li>
                  <li>
                    <Link to="/Products">Who's Best</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/" id="trainings-link">
                  Trainings{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    style={{ color: "#000000" }}
                  />
                </Link>
                <ul className="header-dropdown-menu" id="trainings-dropdown">
                  <li>
                    <Link to="/iot">IOT Training</Link>
                  </li>
                  <li>
                    <Link to="/Robotics">Robotics Training</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/" id="insights-link">
                  Insights{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    style={{ color: "#000000" }}
                  />
                </Link>
                <ul className="header-dropdown-menu" id="header-insights-dropdown">
                  <li>
                    <Link to="/Blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/Events">Events</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Podcast">Podcasts</Link>
              </li>
              <li>
                <Link to="/contact" id="main-call-to-action">
                  Let's Connect
                </Link>
              </li>
            </ul>
          </nav>
          
        </div>
        <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
        <Link className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></Link>
      </button>

      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-menu-list">
          <li>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
          </li>
          <DropdownMenu
            title="What We Do"
            menuKey="whatWeDo"
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          >
            <Link to="/Digitalmarketing">Digital Marketing</Link>
            <Link to="/seo">SEO</Link>
            <Link to="/ppc">PPC Marketing</Link>
          </DropdownMenu>
          <DropdownMenu
            title="Our Products"
            menuKey="products"
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
          >
            <Link to="/crm-erp">CRM/ERP Solutions</Link>
            <Link to="/whos-best">Who's Best</Link>
          </DropdownMenu>
          <li>
            <Link to="/trainings">Trainings</Link>
          </li>
          <li>
            <Link to="/insights">Insights</Link>
          </li>
          <li>
            <Link to="/podcasts">Podcasts</Link>
          </li>
          <li>
            <Link to="/contact" id="main-call-to-action">
              Let's Connect
            </Link>
          </li>
        </ul>
      </nav>
      </header>
    </>
  );
}
function DropdownMenu({
  title,
  menuKey,
  activeDropdown,
  toggleDropdown,
  children,
}) {
  return (
    <li className="dropdown">
      <button className="menu-button" onClick={() => toggleDropdown(menuKey)}>
        {title}
        <Link className="fas fa-chevron-down"></Link>
      </button>
      {activeDropdown === menuKey && (
        <div className="dropdown-content">{children}</div>
      )}
    </li>
  );
}

export default Header;
