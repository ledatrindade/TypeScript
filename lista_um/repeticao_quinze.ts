import readline from "readline-sync";

let numeros: number[] = [];
let numI: number[] = [];;
let numP: number[] = [];;

while (true) {
    let N: number = Number(readline.question("Digite o valor de N: "));
    numeros.push(N);
    
    if ( 0 < N) {

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
const mediaGeral = somaGeral / numeros.length;

console.log(`Foram digitados ${numP.length} números pares e ${numI.length} números ímpares.`);
console.log(`A média dos valores pares é: ${mediaPares}`);
console.log(`A média geral dos números é: ${mediaGeral}`);