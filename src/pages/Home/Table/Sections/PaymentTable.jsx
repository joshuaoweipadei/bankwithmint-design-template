import React, { useState, useMemo } from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table';
import ShowDropdown from './ShowDropdown';

import { BiSearchAlt2 } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

import { Data } from './Data';
// import imgIcon from '../../../../images/svg/svg3.svg';

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
        placeholder={`${count} records. . .`}
      />
    </div>
  )
}

const PaymentTable = () => {
  const data = useMemo(() => Data, []);

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
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 10 } }, useFilters, useGlobalFilter, usePagination)

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
          <ShowDropdown list={[2, 3, 6, 15, 20, 30]} pageSize={pageSize} setPageSize={setPageSize} minWidth={80} />
          <div className="text">out of {preGlobalFilteredRows.length} Payments</div>
        </div>
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
        <div className="pagination__text">
          Showing{" "} {pageIndex + 1} to {pageSize} of {pageOptions.length} entries
        </div>
        <ul className="pagination">
          <li className="page__item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <a className="page__link">Pervious</a>
          </li>
          <li className={`page__item ${canPreviousPage ? 'active' : ''}`} onClick={() => previousPage()} disabled={!canPreviousPage}>
            <a className="page__link"><GoArrowLeft className="page__icon" /></a>
          </li>
          <li className={`page__item ${canNextPage ? 'active' : ''}`} onClick={() => nextPage()} disabled={!canNextPage}>
            <a className="page__link"><GoArrowRight className="page__icon" /></a>
          </li>
          <li className="page__item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <a className="page__link">Next</a>
          </li>
          {/* <li className="page__input">
            Goto - {" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
              />
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default PaymentTable
