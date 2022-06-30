import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AutoresView from '@/views/AutoresView.vue';
import GênerosView from '@/views/GênerosView.vue';
import FaixaetáriaView from '@/views/FaixaetáriaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/autores', name: 'autores', component: AutoresView },
    { path: '/Gêneros', name: 'genêros', component: GênerosView },
    { path: '/Faixa-etária', name: 'faixaetaria', component: Faixa-etáriaView },
  ],
});

export default router
