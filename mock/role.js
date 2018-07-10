import { parse } from 'url';

const roles = [
    {
      id: '1',
      name: '大商户',
    },
    {
      id: '2',
      name: '普通商户',
    },
    {
      id: '3',
      name: '虚拟商户',
    },
  ];


  export function getRole(req, res, u) {
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
    list: roles.slice((page - 1) * pageSize, page * pageSize),
    pagination: {
      total: roles.length,
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
  getRole,
};
