import axios from 'axios'

export default () => {
    const api = axios.create({
        baseURL: process.env.VUE_APP_API_ENDPOINT
    });
    api.interceptors.request.use(config => {

        return config
    })
    api.interceptors.response.use(response => {

        return response
    })
    return api;
}