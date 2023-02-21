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
    return {};
  },
});
</script>

<style scoped></style>
