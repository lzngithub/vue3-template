<template>
  <div class="layout">
    <TopTip></TopTip>
    <BottomTip></BottomTip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BottomTip from "./components/BottomTip.vue";
import TopTip from "./components/TopTip.vue";

export default defineComponent({
  components: {
    BottomTip,
    TopTip,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
}
</style>
