---

title:客户端文档

---

# CLIENT客户端介绍
[Vue3-Antd-Plus](https://gitee.com/Z568_568/vue3-antd-plus.git)的前台端

基于 Vue3、Antd、Vite、Pinia、vue-router搭建

主要作为给用户展示的页面,基础模块已经做好，可在项目增加对应的功能即可

已经具备连接好服务端接口的能力


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
│   ├── layout # 项目布局文件夹
│   ├── libs # 插件及工具类文件夹
│   ├── router # 路由配置
│   ├── stores # 数据仓库
│   ├── views # 页面
│   ├── App.vue # 入口页面
│   ├── main.js # 入口js文件
│   └── setting.js # 项目配置文件
├── .env.development # 开发环境配置文件
├── .env.production # 生产环境配置文件
└── vite.config.js # vite配置文件
```

## 启动项目


1. 安装依赖 （如果已经安装可以直接进行下一步）
切换值CLIENT客户端根目录下输入启动命令
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

3. 切换值CLIENT客户端根目录下输入启动命令

```shell script
npm run dev
```

也可以在CLIENT客户端根目录下查看`package.json`启动命令

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

## 其他
