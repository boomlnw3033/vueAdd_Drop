import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import PlanView from "../views/PlanView.vue";
import AddDropView from "../views/AddDropView.vue";
import lnwView from "../views/lnwView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/plans",
      name: "plans",
      component: PlanView,
    },
    {
      path: "/adddrop",
      name: "adddrop",
      component: AddDropView,
    },
    {
      path: "/lnw",
      name: "lnw",
      component: lnwView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
