import mockjs from 'mockjs';
import { getRule, postRule } from './mock/rule';
import { imgMap } from './mock/utils';
import { getNotices } from './mock/notices';
import { delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
    // 支持值为 Object 和 Array
    'GET /api/selectLists': {
        status: 200,
        body: [{
            key: 'select1',
            value: 'select1'
        }, {
            key: 'select2',
            value: 'select2'
        }, {
            key: 'select3',
            value: 'select3'
        }],
        errorMessage: ''
    },
    'GET /api/selectLists2': {
        status: 200,
        body: [{
            key: 'test1',
            value: 'test1'
        }, {
            key: 'test2',
            value: 'test2'
        }, {
            key: 'test3',
            value: 'test3'
        }],
        errorMessage: ''
    },
    'GET /api/selectLists3': {
        status: 200,
        body: [{
            key: 'test31',
            value: 'test31'
        }, {
            key: 'test32',
            value: 'test32'
        }, {
            key: 'test33',
            value: 'test33'
        }],
        errorMessage: ''
    },
    'GET /api/currentUser': {
        $desc: "获取当前用户接口",
        $params: {
            pageSize: {
                desc: '分页',
                exp: 2,
            },
        },
        $body: {
            name: 'Serati Ma',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dRFVcIqZOYPcSNrlJsqQ.png',
            userid: '00000001',
            notifyCount: 12,
        },
    },
    // GET POST 可省略
    'GET /api/users': [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    }],
    'GET /api/rule': getRule,
    'POST /api/rule': {
        $params: {
            pageSize: {
                desc: '分页',
                exp: 2,
            },
        },
        $body: postRule,
    },
    'GET /api/notices': getNotices,
};

export default noProxy ? {} : delay(proxy, 1000);
