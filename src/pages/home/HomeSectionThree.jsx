import React, { useEffect } from 'react';

export default function HomeSectionThree() {
  useEffect(() => {
    // Example: Add a simple animation effect when the component mounts
    const elements = document.querySelectorAll('[data-anime]');
    elements.forEach(el => {
      const animeData = JSON.parse(el.getAttribute('data-anime'));
      const {
        el: target,
        translateX,
        opacity,
        duration,
        delay,
        staggervalue,
        easing,
      } = animeData;

      // Simple animation using setTimeout for demonstration
      setTimeout(() => {
        el.style.transform = `translateX(${translateX[1]}px)`;
        el.style.opacity = opacity[1];
      }, delay);
    });
  }, []);

  return (
    <section className="position-relative overflow-hidden section-dark">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-6">
            <div
              className="outside-box-left-20 md-outside-box-left-0"
              data-bottom-top="transform:scale(1.1, 1.1)"
              data-top-bottom="transform:scale(1, 1)"
            >
              <img src="images/assets/home_image.png" alt="www." />
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1 z-index-9 md-mt-35px"
            data-anime='{ "el": "childs", "translateX": [15, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <h1 className="text-dark-gray fw-600 mb-40px md-mb-25px outside-box-left-15 md-outside-box-left-0 ls-minus-3px word-break-normal">
              We provide the Sounds QHSE culture identity to the organization.
            </h1>
            <p className="lh-34 w-95 mb-30px lg-w-100">
              We are thrilled about our work and its positive impact on our
              clients. With over{' '}
              <span className="text-dark-gray fw-600 text-decoration-line-bottom">
                9 years of specialized experience,
              </span>{' '}
              we consistently provide excellent QHSE (Quality, Health, Safety,
              and Environment) risk management solutions that are best-in-class.
              Disha has experience in risk management across various industries,
              with a specific focus on promoting a sound Quality, Health,
              Safety, and Environment (QHSE) culture within organizations.
              Developing a strong QHSE culture is essential for effectively
              mitigating risks. How may I assist you further in this endeavor?
            </p>
            <a
              href="about.html"
              className="btn btn-large btn-expand-ltr text-dark-gray btn-rounded fw-700"
            >
              <span className="bg-base-color"></span>About Disha Industrial
              solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
