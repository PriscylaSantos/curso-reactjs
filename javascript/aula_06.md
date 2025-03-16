
# Array Reduce

Essa aula abordou sobre a função **reduce**, que é usada para reduzir os elementos de um array a um único valor, com base em uma **função acumuladora**. A função `reduce` percorre o array aplicando a operação fornecida e retorna o resultado final, que pode ser um número, objeto, string ou outro tipo de dado.

Acesse o códigos [aqui](codigos/aula_06.js)

## Pontos Principais

- Utilizada para reduzir um array a um único valor.
- Parâmetros da função `reduce`:
  - `acumulador`: Armazena o valor acumulado a cada iteração.
  - `valorAtual`: O valor do elemento atual do array.
  - `índice` (opcional): O índice do elemento atual.
  - `array` (opcional): O array original.
  - `valorInicial` (opcional): Valor inicial do acumulador.

- Somar todos os elementos de um array

```javascript
const numeros = [5, 50, 80, 1];
const total = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(total); // 136
```

- Filtrar números pares

```javascript
const numeros = [5, 50, 80, 1];
const pares = numeros.reduce((acumulador, valorAtual) => {
    if (valorAtual % 2 === 0) acumulador.push(valorAtual);
    return acumulador;
}, []);
console.log(pares); // [50, 80]
```

- Dobrar os valores dos elementos

```javascript
const numeros = [5, 50, 80, 1];
const dobrados = numeros.reduce((acumulador, valorAtual) => {
    acumulador.push(valorAtual * 2);
    return acumulador;
}, []);
console.log(dobrados); // [10, 100, 160, 2]
```

- Encontrar a pessoa mais velha

```javascript
const pessoas = [
    { nome: 'Rosana', idade: 64 },
    { nome: 'Eduardo', idade: 32 },
    { nome: 'Wallace', idade: 50 }
];
const maisVelha = pessoas.reduce((acumulador, valorAtual) => {
    return acumulador.idade > valorAtual.idade ? acumulador : valorAtual;
});
console.log(maisVelha); // { nome: 'Rosana', idade: 64 }
```

- Embora seja possível usar `reduce` para mapear ou filtrar arrays, é mais claro e eficiente usar `map` e `filter` para essas operações específicas.
