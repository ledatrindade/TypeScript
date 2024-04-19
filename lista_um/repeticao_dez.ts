import readline from "readline-sync";
  

while (true) {

    let M: number = Number(readline.question("Digite o valor de M: "));
    let N: number = Number(readline.question("Digite o valor de N: "));

    let soma = 0;

    if(M >= N)
        break;

    
    for (let i = M; i < N+1 ; i++ ){
    
    soma = soma + i;

       }

    

    console.log(`A soma de todos os números de ${M} até ${N} é: ${soma}`);
    
        

}
