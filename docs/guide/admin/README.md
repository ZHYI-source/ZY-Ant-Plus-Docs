---
title:管理端文档
---

# ADMIN端介绍
[Vue3-Antd-Plus](https://gitee.com/Z568_568/vue3-antd-plus.git)的管理端

- 使用 Vue 3 和 Vite 构建，具备高效的开发体验和优秀的性能表现
- 集成了 Ant Design Vue 组件库，提供美观的 UI 界面和丰富的组件选项 和主题切换
- 使用 Vue Router 实现路由管理，支持多层级路由和动态路由
- 使用 Axios 处理 HTTP 请求，与后端进行数据交互
- 集成 ECharts 图表库，展示数据统计和可视化效果
- 使用 Pinia 进行状态管理，提供了一种响应式的数据流方案
- 集成 Tinymce 富文本编辑器和 Vditor Markdown 编辑器，满足不同的编辑需求
- 使用 hotkeys-js 提供快捷键支持，增强用户操作体验
- 使用 Lodash 提供常用工具函数，简化开发流程
- 集成了测试工具集 @vue/test-utils 和 vitest，方便进行单元测试


## 目录说明

```bash
.
├── public # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件夹
│   ├── assets # 资源文件
│   │   ├── img # 项目存放图片的文件夹
│   │   ├── styles # 项目存放公共样式的文件夹
│   │   └── logo.svg # 项目logo
│   ├── components # 公共组件
│   ├── directives # 全局自定义指令
│   ├── hooks # 全局hooks
│   ├── layout # 项目布局文件夹
│   ├── libs # 插件及工具类文件夹
│   ├── router # 路由配置
│   ├── stores # 数据仓库
│   ├── views # 页面
│   ├── App.vue # 入口页面
│   ├── main.js # 入口js文件
│   └── setting.js # 项目配置文件
├── .env # 开发或者生产环境都会加载的配置文件
├── .env.development # 开发环境配置文件
├── .env.production # 生产环境配置文件
└── vite.config.js # vite配置文件
```
## 启动项目


1. 安装依赖 （如果已经安装可以直接进行下一步）
切换值ADMIN客户端根目录下输入启动命令
```shell script
npm i
```


2. 查看 `vite.config.js` vite配置文件内的代理地址内的`proxy`的 `target`指向的地址需要和 SERVER服务端启动成功后的地址一致,
否则会代理失败

```js
   server: {
        //本地服务器主机名 配置后可以使用本地网络访问
        host: '0.0.0.0',
        //指定启动端口号
        port: 3002,
        //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        strictPort: false,
        //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
        open: true,
        proxy: {
            '/v1': {
                target: ' http://localhost:3089',
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    }
```

3. 切换值ADMIN客户端根目录下输入启动命令

```shell script
npm run dev
```

也可以在ADMIN客户端根目录下查看`package.json`启动命令

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "build:dev": "vite build --mode development",
    "build:pro": "vite build --mode production",
    "test:unit": "vitest"
  },
```
## 启动成功

端口号不一定相同，出现链接即可

登录超级管理员账号密码：admin  admin

```js
  VITE v4.2.1  ready in 1229 ms

  ➜  Local:   http://localhost:3088/
  ➜  Network: http://192.168.160.214:3088/
  ➜  Network: http://192.168.12.108:3088/
  ➜  press h to show help
```

## 项目配置
对项目全局的的配置信息, 可以自定义部分设置包括站点信息、快捷键、页脚、主题等等

```js
export default {
    // 网站信息
    websiteInfo: {
        name: 'ZY·Admin',
        version: '1.0.0',
        desc: '开箱即用的中后台管理系统',
        // logo仅支持在线地址
        // logo: 'http://zhouyi.run:5222/api/public/admin/getFiles?id=5d38c26acf509bdcab4f8c677ce90088.png&&mimetype=image/png',
    },


    // 快捷键
    // 支持快捷键 例如 ctrl+shift+s
    hotkey: {
        search: {
            open: 's',
            close: 'esc'
        }
    },
    // 页脚备案信息
    reference: {
        show: true, //是否展示页脚
        number: '黔ICP备2022001745号-1',//备案号
        authorization: '芒果快熟', // 站点所属机构
        authorizationUrl: 'https://gitee.com/Z568_568', // 站点所属机构链接
    },
    // 注册的主题  fixed:true, 默认主题（必填一个）
    theme: {
        list: [
            {
                name: '金色沙滩',
                fixed: true,
                value: {
                    primaryColor: '#d2b48c',
                    errorColor: '#c98a7d',
                    warningColor: '#e2b14c',
                    successColor: '#80b178',
                    infoColor: '#d8c49a',
                }
            },
            {
                name: '薄荷清新',
                value: {
                    primaryColor: '#88c7b1',
                    errorColor: '#e88f78',
                    warningColor: '#f0c175',
                    successColor: '#85b17e',
                    infoColor: '#c6d4a2',
                }

            },
            ......
        ]
    },
}

```

## 路由
配置路由守卫拦截器在`src/router/index.js` 内进行。
注册路由配置于`src/router/routes.js` 内进行。

package.json

```json
  "dependencies": {
    "vue": "^3.2.47",
    "vue-router": "^4.1.6"
  },
```


### 配置
#### 模块说明
在`src/router/index.js`内配置路由守卫拦截器。

在`router`实例中设置不同路由页面跳转后回到顶部
```js
const router = createRouter({
    // 采用哈希路由模式
    history: createWebHashHistory(import.meta.env.BASE_URL),
    // 回到顶部
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    },
    routes
})
```
在 beforeEach 和 afterEach 中设置相应的操作
- beforeEach 
设置登录状态、权限判断等等
```js
router.beforeEach(async (to, from, next) => {
    const searchStore = useSearchStore()
    searchStore.showSearchPanel(false)
    // 检查是否需要登录
    if (to.meta.requiresAuth) {
        const isLoggedIn = dbUtils.get('token')
        // 检查用户是否已经登录
        if (isLoggedIn) {
            // 已经登录 访问登录页则直接跳到主页
            if (to.name === 'login') {
                return next('/');
            }
            // 已经登录 访问非登录页则需要验证权限
            const permissionList = dbUtils.get('perms');
            // 如果还未找到缓存的权限数组则返回登录页
            if (!permissionList) {
                // 清空所有缓存数据
                dbUtils.clear()
                // 重定向到登录页
                return next({name: 'login'});
            }
            const hasRoles = hasPermission(permissionList, to)
            if (hasRoles) {
                // 有权限直接访问
                return next();
            }
            // 无权限则重定向到401
            return next({name: '401'});
        }
        // 未登录
        // 清空所有缓存数据
        dbUtils.clear()
        // 重定向到登录页
        return next({name: 'login'});
    }
    // 无需登录的页面 直接访问即可
    next();
});
```
- afterEach 
可以设置页面浏览器标题等等

```js
router.afterEach((to, from) => {
    window.document.title = to.meta.title + " - ZY'Admin";
})
```

## 注册路由
 在`src/router/routes.js`内配置页面路由。
 路由表结构分为
 - frameIn 在主框架内显示
 - frameOut 在主框架之外显示
 - errorPage 错误页面
### 一个路由模块包含以下结构
框架内的路由全部在 `layout`这个顶级组件内注册
```js
// 系统管理>用户管理 为例
const frameIn = [
    {
        path: '/',
        redirect: {name: 'index'},
        component: () => import('@/layout/index.vue'),
        /*************************************************************************************/
        /********************children 建议最多 再加一级children  否则侧边栏体验不好*********************/
        /*************************************************************************************/
        children: [
            {
                path: '/sys',
                name: 'sys',
                meta: {
                    title: '系统管理',
                    icon: 'shezhi',
                    requiresAuth: true,

                },
                children: [
                    {
                        path: '/dir-users-info',
                        name: 'dir-users-info',
                        meta: {
                            title: '用户管理',
                            icon: 'yonghuguanli',
                            requiresAuth: true,
                            perms: [
                                'sys:users:list',
                                'sys:users:create',
                                'sys:users:update',
                                'sys:users:delete',
                                'sys:users:reset',
                            ],
                        },
                        component: () => import('@/views/sys/users/dir-users-info.vue'),
                    }
                ]
            },
        ]
    },
]
```
## Meta配置说明
```js
{
      path: '/dir-demo-info',    // 页面地址（唯一）
      name: 'dir-demo-info',     // 页面名称（唯一）
      hidden: false,              // 隐藏（不展示在侧边栏菜单）
      meta: {
          title: '用户管理',       // 页面标题
          icon: 'yonghuguanli',  // 页面图标
          cache: true,          // 页面是否进行缓存 默认true
          link: false,           // 页面是否是外链 默认false
          frameSrc: false,       // 页面是否是内嵌 默认false
          requiresAuth: true,   // 页面是否是需要登录 默认true
          perms: [               // 页面的操作的权限列表
              'sys:users:list',   // 查询
              'sys:users:create', // 增加
              'sys:users:update', // 更新
              'sys:users:delete', // 删除
          ],
      },
      component: () => import('@/views/sys/users/dir-users-info.vue'),// 懒加载页面组件
   }
```

## 多级路由
在路由的`children`属性中增加即可

## 内嵌路由
在路由的`meta`属性中 `frameSrc`设置为 具体的内嵌地址即可
```js
// 内嵌示例
{
   path: 'homepage',
   name: 'homepage',
   meta: {
        frameSrc: 'http://www.zhouyi.run/#/', // 具体内嵌地址
        title: '个人主页',
        icon: 'wailian_icon',
   },
   component: () => import('@/views/sys/frame/dir-frame-info.vue'),
},
```
## 外链路由
在路由的`meta`属性中 `link`设置为true,并且路由的`path`设置具体的外链地址即可
```js
// 外链示例
{
   path: 'https://gitee.com/Z568_568',
   name: 'homepage',
   meta: {
        link: true,
        title: '源码',
        icon: 'github'
   },
},
```
## icon图标
- 在 **开发工具>图标列表** 页面内选取图标名称
- 或者在`ADMIN\src\views\dev\icon\data\iconfont.json`中选择图标的 `font_class`的值

## 添加新页面
1. 在`src/router/routes.js`内新增一个路由模块

示例,在`src/router/routes.js`下框架内系统管理模块下新增 **用户管理页面**(`ADMIN\src\views\sys\users\dir-users-info.vue`) 文件 （带有权限验证的页面）
```js
const frameIn = [
    {
        path: '/',
        redirect: {name: 'index'},
        component: () => import('@/layout/index.vue'),
        /*************************************************************************************/
        /********************children 建议最多 再加一级children  否则侧边栏体验不好*********************/
        /*************************************************************************************/
        children: [
            {
                path: '/sys',
                name: 'sys',
                meta: {
                    title: '系统管理',
                    icon: 'shezhi',
                    requiresAuth: true,
                },
                children: [
                    {
                        path: '/dir-users-info',
                        name: 'dir-users-info',
                        meta: {
                            title: '用户管理',
                            icon: 'yonghuguanli',
                            requiresAuth: true,
                            perms: [
                                'sys:users:list',
                                'sys:users:create',
                                'sys:users:update',
                                'sys:users:delete',
                                'sys:users:reset',
                            ],
                        },
                        component: () => import('@/views/sys/users/dir-users-info.vue'),
                    }
                ]
            },
        ]
    },
]
```
:::tip
如果是增加无权限的页面，则可以将 `meta`内的 `requiresAuth`和`perms`属性去掉即可
:::

到这里你路由已经添加完成

## 验证
您可以尝试访问 `ip:端口/#/dir-users-info`出现对应组件内容即代表成功


## 菜单



