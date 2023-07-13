import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:4200/listas'
})

export default Api;