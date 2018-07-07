const getMenu = [
    {
      name: '管理中心',
      icon: 'home',
      path: 'dashboard',
      children: [
        {
          name: '分析页',
          path: 'analysis',
        },
        {
          name: '工作台',
          path: 'workplace',
        },
      ],
    },
    {
      name: '基础管理',
      icon: 'setting',
      path: 'sys',
      children: [
        {
          name: '权限管理',
          path: 'perms',
        },
        {
          name: '角色管理',
          path: 'roles',
        },
      ],
    },
    {
      name: '用户中心',
      icon: 'user',
      path: 'users',
      children: [
        {
          name: '个人中心',
          path: 'info',
        },
        {
          name: '用户列表',
          path: 'list',
        },
      ],
    },
    {
      name: '交易中心',
      icon: 'pay-circle-o',
      path: 'trade',
      children: [
        {
          name: '支付订单',
          path: 'list',
        },
      ],
    },
  ];
export default {
  getMenu,
};
