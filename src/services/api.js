import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketmovies-backend-f4b4.onrender.com'
});