import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import LandingPageLayout from "../layouts/LandingPageLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import AppLayout from "../layouts/AppLayout.vue";
import Landing from "../views/Index.vue";
import PublicPage from "../views/PublicPage.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Index from "../views/dashboard/Index.vue";
import Analytics from "../views/dashboard/Analytics.vue";
import Appearance from "../views/dashboard/Appearance.vue";
import Settings from "../views/dashboard/Settings.vue";
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
                path: "/signup",
                name: "Signup",
                component: Signup,
            },
        ],
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
                path: "/app/settings",
                name: "Settings",
                component: Settings,
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
    console.log(store.state.user.isAdmin);
    console.log(store.state.user.token);
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
