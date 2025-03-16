console.log("\nExemplo 1\n");
fala();
function fala() {
        console.log("Estou falando!");
}


console.log("\nExemplo 2\n");
const souUmDado = function() {
        console.log("Sou um dado!");
};
souUmDado();


console.log("\nExemplo 3\n");
function executaFuncao(funcao) {
    console.log(`\nVou executar a função "${funcao.name}"`);
    funcao();
}
executaFuncao(fala);
executaFuncao(souUmDado);


console.log("\nExemplo 4\n");
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
};
funcaoArrow();
executaFuncao(funcaoArrow);


console.log("\nExemplo 5\n");
const objeto = {
    falar: fala,
    cantar: function() {
        console.log("Estou cantando!");
    },
    ler: () => {
        console.log("Estou lendo!");
    }
};
objeto.falar();
objeto.cantar();
objeto.ler();

executaFuncao(objeto.falar);
executaFuncao(objeto.cantar);   
executaFuncao(objeto.ler);