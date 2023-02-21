import request from "@/utils/request";

export const getInfo = (companyId: string) => {
  return request(`/api/server/get/company/info?companyId=${companyId}`);
};
