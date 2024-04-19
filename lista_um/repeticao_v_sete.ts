let Chico: number = 150; 
let cChico: number = 2; 

let Ze: number = 110; 
let cZe: number = 3; 

let anos: number = 0;


while (Ze < Chico) {
    Chico += cChico; 
    Ze += cZe; 
    anos++; 
}

console.log(`Serão necessários ${anos} anos para que Zé seja maior que Chico.`);