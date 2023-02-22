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
