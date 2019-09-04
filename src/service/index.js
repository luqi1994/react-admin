import {post} from "../utils/axios";

const com='https://www.easy-mock.com/mock/5be8ead3aebfd849286cd793/mock/';

// 登录接口
export function login(params) {
    return post(com + 'login', {...params})
}

