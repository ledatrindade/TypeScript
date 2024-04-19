import readline from "readline-sync";

console.log("\nDigite dois números aonde o primeiro é maior que o segundo\n");
    let m: number = Number(readline.question("Digite o primeiro numero: "));
    let n: number = Number(readline.question("Digite o segundo numero: "));
   
   
   while(n>m){

    console.log("\nInválido, digite um número maior que o primeiro número\n");
    
    n = Number(readline.question("Digite o segundo numero: "));

   }

   
   let num = n;
  
   console.log(`\nOs números entre ${m} e ${n} são:`);
    while(m>=num) {

    
    console.log(num);
    num++;

}
