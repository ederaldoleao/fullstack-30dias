// Contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Contar de 1 a 10
for (let j = 1; j <= 10; j++) {
    console.log(j);
}

// Contar de 10 a 1
for (let k = 10; k >= 1; k--) {
    console.log(k);
}

// Imprimir números pares
for (let l = 0; l <= 10; l++) {
    if (l % 2 === 0) {
        console.log(l);
    }
}

// Imprimir números impares
for (let m = 0; m <=15; m++) {
    if (m % 2 !== 0) {
        console.log(m);
    }
}

// Soma acumulada de 1 a 5
let soma = 0;

for (let n = 1; n <= 5; n++) {
    soma = soma + n;
    console.log(`Soma acumulada: ${soma}`);
}

// Soma acumulada de 1 a 100
let somaa = 0;

for (let o = 1; o <= 100; o++) {
    somaa = somaa + o;
    console.log(`Soma acumulada: ${somaa}`);
}

// Soma acumulada de apenas os pares de 1 a 50
let somaaa = 0;

for (let p = 1; p <= 50; p++) {
    if (p % 2 === 0) {
        somaaa = somaaa + p;
        console.log(`Soma acumulada dos pares: ${somaaa}`);
    }
}

// While loop
let q = 1;

while (q <= 5) {
    console.log("While:", q);
    q++;
}

// While pares até 20
let r = 0;

while (r <= 20) {
    if (r % 2 === 0) {
        console.log("While pares:", r);
    }
    r++;
}

// While soma acumulada de 1 a 10
let somaWhile = 0;
let s = 1;

while (s <= 10) {
    somaWhile = somaWhile + s;
    console.log(`Soma acumulada no while: ${somaWhile}`);
    s++;
}

// Fatorial de 5
let t = 5;
let fatorial = 1;

for (let u =1; u <= t; u++) {
    fatorial = fatorial * u;
}

console.log("Fatorial de:", t, "é:", fatorial);

// Contando para trás
let v = 5;
let fat = 1;

for (let w = v; w >= 1; w--) {
    fat *= w;
}

console.log("A contagem para trás do fatorial de", v, "é:", fat);

// Criando função para calcular fatorial
function calcularFatorial(x) {
    let fatorial = 1;
    for (let y = 1; y <= x; y++) {
        fatorial = fatorial * y;
    }

    return fatorial;
}

console.log("Fatorial de 6 é:", calcularFatorial(6));

// Invertendo uma string
function inverterString(txt) {
    let invertida = "";

    for (let z = txt.length - 1; z>= 0; z--) {
        invertida += txt[z];
    }

    return invertida;
}

console.log("String invertida de 'Oi Dudinha' é:", inverterString("Oi Dudinha"));

// Maior numero em um array
function encontrarMaiorNumero(lista) {
    let maior = lista[0];

    for (let a = 1; a < lista.length; a++) {
        if (lista[a] > maior) {
            maior = lista[a];
        }
    }

    return maior;
}

console.log("O maior número no array [3, 7, 2, 9, 5] é:", encontrarMaiorNumero([3, 7, 2, 9, 5]));

// Contar vogais em uma string
function contarVogais(frase) {
    let contador = 0;
    const vogais = "aeiouAEIOU";

    for (let b = 0; b < frase.length; b++) {
        if (vogais.includes(frase[b])) {
            contador++;
        }
    }

    return contador;
}

console.log("Número de vogais na frase 'Frase' é:", contarVogais("Frase"));