// Mudar a cor do titulo ao clicar no botão
// Alterar entre duas mensagens ao clicar no botão
// Criar um contador de cliques e exibir o número de cliques no título
let titulo = document.getElementById("titulo");

titulo.textContent = "JavaScript está funcionando!";

let botao = document.getElementById("btn");

botao.addEventListener("click", function() {
  titulo.textContent = "Você clicou no botão!";
});

let contador = 0;

botao.addEventListener("click", function() {
    contador++;
    titulo.textContent = "Número de cliques: " + contador;
    });

    // Alternar entre duas mensagens ao clicar no botão
    let mensagem1 = "Mensagem 1: Bem-vindo ao JavaScript!";
    let mensagem2 = "Mensagem 2: Você clicou no botão!";
    let mostrarMensagem1 = true;

    botao.addEventListener("click", function() {
        if (mostrarMensagem1) {
            titulo.textContent = mensagem1;
        } else {
            titulo.textContent = mensagem2;
        }
        mostrarMensagem1 = !mostrarMensagem1; // Alterna entre as mensagens
    });

    // Mudar a cor do título ao clicar no botão
    let cores = ["red", "blue", "green", "orange", "purple"];
    let indiceCor = 0;

    botao.addEventListener("click", function() {
        titulo.style.color = cores[indiceCor];
        indiceCor = (indiceCor + 1) % cores.length; // Alterna entre as cores
    });
    