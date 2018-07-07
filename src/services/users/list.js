import request from 'utils/request';

export async function query(params) {
  return request({
    url: '/api/users/list',
    method: 'get',
    data: params,
  });
}