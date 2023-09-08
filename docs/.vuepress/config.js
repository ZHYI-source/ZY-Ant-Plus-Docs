
module.exports = {
    title: 'Vue3-Antd-Plus',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    base:'/vue3-antd-plus/',
    description: '👍 后台管理系统提供了一个基于最新的技术栈（Vue 3、Vite、Ant Design Vue 3、JavaScript、Pinia、Hooks和vue-router）的完整开发模板，旨在帮助初学者更快地入门并加入团队开发。该模板包含了一系列功能模块，如大屏展示、自定义主题、角色用户、菜单授权、数据权限和系统参数等，并且所有模块都经过了完整的组件封装',
    themeConfig: {
        // logo: '/logo.png',
        nav: [
            { text: "首页", link: "/" },
            { text: "文档教程", link: "/guide/intro/" },
            { text: "在线预览", link: "http://admin.zhouyi.run/#/index" },
            {
                text: "关于作者",
                items: [
                    { text: "个人主页", link: "http://www.zhouyi.run" },
                    { text: "博客站点", link: "http://www.zhouyi.run/#/blog" },
                    { text: "码云", link: "https://gitee.com/Z568_568" },
                    { text: "Github", link: "https://github.com/ZHYI-source" }
                ]
            }
        ],
        displayAllHeaders: true,
        colorModeSwitch:true,
        toggleColorMode:true,
        sidebar: [
            {
                title: '介绍',   // 必要的
                path: '/guide/intro/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '开始',   // 必要的
                children: [
                    '/guide/'
                ]
            },
            {
                title: '服务端',   // 必要的
                sidebarDepth: 2,
                children: [
                    '/guide/server/'
                ]
            },
            {
                title: '管理端',   // 必要的
                children: [
                    '/guide/admin/'
                ]
            },
            {
                title: '客户端',   // 必要的
                children: [
                    '/guide/client/'
                ]
            },
        ],
        lastUpdated: 'Last Updated',
        toggleSidebar:true,
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        smoothScroll: true,

    },
    markdown:{
        lineNumbers:true
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@public': '/public'
            }
        }
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',

    ]
}
