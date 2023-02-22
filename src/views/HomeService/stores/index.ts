import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useInfoStore = defineStore("counter", () => {
  const data = ref();
  const chainIds = computed(() => {
    return data.value.body.chainNodes.map((item: any) => item.chainId);
  });
  const nodeIds = computed(() => {
    return data.value.body.chainNodes.map((item: any) => item.nodeId);
  });

  function init(info: any) {
    console.log(info);
    data.value = info.value;
  }

  return { chainIds, nodeIds, init };
});
