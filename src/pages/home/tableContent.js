import React from "react";
import CRUD from "services/crud";
import { useHistory } from "react-router-dom";

function TableContent({ items, onDeleteSuccess }) {
  let history = useHistory();

  // === props.checkUpdateSuccess
  function handleOnDelete(id) {
    //Handle when click button Delete
    CRUD.deleteOne(id).then((res) => {
      // Call CURD from services
      // check response message
      onDeleteSuccess(true);
    });
  }

  function handleOnEdit(item) {
    // Route sang UpdatePage
    history.push(`/customers/update/${item.customer_id}`, { updateItem: item });
  }

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Customer Name</th>
        <th>Contact Name</th>
        <th>Address</th>
        <th>City</th>
        <th>Postal Code</th>
        <th>Country</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
      {items.map((
        item,
        index //Map responses list data to table row
      ) => (
        <tr>
          <td>{item.customer_id}</td>
          <td>{item.customer_name}</td>
          <td>{item.contact_name}</td>
          <td>{item.address}</td>
          <td>{item.city}</td>
          <td>{item.postal_code}</td>
          <td>{item.country}</td>
          <td>
            <button onClick={() => handleOnDelete(item.customer_id)}>
              Delete
            </button>
          </td>
          <td>
            <button onClick={() => handleOnEdit(item)}>Edit</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
export default TableContent;
