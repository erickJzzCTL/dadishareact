import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

export default function AboutSectionFour() {
  return (
    <section className="p-0">
      <div className="container">
        <Fade duration={800} delay={200} cascade damping={0.1}>
          <div className="row mb-6 sm-mb-40px">
            <div className="col-lg-6 md-mb-25px">
              <h3 className="mb-0 fw-600 text-dark-gray w-85 lg-w-100 ls-minus-2px custom-font">
                We believe that our competence and quality service can provide a
                safe working environment which is necessary to every industry's
                growth.
              </h3>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <p className="w-95 md-w-100">
                We have over 9 years of experience as QHSE Specialists and are
                committed to providing excellent service that positively impacts
                our clients.
              </p>
              {/* <a href="demo-web-agency-people.html"
                  className="btn btn-medium btn-expand-ltr text-dark-gray btn-rounded fw-700"><span
                      className="bg-base-color"></span>Meet the team</a> */}
            </div>
          </div>
        </Fade>

        <Slide direction="up" duration={800} delay={200}>
          <div className="row mb-2">
            <div className="col-12 text-center">
              <div className="text-dark-gray fs-20 ls-minus-05px">
                Our competent team is ready to help. Let's improve your{' '}
                <span className="fw-700">QHSE </span> implementation strategy
                with Disha's assistance.{' '}
                <a
                  href="contact.html"
                  className="text-dark-gray text-dark-gray-hover fw-600 text-decoration-line-bottom"
                >
                  Contact us now
                </a>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
