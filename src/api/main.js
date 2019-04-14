import {BASESERVERIP} from "../config";
import axios from 'axios'
import Token from '../Storages/LocalStorages/Token'
axios.defaults.baseURL = BASESERVERIP;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['token'] = Token.getToken()

export default axios
