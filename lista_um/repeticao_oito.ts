import readline from "readline-sync";

let N: number = Number(readline.question("Digite qual a quantidade de numeros: "));
let numeros: number[] = [];

for (let i = 0; i < N; i++) {
    let M: number = Number(readline.question("Digite um numero: "));
    numeros.push(M);
}

// Encontrar o maior número
let maiorNumero: number = Math.max(...numeros);

// Encontrar o menor número
let menorNumero: number = Math.min(...numeros);

console.log("O maior número digitado é:", maiorNumero);
console.log("O menor número digitado é:", menorNumero);
