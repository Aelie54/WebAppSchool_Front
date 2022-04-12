import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/LoginView.vue"),
    },

    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/RegisterProf",
      name: "RegisterProf",
      component: () => import("../views/RegisterProfView.vue"),
    },

    {
      path: "/registerstudent",
      name: "register",
      component: () => import("../views/RegisterStudentView.vue"),
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
