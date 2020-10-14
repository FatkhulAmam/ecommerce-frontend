const initialState = {
    data: {},
    isLoading: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE_PENDING':{
            return{
                ...state,
                isLoading: true
            }
        }
        case 'GET_PROFILE_REJECTED':{
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'There is error at request data'
            }
        }
        case 'GET_PROFILE_FULFILLED':{
            return{
                ...state,
                data: action.payload.data.data,
                isLoading:false
            }
        }
        case 'CLEAR_MESSAGE': {
            return{
                ...state,
                message: ''
            }
        }
        default:{
            return state
        }
    }
}