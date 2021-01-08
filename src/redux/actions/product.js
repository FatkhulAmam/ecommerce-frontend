import http from "../../helpers/http";
import qs from "querystring"

export default {
  getData: () => ({
    type: "GET_DATA",
    payload: http().get("product/?sort[input_date]=desc"),
  }),
  addProduct: (token, product) => ({
    type: "ADD_PRODUCT",
    payload: http(token).get("product/", product),
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
  addToCart: (token, product) => ({
    type: "ADD_CART",
    payload: http(token).post('cart', qs.stringify(product)),
  }),
  deleteCart: (token, id) => ({
    type: "DEL_CART",
    payload: http(token).delete(`cart/${id}`),
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
