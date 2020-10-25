import React from 'react';
import './Chart.css';

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart__container">
        <div className="chart__graph">
            dfdsf
        </div>
        <div className="chart__transaction">
          <div className="chart__orders">
            <h4>Order</h4>
            <div>
              <div></div>
            </div>
            <span>Pending Orders: <b>20</b></span>
            <span>Reconcilled Orders: <b>80</b></span>
            <span>Total Orders: <b>100</b></span>
          </div>
          <div className="chart__paymnents">
            payment
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
