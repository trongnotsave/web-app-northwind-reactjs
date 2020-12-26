import CRUD from "../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "./formInput";

function Home() {
  const [listCustomers, setListCustomers] = React.useState([]); //Create listCustomers State

  const RetrieveAllCustomers = () => {
    CRUD.getAll().then((res) => {
      console.log(res);
      setListCustomers(res.data.data); //Set list customers after get all result from server
    });
  };

  React.useEffect(() => {
    RetrieveAllCustomers(); //Retrieve data when component rendered
  }, []);

  return (
    <>
      <TableContent items={listCustomers} />
      <FormInput />
    </>
  );
}
export default Home;
