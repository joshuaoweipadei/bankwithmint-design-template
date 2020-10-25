import React from 'react';
import SidebarGroup from './SidebarGroup';

import navigation from '../../menu-list';

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
            {navigation.menu.map(item => (
              <SidebarGroup key={item.id} menu={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
