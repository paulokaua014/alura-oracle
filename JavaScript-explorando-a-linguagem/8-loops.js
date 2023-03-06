console.log(`\n trabanhando com loops`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 19;
const estaAcompanhada = false;
let passagemComprada = false;
const distino = "Salvador";

console.log("\n Destinos Possiveis:");
console.log(listaDeDestinos);

const podeCompar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0
let destinoexiste = false;
while (contador < 3) {

    if (listaDeDestinos[contador] == distino) {
        destinoexiste = true;
        break;
    };
    contador = contador + 1;
};
console.log("destino existe: ", destinoexiste);

if (podeCompar && destinoexiste) {
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro");
};

for (let cont = 0; cont < 3; cont++) {

    if (listaDeDestinos[contador] == distino) {
        destinoexiste = true;
    };
};
