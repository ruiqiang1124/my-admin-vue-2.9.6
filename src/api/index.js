import request from '@/utils/request';

// 登录
export const login = param => request("/index.php?app=login", param, 'post');