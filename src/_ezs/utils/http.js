import axios from "axios";

class Http {
    constructor() {
        this.instance = axios.create({
          baseURL: "https://ezs.vn",
          timeout: 50000,
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        });
        this.instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        // Add response interceptor
        this.instance.interceptors.response.use(
            ({ data, request }) => {
                let Total = Number(request.getResponseHeader('x-wp-total'));
                let Totalpages = Number(request.getResponseHeader('X-Wp-Totalpages'));
                return {
                    data,
                    Total,
                    Totalpages
                };
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }
}

const http = new Http().instance;
export default http;