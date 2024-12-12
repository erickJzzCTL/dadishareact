import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function HomeSectionFour() {
  return (
    <section className="p-0">
      <div className="container">
        <div
          className="row row-cols-1 row-cols-lg-3 row-cols-md-2 m-0 justify-content-center"
          data-anime='{ "el": "childs", "translateY": [40, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          {/* start process step item */}
          <div className="col process-step-style-10 ps-5 pe-5 pt-3 pb-3 sm-mb-20px position-relative hover-box">
            <div className="process-step-icon-box position-absolute top-minus-15px left-25px md-left-0px">
              {/* <div className="number d-inline-block fs-90 fw-700 text-outline text-outline-color-extra-medium-gray">
                01
              </div> */}
            </div>
            <span className="fs-19 fw-600 text-dark-gray mb-5px d-block position-relative custom-font">
              QHSE equipments
            </span>
            <div className="position-relative pb-60px last-paragraph-no-margin">
              <p className="lh-30 w-90 sm-w-100">
                We provide QHSE equipment that is tailored to our clients' scope
                of work. DISHA offers assistance to meet client needs after a
                cost-benefit analysis.
              </p>
              <a
                href="services.html"
                className="hover-content d-flex justify-content-center align-items-center icon-box w-45px h-45px rounded-circle bg-base-color border-2"
              >
                <IoIosArrowRoundForward className="text-dark-gray" />
              </a>
            </div>
          </div>
          {/* end process step item */}
          {/* start process step item */}
          <div className="col process-step-style-10 ps-5 pe-5 mt-3 pb-3 sm-mb-20px position-relative  md-mt-0 hover-box">
            <div className="process-step-icon-box position-absolute top-minus-15px left-25px md-left-0px">
              {/* <div className="number d-inline-block fs-90 fw-700 text-outline text-outline-color-extra-medium-gray">
                02
              </div> */}
            </div>
            <span className="fs-19 fw-600 text-dark-gray mb-5px d-block position-relative custom-font">
              Risk Management Support and Bring QHSE Identity
            </span>
            <div className="position-relative pb-60px last-paragraph-no-margin">
              <p className="lh-30 w-90 sm-w-100">
                Develop a risk management system for organizations or industries
                to facilitate project execution.
              </p>
              <a
                href="services.html"
                className="hover-content d-flex justify-content-center align-items-center icon-box w-45px h-45px rounded-circle bg-base-color border-2"
              >
                <IoIosArrowRoundForward className="text-dark-gray" />
              </a>
            </div>
          </div>
          {/* end process step item */}
          {/* start process step item */}
          <div className="col process-step-style-10 ps-5 pe-5 pt-3 pb-3 sm-mb-20px position-relative hover-box">
            {/* <div className="process-step-icon-box position-absolute top-minus-15px left-25px md-left-0px">
              <div className="number d-inline-block fs-90 fw-700 text-outline text-outline-color-extra-medium-gray">
                03
              </div>
            </div> */}
            <span className="fs-19 fw-600 text-dark-gray mb-5px d-block position-relative custom-font">
              Education and placement
            </span>
            <div className="position-relative pb-60px last-paragraph-no-margin">
              <p className="lh-30 w-90 sm-w-100">
                We ensure the competence of our students in Sound and provide
                placement assistance relevant to the Quality, Health, Safety and
                Environment (QHSE) sectors
              </p>
              <a
                href="services.html"
                className="hover-content d-flex justify-content-center align-items-center icon-box w-45px h-45px rounded-circle bg-base-color border-2"
              >
                <IoIosArrowRoundForward className="text-dark-gray" />
              </a>
            </div>
          </div>
          {/* end process step item */}
        </div>
      </div>
    </section>
  );
}
