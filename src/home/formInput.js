import React from "react";
import CRUD from "../services/crud";

function FormInput({ onSubmitSuccess }) {
  // onSubmitSuccess => onUpdateSuccess
  // Syntax js, defind {abc: "text", def: 12} => object (properties: abc, def)
  const [postData, setPostData] = React.useState({
    //Create postData state
    customer_name: "",
    contact_name: "",
    address: "",
    city: "Da Nang",
    postal_code: "45000",
    country: "VN",
  });

  function handleChangeData(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value }); //Only change customer name in postData
  }

  function handleOnClickSubmit(e) {
    // Handle event when click submit button
    CRUD.create(postData)
      .then((res) => {
        // set State check update success => true
        const check = res.data.message === "Insert successfully";
        console.log("Check: " + check);
        onSubmitSuccess(check); // re-render if check is true
      })
      .catch((err) => {
        alert(err.data.message || "Unknown Message"); // alert error messages
      });
    console.log("CustomerName : " + JSON.stringify(postData));
  }

  function handleOnSubmit(e) {
    e.preventDefault(); // prevent reload page if submit
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="customer_id"
        value={postData.customer_id}
        onChange={handleChangeData}
        placeholder="ID"
      />
      <input
        type="text"
        name="customer_name"
        value={postData.customer_name}
        onChange={handleChangeData}
        placeholder="Customer Name"
      />
      <input
        type="text"
        name="contact_name"
        value={postData.contact_name}
        onChange={handleChangeData}
        placeholder="Contact Name"
      />
      <input
        type="text"
        name="address"
        value={postData.address}
        onChange={handleChangeData}
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
