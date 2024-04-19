import readline from "readline-sync";

let numeros: number[] = [];
let soma = 0;
let numI: number[] = [];
let numP: number[] = [];

    console.log(`Descubra quantos numeros pares e impares foram digitados, a média dos números pares e a média total`);
    console.log(`para fechar digite -1`);

while (true) {
    let N: number = Number(readline.question("Digite o valor de N: "));
    numeros.push(N);
    
    if ( 0 < N) {
    soma++;

        if (N % 2 === 0){
            numP.push(N);

        } 
        
        else {

            numI.push(N);
        } 
    }

    else {
        
        break;
    }
   
}

const somaPares = numP.reduce((total, valor) => total + valor, 0);
const mediaPares = somaPares / numP.length;

// Calcular a média geral dos números
const somaGeral = numeros.reduce((total, valor) => total + valor, 0);
const mediaGeral = somaGeral / soma;

console.log(`Foram digitados ${numP.length} números pares e ${numI.length} números ímpares.`);
console.log(`A média dos valores pares é: ${mediaPares}`);
console.log(`A média geral ${soma} dos números é: ${mediaGeral}`);