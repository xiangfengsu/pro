export const PageInfo = {
    name: 'test1页',
    path: 'table-test1',
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
        label: '名字',
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
        formType: 'selectDynamic',
        disabled: false,
        isRequired: false,
        key: 'role1',
        label: 'select',
        placeholder: 'selectDynamic',
        dataType: 'dynamic',
        dictionaryKey: 'selectListsTest',
        fetchUrl: '/api/selectLists3'

    },]
};