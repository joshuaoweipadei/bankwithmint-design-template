import React, { useState, useMemo } from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table';
import ShowDropdown from './ShowDropdown';

import { BiSearchAlt2 } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import imgIcon from '../../../../images/svg/svg3.svg';

import './General.scss';

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="search__content">
      <BiSearchAlt2 className="search__icon" />
      <input
        className="search__field"
        value={value || ''} 
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </div>
  )
}

const ChoosePages = ({ pageSize, setPageSize }) => {
  return (
    <div className="item">
      <select
        className="form-control"
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
        style={{ width: '120px', height: '38px' }}
      >
        {[2, 3, 6, 15, 20, 30].map(pageSize => (
          <option key={pageSize} value={pageSize}>
              Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}

const PaymentTable = () => {
  const data = useMemo(() => [
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
    [],
  );

  const columns = useMemo(() => [
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
    prepareRow,
    state: { globalFilter, pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 2 } }, useFilters, useGlobalFilter, usePagination)

  const showList = [
    { value: 1, label: 'All' }, 
    { value: 2, label: 'Reconcilled' }, 
    { value: 3, label: 'Un-Reconcilled' },
    { value: 4, label: 'Settled' },
    { value: 5, label: 'Unsettled' }
  ]

  return (
    <>      
      <div className="table__topRow">
        <div className="show__pageSize">
          <ShowDropdown list={[2, 3, 6, 15, 20, 30]} pageSize={pageSize} setPageSize={setPageSize} minWidth={69} />
        </div>
        <div>Page{" "}{pageIndex + 1} of {pageOptions.length} Payments</div>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <div className="show__status">
          <span>Show</span>
          <ShowDropdown list={showList} minWidth={152} />
        </div>
      </div>
      <table {...getTableProps()} className="table__data">
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
          {page.map(row => {
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
      <div className="table__pagination">
        <ul className="pagination">
          <li className="page__item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <a className="page__link">First</a>
          </li>
          <li className="page__item" onClick={() => previousPage()} disabled={!canPreviousPage}>
            <a className="page__link">{"<"}</a>
          </li>

          <li className="page__item" onClick={() => nextPage()} disabled={!canNextPage}>
            <a className="page__link">{">"}</a>
          </li>
          <li className="page__item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <a className="page__link">Last</a>
          </li>
          <li className="page__item">
            <a className="page__link">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </a>
          </li>
          <li className="page__item">
            <a className="page__link">
              <input
                className="form-control"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
                style={{ width: '100px', height: '20px' }}
              />
            </a>
          </li>{' '}
        </ul>
      </div>
    </>
  )
}

export default PaymentTable
