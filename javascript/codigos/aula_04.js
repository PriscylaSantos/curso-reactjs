console.log("\nExemplo 1\n");
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados); 


console.log("\nExemplo 2\n");
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];
const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5);
console.log("Pessoas com nome grande:", pessoasComNomeGrande);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(pessoa => pessoa.idade > 50);
console.log("Pessoas acima dos 50 anos:", pessoasComMaisDeCinquentaAnos);

const acimaDeCinquentaENomeGrande = pessoas.filter(
    pessoa => pessoa.idade > 50 && pessoa.nome.length >= 5
);
console.log("Pessoas com nome grande e acima dos 50 anos:", acimaDeCinquentaENomeGrande);


