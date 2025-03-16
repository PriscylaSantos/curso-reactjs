console.log("\nExemplo 1\n");
const numeros = [5, 50, 80];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro); 


console.log("\nExemplo 2\n");
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
const idades = pessoas.map(obj => obj.idade);
console.log(idades);
const objetoDeIdades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(objetoDeIdades);


console.log("\nExemplo 3\n");
const pessoasDois = pessoas.map(obj => ({ ...obj }));
const pessoasDoisComId = pessoasDois.map((obj, indice) => {
    obj.id = indice + 1;
    return obj;
});
console.log(pessoasDoisComId); 
console.log(pessoasDois); 
console.log(pessoas);


console.log("\nExemplo 4\n");
const pessoasComId = pessoas.map((obj, indice) => {
    const novoObj = { ...obj };
    novoObj.id = indice + 1;
    return novoObj;
});
console.log(pessoasComId); 
console.log(pessoas); 