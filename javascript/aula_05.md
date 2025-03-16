# Array Map

Essa aula abordou sobre a função **map**, que é usada para transformar os elementos de um array com base em uma **função específica**. A função `map` retorna um novo array contendo os elementos modificados de acordo com a operação fornecida, sem alterar o array original.

Acesse o códigos [aqui](codigos/aula_05.js)

## Pontos Principais

- Uso básico do map

```javascript
const numeros = [5, 50, 80];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro); // [10, 100, 160]
```

- A função `map` é usada para criar um novo array a partir de um array existente, aplicando uma função a cada um dos seus elementos.
- Diferente do `filter`, o `map` sempre retorna um array do mesmo tamanho que o original, mas com os valores alterados.
- O `map` pode ser usado para modificar objetos dentro de um array.
- É importante lembrar que objetos são passados por **referência**, então alterações no objeto dentro do `map` afetam o objeto original.

```javascript
const pessoas = [
    { nome: 'Luiz', idade: 30 },
    { nome: 'Maria', idade: 25 }
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes); // ['Luiz', 'Maria']
const idades = pessoas.map(obj => obj.idade);
console.log(idades);// [62, 23, 55, 19, 32, 47]
```

```javascript
const pessoas = [
    { nome: 'Luiz', idade: 30 },
    { nome: 'Maria', idade: 25 }
];
const pessoasComId = pessoas.map((obj, indice) => {
    obj.id = indice + 1;
    return obj;
});
console.log(pessoasComId); //   [ { nome: 'Luiz', idade: 30, id: 1 }, { nome: 'Maria', idade: 25, id: 2 } ]
console.log(pessoas);// [ { nome: 'Luiz', idade: 30, id: 1 }, { nome: 'Maria', idade: 25, id: 2 } ]
```

- Para evitar modificar o objeto original, crie uma cópia do objeto dentro do `map`.

```javascript
const pessoas = [
    { nome: 'Luiz', idade: 30 },
    { nome: 'Maria', idade: 25 }
];
const pessoasComId = pessoas.map((obj, indice) => {
    const novoObj = { ...obj };
    novoObj.id = indice + 1;
    return novoObj;
});
console.log(pessoasComId); // [ { nome: 'Luiz', idade: 30, id: 1 }, { nome: 'Maria', idade: 25, id: 2 } ]
console.log(pessoas); // [ { nome: 'Luiz', idade: 30 }, { nome: 'Maria', idade: 25 } ]
```
