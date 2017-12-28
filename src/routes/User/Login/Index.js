import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Input, Button, Icon, Checkbox, Row, Col, Alert } from 'antd';
import styles from './Index.less';

const FormItem = Form.Item;

@connect(state => ({
    login: state.login,
}))
@Form.create()
export default class Login extends Component {
    state = {
        count: 0,
        type: 'account',
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onSwitch = (type) => {
        this.setState({ type });
    }

    onGetCaptcha = () => {
        let count = 59;
        this.setState({ count });
        this.interval = setInterval(() => {
            count -= 1;
            this.setState({ count });
            if (count === 0) {
                clearInterval(this.interval);
            }
        }, 1000);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields({ force: true },
            (err, values) => {
                if (!err) {
                    this.props.dispatch({
                        type: 'login/login',
                        payload: {
                            ...values,
                            type: this.state.type,
                        },
                    });
                }
            }
        );
    }

    renderMessage = (message) => {
        return (
            <Alert
                style={{ marginBottom: 24 }}
                message={message}
                type="error"
                showIcon
            />
        );
    }

    render() {
        const { form, login } = this.props;
        const { getFieldDecorator } = form;
        const { count, type } = this.state;
        return (
            <div className={styles.main}>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{
                                        required: true, message: '请输入账户名！',
                                    }],
                                })(
                                    <Input
                                        size="large"
                                        prefix={<Icon type="user" className={styles.prefixIcon} />}
                                        placeholder="admin"
                                    />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: type === 'account', message: '请输入密码！',
                                    }],
                                })(
                                    <Input
                                        size="large"
                                        prefix={<Icon type="lock" className={styles.prefixIcon} />}
                                        type="password"
                                        placeholder="888888"
                                    />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={14}>
                            <FormItem>
                                {getFieldDecorator('userName1', {
                                    rules: [{
                                        required: true, message: '请输入验证码！',
                                    }],
                                })(
                                    <Input
                                        size="large"
                                        prefix={<Icon type="safety" className={styles.prefixIcon} />}
                                        placeholder="请输入验证码"
                                    />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={8} offset={2}>
                            <img src="http://fhmcar.chunlvbank.com/FHM_car300/code.do?t=1514361580358" style={{ float: 'right', height: 32, marginTop: 2 }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormItem className={styles.additional}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox className={styles.autoLogin}>自动登录</Checkbox>
                                    )}
                                <a className={styles.forgot} href="javascript:void(0)">忘记密码</a>
                                <Button size="large" loading={login.submitting} className={styles.submit} type="primary" htmlType="submit">
                                    登录
                        </Button>
                            </FormItem>
                        </Col>
                    </Row>

                </Form>

            </div>
        );
    }
}
