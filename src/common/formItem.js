import { Form, Row, Input, InputNumber, Switch, Tooltip, Button, Select, Col, TimePicker, Upload, Icon, DatePicker } from 'antd';

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

export const renderFormItem = (item, getFieldDecorator, dispatch) => {
    let InputType = null;
    switch (item.formType) {
        case 'input':
            InputType = getFieldDecorator(item.key, {
                initialValue: '',
                rules: [{
                    required: item.isRequired,
                    message: `${item.label}不能为空`
                }]
            })(
                <Input disabled={item.disabled} type='text' placeholder={`请输入${item.placeholder}`} />
                )
            break;
        case 'inputNumber':
            InputType = getFieldDecorator(item.key, {
                initialValue: '',
                rules: [{
                    required: item.isRequired,
                    message: item.errorText,
                    pattern: item.pattern,
                    max: item.maxLen
                }]
            })(
                <InputNumber disabled={item.disabled} placeholder={`请输入${item.placeholder}`} style={{ width: '100%' }} />
                )
            break;
        case 'inputMoney':
            InputType = getFieldDecorator(item.key, {
                initialValue: '',
                rules: [{
                    required: item.isRequired,
                    message: item.errorText,
                    pattern: item.pattern,
                    max: item.maxLen
                }]
            })(
                <Input addonAfter="元" disabled={item.disabled} placeholder={`请输入${item.placeholder}`} style={{ width: '100%' }} />
                )
            break;
        case 'inputPhone':
            InputType = getFieldDecorator(item.key, {
                initialValue: '',
                rules: [{
                    required: item.isRequired,
                    message: item.errorText,
                    pattern: item.pattern,
                    max: item.maxLen
                }]
            })(
                <Input disabled={item.disabled} type='tel' maxLength="11" placeholder={`请输入${item.placeholder}`} />
                )
            break;
        case 'select':
            InputType = getFieldDecorator(item.key, {
                // initialValue: '',
                rules: [{
                    required: item.isRequired,
                    message: `${item.label}不能为空`
                }]
            })(
                <Select
                    placeholder={`请选择${item.placeholder}`}
                >
                    {
                        item.selectOptions.map((option, i) => {
                            return (
                                <Select.Option
                                    key={`${option.value}_i`}
                                    value={option.value}
                                >
                                    {option.text}
                                </Select.Option>)
                        })
                    }
                </Select>
                )
            break;
        case 'selectDynamic':
            const DynamicSelect = require('../components/DynamicSelect/Index');
            InputType = getFieldDecorator(item.key, {
                initialValue: { selectValue: undefined },
                rules: [{
                    required: item.isRequired,
                    message: `${item.label}不能为空`
                }]
            })(<DynamicSelect
                dispatch={dispatch}
                dictionaryKey={item.dictionaryKey}
                placeholder={item.placeholder}
                fetchUrl={item.fetchUrl}
            />)
            break;
        case 'selectGroup':
            InputType = getFieldDecorator(item.key, {
                // initialValue: '',
                rules: [{
                    required: item.isRequired,
                    message: `${item.label}不能为空`
                }]
            })(
                <Select placeholder={`请选择${item.label}`}>
                    {
                        item.selectOptions.map((option, i) => {
                            return (
                                <Select.OptGroup label={option.label} key={`${i}_t`}>
                                    {
                                        option.childrenOptions.map((v, j) => {
                                            return (
                                                <Select.Option
                                                    value={v.value}
                                                    key={`${i}_${j}`}
                                                >
                                                    {v.text}
                                                </Select.Option>
                                            )
                                        })
                                    }
                                </Select.OptGroup>
                            )
                        })
                    }
                </Select>
                )
            break;
        case 'datePicker':
            InputType = getFieldDecorator(item.key, {
                // initialValue: '',
                rules: [{
                    type: 'object',
                    required: item.isRequired,
                    message: `${item.label}不能为空`
                }]
            })(
                <DatePicker style={{ width: '100%' }} placeholder={`${item.placeholder}`} />
                )
            break;
        case 'rangePicker':
            InputType = getFieldDecorator(item.key, {
                // initialValue: '',
                rules: [{
                    type: 'array',
                    required: item.isRequired,
                    message: `${item.label}不能为空`
                }]
            })(
                <RangePicker style={{ width: '100%' }} />
                )
            break;
        case 'monthPicker':
            InputType = getFieldDecorator(item.key, {
                // initialValue: '',
                rules: [{
                    type: 'object',
                    required: item.isRequired,
                    message: `${item.label}不能为空`
                }]
            })(
                <MonthPicker placeholder={`${item.placeholder}`} style={{ width: '100%' }} />
                )
            break;
    }
    return InputType;
}