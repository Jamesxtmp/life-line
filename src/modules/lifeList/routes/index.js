export default [
    {
        path: '/days',
        name: 'days',
        component: () => import(/* webpackChunkName: "Days" */ '../views/Days.vue'),
    },
    {
        path: '/ideas',
        name: 'ideas',
        component: () => import(/* webpackChunkName: "Ideas" */ '../views/Ideas.vue'),
    }
]
