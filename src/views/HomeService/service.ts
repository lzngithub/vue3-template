import useRequest from "@/utils/useRequest";

// 获取企业信息
export const getInfo = (companyId: string) =>
  useRequest(`/api/server/get/company/info?companyId=${companyId}`);

// 获取最新信息
export const postNewsList = (data: any) =>
  useRequest(`/api/server/get/news/list`, "POST", data);
