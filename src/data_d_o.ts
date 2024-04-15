import readline from "readline-sync";

function criaObjeto(dataString: string): { dia: number, mes: number, ano: number } {
    const [dia, mes, ano] = dataString.split('/').map(Number);
    return { dia, mes, ano };
}

function tela() {
// Exemplo de uso:
const data: string = String(readline.question("Digite uma data (dia/mes/ano):"));
const objetoData = criaObjeto(data);
console.log(`dia: ${objetoData.dia}, mes: ${objetoData.mes}, ano: ${objetoData.ano}`); // Saída: { dia: 9, mes: 4, ano: 2024 }

}
tela();