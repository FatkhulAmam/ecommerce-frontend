import {combineReducers} from 'redux'

import product from './product'
import register from './register'
import auth from './auth'

export default combineReducers({
    product,
    register,
    auth
})