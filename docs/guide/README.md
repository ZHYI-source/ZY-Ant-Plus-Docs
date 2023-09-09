---

title:开始

---
# 开始

本文会帮助你从头启动项目

## 环境准备

你的本地环境需要安装 [Vue3](https://cn.vuejs.org/guide/quick-start.html)  、 [Node.js@14+](https://nodejs.org/zh-cn/download/releases) 、 [Git](https://git-scm.com/downloads) 、 [MongoDB](http://www.mongodb.org/downloads)

我的配置可以参考下：
```js
Nodejs : v14.18.1
@vue/cli : v5.0.8
"express": "~4.16.1"
MongoDB: v6.0.5
```

::: warning
注意事项:
 Node不要安装最新版本
:::

## 工具

- [webstorm](https://www.jetbrains.com/zh-cn/webstorm/download/#section=windows) (vscode也可以)
- [navicat下载与安装破解教程](https://learnku.com/articles/67706) 

## 代码获取
上面的操作全部完成后即可将代码拉取下来

### 从 GitHub 获取代码

```shell
# clone 代码
git clone https://github.com/ZHYI-source/vue3-antd-plus.git
```
### 从 Gitee 获取代码
如果从 github clone 代码较慢的话，可以尝试用 [Gitee](https://gitee.com/) 同步代码到自己的仓库，再 clone 下来即可。

也可以通过下方地址进行 clone
```shell
# clone 代码
git clone https://gitee.com/Z568_568/vue3-antd-plus.git
```

:::warning
注意 : Github上的代码可能不是最新的
:::

## 安装

### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```bash
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v
```

如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

### 安装依赖

需要切换至不同项目端进行安装依赖

- **CLIENT客户端**

切换至CLIENT项目文件夹内执行下面命令

```js
cd CLIENT
npm i
```

- **ADMIN管理端**

切换至ADMIN项目文件夹内执行下面命令

```js
cd ADMIN
npm i
```

- **SERVER管理端**

切换至SERVER项目文件夹内执行下面命令

```js
cd SERVER
npm i
```

### 安装依赖失败

1. 如果哪个项目端执行`npm i` 安装失败或报错？

- 检查Node版本太高
- 尝试将 `node_modules`、`package-lock.json`删除掉，重新执行 `npm i` 

2. 执行 `npm i` 卡死不动？

- 执行`npm config set registry https://registry.npm.taobao.org` 然后重新执行`npm i` 


## 创建与连接MongoDB数据库

1. 打开安装好的软件navicat
2. 左上角选择连接- 选择MongoDB（默认无用户和密码）-连接成功
3. 创建数据库`my_db`- 找到`SERVER`项目内sql文件(`SERVER/sql/my_db.sql`)-选择执行sql文件-出现下图即可成功


![navicat](/vue3-antd-plus/post/start/img.png)

![navicat](/vue3-antd-plus/post/start/img_1.png)


## 启动项目

启动项目需要各个端单独启动

启动顺序可按照 服务端-前端

- [启动 SERVER 服务端](/guide/server/)
- [启动 CLIENT 客户端](/guide/client/)
- [启动 ADMIN 管理端](/guide/admin/)
