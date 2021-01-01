import React from "react";
import CRUD from "../../services/crud";

const items = ["Items1", "Items2", "Items3", "Items1123", "Items12"];

const Home = () => {
  const [listItems, setListItems] = React.useState([]);
  const RetrieveListItems = () => {
    CRUD.getAll().then((res) => {
      console.log(res.data);
      setListItems(res.data.data);
    });
  };
  React.useEffect(() => {
    RetrieveListItems();
  }, []);
  return (
    // <div>
    //   <p>{JSON.stringify(listItems.data.data)}</p>
    // </div>
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>{item.address}</li>
      ))}
    </ul>
  );
};

export default Home;
