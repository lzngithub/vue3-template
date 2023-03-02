<template>
  <div class="wrapper">
    <div class="content">
      BlockSec uses cookies and other identifiers to analyze our traffic in
      accordance. We also share information about your use of our site with our
      analytics partners. By remaining on this website, you consent to our use
      of cookies and the
      <a>Privacy Policy.</a>
    </div>
    <button class="button">I Accept</button>
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

<style lang="less" scoped>
.wrapper {
  display: flex;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgba(23, 25, 33, 0.9);
  padding: 12px 32px;
  gap: 48px;
  .content {
    color: #8f8f8f;
    a {
      color: #fff;
      cursor: pointer;
      &:hover {
        color: #315ade;
      }
    }
  }
  .button {
    flex-shrink: 0;
    background: #fff;
    border-radius: 4px;
    padding: 6px 24px;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #171921;
    outline: none;
    cursor: pointer;
    border: none;
  }
}
</style>
