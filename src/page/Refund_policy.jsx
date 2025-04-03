import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "./Refund_policy.css"
import { Link } from "react-router-dom";

function refund_policy() {
  return (
    <>
    <Header/>
    <section className="refund-page-wrapper">
  <div className="refund-content-box">
    <h1 className="refund-title">Refund Policy</h1>
    <p className="refund-intro">
      At <strong>Knoqlogico</strong>, customer satisfaction is our top priority.
      We understand that sometimes circumstances change, and you may need to
      request a refund. Below, you'll find our clear and straightforward refund
      policy to ensure transparency and trust.
    </p>
    <div className="refund-section refund-eligibility">
      <h2 className="refund-heading">1. Refund Eligibility</h2>
      <ul className="refund-list">
        <li>
          <strong>Product/Service Issues:</strong> If the product or service you
          received is not as described or doesn't meet the agreed-upon
          standards.
        </li>
        <li>
          <strong>Cancellation Before Delivery:</strong> If you cancel the
          service or order before it has been delivered or completed.
        </li>
        <li>
          <strong>Technical Issues:</strong> If there are any technical failures
          in service delivery due to our fault (e.g., site crashes, unresponsive
          features, etc.).
        </li>
      </ul>
    </div>
    <div className="refund-section refund-non-eligibility">
      <h2 className="refund-heading">2. Non-Refundable Conditions</h2>
      <ul className="refund-list">
        <li>
          <strong>Change of Mind:</strong> If you simply change your mind about
          the service or product.
        </li>
        <li>
          <strong>Completed Work:</strong> If the service or product has already
          been delivered, implemented, or completed according to the agreed
          terms.
        </li>
        <li>
          <strong>Late Request:</strong> If a refund request is made after a
          specific time period (usually within 7-14 days of purchase or service
          delivery).
        </li>
        <li>
          <strong>User Error:</strong> If the issues are due to user error or
          negligence on the customer's part (e.g., failing to follow
          instructions or misuse of the product).
        </li>
      </ul>
    </div>
    <div className="refund-section refund-process">
      <h2 className="refund-heading">3. Refund Process</h2>
      <p className="refund-paragraph">
        If you believe you are eligible for a refund, please follow these steps:
      </p>
      <ol className="refund-ordered-list">
        <li>
          <strong>Submit a Request:</strong> Contact our customer support team
          at{" "}
          <a
            href="mailto:connect@knoqlogico.com"
            style={{ color: "#2200ff", textDecoration: "underline" }}
          >
            connect@knoqlogico.com
          </a>{" "}
          or via our contact form on the website.
        </li>
        <li>
          <strong>Provide Necessary Information:</strong> Include your order
          number, details of the service/product, and the reason for your refund
          request.
        </li>
        <li>
          <strong>Review Period:</strong> Once we receive your refund request,
          our team will review the situation. This can take up to 7 business
          days.
        </li>
        <li>
          <strong>Refund Decision:</strong> After review, we will notify you of
          the decision. If eligible, we will process the refund within 14
          business days.
        </li>
      </ol>
    </div>
    <div className="refund-section refund-method">
      <h2 className="refund-heading">4. Refund Method</h2>
      <p className="refund-paragraph">
        Refunds will be processed using the same payment method that was
        originally used for the purchase. If a refund is issued, the amount will
        be credited to your account, minus any applicable transaction fees.
      </p>
    </div>
    <div className="refund-section refund-contact">
      <h2 className="refund-heading">5. Contact Us</h2>
      <p className="refund-paragraph">
        If you have any questions or concerns about our refund policy, please
        feel free to reach out:
      </p>
      <ul className="refund-list">
        <li>
          Email:{" "}
          <a
            href="mailto:connect@knoqlogico.com"
            style={{ color: "#2200ff", textDecoration: "underline" }}
          >
            connect@knoqlogico.com
          </a>
        </li>
        <li>
          Phone:{" "}
          <a
            href="tel:+917351056005"
            target="_blank"
            style={{ color: "#2200ff", textDecoration: "underline" }}
          >
            {" "}
            +91 735 105 6005
          </a>
        </li>
        <li>Address: Bhauwala, Dehradun, Uttarakhand, 248007</li>
      </ul>
    </div>
  </div>
</section>

<Footer/>
    </>
  )
}

export default refund_policy