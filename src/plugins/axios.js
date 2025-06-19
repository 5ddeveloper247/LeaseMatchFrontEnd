import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/5d/v1';
// const baseURL = 'https://lmb.leasematch.nyc/api/5d/v1';

const axiosInstance = axios.create({ 
  baseURL: baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json'
  }
}); 

export { axiosInstance, baseURL };
