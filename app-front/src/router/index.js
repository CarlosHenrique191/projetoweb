import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CadastroEsportes from '../views/CadastroEsportes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/CadastroEsportes',
    name: 'cadastrarEsportes',
    component: CadastroEsportes,
  },
];

const router = new VueRouter({
  routes
});

export default router;
