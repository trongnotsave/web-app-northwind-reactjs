import React from "react";
import CRUD from "../services/crud";

function FormInput(props) {
  const [postData, setPostData] = React.useState({
    //Create postData state
    customer_name: "",
    contact_name: "",
    address: "",
    city: "Da Nang",
    postal_code: "45000",
    country: "VN",
  });

  function handleChangeCustomerName(e) {
    e.preventDefault();
    setPostData({ ...postData, customer_name: e.target.value }); //Only change customer name in postData
  }
  function handleChangeContactName(e) {
    e.preventDefault();
    setPostData({ ...postData, contact_name: e.target.value }); //Only change contact name in postData
  }
  function handleChangeAddress(e) {
    e.preventDefault();
    setPostData({ ...postData, address: e.target.value }); //Only change address in postData
  }

  function handleOnClickSubmit(e) {
    // Handle event when click submit button
    e.preventDefault();
    CRUD.create(postData)
      .then((res) => {
        //console.log("Response: " + JSON.stringify(res));
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.data.message || "Unknown Message"); // alert error messages
      });
    console.log("CustomerName : " + JSON.stringify(postData));
  }

  return (
    <form>
      <input
        type="text"
        name="customerID"
        value={postData.customer_name}
        onChange={handleChangeCustomerName}
        placeholder="ID"
      />
      <input
        type="text"
        name="customerName"
        value={postData.customer_name}
        onChange={handleChangeCustomerName}
        placeholder="Customer Name"
      />
      <input
        type="text"
        name="contactName"
        value={postData.contact_name}
        onChange={handleChangeContactName}
        placeholder="Contact Name"
      />
      <input
        type="text"
        name="address"
        value={postData.address}
        onChange={handleChangeAddress}
        placeholder="Address"
      />
      <input type="text" name="city" value="this is city" />
      <input type="text" name="postalCode" value="this is postalCode" />
      <input type="text" name="country" value="this is country" />
      <button name="btnSubmit" value="Submit" onClick={handleOnClickSubmit}>
        Submit{" "}
      </button>
    </form>
  );
}
export default FormInput;
