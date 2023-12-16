import axios from "axios";


export const publicApi = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=`
});
