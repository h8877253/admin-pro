import React, { Fragment } from 'react';
import { Link, Redirect, Switch, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';
import { getRoutes, getPageQuery, getQueryPath } from '../utils/utils';

const links = [
  // {
  //   key: 'help',
  //   title: '帮助',
  //   href: '',
  // },
  // {
  //   key: 'privacy',
  //   title: '隐私',
  //   href: '',
  // },
  // {
  //   key: 'terms',
  //   title: '条款',
  //   href: '',
  // },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 阅微
  </Fragment>
);

function getLoginPathWithRedirectPath() {
  const params = getPageQuery();
  const { redirect } = params;
  return getQueryPath('/user/login', {
    redirect,
  });
}

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = '管理后台';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - 管理后台`;
    }
    return title;
  }

  render() {
    const { routerData, match } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>管理后台</span>
                </Link>
              </div>
              {/* <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div> */}
              <div className={styles.desc} />
            </div>
            <Switch>
              {getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))}
              <Redirect from="/user" to={getLoginPathWithRedirectPath()} />
            </Switch>
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
