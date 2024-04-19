import readline from "readline-sync";


console.log("\nDigite dois números aonde o primeiro é maior que o segundo\n");
    let m: number = Number(readline.question("Digite o primeiro numero: "));
    let n: number = Number(readline.question("Digite o segundo numero: "));
   
   
   while(n>m){

    console.log("\nInválido, digite um número maior que o primeiro número\n");
    
    n = Number(readline.question("Digite o segundo numero: "));

   }
    console.log(`\nOs números divisíveis por três entre ${m} e ${n} são:`);
   
    let num1 = n;

    while(num1<=m) {
       
        if(num1 % 3 === 0){

            console.log(num1)
        }
  
        num1++;
    
      
       
        }
    
