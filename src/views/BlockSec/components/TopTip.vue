<template>
  <div class="wrapper">
    <div>content</div>
    <close-outlined />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CloseOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    CloseOutlined,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.wrapper {
  height: 44px;
  width: 100vw;
  background-color: #00a54c;
}
</style>
