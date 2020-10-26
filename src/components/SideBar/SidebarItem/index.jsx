import React from 'react';
import { Link, useLocation } from "react-router-dom";

const SidebarItem = (props) => {
  const { pathname } = useLocation();

  return (
    <Link to={props.item.url} className={`${pathname === props.item.url ? 'navigation__link active__link' : 'navigation__link'}`}>
      <span className="icon">{props.item.icon}</span>
      <span className="title">{props.item.title}</span>
    </Link>
  )
}

export default SidebarItem
