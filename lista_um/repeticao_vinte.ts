import readline from "readline-sync";

let soma = 0;
let numeros: number[] = [];


while (true) {
    let N: number = Number(readline.question("Digite o valor de N: "));
    numeros.push(N);
    

    if ( 0 === N) 
        break;
    else {

        let raiz = Math.sqrt(N);
        if (raiz === Math.floor(raiz)) {
 
            soma++; 
        }
       
    }
}

console.log(`Foram ${soma} numeros com a raiz quadrada inteira`);