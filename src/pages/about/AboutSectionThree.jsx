import React from 'react';
import { motion } from 'framer-motion';

const AboutSectionThree = () => {
  const words = [
    { text: 'Developer', color: 'text-base-color' },
    { text: 'Designing', color: 'text-dark-gray' },
    { text: 'Engineering', color: 'text-base-color' },
    { text: 'Manufacturing', color: 'text-dark-gray' },
    { text: 'Selling', color: 'text-base-color' },
  ];

  const containerVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        duration: 14,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      },
    },
  };

  return (
    <section className="overflow-hidden position-relative half-section">
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col swiper swiper-width-auto text-center pb-30px sm-pb-20px margin-4">
            <motion.div
              className="marquee-slide d-flex "
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {words.map((word, index) => (
                <div
                  key={index}
                  className={`inline-block fs-170 sm-fs-150 ${word.color} fw-600 word-break-normal custom-font  mx-4`}
                >
                  {word.text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
