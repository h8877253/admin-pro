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
          name: '监控页',
          path: 'monitor',
        },
        {
          name: '工作台',
          path: 'workplace',
          // hideInBreadcrumb: true,
          // hideInMenu: true,
        },
      ],
    },
    // {
    //   name: '表单页',
    //   icon: 'form',
    //   path: 'form',
    //   children: [
    //     {
    //       name: '基础表单',
    //       path: 'basic-form',
    //     },
    //     {
    //       name: '分步表单',
    //       path: 'step-form',
    //     },
    //     {
    //       name: '高级表单',
    //       authority: 'admin',
    //       path: 'advanced-form',
    //     },
    //   ],
    // },
    // {
    //   name: '列表页',
    //   icon: 'table',
    //   path: 'list',
    //   children: [
    //     {
    //       name: '查询表格',
    //       path: 'table-list',
    //     },
    //     {
    //       name: '标准列表',
    //       path: 'basic-list',
    //     },
    //     {
    //       name: '卡片列表',
    //       path: 'card-list',
    //     },
    //     {
    //       name: '搜索列表',
    //       path: 'search',
    //       children: [
    //         {
    //           name: '搜索列表（文章）',
    //           path: 'articles',
    //         },
    //         {
    //           name: '搜索列表（项目）',
    //           path: 'projects',
    //         },
    //         {
    //           name: '搜索列表（应用）',
    //           path: 'applications',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: '详情页',
    //   icon: 'profile',
    //   path: 'profile',
    //   children: [
    //     {
    //       name: '基础详情页',
    //       path: 'basic',
    //     },
    //     {
    //       name: '高级详情页',
    //       path: 'advanced',
    //       authority: 'admin',
    //     },
    //   ],
    // },
    // {
    //   name: '结果页',
    //   icon: 'check-circle-o',
    //   path: 'result',
    //   children: [
    //     {
    //       name: '成功',
    //       path: 'success',
    //     },
    //     {
    //       name: '失败',
    //       path: 'fail',
    //     },
    //   ],
    // },
    // {
    //   name: '异常页',
    //   icon: 'warning',
    //   path: 'exception',
    //   children: [
    //     {
    //       name: '403',
    //       path: '403',
    //     },
    //     {
    //       name: '404',
    //       path: '404',
    //     },
    //     {
    //       name: '500',
    //       path: '500',
    //     },
    //     {
    //       name: '触发异常',
    //       path: 'trigger',
    //       hideInMenu: true,
    //     },
    //   ],
    // },
    // {
    //   name: '账户',
    //   icon: 'user',
    //   path: 'user',
    //   authority: 'guest',
    //   children: [
    //     {
    //       name: '登录',
    //       path: 'login',
    //     },
    //     {
    //       name: '注册',
    //       path: 'register',
    //     },
    //     {
    //       name: '注册结果',
    //       path: 'register-result',
    //     },
    //   ],
    // },
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
