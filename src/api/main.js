import axios from 'axios'
axios.defaults.baseURL = 'http://10.200.224.10/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export default axios
