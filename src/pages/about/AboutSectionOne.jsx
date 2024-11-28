import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Fade, Slide } from 'react-awesome-reveal';

export default function AboutSectionOne() {
  return (
    <section className="p-0 top-space-margin page-title-center-alignment">
      <div className="container">
        <div className="row align-items-center justify-content-center extra-very-small-screen">
          <div className="col-xl-8 col-lg-10 text-center position-relative page-title-extra-large">
            <Fade>
              <h1 className="fw-700 text-dark-gray mb-20px ls-minus-2px custom-font">
                Disha Industrial Solutions
              </h1>
            </Fade>
            <Slide direction="down">
              <h2 className="fw-400 ls-0px mb-0">
                Empower your organisation's QHSE identity and discover the
                Sounds Synergy working environment.
              </h2>
            </Slide>
          </div>
        </div>
        <div className="row mb-7 mt-7">
          <Fade>
            <div className="col-lg-12 md-mb-10px">
              <div className="icon-with-text-style-08 mb-25px">
                <div className="feature-box feature-box-left-icon-middle">
                  <div className="bg-base-color text-dark-gray border-radius-30px ps-20px pe-20px fs-16 ls-minus-2px d-flex py-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="feature-box-content">
                    <span className="m-10px d-inline-block fs-15 lh-24 fw-700 text-dark-gray text-uppercase text-decoration-line-bottom">
                      5 star rating
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-dark-gray fw-600 ls-minus-2px custom-font">
                We're your QHSE Guardians.
              </h3>
            </div>
          </Fade>
          <div className="spacer20"></div>
          <div className="col-lg-6">
            <div className="row">
              <div className="fs-19 fw-600 text-dark-gray custom-font">
                Our vision
              </div>
              <p>
                <li>
                  DISHA aims to become a global leader in providing high-quality
                  industrial solutions for health, safety, and the environment.
                  Our goal is to establish a QHSE Eco-System that caters to all
                  industries, promoting excellence and simplicity in the
                  delivery of quality, health, safety, and environmental
                  products and services.
                </li>
                <div className="spacer20"></div>
                <li>
                  DISHA is committed to offering cost-effective solutions to our
                  valued customers and supporting them in improving a positive
                  culture within the organization. The DISHA QHSE culture
                  identity mark stands as a powerful representation of an
                  employer's dedication and strong commitment to fostering a
                  synergistic safe working environment.
                </li>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="fs-19 fw-600 text-dark-gray custom-font">
                Our mission
              </div>
              <p>
                <li>
                  DISHA is dedicated to empowering our clients' confidence in
                  quality, health, safety, and the environment (QHSE), fostering
                  a synergistic working environment within their organizations
                  or areas of operation across various industries. We are
                  committed to safeguarding and continually cost-effectively
                  enhancing our clients' reputations.
                </li>
                <div className="spacer20"></div>
                <li>
                  The DISHA Eco-System provides support to ensure our clients
                  meet their legal, moral, and QHSE obligations at national and
                  international levels, aligning with their top management
                  interests. Ultimately, our services confidently promote
                  economic prosperity and ensure a safe working environment,
                  delivering substantial benefits to satisfy all client
                  stakeholders.
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
