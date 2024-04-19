import readline from "readline-sync";

let Sa: number[] = [];
let Filhos: number[] = [];
let mediaS = 0;
let mediaF = 0;

let maior;
let per = 0;

let pessoas = 0;

while (true) { 

    let C: number = Number(readline.question("Digite o seu salario: "));

    if ( C < 0 )
        break;

    let H: number = Number(readline.question("Digite quantos filhos você tem: "));

    Sa.push(C);
    Filhos.push(H);

    mediaS += C;
    mediaF += H;
    pessoas++;

        if ( C <= 100 ) {
            per++;
        }
    
}


let resulS = mediaS / pessoas;
let resulF = mediaF / pessoas;
let resulP = (per / pessoas) * 100;

Sa.sort((a, b) => b - a);

console.log(`A média dos salários (${mediaS}) das pessoas (${pessoas}) são: ${resulS.toFixed(2)}`);
console.log(`A média dos filhos (${mediaF}) das pessoas(${pessoas}) são: ${resulF.toFixed(2)}`);
console.log("O maior salário é:", Sa.slice(0, 1));
console.log(`O percentual das pessoas(${per}) com o total de pessoas cadastradas(${pessoas}) que possuem um salário até R% 100,00 é: ${resulP}%`);
