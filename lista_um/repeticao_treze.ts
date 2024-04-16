import readline from "readline-sync";

let soma = 0;
let numeros: number[] = [];
let numI = 0;
let numP = 0;

while (true) {
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