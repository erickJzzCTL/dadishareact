import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import HomeSectionEight from '../home/HomeSectionEight';
import { Fade, Slide } from 'react-awesome-reveal';
import { CiUser } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { RiMessage2Line } from 'react-icons/ri';
import AboutSectionFive from '../about/AboutSectionFive';
import customAxios from '../../utilities/customAxios';
import { toast } from 'react-toastify';

export default function ContactUs() {
  const scrollTextRef = useRef(null);
  const [submitData, setSubmitData] = useState({
    name: '',
    address: '',
    phone_number: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    phone_number: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollText = scrollTextRef.current;
      const scrollPosition = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;
      const translateX = -54.7059 * scrollPercentage;

      scrollText.style.transform = `scale(1, 1) translate3d(${translateX}px, 0px, 0px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onChange = (e, key) => {
    setSubmitData({ ...submitData, [key]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      address: '',
      phone_number: '',
      message: '',
    };

    if (!submitData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!submitData.address) {
      newErrors.address = 'Email is required';
      valid = false;
    }

    if (!submitData.phone_number) {
      newErrors.phone_number = 'Phone number is required';
      valid = false;
    }

    if (!submitData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const submitDataFn = async e => {
    e.preventDefault();
    try {
      if (validateForm()) {
        const response = await customAxios.post(
          'disha/contact-form',
          submitData
        );
        if (response.status === 200) {
          toast.success('Contact form submitted successfully');
        }
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div>
      <Header />
      <section className="p-0 top-space-margin page-title-center-alignment">
        <div className="container">
          <div className="row align-items-center justify-content-center extra-very-small-screen">
            <div className="col-xl-8 col-lg-10 text-center position-relative page-title-extra-large">
              <Fade>
                <h1 className="fw-700 text-dark-gray mb-20px ls-minus-2px custom-font">
                  Contact us
                </h1>
              </Fade>
              <Slide direction="down" duration={800} delay={200}>
                <h2 className="fw-400 ls-0px mb-0">
                  We are glad to support you in achieving something very
                  necessary.
                </h2>
              </Slide>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-dark-gray fw-600 mb-10 ls-minus-2px custom-font">
                Let us help you to facilitate your project execution.
              </h2>
              <div className="outside-box-left-10 d-none d-lg-inline-block">
                <div
                  className="fs-250 xl-fs-200 lg-fs-150 text-base-color fw-600 ls-minus-20px word-break-normal"
                  ref={scrollTextRef}
                >
                  contact
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 contact-form-style-03">
              <Slide direction="right" duration={800} delay={200}>
                <h6 className="fw-500 text-dark-gray mb-20px sm-mb-10px ls-minus-05px">
                  <span className="fw-700">Hello,</span> Connect with us.
                </h6>
                <form onSubmit={submitDataFn}>
                  <div className="position-relative form-group mb-20px">
                    <span className="form-icon">
                      <CiUser />
                    </span>
                    <input
                      className={`ps-0 border-radius-0px border-color-dark-gray form-control required ${
                        errors.name ? 'is-invalid' : ''
                      }`}
                      type="text"
                      name="name"
                      placeholder="Your name*"
                      value={submitData.name}
                      onChange={e => onChange(e, 'name')}
                      id="name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="position-relative form-group mb-20px">
                    <span className="form-icon">
                      <CiMail />
                    </span>
                    <input
                      className={`ps-0 border-radius-0px border-bottom border-color-dark-gray form-control required ${
                        errors.address ? 'is-invalid' : ''
                      }`}
                      type="email"
                      name="email"
                      placeholder="Your email address*"
                      value={submitData.email}
                      onChange={e => onChange(e, 'address')}
                      id="email"
                    />
                    {errors.address && (
                      <div className="invalid-feedback">{errors.address}</div>
                    )}
                  </div>
                  <div className="position-relative form-group mb-20px">
                    <span className="form-icon">
                      <HiOutlineDevicePhoneMobile />
                    </span>
                    <input
                      className={`ps-0 border-radius-0px border-bottom border-color-dark-gray form-control required ${
                        errors.phone_number ? 'is-invalid' : ''
                      }`}
                      type="tel"
                      name="phone"
                      placeholder="Your phone number*"
                      value={submitData.phone_number}
                      onChange={e => onChange(e, 'phone_number')}
                      id="phone"
                    />
                    {errors.phone_number && (
                      <div className="invalid-feedback">
                        {errors.phone_number}
                      </div>
                    )}
                  </div>
                  <div className="position-relative form-group form-textarea mb-0">
                    <textarea
                      className={`ps-0 border-radius-0px border-bottom border-color-dark-gray form-control ${
                        errors.message ? 'is-invalid' : ''
                      }`}
                      name="message"
                      placeholder="Your message"
                      rows="4"
                      value={submitData.message}
                      onChange={e => onChange(e, 'message')}
                      id="message"
                    ></textarea>
                    <span className="form-icon">
                      <RiMessage2Line />
                    </span>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                    <input type="hidden" name="redirect" value="" />
                    <button
                      className="btn submit btn-small btn-dark-gray btn-box-shadow btn-round-edge mt-35px mb-25px w-100"
                      type="submit"
                    >
                      Send message
                    </button>
                    <p className="fs-14 lh-24 w-100 mb-0 text-center text-lg-start">
                      We are committed to protecting your privacy. We will never
                      collect information about you without your explicit
                      consent.
                    </p>
                    <div className="form-results mt-20px d-none"></div>
                  </div>
                </form>
              </Slide>
            </div>
          </div>
          <div className="row justify-content-center mt-20 mb-10">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center elements-social social-icon-style-06 lg-mb-30px">
              <div className="fs-22 mb-25px text-dark-gray">
                Connect with <span className="fw-600">social media</span>
              </div>
              <ul className="extra-large-icon fw-600">
                <Fade
                  cascade
                  damping={0.1}
                  delay={200}
                  duration={500}
                  triggerOnce
                >
                  <li>
                    <a
                      className="facebook"
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="brand-label text-dark-gray">Fb</span>
                      <span className="brand-icon fa-brands fa-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dribbble"
                      href="https://www.instagram.com/disha_industrials?igsh=dXZ6dnU1ems3OTN4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="brand-label text-dark-gray">Ig</span>
                      <span className="brand-icon fa-brands fa-instagram-square"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      href="http://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="brand-label text-dark-gray">Tw</span>
                      <span className="brand-icon fa-brands fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="brand-label text-dark-gray">In</span>
                      <span className="brand-icon fa-brands fa-linkedin"></span>
                    </a>
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <AboutSectionFive />
      <HomeSectionEight />
    </div>
  );
}
