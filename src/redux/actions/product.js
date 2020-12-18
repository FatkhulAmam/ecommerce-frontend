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
    type: "DATA_ID",
    payload: http().get(`product/${id}`),
  }),
  getCart: (token) => ({
    type: "GET_CART",
    payload: http(token).get('cart'),
  }),
  getCategory: () => ({
    type: "GET_CATEGORY",
    payload: http().get('category'),
  }),
  getCategoryDetail: (id) => ({
    type: "CATEGORY_PRODUCT",
    payload: http().get(`product?search[category]=${id}`),
  }),
};
