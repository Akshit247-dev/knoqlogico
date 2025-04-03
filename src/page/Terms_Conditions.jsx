import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "./Terms_Conditions.css";


function Terms_Conditions() {
  return (
    <>
    <Header/>
    <>
  {/* Breadcrumbs */}
  <div className="breadcrumbs">
    <div className="container">
      <h2>Terms &amp; Conditions</h2>
      <ul className="bread-list">
        <li>Home</li>
        <li>&gt;</li>
        <li>Terms &amp; Conditions</li>
      </ul>
    </div>
  </div>
  {/* End Breadcrumbs */}
  <div className="terms-container">
    <div className="terms-header">
      <h1>Terms and Conditions</h1>
      {/* <div class="underline"></div> */}
    </div>
    <div className="terms-section">
      <div className="welcome-text">Welcome to Knoqlogico!</div>
      <p>
        These terms and conditions outline the rules and regulations for the use
        of Knoqlogico IT Solutions Pvt Ltd's Website, located at{" "}
        <a href="https://www.knoqlogico.com">https://www.knoqlogico.com</a>
      </p>
      <p>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Knoqlogico if you do not agree to
        take all of the terms and conditions stated on this page.
      </p>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person log on this website and compliant to
        the Company's terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client's needs in respect of
        provision of the Company's stated services, in accordance with and
        subject to, prevailing law of in. Any use of the above terminology or
        other words in the singular, plural, capitalization and/or he/she or
        they, are taken as interchangeable and therefore as referring to same.
      </p>
    </div>
    <div className="terms-section">
      <h2>Cookies</h2>
      <p>
        All the information on this website –{" "}
        <a href="https://www.knoqlogico.com">https://www.knoqlogico.com</a> – is
        published in good faith and for general information purposes only. We do
        not make any warranties about the completeness, reliability, or accuracy
        of this information. Any action you take upon the information you find
        on this website is strictly at your own risk. We will not be liable for
        any losses and/or damages in connection with the use of our website.
      </p>
      <p>
        From our website, you can visit other websites by following hyperlinks
        to external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone 'bad'.
      </p>
      <p>
        Please be aware that when you leave our website, other sites may have
        different privacy policies and terms which are beyond our control.
        Please check the Privacy Policies of these sites and their "Terms of
        Service" before engaging in any business or uploading any information.
      </p>
    </div>
    <div className="terms-section">
      <h2>License</h2>
      <p>
        Unless otherwise stated, Knoqlogico IT Solutions Pvt Ltd and/or its
        licensors own the intellectual property rights for all material on
        Knoqlogico. All intellectual property rights are reserved. You may
        access this from Knoqlogico for your own personal use subjected to
        restrictions set in these terms and conditions.
      </p>
    </div>
    <div className="terms-section">
      <h2>Update</h2>
      <p>
        Should we update, amend, or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </div>
  </div>
</>

    <Footer/>
    </>
  )
}

export default Terms_Conditions