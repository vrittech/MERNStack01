import axios from "axios";
import { Navigate } from "react-router-dom";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

instance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");

  if (access_token) {
    config.headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    };
  } else {
    config.headers = {
      "Content-Type": "application/json",
    };
  }

  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const refreshTheToken = async (refreshToken) => {
        return instance.post('/auth/refresh_token', {refreshToken})
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const response = error.response;
    if (response.status === 401) {
      // Try to refresh the refresh token
      if (
        error.config.url !== "/auth/refresh_token" &&
        error.config.url !== "/auth/login" &&
        error.config.url !== "/auth/register" && 
        error.config.url !== '/auth/google/login'
      ) {
        //Now this is a valid response
        const refresh_token = localStorage.getItem('refresh_token');
        // request a new pair of tokens
        const response = await refreshTheToken(refresh_token);
        const {refreshToken, token} = response.data
        localStorage.setItem('access_token', token);
        localStorage.setItem('refresh_token', refreshToken);
        error.config.headers['Authorization'] = 'Bearer ' + token;
        return instance.request(error.config);
      }
    }else if(response.status === 403){
      window.alert("No permission!!");
    }
    return Promise.reject(error);
    //Navigate to login
  }
);



export default instance;
