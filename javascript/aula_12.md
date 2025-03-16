# Métodos para Promises

Essa aula abordou sobre **promises**  e como trabalhar com métodos que facilitam o manuseio de operações assíncronas.

Acesse o códigos [aqui](codigos/aula_12.js)

## Pontos Principais

- **Promise.all**: Recebe um array de promessas e retorna uma única promessa que resolve quando todas as promessas no array forem resolvidas ou rejeitadas.

```javascript
const promises = [
    Promise.resolve('Promise 1'),
    new Promise(resolve => setTimeout(() => resolve('Promise 2'), 3000)),
    new Promise(resolve => setTimeout(() => resolve('Promise 3'), 1000))
];

Promise.all(promises).then(values => console.log(values));
```

- **Promise.race**: Recebe um array de promessas e retorna uma promessa que resolve ou rejeita assim que uma das promessas no array resolver ou rejeitar.

```javascript
const promises = [
    new Promise(resolve => setTimeout(() => resolve('Promise 1'), 3000)),
    new Promise(resolve => setTimeout(() => resolve('Promise 2'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('Promise 3'), 2000))
];

Promise.race(promises).then(value => console.log(value));
```

- **Promise.resolve**: Retorna uma promessa que é resolvida com um valor dado.

```javascript
Promise.resolve('Resolved Value').then(value => console.log(value));
```

- **Promise.reject**: Retorna uma promessa que é rejeitada com um motivo dado.

```javascript
Promise.reject('Rejected Value').catch(reason => console.log(reason));
```

- **Baixar uma página**: Simulação de uma função que baixa uma página e verifica se está em cache.

```javascript
function fetchPage() {
    const isCached = true;
    if (isCached) {
        return Promise.resolve('Página com cache');
    } else {
        return new Promise(resolve => setTimeout(() => resolve('Página baixada'), 3000));
    }
}

fetchPage().then(page => console.log(page));
```
