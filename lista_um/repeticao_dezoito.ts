
function pParaC(pol: number): number {
    
    return pol * 2.54;
}

function tabelaC(maxP: number): void {

    console.log("Polegadas | Centímetros");
    console.log("-----------------------");

    for (let i = 1; i <= maxP; i++) {

        const centimetros = pParaC(i);
        
        console.log(`${i}         | ${centimetros.toFixed(2)}`);
    }
}

// Exemplo de uso: gerar tabela de conversão de 1 a 10 polegadas
tabelaC(20);
