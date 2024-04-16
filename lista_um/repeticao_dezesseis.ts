import readline from "readline-sync";

let N: number = Number(readline.question("Digite qual a quantidade de medias que serao inseridas: "));
let numI: string[] = [];
let numP: number[] = [];

for (let i = 0; i < N; i++) {
    
    let alunos: string = readline.question("Digite o nome do aluno: ");
    let notaA: number = Number(readline.question(`Digite a media de ${alunos}: `));
    numI.push(alunos);
    numP.push(notaA);

    

}
    let maiorMedia: number = Math.max(...numP);
    let indiceMaiorMedia: number = numP.indexOf(maiorMedia);
    let nomeMaiorMedia: string = numI[indiceMaiorMedia];

    console.log(`O aluno com a maior média é ${nomeMaiorMedia}, com a média ${maiorMedia}.`);