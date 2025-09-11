import { createMemoryHistory, createRouter } from "vue-router";

import AboutView from "./pages/About.vue";
import LoginView from "./pages/Login.vue";

const routes = [
    { path: '/', component: LoginView },
    { path: '/about', component: AboutView }
]
const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;