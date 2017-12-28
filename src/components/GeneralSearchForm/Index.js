import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import { Form, Row, Button, Col, Icon } from 'antd';
import { renderFormItem } from '../../common/formItem';

import styles from './Index.less';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    }
};
export default class SearchForms extends React.PureComponent {
    static propTypes = {
        formInfo: PropTypes.shape({
            layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
            formItems: PropTypes.array
        }),
        form: PropTypes.object,
        dispatch: PropTypes.func,
        handleSearchSubmit: PropTypes.func,
        handleFormReset: PropTypes.func
    }
    static defaultProps = {
        formInfo: {
            layout: 'inline',
            formItems: []
        },
        form: {},
        dispatch: () => { },
        handleSearchSubmit: () => { },
        handleFormReset: () => { }
    }
    state = {
        expandForm: false,
    }
    constructor(props) {
        super(props);
    }
    handleSearch = (e) => {
        e.preventDefault();
        const { dispatch, form, handleSearchSubmit } = this.props;
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            logs('fieldsValue', fieldsValue)
            handleSearchSubmit(fieldsValue)
        });
    }
    handleFormReset = () => {
        const { form, handleFormReset } = this.props;
        form.resetFields();
        handleFormReset();
    }
    renderFormItem = (formItems, count) => {
        const { dispatch, form: { getFieldDecorator } } = this.props;
        return formItems.map((item, i) => {
            const InputType = renderFormItem(item, getFieldDecorator, dispatch);
            return (
                <Col md={8} sm={24} key={`${item.key}_${i}`} style={{ display: i < count ? 'block' : 'none' }} >
                    <FormItem
                        {...formItemLayout}
                        label={item.label}
                    >
                        {InputType}
                    </FormItem>

                </Col>
            );
        });
    }
    getFields = () => {
        const { expandForm } = this.state;
        const { formInfo: { formItems } } = this.props;
        const count = expandForm ? formItems.length : 2;
        const children = this.renderFormItem(formItems, count);
        const buttonText = expandForm ? '收起' : '展开';
        if (!this.state.expandForm) {
            children.push(
                <Col md={8} sm={24} key={children.length}>
                    <span style={{ whiteSpace: 'nowrap', marginBottom: 24 }}>
                        <Button type="primary" htmlType="submit">查询</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                        {
                            formItems.length > 2 ? (
                                <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                                    {buttonText} <Icon type={expandForm ? 'up' : 'down'} />
                                </a>
                            ) : null
                        }
                    </span>
                </Col>
            );
        }
        return children;
    }
    toggleForm = () => {
        this.setState({
            expandForm: !this.state.expandForm
        });
    }
    render() {
        const { formInfo: { layout, formItems } } = this.props;
        const { expandForm } = this.state;
        const buttonText = expandForm ? '收起' : '展开';
        return (
            <Form
                layout={layout}
                onSubmit={this.handleSearch}
            >
                <Row gutter={{ md: 8, lg: 24, xl: 24 }}>{this.getFields()}</Row>
                {
                    expandForm ? (
                        <div style={{ overflow: 'hidden' }}>
                            <span style={{ float: 'right', marginBottom: 24 }}>
                                <Button type="primary" htmlType="submit">查询</Button>
                                <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                                {
                                    formItems.length > 2 ? (
                                        <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                                            {buttonText} <Icon type="up" />
                                        </a>
                                    ) : null
                                }
                            </span>
                        </div>
                    ) : null
                }
            </Form>
        );
    }
}