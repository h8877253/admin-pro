import request from 'utils/request';

export async function query(params) {
  return request({
    url: '/api/users',
    method: 'get',
    data: params,
  });
}

export async function queryCurrent(params) {
  return request({
    url: '/api/currentUser',
    method: 'get',
    data: params,
  });
}
