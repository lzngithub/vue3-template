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
