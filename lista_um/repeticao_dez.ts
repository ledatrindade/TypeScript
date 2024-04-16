import readline from "readline-sync";

// Função para calcular a soma de todos os números inteiros de M até N
function calcularSoma(M: number, N: number): number {
    let soma = 0;
    for (let i = M; i <= N; i++) {
        soma += i;
    }
    return soma;
}

let pares: [number, number][] = [];

while (true) {
    let M: number = Number(readline.question("Digite o valor de M: "));
    let N: number = Number(readline.question("Digite o valor de N: "));

    // Verifica se M é maior ou igual a N, se for, encerra a entrada de pares
    if (M < N) {
        
        pares.push([M, N]);
    
        pares.forEach((par, index) => {
            const soma = calcularSoma(par[0], par[1]);
            console.log(`A soma de todos os números de ${par[0]} até ${par[1]} é: ${soma}`);
        });}
    
    else {
        
        console.log("Programa encerrado");
        break;
    }

    // Adiciona o par [M, N] à lista de pares
    
}
