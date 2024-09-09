function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo seu ID
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite uma cor válida.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let sentimento = "";
    let utilizacao = "";
    let tags = "";

    // Itera sobre cada item de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      sentimento = dado.sentimento.toLowerCase()
      utilizacao = dado.utilizacao.toLowerCase()
      tags = dado.tags.toLowerCase()
      
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || sentimento.includes(campoPesquisa) || utilizacao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada item, formatando os dados do objeto
      resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.sentimento}</p>
          <h4>Utilização</h4>
          <p class="descricao-meta">${dado.utilizacao}</p>
        </div>
      `;
        }
    }
  
    if (!resultados) {
        resultados = "<p>Nenhum resultado foi encontrado</p>"
    }

    // Atribui o HTML construído à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;

  }