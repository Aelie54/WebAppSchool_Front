import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/my_grades",
      name: "my_grades",
      component: () => import("../views/MyGradesView.vue"),
    },
    {
      path: "/sections",
      name: "sections",
      component: () => import("../views/SectionsView.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: () => import("../views/StudentsView.vue"),
    },
    {
      path: "/teachers",
      name: "teachers",
      component: () => import("../views/TeachersView.vue"),
    },
  ],
});

export default router;
