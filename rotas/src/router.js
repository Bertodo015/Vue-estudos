import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import PerfilView from './pages/Perfil.vue'
import LoginView from './pages/Login.vue'

const routes = [
    { path: '/', component: LoginView },
    { path: '/perfil', component: PerfilView }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router