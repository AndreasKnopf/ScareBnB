import axios from 'axios';

const deployed =
  import.meta.env.VITE_API_DEPLOYED === 'true'
    ? import.meta.env.VITE_API_RENDER_BACKEND_URL
    : import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: deployed,
  withCredentials: true,
});

export default api;
