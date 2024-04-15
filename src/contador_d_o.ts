import readline from "readline-sync";

function contaOcorrencias() {
   
    let texto: string = String(readline.question("Digite um texto: "));
    let busca: string = String(readline.question("Digite a letra ou palavra que deseja buscar: "));

    let count = 0;
    let index = texto.indexOf(busca);

    while (index !== -1) {
        count++;
        index = texto.indexOf(busca, index + 1);
    }
    
  console.log(`A busca "${busca}" ocorre ${count} vezes no texto fornecido.`);  

}

contaOcorrencias();



