<template>
  <div class="layout">
    <!-- <TopTip></TopTip> -->
    <div class="wrapper">
      <div class="tab">
        <img :src="logo" alt="" />
        <ul>
          <li v-for="item in tabArr" :key="item.name">
            <a href="">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="card1">
          <div class="bg"></div>
        </div>
      </div>
    </div>
    <BottomTip></BottomTip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BottomTip from "./components/BottomTip.vue";
import TopTip from "./components/TopTip.vue";
import logo from "@/assets/BlockSec/logo.png";

export default defineComponent({
  components: {
    BottomTip,
    // TopTip,
  },
  setup() {
    const tabArr = [
      {
        link: "",
        name: "Security Audit Service",
      },
      {
        link: "",
        name: "Security Tools",
      },
      {
        link: "",
        name: "Blogs",
      },
      {
        link: "",
        name: "Research",
      },
      {
        link: "",
        name: "Docs",
      },
      {
        link: "",
        name: "About Us",
      },
      {
        link: "",
        name: "Contact",
      },
    ];
    return {
      logo: logo,
      tabArr,
    };
  },
});
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100%;
}

.wrapper {
  width: 100%;
}
.tab {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 71px;
  background-color: #000;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  padding: 0 200px;
  img {
    width: 111px;
    height: 26px;
    cursor: pointer;
  }
  ul {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    li {
      display: flex;
      padding: 0 10px;
      a {
        color: #fff;
        line-height: 1;
        display: inline-block;
        &:hover {
          color: #315ade;
        }
      }
      &:last-child {
        border-radius: 4px;
        border: 1px solid #fff;
        padding: 4px 12px;
        margin-left: 54px;
        transition: all 0.25s;
        a {
          transition: all 0.25s;
        }
        &:hover {
          border: 1px solid #315ade;
          cursor: pointer;
        }
        &:hover a {
          color: #315ade;
        }
      }
    }
  }
}
.content {
  background-color: #172b6a;
  height: 150vh;
  color: #fff;
  .card1 {
    position: relative;
    width: 100%;
    height: 721px;
    background-color: #000;
    .bg {
      display: inline-block;
      width: 500px;
      height: 500px;
      position: absolute;
      top: -100px;
      right: -150px;
      border-radius: 50%;
      opacity: 0.4;
      box-shadow: 0px 0px 200px #315ade;
      background: radial-gradient(#315ade 36%, rgba(49, 90, 222, 0.1));
      filter: blur(5px);
    }
  }
}
</style>
