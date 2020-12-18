const initialState = {
  data: [],
  dataDetail: [],
  dataCart: [],
  isLoading: false,
  isError: false,
  alertMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_DATA_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "There is an error at request data",
      };
    }
    case "GET_DATA_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
      };
    }
    // get detail by id
    case "DATA_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "DATA_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "There is an error at request data",
      };
    }
    case "DATA_ID_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        dataDetail: action.payload.data.data,
      };
    }
    // get detail by id
    case "GET_CAR_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_CART_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "There is an error at request data",
      };
    }
    case "GET_CART_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        dataCart: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};
