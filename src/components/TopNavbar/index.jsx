import React from 'react';
import { BsBell } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';

import face1 from '../../images/face1.jpeg';

import './TopNavbar.css';

const TopNavbar = () => {
  return (
    <>
      <header>
        <nav className="top__nav">
          <div className="navbar">
            <div className="nav__brand">
              <h1>TransMonitor</h1>
            </div>
            <nav className="navbar__right">
              <div className="search__container">
                <BiSearchAlt2 className="search__icon" />
                <input type="text" className="navbar__search" placeholder="Search..." />
              </div>
              <ul className="nav__items">
                <li className="nav__link">
                  <a href="#support">Support</a>
                </li>
                <li className="nav__link">
                  <a href="#faq">FAQ</a>
                </li>
                <li className="nav__link">
                  <div className="notification__bell">
                    <BsBell className="notification_bellIcon" />
                    <div className="notify__count">3</div>
                  </div>
                </li>
                <li className="nav__link">
                  <div className="navbar__profile">
                    <div className="welcome_text">
                      <span className="welcome_textOne">Hello</span>
                      <span className="welcome_textTwo">Oluwaleke Ojo</span>
                    </div>
                    <div className="navbar_imgContainer">
                      <img src={face1} alt="face-1"/>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </header>
    </>
  )
}

export default TopNavbar;
