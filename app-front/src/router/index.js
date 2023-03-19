import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CadastroEsportes from '../views/CadastroEsportes.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/CadastroEsportes',
    name: 'cadastrarEsportes',
    component: CadastroEsportes,
  },
  {
    path: '/',
    name: 'login',
    component: Login,
    //meta: {notRenderMenu: true},
  },
];

const router = new VueRouter({
  routes
});

export default router;
