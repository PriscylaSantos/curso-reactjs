console.log("\nExemplo 1 \n");
const numeros = [10, 20, 30, 40, 50];
for (let valor of numeros) {
    console.log(valor);
}

console.log("\nExemplo 2 \n");
numeros.forEach((valor, índice) => {
    console.log(`Valor: ${valor}, Índice: ${índice}`);
});

console.log("\nExemplo 3 \n");
let total = 0;
numeros.forEach(valor => {
    total += valor;
});
console.log(total);

console.log("\nExemplo 4 \n");
const pessoas = [
    { nome: 'Letícia', idade: 19 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Luiz', idade: 62 },
    { nome: 'Wallace', idade: 47 }
];

pessoas.forEach(pessoa => {
    if (pessoa.idade >= 60) {
        console.log(`${pessoa.nome} tem mais de 60 anos. Já pode se aposentar.`);
    }else{
        console.log(`${pessoa.nome} tem menos de 60 anos.`);
    }
});
console.log();
for (let pessoa of pessoas) {
    if (pessoa.idade >= 30) {
        console.log(`${pessoa.nome} tem mais de 30 anos. Já pode se promovido.`);
    }else{
        console.log(`${pessoa.nome} tem menos de 30 anos.`);
    }
}