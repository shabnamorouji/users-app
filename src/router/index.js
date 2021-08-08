import { createWebHistory, createRouter } from "vue-router";
import UsersList from "../components/UsersList.vue";
import Charts from "../components/Charts.vue";
import Author from "../components/Author.vue";

const routes = [
  {
    path: "/users-app-live",
    name: "Author",
    component: Author,
  },
  {
    path: "/charts",
    name: "Charts",
    component:Charts,
  },
  {
    path: "/users",
    name: "Users",
    component: UsersList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;