import React, { useState, useEffect } from 'react';
import './General.scss';

const ShowDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [labelItem, setLabelItem] = useState(null);
  const [typeDropdown, setTypeDropdown] = useState(null);

  useEffect(() => {
    const { label } = props.list[0];
    let firstItem = null;
    if(typeof label != 'undefined'){
      checkType(false);
      firstItem = label;
    } else {
      checkType(true);
      firstItem = props.list[0]
    }
    setLabelItem(firstItem);
  }, []);

  const checkType = (value) => {
    setTypeDropdown(value)
  }

  const showDropdown = () => {
    setIsOpen(!isOpen);
    document.addEventListener("click", hideDropdown);
  }

  const hideDropdown = () => {
    setIsOpen(!isOpen);
    document.removeEventListener("click", hideDropdown);
  }

  const chooseItem = (value) => {
    if(labelItem !== value){
      setLabelItem(value)
    }
    hideDropdown()
  }

  const renderDataDropDown = (item, index) => {
    const { value, label } = typeDropdown ? { value: index, label: item } : item;
    return (
      <li
        key={index}
        value={value}
        onClick={() => chooseItem(label)}
      >
        <a>{label}</a>
      </li>
    )
  }

  return (
    <div className={`show__dropdown ${isOpen ? 'open' : ''}`}>
      <button className="show__dropdownToggle" type="button" onClick={showDropdown}>
        {labelItem}
        <span className="caret"></span>
      </button>
      <ul className="show__dropdownMenu">
        {props.list.map(renderDataDropDown)}
      </ul>
    </div>
  )
}

export default ShowDropdown;
