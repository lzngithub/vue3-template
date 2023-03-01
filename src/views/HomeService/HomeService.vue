<template>
  <div>
    <a-button @click="goNews">最新动态</a-button>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useInfoStore } from "./stores/index";
import { getInfo, postNewsList } from "./service";

const companyId = "instance_entity_company-640c81969439576b6f9d31729357683b";

const infoStore = useInfoStore();
const { chainIds } = storeToRefs(infoStore);
const { init } = infoStore;

const { data } = getInfo(companyId);
watch(data, () => {
  init(data);
});

init(companyId);

watch(chainIds, () => {
  postNewsList({
    pageNum: 1,
    pageSize: 10,
    // chainIds: chainIds,
  });
});
console.log(11);
const router = useRouter();
const goNews = () => {
  router.push(`/service/news?companyId=${companyId}`);
};
</script>

<style scoped></style>
