import axios from "axios";
import { notification } from "ant-design-vue";

const service = axios.create({
  baseURL: "http://test.shaoxing-chuangpu.quant-chi.com:30875/",
  timeout: 10000,
  transformResponse: (res) => res,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 使用拦截器在请求和响应被then或者catch处理前拦截
service.interceptors.response.use(
  // 请求成功的处理
  (res) => {
    const data = JSON.parse(res.data);
    const { body, header } = data;
    if (header?.code === 200) {
      return body;
    }
    // 针对不同的code做特殊处理，因此把header也给返回出去
    return data;
  },
  // 请求失败的处理
  function (error) {
    // 这里可以针对http status做一些出错处理~
    const { status } = error.response;
    if (status === 404) {
      notification.error({
        message: "抱歉，请求资源不存在！",
      });
    } else if (status === 301) {
      notification.error({
        message: "亲爱的，你还没登录哦！",
      });
    }
    return Promise.reject(error);
  }
);

export default service;
