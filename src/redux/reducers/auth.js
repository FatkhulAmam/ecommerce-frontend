const initialState = {
  isLogin: false,
  isError: false,
  token: "",
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "AUTH_USER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "access denied",
      };
    }
    case "AUTH_USER_FULFILLED": {
      return {
        ...state,
        token: action.payload.data.token,
        isLogin: true,
        isLoading: false,
        message: "login success",
      };
    }
    case "CLEAR_MESSAGE": {
      return {
        ...state,
        message: "",
      };
    }
    default: {
      return state;
    }
  }
};
