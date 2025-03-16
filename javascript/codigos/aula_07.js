console.log("\nExemplo 1\n");
const numeros = [5, 50, 80, 1, 2, 3, 36, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(n => n % 2 === 0);
console.log(numerosPares);
const dobroDosPares = numerosPares.map(n => n * 2);
console.log(dobroDosPares);
const somaDobroDosPares = dobroDosPares.reduce((acc, n) => acc + n, 0);
console.log(somaDobroDosPares);

console.log("\nExemplo 2\n");
const resultado = numeros.filter(n => n % 2 === 0).map(n => n * 2).reduce((acc, n) => acc + n, 0);
console.log(resultado);

console.log("\nExemplo 3\n");
const pessoas = [
    { nome: 'Letícia', idade: 19 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Wallace', idade: 47 }
];

const concatenaIdadePessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length > 5).map(pessoa => pessoa.idade).reduce((acc, idade) => acc + idade, '');
console.log(concatenaIdadePessoasComNomeGrande);

const somaIdadePessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length > 5).map(pessoa => pessoa.idade).reduce((acc, idade) => acc + idade, 0);
console.log(somaIdadePessoasComNomeGrande);