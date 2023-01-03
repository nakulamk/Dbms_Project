import React from "react";
import "./style.css";
function Table() {
  return (
    <div className="container">
      <table className="content-table">
        <thead>
          <tr>
            <th>Station ID</th>
            <th>Station Name</th>
            <th>Station Address</th>
            <th>Cycle Cpacity</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>abce</td>
            <td>1234</td>
            <td>abce</td>
            <td>adcd</td>
          </tr>
          <tr>
            <td>2</td>
            <td>abce</td>
            <td>1234</td>
            <td>abce</td>
            <td>adcd</td>
          </tr>
          <tr>
            <td>3</td>
            <td>abce</td>
            <td>1234</td>
            <td>abce</td>
            <td>adcd</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
