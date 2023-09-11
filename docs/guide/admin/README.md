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

## 添加新路由
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
本项目菜单列表并未做动态自定义，需要修改路由配置达到修改菜单的目的

**✨待优化的一个点**

## 菜单列表生成
菜单列表的生成根据 `ADMIN/src/router/routes.js` 内配置的框架内`frameIn`路由内容进行递归生成

### 实现
具体实现方法在`ADMIN/src/libs/util.menu.js`的`menuList`函数

里面处理的有关权限控制等，在权限有具体说明

```js
import {useRouter} from 'vue-router'
import dbUtils from "./util.strotage";

/**
 * 检查路由对象是否具有权限
 * @param {Array} perms - 权限列表
 * @param {Object} route - 路由对象
 * @returns {boolean} - 是否具有权限
 */
function hasPermission(perms, route) {
    if (route.meta && route.meta.perms) {
        // 如果路由对象定义了 meta 属性或者定义 meta.perms 属性，那么就根据权限值来判断是否具有权限
        return perms.some(perm => route.meta.perms.includes(perm))
    } else {
        // 如果路由对象没有定义 meta 属性或者没有定义 meta.perms 属性，那么默认认为具有权限，返回 true。
        return true
    }
}

/**
 * 根据权限列表筛选异步路由配置
 * @param {Array} routes - 路由配置表
 * @param {Array} perms - 权限列表
 * @returns {Array} - 筛选后的路由配置
 */
function filterAsyncRouter(routes, perms) {
    const res = []

    routes.forEach(route => {
        // 创建临时变量 tmp  可以在后续的操作中不会修改原始的路由对象。
        const tmp = {...route}
        if (!tmp.hidden && tmp.children) {
            // 先对子路由进行深度筛选，确保子路由也符合权限要求
            tmp.children = filterAsyncRouter(tmp.children, perms)
            if (tmp.children && tmp.children.length > 0) {
                res.push(tmp)
            }
        } else {
            // 对于没有子路由的路由对象，直接进行权限判断
            if (!tmp.hidden && hasPermission(perms, tmp)) {
                res.push(tmp)
            }
        }
    })

    return res
}


export const menuList = function () {
    const asyncRoutes = useRouter().options.routes[0].children.filter(e => !e.hidden)
    //筛选路由表
    const permissionList = dbUtils.get('perms');
    if (!permissionList.length) {
        // 清空所有缓存数据
        dbUtils.clear()
        // 重置路由重新登录
        return useRouter().replace('/login')
    }
    let accessedRouters
    if (permissionList.includes('*')) {
        accessedRouters = asyncRoutes
    } else {
        accessedRouters = filterAsyncRouter(asyncRoutes, permissionList);
    }
    return accessedRouters
}
```

## 添加新菜单

- 需要注意的是有权限和无权限的菜单配置

[添加新路由](/guide/admin/#添加新路由)即可


## 权限

:::tip
权限是基于 `RBAC` 的权限管理模型,对用户的权限修改后需要重新登录才能刷新用户权限
:::

项目中我采用的权限设计方案属于**基于角色的访问控制**（`Role-Based Access Control`，`RBAC`）。**`RBAC`** 是一种常见且广泛使用的权限管理模型，它通过将用户分配到不同的角色，然后将角色与特定的权限关联，来实现对系统资源的访问控制。

基于`RBAC` 模型的权限设计方案有四个部分：

1. **角色（Roles）**： 角色是一组用户，这些用户在系统中具有相似的权限需求。每个角色都会被分配一组权限，然后**用户被分配到角色而不是直接分配权限**。
2. **权限（Permissions）**： 权限定义了用户可以执行的操作或访问的资源。每个角色都会被授予一组权限，这些权限定义了该角色所能执行的操作。
3. **用户（Users）**： 用户是系统的最终操作者。每个用户都会被分配一个或多个角色（项目中没有使用多角色），这些角色决定了他们在系统中的权限。
4. **前端路由匹配** ： 前端根据用户的角色和权限信息，动态生成菜单和路由。这意味着当用户登录系统时，前端会根据用户的角色查询其对应的权限，然后根据权限配置来渲染出适当的菜单和页面。

在 `RBAC` 模型中，角色充当了用户和权限之间的中介，简化了权限管理和维护。

## 后端数据库设计

<img src="http://www.zhouyi.run:3089/v1/common/files/preview/img/1692086718222.png" alt="1692086718222.png" width="100%">


在上图中可以看到有张权限表里面数据都是各种操作接口的标识：

用户查询操作 `sys:users:list`、角色查询操作 `sys:roles:list` 、权限管理查询操作`sys:permissions:list`。

很容易看出权限基本关系是：**当用户登录后再查询出角色信息，然后关联出角色对应的权限信息**。

## 前端权限设计
原理：**根据权限表数据和路由元信息进行匹配，然后筛选出对应的菜单**

1. 路由设计

例如 下面定义了用户管理、角色管理和权限管理的菜单路由，其中的`meta`元信息中 `perms`字段配置有该菜单的所有操作权限标识

``` js
[
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
                 ],
           },
    component: () => import('@/views/sys/users/dir-users-info.vue'),
}]
```
2. 检查路由对象是否具有权限

``` js
/**
 * 检查路由对象是否具有权限
 * @param {Array} perms - 权限列表
 * @param {Object} route - 路由对象
 * @returns {boolean} - 是否具有权限
 */
function hasPermission(perms, route) {
    if (route.meta && route.meta.perms) {
        // 如果路由对象定义了 meta 属性或者定义 meta.perms 属性，那么就根据权限值来判断是否具有权限
        return perms.some(perm => route.meta.perms.includes(perm))
    } else {
        // 如果路由对象没有定义 meta 属性或者没有定义 meta.perms 属性，那么默认认为具有权限，返回 true。
        return true
    }
}
```
3. 递归所有路由表根据权限列表筛选异步路由：
``` js
/**
 * 根据权限列表筛选异步路由配置
 * @param {Array} routes - 路由配置表
 * @param {Array} perms - 权限列表
 * @returns {Array} - 筛选后的路由配置
 */
function filterAsyncRouter(routes, perms) {
    const res = []

    routes.forEach(route => {
        // 创建临时变量 tmp  可以在后续的操作中不会修改原始的路由对象。
        const tmp = {...route}
        if (!tmp.hidden && tmp.children) {
            // 先对子路由进行深度筛选，确保子路由也符合权限要求
            tmp.children = filterAsyncRouter(tmp.children, perms)
            if (tmp.children && tmp.children.length > 0) {
                res.push(tmp)
            }
        } else {
            // 对于没有子路由的路由对象，直接进行权限判断
            if (!tmp.hidden && hasPermission(perms, tmp)) {
                res.push(tmp)
            }
        }
    })

    return res
}
```
4. 生成出该用户具有权限的路由表：
``` js
export const menuList = function () {
    const asyncRoutes = useRouter().options.routes[0].children.filter(e => !e.hidden)
    //筛选路由表
    const permissionList = dbUtils.get('perms');
    if (!permissionList.length) {
        // 清空所有缓存数据
        dbUtils.clear()
        // 重置路由重新登录
        return useRouter().replace('/login')
    }
    let accessedRouters

    if (permissionList.includes('*')) {
        // 如果是超级管理员则无需权限验证
        accessedRouters = asyncRoutes
    } else {
        accessedRouters = filterAsyncRouter(asyncRoutes, permissionList);
    }
    return accessedRouters
}
```

5. 将生成好的路由表去渲染前端菜单。前端工作基本结束

### 后端权限设计

原理：是对每个请求进行权限验证 **每个请求前端都会携带token,基于这个信息来进行验证用户的权限**

其中会经过两轮的验证：**token验证** 和 **接口权限验证** 以确保数据的安全性

1. 首先进行`token`验证
   使用`express-jwt` 来进行`token的身份验证`、然后存储用户信息和id到req对象中
``` js
/**
 * Token 身份验证中间件
 * 
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 * @param {Function} next - 下一个中间件函数
 * @returns {void}
 * @throws {Error} - 如果身份验证失败，则抛出错误
 */
const {expressjwt: jwt} = require("express-jwt");

function tokenAuthentication(req, res, next) {
    jwt({
        secret: process.env.SIGN_KEY,
        algorithms: ['HS256'],
        requestProperty: 'user',
        credentialsRequired: true,
        getToken: function fromHeaderOrQuerystring(req, res) {
            if (req.headers.authorization &&
                req.headers.authorization.split(" ")[0] === "Bearer") {
                return req.headers.authorization.split(" ")[1];
            } else if (req.query && req.query.token) {
                return req.query.token;
            }
            return null;
        },
    })(req, res, function (err) {
        if (err) {
            //抛出错误给全局错误信息处理
            return next(err);
        }
        req.userId = req.user._id;
        next();
    });
}

module.exports = tokenAuthentication;
```
2. 接口权限验证
   将req对象中携带用户信息的user字段取出进行操作

``` js
// 验证接口权限 auth:'接口的预设权限' 
// 示例：checkApiPermission('sys:users:list')

const checkApiPermission = (auth) => {
    return async (req, res, next) => {
        try {
            const roleInfo = await RolesModel.findById(req.user.roleId)
            if (!roleInfo) return log.error('该用户还未分配角色')
            if (roleInfo) {
                if (!roleInfo.status) {
                    apiResponse.unauthorizedResponse(res, '您的角色已被禁用,请联系管理员')
                    return false
                }
                // 对超级管理员或其他
                if (roleInfo.perms.includes('*') || roleInfo.perms.includes(auth)) {
                    const permissionInfo = await PermissionsModel.findOne({key: auth})
                    // 权限已被禁用
                    if (!roleInfo.perms.includes('*') && !permissionInfo.status) {
                        return apiResponse.unauthorizedResponse(res, '您访问的权限已被禁用，请联系管理员')
                    }
                    // 接口验证通过，继续下一步中间件或处理程序
                    return next();
                } else {
                    return apiResponse.unauthorizedResponse(res, '您暂时没有权限访问,请联系管理员')
                }
            }

        } catch (err) {
            return apiResponse.unauthorizedResponse(res, '接口权限验证错误')
        }
    };
};
```

## 前端细粒度权限（操作按钮）

### 自定义指令

指令：`v-permission="'权限标识'"`

```js
<a-button type="primary" size="small"  v-permission="'sys:users_opt_logs:export'" @click="goExport">导出</a-button>
```
实现原理：`ADMIN/src/directives/modules/permission.js`

### 函数方式

方法：`hasPerms('权限标识')`

```js
// 示例
<a-switch v-model:checked="record.status" :disabled="!hasPerms('sys:permissions:stop')"
                              checked-children="正常"
                              un-checked-children="停用"
                              @change="statusChange(record)"/>
```
实现原理：`ADMIN/src/libs/util.common.js`
```js
/**
 * 判断本地存储用户的权限信息作对比
 * @param {string} permission 权限标识 ‘sys:demon:list’
 * @returns {Boolean} 返回true/false
 */
export const hasPerms = function (permission) {
    const permissionList = dbUtils.get('perms');
    if (permissionList.includes('*')) return true
    return permissionList.includes(permission)
}
```

## 权限总结
1. 权限设计方案的缺点：
   
   1.1 前端页面配置繁琐： 在新增带有权限的页面时，需要在路由表和权限管理中都进行配置。这可能会导致维护时的一些不便，特别是当功能模块较多时。
   
   1.2 前端菜单自定义限制： 方案中的前端菜单配置可能受限于仅能控制菜单和用户的权限关系，而对于菜单的展示内容、样式、图标等方面的定制可能需要修改前端源代码，增加了定制化的复杂度。
   
   1.3 前后端协调： 需要确保前后端之间预设的权限标识保持一致，以避免出现不一致的情况。这需要进行前后端的密切协调，以确保权限验证的一致性。
   
2. 权限设计方案的优点：
   
   2.1 灵活性和可扩展性： 当系统需要新增功能或进行权限调整时，只需更新角色的权限配置，而无需逐个调整用户的权限。这种方式使得权限的调整更为集中和高效，也降低了出错的可能性。
   
   2.2 代码维护便捷： 将权限逻辑集中在一处，即权限管理部分，可以使代码更易于维护和理解。同时，权限的变更对其他部分的影响较小，降低了维护成本。

这种权限设计方案在实际应用中常用于需要管理多种角色和复杂权限控制的系统。它允许系统管理员根据不同的用户职能来配置权限，而不必关注每个用户的个体权限。这种集中式的权限管理模式有助于系统的可维护性和可扩展性。

然而，也可以在实际应用中根据具体情况进行一些调整，以平衡灵活性和管理成本。

例如，对于前端的菜单和页面展示定制化，也可以考虑引入一些配置文件或者从后端动态获取信息，以减少前端源代码的修改。

**不明白之处或者觉得处理的不好的地方可以[留言](https://gitee.com/Z568_568/vue3-antd-plus/issues)，期待和各位大佬的交流😊**


## 组件注册

### 按需引入

项目目前的组件注册机制是按需注册，是在需要用到的页面才引入。

```js
import {SmileOutlined} from '@ant-design/icons-vue';
import {notification} from 'ant-design-vue';
```

### 全局注册
在根目录的`main.js`文件中
```js
// 注册全局组件
app.component('IconFont', IconFont);
```
## 样式

在 `ADMIN/src/assets/styles/main.scss`文件内引入各种公共样式

```scss
// 入口 SCSS 文件，用于导入其他 SCSS 文件

/*********** Base 基础 ************/
@import "base/reset";
@import "base/typography";

/*********** abstracts 变量函数 ************/
@import "abstracts/variables";
@import "abstracts/mixins";
@import "abstracts/functions";

/*********** components 组件 ************/
@import "components/forms";
@import "components/code";

/*********** layout 布局 ************/
@import "layout/grid";
@import "layout/header";
@import "layout/footer";
@import "layout/sidebar";
@import "layout/animate";

/*********** libs 工具 ************/
@import "libs/media";

/*********** pages 页面(主要增删改查页面)************/
@import "pages/get";
@import "pages/view";

/*********** themes 主题************/
@import "themes/theme-dark";
@import "themes/theme-light";

/*********** vendors 第三方库 ************/
@import "vendors/antd-design";
```

## 详细添加新页面

### 无权限页面 dir-test-info 
无权限页面是默认 `hidden: false` 展示在侧边栏

- 1. 新建新页面
![new-page](/vue3-antd-plus/post/start/new-page.png)

- 2. 配置路由
![new-page1](/vue3-antd-plus/post/start/new-page1.png)
     
- 3. 验证菜单
![new-page2](/vue3-antd-plus/post/start/new-page2.png)

### 有权限页面
配置有权限的页面相对需要配置多一些

需要前后端一起加权限，权限标识可以前端确定 也可以后端确定

- 1. 新建新页面
 
![new-page](/vue3-antd-plus/post/start/new-page.png)

- 2. 配置路由 

在路由的配置中添加 `requiresAuth`和`perms`

```js
 meta: {
         cache: true,
         title: '测试页面',
         requiresAuth: true,
         perms: [
  'test:page:list',
  'test:page:create',
  'test:page:update',
  'test:page:delete',
 ],
},
```

- 3.前端添加权限

![new-page](/vue3-antd-plus/post/start/new-page3.png)

![new-page](/vue3-antd-plus/post/start/new-page4.png)

![new-page](/vue3-antd-plus/post/start/new-page5.png)

- 4. 后端添加权限
 
在对应的接口的控制器中添加对应的权限标识

详细的后端添加权限标识可查看服务端文档权限说明

```js
// 示例
exports.testList = [
    tokenAuthentication,
    checkApiPermission('test:page:list'),
    async (req, res, next) => {...}
]
```

- 5. 前端给角色分配权限

![new-page](/vue3-antd-plus/post/start/new-page6.png)

- 7. 添加新的权限页面完成
   
:::tip
给角色编辑新权限后，需要用户重新登录才能刷新该用户权限
:::


## 代码生成功能

文档如果写不清楚的，可以结合代码一起理解

...

## 其他

### 常见问题

待补充...




