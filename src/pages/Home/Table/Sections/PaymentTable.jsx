import React from 'react'
import { useTable } from 'react-table';
import { BsCircleFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import imgIcon from '../../../../images/svg/svg3.svg';

import './General.scss';

const PaymentTable = () => {
  const data = React.useMemo(() => [
      {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: 73430,
        tnx: 1234567890,
        time: '12:30',
        status: 'Pending'
      },
      {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: 73430,
        tnx: 1234567890,
        time: '12:30',
        status: 'Reconcilled'
      },
      {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: 73430,
        tnx: 1234567890,
        time: '12:30',
        status: 'Reconcilled'
      },
      {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: 73430,
        tnx: 1234567890,
        time: '12:30',
        status: 'Un-Reconcilled'
      },
      {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: 73430,
        tnx: 1234567890,
        time: '12:30',
        status: 'Pending'
      },
      {
        type: 'Apple Mac Book 15" 250 SSD 12GB',
        price: 73430,
        tnx: 1234567890,
        time: '12:30',
        status: 'Un-Reconcilled'
      },
    ],
    []
  );

  const columns = React.useMemo(() => [
      {
        Header: 'Item Type',
        accessor: 'type',
        Cell : ({ row }) => (
          <div className="type__column">
            <div className="imgContainer">
              {/* <img src={imgIcon} alt="svg__icon"/> */}
              <span>VW</span>
            </div>
            <h6>{row.original.type}</h6>
          </div>
        )
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Transaction No',
        accessor: 'tnx',
      },
      {
        Header: 'Time',
        accessor: 'time',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ row }) => {
          let statusColor;
          switch (row.original.status) {
            case 'Pending':
              statusColor = 'pending'
              break;
            case 'Un-Reconcilled':
              statusColor = 'un_reconcilled'
              break;
            case 'Reconcilled':
              statusColor = 'reconcilled'
              break;
          }
          return (
            <button className="status__btn">
              <BsCircleFill className={`status__icon ${statusColor}`} />
              <span className={`status__text ${statusColor}`}>{row.original.status}</span>
            </button>
          )
        }
      },
      {
        Header: " ",
        Cell: () => (
          <IoIosArrowDown className="arrow__icon" />
        )
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <>
      <table {...getTableProps} className="table__data">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default PaymentTable
