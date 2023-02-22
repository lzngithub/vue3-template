<template>
  <div>{{ data?.body?.name }}</div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { getInfo } from "./service";

const companyId = "instance_entity_company-640c81969439576b6f9d31729357683b";
const { data } = getInfo(companyId);
console.log(data);
watch(data, () => {
  if (data) {
    console.log(data.value);
  }
});
</script>

<style scoped></style>
