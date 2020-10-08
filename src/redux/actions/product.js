import {default as axios} from 'axios'

export default {
  getData: ()=>({
    type: 'GET_DATA',
    payload: axios.get('http://localhost:8180/product/?sort[input_date]=desc')
  })
}