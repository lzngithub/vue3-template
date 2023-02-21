<template>
  <div class="layout">
    <div class="title"></div>
    <div class="content">
      <div
        v-for="item in itemArr"
        class="item left"
        :key="item.id"
        @click="() => change(item.id)"
      >
        <div class="item-title">{{ item.title }}</div>
        <div class="item-icon">
          <img :src="item.icon" />
        </div>
        <div class="item-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import leftIcon from "../assets/layout/left1.png";
import rightIcon from "../assets/layout/right1.png";

const itemArr = [
  {
    id: "home",
    title: "治理侧",
    desc: "政府主管部门",
    icon: leftIcon,
  },
  {
    id: "service",
    title: "服务侧",
    desc: "科技企业/创新平台",
    icon: rightIcon,
  },
];

const change = (id: string) => {
  window.open(id);
};
</script>

<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
  background-image: url(../assets/layout/bg.png);
  background-size: 100% 100%;
  overflow: auto;
  padding-top: 2.86rem;
  .title {
    display: block;
    width: 46.43rem;
    height: 30%;
    margin: 0 auto;
    background-image: url(../assets/layout/title.png);
    background-size: 100% 100%;
  }
  .content {
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    padding: 0 10rem;
    height: 70%;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 25%;
      height: 90%;
      background-image: url(../assets/layout/cardBg.png);
      background-size: 100% 100%;
      transition: all 0.5s;
      &:hover {
        width: 26%;
        height: 91%;
        background-image: url(../assets/layout/active.png);
        background-size: 100% 100%;
        cursor: pointer;
      }
      .item-title {
        font-size: 1.29rem;
        font-weight: 400;
        color: #0d2d50;
        line-height: 1.79rem;
      }
      .item-icon {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .item-desc {
        padding-top: 2rem;
        font-size: 1.57rem;
        font-weight: 600;
        color: #0d2d50;
        line-height: 2.14rem;
      }
    }
  }
}
</style>
