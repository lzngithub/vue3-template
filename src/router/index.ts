import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainLayout from "../views/MainLayout.vue";
import HomeService from "../views/HomeService/HomeService.vue";
import News from "../views/HomeService/news/News.vue";
import BlockSec from "../views/BlockSec/MainHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
    },
    {
      path: "/home",
      component: HomeView,
    },
    {
      path: "/service",
      component: HomeService,
    },
    {
      path: "/service/news",
      component: News,
    },
    {
      path: "/blocksec",
      component: BlockSec,
    },
  ],
});

export default router;
