import readline from "readline-sync";

let soma = 0;


while (true) {
    let N: number = Number(readline.question("Digite o valor de N: "));
   
    
    if ( 0 <= N) 
        soma += N;

    else {
        
        console.log(`O resultado da somatoria do numero foi: ${soma}`);
        break;
    }
}
   
