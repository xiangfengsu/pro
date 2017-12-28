import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import styles from './Index.less';
export default class TableList extends PureComponent {
    static propTypes = {
        dataSource: PropTypes.array,
        columns: PropTypes.array,
        bordered: PropTypes.bool,
        size: PropTypes.oneOf(['default', 'small']),
    }
    static defaultProps = {
        dataSource: [],
        columns: [],
        bordered: true,
        size: 'default'
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { size, dataSource, columns, bordered, pagination, loading } = this.props;
        return (
            <Table
                bordered={bordered}
                dataSource={dataSource}
                columns={columns}
                loading={loading}
                rowKey={record => record.key}
                size={size}
            // pagination={pagination}
            />
        );
    }
} 
