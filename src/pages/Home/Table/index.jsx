import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <div className="table">
      <div className="table__container">
        <h2 className="table__header">Payments</h2>
        <div className="table__topRow">
          <div className="item">Showing</div>
        </div>



          <table className="  ">
            <thead className="">
              <tr className="">
                <th className="">Header</th>
                <th className="">Header</th>
                <th className="">Header</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="">
                  <div className="ui ribbon label">First</div>
                </td>
                <td className="">Cell</td>
                <td className="">Cell</td>
              </tr>
              <tr className="">
                <td className="">Cell</td>
                <td className="">Cell</td>
                <td className="">Cell</td>
              </tr>
              <tr className="">
                <td className="">Cell</td>
                <td className="">Cell</td>
                <td className="">Cell</td>
              </tr>
            </tbody>
          <tfoot className="">
            <tr className="">
              <th colSpan="3" className="">
                <div className="ui pagination right floated menu">
                  <a className="icon item">
                    <i aria-hidden="true" className="chevron left icon"></i>
                  </a>
                  <a className="item">1</a>
                  <a className="item">2</a>
                  <a className="item">3</a>
                  <a className="item">4</a>
                  <a className="item">5</a>
                  <a className="item">6</a>
                  <a className="icon item">
                    <i aria-hidden="true" className="chevron right icon"></i>
                  </a>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Table
