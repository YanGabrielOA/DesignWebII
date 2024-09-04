//IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express");
//criando uma instancia deo express
const app = express();

//CRIANDO A ROTA PRINCIPAL
app.get("/", function (req, res) {
    res.send("Hello World é o karalho! BEM VINDO!");
});

//INICIANDO SERVIDO NA PORTA 8080
app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso");
  }
});
