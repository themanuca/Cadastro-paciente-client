import axios from 'axios';

const api = axios.create({
    URL : 'http://localhost:5000',
    validateStatus:false
})

export default api;