import readline from "readline-sync";

let N: number = Number(readline.question("Digite qual a quantidade de numeros: "));
let numeros: number[] = [];

for (let i = 0; i < N; i++) {
    let M: number = Number(readline.question("Digite um numero: "));
    numeros.push(M);
}

// Ordenar os números em ordem decrescente
numeros.sort((a, b) => b - a);

// Mostrar os três maiores números
console.log("Os três maiores números digitados são:", numeros.slice(0, 3));