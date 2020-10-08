const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    alertMsg: ''
}
  
export default (state=initialState, action)=>{
    switch(action.type){
      case 'GET_DATA_PENDING' : {
        return {
          ...state,
          isLoading: true
        }
      }
      case 'GET_DATA_REJECTED': {
        return {
          ...state,
          isLoading: false,
          isError: true,
          alertMsg: 'There is an error at request data'
        }
      }
      case 'GET_DATA_FULFILLED': {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.data
        }
      }
      default : {
        return state
      }
    }
  }