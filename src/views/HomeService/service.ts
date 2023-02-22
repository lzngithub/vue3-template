import useRequest from "@/utils/useRequest";

// 获取企业信息
export const getInfo = (companyId: string) => {
  return useRequest(`/api/server/get/company/info?companyId=${companyId}`);
};
