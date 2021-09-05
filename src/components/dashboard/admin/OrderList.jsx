import React from "react";
import HorizontalLine from "../../utilities/HorizontalLine";
import { Table } from "reactstrap";

const OrderList = (props) => {
  return (
    <div className="order__list__container">
      <h1>Order List</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      <Table striped>
        <thead>
          <tr>
            <th>Service</th>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "50px", lineHeight: "50px" }}>
            <td> Lorem ipsum, dolor sit amet c ipsum, dolor sit amet c</td>
            <td> email@email.com</td>
            <td> naisan novel</td>
            <td>
              <select id="cars" name="cars" className="naisan" defaultValue='done'>
                <option value="pending">pending</option>
                <option value="ongoing">ongoing</option>
                <option value="done">done</option>
              </select>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
