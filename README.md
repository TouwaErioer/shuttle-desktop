# shuttle前端（PC版）

## 依赖

| Description | Version|
|  :----: | :----: |
| Vue.js | 2.6.11|
| Element UI | 2.15.0 |
| Vue Router | 3.5.1 |
| Vuex | 3.6.2 |
| axios | 0.21.1 |
| moment.js | 2.29.1 |


## 必要文件
请在根目录下创建 `.env.local` 配置环境变量
```sh
# 反向代理目标ip
target=

# websocket 
VUE_APP_WS=

# 后台管理系统
VUE_APP_ADMIN=
```

## 部署

```sh
git clone https://github.com/TouwaErioer/shuttle-desktop.git

cd shuttle-desktop

# 构建docker镜像
docker build . -t shuttle-desktop

# 后台运行
docker run -d -p 80:80 shuttle-desktop
```