import readline from "readline-sync";

function apuraVotacao(votos: number[]): { vencedor: number } {
    // Inicializa contadores para cada candidato
    let contagem1 = 0;
    let contagem2 = 0;
    let contagem3 = 0;

    // Itera sobre os votos e incrementa os contadores correspondentes
    for (let voto of votos) {
        switch (voto) {
            case 1:
                contagem1++;
                break;
            case 2:
                contagem2++;
                break;
            case 3:
                contagem3++;
                break;
            default:
                console.log("Voto inválido: ", voto);
        }
    }  
    
    let vencedor = 0;
    // Verifica quem teve mais votos
    if (contagem1 > contagem2 && contagem1 > contagem3)
        vencedor = 1;
    else if (contagem2 > contagem1 && contagem2 > contagem3)
        vencedor = 2;
    else if (contagem3 > contagem1 && contagem3 > contagem2)
        vencedor = 3;
    else
        vencedor = 0;

    return { vencedor: vencedor };
}

// Função para converter a string de votos em uma matriz de números
function parseVotos(input: string): number[] {
    // Remove os colchetes "[" e "]" e divide a string pelos separadores ","
    const numeros = input.replace("[", "").replace("]", "").split(",");
    // Mapeia cada número convertendo-o para o tipo number
    return numeros.map(numero => parseInt(numero.trim()));
}

// Função principal para interação com o usuário
function tela() {
    const votosI: string = String(readline.question("Digite os votos: "));
    const votos: number[] = parseVotos(votosI);
    const resultado = apuraVotacao(votos);

    if (resultado.vencedor !== 0) {
        console.log(`Vencedor: ${resultado.vencedor}`);
    } else {
        console.log(`Empate`);
    }
}

tela(); // Chamada da função principal
