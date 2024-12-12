import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { FiUser } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';

export default function Header() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);
  const items = [
    {
      label: 'USD',
      key: '0',
    },
    {
      label: 'INR',
      key: '1',
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleMenuClick = ({ key }) => {
    const selected = items.find(item => item.key === key);
    setSelectedItem(selected);
  };

  const menu = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <header>
      {/* start navigation */}
      <nav className="navbar navbar-expand-lg header-light header-transparent bg-transparent disable-fixed relative">
        <div className="container-fluid">
          <div className="col-auto col-lg-3 me-lg-0 me-auto">
            <a
              className="navbar-brand custom-pointer"
              onClick={() => navigate('/')}
            >
              <img
                src="/images/assets/logo_50.png"
                data-at2x="/images/assets/logo_112.png"
                alt=""
                className="default-logo"
              />
              <img
                src="/images/assets/logo_50.png"
                data-at2x="/images/assets/logo_112.png"
                alt=""
                className="alt-logo"
              />
              <img
                src="/images/assets/logo_50.png"
                data-at2x="/images/assets/logo_112.png"
                alt=""
                className="mobile-logo"
              />
            </a>
          </div>
          <div className="col-auto col-lg-6 menu-order position-static">
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
              <ul
                className="navbar-nav d-flex justify-content-between w-100"
                style={{ padding: '0 8%' }}
              >
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
                    Dadisha Store
                  </a>
                </li>
                <li className="nav-item cursor-pointer">
                  <a href="/contactus" className="nav-link">
                    Contact
                  </a>
                </li>
                {/* <li className="nav-item cursor-pointer">
                  <a href="/contactus" className="nav-link">
                    Login
                  </a>
                </li>
                <li className="position-relative nav-item cursor-pointer relative">
                  <a href="/contactus" className="nav-link">
                    Cart
                  </a>
                  <div className="position-absolute  bottom-60p cart-count">
                    <div className="rounded-full text-white content">2</div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-auto col-lg-3 text-end d-flex gap-4 justify-content-center align-items-center">
            {/* <div className="header-icon">
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
            </div> */}

            <div className="d-flex justify-content-center align-items-center custom-pointer">
              <Dropdown menu={menu} trigger={['click']}>
                <a
                  onClick={e => e.preventDefault()}
                  style={{ textDecoration: 'none' }}
                >
                  <Space
                    className="fw-600 text-black px-0"
                    style={{ fontSize: '18px' }}
                  >
                    {selectedItem ? selectedItem.label : 'Select an item'}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div
              className="d-flex gap-2 align-items-center fw-600 text-black custom-pointer"
              style={{ fontSize: '18px' }}
            >
              <FiUser style={{ color: '#FFA500' }} />
              Sign In
            </div>
            <div
              className="d-flex gap-2 align-items-center fw-600 text-black custom-pointer"
              style={{ fontSize: '18px' }}
            >
              <FiShoppingCart style={{ color: '#FFA500' }} />
              Cart
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
                  <li className="nav-item cursor-pointer">
                    <a href="/contactus" className="nav-link">
                      Login
                    </a>
                  </li>
                  <li className=" nav-item cursor-pointer d-flex">
                    <a href="/contactus" className="nav-link">
                      Cart
                    </a>
                    <div className=" cart-count">
                      <div className="rounded-full text-white content">2</div>
                    </div>
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
