import Vue from "vue";
import VueRouter, { createWebHashHistory } from "vue-router";
import MainPage from "@/pages/MainPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/todos",
    component: () => import("./pages/TodosPage"),
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
