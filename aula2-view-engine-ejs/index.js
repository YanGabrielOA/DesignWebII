//IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express");
//criando uma instancia deo express
const app = express();

app.set(`view engine`, `ejs`);

app.get("/", (req, res) => {
  res.render(`index`);
});
//ROTA PERFIL
//:nome é um parametro obrigatoraaio
app.get("/perfil/:nome?", (req, res) => {
  //Coletando o parametro e guardando na variavel
const nome =  req.params.nome

  res.render("perfil",{
    nome : nome
  });
});
//ROTA DE VIDEOS
app.get("/videos/:playlist?/:video?", (req, res) => {
 const ListaPlaylist  = ['Pagode','Anime','Esportes']
 const ListaPagode = ['Deixa Alagar','Lapada Dela','Deixa Acontecer']


  const playlist = req.params.playlist

const video = req.params.video
res.render("videos",{
  video : video,
  playlist : playlist,
  ListaPlaylist : ListaPlaylist,
  ListaPagode : ListaPagode
})

});





//INICIANDO SERVIDO NA PORTA 8080
app.listen(4000, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso");
  }
});

//ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const ListaProdutos = ["computador", "tablet", "Celular"];
  const produto = req.params.produto;

  res.render("produtos", {
    //ENVIANDO VARIAVEIS PARA A PAGINA
    //SERA CHAMADO NA PAGINA
    produto: produto, //VARIAVEL QUE ESTA NO INDEX (res.params)
    ListaProdutos: ListaProdutos,
    //Na pagina produtos.ejs havera uma testagem de condição
  });
});
