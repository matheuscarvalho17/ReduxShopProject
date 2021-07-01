import axios from 'axios';

const api = axios.create({
	//baseURL: 'http://localhost:3000', //MAC OS
	baseURL: 'http://10.0.2.2:3000', //Android
});

export default api;
