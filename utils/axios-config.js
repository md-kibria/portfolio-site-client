// External Imports
const axios = require('axios')

let axiosConfig = (host, token) => {
    axios.defaults.baseURL = host || ''
}

export default axiosConfig