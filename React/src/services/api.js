import axios from 'axios';


const api = axios.create({
    // baseURL: "https://programai-backend.herokuapp.com/",
    baseURL: "https://www.alphavantage.co/query"
});

export default api;