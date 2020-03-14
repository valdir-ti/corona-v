import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/',
  headers: {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	  "x-rapidapi-key": "cc5be765a1msh6221e5d4ebdff23p15f16ajsne7a5e6b4db32"
  }
});

export default api;