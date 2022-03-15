// External Imports
const axios = require('axios')

let axiosConfig = (host) => {
    axios.defaults.baseURL = host || ''
}

export default axiosConfig