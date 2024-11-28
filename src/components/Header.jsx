import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';

export default function Header() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <header>
      {/* start navigation */}
      <nav className="navbar navbar-expand-lg header-light header-transparent bg-transparent disable-fixed relative">
        <div className="container-fluid">
          <div className="col-auto col-lg-2 me-lg-0 me-auto">
            <a
              className="navbar-brand custom-pointer"
              onClick={() => navigate('/')}
            >
              <img
                src="images/assets/logo_50.png"
                data-at2x="images/assets/logo_112.png"
                alt=""
                className="default-logo"
              />
              <img
                src="images/assets/logo_50.png"
                data-at2x="images/assets/logo_112.png"
                alt=""
                className="alt-logo"
              />
              <img
                src="images/assets/logo_50.png"
                data-at2x="images/assets/logo_112.png"
                alt=""
                className="mobile-logo"
              />
            </a>
          </div>
          <div className="col-auto col-lg-8 menu-order position-static">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
              onClick={() => setOpenNav(!openNav)}
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link custom-pointer"
                    onClick={() => navigate('/')}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link custom-pointer"
                    onClick={() => navigate('/about')}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item dropdown dropdown-with-icon cursor-pointer">
                  <a href="/services" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item custom-pointer cursor-pointer">
                  <a href="/products" className="nav-link">
                    Products
                  </a>
                </li>
                <li className="nav-item cursor-pointer">
                  <a href="/contactus" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-2 text-end">
            <div className="header-icon">
              <div className="header-button">
                <a
                  href="whatsapp://send?phone=+971522209890"
                  className="btn btn-rounded btn-dark-gray btn-medium btn-switch-text btn-box-shadow text-transform-none"
                >
                  <span>
                    <span className="btn-double-text" data-text="WhatsApp Us">
                      WhatsApp Us
                    </span>
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {openNav && (
          <Fade duration={800} delay={200} cascade damping={0.1}>
            <div
              className="absolute navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <Slide
                direction="down"
                duration={800}
                delay={200}
                cascade
                damping={0.1}
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link custom-pointer"
                      onClick={() => navigate('/')}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link custom-pointer"
                      onClick={() => navigate('/about')}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-with-icon cursor-pointer">
                    <a href="/services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item custom-pointer cursor-pointer">
                    <a href="/products" className="nav-link">
                      Products
                    </a>
                  </li>
                  <li className="nav-item cursor-pointer">
                    <a href="/contactus" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </Slide>
            </div>
          </Fade>
        )}
      </nav>
      {/* end navigation */}
    </header>
  );
}
