import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/Jeandcc/Shoe-store-with-ReactNative',
});

export default api;
