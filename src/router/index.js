import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Main_Class from "../views/Main_Class.vue";
import Main_Testing from "../views/Main_Testing.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Main_Class",
    name: "Main_Class",
    component: Main_Class,
  },
  {
    path: "/Main_Testing",
    name: "Main_Testing",
    component: Main_Testing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
