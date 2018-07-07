import request from 'utils/request';

export async function query(params) {
  return request({
    url: `/api/${params.code}`,
    method: 'post',
    data: params,
  });
}
