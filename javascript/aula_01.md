# Arrays - Atribuição via desestruturação (destructuring assignment)

Essa aula abordou a **atribuição via desestruturação** que permite extrair valores de arrays ou objetos e atribuí-los a variáveis de forma mais simples e direta.

Acesse o códigos [aqui](codigos/aula_01.js)

## Pontos Principais

- Permite atribuir valores de um array a variáveis individuais.
- Exemplo: `const [a, b, c] = [1, 2, 3];` atribui 1 a `a`, 2 a `b` e 3 a `c`.

```javascript
const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3
```

- É possível pular valores usando vírgulas: `const [a, , c] = [1, 2, 3];` atribui 1 a `a` e 3 a `c`.

```javascript
const [a, , c] = [1, 2, 3];
console.log(a, c); // 1 3
```

- O operador rest (`...`) pode ser usado para capturar o restante dos valores: `const [a, b, ...restante] = [1, 2, 3, 4];` atribui 1 a `a`, 2 a `b` e `[3, 4]` a `restante`.

```javascript
const [a, b, ...restante] = [1, 2, 3, 4];
console.log(a, b); // 1 2
console.log(restante); // [3, 4]
```

- Permite acessar valores dentro de arrays aninhados.
- Exemplo: `const [[, b], [c]] = [[1, 2], [3]];` atribui 2 a `b` e 3 a `c`.

```javascript
const [[, b], [c]] = [[1, 2], [3]];
console.log(b, c); // 2 3
```

A desestruturação simplifica a atribuição de valores e torna o código mais legível e conciso.

```javascript
const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const [, , terceiroArray] = numeros /// [7, 8, 9]
```
