import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  config.url =
    config.url + "&units=metric" + "&appid=" + process.env.REACT_APP_API_KEY;

  return config;
});

export default api;

// ("https://api.openweathermap.org/data/2.5/weather?q=London&appid=69d8d8d90382032b174c2358d9c03fe7");
