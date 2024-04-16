import readline from "readline-sync";

let soma = 0;
let numeros: number[] = [];
let numA = 0;
let numB = 0;

while (true) {
    let N: number = Number(readline.question("Digite o valor de N: "));
    numeros.push(N);
    
    if ( 0 <= N) {

        if (N % 2 === 0 && N % 5 === 0 ){
            numA++;
        } 
        
        else if (N % 2 === 0 && N % 3 === 0 ){

            numB++;
        } 
    }

    else {
        
        console.log(`foram ao total ${numA} numeros divisiveis por 2 e 5 e ${numB} numeros divisiveis por 2 e 3`);
        break;
    }

   
}