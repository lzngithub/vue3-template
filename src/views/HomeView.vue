<template>
  <div>
    <ChildHome></ChildHome>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChildHome from "@/components/ChildHome.vue";

export default defineComponent({
  components: {
    ChildHome,
  },
  setup() {
    console.log("dev1");
    console.log("dev2");
    return {};
  },
});
</script>

<style scoped></style>
