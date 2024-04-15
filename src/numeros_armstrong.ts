import readline from "readline-sync";

function isArmstrongNumber(num: number): boolean {
    // Armazena o número original
    const originalNum = num;
  
    // Número restante
    let remaining = num;
  
    // Soma dos dígitos elevados ao seu número de dígitos
    let sum = 0;
  
    // Contagem de dígitos
    let digitCount = 0;
  
    // Conta os dígitos
    while (remaining > 0) {
      remaining = Math.floor(remaining / 10);
      digitCount++;
    }
  
    // Restaura o número original
    remaining = originalNum;
  
    // Calcula a soma dos dígitos elevados ao seu número de dígitos
    while (remaining > 0) {
      // Extrai o dígito
      const digit = remaining % 10;
  
      // Soma o dígito elevado ao seu número de dígitos
      sum += Math.pow(digit, digitCount);
  
      // Divide o número restante por 10 para obter o próximo dígito
      remaining = Math.floor(remaining / 10);
    }
  
    // Retorna true se a soma for igual ao número original
    return sum === originalNum;
  }

function tela() {
const number: number= Number(readline.question("Digite um numero: ")); // número de Armstrong

if (isArmstrongNumber(number)) {

    console.log(`Este eh um numero de Armstrong!`);

} else {

    console.log(`Este nao eh um numero de Armstrong!`);

}

}

tela();