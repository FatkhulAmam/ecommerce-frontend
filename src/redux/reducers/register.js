const initialState = {
    isLogin: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_ACCOUNT_PENDING':{
            return{
                ...state,
                isLoading: true
            }
        }
        case 'MAKE_ACCOUNT_REJECTED':{
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'access denied'
            }
        }
        case 'MAKE_ACCOUNT_FULFILLED':{
            return{
                ...state,
                isError: false,
                isLogin: true,
                isLoading:false,
                message: 'register success'
            }
        }
        default:{
            return state
        }
    }
}