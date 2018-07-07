import { parse } from 'url';
import Mock from 'mockjs'

// mock
let postId = 0
const users = Mock.mock({
  'data|100': [
    {
      id () {
        postId += 1
        return postId + 10000
      },
      name: '@name',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|11-99': 1,
      email: '@email',
      createTime: '@datetime',
    },
  ],
}).data

export function getUsers(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }
  const params = parse(url, true).query;
  let page = 1
  let pageSize = 10
  if(params.current){
    page = params.current
  }
  if(params.pageSize){
    pageSize = params.pageSize
  }
  const result = {
    list: users.slice((page - 1) * pageSize, page * pageSize),
    pagination: {
      total: users.length,
      pageSize,
      current: parseInt(params.current, 10) || 1,
    },
  };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}

export default {
  getUsers,
};
