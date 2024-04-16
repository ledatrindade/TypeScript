import readline from "readline-sync";

let numero: number = Number(readline.question(`Digite um numero para mostrar sua tabuada multiplicativa: `));

console.log(`Tabuada de multiplicação do número ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}