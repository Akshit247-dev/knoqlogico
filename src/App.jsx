import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './Components/NotFound';
import Home from './page/Home';
import Privacy_policy from './page/Privacy_policy';
import Terms_Conditions from './page/Terms_Conditions';
import Disclaimer from './page/Disclaimer';
import Blogs from './page/Blogs';
import Events from './page/Events';
import Refund_policy from './page/refund_policy';

import Contact from './page/Contact';

import Graphic_designing from './page/Graphic_designing';
// import Web_services from './page/web_services';
import Content_writing from './page/Content_writing';
import Video_editing from './page/Video_editing';


import FranchiseDigitalMarketing from './page/FranchiseDigitalMarketing';
import DigitalMarketingStrategyDevelopment from './page/DigitalMarketingStrategyDevelopment';
import Digitalmarketing from './page/Digitalmarketing';
import EnterpriseDigitalMarketing from './page/EnterpriseDigitalMarketing';

import Seooptimization from './page/seo_optimization';
import Local_seo from './page/Local_seo';
import Technical_seo from './page/Technical_seo';
import Franchise_seo from './page/Franchise_seo';
import Enterprise_seo from './page/Enterprise_seo';
import Generative_optimization from './page/Generative_optimization';
import Seo_audits from './page/seo_audits';
import Franchise_seo_audits from './page/Franchise_seo_audits';
import Enterprise_seo_audit from './page/Enterprise_seo_audit';

import ConversionRateOptimizationServices from './page/ConversionRateOptimizationServices';
import CROAudit from './page/CROAudit';
import UserExperienceTesting from './page/UserExperienceTesting';
import UserBehaviorAnalytics from './page/UserBehaviorAnalytics';

import PayPerClickMarketing from './page/PayPerClickMarketing';
import Search_Engine_Marketing from './page/Search_Engine_Marketing';
import Google_Ads_Management_Services from './page/Google_Ads_Management_Services';
import YouTube_Advertising_Services from './page/YouTube_Advertising_Services';
import Programmatic_Advertising from './page/Programmatic_Advertising';
import Lead_Generation_Services from './page/Lead_Generation_Services';
import Franchise_PPC_Marketing from './page/Franchise_PPC_Marketing';
import Enterprise_PPC_Marketing from './page/Enterprise_PPC_Marketing';

import SocialMediaMarketing from './page/SocialMediaMarketing';
import FacebookAdvertising from './page/FacebookAdvertising';
import InstagramMarketing from './page/InstagramMarketing';
import TwitterAdvertising from './page/TwitterAdvertising';
import LinkedInMarketing from './page/LinkedInMarketing';

import App_development from './page/App_development';
import IOSAppDevelopment from './page/iOSAppDevelopment';
import AndroidAppDevelopment from './page/AndroidAppDevelopment';
import HybridAppDevelopment from './page/HybridAppDevelopment';

import WebDesignandDevelopment from './page/WebDesignandDevelopment';
import BrandingServices from './page/BrandingServices';
import CustomWebsiteDesign from './page/CustomWebsiteDesign';
import WordPressWebsiteDesign from './page/WordPressWebsiteDesign';
import WebsiteHosting from './page/WebsiteHosting';
import ADAComplianceServices from './page/ADAComplianceServices';

import MediaProductionServices from './page/MediaProductionServices';
import VideoProductionServices from './page/VideoProductionServices';
import VideoTestimonialServices from './page/VideoTestimonialServices';
import ProductPhotographyServices from './page/ProductPhotographyServices';
import DroneVideoandPhotographyServices from './page/DroneVideoandPhotographyServices';

import ContentMarketing from './page/ContentMarketing';
import SEOContentWritingServices from './page/SEOContentWritingServices';
import CopywritingServices from './page/CopywritingServices';
import TranslationServices from './page/TranslationServices';
import EmailMarketingServices from './page/EmailMarketingServices';
import OutboundMarketing from './page/OutboundMarketing';

import ECommerceMarketing from './page/ECommerceMarketing';
import ECommerceSEO from './page/ECommerceSEO';
import ECommercePPC from './page/ECommercePPC';
import ShopifyWebDesign from './page/ShopifyWebDesign';
import ECommerceWebsiteDesign from './page/ECommerceWebsiteDesign';

import Online_marketplace_marketing from './page/Online_marketplace_marketing';
import Amazon_seo from './page/Amazon_seo';
import Amazon_ppc from './page/Amazon_ppc';
import Amazon_storefront_branding from './page/Amazon_storefront_branding';
import Amazon_seller_consulting from './page/Amazon_seller_consulting';
import Amazon_post_management from './page/Amazon_post_management';
import Amazon_dsp_adversitment from './page/Amazon_dsp_adversitment';
import Walmart_marketplace from './page/Walmart_marketplace';
import Target_marketplace from './page/Target_marketplace';
import LinkBuilding from './page/LinkBuilding';
import DigitalPROutreach from './page/DigitalPROutreach';
import HAROLinkBuilding from './page/HAROLinkBuilding';


import Products from './page/Products';

import Iot from './page/Iot';
import Robotics from './page/Robotics';

import Podcast from './page/Podcast';

function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacypolicy" element={<Privacy_policy />} />
        <Route path="/Terms&Conditions" element={<Terms_Conditions />} />
        <Route path="/Disclaimer" element={<Disclaimer  />} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/refund_policy" element={<Refund_policy/>} />

        <Route path="/Contact" element={<Contact/>} />

        <Route path="/Graphic-designing" element={<Graphic_designing/>} />
        {/* <Route path="/Web-services" element={<Web_services/>} /> */}
        <Route path="/Content-writing" element={<Content_writing/>} />
        <Route path="/Video-editing" element={<Video_editing/>} />
        


        <Route path="/Digitalmarketing"  element={<Digitalmarketing/>}/>
        <Route path="/FranchiseDigitalMarketing"  element={<FranchiseDigitalMarketing/>}/>
        <Route path="/DigitalMarketingStrategyDevelopment"  element={<DigitalMarketingStrategyDevelopment/>}/>
        <Route path="/EnterpriseDigitalMarketing"  element={<EnterpriseDigitalMarketing/>}/>

        <Route path="/Seo-optimization"  element={<Seooptimization/>}/>
        <Route path="/Local-seo"  element={<Local_seo/>}/>

        <Route path="/technical-seo"  element={<Technical_seo/>}/>
        <Route path="/franchise-seo"  element={<Franchise_seo/>}/>
        <Route path="/enterprise-seo"  element={<Enterprise_seo/>}/>
        <Route path="/generative-optimization"  element={<Generative_optimization/>}/>
        <Route path="/seo-audits"  element={<Seo_audits/>}/>
        <Route path="/franchise-seo-audits"  element={<Franchise_seo_audits/>}/>
        <Route path="/enterprise-seo-audit"  element={<Enterprise_seo_audit/>}/>
       
        <Route path="/ConversionRateOptimizationServices"  element={<ConversionRateOptimizationServices/>}/>
        <Route path="/CROAudit"  element={<CROAudit/>}/>
        <Route path="/UserExperienceTesting"  element={<UserExperienceTesting/>}/>
        <Route path="/UserBehaviorAnalytics"  element={<UserBehaviorAnalytics/>}/>

        <Route path="/PayPerClickMarketing"  element={<PayPerClickMarketing/>}/>
        <Route path="/Search-Engine-Marketing"  element={<Search_Engine_Marketing/>}/>
        <Route path="/Google-Ads-Management-Services"  element={<Google_Ads_Management_Services/>}/>

        <Route path="/YouTube-Advertising-Services"  element={<YouTube_Advertising_Services/>}/>
        <Route path="/Programmatic-Advertising"  element={<Programmatic_Advertising/>}/>
        <Route path="/Lead-Generation-Services"  element={<Lead_Generation_Services/>}/>
        <Route path="/Franchise-PPC-Marketing"  element={<Franchise_PPC_Marketing/>}/>
        <Route path="/Enterprise-PPC-Marketing"  element={<Enterprise_PPC_Marketing/>}/>
        
        <Route path="/SocialMediaMarketing"  element={<SocialMediaMarketing/>}/>
        <Route path="/FacebookAdvertising"  element={<FacebookAdvertising/>}/>
        <Route path="/InstagramMarketing"  element={<InstagramMarketing/>}/>
        <Route path="/TwitterAdvertising"  element={<TwitterAdvertising/>}/>
        <Route path="/LinkedInMarketing"  element={<LinkedInMarketing/>}/>


        <Route path="/App-development"  element={<App_development/>}/>
        <Route path="/iOSAppDevelopment"  element={<IOSAppDevelopment/>}/>
        <Route path="/AndroidAppDevelopment"  element={<AndroidAppDevelopment/>}/>
        <Route path="/HybridAppDevelopment"  element={<HybridAppDevelopment/>}/>

        <Route path="/WebDesignandDevelopment"  element={<WebDesignandDevelopment/>}/>
        <Route path="/BrandingServices"  element={<BrandingServices/>}/>
        <Route path="/CustomWebsiteDesign"  element={<CustomWebsiteDesign/>}/>
        <Route path="/WordPressWebsiteDesign"  element={<WordPressWebsiteDesign/>}/>
        <Route path="/WebsiteHosting"  element={<WebsiteHosting/>}/>
        <Route path="/ADAComplianceServices"  element={<ADAComplianceServices/>}/>

        <Route path="/MediaProductionServices"  element={<MediaProductionServices/>}/>
        <Route path="/VideoProductionServices"  element={<VideoProductionServices/>}/>
        <Route path="/VideoTestimonialServices"  element={<VideoTestimonialServices/>}/>
        <Route path="/ProductPhotographyServices"  element={<ProductPhotographyServices/>}/>
        <Route path="/DroneVideoandPhotographyServices"  element={<DroneVideoandPhotographyServices/>}/>

        <Route path="/ContentMarketing"  element={<ContentMarketing/>}/>
        <Route path="/SEOContentWritingServices"  element={<SEOContentWritingServices/>}/>
        <Route path="/CopywritingServices"  element={<CopywritingServices/>}/>
        <Route path="/TranslationServices"  element={<TranslationServices/>}/>
        <Route path="/EmailMarketingServices"  element={<EmailMarketingServices/>}/>
        <Route path="/OutboundMarketing"  element={<OutboundMarketing/>}/>

        <Route path="/eCommerceMarketing"  element={<ECommerceMarketing/>}/>
        <Route path="/eCommerceSEO"  element={<ECommerceSEO/>}/>
        <Route path="/eCommercePPC"  element={<ECommercePPC/>}/>
        <Route path="/ShopifyWebDesign"  element={<ShopifyWebDesign/>}/>
        <Route path="/eCommerceWebsiteDesign"  element={<ECommerceWebsiteDesign/>}/>


        <Route path="/online-marketplace-marketing"  element={<Online_marketplace_marketing/>}/>
        <Route path="/amazon-seo"  element={<Amazon_seo/>}/>
        <Route path="/amazon-ppc"  element={<Amazon_ppc/>}/>
        <Route path="/amazon-storefront-branding"  element={<Amazon_storefront_branding/>}/>
        <Route path="/amazon-seller-consulting"  element={<Amazon_seller_consulting/>}/>
        <Route path="/amazon-post-management"  element={<Amazon_post_management/>}/>
        <Route path="/amazon-dsp-adversitment"  element={<Amazon_dsp_adversitment/>}/>
        <Route path="/walmart-marketplace"  element={<Walmart_marketplace/>}/>
        <Route path="/target-marketplace"  element={<Target_marketplace/>}/>

        <Route path="/LinkBuilding"  element={<LinkBuilding/>}/>
        <Route path="/DigitalPROutreach"  element={<DigitalPROutreach/>}/>
        <Route path="/HAROLinkBuilding"  element={<HAROLinkBuilding/>}/>

         <Route path="/Products"  element={<Products/>}/>

          <Route path="/iot"  element={<Iot/>}/>
          <Route path="/Robotics"  element={<Robotics/>}/>

          <Route path="/Podcast"  element={<Podcast/>}/>



        {/* <Route path="/"  element={</>}/> */}

      </Routes>
    </Router>
  );
}

export default App;















// import { useState } from 'react';
// import './App.css';
// import Home from './page/Home';

// function App() {

//   return (
//     <>
//       <Home/>
//     </>
//   )
// }
// 
// export default App
