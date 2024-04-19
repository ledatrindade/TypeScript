import readline from "readline-sync";

let soma = 0;
let numeros: number[] = [];
let numI = 0;
let numP = 0;
console.log(`Descubra quantos numeros pares e impares foram digitados`);
    console.log(`para fechar digite -1`);
while (true) {
    8

    let N: number = Number(readline.question("Digite o valor de N: "));
    numeros.push(N);
    
    if ( 0 <= N) {

        if (N % 2 !== 0){
            numI++;
        } else {
            numP++;
        }
    }

    else {
        
        console.log(`foram ao total ${numP} numeros pares e ${numI} numeros impares`);
        break;
    }

   
}