import axios from "axios";
import store from "../Redux/store"; //because use dispatch will not working here
import  changeIsLoading  from "../Redux/actions/loading";


 const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request is going to server now");
    store.dispatch(changeIsLoading(true));
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response is  here now");
    store.dispatch(changeIsLoading(false));
    
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstance;