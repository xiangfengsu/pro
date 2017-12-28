import React from 'react';
import { Link } from 'dva/router';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import styles from './PageHeaderLayout.less';

export default ({ children, wrapperClassName, top, ...restProps }) => (
    <div style={{ paddingBottom: '48px' }} className={wrapperClassName}>
        {top}
        <PageHeader linkElement={Link} />
        {children ? <div className={styles.content} >{children}</div> : null}
    </div>
);
