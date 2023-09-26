import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import LandingPageLayout from "../layouts/LandingPageLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import AppLayout from "../layouts/AppLayout.vue";
import Landing from "../views/Index.vue";
import PublicPage from "../views/PublicPage.vue";
import Login from "../views/Login.vue";
import EmailVerification from "../views/EmailVerification.vue";
import Signup from "../views/Signup.vue";
import Index from "../views/dashboard/Index.vue";
import Analytics from "../views/dashboard/Analytics.vue";
import Appearance from "../views/dashboard/Appearance.vue";
import Settings from "../views/dashboard/Settings.vue";
import Upgrade from "../views/dashboard/Upgradeplan.vue";
import Details from "../views/Details.vue";
import FormsResponces from "../views/dashboard/FormsResponces.vue";
import FormsSummary from "../views/dashboard/FormsSummary.vue";

const routes = [
  {
    path: "/",
    redirect: "/index",
    name: "LandingPageLayout",
    component: LandingPageLayout,
    children: [{ path: "/index", name: "Landing", component: Landing }],
  },

  {
    path: "/:username",
    name: "PublicPage",
    component: PublicPage,
  },

  {
    path: "/auth",
    redirect: "/Login",
    name: "Auth",
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/login/auth/google/callback",
        name: "Authcallback",
        component: Login,
      },
      {
        path: "/signup",
        name: "Signup",
        component: Signup,
      },
      {
        path: "/verify/email",
        name: "Emailverification",
        component: EmailVerification,
      },
    ],
  },
  {
    path: "/username",
    name: "SetUsername",
    component: Details,
    meta: { requiresAuth: true },
  },

  {
    path: "/app",
    redirect: "/app/dashboard",
    name: "App",
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/app/dashboard",
        name: "Dashboard",
        component: Index,
      },
      {
        path: "/app/appearance",
        name: "Appearance",
        component: Appearance,
      },
      {
        path: "/app/analytics",
        name: "Analytics",
        component: Analytics,
      },
      {
        path: "/app/analytics/:formid/results",
        name: "FormsSummary",
        component: FormsSummary,
      },
      {
        path: "/app/analytics/:formid/responces",
        name: "FormsResponces",
        component: FormsResponces,
      },
      {
        path: "/app/settings",
        name: "Settings",
        component: Settings,
      },
      {
        path: "/app/upgrade",
        name: "Upgrade",
        component: Upgrade,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   redirect: "/admin/dashboard",
  //   name: "AdminLayout",
  //   component: AdminLayout,
  //   meta: { requiresAdmin: true, requiresAuth: true },
  //   children: [
  //     {
  //       path: "/admin/links",
  //       name: "AdminDash",
  //       component: AdminDash,
  //     },
  //     {
  //       path: "/admin/appearance",
  //       name: "Payments",
  //       component: Payments,
  //     },
  //     {
  //       path: "/admin/settings",
  //       name: "Clients",
  //       component: Clients,
  //     },
  //     // {
  //     //   path: "/admin/plans",
  //     //   name: "Plans",
  //     //   component: Plans,
  //     // },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "App" });
  } else if (!store.state.user.isAdmin && to.meta.requiresAdmin) {
    next({ name: "App" });
  } else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.user.token
  ) {
    next({ name: "Login" });
  } else {
    next();
  }
});
export default router;
