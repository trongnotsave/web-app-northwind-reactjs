import CRUD from "../services/crud";
import React from "react";
import TableContent from "./tableContent";
import FormInput from "./formInput";

function Home() {
  // Dùng duy nhất cho React Hooks FUNCTION COMPONENT. KHÔNG ĐƯỢC DÙNG REACT CLASS COMPONENT
  const [listCustomers, setListCustomers] = React.useState([]); //Create listCustomers State
  const [checkUpdate, setCheckUpdate] = React.useState(false);

  // Nếu giá trị state cũ là A, sau khi mình update thành B => render lại, A set thành A => không render lại

  const RetrieveAllCustomers = () => {
    // <=> function RetrieveAllCustomers(){}
    console.log("Retrieve all customer");
    CRUD.getAll().then((res) => {
      //console.log(res);
      setListCustomers(res.data.data); //Set list customers after get all result from server
      setCheckUpdate(false);
    });
  };

  const onUpdateSuccess = (status) => {
    setCheckUpdate(status);
  };

  // useEffect: 1 dạng reactr hooks
  React.useEffect(() => {
    RetrieveAllCustomers(); //Retrieve data when component rendered
  }, [checkUpdate]); //Dependencies, checkUpdate thay đổi => chạy lại useEffect

  return (
    // Short hand React.Fragment
    <>
      <TableContent items={listCustomers} onDeleteSuccess={onUpdateSuccess} />
      <FormInput onSubmitSuccess={onUpdateSuccess} />
    </>
  );
}
export default Home;
