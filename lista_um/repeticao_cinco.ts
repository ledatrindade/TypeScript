import readline from "readline-sync";

    let pares1: number [] = [];
    let numero = 0;
    console.log("\nDigite dois números aonde o primeiro é maior que o segundo\n");
    let n: number = Number(readline.question("Digite o primeiro numero: "));
    let m: number = Number(readline.question("Digite o segundo numero: "));
   
   
   while(m<n){

    console.log("\nInválido, digite um número maior que o primeiro número\n");
    
    n = Number(readline.question("Digite o segundo numero: "));

   }

   for(let i = n; i<= m; i++){
    
    if(i % 2 === 0){
    pares1.push(i);
    numero++;
   }
}

    console.log(`\nOs números pares entre ${n} e ${m} são: ${pares1.join(", ")}`);
    
    console.log(`Apareceram ${numero} números pares.`);