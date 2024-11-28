import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

export default function AboutSectionTwo() {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 md-mb-30px">
            <Fade triggerOnce delay={600} duration={600} cascade damping={0.1}>
              <div className="bg-dark-gray border-radius-100px fs-12 text-white ps-20px pe-20px d-inline-block text-uppercase fw-500 mb-5 ls-05px">
                Disha Scope
              </div>
              <h3 className="text-dark-gray fw-600 ls-minus-2px custom-font">
                DISHA provides cost-effective QHSE risk management..
              </h3>
              <p className="w-90 md-w-100">
                DISHA Industrial Solutions was established to provide highly
                cost-effective risk management solutions across a wide range of
                industries, with the aim of mitigating potential risks and
                avoiding unwanted events on our clients' premises and
                businesses. Disha helps to cultivate a positive and safe
                culture, tailored to our clients' specific needs, while offering
                high-quality risk management services and products that meet
                national and international standards. in order to foster a QHSE
                identity. Our services help clients enhance their reputation and
                fulfill QHSE commitments to stakeholders.
              </p>
              <a
                href="services.html"
                className="btn btn-large btn-expand-ltr text-dark-gray btn-rounded fw-700"
              >
                <span className="bg-base-color"></span>See what we do
              </a>
            </Fade>
          </div>
          <div className="col-xl-6 col-lg-7 offset-xl-1">
            <div className="row row-cols-auto row-cols-sm-2">
              <Slide
                triggerOnce
                direction="right"
                duration={1500}
                cascade
                damping={0.1}
              >
                <div className="col align-self-start">
                  <div className="feature-box text-start ps-30px">
                    <div className="feature-box-icon position-absolute left-0px top-10px">
                      {/* <h1 className="fs-85 text-outline text-outline-width-1px text-outline-color-dark-gray fw-700 ls-minus-1px opacity-2 mb-0">
                        01
                      </h1> */}
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin pt-25 md-pt-17 sm-pt-40px">
                      <span className="text-dark-gray fs-19 d-inline-block fw-600 mb-5px custom-font">
                        HSE equipments
                      </span>
                      <p>
                        We provide tailored cost-benefit analyses that align
                        with each client's business scope to help them acquire
                        QHSE equipment that complies with national and
                        international standards.
                      </p>
                      <span className="w-40px h-3px bg-base-color d-inline-block"></span>
                    </div>
                  </div>
                </div>
                <div className="col align-self-end mt-20 xs-mt-15px">
                  <div className="feature-box text-start ps-30px">
                    <div className="feature-box-icon position-absolute left-0px top-10px">
                      {/* <h1 className="fs-85 text-outline text-outline-width-1px text-outline-color-dark-gray fw-700 ls-minus-1px opacity-2 mb-0">
                        02
                      </h1> */}
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin pt-25 md-pt-17 sm-pt-40px">
                      <span className="text-dark-gray fs-19 d-inline-block fw-600 mb-5px custom-font">
                        Risk Management Support and Bring QHSE Identity Service
                      </span>
                      <p>
                        We foster and establish a QHSE culture that enhances
                        best practices to improve client reputation and
                        profitability while utilizing, Disha risk management
                        services.
                      </p>
                      <span className="w-40px h-3px bg-base-color d-inline-block"></span>
                    </div>
                  </div>
                </div>
                <div className="col align-self-start mt-minus-12 xs-mt-15px">
                  <div className="feature-box text-start ps-30px">
                    <div className="feature-box-icon position-absolute left-0px top-10px">
                      {/* <h1 className="fs-85 text-outline text-outline-width-1px text-outline-color-dark-gray fw-700 ls-minus-1px opacity-2 mb-0">
                        03
                      </h1> */}
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin pt-25 md-pt-17 sm-pt-40px">
                      <span className="text-dark-gray fs-19 d-inline-block fw-600 mb-5px custom-font">
                        Education and placement
                      </span>
                      <p>
                        We guarantee the competency of our sound services and
                        offer placement assistance that is relevant to the QHSE
                        sector.
                      </p>
                      <span className="w-40px h-3px bg-base-color d-inline-block"></span>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
