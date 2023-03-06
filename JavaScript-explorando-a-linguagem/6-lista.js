console.log(`trabanhando com listas`);
// const salvador =`Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDeJaneiro =`Rio de Janeiro`;
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`)//adicionado um intem 
console.log("Destinos Possiveis:")
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[2], listaDeDestinos[0]);