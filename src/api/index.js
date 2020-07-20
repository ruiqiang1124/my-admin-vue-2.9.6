import {post} from '@/utils/request';

// 登录
export const login = param => request("/index.php?app=login", param, 'post');

// 会员经验值列表
export const getList = param => post("/website/nc/masterData/adminRegionList", param);
