<template>
  <div>服务侧</div>
</template>

<script setup lang="ts">
import { getInfo } from "./service";

const companyId = "instance_entity_company-640c81969439576b6f9d31729357683b";

getInfo(companyId).then((res) => {
  console.log(res);
});
</script>

<style scoped></style>
