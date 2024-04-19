import readline from "readline-sync";

let c0: number[] = [];
let s0: string[] = [];
let h0: number[] = [];

let tH = 0;
let tM = 0;
let somaH = 0;
let somaM = 0;

while (true) {
    let C: number = Number(readline.question("Digite o codigo: "));
    if (C === -11) 
        break;

    let S: string = readline.question("Digite o sexo (M - Masculino | F - Feminino): ");
    let H: number = Number(readline.question("Digite as horas trabalhadas: "));
    
    c0.push(C);
    s0.push(S);
    h0.push(H);

    let sBruto = H * 26.90;

    if (S === 'M') {

        tH++;
        let sLiquido = sBruto - (sBruto * 0.1);
        somaH += sLiquido;


        console.log(`Seu salário bruto é ${sBruto.toFixed(2)} e líquido é ${sLiquido.toFixed(2)}`);

    } else if (S === 'F') {

        tM++;
        let sLiquido = sBruto - (sBruto * 0.06);
        somaM += sLiquido;

        console.log(`Seu salário bruto é ${sBruto.toFixed(2)} e líquido é ${sLiquido.toFixed(2)}`);
    
    } else {

        console.log("Inválido");

    }
}

let mediaSH = somaH / tH;
let mediaSM = somaM / tM;

console.log(`A média dos salários líquidos (${somaH}) dos homens(${tH}) é: ${mediaSH.toFixed(2)}`);
console.log(`A média dos salários líquidos (${somaM}) das mulheres(${tM}) é: ${mediaSM.toFixed(2)}`);
