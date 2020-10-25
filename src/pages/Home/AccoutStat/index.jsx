import React from 'react'
import './AccountStat.css';

import signal from '../../../images/svg/svg2.svg'

const AccountStat = () => {
  return (
    <div className="account__stat">
      <div className="account__statContainer">
        <div className="account__statCard">
          <div className="account__stat__details">
            <span>Daily Transaction Volume</span>
            <h2>2,342</h2>
          </div>
          <div className="account__stat__imgContainer">
            <img src={signal} alt="img"/>
          </div>
        </div>
        <div className="account__statCard">
          <div className="account__stat__details">
            <span>Daily Transaction Value</span>
            <h2><strike>N</strike>4,000,000</h2>
          </div>
          <div className="account__stat__imgContainer">
            <img src={signal} alt="img"/>
          </div>
        </div>
        <div className="account__statCard">
          <div className="account__stat__details">
            <span>Total Transaction Volume</span>
            <h2>452,000</h2>
          </div>
          <div className="account__stat__imgContainer">
            <img src={signal} alt="img"/>
          </div>
        </div>
        <div className="account__statCard">
          <div className="account__stat__details">
            <span>Total Transaction Value</span>
            <h2><strike>N</strike>4,000,000</h2>
          </div>
          <div className="account__stat__imgContainer">
            <img src={signal} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountStat
