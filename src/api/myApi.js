import axios from 'axios'
const baseURL = import.meta.env.VITE_API_URL

const myApi = axios.create({
    baseURL: baseURL,

})


export default myApi