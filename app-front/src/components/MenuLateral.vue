<template>
    <div>
        <b-button v-b-toggle.toggle-menu>Abrir Menu</b-button>
        <b-sidebar id="toggle-menu" title="toggle-menu" shadow>
            <div class="px-3 py-2">
                <b-nav-item to="/Home">Home</b-nav-item>
                <b-nav-item to="/CadastroEsportes">Cadastrar Esportes</b-nav-item>
                <b-nav-item to="/">Login</b-nav-item>
            </div>
        </b-sidebar>
    </div>
  </template>

<script>
    export default {
    name: "MenuLateral",
    };
</script>