import readline from "readline-sync";

console.log(`_Raiz quadrada_`);
let num = Number(readline.question("Digite o numero: "));
let primo = 1;
let soma = 0;

    while (true) {
        if ( primo % 2 !== 0){
        
            num = num - primo;
            soma++;
            if ( num <= 0 ) {
                break;
            }  

        }  
        primo++;
    }


console.log(`a raiz é ${soma}`);