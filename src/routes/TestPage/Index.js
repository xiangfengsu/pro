import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Card, Modal, Button, Input } from 'antd';
import styles from './Index.less';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import SearchForms from '../../components/GeneralSearchForm/Index';
import TableList from '../../components/GeneralTableList/Index';
import DetailFormInfo from './ModalDetailForm/Index';

import { PageInfo } from './PageInfo';
const FormItem = Form.Item;
@connect(state => ({
    rule: state.rule,
}))
@Form.create()
export default class Index extends PureComponent {
    state = {
        modalVisible: false,
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'rule/fetch',
        });
    }
    renderSearchForm = () => {
        const { form } = this.props;
        const { searchForms } = PageInfo;
        const props = {
            form,
            formInfo: {
                layout: 'inline',
                formItems: searchForms
            },
            handleSearchSubmit: () => { },
            handleFormReset: () => { }
        }
        return (
            <SearchForms {...props} />
        );
    }
    handleModalVisible = (flag) => {
        this.setState({
            modalVisible: !!flag,
        });
    }
    extraTableColumnRender = () => {
        const columns = [
            {
                title: '操作',
                render: () => (
                    <div>
                        <a href="javascript:void(0)" onClick={() => this.handleModalVisible(true)}>查看详情</a>
                    </div>
                ),
            }
        ];
        return columns;
    }
    renderTable = () => {
        const { tableColumns } = PageInfo;
        const { data: { list, pagination }, loading } = this.props.rule;
        const newTableColumns = [...tableColumns, ...this.extraTableColumnRender()];
        const tableProps = {
            dataSource: list,
            columns: newTableColumns,
            pagination,
            loading
        };
        return (<TableList {...tableProps} />);
    }
    render() {
        const { modalVisible } = this.state;
        const modalWidth = document.documentElement.clientWidth - 300;
        const { form: { getFieldDecorator } } = this.props;
        return (
            <PageHeaderLayout>
                <Card bordered={false}>
                    <div className={styles.tableList}>
                        <div className={styles.tableListForm}>
                            {this.renderSearchForm()}
                            {this.renderTable()}
                        </div>
                    </div>
                </Card>
                <Modal
                    visible={modalVisible}
                    onCancel={() => this.handleModalVisible()}
                    width={modalWidth}
                    footer={null}
                >
                    <DetailFormInfo
                        formItems={PageInfo.detailFormItems}
                        dispatch={this.props.dispatch}
                        form={this.props.form}
                    />
                </Modal>
            </PageHeaderLayout>
        );
    }
}

