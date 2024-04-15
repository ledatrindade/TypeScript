import readline from "readline-sync";

function fizzBuzz(): void {
    let numero: number = Number(readline.question("Digite um numero:"));

  if (numero % 3 === 0 && numero % 5 === 0) {
      console.log("FizzBuzz");
  } 

  else if (numero % 5 === 0) {
      console.log("Buzz");

  } else if  (numero % 3 === 0) {
      console.log("Fizz");

  } else {
      console.log (String(numero));
  }
  }
  fizzBuzz();