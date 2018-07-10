import request from 'utils/request';

export async function query(params) {
  return request({
    url: '/api/sys/roles',
    method: 'get',
    data: params,
  });
}