export const PageInfo = {
    name: 'test页',
    path: 'table-test',
    tableColumns: [{
        title: '序号',
        dataIndex: 'no'
    }, {
        title: '状态',
        dataIndex: 'status',
        render: (text, record, index) => {
            if (text == 1) {
                return ('通过');
            } else {
                return ('拒绝');
            }
        }
    }, {
        title: '描述',
        dataIndex: 'description'
    }, {
        title: '创建时间',
        dataIndex: 'createdAt'
    },],
    searchForms: [{
        formType: 'input',
        disabled: false,
        isRequired: false,
        key: 'name',
        label: '用户名',
        placeholder: '用户名'
    }, {
        formType: 'inputPhone',
        disabled: false,
        isRequired: false,
        pattern: /^1[34578]\d{9}$/,
        maxLen: 11,
        errorText: '请正确输入手机号',
        key: 'tel',
        label: '手机号',
        placeholder: '手机号'
    }, {
        formType: 'inputNumber',
        disabled: false,
        isRequired: false,
        pattern: /^[0-9]*$/,
        maxLen: 1000,
        errorText: '请输入自然数',
        key: 'id',
        label: '数字',
        placeholder: 'Id'
    }, {
        formType: 'inputMoney',
        disabled: false,
        isRequired: false,
        pattern: /^(([1-9]\d*)|0)(\.\d{0,2}?)?$/,
        maxLen: 100000,
        errorText: '请输入money',
        key: 'money',
        label: 'money',
        placeholder: 'money'
    }, {
        formType: 'datePicker',
        disabled: false,
        isRequired: false,
        key: 'datePicker',
        label: '时间',
        placeholder: '请选择日期'
    }, {
        formType: 'rangePicker',
        disabled: false,
        isRequired: false,
        key: 'rangePicker',
        label: '时间段',
        placeholder: '请选择日期范围'
    }, {
        formType: 'monthPicker',
        disabled: false,
        isRequired: false,
        key: 'monthPicker',
        label: '月份',
        placeholder: '请选择月份'
    }, {
        formType: 'select',
        disabled: false,
        isRequired: false,
        key: 'role',
        label: 'select',
        placeholder: 'select',
        dataType: 'static',
        selectOptions: [{
            text: '项目管理员',
            value: 1
        }, {
            text: '超级管理员',
            value: 2
        }]

    }, {
        formType: 'selectDynamic',
        disabled: false,
        isRequired: false,
        key: 'role1',
        label: '异步select',
        placeholder: 'selectDynamic',
        dataType: 'dynamic',
        dictionaryKey: 'selectLists',
        fetchUrl: '/api/selectLists'

    }, {
        formType: 'selectDynamic',
        disabled: false,
        isRequired: false,
        key: 'test1',
        label: '异步sele1',
        placeholder: 'selectDynamic1',
        dataType: 'dynamic',
        dictionaryKey: 'selectLists2',
        fetchUrl: '/api/selectLists2'

    }, {
        formType: 'selectGroup',
        disabled: false,
        isRequired: false,
        key: 'seGroup',
        label: 'seGroup',
        placeholder: 'selectGroup',
        dataType: 'static',
        selectOptions: [{
            label: '计算机',
            childrenOptions: [{
                text: 'java',
                value: 1
            }, {
                text: 'javascript',
                value: 2
            }]
        }, {
            label: 'SQL',
            childrenOptions: [{
                text: 'mysql',
                value: 3
            }, {
                text: 'mongodb',
                value: 4
            }]
        }]

    },],
    detailFormItems: [{
        formType: 'input',
        disabled: false,
        isRequired: false,
        key: 'name',
        label: '用户名',
        placeholder: '用户名',
        colSpan: 8
    }, {
        formType: 'inputPhone',
        disabled: false,
        isRequired: false,
        pattern: /^1[34578]\d{9}$/,
        maxLen: 11,
        errorText: '请正确输入手机号',
        key: 'tel',
        label: '手机号',
        placeholder: '手机号',
        colSpan: 8
    }, {
        formType: 'inputNumber',
        disabled: false,
        isRequired: false,
        pattern: /^[0-9]*$/,
        maxLen: 1000,
        errorText: '请输入自然数',
        key: 'id',
        label: '数字',
        placeholder: 'Id',
        colSpan: 8
    },
    {
        formType: 'datePicker',
        disabled: false,
        isRequired: false,
        key: 'datePicker',
        label: '时间',
        placeholder: '请选择日期',
        colSpan: 16
    },
    {
        formType: 'rangePicker',
        disabled: false,
        isRequired: false,
        key: 'rangePicker',
        label: '时间段',
        placeholder: '请选择日期范围',
        colSpan: 8
    },
        // {
        //     formType: 'monthPicker',
        //     disabled: false,
        //     isRequired: false,
        //     key: 'monthPicker',
        //     label: '月份',
        //     placeholder: '请选择月份',
        //     col: 1
        // }, {
        //     formType: 'select',
        //     disabled: false,
        //     isRequired: false,
        //     key: 'role',
        //     label: 'select',
        //     placeholder: 'select',
        //     dataType: 'static',
        //     selectOptions: [{
        //         text: '项目管理员',
        //         value: 1
        //     }, {
        //         text: '超级管理员',
        //         value: 2
        //     }],
        //     col: 1

        // }, {
        //     formType: 'selectDynamic',
        //     disabled: false,
        //     isRequired: false,
        //     key: 'role1',
        //     label: '异步select',
        //     placeholder: 'selectDynamic',
        //     dataType: 'dynamic',
        //     dictionaryKey: 'selectLists',
        //     fetchUrl: '/api/selectLists',
        //     col: 1

        // }, {
        //     formType: 'selectDynamic',
        //     disabled: false,
        //     isRequired: false,
        //     key: 'test1',
        //     label: '异步sele1',
        //     placeholder: 'selectDynamic1',
        //     dataType: 'dynamic',
        //     dictionaryKey: 'selectLists2',
        //     fetchUrl: '/api/selectLists2',
        //     col: 1

        // }, {
        //     formType: 'selectGroup',
        //     disabled: false,
        //     isRequired: false,
        //     key: 'seGroup',
        //     label: 'seGroup',
        //     placeholder: 'selectGroup',
        //     dataType: 'static',
        //     selectOptions: [{
        //         label: '计算机',
        //         childrenOptions: [{
        //             text: 'java',
        //             value: 1
        //         }, {
        //             text: 'javascript',
        //             value: 2
        //         }]
        //     }, {
        //         label: 'SQL',
        //         childrenOptions: [{
        //             text: 'mysql',
        //             value: 3
        //         }, {
        //             text: 'mongodb',
        //             value: 4
        //         }]
        //     }],
        //     col: 1

        // },
    ]
};