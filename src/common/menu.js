import { isUrl } from 'utils/utils';

const menuData = JSON.parse(localStorage.getItem(`menus`));

function formatter(data, parentPath = '/', parentAuthority) {
  if(data instanceof Array && data.length > 1) {
    return data.map(item => {
      let { path } = item;
      if (!isUrl(path)) {
        path = parentPath + item.path;
      }
      const result = {
        ...item,
        path,
        authority: item.authority || parentAuthority,
      };
      if (item.children) {
        result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
      }
      return result;
    });
  }
  return [];
}

export const getMenuData = () => formatter(menuData);
