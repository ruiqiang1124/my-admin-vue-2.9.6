import axios from 'axios'
import {
	MessageBox,
	Message
} from 'element-ui'
// import store from '@/store'

// create an axios instance
const service = axios.create({
	baseURL: "/api", // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

/*网络请求部分*/

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		httpService({
			url: url,
			method: 'get',
			params: params
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		});
	});
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url, params = {}) {
	return new Promise((resolve, reject) => {
		service({
			url: url,
			method: 'post',
			data: params,
			timeout: 5000
		}).then(response => {
			resolve(response);
		}).catch(error => {
			reject(error);
		});
	});
}

export default {
	post
}
