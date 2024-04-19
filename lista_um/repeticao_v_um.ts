import readline from "readline-sync";


let numero = Number(readline.question("Digite um numero: "));


if (numero <= 1) {
    console.log("O numero não é primo.");
} else {
    let naoprimo = false;
   
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            naoprimo = true; 
            break; 
        }
    }

    if (naoprimo) {
        console.log(`O numero ${numero} é primo.`);
    } else {
        console.log(`O numero ${numero} não é primo.`);
    }
}
