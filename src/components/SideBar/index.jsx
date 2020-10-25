import React from 'react';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="generate__invoice">
          <button className="invoice__btn">Generate Invoice</button>
        </div>
        <div className="navigation">
          <div className="navigation__items">
            menus
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
