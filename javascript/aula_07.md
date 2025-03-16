# Filter + Map + Reduce

Essa aula abordou sobre combinar combinar várias operações em arrays.

Acesse o códigos [aqui](codigos/aula_07.js)

- Filtrar números pares com `filter`

```javascript
const numeros = [5, 50, 80, 1, 2, 3, 36, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(n => n % 2 === 0);
console.log(numerosPares);
```

- Dobrar os valores com `map`

```javascript
const dobroDosPares = numerosPares.map(n => n * 2);
console.log(dobroDosPares);
```

- Somar os valores com `reduce`

```javascript
const somaDobroDosPares = dobroDosPares.reduce((acc, n) => acc + n, 0);
console.log(somaDobroDosPares);
```

- Combinando `filter`, `map` e `reduce`

```javascript
const resultado = numeros
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
console.log(resultado);
```
