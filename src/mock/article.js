const Mock = require('mockjs');
const Random = Mock.Random
// 设置mock过期时间
Mock.setup({
    timeout: 6000
})
  
  // 设置的模拟数据
  const articles = Mock.mock({

    'data|1-10': [
      {
        "id|+1": 1,
        'time': Random.datetime(),
        "name": "@FIRST",
        "importance": '@integer(1, 5)',
        "title": "@title(5, 10)"
      }
    ],
    "state": 200
  })
Mock.mock("/api/article/list",'get', res => {
    return {
        articles
    }
})