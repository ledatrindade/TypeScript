import readline from "readline-sync";

let numI: string[] = [];
let numP: number[] = [];
let soma = 0;

while(true) {
    
    let alunos: string = readline.question("Digite o nome do aluno: ");
    

    if ( alunos === 'Fim') {
        break;
    } else {
        let notaA: number = Number(readline.question(`Digite a media de ${alunos}: `));
        numI.push(alunos);
        numP.push(notaA);
        soma++;
    }

}
    console.log(`A quantidade de alunos que foram cadastrados foi ${soma} sendo eles ${numI.join(", ")} e suas medias são ${numP.join(", ")}.`);