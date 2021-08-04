import { createWebHistory, createRouter } from "vue-router";
import UsersList from "../components/UsersList.vue";
import RegisterForm from "../components/RegisterForm.vue";
import Author from "../components/Author.vue";

const routes = [
  {
    path: "/users-app-live",
    name: "Users",
    component: UsersList,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterForm,
  },
  {
    path: "/author",
    name: "Author",
    component: Author,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;