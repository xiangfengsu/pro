import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import styles from './UserLayout.less';
// import logo from '../assets/logo.svg';

const links = [{
    title: '帮助',
    href: '',
}, {
    title: '隐私',
    href: '',
}, {
    title: '条款',
    href: '',
}];

class UserLayout extends React.PureComponent {
    static childContextTypes = {
        location: PropTypes.object,
    }
    getChildContext() {
        const { location } = this.props;
        return { location };
    }
    getPageTitle() {
        const { getRouteData, location } = this.props;
        const { pathname } = location;
        let title = 'Ant Design Pro';
        getRouteData('UserLayout').forEach((item) => {
            if (item.path === pathname) {
                title = `${item.name} - 瑞博恩债权业务系统`;
            }
        });
        return title;
    }
    render() {
        const { getRouteData } = this.props;

        return (
            <DocumentTitle title={this.getPageTitle()}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div className={styles.header}>
                            <span className={styles.title}>瑞博恩债权业务系统</span>
                        </div>
                    </div>
                    {
                        getRouteData('UserLayout').map(item =>
                            (
                                <Route
                                    exact={item.exact}
                                    key={item.path}
                                    path={item.path}
                                    component={item.component}
                                />
                            )
                        )
                    }
                </div>
            </DocumentTitle>
        );
    }
}

export default UserLayout;
