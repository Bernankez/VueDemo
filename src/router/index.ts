import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/switcher",
        component: () => import("@/views/switcher/index.vue"),
    },
    {
        path: '/cyber-button',
        component: () => import("@/views/cyber-button/index.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
