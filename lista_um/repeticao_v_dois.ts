
import readline from "readline-sync";

console.log(`_Divisão_`);
let div = Number(readline.question("Digite o numero dividendo: "));
let dsor = Number(readline.question("Digite o numero divisor: "));
let quo = 0;


    while (div >= dsor) {
        div -= dsor;
        quo++;
    }


console.log(`O resultado da divisão é ${quo}`);