// Verificar se uma pessoa é maior de idade
let idade = 27;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}   else {
    console.log("Você é menor de idade."); 
}

// Verificar se um número é par ou ímpar
let n = 7;

if (n % 2 === 0) {
    console.log("O número é par.");
}
else {
    console.log("O número é ímpar.");
}

// Maior de dois números
let n1 = 10;
let n2 = 15;

if (n1 > n2) {
    console.log("O maior número é:", n1);
}
else if (n2 = n1) {
    console.log("Os números são iguais.");
}
else {
    console.log("O maior número é:", n2);
}

// Positivo, negativo ou zero
let numero = -5;

if (numero > 0) {
    console.log("O número é positivo.");
}
else if (numero < 0) {
    console.log("O número é negativo.");
}
else {
    console.log("O número é zero.");
}

// Nota de um aluno
let nota = 7;
if (nota >= 7) {
    console.log("Aprovado.");
}
else if (nota < 5) {
    console.log("Reprovado.");
}
else {
    console.log("Recuperação.");
}

// Maior de três números
let a = 5;
let b = 10;
let c = 4;

if (a > b && a > c) {
    console.log("O maior número é:", a);
}
else if (b > a && b > c) {
    console.log("O maior número é:", b);
}
else if (c > a && c > b) {
    console.log("O maior número é:", c);
}
else {
    console.log("Há números iguais.");
}

// Verificar votação
let idadeEleitor = 18;
if (idadeEleitor >= 16) {
    console.log("Você pode votar.");
}
else {
    console.log("Você não pode votar.");
}

// Compra com desconto
let valorCompra = 150;
if (valorCompra > 100) {
    let desconto = valorCompra * 0.1;
    let valorFinal = valorCompra - desconto;
    console.log("Valor final com desconto:", valorFinal);
}
else {
    console.log("Valor final sem desconto:", valorCompra);
}

// Login de usuário
let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Login bem-sucedido.");
}
else {
    console.log("Login falhou. Usuário ou senha incorretos.");
}

// Número entre 10 e 20
let numeroTeste = 15;
if (numeroTeste >= 10 && numeroTeste <= 20) {
    console.log("O número está entre 10 e 20.");
}
else {
    console.log("O número não está entre 10 e 20.");
}

// Pode dirigir
let idadeMotorista = 16;
let carteiraHabilitacao = true;
if (idadeMotorista >= 18 && carteiraHabilitacao) {
    console.log("Você pode dirigir.");
}
else {
    console.log("Você não pode dirigir.");
}

// Pergunta 1: Alguns programadores gostam de café.
// Pergunta 2: Limpo, estruturado e fácil de manter.
// Clareza.