import HttpRequest from "./http-common";

const getAll = () => {
  return HttpRequest.get("/customer/all");
};

const get = (id) => {
  return HttpRequest.get(`/customer/${id}`);
};

const create = (data) => {
  return HttpRequest.post("/customer", data);
};

export default { get, getAll, create };
