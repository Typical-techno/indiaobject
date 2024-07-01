import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://objectindia-backend.onrender.com/api/',
  timeout: 10000,
  withCredentials: true, // Ensure credentials are sent with CORS requests
});

// Function to retrieve CSRF token from cookies
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

// Axios request interceptor to set headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // Retrieve JWT token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set Authorization header with JWT token
    }

    // Set CSRF token from cookies
    const csrfToken = getCookie('XSRF-TOKEN');
    if (csrfToken) {
      config.headers['X-XSRF-TOKEN'] = csrfToken; // Set X-XSRF-TOKEN header
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
