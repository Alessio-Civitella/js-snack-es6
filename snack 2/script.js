// Array di squadre

const squadre = [
    {nome: 'Lazio', punti: 0, fallisubiti: 0},
    {nome: 'Roma', punti: 0, fallisubiti: 0},
    {nome: 'Inter', punti: 0, fallisubiti: 0}
]

// Funzione per generare numeri randomici

function numeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadre.forEach(squadra => {
    squadra.punti = numeriCasuali(1, 50);
    squadra.fallisubiti = numeriCasuali(1, 30);
});

const nomiefalli = squadre.map(squadra => {
    return {nome: squadra.nome, fallisubiti: squadra.fallisubiti};
});

console.log('squadre con punti e falli randomici:', squadre);
console.log('Nomi e falli subiti', nomiefalli);



