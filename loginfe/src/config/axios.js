import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});


instance.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){
        config.headers = {
            'Autorization' : `Bearer ${access_token}`,
            'Content-Type' : "application/json"
        }
    }
    config.headers = {
        'Content-Type' : "application/json"
    }
    return config;

})


export default instance;
