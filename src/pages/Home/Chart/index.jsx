import React from 'react';
import './Chart.css';
import ChartGraph from './ChartGraph';

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart__container">
        <div className="chart__graph">
          <div className="chart__graphContainer">
            <ChartGraph />
          </div>
        </div>
        <div className="chart__transaction">
          <div className="chart__orders">
            <h4>Orders</h4>
            <div className="chart__orders__progress">
              <div className="chart__orders__progressPrecentage"></div>
            </div>
            <div className="text">Pending Orders: <b className="pending">20</b></div>
            <div className="text">Reconcilled Orders: <b className="reconcilled">80</b></div>
            <div className="text">Total Orders: <b className="total">100</b></div>
          </div>
          <div className="chart__orders">
            <h4>Payments</h4>
            <div className="chart__orders__progress">
              <div className="chart__orders__progressPrecentage"></div>
            </div>
            <div className="text">Un-reconcilled Payments: <b className="pending">20</b></div>
            <div className="text">Reconcilled Payments: <b className="reconcilled">80</b></div>
            <div className="text">Total Payments: <b className="total">100</b></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
