const initialState = {
  data: {},
  dataAddress: {},
  isLoading: false,
  isError: false,
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_PROFILE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "There is error at request data",
      };
    }
    case "GET_PROFILE_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
      };
    }
    //get user address
    case "GET_ADDRESS_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_ADDRESS_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "There is error at request data",
      };
    }
    case "GET_ADDRESS_FULFILLED": {
      return {
        ...state,
        dataAddress: action.payload.data.data,
        isLoading: false,
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
