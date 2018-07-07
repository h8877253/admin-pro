import request from 'utils/request';

export async function queryProjectNotice(params) {
  return request({
    url: '/api/project/notice',
    method: 'get',
    data: params,
  });
}

export async function queryActivities(params) {
  return request({
    url: '/api/activities',
    method: 'get',
    data: params,
  });
}

export async function queryRule(params) {
  return request({
    url: '/api/rule',
    method: 'get',
    data: params,
  });
}

export async function removeRule(params) {
  return request({
    url: '/api/rule',
    method: 'delete',
    data: params,
  });
}

export async function addRule(params) {
  return request({
    url: '/api/rule',
    method: 'POST',
    data: params,
  });
}

export async function fakeSubmitForm(params) {
  return request({
    url: '/api/forms',
    method: 'POST',
    data: params,
  });
}

export async function fakeChartData(params) {
  return request({
    url: '/api/fake_chart_data',
    method: 'get',
    data: params,
  });
}

export async function queryTags(params) {
  return request({
    url: '/api/tags',
    method: 'get',
    data: params,
  });
}

export async function queryBasicProfile(params) {
  return request({
    url: '/api/profile/basic',
    method: 'get',
    data: params,
  });
}

export async function queryAdvancedProfile(params) {
  return request({
    url: '/api/profile/advanced',
    method: 'get',
    data: params,
  });
}

export async function queryFakeList(params) {
  return request({
    url: '/api/fake_list',
    method: 'get',
    data: params,
  });
}

export async function fakeAccountLogin(params) {
  return request({
    url: '/api/login/account',
    method: 'POST',
    data: params,
  });
}

export async function fakeRegister(params) {
  return request({
    url: '/api/register',
    method: 'POST',
    data: params,
  });
}

export async function queryNotices(params) {
  return request({
    url: '/api/notices',
    method: 'get',
    data: params,
  });
}

export async function queryMenu(params) {
  return request({
    url: '/api/menu',
    method: 'get',
    data: params,
  });
}

export async function checkUser(params) {
  return request({
    url: '/api/current/user',
    method: 'get',
    data: params,
  });
}
