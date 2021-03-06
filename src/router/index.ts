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
      path: "/my_grades/:id",
      name: "my_grades",
      component: () => import("../views/MyGradesView.vue"),
    },

    {
      path: "/sections",
      name: "sections",
      component: () => import("../views/SectionsView.vue"),
    },
    {
      path: "/sections/:id",
      name: "section",
      component: () => import("../views/SectionView.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: () => import("../views/StudentsView.vue"),
    },
    {
      path: "/student/:id",
      name: "student",
      component: () => import("../views/StudentView.vue"),
    },
    {
      path: "/student/modify/:id",
      name: "student_modify",
      component: () => import("../views/StudentModifView.vue"),
    },
    {
      path: "/professors",
      name: "professors",
      component: () => import("../views/ProfessorsView.vue"),
    },
    {
      path: "/professor/:id",
      name: "Professor",
      component: () => import("../views/ProfessorView.vue"),
    },

    {
      path: "/director",
      name: "director",
      component: () => import("../views/AccueilDirecteurView.vue"),
    },

    {
      path: "/prof",
      name: "prof",
      component: () => import("../views/AccueilProfView.vue"),
    },

    {
      path: "/eleve",
      name: "eleve",
      component: () => import("../views/AccueilEleveView.vue"),
    },

    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/LogoutView.vue"),
    },
  ],
});

export default router;
