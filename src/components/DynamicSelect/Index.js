import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'dva';

import { Select, Input } from 'antd';
const Option = Select.Option;

@connect(state => ({
    dictionary: state.dictionary,
}))
export default class DynamicSelect extends Component {
    constructor(props) {
        super(props);
        const value = this.props.value || {};
        this.state = {
            selectValue: value.selectValue
        };
    }
    componentDidMount() {
        const { dispatch, fetchUrl, dictionaryKey } = this.props;
        dispatch({
            type: 'dictionary/query',
            payload: {
                fetchUrl,
                dictionaryKey
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            const value = nextProps.value;
            this.setState(value);
        }
    }
    handleCurrencyChange = (selectValue) => {
        if (!('value' in this.props)) {
            this.setState({ selectValue });
        }
        this.triggerChange({ selectValue });
    }
    triggerChange = (changedValue) => {
        // Should provide an event to pass value to Form.
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    }
    render() {
        const state = this.state;
        const { dictionary = {}, dictionaryKey, placeholder } = this.props;
        return (
            <Select
                value={state.selectValue}
                placeholder={placeholder}
                style={{ width: '100%' }}
                onChange={this.handleCurrencyChange}
            >
                {
                    dictionary[dictionaryKey] && dictionary[dictionaryKey].map((v, i) => {
                        return (
                            <Option value={v.value} key={v.key}>
                                {v.value}
                            </Option>
                        )
                    })
                }
            </Select>

        );
    }
}



