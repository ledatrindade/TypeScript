import readline from "readline-sync";

let soma = 0;

while (true) {
    let N: number = Number(readline.question("Digite o valor de N: "));

    if (0>N)
         break;

    soma++;}

    console.log(`A quantidade de numeros digitados foi: ${soma}`);
        
