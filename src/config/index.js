import axios from "axios";

const axiosUrl = axios.create({ baseURL: "https://fakestoreapi.com" });

export default axiosUrl;
