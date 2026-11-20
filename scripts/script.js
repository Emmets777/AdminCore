document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".app-container");

  if (appContainer) {
    // Pequeno atraso opcional para garantir que o navegador processou os estilos iniciais
    requestAnimationFrame(() => {
      appContainer.classList.remove("loading");
      appContainer.classList.add("visible");
    });
  }
});

document.getElementById("searchBar").addEventListener("focus", () => {
  document
    .getElementById("containerSearch")
    .classList.add("containerSearchFocus");
});

document.getElementById("searchBar").addEventListener("blur", () => {
  document
    .getElementById("containerSearch")
    .classList.remove("containerSearchFocus");
});

const botoes = document.querySelectorAll('.utilsBtn');
const paginas = document.querySelectorAll('.page-content');
const tituloHeader = document.getElementById('pageTitle');
const sidebar = document.querySelector('aside');
const tituloPadrao = "Bem vindo(a) ao AdminCore";

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // 1. Gerencia a classe 'selected' dos botões
    botoes.forEach(b => b.classList.remove('selected'));
    botao.classList.add('selected');

    // 2. Atualiza o texto do header
    const nomePagina = botao.dataset.title || botao.innerText.trim();
    if (tituloHeader) {
      tituloHeader.textContent = nomePagina;
      tituloHeader.classList.add('animation');
    }

    // 3. Descobre qual tela deve aparecer (lendo o data-target do botão)
    const targetId = botao.dataset.target;

    if (targetId) {
      // Esconde todas as páginas
      paginas.forEach(pagina => pagina.classList.remove('active'));

      // Mostra apenas a página correspondente ao botão clicado
      const paginaAtiva = document.getElementById(targetId);
      if (paginaAtiva) {
        paginaAtiva.classList.add('active');
      }
    }
  });
});

// Evento opcional para resetar ao clicar fora da sidebar
document.addEventListener('click', (evento) => {
  if (sidebar && !sidebar.contains(evento.target)) {
    botoes.forEach(b => b.classList.remove('selected'));

    if (tituloHeader) {
      tituloHeader.textContent = tituloPadrao;
      tituloHeader.classList.add('animation');
    }

    // Opcional: Se quiser que ao clicar fora volte sempre para o Dashboard
    paginas.forEach(pagina => pagina.classList.remove('active'));
    const dashboard = document.getElementById('dashboard');
    if (dashboard) dashboard.classList.add('active');
  }
});