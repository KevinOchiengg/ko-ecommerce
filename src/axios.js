import axios from 'axios';

const instance = axios.create({
  baseURL:
    'http function initialized (http://localhost:5001/looku-ecommerce/us-central1/api)',
});

export default instance;
