<template>
  <div id="app">
    <MenuLateral v-if="renderMenu()"></MenuLateral>
    <!--<nav>
      <router-link to="/">Home</router-link>
      <router-link to="/CadastroEsportes">Cadastrar Esportes</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<script>
import MenuLateral from "@/components/MenuLateral.vue";

export default {
  components: { MenuLateral },
  methods:{
    renderMenu(){
      return !this.$route.matched.some(record => record.meta.notRenderMenu);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
