<template>
  <div class="content">
    <div>Child</div>
    <div class="green">Child2</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.content {
  .green {
    color: green;
  }
}
</style>
