import axios from 'axios'
const key = import.meta.env.VITE_RAWG_API_KEY
const baseURL = import.meta.env.VITE_RAWG_API_URL

const rawgApi = axios.create({
    baseURL: baseURL,
    params: {
        key
    }
})


export default rawgApi