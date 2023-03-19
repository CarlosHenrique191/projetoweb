<template>
    <div class="CadastroEsportes">
      <h1>Cadastro de Esportes</h1>
    </div>
  </template>
  
<script>
  //import PageBlock from '../components/PageBlock.js'
  export default {
    name: "CadastroEsportes",
    //script para blockear o acesso para pessoas não logadas
    //PageBlock,
    /*data() {
      return {
        userData: {
        id: "",
        nome: ""
        }
      };
    },
    methods: {
      getUserData() {
        this.$http
        .get("/api/user")
        .then(response => {
            this.userData = response.data;
        })
        .error(error => {
          console.error("Erro sem permissão");
          console.error(error);
          this.$router.push("/");
        });
      }  
    },
    mounted() {
      this.getUserData();
    }*/
  };
</script>