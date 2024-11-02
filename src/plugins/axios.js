import axios from 'axios';

const axiosInstance = axios.create({
   //baseURL: 'http://127.0.0.1:8000/api/5d/v1', // Change this to your Laravel API URL
  baseURL: 'http://lmb.gregorygadson.io/api/5d/v1', // Change this to your Laravel API URL
  headers: {
    'Content-Type': 'application/json/multipart/form-data',
    'Accept': 'application/json',
    'Content-Type': ''
  }
}); 

export default axiosInstance;