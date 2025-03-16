# Promises

Essa aula abordou sobre **promises** para lidar com operações assíncronas.

Acesse o códigos [aqui](codigos/aula_11.js)

## Pontos Principais

- **Definição de Promessas**: Promessas representam operações assíncronas que podem ser concluídas com sucesso (resolved) ou falhar (rejected).

```javascript
const minhaPromessa = new Promise((resolve, reject) => {
    // código assíncrono
    if (/* sucesso */) {
        resolve(valor);
    } else {
        reject(erro);
    }
});
```

- Uso de `then` e `catch`
  - `then`: executa quando a promise é resolvida com sucesso e faz a manipulação do valor retornado.
  - `catch`: executa quando a promise tem falhas e faz a captura e tratamento dos erros

```javascript
minhaPromessa
    .then((valor) => {
        console.log('Sucesso:', valor);
    })
    .catch((erro) => {
        console.error('Erro:', erro);
    });
```

- Encadeamento de Promessas

```javascript
minhaPromessa
    .then((valor) => {
        return outraPromessa(valor);
    })
    .then((novoValor) => {
        console.log('Novo Valor:', novoValor);
    })
    .catch((erro) => {
        console.error('Erro:', erro);
    });
```

- Exemplos

```javascript
function espera(mensagem, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensagem);
        }, tempo);
    });
}

espera('Frase 1', 1000)
    .then((resposta) => {
        console.log(resposta);
        return espera('Frase 2', 2000);
    })
    .then((resposta) => {
        console.log(resposta);
        return espera('Frase 3', 3000);
    })
    .then((resposta) => {
        console.log(resposta);
    })
    .catch((erro) => {
        console.error('Erro:', erro);
    });
```
