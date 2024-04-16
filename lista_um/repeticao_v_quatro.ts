import readline from "readline-sync";

let A: number[] = [];
let neg = 0;
let pos = 0;

for(let i = 0; i < 5; i++) {
    let N: number = Number(readline.question("Digite o valor de N: "));
    A.push(N);
    
    if ( 0 > N)
       neg++;
    else {
        pos++;
    }
}

console.log(`foram ao total ${neg} numeros negativos`);

