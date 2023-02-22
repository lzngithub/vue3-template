## vue3 模板

## 安装 less

```shell
npm i less
```

## ui 库

ui 库大同小异，这里用的是 ant-design-vue

```shell
npm i ant-design-vue
```

## 接口库

axios: 选择 [axios](https://axios-http.com/zh/docs/interceptors)，vue 官方推荐，毋庸置疑
vueuse: 配合 vue3 使用的一个库，在持续维护，有很多 hooks，可以提高开发效率，这里配合 axios 使用 [useAxios](https://vueuse.org/integrations/useAxios/) 这个 hook

封装

原因：

1. 将项目和库进行解耦，便于库的移植和替换
2. 将一些行为做统一处理，添加 token，loading 等，减少代码冗余

思路：

1. 对 axios 做第一层封装，对添加 token，对返回数据做统一处理

- 安装，导入 axios
- 创建 axios 实例
- 使用拦截器对发起请求前和数据返回后做统一操作
- 导出 axios 实例

例子：

```ts
// ./utils/request.ts
import axios from "axios";
import { notification } from "ant-design-vue";

// 创建axios实例
const service = axios.create({
  baseURL: "http://test.shaoxing-chuangpu.quant-chi.com:30875/",
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 使用拦截器在响应被then或者catch处理前拦截
service.interceptors.response.use(
  // 请求成功的处理
  (res) => {
    return res;
  },
  // 请求失败的处理
  function (error) {
    // 这里可以针对 http status做一些出错处理~
    console.log(error);
    const { status } = error.response;
    if (status === 404) {
      notification.error({
        message: "抱歉，请求资源不存在！",
      });
    }
    return Promise.reject(error);
  }
);

// 导出
export default service;
```

2. 对 useAxios 做第二层封装，方便模块化管理和调用

- 安装@vueuse/core @vueuse/integrations，导入 useAxios
- 重新封装 useAxios 方法并返回

```js
// ./utils/useRequest.ts
import request from "./request";
import { useAxios } from "@vueuse/integrations/useAxios";

export default function (
  url: string,
  method?: string,
  data?: any,
  config?: object
) {
  return useAxios(
    url,
    {
      method: method ? method.toUpperCase() : "GET",
      data,
      ...config,
    },
    request
  );
}
```
