//console.log(cursos);
//console.log(cursos);
//console.log(cursos[0]);
//Quero mostrar apenas o nome do curso
//console.log(cursos[2].descricao);
// Função para pesquisar cursos e exibir os resultados na página
function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre cada curso na lista de cursos
  for (let dado of cursos) {
    // Cria um novo elemento div para cada curso
    resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href=${dado.link} target="_blank">Ementa do Curso</a>
        </div>`;
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = resultados;
}
/*
MEU CÓDIGO


function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  console.log(section);

  let resultados = "";

  //para cada dado dentro da lista de dados
  for (let dado of cursos) {
    resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href=${dado.link} target="_blank"
            >Ementa do Curso</a
          >
        </div>;
`;
  }
  section.innerHTML = resultados;
}
*/

//<h2>Curso de TRL (<i>Technology Readiness Levels</i>)</h2

/* <div class="item-resultado">
<h2>${cursos[0].titulo}</h2>
<p class="descricao-meta">
  ${cursos[0].descricao}
</p>
<a href=${cursos[0].link} target="_blank"
  >Ementa do Curso</a
>
</div> 


for (let dado of cursos) {
  section.innerHTML += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href=${dado.link} target="_blank"
            >Ementa do Curso</a
          >
        </div>;
`;
}

*/
