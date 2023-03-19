const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const LocalStrategy = require("passport-local").Strategy;

//express
const app = express();
app.use(express.json());

//Cookie-session
app.use(
  cookieSession({
    name: "nomeAleatorio",
    keys: ["chaveAleatoria"],
    maxAge: 60 * 1000, // 1 minuto
    //maxAge: 24 * 60 * 60 * 1000, //24 horas
  })
);
//passaport
//BANCO TEMPORARIO
let users = [
  {
    id: 1,
    user: "user",
    email: "user@email.com",
    pwd: "123",
  },
  {
    id: 2,
    user: "user2",
    email: "user2@email.com",
    pwd: "456",
  }
]

//Configurando o passaport para trabalhar com a estratégia de login local!
passport.use(
  new LocalStrategy({
      usernameField: "email",
      passwordField: "pwd"
  },
  (username, password, done) => {
      let user = users.find((user) => {
          return user.email === username && user.pwd === password;
      });

      if(user)
          done(null,user);
      else
          done(null,false,{message: "Usuario e/ou senha incorretos"})
  })
);


app.use(passport.initialize());
app.use(passport.session());
//Configuração dos middlewares
app.use(cors({credentials: true, origin: "http://localhost:8080"}));

app.post("/api/Login", (request,response,next)=>{
    passport.authenticate("local", (err,user,info)=>{
        if(err) return next(err);
        if(!user)
            return response.status(400).send([user, "Não foi possivel efetuar o Log in", info]);
        request.login(user, (err)=>{
            response.send("Logado!");
        });
    })(request, response, next);
});

app.listen("3030",(request,response)=>{
  console.log("Servidor ouvindo na porta 3030");
});

//Configuração das rotas da API
app.get("/", (req, res) =>{
  res.send("Express server");
  res.end();
});

//Exporta o aplicativo express configurado
module.exports = app;