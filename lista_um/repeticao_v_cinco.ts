import readline from "readline-sync";

let c0: number[] = [];
let s0: string[] = [];
let h0: number[] = [];
let bruto: number[] = [];

let totalHomens = 0;
let totalMulheres = 0;
let somaSalariosHomens = 0;
let somaSalariosMulheres = 0;

while (true) {
    let C: number = Number(readline.question("Digite o codigo: "));
    if (C === -11) 
        break;

    let S: string = readline.question("Digite o sexo (M - Masculino | F - Feminino): ");
    let H: number = Number(readline.question("Digite as horas trabalhadas: "));
    
    c0.push(C);
    s0.push(S);
    h0.push(H);

    let salarioBruto = H * 26.90;

    if (S === 'M') {
        totalHomens++;
        somaSalariosHomens += salarioBruto;
        let salarioLiquido = salarioBruto - (salarioBruto * 0.1);
        bruto.push(salarioBruto);
        console.log(`Seu salário bruto é ${salarioBruto.toFixed(2)} e líquido é ${salarioLiquido.toFixed(2)}`);
    } else if (S === 'F') {
        totalMulheres++;
        somaSalariosMulheres += salarioBruto;
        let salarioLiquido = salarioBruto - (salarioBruto * 0.06);
        bruto.push(salarioBruto);
        console.log(`Seu salário bruto é ${salarioBruto.toFixed(2)} e líquido é ${salarioLiquido.toFixed(2)}`);
    } else {
        console.log("Inválido");
    }
}

let mediaSalariosHomens = somaSalariosHomens / totalHomens;
let mediaSalariosMulheres = somaSalariosMulheres / totalMulheres;

console.log(`A média dos salários líquidos dos homens é: ${mediaSalariosHomens.toFixed(2)}`);
console.log(`A média dos salários líquidos das mulheres é: ${mediaSalariosMulheres.toFixed(2)}`);
