import qs from 'qs'

export function postLogin(req, res, u, b) {
    let url = u;
    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url; // eslint-disable-line
    }
    const body = (b && b.body) || req.body;
    const { password, userName, type } = body;
    let result;
    if (password === '888888' && userName === 'admin') {
        const now = new Date()
    now.setDate(now.getDate() + 1)
    res.cookie('token', JSON.stringify({ name: 'test', deadline: now.getTime() }), {
      maxAge: 900000,
      httpOnly: true,
    })
      result = {
        status: 'ok',
        type,
        currentAuthority: 'admin',
      };
    } else if (password === '123456' && userName === 'user') {
        const now = new Date()
        now.setDate(now.getDate() + 1)
        res.cookie('token', JSON.stringify({ name: 'test', deadline: now.getTime() }), {
        maxAge: 900000,
        httpOnly: true,
        })
      result = {
        status: 'ok',
        type,
        currentAuthority: 'user',
      };
    } else {
        result = {
        status: 'error',
        type,
        currentAuthority: 'guest',
        };
    }
    if (res && res.json) {
      res.json(result);
    } else {
      return result;
    }
  }

  export function getCurrentUser(req, res, u) {
    let url = u;
    if (!url || Object.prototype.toString.call(url) !== '[object String]') {
      url = req.url; // eslint-disable-line
    }
    const cookie = req.headers.cookie || ''
    const cookies = qs.parse(cookie.replace(/\s/g, ''), { delimiter: ';' })
    let result;
    if (cookies.token) {
      result = {
        status: 'ok',
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        notifyCount: 12,
      };
    } else {
      result = {
        status: 'error',
        message: '未登录',
      };
    }
    if (res && res.json) {
      res.json(result);
    } else {
      return result;
    }
  }

export default {
    postLogin,
    getCurrentUser,
};
