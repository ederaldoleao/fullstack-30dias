// Arrays (lista de valores)

// Criando um array
let nums = [4, 9, 2, 15, 3];

// Acessando um elemento do array
console.log(nums[0]); // 4
console.log(nums[3]); // 15

// Percorrendo um array
for (let i = 0; i < nums.length; i++) {
    console.log("Valor:", nums[i]);
}

// Imprimindo o array completo
console.log(nums); // [4, 9, 2, 15, 3]

// Adicionando um elemento ao final do array
nums.push(7);
console.log(nums); // [4, 9, 2, 15, 3, 7]

// Removendo o último elemento do array
nums.pop();
console.log(nums); // [4, 9, 2, 15, 3]

// Encontrando o índice de um elemento
let index = nums.indexOf(9);
console.log("Índice de 9:", index); // Índice de 9: 1

// Verificando se um elemento existe no array
let exists = nums.includes(5);
console.log("O número 5 existe no array?", exists); // O número 5 existe no array? false

// Ordenando o array
nums.sort((a, b) => a - b);
console.log("Array ordenado:", nums); // Array ordenado: [2, 3, 4, 9, 15]

// Criando um array de strings
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // ["apple", "banana", "cherry"]

// Adicionando um elemento ao início do array
fruits.unshift("orange");
console.log(fruits); // ["orange", "apple", "banana", "cherry"]

// Removendo o primeiro elemento do array
fruits.shift();
console.log(fruits); // ["apple", "banana", "cherry"]

// Concatenando dois arrays
let moreFruits = ["grape", "melon"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["apple", "banana", "cherry", "grape", "melon"]

// Somar array
function somArray(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }

    return soma;
}
console.log(somArray([1, 2, 3, 4])); // 10

// Filtrar pares de um array
function filtraPares(lista) {
    let pares = [];

    for (let n of lista) {
        if (n % 2 === 0) {
            pares.push(n);
        }
    }

    return pares;

}
console.log(filtraPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Contar quantos números maiores que 10 existem em um array
function contaMaioresQue10(lista) {
    let count = 0;

    for (let x of lista) {
        if (x > 10) {
            count++;
        }
    }

    return count;
}
console.log(contaMaioresQue10([5, 12, 8, 15, 3, 20])); // 3

// Encontrar a média de um array de números
function mediaArray(lista) {
    let soma = 0;

    for (let n of lista) {
        soma += n;
    }

    return soma / lista.length;
}
console.log(mediaArray([10, 20, 30, 40])); // 25

// Menor número em um array
function menorNumero(lista) {
    let menor = lista[0];

    for (let n of lista) {
        if (n < menor) {
            menor = n;
        }
    }

    return menor;
}
console.log(menorNumero([5, 2, 9, 1, 3])); // 1

// O quadrado de um array de números
function quadradoArray(lista) {
    let quadrados = [];

    for (let n of lista) {
        quadrados.push(n * n);
    }

    return quadrados;
}
console.log(quadradoArray([1, 2, 3, 4])); // [1, 4, 9, 16]