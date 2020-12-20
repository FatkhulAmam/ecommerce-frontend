const initialState = {
  data: [],
  dataDetail: [],
  dataCart: [],
  dataCategory: [],
  categoryProduct: [],
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
    // get cart
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
    // add product to cart
    case "ADD_CAR_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "ADD_CART_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "can't buy product data",
      };
    }
    case "ADD_CART_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        message: "Add product to my cart"
      };
    }
    // get category
    case "GET_CATEGORY_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_CATEGORY_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "There is an error at request data",
      };
    }
    case "GET_CATEGORY_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        dataCategory: action.payload.data.data,
      };
    }
    // get category product
    case "CATEGORY_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CATEGORY_PRODUCT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: "There is an error at request data",
      };
    }
    case "CATEGORY_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        categoryProduct: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};
