import { createRouter, createWebHistory } from "vue-router";
import Main from "@/components/main.vue";

const router = createRouter({
    history: createWebHistory('/resume/'),
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main,
        }
    ],
});

export default router;
