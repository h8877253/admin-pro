import { query } from 'services/users/list';

export default {
  namespace: 'sysPerms',

  state: {
    list: [],
    pagination: {
        showTotal: total => `总共 ${total} 条`,
        current: 1,
        total: 0,
        pageSize: 10,
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(query, payload);
      yield put({
        type: 'queryList',
        payload: response.data,
      });
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
        const { list, pagination } = payload
        return {
          ...state,
          list,
          pagination: {
            ...state.pagination,
            ...pagination,
          },
        }
    },
      
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    appendList(state, action) {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
  },
}
