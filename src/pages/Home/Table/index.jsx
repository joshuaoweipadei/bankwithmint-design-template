import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import PaymentTable from './Sections/PaymentTable';
import ShowDropdown from './Sections/ShowDropdown';

import './Table.css';

const Table = () => {
  const showList = [
    { value: 1, label: 'All' }, 
    { value: 2, label: 'Reconcilled' }, 
    { value: 3, label: 'Un-Reconcilled' },
    { value: 4, label: 'Settled' },
    { value: 5, label: 'Unsettled' }
  ]

  return (
    <div className="table">
      <div className="table__container">
        <h2 className="table__header">Payments</h2>
        <div className="table__topRow">
          <div className="item">Showing</div>
          <div>20 out of 500 payments</div>
          <div className="search__content">
            <BiSearchAlt2 className="search__icon" />
            <input type="text" className="search__field" placeholder="Search payment" />
          </div>
          <div className="show__all">
            <span>Show</span>
            <ShowDropdown list={showList} />
          </div>
        </div>

        {/* Data Table */}
        <PaymentTable />
        {/* Data Table */}
      </div>
    </div>
  )
}

export default Table
