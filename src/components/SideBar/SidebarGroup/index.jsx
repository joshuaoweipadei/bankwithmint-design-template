import React from 'react';
import SidebarItem from '../SidebarItem';

const SidebarGroup = (props) => {
  let navItems = '';
  if(props.menu.children){
    const group = props.menu.children;
    navItems = Object.values(group).map(item => {
      return <SidebarItem key={item.id} item={item} />
    });
  }
  
  return (
    <>
      {props.menu.title && <h6 className="navigation__header">{props.menu.title}</h6>}
      <div className="mavigation_list">
        {navItems}
      </div>
    </>
  )
}

export default SidebarGroup;