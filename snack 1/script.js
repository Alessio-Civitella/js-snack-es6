const bici = [
    { nome: 'bicisport', peso: 20 },
    { nome: 'bicicross', peso: 40 },
    { nome: 'bicimountain', peso: 10 },
    { nome: 'bici', peso: 25 }  
];

let bicileggera = bici[0];

for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < bicileggera.peso) {
        bicileggera = bici[i];
    }
}

console.log('La bici più leggera è:', bicileggera)