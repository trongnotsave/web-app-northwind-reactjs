import HttpRequest from "./http-common";

const getAll = async () => {
  return await HttpRequest.get("http://127.0.0.1:5000/customer/all");
};

const create = (data) => {
  return HttpRequest.post("http://localhost:5000/customer", data);
};

const deleteOne = (id) => {
  return HttpRequest.delete(`http://localhost:5000/customer/${id}`);
};

const updateOne = (id, data) => {
  return HttpRequest.put(`http://localhost:5000/customer/${id}`, data);
};

export default { getAll, create, deleteOne, updateOne };
