//IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express");
//criando uma instancia deo express
const app = express();

//CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.send("Hello World é o karalho! BEM VINDO!");
});
//ROTA PERFIL
//:nome é um parametro obrigatoraaio
app.get("/perfil/:nome?", (req, res) => {
  //Coletando o parametro e guardando na variavel
  const nome = req.params.nome;

  if (nome) {
    res.send(`Olá, ${nome}! Seja bem-vindo!`);
  } else {
    res.send(`<h2> faça login para acessar o seu perfil</h2>`);
  }
});
//ROTA DE VIDEOS
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  if (playlist && video == undefined) {
    res.send(`<h2>Voce esta na playlist de ${playlist}.</h2>`);
  }
  if (playlist && video) {
    res.send(
      `<h2>Voce esta na playlist de ${playlist}</h2><br>Reproduzindo o video ${video}...`
    );
  } else {
    res.send("<h1>Pagina de videos</h1>");
  }
});
//INICIANDO SERVIDO NA PORTA 8080
app.listen(4000, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso");
  }
});
