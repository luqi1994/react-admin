import axios from 'axios'
import qs from 'qs'
// import { message } from 'antd';

/**
 * 封装post与get
 * @param url       接口地址
 * @param data      接口数据
 */
export async function post(url, params) {
    let data = qs.stringify(params);
    return new Promise((resolve, reject) => {
        axios.post(url, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
export async function get(url, params) {
    let data = qs.stringify(params);
    return new Promise((resolve, reject) => {
        axios.get(url, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

