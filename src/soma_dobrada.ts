import readline from "readline-sync";

function Soma_dobrada(): void {


    let soma;

    let numero1: number = Number(readline.question("Digite o primeiro numero:"));
    let numero2: number = Number(readline.question("Digite o segundo numero:"));

    if (numero1 === numero2) {
        
        soma = (numero1 + numero2) * 2;
        console.log("O resltado: " + soma);
    } 

    else if (numero1 < 1 || numero2 < 1) {

        console.log(-1);
    } else {

        soma = numero1 + numero2;
        console.log("O resltado: " + soma)
    }
}
    Soma_dobrada();
