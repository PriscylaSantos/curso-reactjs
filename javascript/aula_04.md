# Array Filter

Essa aula abordou sobre a função **filter**, que é usada para filtrar elementos de um array com base em uma **condição específica**. A função `filter` retorna um novo array contendo apenas os elementos que atendem à condição fornecida.

Acesse o códigos [aqui](codigos/aula_04.js)

## Pontos Principais

- Uso básico do filter

```javascript
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados); // [50, 80, 11, 15, 22, 27]
```

- A função `filter` não modifica o array original, ela retorna um novo array.
- A função de callback passada para o `filter` deve retornar `true` para incluir o elemento no novo array e `false` para excluí-lo.
- É possível encadear várias funções de array como `filter`, `map` e `reduce` para operações mais complexas.
- Filter com objetos

```javascript
const pessoas = [
        { nome: 'Luiz', idade: 62 },
        { nome: 'Maria', idade: 23 },
        { nome: 'Eduardo', idade: 55 },
        { nome: 'Letícia', idade: 19 },
        { nome: 'Rosana', idade: 32 },
        { nome: 'Wallace', idade: 47 }
];
const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5);
console.log(pessoasComNomeGrande);
// [{ nome: 'Maria', idade: 23 }, { nome: 'Eduardo', idade: 55 }, { nome: 'Letícia', idade: 19 }, { nome: 'Rosana', idade: 32 }, { nome: 'Wallace', idade: 47 }]
```

```javascript
const pessoasNomeTerminaComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeTerminaComA);
// [{ nome: 'Maria', idade: 23 }, { nome: 'Letícia', idade: 19 }, { nome: 'Rosana', idade: 32 }]
```
