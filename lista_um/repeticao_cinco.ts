import readline from "readline-sync";

console.log("\nDigite dois números aonde o primeiro é maior que o segundo\n");
    let m: number = Number(readline.question("Digite o primeiro numero: "));
    let n: number = Number(readline.question("Digite o segundo numero: "));
   
   
   while(n<m){

    console.log("\nInválido, digite um número maior que o primeiro número\n");
    
    n = Number(readline.question("Digite o segundo numero: "));

   }

   
   let num = m;
   let nume = n - 1;
   let num2 = 0;
    console.log(`\nOs números ímpares entre ${m} e ${n} são:`);
    while(num<nume) {
      
        num++;
        if (num % 2 === 0){
        
        num2++;

        console.log(num);
        }
        

}
    console.log(`Apareceram ${num2} números pares.`)