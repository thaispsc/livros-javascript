//importar dos dados dos outros arquivos

const livros = require("./databases");

//pegar o input

const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro?S/N");

//Se for sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe

//Se for não, mostra todos os livros em ordem crescente de numero de paginas

if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas são as categorias disponiveis:");
  console.log(
    "Produtividade",
    "/Historia-brasileira",
    "/Americas",
    "/Estilo-de-vida",
    "/Tecnologia"
  );
  const entradaCategoria = readline.question("Qual categoria voce escolhe:");
  const retorno = livros.filter(
    (livro) => livro.categoria === entradaCategoria
  );
  console.table(retorno);
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
  console.log("Esses são todos os livros disponíveir");
  console.table(livrosOrdenados);
}
