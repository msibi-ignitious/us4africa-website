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
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: () => import("../views/admin/AdminLogin.vue"),
  },
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: () => import("../views/admin/AdminDashboard.vue"),
    meta: { requiresAdmin: true },
  },
  {
    path: "/admin/donors",
    name: "admin-donors",
    component: () => import("../views/admin/AdminDonors.vue"),
    meta: { requiresAdmin: true },
  },
  {
    path: "/admin/donations",
    name: "admin-donations",
    component: () => import("../views/admin/AdminDonations.vue"),
    meta: { requiresAdmin: true },
  },{
  path: "/blog",
  name: "blog",
  component: () => import("../views/Blog.vue"),
},
{
  path: "/blog/:slug",
  name: "blog-post",
  component: () => import("../views/BlogPost.vue"),
},
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);

          if (element) {
            const headerOffset = 100; // Adjust to your navbar height

            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY;

            resolve({
              top: elementPosition - headerOffset,
              behavior: "smooth",
            });
          } else {
            resolve({ top: 0 });
          }
        }, 100);
      });
    }

    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to) => {
  const token = sessionStorage.getItem("us4africa_admin_token");

  if (to.meta.requiresAdmin && !token) {
    return "/admin/login";
  }

  if (to.path === "/admin/login" && token) {
    return "/admin/dashboard";
  }
});



export default router;
