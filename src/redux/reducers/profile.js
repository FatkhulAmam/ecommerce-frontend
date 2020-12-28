const initialState = {
  data: {},
  dataAddress: {},
  dataAddressById: {},
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
    //get user address
    case "ADDRESS_ID_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "ADDRESS_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "There is error at request data",
      };
    }
    case "ADDRESS_ID_FULFILLED": {
      return {
        ...state,
        dataAddressById: action.payload.data.data,
        isLoading: false,
      };
    }
    //get user address
    case "UPDATE_PROFILE_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "UPDATE_PROFILE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "cannot update profile",
      };
    }
    case "UPDATE_PROFILE_FULFILLED": {
      return {
        ...state,
        dataAddress: action.payload.data.data,
        isLoading: false,
        message: "Profile Update Succesfully"
      };
    }
    //add user address
    case "ADD_ADDRESS_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "ADD_ADDRESS_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: "There is error at input data",
      };
    }
    case "ADD_ADDRESS_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        message: "Add address success"
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
