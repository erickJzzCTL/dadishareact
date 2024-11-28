import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://192.168.29.190:8000/',
  timeout: 1000,
});

export default customAxios;
