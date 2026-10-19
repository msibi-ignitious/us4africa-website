import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/programs",
    name: "programs",
    component: () => import("../views/Programs.vue"),
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: () => import('../views/GetInvolved.vue'),
  },  
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import('../views/Donate.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
