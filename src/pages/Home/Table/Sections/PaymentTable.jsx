import React from 'react'
import { useTable } from 'react-table'
import './General.scss';

const PaymentTable = () => {
  const data = React.useMemo(() => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'rocks',
        col4: 'rocks',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'rocks',
        col4: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'rocks',
        col4: 'rocks',
      },
    ],
    []
  );

  const columns = React.useMemo(() => [
      {
        Header: 'Item Type',
        accessor: 'col1',
      },
      {
        Header: 'Price',
        accessor: 'col2',
      },
      {
        Header: 'Transaction No',
        accessor: 'col3',
      },
      {
        Header: 'Time',
        accessor: 'col4',
      },
      {
        Header: 'b',
        Cell: props => (
          <button>link</button>
        )
      },
      {
        Header: 'f',
        Cell: props => (
          <button>[rrrr</button>
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
      <table {...getTableProps} style={{border: '1px solid blue', width: '100%'}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th 
                  {...column.getHeaderProps()} 
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
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
                    <td 
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
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
