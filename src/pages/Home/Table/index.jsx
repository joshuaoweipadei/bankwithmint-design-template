import React from 'react';
import PaymentTable from './Sections/PaymentTable';

import './Table.css';

const Table = () => {
  return (
    <div className="table">
      <div className="table__container">
        <h2 className="table__header">Payments</h2>
        {/* Data Table */}
        <PaymentTable />
        {/* Data Table */}
      </div>
    </div>
  )
}

export default Table
