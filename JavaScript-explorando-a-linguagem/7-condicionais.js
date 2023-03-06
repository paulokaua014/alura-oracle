console.log(`trabanhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 19;
const estaAcompanhada = false;
const passagemComprda = true;

console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador e Maior de idade");
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("O comprador estar acompanhada");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("voce nao e maior de idade e nao posso vender");
// };

if (idadeComprador >= 18 || estaAcompanhada==true) {
    console.log("Boa Viagem");
    listaDeDestinos.splice(1, 1);   
} else {
    console.log("voce nao e maior de idade e nao posso vender");
};

console.log("Embaque: /n /n");
if(idadeComprador >= 18 && passagemComprda){
    console.log("Boa Vigaem");
}else{
    console.log("Voce nao pode embacar");
};


console.log(listaDeDestinos);
