import React from 'react';

export default function AboutSectionFive() {
  return (
    <section className="pb-4 sm-pt-30px sm-pb-40px overflow-hidden position-relative">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 text-center text-sm-start">
            <div className="outside-box-left-10 xl-outside-box-left-0 sm-outside-box-left-0">
              <div className="fs-250 xl-fs-200 lg-fs-200 md-fs-170 sm-fs-100 text-dark-gray fw-600 ls-minus-20px word-break-normal">
                work
              </div>
            </div>
          </div>
          <div className="col-sm-7 text-center text-sm-end">
            <div className="outside-box-right-5 sm-outside-box-right-0">
              <div className="fs-250 xl-fs-200 lg-fs-200 md-fs-170 sm-fs-100 text-base-color fw-600 ls-minus-20px position-relative d-inline-block word-break-normal">
                together
                <div
                  className="position-absolute left-minus-140px top-minus-140px z-index-9 xl-left-minus-110px top-minus-140px xl-top-minus-100px md-top-minus-90px z-index-9 xl-w-230px md-w-200px d-none d-md-block opacity-100"
                  data-anime='{ "translateY": [-15, 0], "scale": [0.5, 1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
                >
                  <img
                    src="images/newassets/round-yellow-text.png"
                    className="animation-rotation"
                    alt=""
                  />
                  <div className="absolute-middle-center w-100 z-index-minus-1">
                    <img
                      src="images/newassets/round-yellow-background.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
