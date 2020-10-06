import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://sola',//https://jsonplaceholder.typicode.com/
  withCredentials: false,
  headers: {
    accept: 'application'
  }
})
export default instance;