export default [
    {
        name:'indexs',
        path:'/index',
        component:()=>import('../page/index.vue'),
        children:[
            {
                name:'test',
                path:'/index/test',
                component:()=>import('../page/test'),
                children:[
                    {
                        name:'test3',
                        path:'/index/test3',
                        component:()=>import('../page/test'),
                        hideInMenu:true
                    },
                    {
                        name:'test4',
                        path:'/index/test4',
                        component:()=>import('../page/test'),
                        hideInMenu:true
                    },
                ]
            },
            {
                name:'test1',
                path:'/index/test1',
                component:()=>import('../page/test'),
                hideInMenu:true
            }
        ]
    },
]