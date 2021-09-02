import { Button } from "reactstrap";
import React, { useState } from "react";
import { Table } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";

const ManageService = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatePrice, setUpdatePrice] = useState(0);

  const updatePriceHandler = () => {
    setIsUpdate(!isUpdate);
  };

  const willUpdatePriceHandler = ()=>{
    setIsUpdate(!isUpdate);
  }

  return (
    <div className="manage__service__container">
      <h1>Manage Services</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{ width: "5%" }}>
              1
            </th>
            <td> Lorem ipsum, dolor sit amet c ipsum, dolor sit amet</td>
            <td>
              ${" "}
              {!isUpdate ? (
                updatePrice
              ) : (
                <input
                  type="number"
                  className="manage__service__price__editable__input"
                  value={updatePrice}
                  onChange={event=>{
                    setUpdatePrice(event.target.value);
                  }}
                />
              )}{" "}
              {isUpdate ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "green" }}
                  onClick={updatePriceHandler}
                />
              ) : (
                <FontAwesomeIcon icon={faEdit} onClick={willUpdatePriceHandler} />
              )}
            </td>
            <td>
              <Button color="danger">Delete</Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageService;
