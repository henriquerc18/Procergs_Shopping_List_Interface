import axios from 'axios';

const API = axios.create({
    baseURL: 'localhost:3000/produtos'
})

export default API;