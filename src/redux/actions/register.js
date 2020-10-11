import http from '../../helpers/http'
import qs from 'querystring'

export default {
    addData: (data) => ({
        type: 'MAKE_ACCOUNT',
        payload: http().post('auth/register/custommer',qs.stringify(data))
    })
}