import qs from "querystring";
import http from "../../helpers/http";

export default {
  loginAction: (data) => ({
    type: "AUTH_USER",
    payload: http().post("auth/login/custommer", qs.stringify(data)),
  }),
  clearMessage: () => ({
    type: "CLEAR_MESSAGE",
  }),
};
