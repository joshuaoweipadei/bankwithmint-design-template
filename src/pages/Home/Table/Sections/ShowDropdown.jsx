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
    if(props.pageSize && props.setPageSize){
      props.setPageSize(value)
    } else {
      if(labelItem !== value){
        setLabelItem(value)
      }
    }
    hideDropdown()
  }

  let renderDataDropDown;
  if(props.pageSize && props.setPageSize){
    renderDataDropDown = (item, index) => {
      return (
        <li
          key={index}
          value={props.pageSize}
          onClick={() => chooseItem(item)}
        >
          <a>{item}</a>
        </li>
      )
    }
  } else{
    renderDataDropDown = (item, index) => {
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
  }

  return (
    <div className={`show__dropdown ${isOpen ? 'open' : ''}`}>
      {props.pageSize ? <span style={{marginRight: '5px'}}>Showing</span> : null}
      <button className="show__dropdownToggle" type="button" onClick={showDropdown}>
        {props.pageSize ? props.pageSize : labelItem}
        <span className="caret"></span>
      </button>
      <ul className="show__dropdownMenu" style={{minWidth: props.minWidth}}>
        {props.list.map(renderDataDropDown)}
      </ul>
    </div>
  )
}

export default ShowDropdown;
