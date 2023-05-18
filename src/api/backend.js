import axios from "axios"

const REACT_BACKEND_SERVER = process.env.REACT_BACKEND_SERVER
const backendApi = axios.create({baseURL:`http://127.0.0.1:5000/api`})

export default backendApi;