console.log("\nExemplo 1\n");
const numeros = [5, 50, 80, 1, 2, 3, 36, 8, 7, 11, 15, 22, 27];
const resultado = numeros.reduce((acumulador, valorAtual, indice, array) => {
    console.log(`Índice: ${indice}, Valor Atual: ${valorAtual}, Acumulador: ${acumulador}`);
    return acumulador + valorAtual;
}, 0);
console.log(`Resultado final: ${resultado}`); 

const total = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(total); 


console.log("\nExemplo 2\n");
const pares = numeros.reduce((acumulador, valorAtual) => {
    console.log(`Valor Atual: ${valorAtual}, Acumulador: ${acumulador}`);
    if (valorAtual % 2 === 0) acumulador.push(valorAtual);
    return acumulador;
}, []);
console.log(pares);

const paresEntreTrintaSessenta = numeros.reduce((acumulador, valorAtual) => {
    console.log(`Valor Atual: ${valorAtual}, Acumulador: ${acumulador}`);
    if ((valorAtual % 2 === 0) && (valorAtual > 30 && valorAtual < 60)) acumulador.push(valorAtual);
    return acumulador;
}, []);
console.log(paresEntreTrintaSessenta);


console.log("\nExemplo 3\n");
const dobrados = numeros.reduce((acumulador, valorAtual) => {
    console.log(`Valor Atual: ${valorAtual}, Acumulador: ${acumulador}`);
    acumulador.push(valorAtual * 2);
    return acumulador;
}, []);
console.log(dobrados);


console.log("\nExemplo 4\n");
const pessoas = [
    { nome: 'Letícia', idade: 19 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Wallace', idade: 47 }
];
const maisVelha = pessoas.reduce((acumulador, valorAtual) => {
    console.log(`Valor Atual: ${valorAtual.idade}, Acumulador: ${acumulador.idade}`);
    return acumulador.idade > valorAtual.idade ? acumulador : valorAtual;
});
console.log(maisVelha);


console.log("\nExemplo 5\n");
const somaIdades = pessoas.reduce((acumulador, valorAtual) => acumulador + valorAtual.idade, 0);
console.log(somaIdades);
const concatenarLetrasNomes = pessoas.reduce((acumulador, valorAtual) => acumulador + valorAtual.nome, 0);
console.log(concatenarLetrasNomes);
const somaLetrasNomes = pessoas.reduce((acumulador, valorAtual) => acumulador + valorAtual.nome.length, 0);
console.log(somaLetrasNomes);