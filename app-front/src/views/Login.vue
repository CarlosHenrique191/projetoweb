<template>
    <b-row class="vh-100 vw-100 row-login">
        <b-col sm="5" class="d-flex justify-content-center align-items-center left-login">
            <div class="login">
                <h2 class="text-center mb-5 title-login">Faça o login</h2>
                <b-form @submit="doLogin">
                    <b-form-group
                        id="user-label"
                        label="Email:"
                        label-for="user-input"
                        description="Nunca iremos dar sua senha a terceiros"
                    >
                        <b-form-input
                            id="user-input"
                            v-model="login.email"
                            type="email"
                            placeholder="Enter email"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="password-label"
                        label="Senha:"
                        label-for="password-input"
                        description="Coloque a senha."
                    >
                        <b-form-input
                            id="password-input"
                            v-model="login.pwd"
                            type="password"
                            placeholder="Coloque a senha"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit">Entrar</b-button>
                </b-form>
            </div>
        </b-col>
        <b-col sm="7" class="d-flex justify-content-center align-items-center">
            <img src="@/assets/Login.svg"/>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "MainLogin",
    
    data(){
        return{
            login:{
                email:"user@email.com",
                pwd:"123"
            }
        };
    },
    methods:{
        doLogin(){
            let dataLogin = {
                email: this.login.email,
                pwd: this.login.pwd
            };
            this.$http.post("/api/login", dataLogin)
            .then((response)=> {
                console.log(response.data);
                console.log(response);
                this.$router.push("/Home");
            })
            .catch((error)=>{
                console.error("Falha no login")
                console.error(error)
            });
        },
    },
};
</script>

<style>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
  
.row-login {
    margin-left: 0;
}
  
.left-login {
    background-color: #F2F2F2;
}
  
.title-login {
    font-weight: bold;
}
  
.img-login {
    width: 600px;
    height: 600px;
}
</style>