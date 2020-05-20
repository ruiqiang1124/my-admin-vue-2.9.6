import request from '@/utils/request';

// 登录
export const login = param => request("/index.php?app=login", param, 'post');

// 会员经验值列表
export const getMemberExperienceList = param => request("static/mock/memberExperience.json");