import http from "../../helpers/http";
import qs from 'query-string'

export default {
  getProfile: (token) => {
    return {
      type: "GET_PROFILE",
      payload: http(token).get("user"),
    };
  },
  updateProfile: (token, data) => {
    return {
      type: "UPDATE_PROFILE",
      payload: http(token).patch("user", qs.stringify(data)),
    };
  },
  getAddress: (token) => {
    return {
      type: "GET_ADDRESS",
      payload: http(token).get("user/address"),
    };
  },
  getAddressById: (token, id) => {
    return {
      type: "ADDRESS_ID",
      payload: http(token).get(`user/address/${id}`),
    };
  },
  addAddress: (token, data) => {
    return {
      type: "ADD_ADDRESS",
      payload: http(token).post("user/address", qs.stringify(data)),
    };
  },
  updateAvatar: (token, form) => {
    return {
      type: "UPDATE_AVATAR",
      payload: http(token).patch('user/avatar', form),
    };
  },
};
