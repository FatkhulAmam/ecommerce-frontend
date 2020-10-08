import { default as axios } from 'axios'

const { REACT_APP_BACKEND_URL } = process.env

export default (token=false) => {
    return axios.create({
        baseURL: REACT_APP_BACKEND_URL,
        headers: {
          'Authorization': token?`Bearer ${token}`:undefined
        }
      })
}