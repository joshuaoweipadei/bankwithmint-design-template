import React from 'react';
import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  return (
    <Link to={props.item.url} className={props.item.id === 'overview' ? 'navigation__link active__link' : 'navigation__link'}>
      <span className="icon">{props.item.icon}</span>
      <span className="title">{props.item.title}</span>
    </Link>
  )
}

export default SidebarItem
