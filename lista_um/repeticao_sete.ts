import readline from "readline-sync";


    let M: number = Number(readline.question("Digite um numero: "));
    let I: number = Number(readline.question("Digite um valor para incrementar: "));
    let N: number = Number(readline.question("Digite quantas vezes o numero sera incrementado: "));

    console.log(M);
    
for (let i = 0; i < N; i++) {
    M += I;
    console.log(M);
}