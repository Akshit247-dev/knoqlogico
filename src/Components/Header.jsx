import React from "react";
import './Both.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  return (
    <>
      <header className="header-header">
        <div className="header-header-container">
          <div className="header-logo-container">
            <a href="/" className="header-logo-home-link">
              <img src="/knoq_logo.png" alt="Knoqlogico" />
            </a>
          </div>
          <nav className="header-navbar">
            <ul className="header-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#" id="header-services-link">
                  What We Do{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    style={{ color: "#000000" }}
                  />
                </a>
                <ul className="header-dropdown-menu" id="header-services-dropdown">
                  <div className="header-column-one">
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="/digital_marketing">
                        <i
                          className="fa-solid fa-bullhorn"
                          style={{ color: "#000000" }}
                        />{" "}
                        Digital Marketing
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="/digi">
                            Digital Marketing Strategy Development
                          </a>
                        </li>
                        <li>
                          <a href="FranchiseDigitalMarketing.html">
                            Franchise Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="EnterpriseDigitalMarketing.html">
                            Enterprise Digital Marketing
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="seo_ptimization.html">
                        <i
                          className="fa-brands fa-searchengin"
                          style={{ color: "#000000" }}
                        />{" "}
                        Search Engine Optimization (SEO)
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="local-seo.html">Local SEO</a>
                        </li>
                        <li>
                          <a href="technical-seo.html">Technical SEO</a>
                        </li>
                        <li>
                          <a href="franchise-seo.html">Franchise SEO</a>
                        </li>
                        <li>
                          <a href="enterprise-seo.html">Enterprise SEO</a>
                        </li>
                        <li>
                          <a href="generative-optimization.html">
                            Generative Engine Optimization
                          </a>
                        </li>
                        <li>
                          <a href="seo-audits.html">SEO Audits</a>
                        </li>
                        <li>
                          <a href="franchise-seo-audits.html">
                            Franchise SEO Audit
                          </a>
                        </li>
                        <li>
                          <a href="enterprise-seo-audit.html">
                            Enterprise SEO Audit
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <a
                        id="header-sud-header"
                        href="ConversionRateOptimizationServices.html"
                      >
                        <i
                          className="fa-solid fa-filter"
                          style={{ color: "#000000" }}
                        />{" "}
                        CRO Services
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="CROAudit.html">CRO Audits</a>
                        </li>
                        <li>
                          <a href="UserExperienceTesting.html">
                            User Experience Testing
                          </a>
                        </li>
                        <li>
                          <a href="UserBehaviorAnalytics.html">
                            User Behavior Analytics
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="header-column-two">
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="PayPerClickMarketing.html">
                        <i
                          className="fa-solid fa-arrow-pointer"
                          style={{ color: "#000000" }}
                        />{" "}
                        Pay Per Click (PPC) Marketing
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="Search-Engine-Marketing.html">
                            Search Engine Marketing (SEM)
                          </a>
                        </li>
                        <li>
                          <a href="Google-Ads-Management-Services.html">
                            Google Ads Management
                          </a>
                        </li>
                        <li>
                          <a href="YouTube-Advertising-Services.html">
                            YouTube Ads Management
                          </a>
                        </li>
                        <li>
                          <a href="Programmatic-Advertising.html">
                            Programmatic Advertising
                          </a>
                        </li>
                        <li>
                          <a href="Lead-Generation-Services.html">
                            Lead Generation Services
                          </a>
                        </li>
                        <li>
                          <a href="Franchise-PPC-Marketing.html">
                            Franchise PPC
                          </a>
                        </li>
                        <li>
                          <a href="Enterprise-PPC-Marketing.html">
                            Enterprise PPC
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="SocialMediaMarketing.html">
                        <i
                          className="fa-solid fa-hashtag"
                          style={{ color: "#000000" }}
                        />{" "}
                        Social Media Advertising
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="FacebookAdvertising.html">Facebook</a>
                        </li>
                        <li>
                          <a href="InstagramMarketing.html">Instagram</a>
                        </li>
                        <li>
                          <a href="TwitterAdvertising.html">Twitter</a>
                        </li>
                        <li>
                          <a href="LinkedInMarketing.html">LinkedIn</a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="App-development.html">
                        <i
                          className="fa-solid fa-mobile-screen-button"
                          style={{ color: "#000000" }}
                        />{" "}
                        App Development
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="iOSAppDevelopment.html">
                            iOS App Development
                          </a>
                        </li>
                        <li>
                          <a href="AndroidAppDevelopment.html">
                            Android App Development
                          </a>
                        </li>
                        <li>
                          <a href="HybridAppDevelopment.html">
                            Hybrid App Development
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="header-column-three">
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="WebDesignandDevelopment.html">
                        <i
                          className="fa-solid fa-globe"
                          style={{ color: "#000000" }}
                        />{" "}
                        Web Design &amp; Development
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="BrandingServices.html">Branding Services</a>
                        </li>
                        <li>
                          <a href="CustomWebsiteDesign.html">
                            Custom Website Design
                          </a>
                        </li>
                        <li>
                          <a href="WordPressWebsiteDesign.html">
                            WordPress Website Design
                          </a>
                        </li>
                        <li>
                          <a href="WebsiteHosting.html">Website Hosting</a>
                        </li>
                        <li>
                          <a href="ADAComplianceServices.html">
                            ADA Compliance Services
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="MediaProductionServices.html">
                        <i
                          className="fa-solid fa-camera"
                          style={{ color: "#000000" }}
                        />{" "}
                        Media Production
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="VideoProductionServices.html">
                            Video Production
                          </a>
                        </li>
                        <li>
                          <a href="VideoTestimonialServices.html">
                            Video Testimonial Services
                          </a>
                        </li>
                        <li>
                          <a href="ProductPhotographyServices.html">
                            Product Photography Services
                          </a>
                        </li>
                        <li>
                          <a href="DroneVideoandPhotographyServices.html">
                            Drone Video &amp; Photography Service
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="ContentMarketing.html">
                        <i
                          className="fa-regular fa-file-lines"
                          style={{ color: "#000000" }}
                        />{" "}
                        Content Marketing
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="SEOContentWritingServices.html">
                            SEO Content Writing
                          </a>
                        </li>
                        <li>
                          <a href="CopywritingServices.html">
                            Copywriting Services
                          </a>
                        </li>
                        <li>
                          <a href="TranslationServices.html">
                            Translation Services
                          </a>
                        </li>
                        <li>
                          <a href="EmailMarketingServices.html">
                            Email Marketing Services
                          </a>
                        </li>
                        <li>
                          <a href="OutboundMarketing.html">
                            Outbound Marketing
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="header-column-four">
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="eCommerceMarketing.html">
                        <i
                          className="fa-solid fa-cart-shopping"
                          style={{ color: "#000000" }}
                        />{" "}
                        eCommerce Marketing
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="eCommerceSEO.html">eCommerce SEO</a>
                        </li>
                        <li>
                          <a href="eCommercePPC.html">eCommerce PPC</a>
                        </li>
                        <li>
                          <a href="ShopifyWebDesign.html">Shopify Web Design</a>
                        </li>
                        <li>
                          <a href="eCommerceWebsiteDesign.html">
                            eCommerce Web Design
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <a
                        id="header-sud-header"
                        href="online-marketplace-marketing.html"
                      >
                        <i
                          className="fa-solid fa-store"
                          style={{ color: "#000000" }}
                        />{" "}
                        Online Marketplace Marketing
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="amazon-seo.html">Amazon SEO</a>
                        </li>
                        <li>
                          <a href="amazon-ppc.html">Amazon Advertising/PPC</a>
                        </li>
                        <li>
                          <a href="amazon-storefront-branding.html">
                            Amazon Storefront &amp; Branding
                          </a>
                        </li>
                        <li>
                          <a href="amazon-seller-consulting.html">
                            Amazon Seller Consulting
                          </a>
                        </li>
                        <li>
                          <a href="amazon-post-management.html">
                            Amazon Posts Management
                          </a>
                        </li>
                        <li>
                          <a href="amazon-dsp-adversitment.html">
                            Amazon DSP Advertising Management
                          </a>
                        </li>
                        <li>
                          <a href="walmart-marketplace.html">
                            Walmart Marketplace
                          </a>
                        </li>
                        <li>
                          <a href="target-marketplace.html">
                            Target Plus Marketplace
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-inner-dropdown-mobile-view">
                      <a id="header-sud-header" href="LinkBuilding.html">
                        <i
                          className="fa-solid fa-link"
                          style={{ color: "#000000" }}
                        />{" "}
                        Link Building
                      </a>
                      <ul className="header-sub-menu">
                        <li>
                          <a href="DigitalPROutreach.html">
                            Digital PR Outreach
                          </a>
                        </li>
                        <li>
                          <a href="HAROLinkBuilding.html">HARO Link Building</a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
                <ul
                  className="header-dropdown-menu-mobile-view"
                  id="header-services-dropdown"
                >
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="sud-header" href="digital-marketing.html">
                      <i
                        className="fa-solid fa-bullhorn"
                        style={{ color: "#000000" }}
                      />{" "}
                      Digital Marketing
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="digital-marketing-strategy-development.html">
                          Digital Marketing Strategy Development
                        </a>
                      </li>
                      <li>
                        <a href="FranchiseDigitalMarketing.html">
                          Franchise Digital Marketing
                        </a>
                      </li>
                      <li>
                        <a href="EnterpriseDigitalMarketing.html">
                          Enterprise Digital Marketing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="seo_ptimization.html">
                      <i
                        className="fa-brands fa-searchengin"
                        style={{ color: "#000000" }}
                      />{" "}
                      Search Engine Optimization (SEO)
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="local-seo.html">Local SEO</a>
                      </li>
                      <li>
                        <a href="technical-seo.html">Technical SEO</a>
                      </li>
                      <li>
                        <a href="franchise-seo.html">Franchise SEO</a>
                      </li>
                      <li>
                        <a href="enterprise-seo.html">Enterprise SEO</a>
                      </li>
                      <li>
                        <a href="generative-optimization.html">
                          Generative Engine Optimization
                        </a>
                      </li>
                      <li>
                        <a href="seo-audits.html">SEO Audits</a>
                      </li>
                      <li>
                        <a href="franchise-seo-audits.html">
                          Franchise SEO Audit
                        </a>
                      </li>
                      <li>
                        <a href="enterprise-seo-audit.html">
                          Enterprise SEO Audit
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a
                      id="header-sud-header"
                      href="ConversionRateOptimizationServices.html"
                    >
                      <i
                        className="fa-solid fa-filter"
                        style={{ color: "#000000" }}
                      />{" "}
                      CRO Services
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="CROAudit.html">CRO Audits</a>
                      </li>
                      <li>
                        <a href="UserExperienceTesting.html">
                          User Experience Testing
                        </a>
                      </li>
                      <li>
                        <a href="UserBehaviorAnalytics.html">
                          User Behavior Analytics
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="PayPerClickMarketing.html">
                      <i
                        className="fa-solid fa-arrow-pointer"
                        style={{ color: "#000000" }}
                      />{" "}
                      Pay Per Click (PPC) Marketing
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="Search-Engine-Marketing.html">
                          Search Engine Marketing (SEM)
                        </a>
                      </li>
                      <li>
                        <a href="Google-Ads-Management-Services.html">
                          Google Ads Management
                        </a>
                      </li>
                      <li>
                        <a href="YouTube-Advertising-Services.html">
                          YouTube Ads Management
                        </a>
                      </li>
                      <li>
                        <a href="Programmatic-Advertising.html">
                          Programmatic Advertising
                        </a>
                      </li>
                      <li>
                        <a href="Lead-Generation-Services.html">
                          Lead Generation Services
                        </a>
                      </li>
                      <li>
                        <a href="Franchise-PPC-Marketing.html">Franchise PPC</a>
                      </li>
                      <li>
                        <a href="Enterprise-PPC-Marketing.html">
                          Enterprise PPC
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="SocialMediaMarketing.html">
                      <i
                        className="fa-solid fa-hashtag"
                        style={{ color: "#000000" }}
                      />{" "}
                      Social Media Advertising
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="FacebookAdvertising.html">Facebook</a>
                      </li>
                      <li>
                        <a href="InstagramMarketing.html">Instagram</a>
                      </li>
                      <li>
                        <a href="TwitterAdvertising.html">Twitter</a>
                      </li>
                      <li>
                        <a href="LinkedInMarketing.html">LinkedIn</a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="App-development.html">
                      <i
                        className="fa-solid fa-mobile-screen-button"
                        style={{ color: "#000000" }}
                      />{" "}
                      App Development
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="iOSAppDevelopment.html">iOS App Development</a>
                      </li>
                      <li>
                        <a href="AndroidAppDevelopment.html">
                          Android App Development
                        </a>
                      </li>
                      <li>
                        <a href="HybridAppDevelopment.html">
                          Hybrid App Development
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="WebDesignandDevelopment.html">
                      <i
                        className="fa-solid fa-globe"
                        style={{ color: "#000000" }}
                      />{" "}
                      Web Design &amp; Development
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="BrandingServices.html">Branding Services</a>
                      </li>
                      <li>
                        <a href="CustomWebsiteDesign.html">
                          Custom Website Design
                        </a>
                      </li>
                      <li>
                        <a href="WordPressWebsiteDesign.html">
                          WordPress Website Design
                        </a>
                      </li>
                      <li>
                        <a href="WebsiteHosting.html">Website Hosting</a>
                      </li>
                      <li>
                        <a href="ADAComplianceServices.html">
                          ADA Compliance Services
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="MediaProductionServices.html">
                      <i
                        className="fa-solid fa-camera"
                        style={{ color: "#000000" }}
                      />{" "}
                      Media Production
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="VideoProductionServices.html">
                          Video Production
                        </a>
                      </li>
                      <li>
                        <a href="VideoTestimonialServices.html">
                          Video Testimonial Services
                        </a>
                      </li>
                      <li>
                        <a href="ProductPhotographyServices.html">
                          Product Photography Services
                        </a>
                      </li>
                      <li>
                        <a href="DroneVideoandPhotographyServices.html">
                          Drone Video &amp; Photography Service
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="ContentMarketing.html">
                      <i
                        className="fa-regular fa-file-lines"
                        style={{ color: "#000000" }}
                      />{" "}
                      Content Marketing
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="SEOContentWritingServices.html">
                          SEO Content Writing
                        </a>
                      </li>
                      <li>
                        <a href="CopywritingServices.html">
                          Copywriting Services
                        </a>
                      </li>
                      <li>
                        <a href="TranslationServices.html">
                          Translation Services
                        </a>
                      </li>
                      <li>
                        <a href="EmailMarketingServices.html">
                          Email Marketing Services
                        </a>
                      </li>
                      <li>
                        <a href="OutboundMarketing.html">Outbound Marketing</a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="eCommerceMarketing.html">
                      <i
                        className="fa-solid fa-cart-shopping"
                        style={{ color: "#000000" }}
                      />{" "}
                      eCommerce Marketing
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="eCommerceSEO.html">eCommerce SEO</a>
                      </li>
                      <li>
                        <a href="eCommercePPC.html">eCommerce PPC</a>
                      </li>
                      <li>
                        <a href="ShopifyWebDesign.html">Shopify Web Design</a>
                      </li>
                      <li>
                        <a href="eCommerceWebsiteDesign.html">
                          eCommerce Web Design
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="online-marketplace-marketing.html">
                      <i
                        className="fa-solid fa-store"
                        style={{ color: "#000000" }}
                      />{" "}
                      Online Marketplace Marketing
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="amazon-seo.html">Amazon SEO</a>
                      </li>
                      <li>
                        <a href="amazon-ppc.html">Amazon Advertising/PPC</a>
                      </li>
                      <li>
                        <a href="amazon-storefront-branding.html">
                          Amazon Storefront &amp; Branding
                        </a>
                      </li>
                      <li>
                        <a href="amazon-seller-consulting.html">
                          Amazon Seller Consulting
                        </a>
                      </li>
                      <li>
                        <a href="amazon-post-management.html">
                          Amazon Posts Management
                        </a>
                      </li>
                      <li>
                        <a href="amazon-dsp-adversitment.html">
                          Amazon DSP Advertising Management
                        </a>
                      </li>
                      <li>
                        <a href="walmart-marketplace.html">
                          Walmart Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="target-marketplace.html">
                          Target Plus Marketplace
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header-inner-dropdown-mobile-view">
                    <a id="header-sud-header" href="LinkBuilding.html">
                      <i
                        className="fa-solid fa-link"
                        style={{ color: "#000000" }}
                      />{" "}
                      Link Building
                    </a>
                    <ul className="header-sub-menu">
                      <li>
                        <a href="DigitalPROutreach.html">Digital PR Outreach</a>
                      </li>
                      <li>
                        <a href="HAROLinkBuilding.html">HARO Link Building</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="Products.html" id="products-link">
                  Our Products{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    style={{ color: "#000000" }}
                  />
                </a>
                <ul className="header-dropdown-menu" id="products-dropdown">
                  <li>
                    <a href="Products.html">CRM/ERP</a>
                  </li>
                  <li>
                    <a href="Products.html">Who's Best</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="Training.html" id="trainings-link">
                  Trainings{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    style={{ color: "#000000" }}
                  />
                </a>
                <ul className="header-dropdown-menu" id="trainings-dropdown">
                  <li>
                    <a href="iot.html">IOT Training</a>
                  </li>
                  <li>
                    <a href="Robotics.html">Robotics Training</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" id="header-insights-link">
                  Insights{" "}
                  <i
                    className="fa-solid fa-angle-down"
                    style={{ color: "#000000" }}
                  />
                </a>
                <ul className="header-dropdown-menu" id="header-insights-dropdown">
                  <li>
                    <a href="/Blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/Events">Events</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="Podcast.html">Podcasts</a>
              </li>
              <li>
                <a href="contact.html" id="main-call-to-action">
                  Let's Connect
                </a>
              </li>
            </ul>
            <div className="header-hamburger-menu">
              <i className="fas fa-bars" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
