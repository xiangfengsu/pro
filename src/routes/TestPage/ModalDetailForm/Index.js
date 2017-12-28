import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Card, Button, Input, Tabs } from 'antd';

import { renderFormItem } from '../../../common/formItem';
import styles from './Index.less';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    }
};
export default class DetailFormInfo extends PureComponent {
    constructor(props) {
        super(props);
    }
    renderFormItem = () => {
        const { formItems, dispatch, form: { getFieldDecorator } } = this.props;
        return formItems.map((item, i) => {
            const InputType = renderFormItem(item, getFieldDecorator, dispatch);
            return (
                <Col lg={item.colSpan} md={12} sm={24} key={`${item.key}_${i}`} >
                    <FormItem
                        label={`${item.label}_${item.colSpan}`}
                    >
                        {InputType}
                    </FormItem>

                </Col>
            );
        });
    }

    render() {

        return (
            <Card bordered={false} loading={false}>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="仓库管理1" key="1">
                        <Form layout="vertical" hideRequiredMark>
                            <Row gutter={24}>
                                {this.renderFormItem()}
                            </Row>

                        </Form>
                    </TabPane>
                </Tabs>
            </Card>

        );
    }



}