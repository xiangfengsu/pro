import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
    app,
    models: () => models.map(m => import(`../models/${m}.js`)),
    component,
});

// nav data
export const getNavData = app => [
    {
        component: dynamicWrapper(app, ['user'], () => import('../layouts/BasicLayout')),
        layout: 'BasicLayout',
        name: '首页', // for breadcrumb
        path: '',
        // icon: 'file',
        children: [
            {
                name: '后台首页',
                icon: 'dashboard',
                path: '/dashboard',
                component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList'))
            },
            {
                name: '渠道管理',
                icon: 'dashboard',
                path: '',
                children: [{
                    name: '列表页',
                    path: 'table-list',
                    component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList'))

                }, {
                    name: '渠道管理',
                    path: 'table-test',
                    component: dynamicWrapper(app, ['rule', 'dictionary'], () => import('../routes/TestPage/Index'))
                }, {
                    name: 'test',
                    path: 'table-test1',
                    component: dynamicWrapper(app, ['rule', 'dictionary'], () => import('../routes/Test/Index'))
                }]
            },
            // {
            //     name: '评估管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '评估复核管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // },
            // {
            //     name: '评估管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '评估复核管理',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '评估经理复核管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // },
            // {
            //     name: '订单管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '订单业务管理',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '视频业务管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // },
            // {
            //     name: '总部审核',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '风控审核管理',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '终止订单列表',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '客户预约管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // },
            // {
            //     name: 'GPS管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: 'GPS确认管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // },
            // {
            //     name: '确权管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '确权复核管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // }, {
            //     name: '合同管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '合同审核管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // }, {
            //     name: '最终放款管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '最终放款审批管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // }, {
            //     name: '财务管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '财务放款管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // }, {
            //     name: '车档列表',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '车档查询',
            //         path: 'table-list',
            //         component: null

            //     }]
            // }, {
            //     name: '贷后台账管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '台账明细查询',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '台账统计查询',
            //         path: 'table-list',
            //         component: null

            //     }]
            // }, {
            //     name: '贷后提醒管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '提醒订单查询',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '提醒订单管理',
            //         path: 'table-list',
            //         component: null

            //     }]
            // }, {
            //     name: '贷后催收管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '逾期订单查询',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '逾期订单管理',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '逾期审核管理',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '逾期资产处理申请',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '逾期资产处理审核',
            //         path: 'table-list',
            //         component: null

            //     }]
            // }, {
            //     name: '贷后资料变更管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '贷后资料变更申请',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '贷后资料变更审核',
            //         path: 'table-list',
            //         component: null

            //     },]
            // }, {
            //     name: '费用减免管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '费用减免申请',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '费用减免审核',
            //         path: 'table-list',
            //         component: null

            //     },]
            // }, {
            //     name: '订单结清管理',
            //     icon: 'dashboard',
            //     path: '',
            //     children: [{
            //         name: '订单结清申请',
            //         path: 'table-list',
            //         component: null

            //     }, {
            //         name: '订单结清审核',
            //         path: 'table-list',
            //         component: null

            //     },]
            // },

        ],
    },

];
export const getUserNavData = app => [
    {
        component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
        path: '/user',
        layout: 'UserLayout',
        children: [
            {
                name: '帐户',
                path: 'user',
                children: [
                    {
                        name: '登录',
                        path: 'login',
                        component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login/Index')),
                    }

                ],
            },
        ],
    },
];

