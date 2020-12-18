import http from "../../helpers/http";

export default {
  getData: () => ({
    type: "GET_DATA",
    payload: http().get("product/?sort[input_date]=desc"),
  }),
  searchData: (keyword) => ({
    type: "GET_DATA",
    payload: http().get(`product?search[name]=${keyword}`),
  }),
  getDetailById: (id) => ({
    type: "GET_DATA",
    payload: http().get(`product/${id}`),
  }),
};
